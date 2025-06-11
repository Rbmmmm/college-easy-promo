import React, { useState } from 'react';
import {
  Card,
  Button,
  Tabs,
  Form,
  Input,
  DatePicker,
  Select,
  Table,
  Tag,
  message,
  Typography,
  Avatar,
  Row,
  Col,
  Divider,
  Space,
  Modal,
  List,
} from 'antd';
import { QrcodeOutlined, CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';
import type { Dayjs } from 'dayjs';
import { useAppSelector } from '../../hooks';

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;

// 扩展后的活动接口
interface Campaign {
  id: string;
  title: string;
  type: '线上活动' | '线下活动';
  date: string;
  location: string;
  status: '报名中' | '已结束' | '即将开始';
  registrations: number;
  description: string;
  highlights: string[];
  agenda: { time: string; event: string }[];
}

interface CreateCampaignValues {
  title: string;
  type: string;
  date: Dayjs;
  location: string;
  description: string;
}

const renderCompetency = (label: string, value: string) =>
  value ? (
    <div>
      <Text strong>{label}</Text>
      <Paragraph>{value}</Paragraph>
    </div>
  ) : null;

const CampaignShowcase: React.FC = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const profile = useAppSelector((state) => state.collegeProfile);
  const { basicInfo, deanMessage, coreCompetencies, brandColors } = profile;

  // 扩展后的模拟活动数据
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: '2024年校园开放日',
      type: '线下活动',
      date: '2024-08-18',
      location: '华东师范大学普陀校区',
      status: '即将开始',
      registrations: 156,
      description:
        '亲身体验数据学院的魅力！与顶尖教授面对面交流，参观国家级重点实验室，感受浓厚的学术氛围。',
      highlights: ['院长面对面', '实验室参观', '学长学姐经验分享', '招生政策解读'],
      agenda: [
        { time: '09:00 - 10:00', event: '签到 & 领取资料' },
        { time: '10:00 - 11:00', event: '院长致辞与学院介绍' },
        { time: '11:00 - 12:00', event: '实验室参观' },
        { time: '13:30 - 15:00', event: '在校生分享会' },
        { time: '15:00 - 16:00', event: '招生咨询' },
      ],
    },
    {
      id: '2',
      title: '数据科学专业线上宣讲会',
      type: '线上活动',
      date: '2024-08-25',
      location: '腾讯会议 (ID: 123 456 789)',
      status: '报名中',
      registrations: 89,
      description:
        '足不出户，全面了解数据科学与大数据技术专业。我们将详细解读培养方案、课程特色及未来发展方向。',
      highlights: ['专业负责人深度解读', '核心课程展示', '优秀毕业生连线', '实时互动答疑'],
      agenda: [
        { time: '19:00 - 19:30', event: '专业负责人介绍' },
        { time: '19:30 - 20:00', event: '核心课程与项目展示' },
        { time: '20:00 - 20:30', event: '优秀校友职业发展分享' },
        { time: '20:30 - 21:00', event: 'Q&A 环节' },
      ],
    },
    {
      id: '3',
      title: 'AI for Science 学术研讨会',
      type: '线上活动',
      date: '2024-09-05',
      location: 'Bilibili 直播',
      status: '报名中',
      registrations: 210,
      description:
        '聚焦AI在基础科学领域的应用，邀请行业顶尖专家，共同探讨人工智能如何赋能科学研究。',
      highlights: ['院士主题演讲', '前沿技术探讨', '跨学科思维碰撞', '开源项目发布'],
      agenda: [
        { time: '14:00 - 15:00', event: '主题演讲：AI驱动的材料科学新范式' },
        { time: '15:00 - 16:00', event: '圆桌论坛：AI for Science 的机遇与挑战' },
        { time: '16:00 - 16:30', event: '最新开源项目发布与演示' },
      ],
    },
    {
      id: '4',
      title: '“数据之光”编程马拉松',
      type: '线下活动',
      date: '2024-09-15',
      location: '数据学院大楼B101',
      status: '即将开始',
      registrations: 78,
      description:
        '48小时极限挑战，围绕真实社会问题，用数据和代码构建解决方案。优胜队伍将获得丰厚奖金和企业实习机会！',
      highlights: ['真实企业赛题', '技术大牛现场指导', '丰厚奖金池', '顶级VC关注'],
      agenda: [
        { time: '周五 18:00', event: '开幕式 & 赛题发布' },
        { time: '周五 19:00 - 周日 12:00', event: '41小时极限编程' },
        { time: '周日 14:00 - 17:00', event: '项目路演 & 评选' },
        { time: '周日 17:30', event: '颁奖典礼' },
      ],
    },
  ];

  const showModal = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedCampaign(null);
  };

  const columns = [
    { title: '活动名称', dataIndex: 'title', key: 'title' },
    {
      title: '活动类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => <Tag color={type === '线上活动' ? 'blue' : 'green'}>{type}</Tag>,
    },
    { title: '活动时间', dataIndex: 'date', key: 'date' },
    { title: '活动地点', dataIndex: 'location', key: 'location' },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const color =
          status === '报名中' ? 'orange' : status === '即将开始' ? 'processing' : 'default';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: '报名人数', dataIndex: 'registrations', key: 'registrations' },
    {
      title: '操作',
      key: 'action',
      render: (_: unknown, record: Campaign) => (
        <Button type="link" onClick={() => showModal(record)}>
          查看详情
        </Button>
      ),
    },
  ];

  const handleCreateCampaign = (values: CreateCampaignValues) => {
    console.log('创建活动：', values);
    message.success('活动创建成功！');
    form.resetFields();
  };

  const cardStyle: React.CSSProperties = {
    border: `2px solid ${brandColors.primary}`,
    borderRadius: '12px',
    boxShadow: `0 8px 24px rgba(0,0,0,0.1)`,
    backgroundColor: '#fdfdfd',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: brandColors.primary,
    color: '#fff',
    padding: '20px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2>宣传活动与成果展示</h2>
      <p>管理招生宣传活动，展示学院风采</p>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="学院名片页" key="1">
          <Card style={cardStyle} bodyStyle={{ padding: 0 }}>
            <div style={headerStyle}>
              {basicInfo.logo && (
                <Avatar src={basicInfo.logo} size={80} style={{ border: '3px solid #fff' }} />
              )}
              <Title level={3} style={{ color: '#fff', marginTop: 10, marginBottom: 0 }}>
                {basicInfo.fullName || '学院全称'}
              </Title>
              <Text style={{ color: '#f0f0f0' }}>{basicInfo.slogan || '学院Slogan'}</Text>
            </div>

            <div style={{ padding: '24px' }}>
              {deanMessage.message && (
                <>
                  <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
                      {deanMessage.photo && (
                        <Avatar
                          src={deanMessage.photo}
                          size={100}
                          style={{
                            border: `3px solid ${brandColors.secondary}`,
                          }}
                        />
                      )}
                      <Title level={5} style={{ marginTop: 8 }}>
                        {deanMessage.name}
                      </Title>
                      <Text type="secondary">{deanMessage.title}</Text>
                    </Col>
                    <Col xs={24} sm={16}>
                      <Title level={4}>院长寄语</Title>
                      <Paragraph
                        ellipsis={{ rows: 4, expandable: true, symbol: '展开' }}
                        style={{ fontStyle: 'italic' }}
                      >
                        {deanMessage.message}
                      </Paragraph>
                    </Col>
                  </Row>
                  <Divider />
                </>
              )}

              <div>
                <Title level={4}>核心竞争力</Title>
                <Space direction="vertical" style={{ width: '100%' }}>
                  {renderCompetency('历史与文化沉淀', coreCompetencies.history)}
                  {renderCompetency('学科与科研实力', coreCompetencies.academic)}
                  {renderCompetency('师资队伍概况', coreCompetencies.faculty)}
                  {renderCompetency('学生培养特色', coreCompetencies.studentLife)}
                  {renderCompetency('校友网络与成就', coreCompetencies.alumni)}
                </Space>
              </div>

              <Divider />

              <div style={{ textAlign: 'center' }}>
                <Button type="primary" icon={<QrcodeOutlined />} style={{ marginRight: 16 }}>
                  生成分享二维码
                </Button>
                <Button>复制链接</Button>
              </div>
            </div>
          </Card>
        </TabPane>

        <TabPane tab="活动管理" key="2">
          <Card>
            <Form form={form} layout="vertical" onFinish={handleCreateCampaign}>
              <Form.Item name="title" label="活动名称" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="type" label="活动类型" rules={[{ required: true }]}>
                <Select>
                  <Option value="online">线上宣讲会</Option>
                  <Option value="offline">校园开放日</Option>
                </Select>
              </Form.Item>
              <Form.Item name="date" label="活动时间" rules={[{ required: true }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name="location" label="活动地点" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="description" label="活动描述" rules={[{ required: true }]}>
                <TextArea rows={4} />
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

      {selectedCampaign && (
        <Modal
          title={selectedCampaign.title}
          open={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              关闭
            </Button>,
          ]}
          width={600}
        >
          <p>{selectedCampaign.description}</p>
          <Divider />
          <Space direction="vertical" style={{ width: '100%' }}>
            <Text>
              <CalendarOutlined style={{ marginRight: 8 }} />
              {selectedCampaign.date}
            </Text>
            <Text>
              <EnvironmentOutlined style={{ marginRight: 8 }} />
              {selectedCampaign.location}
            </Text>
          </Space>
          <Divider />
          <Title level={5}>活动亮点</Title>
          <List
            dataSource={selectedCampaign.highlights}
            renderItem={(item) => <List.Item>✅ {item}</List.Item>}
            size="small"
          />
          <Divider />
          <Title level={5}>活动议程</Title>
          <List
            dataSource={selectedCampaign.agenda}
            renderItem={(item) => (
              <List.Item>
                <Text strong>{item.time}:</Text> {item.event}
              </List.Item>
            )}
            size="small"
          />
        </Modal>
      )}
    </div>
  );
};

export default CampaignShowcase;
