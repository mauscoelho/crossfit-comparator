import React from "react";
import { Layout } from "antd";
import { AthletesView } from "./components/AthletesView";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <h1 style={{ color: "white" }}>Crossfit Comparator {"🏋️‍♂️"}</h1>
      </Header>
      <Content>
        <AthletesView />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Made with {"♥"} by @mauscoelho
      </Footer>
    </Layout>
  );
};

export default App;
