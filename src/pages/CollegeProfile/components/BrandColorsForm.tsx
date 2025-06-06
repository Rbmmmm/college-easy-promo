import React from 'react';
import { Form, Select, Button } from 'antd';

const { Option } = Select;

interface BrandColorsFormProps {
  onNext: () => void;
  onPrev: () => void;
}

interface BrandColorsFormValues {
  primaryColor: string;
  secondaryColor: string;
}

const BrandColorsForm: React.FC<BrandColorsFormProps> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm<BrandColorsFormValues>();

  const handleSubmit = (values: BrandColorsFormValues) => {
    console.log('品牌颜色：', values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="primaryColor"
        label="主色调"
        rules={[{ required: true, message: '请选择主色调' }]}
      >
        <Select placeholder="请选择主色调">
          <Option value="#1890ff">科技蓝</Option>
          <Option value="#52c41a">活力绿</Option>
          <Option value="#722ed1">典雅紫</Option>
          <Option value="#eb2f96">热情粉</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="secondaryColor"
        label="辅助色"
        rules={[{ required: true, message: '请选择辅助色' }]}
      >
        <Select placeholder="请选择辅助色">
          <Option value="#faad14">温暖黄</Option>
          <Option value="#13c2c2">清新青</Option>
          <Option value="#fa8c16">活力橙</Option>
          <Option value="#a0d911">自然绿</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          下一步
        </Button>
        <Button onClick={onPrev}>上一步</Button>
      </Form.Item>
    </Form>
  );
};

export default BrandColorsForm;
