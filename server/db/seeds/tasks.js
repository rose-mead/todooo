
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'eat', priority: 1, details: 'Eat lots', status: 1},
        {id: 2, name: 'code', priority: 2, details: 'Remember to commit', status: 1},
        {id: 3, name: 'sleep', priority: 1, details: 'at least 8 hours', status: 3}
      ]);
    });
};
