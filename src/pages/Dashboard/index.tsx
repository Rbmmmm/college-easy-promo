import React from 'react';
import { Card, Row, Col, Button, Statistic, Carousel, Typography, List, Avatar } from 'antd';
import {
  UserOutlined,
  FileTextOutlined,
  PictureOutlined,
  RocketOutlined,
  BellOutlined,
  ArrowRightOutlined,
  CrownOutlined,
  CarryOutOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const quickStartItems = [
    {
      icon: <CarryOutOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      title: '任务中心',
      desc: '统一管理您的待办事项和任务',
      path: '/task-center',
    },
    {
      icon: <FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: '学院主页',
      desc: '创建和编辑学院的官方展示页面',
      path: '/college-profile',
    },
    {
      icon: <CrownOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: '智能内容',
      desc: '利用AI快速生成高质量宣传文案',
      path: '/content-studio',
    },
    {
      icon: <PictureOutlined style={{ fontSize: '24px', color: '#faad14' }} />,
      title: '视觉设计',
      desc: '设计海报、信息图等视觉宣传材料',
      path: '/visual-designer',
    },
    {
      icon: <RocketOutlined style={{ fontSize: '24px', color: '#f5222d' }} />,
      title: '宣传活动',
      desc: '管理和跟踪线上线下的宣传活动',
      path: '/campaign-showcase',
    },
  ];

  const recentActivities = [
    {
      title: '“未来工程师”夏令营宣传活动已启动',
      date: '2024-06-10',
    },
    {
      title: '更新了计算机科学与技术学院的招生简章',
      date: '2024-06-09',
    },
    {
      title: '新增了 5 篇关于“人工智能”的专题文章',
      date: '2024-06-08',
    },
  ];

  const templateItems = [
    {
      title: '计算机学院招生简章',
      desc: '专业、简洁，适合工科类学院',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    },
    {
      title: '商学院开放日海报',
      desc: '现代、活泼，突出学院特色',
      img: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.jpeg',
    },
    {
      title: '艺术设计学院作品集',
      desc: '创意、视觉冲击力强',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    },
  ];

  return (
    <div style={{ padding: '24px', background: '#f0f2f5' }}>
      {/* Welcome Section */}
      <Card
        style={{
          marginBottom: '24px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #1890ff 0%, #36cfc9 100%)',
          color: 'white',
        }}
      >
        <Row align="middle" justify="space-between">
          <Col>
            <Title level={2} style={{ color: 'white', margin: 0 }}>
              欢迎使用 院易宣
            </Title>
            <Paragraph style={{ color: 'white', opacity: 0.8, marginTop: '8px' }}>
              一站式招生宣传内容制作与管理平台，让您的宣传工作更高效、更出彩。
            </Paragraph>
          </Col>
          <Col>
            <Button
              type="primary"
              ghost
              size="large"
              onClick={() => handleNavigate('/student-preview')}
            >
              预览我的主页
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Statistics */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Statistic title="本月宣传材料浏览量" value={1234} prefix={<FileTextOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Statistic title="新增意向考生咨询" value={56} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Statistic title="待处理问答" value={12} prefix={<BellOutlined />} />
          </Card>
        </Col>
      </Row>

      {/* Main Content Area */}
      <Row gutter={[24, 24]}>
        {/* Quick Start & Recent Activities */}
        <Col xs={24} lg={16}>
          {/* Quick Start */}
          <Card title={<Title level={3}>快速开始</Title>} style={{ marginBottom: '24px' }}>
            <Row gutter={[16, 16]}>
              {quickStartItems.map((item) => (
                <Col xs={12} sm={12} key={item.title}>
                  <Card hoverable onClick={() => handleNavigate(item.path)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {item.icon}
                      <div style={{ marginLeft: '16px' }}>
                        <Text strong>{item.title}</Text>
                        <Paragraph type="secondary" style={{ margin: 0 }}>
                          {item.desc}
                        </Paragraph>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Recent Activities */}
          <Card title={<Title level={3}>近期动态</Title>}>
            <List
              itemLayout="horizontal"
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<BellOutlined />} />}
                    title={<a href="#">{item.title}</a>}
                    description={item.date}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Recommended Templates */}
        <Col xs={24} lg={8}>
          <Card title={<Title level={3}>推荐模板</Title>}>
            <Carousel autoplay dotPosition="bottom">
              {templateItems.map((item) => (
                <div key={item.title}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={item.title}
                        src={item.img}
                        style={{ height: 180, objectFit: 'cover' }}
                      />
                    }
                    onClick={() => handleNavigate('/visual-designer')}
                  >
                    <Card.Meta title={item.title} description={item.desc} />
                  </Card>
                </div>
              ))}
            </Carousel>
            <Button
              type="primary"
              block
              style={{ marginTop: '16px' }}
              onClick={() => handleNavigate('/visual-designer')}
            >
              查看更多模板 <ArrowRightOutlined />
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
