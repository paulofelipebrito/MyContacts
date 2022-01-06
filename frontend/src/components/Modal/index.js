import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Title</h1>

        <p>Body</p>

        <Footer>
          <button type="button" className="CancelButton">
            Cancel
          </button>
          <Button type="button" danger={danger}>
            Delete
          </Button>
        </Footer>

      </Container>
    </Overlay>,
    document.getElementById('modal-rrot'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};
Modal.defaultProps = {
  danger: false,
};
