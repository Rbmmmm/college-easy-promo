import React, { useState } from 'react';
import { Card, Select, Button, Form, Input, Space, message } from 'antd';
import { FileTextOutlined, EditOutlined, CopyOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

interface ContentFormValues {
  type: string;
  style: string;
  keywords: string;
}

const ContentStudio: React.FC = () => {
  const [form] = Form.useForm();
  const [generatedContent, setGeneratedContent] = useState<string>('');

  const handleGenerate = (values: ContentFormValues) => {
    // 模拟AI生成内容
    const mockContent = `基于您选择的内容类型"${values.type}"和风格"${values.style}"，以下是生成的内容：

【标题】计算机科学与技术学院2024年招生简章

【正文】
尊敬的考生：

欢迎报考计算机科学与技术学院！我院成立于1985年，是国家重点学科建设单位，拥有多个省部级重点实验室。学院秉承"厚德博学、求是创新"的校训，致力于培养具有国际视野和创新能力的计算机领域精英人才。

【专业特色】
1. 一流师资：拥有多位国家级人才和长江学者
2. 科研实力：承担多项国家重点研发计划项目
3. 国际交流：与多所世界知名高校建立合作关系
4. 就业前景：毕业生就业率保持在98%以上

【招生计划】
2024年计划招收本科生300人，包括：
- 计算机科学与技术：150人
- 软件工程：100人
- 人工智能：50人

【联系方式】
招生咨询电话：010-12345678
电子邮箱：cs@university.edu.cn`;

    setGeneratedContent(mockContent);
    message.success('内容生成成功！');
  };

  return (
    <div>
      <h2>智能内容创作坊</h2>
      <p>基于学院信息，快速生成各类招生宣传文案</p>

      <Card style={{ marginBottom: 24 }}>
        <Form form={form} layout="vertical" onFinish={handleGenerate}>
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

          <Form.Item
            name="keywords"
            label="关键词（可选）"
            help="输入关键词，帮助AI更好地理解您的需求"
          >
            <Input placeholder="请输入关键词，用逗号分隔" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<FileTextOutlined />}>
              生成内容
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {generatedContent && (
        <Card
          title="生成结果"
          extra={
            <Space>
              <Button icon={<EditOutlined />}>编辑</Button>
              <Button icon={<CopyOutlined />}>复制</Button>
            </Space>
          }
        >
          <div style={{ whiteSpace: 'pre-wrap' }}>{generatedContent}</div>
        </Card>
      )}
    </div>
  );
};

export default ContentStudio;
