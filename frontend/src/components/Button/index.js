import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import { StyledButton } from './styles';

function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  danger = false,
  onClick,
}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} danger={danger} onClick={onClick}>
      {!isLoading && children}
      {isLoading && <Spinner />}
    </StyledButton>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};
