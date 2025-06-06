import React from 'react';
import { Card, Descriptions, Button, message } from 'antd';

interface PreviewCardProps {
  onPrev: () => void;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ onPrev }) => {
  const handleSubmit = () => {
    message.success('学院信息保存成功');
  };

  return (
    <Card>
      <Descriptions title="基础信息" bordered>
        <Descriptions.Item label="学院全称">计算机科学与技术学院</Descriptions.Item>
        <Descriptions.Item label="学院简称">计科院</Descriptions.Item>
        <Descriptions.Item label="宣传语">培养未来科技领袖</Descriptions.Item>
      </Descriptions>

      <Descriptions title="院长寄语" bordered style={{ marginTop: 24 }}>
        <Descriptions.Item label="寄语内容" span={3}>
          欢迎加入计算机科学与技术学院，这里是你实现梦想的起点。
        </Descriptions.Item>
      </Descriptions>

      <Descriptions title="核心竞争力" bordered style={{ marginTop: 24 }}>
        <Descriptions.Item label="历史与文化" span={3}>
          学院成立于1985年，拥有深厚的学术底蕴和优良的办学传统。
        </Descriptions.Item>
        <Descriptions.Item label="学科实力" span={3}>
          拥有国家重点学科，多个省部级重点实验室，科研实力雄厚。
        </Descriptions.Item>
        <Descriptions.Item label="师资力量" span={3}>
          拥有一支高水平的教师队伍，包括多位国家级人才。
        </Descriptions.Item>
      </Descriptions>

      <Descriptions title="品牌视觉" bordered style={{ marginTop: 24 }}>
        <Descriptions.Item label="主色调">科技蓝</Descriptions.Item>
        <Descriptions.Item label="辅助色">活力绿</Descriptions.Item>
      </Descriptions>

      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <Button type="primary" onClick={handleSubmit} style={{ marginRight: 8 }}>
          确认提交
        </Button>
        <Button onClick={onPrev}>返回修改</Button>
      </div>
    </Card>
  );
};

export default PreviewCard;
