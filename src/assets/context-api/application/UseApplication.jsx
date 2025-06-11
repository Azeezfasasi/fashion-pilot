import { useContext } from 'react';
import { ApplicationContext } from './ApplicationContext';

const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
};

export default useApplication;
