import { useNavigate, useParams } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

export default function useEditContact() {
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id, controller.signal);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contact);
          setContactName(contact.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          safeAsyncAction(() => {
            navigate('/', { replace: true });
            toast({
              type: 'danger',
              text: 'Contact não encontrado!',
            });
          });
        }
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const updatedContactData = await ContactsService.updateContact(id, contact);

      setContactName(updatedContactData.name);
      toast({
        type: 'success',
        text: 'Contact edited successfully!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'An error occurred while editing the contact!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
