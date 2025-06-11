import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CollegeProfile {
  basicInfo: {
    fullName: string;
    shortName: string;
    logo?: string;
    slogan: string;
  };
  deanMessage: {
    name: string;
    title: string;
    message: string;
    photo?: string;
  };
  coreCompetencies: {
    history: string;
    academic: string;
    faculty: string;
    studentLife: string;
    alumni: string;
  };
  brandColors: {
    primary: string;
    secondary: string;
  };
}

const initialState: CollegeProfile = {
  basicInfo: {
    fullName: '数据科学与工程学院',
    shortName: '数据学院',
    slogan: '以‘系统架构师’之严谨，融‘数据科学家’之创新，锻造拔尖复合型人才。',
    logo: '/college-logo.png', // 假设Logo不变
  },
  deanMessage: {
    name: '张三',
    title: '院长、教授',
    message:
      '欢迎各位有志青年报考数据科学与工程学院，在这里，你们将与最优秀的头脑一同探索数据的奥秘，用代码和算法改变世界。我们期待你的加入！',
    photo: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', // 假设照片不变
  },
  coreCompetencies: {
    history: '华东师范大学数据科学与工程学院（DaSE）成立于2013年，前身为数据科学与工程研究院。',
    academic:
      '拥有数据科学与工程一级学科，设置“数据科学与大数据技术”本科专业，该专业入选国家一流本科专业建设点。',
    faculty:
      '现有教职工73人，其中包括4位国家级领军人才、2位国家级青年人才、3位上海市学术带头人，以及12位省部级优秀青年人才。',
    studentLife:
      '学院坚持“五育并举”，田径队屡获校运会男女团体总分第一，多个球类社团活跃校园，营造出积极向上、自信协作的学院文化。',
    alumni:
      '本科毕业生深造比例长期保持在80%以上，2022届毕业生读研及出国深造率达86.5%，连续两年位列全校第一。毕业生就业率100%。',
  },
  brandColors: {
    primary: '#0052cc',
    secondary: '#ff8b00',
  },
};

export const collegeProfileSlice = createSlice({
  name: 'collegeProfile',
  initialState,
  reducers: {
    updateBasicInfo: (state, action: PayloadAction<Partial<CollegeProfile['basicInfo']>>) => {
      state.basicInfo = { ...state.basicInfo, ...action.payload };
    },
    updateDeanMessage: (state, action: PayloadAction<Partial<CollegeProfile['deanMessage']>>) => {
      state.deanMessage = { ...state.deanMessage, ...action.payload };
    },
    updateCoreCompetencies: (
      state,
      action: PayloadAction<Partial<CollegeProfile['coreCompetencies']>>
    ) => {
      state.coreCompetencies = { ...state.coreCompetencies, ...action.payload };
    },
    updateBrandColors: (state, action: PayloadAction<Partial<CollegeProfile['brandColors']>>) => {
      state.brandColors = { ...state.brandColors, ...action.payload };
    },
    resetProfile: () => initialState,
  },
});

export const {
  updateBasicInfo,
  updateDeanMessage,
  updateCoreCompetencies,
  updateBrandColors,
  resetProfile,
} = collegeProfileSlice.actions;

export default collegeProfileSlice.reducer;
