import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as LayoutAntd } from "antd";
import CustomTable from "../Table";
import Draggable from "../Draggable";

const { Content, Sider } = LayoutAntd;

function LayoutMain() {
  const resizableRef = React.useRef(null)

  return (
    <LayoutAntd>
      <Content style={{ padding: "0 50px" }}>
        <LayoutAntd
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider
            ref={resizableRef}
            id="Resizable"
            className="site-layout-background"
            width="30%"
            background={"#fff"}
          >
            <CustomTable />
            <Draggable  resizableRef={resizableRef}/>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </LayoutAntd>
      </Content>
    </LayoutAntd>
  );
}

export default LayoutMain;
