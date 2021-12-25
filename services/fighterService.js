const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    
    // get one fighter
    search(fighter) {
        const item = FighterRepository.getOne(fighter);
        if(!item) return null;

        return item;
    }

    // get all fighters
    searchAll() {
        const allItems = FighterRepository.getAll();
        if(!allItems) return null;

        return allItems;
    }

    // create fighter
    addFighter(fighter) {
        const addFighterSuccess = FighterRepository.create(fighter);

        return addFighterSuccess;
    }

    // update fighter
    updateFighter(id, data) {
        const updateFighterSuccess = FighterRepository.update(id, data);

        return updateFighterSuccess;
    }

    // delete fighter
    deleteFighter(id) {
        const deleteFighterSuccess = FighterRepository.delete(id)

        return deleteFighterSuccess;
    }
}

module.exports = new FighterService();