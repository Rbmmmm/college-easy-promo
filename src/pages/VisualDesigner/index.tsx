import React, { useState } from 'react';
import { Card, Row, Col, Button, Select, Upload, message, Tabs } from 'antd';
import { UploadOutlined, DownloadOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TabPane } = Tabs;

interface Template {
  id: string;
  name: string;
  type: string;
  style: string;
  preview: string;
}

const previewStyle = {
  height: 200,
  background: '#f0f0f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const VisualDesigner: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('');

  // 模拟模板数据
  const templates: Template[] = [
    {
      id: '1',
      name: '招生简章封面模板1',
      type: 'brochure',
      style: 'modern',
      preview: '模板预览 1',
    },
    {
      id: '2',
      name: '招生简章封面模板2',
      type: 'brochure',
      style: 'academic',
      preview: '模板预览 2',
    },
    {
      id: '3',
      name: '招生简章封面模板3',
      type: 'brochure',
      style: 'youth',
      preview: '模板预览 3',
    },
  ];

  const handleTemplateSelect = (value: string) => {
    message.success(`已选择模板：${value}`);
  };

  const handleStyleSelect = (value: string) => {
    message.success(`已选择风格：${value}`);
  };

  const handleUpload = () => {
    message.success('素材上传成功');
  };

  const handleUseTemplate = (templateId: string) => {
    message.success(`已选择模板：${templateId}`);
  };

  return (
    <div>
      <h2>视觉素材设计工坊</h2>
      <p>选择模板，快速制作专业宣传图片和海报</p>

      <Card style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="选择模板类型"
              onChange={handleTemplateSelect}
            >
              <Option value="brochure">招生简章</Option>
              <Option value="poster">活动海报</Option>
              <Option value="social">社交媒体配图</Option>
              <Option value="ppt">宣讲会PPT</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Select
              style={{ width: '100%' }}
              placeholder="选择设计风格"
              onChange={handleStyleSelect}
            >
              <Option value="modern">现代简约</Option>
              <Option value="academic">学术庄重</Option>
              <Option value="youth">青春活力</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Upload>
              <Button icon={<UploadOutlined />}>上传素材</Button>
            </Upload>
          </Col>
        </Row>
      </Card>

      <Tabs defaultActiveKey="1">
        <TabPane tab="招生简章" key="1">
          <Row gutter={[16, 16]}>
            {templates.map((template) => (
              <Col span={8} key={template.id}>
                <Card hoverable>
                  <div
                    style={{
                      height: 200,
                      background: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {template.preview}
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <Button
                      type="primary"
                      block
                      onClick={() => handleUseTemplate(template.id)}
                    >
                      使用此模板
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab="活动海报" key="2">
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p>更多海报模板开发中...</p>
          </div>
        </TabPane>
        <TabPane tab="社交媒体配图" key="3">
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p>更多社交媒体配图模板开发中...</p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default VisualDesigner;
