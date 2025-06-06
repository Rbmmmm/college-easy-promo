import React, { useState } from 'react';
import { Card, Button, Descriptions, Tabs, Form, Input, DatePicker, Select, Table, Tag, message } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, UserOutlined, QrcodeOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

interface Campaign {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  status: string;
  registrations: number;
}

const CampaignShowcase: React.FC = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');

  // 模拟活动数据
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: '2024年校园开放日',
      type: '线下活动',
      date: '2024-04-15',
      location: '主校区',
      status: '报名中',
      registrations: 156,
    },
    {
      id: '2',
      title: '计算机科学专业线上宣讲会',
      type: '线上活动',
      date: '2024-04-20',
      location: '腾讯会议',
      status: '报名中',
      registrations: 89,
    },
  ];

  const columns = [
    {
      title: '活动名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '活动类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => <Tag color={type === '线上活动' ? 'blue' : 'green'}>{type}</Tag>,
    },
    {
      title: '活动时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '活动地点',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '报名中' ? 'orange' : 'green'}>{status}</Tag>
      ),
    },
    {
      title: '报名人数',
      dataIndex: 'registrations',
      key: 'registrations',
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

  const handleCreateCampaign = (values: any) => {
    console.log('创建活动：', values);
    message.success('活动创建成功！');
    form.resetFields();
  };

  return (
    <div>
      <h2>宣传活动与成果展示</h2>
      <p>管理招生宣传活动，展示学院风采</p>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="学院名片页" key="1">
          <Card>
            <Descriptions title="学院概览" bordered>
              <Descriptions.Item label="学院名称">计算机科学与技术学院</Descriptions.Item>
              <Descriptions.Item label="成立时间">1985年</Descriptions.Item>
              <Descriptions.Item label="学院特色">国家重点学科建设单位</Descriptions.Item>
            </Descriptions>

            <Descriptions title="专业设置" bordered style={{ marginTop: 24 }}>
              <Descriptions.Item label="计算机科学与技术" span={3}>
                培养具有扎实的计算机科学理论基础和较强的工程实践能力的高级专门人才
              </Descriptions.Item>
              <Descriptions.Item label="软件工程" span={3}>
                培养具有软件工程专业知识和实践能力的高素质软件人才
              </Descriptions.Item>
              <Descriptions.Item label="人工智能" span={3}>
                培养具有人工智能理论基础和应用能力的高端人才
              </Descriptions.Item>
            </Descriptions>

            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <Button type="primary" icon={<QrcodeOutlined />} style={{ marginRight: 16 }}>
                生成分享二维码
              </Button>
              <Button>复制链接</Button>
            </div>
          </Card>
        </TabPane>

        <TabPane tab="活动管理" key="2">
          <Card>
            <Form form={form} layout="vertical" onFinish={handleCreateCampaign}>
              <Form.Item
                name="title"
                label="活动名称"
                rules={[{ required: true, message: '请输入活动名称' }]}
              >
                <Input placeholder="请输入活动名称" />
              </Form.Item>

              <Form.Item
                name="type"
                label="活动类型"
                rules={[{ required: true, message: '请选择活动类型' }]}
              >
                <Select placeholder="请选择活动类型">
                  <Option value="online">线上宣讲会</Option>
                  <Option value="offline">校园开放日</Option>
                  <Option value="consultation">专业咨询会</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="date"
                label="活动时间"
                rules={[{ required: true, message: '请选择活动时间' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="location"
                label="活动地点"
                rules={[{ required: true, message: '请输入活动地点' }]}
              >
                <Input placeholder="请输入活动地点" />
              </Form.Item>

              <Form.Item
                name="description"
                label="活动描述"
                rules={[{ required: true, message: '请输入活动描述' }]}
              >
                <TextArea rows={4} placeholder="请输入活动详细描述" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  创建活动
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title="活动列表" style={{ marginTop: 24 }}>
            <Table columns={columns} dataSource={campaigns} rowKey="id" />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CampaignShowcase;
