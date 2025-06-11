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
  const [generatedContents, setGeneratedContents] = useState<GeneratedContent[]>([]);
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
