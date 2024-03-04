import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type = 'info') => {
  const toastConfig = {
    position: 'top-center', // Specify the position directly
    autoClose: 3000,
    hideProgressBar: true,
  };

  switch (type) {
    case 'success':
      toast.success(message, toastConfig);
      break;
    case 'warning':
      toast.warning(message, toastConfig);
      break;
    case 'error':
      toast.error(message, toastConfig);
      break;
    default:
      toast.info(message, toastConfig);
  }
};

export default showToast;
