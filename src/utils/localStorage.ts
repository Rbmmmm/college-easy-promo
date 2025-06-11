// 从 localStorage 加载状态
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('collegeProfileState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

// 将状态保存到 localStorage
export const saveState = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('collegeProfileState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};
