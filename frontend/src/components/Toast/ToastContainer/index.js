import { useState, useEffect } from 'react';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';
import { toastEventManager } from '../../../utils/toast';

function ToastContainer() {
  const [messages, setMessages] = useState([
    { id: Math.random(), type: 'default', text: 'Default text' },
    { id: Math.random(), type: 'danger', text: 'Danger text' },
    { id: Math.random(), type: 'success', text: 'Success text' },
  ]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  function handleRemoveMessage(id) {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;
