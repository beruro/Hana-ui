// export { default as Button } from "./components/Button";
// import React from "react";
// import ReactDOM from "react-dom/client";

// // import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import './styles/index.scss'
//my add
import "./styles/index.scss";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

library.add(fas);

export { default as Button } from "./components/Button";
export { default as Menu } from "./components/Menu";
export { default as AutoComplete } from "./components/AutoComplete";
export { default as Icon } from "./components/Icon";
export { default as Input } from "./components/Input";
export { default as Progress } from "./components/Progress";
export { default as Transition } from "./components/Transition";
export { default as Upload } from "./components/Upload";
export { default as Tabs } from "./components/Tabs";
export { default as Alert } from "./components/Alert";

export { default as Select } from "./components/Select";
export { default as Form } from "./components/Form";
export { default as Switch } from "./components/Switcher";
