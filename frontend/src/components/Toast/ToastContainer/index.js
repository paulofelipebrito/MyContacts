import { useEffect } from 'react';
import { Container } from './styles';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';
import useAnimatedList from '../../../hooks/useAnimatedList';

function ToastContainer() {
  const {
    setItems: setMessages,
    handleRemoveItem: handleRemoveMessage,
    handleAnimationEnd,
    renderList,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;
