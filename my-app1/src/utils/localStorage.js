// utils/localStorage.js

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (err) {
      console.warn('Could not save state:', err);
    }
  };
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.warn('Could not load state:', err);
      return undefined;
    }
  };
  