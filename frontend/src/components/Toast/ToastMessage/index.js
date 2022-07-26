import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcons from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcons from '../../../assets/images/icons/check-circle.svg';

function ToastMessage({ message, onRemoveMessage }) {
  const { id, type, text } = message;

  const handleRemoveToast = () => {
    onRemoveMessage(id);
  };

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {type === 'danger' && <img src={xCircleIcons} alt="X" />}
      {type === 'success' && <img src={checkCircleIcons} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
