import React from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';

interface BasicInfoFormProps {
  onNext: () => void;
}

interface BasicInfoFormValues {
  fullName: string;
  shortName: string;
  logo: UploadFile[];
  slogan: string;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ onNext }) => {
  const [form] = Form.useForm<BasicInfoFormValues>();

  const handleSubmit = (values: BasicInfoFormValues) => {
    console.log('基础信息：', values);
    onNext();
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="fullName"
        label="学院全称"
        rules={[{ required: true, message: '请输入学院全称' }]}
      >
        <Input placeholder="请输入学院全称" />
      </Form.Item>

      <Form.Item
        name="shortName"
        label="学院简称"
        rules={[{ required: true, message: '请输入学院简称' }]}
      >
        <Input placeholder="请输入学院简称" />
      </Form.Item>

      <Form.Item
        name="logo"
        label="学院Logo"
        rules={[{ required: true, message: '请上传学院Logo' }]}
      >
        <Upload
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          onChange={({ fileList }) => {
            form.setFieldsValue({ logo: fileList });
          }}
        >
          <Button icon={<UploadOutlined />}>上传Logo</Button>
        </Upload>
      </Form.Item>

      <Form.Item name="slogan" label="宣传语" rules={[{ required: true, message: '请输入宣传语' }]}>
        <Input placeholder="请输入学院宣传语" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          下一步
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BasicInfoForm;
