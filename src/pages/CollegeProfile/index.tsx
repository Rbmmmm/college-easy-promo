import React, { useState } from 'react';
import { Steps, Card } from 'antd';
import BasicInfoForm from './components/BasicInfoForm';
import DeanMessageForm from './components/DeanMessageForm';
import CoreCompetenciesForm from './components/CoreCompetenciesForm';
import BrandColorsForm from './components/BrandColorsForm';
import PreviewCard from './components/PreviewCard';

const { Step } = Steps;

const CollegeProfile: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: '基础信息',
      content: <BasicInfoForm onNext={() => setCurrentStep(1)} />,
    },
    {
      title: '院长寄语',
      content: (
        <DeanMessageForm onNext={() => setCurrentStep(2)} onPrev={() => setCurrentStep(0)} />
      ),
    },
    {
      title: '核心竞争力',
      content: (
        <CoreCompetenciesForm onNext={() => setCurrentStep(3)} onPrev={() => setCurrentStep(1)} />
      ),
    },
    {
      title: '品牌视觉',
      content: (
        <BrandColorsForm onNext={() => setCurrentStep(4)} onPrev={() => setCurrentStep(2)} />
      ),
    },
    {
      title: '预览确认',
      content: <PreviewCard onPrev={() => setCurrentStep(3)} />,
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Card>
        <Steps current={currentStep} style={{ marginBottom: 24 }}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div>{steps[currentStep].content}</div>
      </Card>
    </div>
  );
};

export default CollegeProfile;
