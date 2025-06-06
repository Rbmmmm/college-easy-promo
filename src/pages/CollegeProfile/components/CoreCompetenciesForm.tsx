import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateCoreCompetencies } from '../../../store/slices/collegeProfileSlice';

const { TextArea } = Input;

interface CoreCompetenciesFormProps {
  onNext: () => void;
  onPrev: () => void;
}

interface FormValues {
  history: string;
  academic: string;
  faculty: string;
  studentLife: string;
  alumni: string;
}

const CoreCompetenciesForm: React.FC<CoreCompetenciesFormProps> = ({ onNext, onPrev }) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const coreCompetencies = useAppSelector((state) => state.collegeProfile.coreCompetencies);

  const handleSubmit = async (values: FormValues) => {
    try {
      dispatch(updateCoreCompetencies(values));
      message.success('核心竞争力信息保存成功');
      onNext();
    } catch {
      message.error('保存失败，请重试');
    }
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={coreCompetencies}
      onFinish={handleSubmit}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="history"
        label="历史与文化沉淀"
        rules={[{ required: true, message: '请输入历史与文化沉淀' }]}
      >
        <TextArea
          placeholder="请输入学院的历史沿革、文化传统等"
          rows={4}
          maxLength={500}
          showCount
        />
      </Form.Item>

      <Form.Item
        name="academic"
        label="学科与科研实力"
        rules={[{ required: true, message: '请输入学科与科研实力' }]}
      >
        <TextArea
          placeholder="请输入学院的重点学科、科研成果等"
          rows={4}
          maxLength={500}
          showCount
        />
      </Form.Item>

      <Form.Item
        name="faculty"
        label="师资队伍概况"
        rules={[{ required: true, message: '请输入师资队伍概况' }]}
      >
        <TextArea
          placeholder="请输入学院的师资力量、名师介绍等"
          rows={4}
          maxLength={500}
          showCount
        />
      </Form.Item>

      <Form.Item
        name="studentLife"
        label="学生培养特色"
        rules={[{ required: true, message: '请输入学生培养特色' }]}
      >
        <TextArea
          placeholder="请输入学院的特色班、国际交流项目等"
          rows={4}
          maxLength={500}
          showCount
        />
      </Form.Item>

      <Form.Item
        name="alumni"
        label="校友网络与成就"
        rules={[{ required: true, message: '请输入校友网络与成就' }]}
      >
        <TextArea
          placeholder="请输入学院的校友成就、校友活动等"
          rows={4}
          maxLength={500}
          showCount
        />
      </Form.Item>

      <Form.Item>
        <Button style={{ marginRight: 8 }} onClick={onPrev}>
          上一步
        </Button>
        <Button type="primary" htmlType="submit">
          下一步
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CoreCompetenciesForm;
