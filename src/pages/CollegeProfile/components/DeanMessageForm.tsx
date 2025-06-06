import React from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateDeanMessage } from '../../../store/slices/collegeProfileSlice';

interface DeanMessageFormProps {
  onNext: () => void;
  onPrev: () => void;
}

interface FormValues {
  content: string;
  photo?: { fileList: { originFileObj: File }[] };
}

const { TextArea } = Input;

const DeanMessageForm: React.FC<DeanMessageFormProps> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const deanMessage = useAppSelector((state) => state.collegeProfile.deanMessage);

  const handleSubmit = async (values: FormValues) => {
    try {
      const submitData = {
        content: values.content,
        photo: values.photo?.fileList?.[0]
          ? URL.createObjectURL(values.photo.fileList[0].originFileObj)
          : undefined,
      };

      dispatch(updateDeanMessage(submitData));
      message.success('院长寄语保存成功');
      onNext();
    } catch {
      message.error('保存失败，请重试');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={deanMessage}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="photo"
        label="院长照片"
        rules={[{ required: true, message: '请上传院长照片' }]}
      >
        <Upload
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
          onChange={({ fileList }) => {
            form.setFieldsValue({ photo: fileList });
          }}
        >
          <Button icon={<UploadOutlined />}>上传照片</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="message"
        label="院长寄语"
        rules={[{ required: true, message: '请输入院长寄语' }]}
      >
        <TextArea rows={6} placeholder="请输入院长寄语内容" />
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

export default DeanMessageForm;
