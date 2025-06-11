import React from 'react';
import { Typography, Button, Row, Col, Card, Avatar, Timeline, Carousel, Collapse } from 'antd';
import { BookOutlined, TeamOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks';
import './style.css';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const StudentPreview: React.FC = () => {
  const profile = useAppSelector((state) => state.collegeProfile);
  const { basicInfo, deanMessage, coreCompetencies } = profile;

  // 假设从其他地方获取活动和FAQ数据
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

  return (
    <div style={{ background: '#fff', padding: '24px' }}>
      {/* Hero Section */}
      <div className="hero-section">
        <Avatar src={basicInfo.logo} size={100} style={{ marginBottom: 24 }} />
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
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                alt="Campus 1"
                className="carousel-img"
              />
            </div>
            <div>
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.jpeg"
                alt="Campus 2"
                className="carousel-img"
              />
            </div>
          </Carousel>
        </Col>
      </Row>

      {/* FAQ */}
      <Title level={2} className="section-title" style={{ marginTop: 60 }}>
        常见问答
      </Title>
      <Row justify="center">
        <Col xs={24} md={18}>
          <Collapse accordion>
            {faqData.map((faq) => (
              <Panel header={faq.question} key={faq.key}>
                <Paragraph>{faq.answer}</Paragraph>
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default StudentPreview;
