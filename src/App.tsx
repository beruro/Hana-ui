// export { default as Button } from "./components/Button";
import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
library.add(fas);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-up" theme="primary" size="10x" />
        {/* <FontAwesomeIcon icon={faCoffee} size="10x" /> */}
        <Menu
          defaultIndex="0"
          onSelect={(index) => {
            alert(index);
          }}
          mode="vertical"
          defaultOpenSubMenus={["2"]}
        >
          <MenuItem>cool link1</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>down1</MenuItem>
            <MenuItem>我是下拉菜单1</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
          {/* <li></li> */}
        </Menu>
        <Button className="fish">Common Button</Button>
        <Button disabled>Disable Button</Button>
        <Button btnType="link" href="www.baidu.com" target="_blank">
          Juejin Link
        </Button>
        <Button btnType="primary" size="lg">
          Large Primary
        </Button>
        <Button btnType="danger" size="sm">
          Small Danger
        </Button>
        <Button disabled btnType="link">
          Disabled Link
        </Button>
        <div>i am a fish</div>
      </header>
    </div>
  );
}

export default App;
