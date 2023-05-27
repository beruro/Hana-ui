# Hana-ui

## 介绍

一个基于「 React 」框架的个性化 UI 组件库

## 安装

### 使用 npm 安装

`$ npm install hanayi-ui`

### 使用 yarn 安装

`$ yarn add hanayi-ui`

## 示例

### 1. 引入样式

在`index.tsx(.jsx)`中：

```js
import "hanayi-ui/dist/index.css";
```

### 2. 使用组件

```js
import React from "react";
import { Button } from "hanayi-ui";

const App = () => (
  <>
    <Button btnType="primary" size="lg">
      CLICK ME
    </Button>
  </>
);
```

### 按需加载

`violet-design` 默认支持基于 ES modules 的 tree shaking。

### TypeScript

`violet-design`使用 TypeScript 进行书写并提供了完整的定义文件。

## 链接

- [文档站]
- [组件库]
<!--
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
