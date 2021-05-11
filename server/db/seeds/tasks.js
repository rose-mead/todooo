
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'eat', priority: 1, details: 'Eat healthy food', status: 1},
        {id: 2, name: 'sleep', priority: 2, details: 'Get 8 hours of sleep', status: 0},
        {id: 3, name: 'code', priority: 1, details: 'Code every day', status: 0},
        {id: 4, name: 'repeat', priority: 1, details: '', status: 0}
      ]);
    });
};
