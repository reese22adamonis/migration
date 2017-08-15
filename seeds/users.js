
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password: 'test', email: "reese@aol.com", age: 21},
        {username: 'bob', password: 'bob', email: "reap@aol.com", age: 22},
        {username: 'suzy the tortoise', password: 'suzy', email: "relish@aol.com", age: 223}
      ]);
    });
};
