# Google Analytics & Conversion Tracking Setup

本文档说明如何配置谷歌统计和转化追踪功能。

## 📊 Google Analytics 配置

### 1. 统计代码已集成

谷歌统计代码已添加到 `index.html` 文件中，包括：

```javascript
gtag('config', 'AW-17451537206');  // Google Ads
gtag('config', 'G-22CGE5N4MF');     // Google Analytics
```

这些代码会在页面加载时自动执行。

### 2. 转化追踪函数

`gtag_report_conversion(url)` 函数已实现，用于：
- 触发 'Add' 事件
- 触发转化事件（send_to: 'AW-17451537206/LYOVCPPx1cEbELamxYFB'）
- 完成后跳转到指定 URL

## 🔄 重定向流程

### 工作原理

1. **用户输入邮箱** → 点击"立即免费获取"
2. **显示加载动画** → 2秒加载状态
3. **显示转化页面** → 展示价值主张和最终CTA
4. **点击"立即开始探索"**:
   - 调用 `/ajax.php` 获取重定向链接
   - 使用 `gtag_report_conversion()` 追踪转化
   - 自动跳转到目标页面

### ajax.php 文件配置

在 `public/ajax.php` 中配置您的重定向逻辑：

```php
<?php
header('Content-Type: text/plain');
header('Access-Control-Allow-Origin: *');

// 处理用户邮箱
$email = $_POST['email'] ?? '';

// 保存到数据库或邮件服务
// ...

// 返回重定向URL
echo 'https://your-destination-url.com';
?>
```

### 前端实现细节

在 `src/components/EmailModal.jsx` 中：

```javascript
const handleFinalAction = async () => {
  setIsRedirecting(true);

  // 调用 ajax.php 获取链接
  const response = await fetch('/ajax.php', {
    method: 'POST',
    body: `email=${encodeURIComponent(email)}`
  });

  const url = await response.text();

  // 使用 gtag 追踪转化并跳转
  if (typeof window.gtag_report_conversion === 'function') {
    window.gtag_report_conversion(url);
  }
};
```

## 📈 追踪的事件

### 1. 页面浏览
- 自动追踪所有页面浏览
- 配置ID: `G-22CGE5N4MF`

### 2. Add 事件
- 当用户点击最终转化按钮时触发
- 事件类型: 'Add'

### 3. 转化事件
- 转化ID: `AW-17451537206/LYOVCPPx1cEbELamxYFB`
- 在用户完成注册流程时触发
- 包含回调函数处理页面跳转

## 🔧 部署说明

### 1. 确保 ajax.php 可访问

如果使用静态托管（如Vercel、Netlify），您需要：

**方案A: 使用 Serverless Function**
- Vercel: 创建 `api/ajax.js`
- Netlify: 创建 `netlify/functions/ajax.js`

**方案B: 使用外部API**
- 修改 `fetch('/ajax.php')` 为完整URL
- 例如: `fetch('https://your-api.com/ajax')`

### 2. 更新重定向URL

在 `ajax.php` 或对应的 serverless function 中设置正确的重定向URL。

### 3. 测试转化追踪

1. 打开浏览器开发者工具 → Network
2. 填写邮箱并提交
3. 查看是否有以下请求：
   - `gtag/js` (统计脚本)
   - `collect` (数据收集)
   - `ajax.php` (获取重定向链接)

## 🎯 最佳实践

1. **监控转化率**: 在 Google Analytics 中设置转化目标
2. **A/B 测试**: 测试不同的转化文案和按钮样式
3. **邮箱验证**: 在 ajax.php 中添加邮箱格式验证
4. **错误处理**: 确保网络错误时有友好提示
5. **隐私合规**: 添加适当的隐私政策和GDPR合规说明

## 📝 环境变量

如果需要配置谷歌统计ID：

```env
VITE_GA_TRACKING_ID=G-22CGE5N4MF
VITE_GA_ADS_ID=AW-17451537206
```

然后在代码中引用：

```javascript
gtag('config', import.meta.env.VITE_GA_TRACKING_ID);
```

## 🐛 常见问题

### Q: 转化没有追踪到？
A: 检查：
1. gtag.js 是否正确加载
2. 转化ID是否正确
3. 浏览器控制台是否有错误

### Q: ajax.php 返回 404？
A: 确保：
1. 文件在 `public/` 目录下
2. 服务器支持 PHP
3. 或使用 serverless function 替代

### Q: 跳转没有发生？
A: 检查：
1. ajax.php 是否返回有效URL
2. gtag_report_conversion 是否正确调用
3. 浏览器控制台是否有错误信息

## 📞 技术支持

如需帮助，请检查：
- Google Analytics 文档
- Google Ads 转化追踪指南
- 浏览器开发者工具 Network 和 Console 面板
