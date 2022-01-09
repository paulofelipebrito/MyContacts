const ContactRepository = require('../repositories/ContactRepository');
const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // List data
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    // Get ONE data
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // Create data
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const [contactExists] = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is alreeady in use' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    response.status(201).json(contact);
  }

  async update(request, response) {
    // Edit data
    const { id } = request.params;
    const {
      // eslint-disable-next-line camelcase
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const [contactByEmail] = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is alreeady in use' });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // Delete data
    const { id } = request.params;

    await ContactsRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
