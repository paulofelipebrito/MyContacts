const db = require('../../database');

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
    SELECT cont.*, cat.name AS cat_Name
     FROM contacts AS cont
    LEFT JOIN categories AS cat
    ON cat.id = cont.category_id
    ORDER BY cont.name ${direction}`);
    return rows;
  }

  async findById(id) {
    const row = await db.query(`
    SELECT cont.*, cat.name AS cat_Name
    FROM contacts AS cont
    LEFT JOIN categories AS cat
    ON cat.id = cont.category_id
    WHERE cont.id = $1`, [id]);
    return row;
  }

  async findByEmail(email) {
    const row = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
    DELETE FROM contacts
    WHERE id = $1`, [id]);
    return deleteOp;
  }

  async create({
    // eslint-disable-next-line camelcase
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1,$2,$3,$4)
    RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }

  async update(id, {
    // eslint-disable-next-line camelcase
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, email, phone, category_id, id]);
    return row;
  }
}

module.exports = new ContactsRepository();
