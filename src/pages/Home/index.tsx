import React from 'react';
import { Row, Col, Card, Statistic, Button, Carousel } from 'antd';
import {
  FileTextOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  RocketOutlined,
  EditOutlined,
  PictureOutlined,
  FundOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // 模拟数据
  const stats = [
    {
      title: '本月宣传材料浏览量',
      value: 1234,
      icon: <FileTextOutlined />,
      color: '#1890ff',
    },
    {
      title: '新增意向考生咨询',
      value: 56,
      icon: <TeamOutlined />,
      color: '#52c41a',
    },
    {
      title: '待处理问答',
      value: 12,
      icon: <QuestionCircleOutlined />,
      color: '#faad14',
    },
  ];

  // 快速入口
  const quickActions = [
    {
      title: '创建新的学院主页',
      icon: <RocketOutlined />,
      path: '/college-profile',
      color: '#1890ff',
    },
    {
      title: '进入智能内容创作',
      icon: <EditOutlined />,
      path: '/content-studio',
      color: '#52c41a',
    },
    {
      title: '访问视觉设计中心',
      icon: <PictureOutlined />,
      path: '/visual-designer',
      color: '#722ed1',
    },
    {
      title: '管理我的宣传活动',
      icon: <FundOutlined />,
      path: '/campaign-showcase',
      color: '#fa8c16',
    },
  ];

  // 推荐模板
  const templates = [
    {
      title: '2024年招生简章模板',
      description: '现代简约风格，突出学院特色',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: '校园开放日海报模板',
      description: '活力四射的设计，吸引年轻学子',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: '专业介绍PPT模板',
      description: '专业大气的学术风格',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div>
      {/* 欢迎信息 */}
      <div style={{ marginBottom: 24 }}>
        <h1>欢迎回来，张老师</h1>
        <p style={{ color: '#666' }}>今天是 {new Date().toLocaleDateString()}，祝您工作愉快！</p>
      </div>

      {/* 数据概览 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={8} key={index}>
            <Card>
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
                valueStyle={{ color: stat.color }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* 快速入口 */}
      <Card title="快速入口" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          {quickActions.map((action, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Button
                type="primary"
                icon={action.icon}
                style={{ width: '100%', height: 100, backgroundColor: action.color }}
                onClick={() => navigate(action.path)}
              >
                {action.title}
              </Button>
            </Col>
          ))}
        </Row>
      </Card>

      {/* 推荐模板 */}
      <Card title="推荐模板">
        <Carousel autoplay>
          {templates.map((template, index) => (
            <div key={index}>
              <Card
                hoverable
                cover={<img alt={template.title} src={template.image} />}
                style={{ margin: '0 8px' }}
              >
                <Card.Meta title={template.title} description={template.description} />
              </Card>
            </div>
          ))}
        </Carousel>
      </Card>
    </div>
  );
};

export default Home;
