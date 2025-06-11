import React from 'react';
import { Form, Card, Row, Col, Tooltip, Typography, message, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateBrandColors } from '../../../store/slices/collegeProfileSlice';
import ColorPicker from './ColorPicker';

const { Text } = Typography;

interface BrandColorsFormValues {
  primary: string;
  secondary: string;
}

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const BrandColorsForm: React.FC<Props> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm<BrandColorsFormValues>();
  const dispatch = useAppDispatch();
  const brandColors = useAppSelector((state) => state.collegeProfile.brandColors);

  const handleSubmit = async (values: BrandColorsFormValues) => {
    try {
      dispatch(updateBrandColors(values));
      message.success('品牌视觉已更新');
    } catch {
      message.error('保存失败，请重试');
    }
  };

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>品牌视觉</span>
          <Tooltip title="设置学院的品牌视觉元素，统一宣传风格">
            <InfoCircleOutlined style={{ color: '#1890ff' }} />
          </Tooltip>
        </div>
      }
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={brandColors}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="primary"
              label={
                <span>
                  主色调 <Text type="danger">*</Text>
                  <Tooltip title="学院的主要品牌色，将用于重要元素">
                    <InfoCircleOutlined style={{ marginLeft: 8, color: '#999' }} />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: '请选择主色调' }]}
            >
              <ColorPicker />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="secondary"
              label={
                <span>
                  辅助色 <Text type="danger">*</Text>
                  <Tooltip title="用于次要元素和装饰">
                    <InfoCircleOutlined style={{ marginLeft: 8, color: '#999' }} />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: '请选择辅助色' }]}
            >
              <ColorPicker />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onNext}>
            下一步
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BrandColorsForm;
