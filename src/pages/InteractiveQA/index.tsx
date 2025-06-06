import React, { useState } from 'react';
import { Card, Tabs, Input, Button, List, Tag, Form, Select, Table, message } from 'antd';
import { SearchOutlined, QuestionCircleOutlined, MessageOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

interface Question {
  id: string;
  title: string;
  category: string;
  content: string;
  status: string;
  createTime: string;
  answer?: string;
}

interface QuestionFormValues {
  category: string;
  title: string;
  content: string;
}

const InteractiveQA: React.FC = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');

  // FAQ数据
  const faqData = [
    {
      category: '报考资格',
      questions: [
        {
          question: '报考贵院需要哪些基本条件？',
          answer:
            '报考我院需要满足以下基本条件：1. 具有高中毕业或同等学历；2. 参加当年高考；3. 符合相关专业的具体要求。',
        },
        {
          question: '是否有特殊类型招生计划？',
          answer: '是的，我院设有艺术特长生、体育特长生等特殊类型招生计划，具体可查看招生简章。',
        },
      ],
    },
    {
      category: '专业选择',
      questions: [
        {
          question: '如何选择适合自己的专业？',
          answer:
            '建议从个人兴趣、职业规划、专业发展前景等方面综合考虑，也可以参加我们的专业咨询活动。',
        },
        {
          question: '各专业的就业前景如何？',
          answer: '我院各专业就业率均保持在95%以上，具体就业方向可查看各专业介绍页面。',
        },
      ],
    },
  ];

  // 待回复问题数据
  const pendingQuestions: Question[] = [
    {
      id: '1',
      title: '关于转专业政策',
      category: '专业选择',
      content: '请问贵院是否允许转专业？具体流程是什么？',
      status: '待回复',
      createTime: '2024-03-15 14:30',
    },
    {
      id: '2',
      title: '住宿条件咨询',
      category: '校园生活',
      content: '想了解一下学生宿舍的具体情况，包括设施、费用等。',
      status: '待回复',
      createTime: '2024-03-15 15:45',
    },
  ];

  // 已回复问题数据
  const answeredQuestions: Question[] = [
    {
      id: '3',
      title: '奖学金申请',
      category: '奖助学金',
      content: '请问如何申请奖学金？',
      status: '已回复',
      createTime: '2024-03-14 10:20',
      answer: '我院设有多种奖学金，包括国家奖学金、学业奖学金等，具体申请流程可查看学生手册。',
    },
  ];

  const columns = [
    {
      title: '问题标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '待回复' ? 'orange' : 'green'}>{status}</Tag>
      ),
    },
    {
      title: '提交时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Button type="link" onClick={() => message.info('查看详情')}>
          查看详情
        </Button>
      ),
    },
  ];

  const handleSubmitQuestion = (values: QuestionFormValues) => {
    console.log('提交的问题：', values);
    message.success('问题提交成功，我们会尽快回复');
    form.resetFields();
  };

  return (
    <div>
      <h2>互动答疑中心</h2>
      <p>解答考生疑问，提供专业指导</p>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="常见问题" key="1">
          <Card>
            <Input
              placeholder="搜索常见问题"
              prefix={<SearchOutlined />}
              style={{ marginBottom: 16 }}
            />
            {faqData.map((category) => (
              <div key={category.category} style={{ marginBottom: 24 }}>
                <h3>{category.category}</h3>
                <List
                  dataSource={category.questions}
                  renderItem={(item) => (
                    <List.Item>
                      <Card style={{ width: '100%' }}>
                        <p>
                          <QuestionCircleOutlined style={{ marginRight: 8 }} />
                          {item.question}
                        </p>
                        <p style={{ marginTop: 8, color: '#666' }}>
                          <MessageOutlined style={{ marginRight: 8 }} />
                          {item.answer}
                        </p>
                      </Card>
                    </List.Item>
                  )}
                />
              </div>
            ))}
          </Card>
        </TabPane>

        <TabPane tab="在线提问" key="2">
          <Card>
            <Form form={form} layout="vertical" onFinish={handleSubmitQuestion}>
              <Form.Item
                name="category"
                label="问题分类"
                rules={[{ required: true, message: '请选择问题分类' }]}
              >
                <Select placeholder="请选择问题分类">
                  <Option value="admission">报考资格</Option>
                  <Option value="major">专业选择</Option>
                  <Option value="campus">校园生活</Option>
                  <Option value="scholarship">奖助学金</Option>
                  <Option value="other">其他问题</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="title"
                label="问题标题"
                rules={[{ required: true, message: '请输入问题标题' }]}
              >
                <Input placeholder="请输入问题标题" />
              </Form.Item>

              <Form.Item
                name="content"
                label="问题内容"
                rules={[{ required: true, message: '请输入问题内容' }]}
              >
                <TextArea placeholder="请详细描述您的问题" rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交问题
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </TabPane>

        <TabPane tab="问题管理" key="3">
          <Card>
            <Tabs defaultActiveKey="1">
              <TabPane tab="待回复问题" key="1">
                <Table columns={columns} dataSource={pendingQuestions} rowKey="id" />
              </TabPane>
              <TabPane tab="已回复问题" key="2">
                <Table columns={columns} dataSource={answeredQuestions} rowKey="id" />
              </TabPane>
            </Tabs>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default InteractiveQA;
