import React, { useState } from 'react';
import { Card, List, Tag, Avatar, Typography, Tabs, Button, Modal, Input, Collapse } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Panel } = Collapse;

interface QAItem {
  id: string;
  asker: {
    name: string;
    avatar: string;
  };
  question: string;
  answer?: string;
  status: '已回答' | '待回答';
  timestamp: string;
}

interface FAQItem {
  key: string;
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    key: '1',
    question: '能介绍一下华东师范大学“数据科学与大数据技术”专业吗？',
    answer: (
      <Paragraph>
        2017年3月17日，教育部公布了2016年度普通高等学校本科专业备案和审批结果，华东师范大学获批新增“数据科学与大数据技术专业（专业代码为080910T）”，成为第二批设立这个新专业的学校。实际上，四年前我们就向学校提出了关于设立“数据科学与工程”本科专业的建议。在研究生培养的学科方向上，学校在2013年9月成立“数据科学与工程研究院”以后就批准自主设置“数据科学与工程”二级学科，开始“数据科学与工程”学科的硕士生与博士生培养。2016年9月成立“数据科学与工程学院”的时候，我们明确新学院的简称为“数据学院”，所以，我们更愿意简称数据学院的本科专业为“数据专业”，简称研究生学科为“数据学科”。我们亦会在今后的办学实践中赋予这个专业和学科丰富的、具有时代特点的内涵。
      </Paragraph>
    ),
  },
  {
    key: '2',
    question: '数据专业的定位和人才培养特点是什么？',
    answer: (
      <>
        <Paragraph>
          我们把新的数据专业定位为：新时期的计算机专业。所谓“新时期”是指被互联网改变了的或正在被互联网改变的时代。当前，在我国实施的“大数据国家战略”以及倡导的“互联网+行动计划”正是国家层面对“新时期”及其代表的发展趋势做出的必然反应。这个时代是“重构一切”的时代，产品、服务如是，专业和学科亦然。数据专业仍然是以计算机为核心，不同的地方在于应用驱动、交叉和联动。新时期的计算机专业不再囿于专业的小圈子，是与外界密切结合，其根本目的是解决实际问题。这符合计算机专业的工具性质。具体而言，我们数据专业人才培养有三大特点。
        </Paragraph>
        <Paragraph>
          第一个特点是“造车”。新的数据专业其目标是培养“造车的”，而不仅限于培养“开车的”。在信息化的初级阶段，传统的计算机专业更像是培养“开车的驾驶员”，其培养目标就是基于现成的硬软件系统开发、应用与维护系统，实质为开现成的车。近二十年来，随着互联网应用突飞猛进的发展，我国信息化建设获得了跨越式的发展。在信息化发展的高级阶段，亟需根据需求“度身定制”信息化系统，“造车的”系统架构师就是能担当此重任的人。
        </Paragraph>
        <Paragraph>
          第二个特点是“点燃”。
          “教育不是灌输，而是点燃火炬”是苏格拉底的名言。新时期合格数据人才的培养过程漫长且艰巨，本科期间的培养尤其需要精心设计，重点在于“点燃”学生的兴趣，培养其具备自我学习和终身学习的能力，并与硕士、博士的培养环节紧密衔接，形成系统科学的高端人才培养体系。
        </Paragraph>
        <Paragraph>
          第三个特点是“开放”。新的时期，技术的研发和应用不再局限于封闭的世界，有了云计算环境和开源软件社区，形成典型的“万众创新”场景。“living
          on the cloud, swimming in the (open source)
          pool”是数据专业培养人才的基本生存环境，换言之，应能游刃有余地利用云计算和开源社区的资源。
        </Paragraph>
      </>
    ),
  },
  {
    key: '3',
    question: '数据专业如何招生？',
    answer: (
      <Paragraph>
        在考虑设立这样一个新专业的时候，我们就深深地知道，这不是一个轻松易学的专业，因此，我们从一开始就计划把它打造成一个“硬专业（hard
        major）”。这里的“硬”有两重含义：一个含义是学好了就掌握的“硬”本领，就会成为不可或缺的人才和事业有成的人；另一个含义就是学习过程很艰难很辛苦，非一般同学可以承受。当然，有了学习的兴趣和成才的志向，学习和训练过程的苦就会成为一种享受。正因为如此，我们在前三年的试点阶段不列入高考招生计划，也就是说，不直接招收高中毕业生，而是只从本校的转专业同学和上海市的插班生同学中招收新生。入读本专业以后，从二年级开始培养。这样做的一个最主要的目的是有机会考察申请同学的学习兴趣、专业志向、性格毅力、团队精神等因素。在初期，我们也只是进行小规模试点，希望教师团队和学生集体尽快形成休戚与共、教学相长、积极向上、敢于创新的良好氛围。
      </Paragraph>
    ),
  },
  {
    key: '4',
    question: '数据专业的培养目标是什么？',
    answer: (
      <Paragraph>
        数据专业致力于培养具有设计思维和数据思维的“系统架构师”与“数据科学家”。
        培养学生掌握数据科学全生命周期，包括数据收集、数据加工（审计、清洗、转换、集成、脱敏、归约和标注）、数据管理（存储、探索性分析和可视化）、数据分析和数据应用所涉及的各种基础理论和工具。使学生具备海量数据管理与处理系统和工具的使用、设计和开发能力；具备深度数据分析和数据挖掘的算法设计和工程化能力；具备从事创造性科学研究、领域应用解决方案构建以及独立主持本专业技术工作所需要的基础理论与动手实践能力。
      </Paragraph>
    ),
  },
  {
    key: '5',
    question: '数据专业和计算机、软件、统计等专业的区别是什么？',
    answer: (
      <Paragraph>
        简单地说，包括两方面：培养内容和培养方式不同。数据专业的教学计划包括三个方面：1）计算机，包括计算机科学理论、计算机系统等；2）应用数学，包括统计、数值计算和优化等；3）信息系统，包括数据的全生命周期管理、应用建模、商业分析等内容。这些内容相互交叉，我们通过裁剪、组合、补充，形成区别于传统计算机、软件、统计、信息系统等专业的新的教学计划，以适应大数据环境下的应用和系统研发的综合需要。在培养方式上，采用小班化，师生朝夕相处，关系密切；专业强调“应用驱动创新”，通过与企业的紧密合作，接触实际问题，真正做到“做中学”，锻炼应用建模和解决实际问题的能力；数据学院也将建设“本-硕-博”一体化、阶梯状上升的课程体系，按照知识难度由浅入深、由经典到前沿的螺旋方式编排课程学习内容，例如：统计基础-高级统计选讲-机器学习-深度学习，以及数据库-分布式系统-数据库系统实现等，在确保课程完整性的同时，保持课程内容的时效性和前沿性；强调理论与实践并重，目标为培养“造车的”，而不仅仅是培养“开车的”驾驶员。
      </Paragraph>
    ),
  },
  {
    key: '6',
    question: '数据专业的转专业本科生的培养计划是什么样的？',
    answer: (
      <Paragraph>
        我们已制定了转专业本科生的培养计划，可到中山北路校区数学馆东106办公室或数学馆东114办公室取阅。
      </Paragraph>
    ),
  },
  {
    key: '7',
    question: '数据专业的转专业本科生需要重新读大一吗？',
    answer: (
      <Paragraph>
        一般情况下，转专业学生从大二开始学习，三年完成专业学习（即2018年的入学同学正常将于三年以后的2021年毕业）。但是，根据不同的情况，转专业学生可能需要补修一些课程。另外，转专业同学大一已经修读的部分课程的成绩和学分将根据教务处的统一规定被认定为学生的已修课程。
      </Paragraph>
    ),
  },
  {
    key: '8',
    question: '数据专业为什么只招收转专业和插班学生？',
    answer: (
      <Paragraph>
        我们希望转专业和插班生同学对于自身的发展目标有明确的认识，经过慎重考虑根据自己的兴趣，报考“数据科学与大数据技术”专业。另一方面，我们也会通过考试和面试挑选最适合的学生修读这一专业。
      </Paragraph>
    ),
  },
  {
    key: '9',
    question: '数据专业的转专业考试注重学生哪方面的知识和能力？',
    answer: (
      <Paragraph>
        转专业考试共分为笔试和面试两部分，各占比50%。其中，面试部分我们将采取小型座谈聊天的方式，并非是严肃刻板的氛围，希望通过轻松友好的交流，来了解学生的修读意愿、专业兴趣和思考习惯，所以也请同学们不要过于紧张，放松心态。入学后，我们希望学生打好数据科学、数据工程两方面的知识基础，培养较强的动手实践能力。
      </Paragraph>
    ),
  },
  {
    key: '10',
    question: '如果没学过转专业笔试中的数学内容，但我仍对这个专业很感兴趣，可以报考吗？',
    answer: (
      <Paragraph>
        本次转专业笔试涵盖一元微积分、线性代数、英语，以及基础综合能力。在笔试中，我们侧重于考察学生的基本素质和思考能力。建议有意向报考的同学在适当补习的基础上积极报考。
      </Paragraph>
    ),
  },
  {
    key: '11',
    question: '数据专业的教师队伍的构成是什么样的？',
    answer: (
      <Paragraph>
        教师主要来自于数据科学与工程学院。教师都具有丰富的计算机、数据库、数据挖掘、机器学习、信息检索、计算数学等方面的教学和科研经验。作为新领域交叉专业，部分课程会请校内其他专业和其他高校以及具有企业背景的最适合的老师开设。另外，每年暑假有“数据科学与工程”暑期学校，围绕相关主题邀请国内外老师开设短期课程。
      </Paragraph>
    ),
  },
  {
    key: '12',
    question: '数据专业的教学资源如何？',
    answer: (
      <Paragraph>
        我们会给班级配置一个专门的机房，保证每位学生有一台计算机完成作业、实验、研究等学习任务，也欢迎同学们在机房中自习和交流，形成良好的集体感和学习氛围。此外，我们采用导师配对制，学生可以根据个人的专业兴趣选择对应领域的老师作为自己的导师，导师将会定期与学生进行沟通，指导学生的学习和研究。学院也会组织多次班会和研讨会，老师和学生介绍各自的研究项目，开拓学生的视野和兴趣方向，有助于同学们在学业上的深入思考和探讨。
      </Paragraph>
    ),
  },
  {
    key: '13',
    question: '数据专业学生将来的就业去向是哪里？毕业生在哪些方面会有优势？',
    answer: (
      <Paragraph>
        我们数据专业的培养目标是使学生具备成为“系统架构师”和“数据科学家”所需的基础理论和专门知识。我们希望学生将来能成为“系统架构师”或“数据科学家”。学生不仅能够去新兴互联网行业，还能去金融、电信、能源、电力等重要领域从事关键任务应用系统的数据管理、数据分析、大数据应用的设计与开发工作。此外，对进一步学习和科研感兴趣的同学，学院还设计了有针对性的“本-硕-博”一体化培养方案。学生得到的培养可对接国内外的相关专业研究生培养。
      </Paragraph>
    ),
  },
  {
    key: '14',
    question: '哪里能找到详细的“数据科学与大数据技术”转专业相关的信息？',
    answer: (
      <Paragraph>
        请关注华东师范大学教务处网站关于转专业的通知（http://www.jwc.ecnu.edu.cn/s/110/t/486/82/0d/info164365.htm），同时请关注数据科学与工程学院主页（http://dase.ecnu.edu.cn/），以及数据学院微信公众号：dase_ecnu。
      </Paragraph>
    ),
  },
  {
    key: '15',
    question: '如果还有数据专业转专业相关的问题，应该找谁咨询？',
    answer: (
      <Paragraph>
        可随时联系钱卫宁老师：办公室电话：021-62235738，邮件：wnqian@dase.ecnu.edu.cn
      </Paragraph>
    ),
  },
];

const InteractiveQA: React.FC = () => {
  const [questions, setQuestions] = useState<QAItem[]>([
    {
      id: '1',
      asker: { name: '迷茫的高三生', avatar: 'https://joeschmoe.io/api/v1/random' },
      question: '请问数据科学与工程学院的王牌专业是什么？毕业后好找工作吗？',
      answer:
        '同学你好！我院的“数据科学与大数据技术”是国家级一流本科专业建设点，也是我们的王牌专业。毕业生深造率连续两年位列全校第一（86.5%），就业率100%，多数进入阿里、腾讯、字节、华为等国内外知名企业的数据相关岗位，职业竞争力非常强。',
      status: '已回答',
      timestamp: '2天前',
    },
    {
      id: '2',
      asker: { name: '学生家长', avatar: 'https://joeschmoe.io/api/v1/female/random' },
      question: '学院的师资力量如何？有多少知名教授？',
      answer:
        '家长您好！我院现有教职工73人，其中包括4位国家级领军人才、2位国家级青年人才、3位上海市学术带头人，以及12位省部级优秀青年人才。正高级职称占比近70%，拥有一支学术与工程能力兼具的高水平教师队伍。',
      status: '已回答',
      timestamp: '1天前',
    },
    {
      id: '3',
      asker: { name: '好奇宝宝', avatar: 'https://joeschmoe.io/api/v1/male/random' },
      question: '请问学院的男女比例怎么样？学习压力大吗？',
      status: '待回答',
      timestamp: '5小时前',
    },
    {
      id: '4',
      asker: { name: '一位不愿透露姓名的同学', avatar: 'https://joeschmoe.io/api/v1/jia' },
      question: '非计算机专业的学生，可以转专业到数据学院吗？有什么要求？',
      answer:
        '同学你好，我院自2017年起就通过转专业和插班方式招收本科生，非常欢迎对数据科学有浓厚兴趣的同学加入。我们注重学生的数学与逻辑思维基础，会采用双向选择机制，选拔具有潜力、愿意接受挑战的同学。具体的流程和要求可以关注教务处的官方通知。',
      status: '已回答',
      timestamp: '3天前',
    },
    {
      id: '5',
      asker: { name: '考研咨询', avatar: 'https://joeschmoe.io/api/v1/jess' },
      question: '学院的保研和考研政策是怎样的？对外校学生友好吗？',
      status: '待回答',
      timestamp: '2小时前',
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QAItem | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleReply = (item: QAItem) => {
    setCurrentQuestion(item);
    setReplyContent(item.answer || '');
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    if (!currentQuestion) return;

    const updatedQuestions = questions.map((q) =>
      q.id === currentQuestion.id ? { ...q, answer: replyContent, status: '已回答' as const } : q
    );
    setQuestions(updatedQuestions);
    setIsModalVisible(false);
    setCurrentQuestion(null);
    setReplyContent('');
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setCurrentQuestion(null);
    setReplyContent('');
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>互动答疑中心</Title>
      <Paragraph>在这里，你可以集中管理和回复所有学生的提问，并维护常见问题列表。</Paragraph>

      <Tabs defaultActiveKey="1">
        <TabPane tab="问答列表" key="1">
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={questions}
            renderItem={(item) => (
              <li>
                <Card style={{ marginTop: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <Avatar src={item.asker.avatar} icon={<UserOutlined />} />
                    <div style={{ marginLeft: 12 }}>
                      <Text strong>{item.asker.name}</Text>
                      <Text type="secondary" style={{ marginLeft: 8 }}>
                        {item.timestamp}
                      </Text>
                    </div>
                    <Tag
                      color={item.status === '已回答' ? 'green' : 'orange'}
                      style={{ marginLeft: 'auto' }}
                    >
                      {item.status}
                    </Tag>
                  </div>
                  <Paragraph>{item.question}</Paragraph>
                  {item.answer && (
                    <Card type="inner" title="你的回复">
                      {item.answer}
                    </Card>
                  )}
                  <Button onClick={() => handleReply(item)} style={{ marginTop: 12 }}>
                    {item.status === '已回答' ? '编辑回复' : '回复'}
                  </Button>
                </Card>
              </li>
            )}
          />
        </TabPane>
        <TabPane tab="常见QA管理" key="2">
          <Card>
            <Title level={4}>常见问题（FAQ）管理</Title>
            <Paragraph>在这里管理常见问题，内容将在学生端展示。</Paragraph>
            <Collapse accordion>
              {faqData.map((faq) => (
                <Panel header={faq.question} key={faq.key}>
                  {faq.answer}
                </Panel>
              ))}
            </Collapse>
          </Card>
        </TabPane>
      </Tabs>

      <Modal
        title={`回复 ${currentQuestion?.asker.name || ''} 的问题`}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="提交回复"
        cancelText="取消"
      >
        <Title level={5}>问题</Title>
        <Paragraph>{currentQuestion?.question}</Paragraph>
        <Title level={5}>你的回复</Title>
        <TextArea
          rows={4}
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="请输入你的回复..."
        />
      </Modal>
    </div>
  );
};

export default InteractiveQA;
