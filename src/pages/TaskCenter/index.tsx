import React from 'react';
import { Card, Row, Col, Typography, List, Tag, Avatar, Progress, Button } from 'antd';
import {
  EditOutlined,
  MessageOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const tasks = [
  {
    id: 1,
    type: '内容创作',
    title: '撰写“数据科学”专业介绍推文',
    assignee: '张老师',
    dueDate: '2024-09-10',
    status: '进行中',
    progress: 75,
    icon: <EditOutlined />,
    color: '#1890ff',
  },
  {
    id: 2,
    type: '问答回复',
    title: '回复关于“转专业政策”的提问',
    assignee: '李老师',
    dueDate: '2024-09-08',
    status: '待处理',
    progress: 0,
    icon: <MessageOutlined />,
    color: '#faad14',
  },
  {
    id: 3,
    type: '活动管理',
    title: '筹备“校园开放日”活动',
    assignee: '王老师',
    dueDate: '2024-09-15',
    status: '进行中',
    progress: 40,
    icon: <CalendarOutlined />,
    color: '#52c41a',
  },
  {
    id: 4,
    type: '内容创作',
    title: '更新学院官网“师资力量”页面',
    assignee: '赵老师',
    dueDate: '2024-09-05',
    status: '已完成',
    progress: 100,
    icon: <CheckCircleOutlined />,
    color: '#bfbfbf',
  },
];

const TaskCenter: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>任务中心</Title>
      <Typography.Paragraph>
        在这里统一管理您的招生宣传任务，跟踪进度，确保各项工作有序进行。
      </Typography.Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="我的待办任务">
            <List
              itemLayout="horizontal"
              dataSource={tasks.filter((t) => t.status !== '已完成')}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button key="detail" type="link">
                      查看详情
                    </Button>,
                    <Button key="complete" type="link">
                      标记完成
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{ backgroundColor: item.color, verticalAlign: 'middle' }}
                        icon={item.icon}
                        size="large"
                      />
                    }
                    title={<a href="#">{item.title}</a>}
                    description={
                      <div>
                        <Tag>{item.type}</Tag>
                        <Text type="secondary">
                          截止日期: {item.dueDate} | 负责人: {item.assignee}
                        </Text>
                      </div>
                    }
                  />
                  <div style={{ width: 150 }}>
                    <Progress percent={item.progress} />
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="任务概览">
            <Row gutter={16}>
              <Col span={12} style={{ textAlign: 'center' }}>
                <Progress type="dashboard" percent={66} />
                <div style={{ marginTop: 8 }}>总体进度</div>
              </Col>
              <Col span={12}>
                <p>
                  <Tag color="warning">待处理: 1</Tag>
                </p>
                <p>
                  <Tag color="processing">进行中: 2</Tag>
                </p>
                <p>
                  <Tag color="success">已完成: 1</Tag>
                </p>
              </Col>
            </Row>
          </Card>
          <Card title="已完成任务" style={{ marginTop: 24 }}>
            <List
              dataSource={tasks.filter((t) => t.status === '已完成')}
              renderItem={(item) => (
                <List.Item>
                  <CheckCircleOutlined style={{ color: 'green', marginRight: 8 }} />
                  {item.title}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TaskCenter;
