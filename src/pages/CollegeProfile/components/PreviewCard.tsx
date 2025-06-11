import React from 'react';
import { Card, Typography, Space, Avatar, Divider, Button } from 'antd';
import { useAppSelector } from '../../../hooks';

const { Title, Paragraph, Text } = Typography;

interface Props {
  onPrev: () => void;
}

const PreviewCard: React.FC<Props> = ({ onPrev }) => {
  const { basicInfo, deanMessage, coreCompetencies, brandColors } = useAppSelector(
    (state) => state.collegeProfile
  );

  return (
    <Card
      title="实时预览"
      style={{
        position: 'sticky',
        top: 24,
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* 基础信息预览 */}
        <div>
          <Title level={4}>{basicInfo.fullName}</Title>
          <Text type="secondary">{basicInfo.slogan}</Text>
          {basicInfo.logo && (
            <div style={{ marginTop: 16 }}>
              <Avatar
                src={basicInfo.logo}
                size={64}
                style={{ backgroundColor: brandColors.primary }}
              />
            </div>
          )}
        </div>

        <Divider />

        {/* 院长寄语预览 */}
        {deanMessage.message && (
          <div>
            <Title level={4}>院长寄语</Title>
            <Space align="start">
              {deanMessage.photo && (
                <Avatar
                  src={deanMessage.photo}
                  size={64}
                  style={{ backgroundColor: brandColors.primary }}
                />
              )}
              <div>
                <Text strong>{deanMessage.name}</Text>
                <br />
                <Text type="secondary">{deanMessage.title}</Text>
                <Paragraph style={{ marginTop: 8 }}>{deanMessage.message}</Paragraph>
              </div>
            </Space>
          </div>
        )}

        <Divider />

        {/* 核心竞争力预览 */}
        {coreCompetencies.history && (
          <div>
            <Title level={4}>核心竞争力</Title>
            <Space direction="vertical" size="middle">
              <div>
                <Text strong>历史与文化沉淀</Text>
                <Paragraph>{coreCompetencies.history}</Paragraph>
              </div>
              <div>
                <Text strong>学科与科研实力</Text>
                <Paragraph>{coreCompetencies.academic}</Paragraph>
              </div>
              <div>
                <Text strong>师资队伍概况</Text>
                <Paragraph>{coreCompetencies.faculty}</Paragraph>
              </div>
              <div>
                <Text strong>学生培养特色</Text>
                <Paragraph>{coreCompetencies.studentLife}</Paragraph>
              </div>
              <div>
                <Text strong>校友网络与成就</Text>
                <Paragraph>{coreCompetencies.alumni}</Paragraph>
              </div>
            </Space>
          </div>
        )}
      </Space>
      <Button onClick={onPrev} style={{ marginTop: 24 }}>
        上一步
      </Button>
    </Card>
  );
};

export default PreviewCard;
