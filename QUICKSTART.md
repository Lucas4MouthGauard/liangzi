# 🚀 快速启动指南

欢迎使用薛定谔的猫量子网站！这个指南将帮助你在几分钟内启动项目。

## 📋 前置要求

- **Node.js**: 版本 16.0.0 或更高
- **npm**: 通常随Node.js一起安装
- **现代浏览器**: Chrome, Firefox, Safari, Edge

## ⚡ 一键启动

### macOS/Linux 用户
```bash
./start.sh
```

### Windows 用户
```bash
start.bat
```

## 🔧 手动启动

如果你更喜欢手动操作，请按照以下步骤：

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 打开浏览器
访问 [http://localhost:3000](http://localhost:3000)

## 🎯 项目特性

- ✨ **现代化设计**: 采用最新的Web技术
- 🌟 **量子物理主题**: 深入浅出地解释复杂概念
- 🎮 **互动演示**: 可交互的量子计算演示
- 📱 **响应式设计**: 完美支持各种设备
- 🎨 **丰富动画**: CSS动画和Framer Motion
- 🔬 **科技感UI**: 科幻风格的界面

## 📁 项目结构

```
liangzi/
├── src/                    # 源代码
│   ├── components/         # React组件
│   ├── App.tsx            # 主应用
│   └── main.tsx           # 入口文件
├── public/                 # 静态资源
├── package.json            # 项目配置
├── vite.config.ts          # Vite配置
└── README.md               # 详细文档
```

## 🚀 可用的命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览构建结果
npm run lint         # 代码检查
npm run format       # 代码格式化
```

## 🌐 访问网站

启动成功后，你可以在以下地址访问网站：

- **本地开发**: http://localhost:3000
- **网络访问**: http://[你的IP]:3000

## 🔍 故障排除

### 端口被占用
如果3000端口被占用，Vite会自动选择下一个可用端口。

### 依赖安装失败
```bash
# 清除缓存
npm cache clean --force

# 删除node_modules并重新安装
rm -rf node_modules package-lock.json
npm install
```

### 浏览器兼容性
确保使用现代浏览器，支持ES2020+特性。

## 📚 学习资源

- [量子力学基础](https://en.wikipedia.org/wiki/Quantum_mechanics)
- [薛定谔的猫](https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat)
- [量子纠缠](https://en.wikipedia.org/wiki/Quantum_entanglement)

## 🤝 获取帮助

如果遇到问题：

1. 检查控制台错误信息
2. 确认Node.js版本符合要求
3. 查看README.md获取详细文档
4. 提交Issue描述问题

---

**享受探索量子世界的奇妙之旅！** 🚀⚛️
