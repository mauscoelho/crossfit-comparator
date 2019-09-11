import React from "react";
import { Layout } from "antd";
import { Main } from "./components/Main";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <h1 style={{ color: "white" }}>Crossfit Comparator {"🏋️‍♂️"}</h1>
      </Header>
      <Content style={{ display: "flex", flex: 1 }}>
        <Main />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Made with {"♥"} by @mauscoelho
      </Footer>
    </Layout>
  );
};

export default App;
