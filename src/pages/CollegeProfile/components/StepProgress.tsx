import React from 'react';
import { Steps, Card } from 'antd';
import {
  UserOutlined,
  MessageOutlined,
  TrophyOutlined,
  BgColorsOutlined,
  EyeOutlined,
} from '@ant-design/icons';

const { Step } = Steps;

interface StepProgressProps {
  current: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ current }) => {
  const steps = [
    {
      title: '基础信息',
      icon: <UserOutlined />,
      description: '填写学院基本信息',
    },
    {
      title: '院长寄语',
      icon: <MessageOutlined />,
      description: '添加院长寄语',
    },
    {
      title: '核心竞争力',
      icon: <TrophyOutlined />,
      description: '展示学院特色',
    },
    {
      title: '品牌视觉',
      icon: <BgColorsOutlined />,
      description: '设置品牌颜色',
    },
    {
      title: '信息预览',
      icon: <EyeOutlined />,
      description: '确认所有信息',
    },
  ];

  return (
    <Card style={{ marginBottom: 24 }}>
      <Steps current={current} progressDot>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} icon={step.icon} />
        ))}
      </Steps>
    </Card>
  );
};

export default StepProgress;
