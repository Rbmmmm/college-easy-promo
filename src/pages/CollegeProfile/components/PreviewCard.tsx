import React from 'react';
import { Card, Typography, Space, Avatar, Divider, Row, Col, Tag } from 'antd';
import { useAppSelector } from '../../../hooks';

const { Title, Paragraph, Text } = Typography;

const renderCompetency = (label: string, value: string) =>
  value ? (
    <div>
      <Text strong>{label}</Text>
      <Paragraph>{value}</Paragraph>
    </div>
  ) : null;

const PreviewCard: React.FC = () => {
  const profile = useAppSelector((state) => state.collegeProfile);
  const { basicInfo, deanMessage, coreCompetencies, brandColors } = profile;

  const cardStyle: React.CSSProperties = {
    border: `2px solid ${brandColors.primary}`,
    borderRadius: '12px',
    boxShadow: `0 8px 24px rgba(0,0,0,0.1)`,
    backgroundColor: '#fdfdfd',
    position: 'sticky',
    top: 24,
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: brandColors.primary,
    color: '#fff',
    padding: '20px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center',
  };

  return (
    <Card style={cardStyle} bodyStyle={{ padding: 0 }}>
      <div style={headerStyle}>
        {basicInfo.logo && (
          <Avatar src={basicInfo.logo} size={80} style={{ border: '3px solid #fff' }} />
        )}
        <Title level={3} style={{ color: '#fff', marginTop: 10, marginBottom: 0 }}>
          {basicInfo.fullName || '学院全称'}
        </Title>
        <Text style={{ color: '#f0f0f0' }}>{basicInfo.slogan || '学院Slogan'}</Text>
      </div>

      <div style={{ padding: '24px' }}>
        {deanMessage.message && (
          <>
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
                {deanMessage.photo && (
                  <Avatar
                    src={deanMessage.photo}
                    size={100}
                    style={{ border: `3px solid ${brandColors.secondary}` }}
                  />
                )}
                <Title level={5} style={{ marginTop: 8 }}>
                  {deanMessage.name}
                </Title>
                <Text type="secondary">{deanMessage.title}</Text>
              </Col>
              <Col xs={24} sm={16}>
                <Title level={4}>院长寄语</Title>
                <Paragraph
                  ellipsis={{ rows: 4, expandable: true, symbol: '展开' }}
                  style={{ fontStyle: 'italic' }}
                >
                  {deanMessage.message}
                </Paragraph>
              </Col>
            </Row>
            <Divider />
          </>
        )}

        <div>
          <Title level={4}>核心竞争力</Title>
          <Space direction="vertical" style={{ width: '100%' }}>
            {renderCompetency('历史与文化沉淀', coreCompetencies.history)}
            {renderCompetency('学科与科研实力', coreCompetencies.academic)}
            {renderCompetency('师资队伍概况', coreCompetencies.faculty)}
            {renderCompetency('学生培养特色', coreCompetencies.studentLife)}
            {renderCompetency('校友网络与成就', coreCompetencies.alumni)}
          </Space>
        </div>

        <Divider />

        <div>
          <Title level={4}>品牌色</Title>
          <Space>
            <Tag color={brandColors.primary}>主色: {brandColors.primary}</Tag>
            <Tag color={brandColors.secondary}>辅色: {brandColors.secondary}</Tag>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default PreviewCard;
