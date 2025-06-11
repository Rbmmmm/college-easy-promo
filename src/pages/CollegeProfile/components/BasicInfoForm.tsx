import React from 'react';
import { Form, Input, Upload, Button, message, Card, Row, Col, Tooltip, Typography } from 'antd';
import { UploadOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateBasicInfo } from '../../../store/slices/collegeProfileSlice';

const { Text } = Typography;

interface BasicInfoFormValues {
  fullName: string;
  shortName: string;
  logo: string;
  slogan: string;
}

interface Props {
  onNext: () => void;
}

const BasicInfoForm: React.FC<Props> = ({ onNext }) => {
  const [form] = Form.useForm<BasicInfoFormValues>();
  const dispatch = useAppDispatch();
  const basicInfo = useAppSelector((state) => state.collegeProfile.basicInfo);
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [logoPreview, setLogoPreview] = React.useState<string>('');

  const handleSubmit = async (values: BasicInfoFormValues) => {
    try {
      const logoUrl = fileList?.[0]?.url || '';
      dispatch(
        updateBasicInfo({
          ...values,
          logo: logoUrl,
        })
      );
      message.success('基础信息已更新');
    } catch {
      message.error('保存失败，请重试');
    }
  };

  const handleLogoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
    if (fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setLogoPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file.originFileObj);
      }
    } else {
      setLogoPreview('');
    }
  };

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>基础信息</span>
          <Tooltip title="填写学院的基本信息，这些信息将用于生成宣传材料">
            <InfoCircleOutlined style={{ color: '#1890ff' }} />
          </Tooltip>
        </div>
      }
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={basicInfo}>
        <Row gutter={24}>
          <Col span={16}>
            <Form.Item
              name="fullName"
              label={
                <span>
                  学院全称 <Text type="danger">*</Text>
                </span>
              }
              rules={[{ required: true, message: '请输入学院全称' }]}
            >
              <Input placeholder="请输入学院全称" />
            </Form.Item>

            <Form.Item
              name="shortName"
              label={
                <span>
                  学院简称 <Text type="danger">*</Text>
                  <Tooltip title="学院简称将用于宣传材料中的简称呈现">
                    <InfoCircleOutlined style={{ marginLeft: 8, color: '#999' }} />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: '请输入学院简称' }]}
            >
              <Input placeholder="请输入学院简称" />
            </Form.Item>

            <Form.Item
              name="logo"
              label={
                <span>
                  学院Logo <Text type="danger">*</Text>
                  <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>
                    （建议尺寸：300×300px，支持PNG/JPG格式）
                  </Text>
                </span>
              }
              rules={[{ required: true, message: '请上传学院Logo' }]}
            >
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
                fileList={fileList}
                onChange={handleLogoChange}
              >
                <Button icon={<UploadOutlined />}>上传Logo</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="slogan"
              label={
                <span>
                  宣传语 <Text type="danger">*</Text>
                  <Tooltip title="简短有力的宣传语，将用于各类宣传材料">
                    <InfoCircleOutlined style={{ marginLeft: 8, color: '#999' }} />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: '请输入宣传语' }]}
            >
              <Input.TextArea
                placeholder="请输入学院宣传语"
                autoSize={{ minRows: 2, maxRows: 4 }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            {logoPreview && (
              <Card title="Logo预览" size="small">
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={logoPreview}
                    alt="Logo预览"
                    style={{ maxWidth: '100%', maxHeight: 200 }}
                  />
                </div>
              </Card>
            )}
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" onClick={onNext}>
            下一步
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default BasicInfoForm;
