import React from 'react';
import { Card, Row, Col, Typography, Input, Select, Button, Tag, Avatar } from 'antd';
import {
  DownloadOutlined,
  StarOutlined,
  ShareAltOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

const templates = [
  {
    id: 1,
    title: '“硬核”数据科学专业介绍推文',
    type: '微信推文',
    category: '专业介绍',
    author: '张老师',
    avatar: 'https://joeschmoe.io/api/v1/random',
    downloads: 128,
    stars: 45,
    tags: ['数据驱动', '故事性', '学术严谨'],
    preview: '我们把新的数据专业定位为：新时期的计算机专业...',
  },
  {
    id: 2,
    title: '校园开放日活动海报模板',
    type: '海报',
    category: '活动宣传',
    author: '李老师',
    avatar: 'https://joeschmoe.io/api/v1/female/random',
    downloads: 99,
    stars: 32,
    tags: ['青春活力', '现代简约'],
    preview: '（海报预览图）',
  },
  {
    id: 3,
    title: '给家长的一封信（邮件模板）',
    type: '邮件',
    category: '家长沟通',
    author: '王老师',
    avatar: 'https://joeschmoe.io/api/v1/male/random',
    downloads: 76,
    stars: 21,
    tags: ['亲切友好', '正式'],
    preview: '尊敬的家长：您好！感谢您对我们学院的关注...',
  },
];

const TemplateMarket: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Card style={{ marginBottom: 24, textAlign: 'center' }}>
        <Title level={2}>模板市场</Title>
        <Paragraph>分享与发现优秀的招生宣传内容模板，借鉴他人经验，激发创作灵感。</Paragraph>
        <Button type="primary" icon={<UploadOutlined />} size="large">
          上传我的模板
        </Button>
      </Card>

      <Card style={{ marginBottom: 24 }}>
        <Row gutter={16} align="middle">
          <Col xs={24} md={12}>
            <Search placeholder="搜索模板..." size="large" />
          </Col>
          <Col xs={12} md={6}>
            <Select defaultValue="all" size="large" style={{ width: '100%' }}>
              <Option value="all">所有类型</Option>
              <Option value="wechat">微信推文</Option>
              <Option value="poster">海报</Option>
              <Option value="email">邮件</Option>
            </Select>
          </Col>
          <Col xs={12} md={6}>
            <Select defaultValue="hot" size="large" style={{ width: '100%' }}>
              <Option value="hot">最热</Option>
              <Option value="new">最新</Option>
            </Select>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        {templates.map((template) => (
          <Col xs={24} md={12} lg={8} key={template.id}>
            <Card
              hoverable
              actions={[
                <span key="download">
                  <DownloadOutlined /> {template.downloads}
                </span>,
                <span key="star">
                  <StarOutlined /> {template.stars}
                </span>,
                <ShareAltOutlined key="share" />,
              ]}
            >
              <Card.Meta
                avatar={<Avatar src={template.avatar} icon={<UserOutlined />} />}
                title={template.title}
                description={
                  <div>
                    <Tag color="blue">{template.type}</Tag>
                    <Tag color="green">{template.category}</Tag>
                  </div>
                }
              />
              <Paragraph ellipsis={{ rows: 3 }} style={{ marginTop: 16, height: 66 }}>
                {template.preview}
              </Paragraph>
              <div>
                {template.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TemplateMarket;
