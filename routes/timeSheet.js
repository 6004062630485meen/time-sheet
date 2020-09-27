const express = require('express');
const router = express.Router();

const timeSheet = require('../data');
let currentRestaurantId = 6;

router.get('/', (req, res) => {
    res.json(timeSheet);
});

router.get('/:id', (req, res) => {
    const timeSheetId = Number.parseInt(req.params.id, 10);
    const timeSheet = timeSheet.find(
        (timeSheet) => timeSheet.id === timeSheetId
    );
    res.json(timeSheet);
});

router.post('/', (req, res) => {
    currenttimeSheetId += 1;
    const newRestaurannt = {
        id: currenttimeSheetId,
        ...req.body
    };
    timeSheet.push(newRestaurannt);
    res.json(newRestaurannt);
});

router.put('/:id', (req, res) => {
    const timeSheetId = Number.parseInt(req.params.id, 10);
    const timeSheetIndex = timeSheet.findIndex(
        (timeSheet) => timeSheet.id === timeSheetId
    );

    const updatedtimeSheet = {
        id: timeSheetId,
        ...req.body
    }
    timeSheet[timeSheetIndex] = updatedtimeSheet;
    res.json(updatedtimeSheet);
});

router.delete('/:id', (req, res) => {
    const timeSheetId = Number.parseInt(req.params.id, 10);
    const timeSheetIndex = timeSheet.findIndex(
        (timeSheet) => timeSheet.id === timeSheetId
    );
    timeSheet.splice(timeSheetIndex, 1);
    res.send(204);
});

module.exports = router;

