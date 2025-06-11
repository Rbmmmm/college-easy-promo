import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Row,
  Col,
  Card,
  Avatar,
  Timeline,
  Carousel,
  Collapse,
  Tabs,
  Radio,
  Space,
  Statistic,
  List,
  Input,
  Form,
  message,
} from 'antd';
import {
  BookOutlined,
  TeamOutlined,
  ExperimentOutlined,
  StarOutlined,
  TrophyOutlined,
  DollarCircleOutlined,
  ReadOutlined,
  EnvironmentOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { useAppSelector } from '../../hooks';
import './style.css';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;
const { TextArea } = Input;

interface IFormValues {
  name: string;
  contact: string;
  question: string;
}

const StudentPreview: React.FC = () => {
  const profile = useAppSelector((state) => state.collegeProfile);
  const { basicInfo, deanMessage, coreCompetencies } = profile;
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [form] = Form.useForm();
  const [timeLeft, setTimeLeft] = useState('');

  // 模拟数据
  const activities = [
    {
      date: '2024-08-18',
      title: '2024年校园开放日',
      description: '亲身体验数据学院的魅力！',
    },
    {
      date: '2024-08-25',
      title: '数据科学专业线上宣讲会',
      description: '足不出户，全面了解数据科学与大数据技术专业。',
    },
  ];

  const faqData = [
    {
      key: '1',
      question: '数据专业的定位和人才培养特点是什么？',
      answer: '我们把新的数据专业定位为：新时期的计算机专业...',
    },
    {
      key: '2',
      question: '数据专业如何招生？',
      answer: '我们从一开始就计划把它打造成一个“硬专业（hard major）”...',
    },
    {
      key: '3',
      question: '住宿环境怎么样？',
      answer: '学校提供标准四人间宿舍，配备空调、独立卫浴，生活设施齐全。',
    },
  ];

  const studentShowcaseData = [
    {
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      name: '张三',
      story:
        '2020级优秀毕业生，现就职于某知名互联网公司，担任数据科学家。在校期间多次获得国家奖学金，并发表多篇高水平论文。',
    },
    {
      avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniV.png',
      name: '李四',
      story:
        '2021级创业先锋，在校期间创立了自己的科技公司，致力于用大数据解决智慧城市问题，已获得千万级天使轮融资。',
    },
    {
      avatar: 'https://zos.alipayobjects.com/rmsportal/pWfAxMnfSmIZMusVaxGg.png',
      name: '王五',
      story:
        '2022级科研新星，参与国家重点研发计划项目，在顶级国际会议上作报告，展现了华东师大学子的风采。',
    },
  ];

  const courses = {
    undergraduate: [
      { name: '线性代数', tags: ['第一学期', '基础/导论'] },
      { name: '高等数学(1)', tags: ['第一学期', '基础/导论'] },
      { name: '程序设计', tags: ['第一学期', '基础/导论'] },
      { name: '高等数学(2)', tags: ['第二学期', '基础/导论'] },
      { name: '数据结构', tags: ['第二学期', '计算机理论'] },
      { name: '离散数学', tags: ['第二学期', '计算机理论'] },
      { name: 'Web编程', tags: ['第二学期', '实践'] },
      { name: 'DaSE导论', tags: ['第三学期', '基础/导论'] },
      { name: '概率论', tags: ['第三学期', '基础/导论'] },
      { name: '算法设计与分析', tags: ['第三学期', '计算机理论'] },
      { name: '计算机系统', tags: ['第三学期', '系统'] },
      { name: '数据可视化', tags: ['第三学期', '实践'] },
      { name: '操作系统', tags: ['第四学期', '系统'] },
      { name: '数据伦理', tags: ['第四学期', '实践'] },
      { name: '数理统计', tags: ['第四学期', '数据科学'] },
      { name: 'DaSE数学', tags: ['第四学期', '数据科学'] },
      { name: 'DaSE算法', tags: ['第五学期', '计算机理论'] },
      { name: '数据管理系统', tags: ['第五学期', '系统'] },
      { name: '计算机网络原理与编程', tags: ['第五学期', '实践'] },
      { name: 'AI导论', tags: ['第六学期', '基础/导论'] },
      { name: '分布式编程模型与系统', tags: ['第六学期', '系统'] },
      { name: '机器学习', tags: ['第六学期', '数据科学'] },
      { name: '软件工程', tags: ['第七学期', '实践'] },
      { name: '实习实践', tags: ['第七学期', '实践'] },
      { name: '毕业论文', tags: ['第八学期', '实践'] },
    ],
    master: [
      { name: '高级统计学习', tags: ['核心', 'AI'] },
      { name: '深度学习', tags: ['核心', 'AI'] },
      { name: '大数据技术', tags: ['核心', '系统设计'] },
    ],
    doctor: [
      { name: '前沿研究讲座', tags: ['科研'] },
      { name: '独立研究', tags: ['科研'] },
    ],
  };

  const quizQuestions = [
    {
      question: '你喜欢通过编程解决问题吗？',
      options: [
        { label: '非常喜欢', value: 3 },
        { label: '有点喜欢', value: 2 },
        { label: '不太感冒', value: 1 },
      ],
    },
    {
      question: '你对从海量数据中发现规律和趋势感兴趣吗？',
      options: [
        { label: '非常感兴趣', value: 3 },
        { label: '有点兴趣', value: 2 },
        { label: '没啥感觉', value: 1 },
      ],
    },
    {
      question: '你享受逻辑推理和数学挑战吗？',
      options: [
        { label: '是的，这是我的菜', value: 3 },
        { label: '偶尔可以', value: 2 },
        { label: '比较头疼', value: 1 },
      ],
    },
  ];

  const imageData = [
    {
      title: '校园开放日精彩回顾',
      thumbnail: '/act1.webp',
    },
    {
      title: '数据科学大神说',
      thumbnail: '/act2.webp',
    },
    {
      title: '我们的编程马拉松',
      thumbnail: '/act3.webp',
    },
    {
      title: '拔尖班宣讲会',
      thumbnail: '/act4.webp',
    },
  ];

  const achievements = {
    scholarships: [
      { name: '国家奖学金', amount: '8000元/年', requirement: '专业前5%' },
      { name: '企业专项奖学金', amount: '5000元/年', requirement: '相关领域突出表现' },
    ],
    competitions: [
      { name: 'ACM-ICPC 亚洲区金牌', count: 3 },
      { name: '“挑战杯”全国一等奖', count: 5 },
    ],
    papers: 42,
  };

  const admissionScores = [
    { year: 2023, score: 585 },
    { year: 2022, score: 582 },
    { year: 2021, score: 578 },
    { year: 2020, score: 576 },
    { year: 2019, score: 575 },
  ];

  useEffect(() => {
    const deadline = new Date('2024-09-01T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft('报名已截止');
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleQuizChange = (qIndex: number, value: number) => {
    setQuizAnswers({ ...quizAnswers, [qIndex]: value });
  };

  const handleQuizSubmit = () => {
    const totalScore = Object.values(quizAnswers).reduce((sum, val) => sum + val, 0);
    setQuizScore(totalScore);
  };

  const onFinish = (values: IFormValues) => {
    console.log('Received values of form: ', values);
    message.success('您的问题已提交，我们会尽快与您联系！');
    form.resetFields();
  };

  const renderQuizResult = () => {
    if (quizScore === null) return null;
    if (quizScore >= 7) {
      return (
        <Paragraph>
          <b>结果：</b>
          非常适合！你具备成为优秀数据科学家的潜质。推荐你深入了解我们的
          <Text code>机器学习</Text>和<Text code>AI</Text>相关课程。
        </Paragraph>
      );
    }
    if (quizScore >= 4) {
      return (
        <Paragraph>
          <b>结果：</b>
          比较适合。你对数据科学有一定兴趣，可以通过学习
          <Text code>数据结构</Text>
          等基础课程来培养能力。
        </Paragraph>
      );
    }
    return (
      <Paragraph>
        <b>结果：</b>
        可能需要再考虑一下哦。数据科学需要较强的编程和数学能力，不过兴趣是最好的老师！
      </Paragraph>
    );
  };

  return (
    <div style={{ background: '#fff', padding: '24px' }}>
      {/* Hero Section */}
      <div className="hero-section">
        <Avatar src="/logo.jpg" size={100} style={{ marginBottom: 24 }} />
        <Title level={1}>{basicInfo.fullName}</Title>
        <Paragraph style={{ fontSize: '18px' }}>{basicInfo.slogan}</Paragraph>
        <Button type="primary" size="large" shape="round">
          了解更多
        </Button>
      </div>

      {/* Dean's Message */}
      <Row justify="center" style={{ margin: '60px 0' }}>
        <Col xs={24} md={16}>
          <Card>
            <Row align="middle" gutter={24}>
              <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
                <Avatar src={deanMessage.photo} size={120} />
                <Title level={4} style={{ marginTop: 8 }}>
                  {deanMessage.name}
                </Title>
                <Text type="secondary">{deanMessage.title}</Text>
              </Col>
              <Col xs={24} sm={16}>
                <Title level={3}>院长寄语</Title>
                <Paragraph style={{ fontStyle: 'italic', fontSize: '16px' }}>
                  {deanMessage.message}
                </Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Core Competencies */}
      <Title level={2} className="section-title">
        核心优势
      </Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 40 }}>
        <Col xs={24} sm={12} md={8}>
          <Card className="competency-card">
            <BookOutlined />
            <Title level={4}>历史与文化</Title>
            <Paragraph>{coreCompetencies.history}</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="competency-card">
            <ExperimentOutlined />
            <Title level={4}>学科与科研</Title>
            <Paragraph>{coreCompetencies.academic}</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="competency-card">
            <TeamOutlined />
            <Title level={4}>师资力量</Title>
            <Paragraph>{coreCompetencies.faculty}</Paragraph>
          </Card>
        </Col>
      </Row>

      {/* 专业介绍/课程体系 */}
      <div
        style={{
          background: '#f9f9f9',
          padding: '40px 24px',
          borderRadius: '12px',
          marginBottom: '40px',
        }}
      >
        <Title level={2} className="section-title">
          专业介绍与课程体系
        </Title>
        <Paragraph>
          在本科课程设计方面,教学内容综合了计算机、应用数学与统计、信息系统等学科的专门知识。在培养方式上，学院形成了本、硕、博一体化的教学体系。在本科阶段以培养数据思维、设计思维，点燃数据科学与工程学习兴趣，形成利用云计算平台和利用开源、回馈开源的能力，以养成动手实践习惯为主要目标。
        </Paragraph>
        <Paragraph>
          在教学方式上，专业培养加强应用数学的课程教学，摒弃DTP（定义、定理、证明）式的教学方式，加强基础训练和算法实践的结合；加强学生数理统计、矩阵计算、计算数学与优化的训练，为机器学习、人工智能等知识的学习奠定基础；在计算机知识的教学方面，改变“百科全书”式的教学，对原有计算机课程进行裁剪、组合,并补充新知识、新技术，使之更贴近工程实践现状；在领域应用方面，强调数据的全生命周期管理与处理。
        </Paragraph>
        <Paragraph>
          专业通过课堂讲授、项目实践、应用调研与考察、课外创新等形式,在构建学生知识体系的同时锻炼他们理论联系实际的能力,体现应用驱动创新的办学理念。通过引入社会资源,例如设立企业奖学金,激励学生了解社会,并树立学以致用,解决社会经济发展中实际问题的理想与信心。
        </Paragraph>
        <Tabs defaultActiveKey="undergraduate" centered>
          <TabPane tab="本科生" key="undergraduate">
            <Row gutter={[16, 16]}>
              {courses.undergraduate.map((course) => (
                <Col xs={12} sm={8} md={6} key={course.name}>
                  <Card hoverable title={course.name}>
                    {course.tags.join(' / ')}
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab="硕士生" key="master">
            <Row gutter={[16, 16]}>
              {courses.master.map((course) => (
                <Col xs={12} sm={8} md={6} key={course.name}>
                  <Card hoverable title={course.name}>
                    {course.tags.join(' / ')}
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
          <TabPane tab="博士生" key="doctor">
            <Row gutter={[16, 16]}>
              {courses.doctor.map((course) => (
                <Col xs={12} sm={8} md={6} key={course.name}>
                  <Card hoverable title={course.name}>
                    {course.tags.join(' / ')}
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
        <Title level={3} className="section-title" style={{ marginTop: 40 }}>
          特色核心课程
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card>数据科学与工程导论</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>数据科学与工程数学基础</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>数据科学与工程算法</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>云计算系统</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>当代数据管理系统</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>分布式计算系统</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>统计方法与机器学习</Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>当代人工智能</Card>
          </Col>
        </Row>
      </div>

      {/* 近5年分数线 */}
      <div style={{ marginBottom: '40px' }}>
        <Title level={2} className="section-title">
          近5年分数线
        </Title>
        <Card>
          <List
            dataSource={admissionScores}
            renderItem={(item) => (
              <List.Item>
                <Text strong>{item.year}年:</Text> {item.score}分
              </List.Item>
            )}
          />
        </Card>
      </div>

      {/* 自测问卷 */}
      <Row justify="center" style={{ marginBottom: 40 }}>
        <Col xs={24} md={16}>
          <Card>
            <Title level={3} style={{ textAlign: 'center' }}>
              我适合这个专业吗？
            </Title>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {quizQuestions.map((q, index) => (
                <div key={index}>
                  <Paragraph strong>
                    {index + 1}. {q.question}
                  </Paragraph>
                  <Radio.Group onChange={(e) => handleQuizChange(index, e.target.value)}>
                    <Space direction="vertical">
                      {q.options.map((opt) => (
                        <Radio key={opt.value} value={opt.value}>
                          {opt.label}
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </div>
              ))}
              <Button type="primary" onClick={handleQuizSubmit} block>
                查看结果
              </Button>
              {renderQuizResult()}
            </Space>
          </Card>
        </Col>
      </Row>

      {/* 活动集锦 */}
      <div style={{ marginBottom: '40px' }}>
        <Title level={2} className="section-title">
          活动集锦
        </Title>
        <div className="video-wall">
          {imageData.map((image) => (
            <div className="video-card" key={image.title}>
              <img src={image.thumbnail} alt={image.title} />
              <div className="video-overlay">
                <Text style={{ color: 'white' }}>{image.title}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 奖学金与成果墙 */}
      <div className="achievements-wall" style={{ marginBottom: '40px' }}>
        <Title level={2} className="section-title">
          奖学金与成果墙
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <div className="achievement-card">
              <DollarCircleOutlined className="achievement-icon" style={{ color: '#faad14' }} />
              <Title level={3}>丰厚奖学金</Title>
              <List
                dataSource={achievements.scholarships}
                renderItem={(item: { name: string; amount: string }) => (
                  <List.Item>
                    <Text>
                      {item.name} ({item.amount})
                    </Text>
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="achievement-card">
              <TrophyOutlined className="achievement-icon" style={{ color: '#52c41a' }} />
              <Title level={3}>竞赛硕果</Title>
              <List
                dataSource={achievements.competitions}
                renderItem={(item: { name: string; count: number }) => (
                  <List.Item>
                    <Text>
                      {item.name} x {item.count}
                    </Text>
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="achievement-card">
              <ReadOutlined className="achievement-icon" style={{ color: '#1890ff' }} />
              <Title level={3}>科研成果</Title>
              <Statistic title="年均发表高水平论文" value={achievements.papers} suffix="篇" />
            </div>
          </Col>
        </Row>
      </div>

      {/* Student Showcase */}
      <div className="student-showcase">
        <Title level={2} className="section-title" style={{ color: '#333' }}>
          学生风采
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {studentShowcaseData.map((student, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="student-card" bordered={false}>
                <Avatar size={100} src={student.avatar} icon={<StarOutlined />} />
                <Title level={4} style={{ marginTop: 16 }}>
                  {student.name}
                </Title>
                <Paragraph type="secondary">{student.story}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Recent Activities & Campus Photos */}
      <Row gutter={[24, 24]} style={{ marginTop: 60 }}>
        <Col xs={24} md={12}>
          <Title level={2} className="section-title">
            近期活动
          </Title>
          <Card>
            <Timeline>
              {activities.map((act, index) => (
                <Timeline.Item key={index}>
                  <Text strong>{act.date}</Text>
                  <Title level={5}>{act.title}</Title>
                  <Paragraph>{act.description}</Paragraph>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2} className="section-title">
            校园掠影
          </Title>
          <Carousel autoplay>
            <div>
              <img
                src="/83e66730-3c97-4585-8a53-0acc8b0deb56.png"
                alt="Campus 1"
                className="carousel-img"
              />
            </div>
            <div>
              <img src="/640.webp" alt="Campus 2" className="carousel-img" />
            </div>
            <div>
              <img src="/641.webp" alt="Campus 3" className="carousel-img" />
            </div>
          </Carousel>
        </Col>
      </Row>

      {/* FAQ & Message Board */}
      <Row gutter={[24, 24]} style={{ marginTop: 60 }}>
        <Col xs={24} md={12}>
          <Title level={2} className="section-title">
            常见问答
          </Title>
          <Collapse accordion>
            {faqData.map((faq) => (
              <Panel header={faq.question} key={faq.key}>
                <Paragraph>{faq.answer}</Paragraph>
              </Panel>
            ))}
          </Collapse>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2} className="section-title">
            还有其他问题？
          </Title>
          <Card>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="name"
                label="您的称呼"
                rules={[{ required: true, message: '请输入您的称呼' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="contact"
                label="联系方式 (邮箱/电话)"
                rules={[{ required: true, message: '请输入您的联系方式' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="question"
                label="您的问题"
                rules={[{ required: true, message: '请输入您的问题' }]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  提交问题
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Map & CTA */}
      <Row gutter={[24, 24]} style={{ marginTop: 60 }}>
        <Col xs={24} md={12}>
          <Title level={2} className="section-title">
            <EnvironmentOutlined /> 我们在这里
          </Title>
          <Card>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.352324351335!2d121.4451258151438!3d31.23868998146256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b2658a611e2e5b%3A0x4347d78439a53484!2sEast%20China%20Normal%20University%20(Zhongshan%20North%20Road%20Campus)!5e0!3m2!1sen!2sus!4v1623402312345!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2} className="section-title">
            准备好加入我们了吗？
          </Title>
          <Card style={{ textAlign: 'center' }}>
            <Title level={4}>报名截止倒计时</Title>
            <Title level={2} style={{ color: '#f5222d' }}>
              {timeLeft}
            </Title>
            <Paragraph>不要错过成为数据科学未来领导者的机会！</Paragraph>
            <Space direction="vertical" size="large" style={{ marginTop: 24 }}>
              <Button type="primary" size="large" block>
                开放日报名
              </Button>
              <Button size="large" icon={<WechatOutlined />} block>
                咨询招生老师
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StudentPreview;
