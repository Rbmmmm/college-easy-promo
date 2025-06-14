import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Typography,
  Form,
  InputNumber,
  Select,
  Button,
  Steps,
  Result,
  List,
  Tag,
  Divider,
} from 'antd';
import { SolutionOutlined, ProfileOutlined, SmileOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const provinces = ['上海', '浙江', '江苏', '广东', '山东', '北京'];
const subjects = ['物理', '化学', '生物', '历史', '地理', '政治'];

const recommendedMajors = [
  {
    name: '数据科学与大数据技术',
    college: '数据科学与工程学院',
    matchRate: '95%',
    tags: ['高匹配度', '王牌专业'],
    reason: '您的分数和选科高度匹配，且该专业是国家级一流专业，就业前景广阔。',
  },
  {
    name: '计算机科学与技术',
    college: '信息科学技术学院',
    matchRate: '88%',
    tags: ['较推荐'],
    reason: '您的分数有较大优势，选科符合要求。',
  },
  {
    name: '软件工程',
    college: '软件工程学院',
    matchRate: '85%',
    tags: ['可考虑'],
    reason: '您的分数达到往年录取线，可以作为备选志愿。',
  },
];

interface FormValues {
  province: string;
  score: number;
  subjects: string[];
}

const VolunteerSimulator: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState<Partial<FormValues>>({});

  const onFinish = (values: FormValues) => {
    console.log('Form values:', values);
    setFormData(values);
    setCurrent(1);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const steps = [
    {
      title: '填写信息',
      icon: <ProfileOutlined />,
      content: (
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="province" label="所在省份" rules={[{ required: true }]}>
                <Select placeholder="请选择您的省份">
                  {provinces.map((p) => (
                    <Option key={p} value={p}>
                      {p}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="score" label="高考分数" rules={[{ required: true }]}>
                <InputNumber style={{ width: '100%' }} placeholder="请输入您的总分" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="subjects" label="选考科目" rules={[{ required: true }]}>
            <Select mode="multiple" placeholder="请选择您的选考科目">
              {subjects.map((s) => (
                <Option key={s} value={s}>
                  {s}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              开始智能推荐
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: '查看推荐',
      icon: <SolutionOutlined />,
      content: (
        <div>
          <Title level={4}>智能推荐报告</Title>
          <Paragraph>
            根据您提供的信息（省份：{formData.province}，分数：{formData.score}
            ），我们为您生成了以下专业推荐报告：
          </Paragraph>
          <List
            itemLayout="horizontal"
            dataSource={recommendedMajors}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a href="#">
                      {item.name} - {item.college}
                    </a>
                  }
                  description={item.reason}
                />
                <div style={{ textAlign: 'right' }}>
                  <div>
                    {item.tags.map((t) => (
                      <Tag color="success" key={t}>
                        {t}
                      </Tag>
                    ))}{' '}
                  </div>
                  <div>
                    匹配度：<Text strong>{item.matchRate}</Text>
                  </div>
                </div>
              </List.Item>
            )}
          />
          <Divider />
          <Button type="primary" onClick={next}>
            下一步
          </Button>
        </div>
      ),
    },
    {
      title: '完成',
      icon: <SmileOutlined />,
      content: (
        <Result
          icon={<SmileOutlined />}
          title="太棒了，我们已经为您生成了初步的志愿建议！"
          subTitle="建议您结合我们的专业介绍页面，深入了解各个专业的详细信息，做出最适合自己的选择。"
          extra={[
            <Button type="primary" key="console">
              查看专业详情
            </Button>,
            <Button key="buy" onClick={() => setCurrent(0)}>
              再次模拟
            </Button>,
          ]}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Title level={2} style={{ textAlign: 'center' }}>
          志愿填报模拟器
        </Title>
        <Paragraph style={{ textAlign: 'center' }}>
          输入您的信息，一键获取个性化的专业报考建议。
        </Paragraph>
        <Steps current={current} style={{ marginBottom: 24 }}>
          {steps.map((item) => (
            <Steps.Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
      </Card>
    </div>
  );
};

export default VolunteerSimulator;
