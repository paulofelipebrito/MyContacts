import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.category_id,
      };

      const response = await ContactsService.creteContact(contact);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato!');
    }
  }

  return (
    <>
      <PageHeader title="New Contact" />

      <ContactForm
        buttonLabel="Register"
        onSubmit={handleSubmit}
      />
    </>
  );
}
