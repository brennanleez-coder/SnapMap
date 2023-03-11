import toast from 'react-hot-toast';

export const notify = (errorMessage) => toast.error(`${errorMessage} Try again later`,
  {
    style: {
      padding: '16px',
      color: '#713200',
      borderRadius: '10px',
      }
  }
);