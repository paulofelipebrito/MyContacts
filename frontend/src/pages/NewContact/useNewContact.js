import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contact successfully registered!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'An error occurred while registering the contact!',
      });
    }
  }

  return {
    contactFormRef,
    handleSubmit,
  };
}
