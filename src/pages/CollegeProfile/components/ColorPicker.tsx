import React from 'react';
import { ColorPicker as AntColorPicker } from 'antd';
import type { ColorPickerProps } from 'antd';

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  return (
    <AntColorPicker
      {...props}
      presets={[
        {
          label: '推荐颜色',
          colors: [
            '#1890ff', // 科技蓝
            '#52c41a', // 活力绿
            '#722ed1', // 典雅紫
            '#eb2f96', // 热情粉
            '#faad14', // 温暖黄
            '#13c2c2', // 清新青
            '#fa8c16', // 活力橙
            '#a0d911', // 自然绿
          ],
        },
      ]}
    />
  );
};

export default ColorPicker;
