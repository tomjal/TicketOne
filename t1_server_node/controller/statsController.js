const logger = require('logger').createLogger()
const express = require('express')

const CONSTS = require('./../const/consts')
const inMemoryStorage = require('./../mock/inMemoryStorage')
const wsService = require('./../service/wsService')

const statsController = express.Router()

// helpers ===========================================================
function handleError(e) {
    logger.error(e);
    res.status(500).json({ error: e.message })
}

// REST API ==========================================================
statsController
    .get('/employee', (req, res) => {
        try {
            let statsObj = inMemoryStorage.getSolvedUnsolvedStats();
            res.status(200).json(statsObj)
        } catch (e) {
            handleError(e)
        }
    })

module.exports = statsController;