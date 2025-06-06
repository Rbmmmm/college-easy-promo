import React from 'react';
import { Card, Row, Col, Button, Statistic, Carousel, Typography, Divider } from 'antd';
import {
  UserOutlined,
  FileTextOutlined,
  PictureOutlined,
  RocketOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleQuickStart = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ padding: '24px', background: '#f5f5f5', minHeight: '100vh' }}>
      <Title level={2} style={{ marginBottom: '24px', color: '#1890ff' }}>
        欢迎使用院易宣
      </Title>
      <Paragraph style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
        一站式招生宣传内容制作与管理平台
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <Statistic title="本月宣传材料浏览量" value={1234} prefix={<FileTextOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <Statistic title="新增意向考生咨询" value={56} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <Statistic title="待处理问答" value={12} prefix={<BellOutlined />} />
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: '32px 0' }} />

      <Title level={3} style={{ marginBottom: '16px', color: '#333' }}>
        快速开始
      </Title>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Button
            type="primary"
            block
            icon={<FileTextOutlined />}
            onClick={() => handleQuickStart('/college-profile')}
            style={{ height: '80px', fontSize: '16px', borderRadius: '8px' }}
          >
            创建新的学院主页
          </Button>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            block
            icon={<FileTextOutlined />}
            onClick={() => handleQuickStart('/content-studio')}
            style={{ height: '80px', fontSize: '16px', borderRadius: '8px' }}
          >
            进入智能内容创作
          </Button>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            block
            icon={<PictureOutlined />}
            onClick={() => handleQuickStart('/visual-designer')}
            style={{ height: '80px', fontSize: '16px', borderRadius: '8px' }}
          >
            访问视觉设计中心
          </Button>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            block
            icon={<RocketOutlined />}
            onClick={() => handleQuickStart('/campaign-showcase')}
            style={{ height: '80px', fontSize: '16px', borderRadius: '8px' }}
          >
            管理我的宣传活动
          </Button>
        </Col>
      </Row>

      <Divider style={{ margin: '32px 0' }} />

      <Title level={3} style={{ marginBottom: '16px', color: '#333' }}>
        推荐模板
      </Title>
      <Carousel autoplay>
        <div>
          <Card hoverable style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>计算机科学与技术学院招生简章</h3>
            <p>专业、简洁的招生简章模板，适合工科类学院使用。</p>
          </Card>
        </div>
        <div>
          <Card hoverable style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>经济管理学院宣传海报</h3>
            <p>现代感十足的海报模板，突出学院特色。</p>
          </Card>
        </div>
      </Carousel>
    </div>
  );
};

export default Dashboard;
