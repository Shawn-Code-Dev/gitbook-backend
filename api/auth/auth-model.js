const db = require('./../../data/db-config');

async function add(user) {
  const [newUserObject] = await db('users').insert(user, [
    'user_id',
    'username',
    'email',
    'password',
  ]);
  return newUserObject;
}

function findById(id) {
  return db('users')
    .select('user_id', 'username', 'password')
    .where('user_id', id);
}

function findBy(filter) {
  return db('users').select('user_id', 'username', 'password').where(filter);
}

module.exports = {
  findById,
  findBy,
  add,
};
