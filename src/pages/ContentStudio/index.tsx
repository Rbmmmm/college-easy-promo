import React, { useState } from 'react';
import {
  Card,
  Select,
  Button,
  Form,
  Input,
  Space,
  message,
  Upload,
  Tabs,
  Modal,
  Typography,
  Divider,
  Row,
  Col,
  Tag,
} from 'antd';
import {
  FileTextOutlined,
  EditOutlined,
  CopyOutlined,
  SoundOutlined,
  StarOutlined,
  HistoryOutlined,
  ExportOutlined,
  BulbOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { RcFile } from 'antd/es/upload';
import { generateContent } from '../../utils/gemini';

const { Option } = Select;
const { TextArea } = Input;
const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

// 类型定义
interface ContentFormValues {
  type: string;
  style: string;
  keywords: string;
  audience: string;
  purpose: string;
  tone: string;
  template: string;
  reference: string;
}

interface GeneratedContent {
  id: string;
  content: string;
  type: string;
  style: string;
  timestamp: number;
  isFavorite: boolean;
}

// 预设选项
const AUDIENCE_OPTIONS = [
  { label: '高中生', value: 'high_school' },
  { label: '家长', value: 'parents' },
  { label: '研究生', value: 'graduate' },
  { label: '企业代表', value: 'enterprise' },
];

const PURPOSE_OPTIONS = [
  { label: '官网', value: 'website' },
  { label: 'PPT', value: 'ppt' },
  { label: '短视频脚本', value: 'video' },
  { label: '海报文案', value: 'poster' },
  { label: '公众号', value: 'wechat' },
];

const TONE_OPTIONS = [
  { label: '正式', value: 'formal' },
  { label: '热情', value: 'enthusiastic' },
  { label: '青春', value: 'youthful' },
  { label: '鼓舞', value: 'inspiring' },
  { label: '幽默', value: 'humorous' },
  { label: '理性', value: 'rational' },
  { label: '煽情', value: 'emotional' },
  { label: '数据驱动', value: 'data_driven' },
];

const TEMPLATE_OPTIONS = {
  intro: [
    { label: '简洁版（150字）', value: 'brief' },
    { label: '官方版（300字）', value: 'official' },
    { label: '故事型（带时间线）', value: 'story' },
    { label: '数据型（含升学/就业数据）', value: 'data' },
  ],
  welcome: [
    { label: '标准致辞', value: 'standard' },
    { label: '个性化寄语', value: 'personal' },
    { label: '数据展示型', value: 'data_showcase' },
  ],
  // 其他类型可以继续添加
};

const ContentStudio: React.FC = () => {
  const [form] = Form.useForm();
  const [generatedContents, setGeneratedContents] = useState<GeneratedContent[]>([
    {
      id: '2025-master-admission',
      type: '招生简章',
      style: '正式',
      timestamp: new Date('2024-09-01').getTime(),
      isFavorite: true,
      content: `
# 新伙伴，新征程

2025年硕士研究生招生简章已发布，硕士招生报名正在火热进行。我们热忱欢迎新同学加入，共同开启一段充满挑战与创新的研究生旅程。我们期待理念认同、目标明确、基础扎实、习惯良好、勇敢坚持、自信阳光的你加入我们，共探知识的星辰大海，以开放的心态相互学习，共同成长。

由计算机技术推动的科技发展正在引发这个世界的深刻变革。数据，作为现实世界在网络信息空间的投影，隐含着丰富的信息和规律。数据作为新的生产要素，数据技术作为“未来技术”，需要新机器，新技术，新理论和新人才。选择DaSE，你将踏上一条由顶尖师资力量引领的学术之旅。在这里，每一位教授都是其领域的专家，他们不仅传授知识，更激发你的思考与创造；选择DaSE，你将接受最优质的学术和实训，在这里，学术不再是冰冷的理论，而是实践的火花。

![2024年秋，数据学院理科大楼实验室启用](/pictures/lab.png)

## 雄厚的师资力量和科研平台

在这片知识的海洋里，有一群璀璨的星辰汇聚在数据学院，以卓越的学术成就和深邃的智慧照亮了求知者的道路。兼具学术界深厚沉淀和工业界精深背景是数据学院导师团队的特色，全职导师队伍有来自京东、阿里、蚂蚁、华为、IBM、百度、英特尔等工业界的资深专家。黄波教授曾在英特尔任职近十七年，是英特尔中国区本土培养的第一位首席工程师及第一位资深首席工程师，被英特尔中国的工程师们亲切地称为“波哥”。结合其企业界的经验，黄波教授为学院学生带来了最前沿的技术理念及育人理念。学院教授也通过与企业之间的紧密合作践行科创融合，培育学生。周烜教授长期从事数据库的科研工作，与阿里、华为等领先的IT企业建立了密切的合作关系，共同合作解决企业面临的核心关键问题，是校企联聘的国家级领军人才。在“应用驱动创新”理念的感召下，一批国际知名的优秀专家也踊跃加盟，包括来自于丹麦奥尔堡大学的杨彬教授。目前，学院专业教师中有国家级领军人才4人，国家级青年人才计划3人，上海市优秀学术带头人3人，各类省部级优秀青年人才12人。

## 茁壮成长的数据学子

在浓厚的科研氛围和良好的学习氛围之下，一批批优秀的学生脱颖而出，在各行业成为翘楚。

2023届硕士毕业生的瞿璐祎在张蓉教授的指导下参与学院和PingCAP以及 OceanBase等数据库公司的校企联合项目，设计了应用场景仿真方法，解决了事务处理性能调优场景缺乏的问题；设计了分布式事务负载的分布式控制方法，解决了分布式事务数据库评测过程的公平性、评测结果的可比较性问题。瞿同学入职国网上海市电力公司。

2023届硕士毕业生冯元泊在蔡鹏教授的指导下参与了学院和OceanBase的校企合作项目，设计了高效的元数据到键值数据映射方法和锁管理机制，解决了云数仓中的元数据管理可扩展性和数据一致性问题，荣获华东师范大学优秀毕业生、优秀学生殊荣。冯同学入职华为。

2023届硕士毕业生韩思绮在陆雪松副教授的指导下针对代码语义表征、编程知识追踪、学生编程自动纠错等问题进行深入研究，调研大量文献，保持思维活力并不断进行代码实践，并主导研发了机器学习测评系统“水杉天梯”。韩同学入职摩根士丹利管理服务（上海）有限公司。

2024届硕士毕业生、班长宁志成在王伟教授的指导下积极参与了多个国际知名的开源项目，包括开源之夏、Apache、开放原子基金会项目，在阿里云PolarDB社区开发了开源观测体系与洞察大屏。宁同学入职蚂蚁集团，继续在开源与技术创新的道路上深耕发展。

2024届硕士毕业生谭可人在兰韵诗副教授的指导下参与了学院国际中文教育相关教育科技项目，利用深度学习的技术解决文本难度等级划分和改写的任务，让自然语言处理技术赋能国际中文教育；参与了学院与国泰君安证券股份有限公司的校企联合金融科技项目，提出指令自动生成方式和微调策略将通用大语言模型与稀缺金融图谱对齐，实现金融图谱上的自动问答，获得上海市优秀毕业生的荣誉。谭可人同学入职国泰君安证券股份有限公司。

2024届硕士毕业生余烨凯在张召教授的指导下参与学院和蚂蚁集团以及欧冶云商等公司的校企联合项目，设计了高效的数据同步方法与交易状态重放方法，解决了区块链数据同步至链下存储时的数据新鲜度问题；设计了面向区块链数据的时序图存储方法与新型索引结构，解决了如何针对历史窗口执行高效即席图查询的问题。余同学目前入职腾讯。

## 数据——驱动数字化转型和数字经济的新能源

数据和土地、劳动、资本和科技一样，是一种生产要素，是建设数字中国的基础，是驱动数字化转型和数字经济的一种新能源（Power）。基于数据，已经并且还将继续出现一大批新兴应用。在应用背后，我们需要新方法、新技术、新理论，也需要新的人才。数据学院旨在以数据为对象，研究其中的科学与工程问题，在这个过程中培养理解数据价值、熟悉数据思维、具备数据工程实践能力的“硬核”科技人才。学院以实际问题和社会痛点为出发点，用创新思路和开源技术解决问题，通过与企业和行业的紧密联动和融合，力争形成赋能产业的原创型科研成果。

学院现有上海市大数据管理系统工程研究中心、区块链数据管理教育部工程研究中心、教育部智能教育信息科技创新引智基地（111引智基地）、全民数字素养与技能培训基地（国家级）等四个重点科研与育人基地，11个校企联合实验室。这些科研基地的研究任务和科研成果是研究生培养的基础，通过校企联合、开源协同，形成了联合学校、实验室、工程研究中心、企业、开源社区的产学研一体化的科学研究与人才培养平台。

![学院发展历程](/pictures/history.png)
![校企联合实验室](/pictures/labs.png)

## 应用驱动创新，开放成就创新

数据学院秉持“应用驱动创新”和“开放成就创新”的发展理念，岀于“做真的研究，做有用的研究”的初心，以实际问题，特别是针对金融、教育、物流等多个行业数字化转型中的痛点问题，围绕数据全生命周期管理以及基于数据的智能服务和应用开展系统性研究，在数据系统、区块链数据管理、数据中台、数据治理的核心技术与方法、理论方面取得了突破性的成果，并在金融科技（FinTech）、教育科技（EduTech）、物流科技（LogTech）、营销科技（MarketTech）等应用领域与一批科技创新企业和一线应用单位紧密合作，在开展研究的过程中，形成一批赋能产业的原创性科研成果，培养能够发挥数据价值的创新型人才。科研团队获得国家科技进步二等奖一次，省部级科技一等奖四次，一级学会科技一等奖一次。

![学院研究方向](/pictures/directions.png)

## 2025年招生学科

![2025年招生学科](/pictures/subjects.png)

### 2025年学硕招生信息

1.  **招生人数**：36
2.  **考试科目**：
    *   ①101思想政治理论
    *   ②201英语（一）
    *   ③302数学（二）
    *   ④824数据科学与工程综合
3.  **初试、复试范围**：请见招生目录
    https://yjszs-ks.ecnu.edu.cn/zsml/sszsml/index/2025
    “162数据科学与工程学院-089901数据科学与工程”

### 2025年专硕招生信息

1.  **招生人数**：（全日制）85；（非全日制）18
2.  **考试科目**：
    *   ①101思想政治理论
    *   ②204英语（二）
    *   ③302数学（二）
    *   ④829数据工程基础
3.  **初试、复试范围**：请见招生目录
    https://yjszs-ks.ecnu.edu.cn/zsml/sszsml/index/2025
    “162数据科学与工程学院-085411大数据技术与工程”

## 其他说明

1.  **报考条件、报名方法等重要信息**：请关注华东师范大学研究生招生简章（请见文末相关链接）。
2.  **报名时间**：2024年10月15日至10月28日，每天9:00-22:00。
`,
    },
  ]);
  const [activeTab, setActiveTab] = useState('1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewContent, setPreviewContent] = useState('');

  // 处理内容生成
  const handleGenerate = async (values: ContentFormValues) => {
    setIsGenerating(true);
    try {
      // 根据表单值构建 Prompt
      const prompt = `
        请你扮演一位专业的大学招生宣传内容创作者。
        根据以下要求，为我生成一段招生宣传文案：
        - 内容类型: ${form.getFieldValue('type')}
        - 内容风格: ${form.getFieldValue('style')}
        - 目标受众: ${form.getFieldValue('audience')}
        - 内容用途: ${form.getFieldValue('purpose')}
        - 语气/情感风格: ${form.getFieldValue('tone')}
        - 内容结构模板: ${form.getFieldValue('template')}
        - 关键词: ${values.keywords}
        - 参考内容: ${values.reference}

        请严格按照以上要求生成内容，确保文案流畅、有吸引力，并且必须只使用中文进行输出。
      `;

      const aiContent = await generateContent(prompt);

      const newContent: GeneratedContent = {
        id: Date.now().toString(),
        content: aiContent,
        type: values.type,
        style: values.style,
        timestamp: Date.now(),
        isFavorite: false,
      };

      setGeneratedContents((prev) => [newContent, ...prev]);
      message.success('内容生成成功！');
    } catch (error) {
      console.error(error);
      message.error('生成失败，请检查API Key或网络连接后重试');
    } finally {
      setIsGenerating(false);
    }
  };

  // 处理内容导出
  const handleExport = (content: string, format: string) => {
    // TODO: 实现导出功能
    message.success(`已导出为${format}格式`);
  };

  // 处理内容收藏
  const handleFavorite = (id: string) => {
    setGeneratedContents((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isFavorite: !item.isFavorite } : item))
    );
  };

  // 处理语音输入
  const handleVoiceInput = () => {
    // TODO: 实现语音输入功能
    message.info('语音输入功能开发中...');
  };

  // 处理灵感模式
  const handleInspiration = () => {
    const inspirations = [
      '写一个关于学院科研成果的热血口号',
      '创作一段吸引高中生的学院简介',
      '设计一个突出就业优势的宣传语',
    ];
    const randomInspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
    form.setFieldsValue({ keywords: randomInspiration });
    message.info('已为您生成灵感提示');
  };

  // 处理参考文件上传
  const uploadProps: UploadProps = {
    beforeUpload: (file: RcFile) => {
      const isText = file.type === 'text/plain';
      if (!isText) {
        message.error('只能上传文本文件！');
      }
      return false;
    },
    onChange: (info) => {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      }
    },
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>智能内容创作坊</Title>
      <Paragraph>基于学院信息，快速生成各类招生宣传文案</Paragraph>

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane tab="内容创作" key="1">
          <Card style={{ marginBottom: 24 }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleGenerate}
              initialValues={{
                type: 'intro',
                style: 'academic',
                audience: 'high_school',
                purpose: 'website',
                tone: 'formal',
                template: 'brief',
              }}
            >
              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label="内容类型"
                    rules={[{ required: true, message: '请选择内容类型' }]}
                  >
                    <Select placeholder="请选择内容类型">
                      <Option value="intro">学院综合简介</Option>
                      <Option value="welcome">院长致辞</Option>
                      <Option value="report">年度报告摘要</Option>
                      <Option value="wechat">微信公众号推文</Option>
                      <Option value="notice">招生快讯/通知</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="style"
                    label="内容风格"
                    rules={[{ required: true, message: '请选择内容风格' }]}
                  >
                    <Select placeholder="请选择内容风格">
                      <Option value="academic">学术严谨</Option>
                      <Option value="vivid">活泼生动</Option>
                      <Option value="professional">专业权威</Option>
                      <Option value="friendly">亲切友好</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    name="audience"
                    label="目标受众"
                    rules={[{ required: true, message: '请选择目标受众' }]}
                  >
                    <Select placeholder="请选择目标受众">
                      {AUDIENCE_OPTIONS.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="purpose"
                    label="内容用途"
                    rules={[{ required: true, message: '请选择内容用途' }]}
                  >
                    <Select placeholder="请选择内容用途">
                      {PURPOSE_OPTIONS.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col span={12}>
                  <Form.Item
                    name="tone"
                    label="语气/情感风格"
                    rules={[{ required: true, message: '请选择语气风格' }]}
                  >
                    <Select placeholder="请选择语气风格">
                      {TONE_OPTIONS.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="template"
                    label="内容结构模板"
                    rules={[{ required: true, message: '请选择内容模板' }]}
                  >
                    <Select placeholder="请选择内容模板">
                      {TEMPLATE_OPTIONS.intro.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item name="keywords" label="关键词" help="输入关键词，帮助AI更好地理解您的需求">
                <Input.TextArea
                  placeholder="请输入关键词，用逗号分隔"
                  autoSize={{ minRows: 2, maxRows: 4 }}
                />
              </Form.Item>

              <Form.Item name="reference" label="参考内容" help="可以粘贴已有的内容作为参考">
                <Input.TextArea
                  placeholder="请粘贴参考内容"
                  autoSize={{ minRows: 3, maxRows: 6 }}
                />
              </Form.Item>

              <Form.Item label="上传参考文件">
                <Upload {...uploadProps}>
                  <Button icon={<FileTextOutlined />}>上传文件</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<FileTextOutlined />}
                    loading={isGenerating}
                  >
                    生成内容
                  </Button>
                  <Button icon={<SoundOutlined />} onClick={handleVoiceInput}>
                    语音输入
                  </Button>
                  <Button icon={<BulbOutlined />} onClick={handleInspiration}>
                    获取灵感
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>

          {generatedContents.length > 0 && (
            <Card title="生成结果">
              {generatedContents.map((content) => (
                <div key={content.id} style={{ marginBottom: 24 }}>
                  <div style={{ marginBottom: 16 }}>
                    <Space>
                      <Tag color="blue">{content.type}</Tag>
                      <Tag color="green">{content.style}</Tag>
                      <Button
                        type="text"
                        icon={
                          <StarOutlined
                            style={{
                              color: content.isFavorite ? '#fadb14' : undefined,
                            }}
                          />
                        }
                        onClick={() => handleFavorite(content.id)}
                      />
                      <Button
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => {
                          setPreviewContent(content.content);
                          setShowPreview(true);
                        }}
                      />
                      <Button
                        type="text"
                        icon={<CopyOutlined />}
                        onClick={() => {
                          navigator.clipboard.writeText(content.content);
                          message.success('已复制到剪贴板');
                        }}
                      />
                      <Button
                        type="text"
                        icon={<ExportOutlined />}
                        onClick={() => handleExport(content.content, 'markdown')}
                      />
                      <Button
                        type="text"
                        icon={<ShareAltOutlined />}
                        onClick={() => message.info('分享功能开发中...')}
                      />
                    </Space>
                  </div>
                  <div style={{ whiteSpace: 'pre-wrap' }}>{content.content}</div>
                  <Divider />
                </div>
              ))}
            </Card>
          )}
        </TabPane>

        <TabPane tab="历史记录" key="2">
          <Card>
            {generatedContents.length > 0 ? (
              generatedContents.map((content) => (
                <div key={content.id} style={{ marginBottom: 16 }}>
                  <Space>
                    <HistoryOutlined />
                    <span>{new Date(content.timestamp).toLocaleString()}</span>
                    <Tag color="blue">{content.type}</Tag>
                    <Button
                      type="text"
                      icon={
                        <StarOutlined
                          style={{
                            color: content.isFavorite ? '#fadb14' : undefined,
                          }}
                        />
                      }
                      onClick={() => handleFavorite(content.id)}
                    />
                  </Space>
                  <div style={{ marginTop: 8, color: '#666' }}>
                    {content.content.substring(0, 100)}...
                  </div>
                  <Divider />
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', color: '#999' }}>暂无历史记录</div>
            )}
          </Card>
        </TabPane>
      </Tabs>

      <Modal
        title="编辑内容"
        open={showPreview}
        onCancel={() => setShowPreview(false)}
        width={800}
        footer={[
          <Button key="cancel" onClick={() => setShowPreview(false)}>
            取消
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => {
              message.success('保存成功');
              setShowPreview(false);
            }}
          >
            保存
          </Button>,
        ]}
      >
        <TextArea
          value={previewContent}
          onChange={(e) => setPreviewContent(e.target.value)}
          autoSize={{ minRows: 10, maxRows: 20 }}
        />
      </Modal>
    </div>
  );
};

export default ContentStudio;
