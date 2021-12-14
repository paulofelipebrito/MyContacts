const { uuid } = require('uuidv4');

let contacts = [
  {
    id: uuid(),
    name: 'Paulo',
    email: 'paulofelipebrito@hotmail.com',
    phone: '999667287',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Ana',
    email: 'anarrcosta@hotmail.com',
    phone: '99111111',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      console.log('oi');
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    // eslint-disable-next-line camelcase
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
        // eslint-disable-next-line camelcase
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    // eslint-disable-next-line camelcase
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        // eslint-disable-next-line camelcase
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
