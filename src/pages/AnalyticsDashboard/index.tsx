import React from 'react';
import { Card, Row, Col, Statistic, Table, Tag, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, EyeOutlined, ShareAltOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';

const AnalyticsDashboard: React.FC = () => {
  // 模拟数据
  const pageViews = 12580;
  const shares = 2345;
  const registrations = 567;
  const interactions = 890;

  const pageViewsChange = 12.5;
  const sharesChange = -2.3;
  const registrationsChange = 8.7;
  const interactionsChange = 15.2;

  // 访问来源数据
  const sourceData = [
    { source: '官网链接', count: 4560, percentage: 36.2 },
    { source: '公众号', count: 3780, percentage: 30.1 },
    { source: '搜索引擎', count: 2340, percentage: 18.6 },
    { source: '社交媒体', count: 1560, percentage: 12.4 },
    { source: '其他', count: 340, percentage: 2.7 },
  ];

  // 专业访问热度数据
  const majorData = [
    { major: '计算机科学与技术', views: 4560, trend: 'up' },
    { major: '软件工程', views: 3780, trend: 'up' },
    { major: '人工智能', views: 2340, trend: 'down' },
    { major: '数据科学', views: 1560, trend: 'up' },
    { major: '网络工程', views: 890, trend: 'stable' },
  ];

  const columns = [
    {
      title: '专业名称',
      dataIndex: 'major',
      key: 'major',
    },
    {
      title: '访问量',
      dataIndex: 'views',
      key: 'views',
    },
    {
      title: '趋势',
      dataIndex: 'trend',
      key: 'trend',
      render: (trend: string) => {
        const colors = {
          up: 'green',
          down: 'red',
          stable: 'blue',
        };
        const icons = {
          up: <ArrowUpOutlined />,
          down: <ArrowDownOutlined />,
          stable: '-',
        };
        return (
          <Tag color={colors[trend as keyof typeof colors]}>
            {icons[trend as keyof typeof icons]}
          </Tag>
        );
      },
    },
  ];

  return (
    <div>
      <h2>数据洞察看板</h2>
      <p>实时监控招生宣传效果，助力决策优化</p>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="总访问量"
              value={pageViews}
              prefix={<EyeOutlined />}
              suffix={
                <span style={{ fontSize: '14px', color: pageViewsChange > 0 ? '#3f8600' : '#cf1322' }}>
                  {pageViewsChange > 0 ? '+' : ''}{pageViewsChange}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="分享次数"
              value={shares}
              prefix={<ShareAltOutlined />}
              suffix={
                <span style={{ fontSize: '14px', color: sharesChange > 0 ? '#3f8600' : '#cf1322' }}>
                  {sharesChange > 0 ? '+' : ''}{sharesChange}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="报名人数"
              value={registrations}
              prefix={<TeamOutlined />}
              suffix={
                <span style={{ fontSize: '14px', color: registrationsChange > 0 ? '#3f8600' : '#cf1322' }}>
                  {registrationsChange > 0 ? '+' : ''}{registrationsChange}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="互动次数"
              value={interactions}
              prefix={<MessageOutlined />}
              suffix={
                <span style={{ fontSize: '14px', color: interactionsChange > 0 ? '#3f8600' : '#cf1322' }}>
                  {interactionsChange > 0 ? '+' : ''}{interactionsChange}%
                </span>
              }
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="访问来源分析">
            {sourceData.map((item) => (
              <div key={item.source} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>{item.source}</span>
                  <span>{item.count} ({item.percentage}%)</span>
                </div>
                <Progress percent={item.percentage} showInfo={false} />
              </div>
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="专业访问热度">
            <Table
              columns={columns}
              dataSource={majorData}
              pagination={false}
              rowKey="major"
            />
          </Card>
        </Col>
      </Row>

      <Card title="优化建议" style={{ marginTop: 16 }}>
        <ul>
          <li>计算机科学与技术专业访问量最高，建议重点推广该专业的特色课程和就业前景</li>
          <li>人工智能专业访问量呈下降趋势，建议更新专业介绍内容，突出最新研究成果</li>
          <li>公众号是主要访问来源，建议增加公众号推文发布频率</li>
          <li>分享转化率较高，建议优化分享功能，增加分享激励措施</li>
        </ul>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
