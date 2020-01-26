import React from "react";
import useFetch from "fetch-suspense";
import { Card, Avatar, Collapse, Divider, Tag, Descriptions } from "antd";

const { Panel } = Collapse;

function FollowingAthlete({ id }) {
  const athlete = useFetch(
    `https://cf-comp-proxy.herokuapp.com/https://games.crossfit.com/competitions/api/v1/athlete/${id}`
  );

  return (
    <Card style={{ marginBottom: 4 }}>
      <Card.Meta
        avatar={<Avatar src={athlete.profilePicS3key} />}
        title={athlete.competitorName}
      />
      <Divider />
      <Collapse defaultActiveKey={['0']}>
        {athlete.stats.open.map((open, index) => (
          <Panel header={open.year} key={index}>
            <div style={{ display: 'flex', flex: 1, }}>
              {open.worldWide.scores.map(score => (
                <div>
                  <Descriptions title={`WOD ${score.ordinal}`} column={1}>
                    <Descriptions.Item label="Score">{score.scoreDisplay}</Descriptions.Item>
                    <Descriptions.Item label="Rank">{score.rank}</Descriptions.Item>
                  </Descriptions>
                  {score.scaled === "0" ? <Tag color="blue">RX</Tag> : <Tag color="red">Scale</Tag>}
                </div>
              ))}
            </div>
          </Panel>
        ))}
      </Collapse>
    </Card>
  );
}

export default FollowingAthlete;
