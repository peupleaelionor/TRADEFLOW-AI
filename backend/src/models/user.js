const users = [];
let nextId = 1;

const UserModel = {
  create({ email, passwordHash, plan = 'free' }) {
    const user = { id: nextId++, email, passwordHash, plan, createdAt: new Date().toISOString() };
    users.push(user);
    return user;
  },
  findByEmail(email) {
    return users.find(u => u.email === email) || null;
  },
  findById(id) {
    return users.find(u => u.id === id) || null;
  },
  all() {
    return users;
  },
};

module.exports = UserModel;
