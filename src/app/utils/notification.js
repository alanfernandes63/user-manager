import { toast } from "react-toastify";

export const notificationSuccess = (message) => {
  const options = {
    autoClose: 1500,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: false,
    position: toast.POSITION.BOTTOM_RIGHTs,
    pauseOnHover: true,
  };
  return toast(message, options);
};

export const notificationError = (message) => {
  const options = {
    autoClose: 1500,
    type: toast.TYPE.ERROR,
    hideProgressBar: false,
    position: toast.POSITION.BOTTOM_RIGHTs,
    pauseOnHover: true,
  };
  return toast(message, options);
};
