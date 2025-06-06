import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  ProfileOutlined,
  EditOutlined,
  PictureOutlined,
  RocketOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

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
      key: '/analytics-dashboard',
      icon: <BarChartOutlined />,
      label: '数据洞察看板',
    },
    {
      key: '/interactive-qa',
      icon: <QuestionCircleOutlined />,
      label: '互动答疑中心',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>院易宣</div>
        {/* 这里可以添加用户信息、通知等 */}
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
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
