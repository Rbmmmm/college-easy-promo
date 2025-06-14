import React from 'react';
import { Card, Row, Col, Typography, Tag, List, Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

const liveSessions = [
  {
    id: 1,
    title: '数据科学专业负责人在线答疑',
    lecturer: '周烜 教授',
    time: '2024-09-10 19:30',
    status: '直播中',
    viewers: 1234,
    cover: '/act2.webp',
  },
  {
    id: 2,
    title: '优秀毕业生分享：我的大厂求职之路',
    lecturer: '张三 学长',
    time: '2024-09-12 20:00',
    status: '未开始',
    viewers: 567,
    cover: '/act3.webp',
  },
  {
    id: 3,
    title: '往期回顾：校园开放日全景导览',
    lecturer: '招生办',
    time: '2024-08-18',
    status: '已结束',
    viewers: 8910,
    cover: '/act1.webp',
  },
];

const comments = [
  { author: '小明', content: '请问老师，这个专业需要很强的数学基础吗？' },
  { author: '小红', content: '学长好帅！' },
  { author: '游客123', content: '支持！' },
];

const LiveSessions: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>直播与互动讲座</Title>
      <Paragraph>参与实时线上宣讲会，与教授、学长学姐在线互动，解答你的所有疑惑。</Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card>
            <div style={{ position: 'relative', background: '#000', aspectRatio: '16/9' }}>
              <img
                src="/act2.webp"
                alt="Live Stream"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: 16, left: 16 }}>
                <Tag color="red">● 直播中</Tag>
              </div>
              <div style={{ position: 'absolute', bottom: 16, right: 16, color: 'white' }}>
                <UserOutlined /> 1234人正在观看
              </div>
            </div>
            <Title level={3} style={{ marginTop: 16 }}>
              数据科学专业负责人在线答疑
            </Title>
            <Text type="secondary">主讲人：周烜 教授</Text>
          </Card>
          <Card title="实时互动" style={{ marginTop: 24 }}>
            <List
              dataSource={comments}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={item.author}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
            <Search placeholder="输入你的问题..." enterButton="发送" />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="直播列表">
            <List
              itemLayout="vertical"
              dataSource={liveSessions}
              renderItem={(item) => (
                <List.Item key={item.id} extra={<img width={120} alt="logo" src={item.cover} />}>
                  <List.Item.Meta
                    title={<a href="#">{item.title}</a>}
                    description={`主讲人: ${item.lecturer}`}
                  />
                  <div>
                    <Tag color={item.status === '直播中' ? 'red' : 'default'}>{item.status}</Tag>
                    <Text type="secondary">{item.time}</Text>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LiveSessions;
