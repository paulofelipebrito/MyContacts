import PropTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcons from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcons from '../../../assets/images/icons/check-circle.svg';

function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcons} alt="X" />}
      {type === 'success' && <img src={checkCircleIcons} alt="Check" />}
      <strong>{text}</strong>
    </Container>
  );
}

export default ToastMessage;

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
