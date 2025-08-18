# 薛定谔的猫 - 量子纠缠主题网站

一个充满科技感和meme元素的现代化量子物理主题网站，专注于薛定谔的猫思想实验和量子纠缠概念的教育与展示。

## 🌟 特性

- **现代化设计**: 采用最新的Web技术和设计趋势
- **量子物理主题**: 深入浅出地解释复杂的量子概念
- **互动演示**: 可交互的量子计算演示
- **响应式设计**: 完美支持各种设备尺寸
- **动画效果**: 丰富的CSS动画和Framer Motion动画
- **科技感UI**: 科幻风格的界面设计

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **动画库**: Framer Motion
- **3D图形**: Three.js + React Three Fiber
- **图标**: Lucide React
- **样式**: CSS3 + CSS变量
- **字体**: Orbitron (科技感) + Inter (可读性)

## 📁 项目结构

```
src/
├── components/          # React组件
│   ├── Header.tsx      # 网站头部导航
│   ├── Hero.tsx        # 英雄区域
│   ├── QuantumTheory.tsx # 量子理论介绍
│   ├── SchrodingerCat.tsx # 薛定谔的猫实验
│   ├── Entanglement.tsx # 量子纠缠介绍
│   ├── InteractiveDemo.tsx # 互动演示
│   ├── Footer.tsx      # 网站底部
│   └── QuantumParticles.tsx # 量子粒子背景
├── App.tsx             # 主应用组件
├── main.tsx            # 应用入口
├── index.css           # 全局样式
└── App.css             # 应用样式
```

## 🎯 主要功能

### 1. 量子理论介绍
- 量子叠加概念
- 观测效应解释
- 不确定性原理
- 量子纠缠基础

### 2. 薛定谔的猫实验
- 交互式思想实验
- 实时状态变化
- 量子态坍缩演示

### 3. 量子纠缠展示
- 粒子纠缠可视化
- 贝尔态演示
- 应用场景介绍

### 4. 互动演示
- 量子电路模拟
- 量子门操作
- 测量结果展示

## 🛠️ 安装和运行

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发模式
```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 预览构建结果
```bash
npm run preview
# 或
yarn preview
```

## 🎨 设计特色

### 色彩方案
- **主色调**: 量子蓝 (#00d4ff)
- **辅助色**: 量子粉 (#ff00ff)
- **强调色**: 量子黄 (#ffff00)
- **背景色**: 深空黑 (#0a0a0a)

### 字体选择
- **标题字体**: Orbitron (科技感)
- **正文字体**: Inter (可读性)

### 动画效果
- 量子粒子浮动
- 波函数坍缩
- 量子态转换
- 响应式交互

## 📱 响应式支持

- **桌面端**: 1200px+
- **平板端**: 768px - 1199px
- **移动端**: 320px - 767px

## 🔧 自定义配置

### 修改主题色彩
在 `src/index.css` 中修改CSS变量：
```css
:root {
  --quantum-primary: #00d4ff;
  --quantum-secondary: #ff00ff;
  --quantum-accent: #ffff00;
  /* ... */
}
```

### 添加新的量子概念
在相应的组件中添加新的内容块，保持一致的样式规范。

## 📚 学习资源

- [量子力学基础](https://en.wikipedia.org/wiki/Quantum_mechanics)
- [薛定谔的猫](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat)
- [量子纠缠](https://en.wikipedia.org/wiki/Quantum_entanglement)
- [量子计算](https://en.wikipedia.org/wiki/Quantum_computing)

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发规范
- 使用TypeScript进行类型检查
- 遵循React Hooks最佳实践
- 保持代码风格一致
- 添加适当的注释和文档

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- 感谢所有为量子物理发展做出贡献的科学家
- 感谢开源社区提供的优秀工具和库
- 感谢所有用户的支持和反馈

---

**注意**: 本网站仅用于教育和科普目的，不构成任何科学建议。量子物理概念的解释基于当前的科学理解，可能存在简化或近似。
