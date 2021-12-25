const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter
router.get("api/fighters/:id", (req, res) => {
    const oneFighter = FighterService.search(req.params.id);
    res.send(oneFighter);
});
router.get("api/fighters", (req, res) => {
    const allFighters = FighterService.searchAll();
    res.send(allFighters);
});
router.post("api/fighters", (req, res) => {
    const newFighter = req.body;
    return FighterService.addFighter(newFighter);
});
router.put("api/fighters/:id", (req, res) => {
    const fighterIdToUpdate = req.params.id;
    const fighterDataToUpdate = req.body;
    FighterService.updateFighter(fighterIdToUpdate, fighterDataToUpdate);
    res.status(200).send(`Updated fighter with id: ${fighterIdToUpdate}`)
});
router.delete("api/fighters/:id", (req, res) => {
    const fighterIdToDelete = req.params.id;
    FighterService.deleteFighter(fighterIdToDelete);
    res.status(200).send(`Deleted fighter with id: ${fighterIdToDelete}`);
});

module.exports = router;