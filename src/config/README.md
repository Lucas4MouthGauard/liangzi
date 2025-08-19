# 品牌配置说明

## 概述
`brand.ts` 文件用于集中管理网站的品牌信息，包括名称、链接、图片等。通过修改这个文件，可以快速更换整个网站的品牌标识。

## 配置项说明

### 基本信息
- `name`: 品牌名称，会显示在导航栏、页脚等位置
- `description`: 品牌描述
- `title`: 网站标题

### 社交媒体链接
- `twitter`: Twitter/X 链接
- `github`: GitHub 链接  
- `email`: 邮箱链接

### 购买功能
- `enabled`: 是否启用购买功能
- `url`: 购买链接地址
- `text`: 购买按钮显示文本

### 图片资源
- `logo`: 主要品牌图片路径
- `favicon`: 网站图标路径

### 版权信息
- `copyright`: 版权声明中的品牌名称

## 使用方法

1. 修改 `brand.ts` 文件中的相应配置项
2. 保存文件后，网站会自动使用新的配置
3. 如需更换图片，请将新图片放在 `public/` 目录下，并更新 `images` 配置

## 示例

```typescript
// 更换品牌名称
name: 'NewBrand',

// 更换Twitter链接
social: {
  twitter: 'https://x.com/NewBrand',
  // ...其他配置
}

// 启用购买功能
buy: {
  enabled: true,
  url: 'https://example.com/buy',
  text: '立即购买'
}
```

## 注意事项

- 修改配置后无需重启开发服务器
- 图片路径必须以 `/` 开头，表示从 `public/` 目录开始
- 所有文本内容支持中英文
