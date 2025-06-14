# 院易宣 - 高校学院招生宣传平台

## 项目简介

"院易宣"是一款专为高校学院单位设计的智能化招生宣传内容制作与管理SaaS平台。本平台旨在解决当前学院层面招生宣传工作中普遍存在的内容策划难、视觉设计不专业、宣传效率低、缺乏有效互动等问题。

## 核心功能

- 🎯 **智能内容创作**：基于AI辅助的招生宣传文案生成
- 🎨 **专业视觉设计**：丰富的模板库和简易编辑器
- 📊 **数据洞察**：宣传效果分析和优化建议
- 🤝 **互动答疑**：智能FAQ和在线问答系统
- 📱 **活动管理**：招生宣传活动全流程管理

## 技术栈

- 前端框架：React 18
- UI组件库：Ant Design 5.x
- 路由管理：React Router 6
- 状态管理：React Context
- 代码规范：ESLint + Prettier
- 开发语言：TypeScript

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装步骤

1. 克隆项目

```bash
git clone https://github.com/Rbmmmm/college-easy-promo
cd college-easy-promo
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm start
```

4. 构建生产版本

```bash
npm run build
```

### 在其他设备上访问

当您通过 `npm start` 启动开发服务器后，默认情况下，它只能通过 `localhost` 或 `127.0.0.1` 在本机访问。如果您希望在同一局域网下的其他设备（如手机、平板）上预览应用，请按以下步骤操作：

1.  **查找本机IP地址**:
    *   **在 macOS 或 Linux 上**: 打开终端，输入 `ifconfig | grep "inet "` 或 `ip addr show | grep "inet "`，找到您的局域网IP地址（通常以 `192.168.` 开头）。
    *   **在 Windows 上**: 打开命令提示符（CMD），输入 `ipconfig`，找到“无线局域网适配器 WLAN”或“以太网适配器”下的“IPv4 地址”。

2.  **修改启动脚本**:
    打开 `package.json` 文件，找到 `scripts` 部分的 `start` 命令，并添加 `--host 0.0.0.0` 参数。这会让开发服务器监听所有可用的网络接口。

    ```json
    "scripts": {
      "start": "react-scripts start --host 0.0.0.0",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    ```
    *注意：Create React App 项目可能需要您直接修改启动脚本或使用 cross-env 等工具。如果上述方法不适用，请参考您项目的具体配置。*

3.  **访问应用**:
    在您的其他设备上，打开浏览器，输入 `http://<您的本机IP地址>:3000` （请将 `<您的本机IP地址>` 替换为您在第一步中找到的实际IP地址）。

4.  **防火墙设置**:
    请确保您的电脑防火墙没有阻止端口 `3000` 的入站连接。如有必要，请为 Node.js 或您的终端应用添加入站规则。

## 项目结构

```
college-easy-promo/
├── src/
│   ├── components/     # 公共组件
│   ├── pages/         # 页面组件
│   ├── layouts/       # 布局组件
│   ├── hooks/         # 自定义Hooks
│   ├── utils/         # 工具函数
│   ├── assets/        # 静态资源
│   └── App.tsx        # 应用入口
├── public/            # 公共资源
└── package.json       # 项目配置
```

## 联系方式

- 项目维护者：任北鸣
- 邮箱：renbeiming@outlook.com
