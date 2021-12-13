class ContactController {
  index(request, response) {
    // List data
    response.send('Send from Contact Controller');
  }

  show() {
    // Get ONE data
  }

  store() {
    // Create data
  }

  update() {
    // Edit data
  }

  delete() {
    // Delete data
  }
}

module.exports = new ContactController();
