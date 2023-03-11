import toast from 'react-hot-toast';

export const notify = (successMessage) => toast.success(`${successMessage}`,
  {
    style: {
      padding: '16px',
      color: '#713200',
      borderRadius: '10px',
      }
  }
);