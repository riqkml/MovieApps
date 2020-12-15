import {showMessage} from 'react-native-flash-message';

const successAlert = (msg, desc) => {
  return showMessage({
    message: msg,
    description: desc,
    type: 'success',
    icon: 'success',
  });
};
const dangerAlert = (msg, desc) => {
  return showMessage({
    message: msg,
    description: desc,
    type: 'danger',
    icon: 'danger',
  });
};
export {successAlert, dangerAlert};
