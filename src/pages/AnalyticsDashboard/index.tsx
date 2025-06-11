import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Statistic,
  Tag,
  DatePicker,
  Button,
  Typography,
  Space,
  Tooltip,
} from 'antd';
import {
  ArrowUpOutlined,
  EyeOutlined,
  ShareAltOutlined,
  TeamOutlined,
  MessageOutlined,
  DownloadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/heatmap';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/visualMap';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

const { Title, Paragraph } = Typography;
const { RangePicker } = DatePicker;

// --- 模拟数据 ---

// 1. 招生数据总览
const totalSignUps = 1234;
const signUpTrend = 15; // 同比增长
const scoreDistribution = {
  '650+': 100,
  '600-649': 350,
  '550-599': 500,
  '500-549': 250,
  '<500': 34,
};

// 2. 宣传内容投放效果
const contentPerformance = {
  videoViews: 320000,
  articleViews: 480000, // 32w / 40% * 60%
  shareRate: 12,
};
const channelSource = [
  { value: 35, name: '官网' },
  { value: 25, name: '公众号' },
  { value: 18, name: '抖音' },
  { value: 15, name: '小红书' },
  { value: 7, name: '其他' },
];

// 3. 用户行为洞察
const popularSearches = [
  { name: '王牌专业', value: 120 },
  { name: '学费', value: 98 },
  { name: '宿舍条件', value: 85 },
  { name: '奖学金', value: 77 },
  { name: '就业率', value: 69 },
  { name: '考研', value: 58 },
];
const avgStayTime = 3.2; // 分钟

const AnalyticsDashboard: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs]>([
    dayjs().subtract(30, 'day'),
    dayjs(),
  ]);

  // --- ECharts 配置 ---

  const lineChartOption = {
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: { type: 'value' },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line' }],
  };

  const barChartOption = {
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: Object.keys(scoreDistribution),
    },
    yAxis: { type: 'value' },
    series: [{ data: Object.values(scoreDistribution), type: 'bar' }],
  };

  const pieChartOption = {
    tooltip: { trigger: 'item' },
    legend: { top: '5%', left: 'center' },
    series: [
      {
        name: '渠道来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: { show: false, position: 'center' },
        emphasis: {
          label: { show: true, fontSize: '20', fontWeight: 'bold' },
        },
        labelLine: { show: false },
        data: channelSource,
      },
    ],
  };

  return (
    <div style={{ padding: '24px' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Col>
          <Title level={2}>数据洞察看板</Title>
          <Paragraph>实时监控招生宣传效果，为决策提供数据支持。</Paragraph>
        </Col>
        <Col>
          <Space>
            <RangePicker
              value={dateRange}
              onChange={(dates) => {
                if (dates) {
                  setDateRange([dates[0]!, dates[1]!]);
                }
              }}
            />
            <Button icon={<DownloadOutlined />}>导出报告</Button>
            <Tooltip title="自定义看板">
              <Button icon={<SettingOutlined />} />
            </Tooltip>
          </Space>
        </Col>
      </Row>

      {/* 招生概况 */}
      <Title level={4}>招生概况</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <Statistic
              title="累计报名人数"
              value={totalSignUps}
              precision={0}
              prefix={<TeamOutlined />}
              suffix={
                <span style={{ color: '#3f8600', fontSize: '14px' }}>
                  <ArrowUpOutlined /> {signUpTrend}%
                </span>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="内容总浏览量"
              value={contentPerformance.videoViews + contentPerformance.articleViews}
              prefix={<EyeOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="内容分享率"
              value={contentPerformance.shareRate}
              prefix={<ShareAltOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="平均停留时长"
              value={avgStayTime}
              precision={1}
              prefix={<MessageOutlined />}
              suffix="分钟"
            />
          </Card>
        </Col>
      </Row>

      {/* 招生数据分析 */}
      <Title level={4}>招生数据分析</Title>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Card title="报名人数趋势">
            <ReactECharts option={lineChartOption} style={{ height: '300px' }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="高考成绩分布">
            <ReactECharts option={barChartOption} style={{ height: '300px' }} />
          </Card>
        </Col>
      </Row>

      {/* 宣传效果与用户洞察 */}
      <Title level={4}>宣传效果与用户洞察</Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="渠道来源分析">
            <ReactECharts option={pieChartOption} style={{ height: '300px' }} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="热门搜索关键词">
            {/* 词云图可以后续引入专门的库 */}
            <div
              style={{
                height: '300px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              {popularSearches.map((tag) => (
                <Tag key={tag.name} color="blue">
                  {tag.name} ({tag.value})
                </Tag>
              ))}
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="优化建议">
            <ul style={{ height: '300px', paddingLeft: '20px' }}>
              <li>抖音渠道转化率高，建议加大短视频内容投放。</li>
              <li>“王牌专业”是搜索热点，建议制作专题页面详细介绍。</li>
              <li>大部分用户关心宿舍条件，可制作一期宿舍Vlog。</li>
              <li>建议在周末晚上8-10点进行内容推送，该时段用户活跃度最高。</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AnalyticsDashboard;
