const db = require('../../data/db-config');

function get() {
  return db('saved_cards').select(
    'card_login'
  )
}

function getById(id) {
  return db('saved_cards')
    .select(
      'card_id',
      'card_login'
    )
    .where('card_id', id)
    .first();
}

function getUsersCards(user_id) {
  return db('saved_cards')
    .select(
      'card_id',
      'card_login',
      'user_id'
    )
    .where('user_id', user_id)
}

async function add(card) {
  const [newCard] = await db('saved_cards').insert(card, [
    'card_id',
    'card_login',
    'user_id',
  ]);
  return newCard;
}

const deleteById = async (id) => {
  const removed = await getById(id);
  await db('saved_cards').where('card_id', id).delete();
  return removed;
};

module.exports = {
  get,
  getById,
  getUsersCards,
  add,
  deleteById
}
