import React from 'react';
import { Form, Input, Upload, Button, message, Card, Row, Col, Tooltip, Typography } from 'antd';
import { UploadOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateDeanMessage } from '../../../store/slices/collegeProfileSlice';

const { Text } = Typography;

interface DeanMessageFormValues {
  name: string;
  title: string;
  photo: string;
  message: string;
}

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const DeanMessageForm: React.FC<Props> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm<DeanMessageFormValues>();
  const dispatch = useAppDispatch();
  const deanMessage = useAppSelector((state) => state.collegeProfile.deanMessage);
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const [photoPreview, setPhotoPreview] = React.useState<string>('');

  const handleSubmit = async (values: DeanMessageFormValues) => {
    try {
      const photoUrl = fileList?.[0]?.url || '';
      dispatch(
        updateDeanMessage({
          ...values,
          photo: photoUrl,
        })
      );
      message.success('院长寄语已更新');
    } catch {
      message.error('保存失败，请重试');
    }
  };

  const handlePhotoChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
    if (fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotoPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file.originFileObj);
      }
    } else {
      setPhotoPreview('');
    }
  };

  return (
    <Card
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>院长寄语</span>
          <Tooltip title="添加院长的照片和寄语，展现学院的人文关怀">
            <InfoCircleOutlined style={{ color: '#1890ff' }} />
          </Tooltip>
        </div>
      }
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit} initialValues={deanMessage}>
        <Row gutter={24}>
          <Col span={16}>
            <Form.Item
              name="name"
              label={
                <span>
                  院长姓名 <Text type="danger">*</Text>
                </span>
              }
              rules={[{ required: true, message: '请输入院长姓名' }]}
            >
              <Input placeholder="请输入院长姓名" />
            </Form.Item>

            <Form.Item
              name="title"
              label={
                <span>
                  院长职务 <Text type="danger">*</Text>
                </span>
              }
              rules={[{ required: true, message: '请输入院长职务' }]}
            >
              <Input placeholder="请输入院长职务" />
            </Form.Item>

            <Form.Item
              name="photo"
              label={
                <span>
                  院长照片 <Text type="danger">*</Text>
                  <Text type="secondary" style={{ marginLeft: 8, fontSize: 12 }}>
                    （建议尺寸：400×500px，支持PNG/JPG格式）
                  </Text>
                </span>
              }
              rules={[{ required: true, message: '请上传院长照片' }]}
            >
              <Upload
                listType="picture"
                maxCount={1}
                beforeUpload={() => false}
                fileList={fileList}
                onChange={handlePhotoChange}
              >
                <Button icon={<UploadOutlined />}>上传照片</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="message"
              label={
                <span>
                  院长寄语 <Text type="danger">*</Text>
                  <Tooltip title="院长对考生的寄语，展现学院的人文关怀">
                    <InfoCircleOutlined style={{ marginLeft: 8, color: '#999' }} />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: '请输入院长寄语' }]}
            >
              <Input.TextArea placeholder="请输入院长寄语" autoSize={{ minRows: 4, maxRows: 8 }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            {photoPreview && (
              <Card title="照片预览" size="small">
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={photoPreview}
                    alt="照片预览"
                    style={{ maxWidth: '100%', maxHeight: 300 }}
                  />
                </div>
              </Card>
            )}
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

export default DeanMessageForm;
