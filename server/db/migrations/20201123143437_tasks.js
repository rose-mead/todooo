
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
      table.increments('id').primary()
      table.string('name')
      table.integer('priority')
      table.string('details')
      table.integer('status')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
