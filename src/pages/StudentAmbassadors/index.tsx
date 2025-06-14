import React from 'react';
import { Card, Row, Col, Typography, Avatar, Tag, Button, Divider } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const ambassadors = [
  {
    id: 1,
    name: '张三',
    major: '2020级 数据科学与大数据技术',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    tags: ['国奖获得者', '编程大神', '社团达人'],
    quote: '在这里，我不仅学到了硬核的专业知识，更找到了志同道合的伙伴。',
    story:
      '大一的我，也曾对未来感到迷茫。但数据学院开放的氛围和丰富的资源，让我有机会不断尝试和挑战自我。从参与第一个编程项目，到带领团队拿下全国大奖，每一步都离不开老师的悉心指导和同学们的相互鼓励...',
  },
  {
    id: 2,
    name: '李四',
    major: '2021级 软件工程',
    avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniV.png',
    tags: ['创业先锋', '实习Offer收割机'],
    quote: '选择这里，就是选择了一种加速成长的可能性。',
    story:
      '学院非常注重实践能力的培养，和多家大厂共建了联合实验室。我从大二开始就进入实验室，接触真实的企业项目，这为我后来找实习、甚至创立自己的公司都打下了坚实的基础...',
  },
  {
    id: 3,
    name: '王五',
    major: '2022级 计算机科学与技术',
    avatar: 'https://zos.alipayobjects.com/rmsportal/pWfAxMnfSmIZMusVaxGg.png',
    tags: ['科研新星', '保研清华'],
    quote: '浓厚的学术氛围，让我可以心无旁骛地追求自己的科研梦想。',
    story:
      '如果你对科研有浓厚的兴趣，那这里绝对是你的不二之选。学院的导师们都是各自领域的专家，他们非常乐于带领本科生探索前沿课题。我很幸运能加入王伟教授的团队，参与国家重点研发计划项目...',
  },
];

const StudentAmbassadors: React.FC = () => {
  return (
    <div style={{ padding: '24px', background: '#f0f2f5' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2}>学长学姐说 | 招生大使风采</Title>
        <Paragraph>
          听听来自五湖四海的优秀在校生分享他们的成长故事与就读体验，感受最真实的大学生活。
        </Paragraph>
      </div>

      {ambassadors.map((ambassador) => (
        <Card key={ambassador.id} style={{ marginBottom: 24 }}>
          <Row align="middle" gutter={[24, 16]}>
            <Col xs={24} md={6} style={{ textAlign: 'center' }}>
              <Avatar size={120} src={ambassador.avatar} />
              <Title level={4} style={{ marginTop: 8 }}>
                {ambassador.name}
              </Title>
              <Text type="secondary">{ambassador.major}</Text>
              <div style={{ marginTop: 8 }}>
                {ambassador.tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </Col>
            <Col xs={24} md={18}>
              <Paragraph style={{ fontSize: 16, fontStyle: 'italic' }}>
                “{ambassador.quote}”
              </Paragraph>
              <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: '展开阅读' }}>
                {ambassador.story}
              </Paragraph>
              <Divider />
              <Button type="primary" icon={<MessageOutlined />}>
                向TA提问
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default StudentAmbassadors;
