import React from 'react';
import { Card, Row, Col, Button, Select, Upload, message, Tabs } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TabPane } = Tabs;

interface Template {
  id: string;
  name: string;
  type: string;
  style: string;
  preview: string;
}

const VisualDesigner: React.FC = () => {
  // 模拟模板数据
  const templates: Template[] = [
    {
      id: '1',
      name: '“未来已来”主题海报',
      type: 'brochure',
      style: 'modern',
      preview: '/act1.webp',
    },
    {
      id: '2',
      name: '“数据科学大神说”讲座海报',
      type: 'brochure',
      style: 'academic',
      preview: '/act2.webp',
    },
    {
      id: '3',
      name: '“编程马拉松”活动海报',
      type: 'brochure',
      style: 'youth',
      preview: '/act3.webp',
    },
  ];

  const handleTemplateSelect = (value: string) => {
    message.success(`已选择模板：${value}`);
  };

  const handleStyleSelect = (value: string) => {
    message.success(`已选择风格：${value}`);
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
                <Card
                  hoverable
                  cover={
                    <img
                      alt={template.name}
                      src={template.preview}
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                >
                  <Card.Meta title={template.name} />
                  <Button
                    type="primary"
                    block
                    onClick={() => handleUseTemplate(template.id)}
                    style={{ marginTop: 16 }}
                  >
                    使用此模板
                  </Button>
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
