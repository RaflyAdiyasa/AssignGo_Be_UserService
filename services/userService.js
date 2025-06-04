import db from '../models/index.js';

const { User } = db;

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const findUserByNim = async (nim) => {
  return await User.findOne({ where: { nim } });
};

export const findUserById = async (id) => {
  return await User.findByPk(id, {
    attributes: ['id', 'nim', 'username', 'isAdmin']
  });
};

export const getAllUsers = async () => {
  return await User.findAll({
    attributes: ['id', 'nim', 'username', 'isAdmin']
  });
};

export const updateUserRefreshToken = async (userId, refreshToken) => {
  return await User.update(
    { refresh_token: refreshToken },
    { where: { id: userId } }
  );
};