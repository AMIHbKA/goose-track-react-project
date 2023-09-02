import { toast } from 'react-toastify';

export const notify = (type, message, promise) => {
  if (promise) {
    toast.promise(promise, {
      pending: 'Processing...',
      success: message,
      error: 'An error occurred',
    });
  } else {
    switch (type) {
      case 'info':
        toast.info(message);
        break;
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast(message);
    }
  }
};
