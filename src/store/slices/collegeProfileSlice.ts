import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CollegeProfile {
  basicInfo: {
    fullName: string;
    shortName: string;
    logo?: string;
    slogan: string;
  };
  deanMessage: {
    content: string;
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
    fullName: '',
    shortName: '',
    slogan: '',
  },
  deanMessage: {
    content: '',
  },
  coreCompetencies: {
    history: '',
    academic: '',
    faculty: '',
    studentLife: '',
    alumni: '',
  },
  brandColors: {
    primary: '#1890ff',
    secondary: '#52c41a',
  },
};

const collegeProfileSlice = createSlice({
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
