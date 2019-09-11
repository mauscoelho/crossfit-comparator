import React from "react";
import { Button, Card } from "antd";

const Athlete = ({ item, onFollow }) => (
  <Card
    style={{ marginBottom: 4 }}
    size="small"
    title={item.name}
    extra={
      <Button type="link" onClick={() => onFollow(item.id)}>
        Follow
      </Button>
    }
  >
    {item.affiliate}
  </Card>
);

export default Athlete;
