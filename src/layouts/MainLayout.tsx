import React from 'react';
import { Layout, Menu, Avatar, Space, Typography } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  ProfileOutlined,
  EditOutlined,
  PictureOutlined,
  RocketOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
  EyeOutlined,
  UserOutlined,
  BellOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '/college-profile',
      icon: <ProfileOutlined />,
      label: '学院信息中心',
    },
    {
      key: '/content-studio',
      icon: <EditOutlined />,
      label: '智能内容创作坊',
    },
    {
      key: '/visual-designer',
      icon: <PictureOutlined />,
      label: '视觉素材设计工坊',
    },
    {
      key: '/campaign-showcase',
      icon: <RocketOutlined />,
      label: '宣传活动与成果展示',
    },
    {
      key: '/template-market',
      icon: <ShopOutlined />,
      label: '模板市场',
    },
    {
      key: '/analytics-dashboard',
      icon: <BarChartOutlined />,
      label: '数据洞察看板',
    },
    {
      key: '/interactive-qa',
      icon: <QuestionCircleOutlined />,
      label: '互动答疑中心',
    },
    {
      key: '/student-preview',
      icon: <EyeOutlined />,
      label: '学生页面预览',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: 'linear-gradient(90deg, #1890ff 0%, #36cfc9 100%)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            院易宣
          </div>
          <Text
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '14px',
              marginLeft: '8px',
            }}
          >
            高校学院招生宣传平台
          </Text>
        </div>
        <Space size={16}>
          <BellOutlined style={{ color: 'white', fontSize: '18px', cursor: 'pointer' }} />
          <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }} />
            <Text style={{ color: 'white' }}>管理员</Text>
          </Space>
        </Space>
      </Header>
      <Layout>
        <Sider
          width={220}
          style={{
            background: '#fff',
            boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 64,
            height: 'calc(100vh - 64px)',
            overflow: 'auto',
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{
              height: '100%',
              borderRight: 0,
              padding: '12px 0',
            }}
            items={menuItems}
            onClick={({ key }) => navigate(key)}
          />
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
