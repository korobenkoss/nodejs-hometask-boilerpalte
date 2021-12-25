const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    // get a single user
    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    // get all users
    searchAll() {
        const allItems = UserRepository.getAll();
        if(!allItems) {
            return null;
        }
        return allItems;
    }

    // add a user
    addUser(usr) {
        const addUserSuccess = UserRepository.create(usr);

        return addUserSuccess;
    }

    // update a user
    updateUser(id, data) {
        const updateUserSuccess = UserRepository.update(id, data);

        return updateUserSuccess;
    }

    // delete a user
    deleteUser(id) {
        const deleteUserSuccess = UserRepository.delete(id);

        return deleteUserSuccess;
    }
}

module.exports = new UserService();