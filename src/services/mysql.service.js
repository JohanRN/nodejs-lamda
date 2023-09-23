const { mysqlConnection } = require('../database/mysql.database');
const util = require('util');
const { Message } = require("../models/message.model");

const Async_mysql = {
    query: util.promisify(mysqlConnection.query).bind(mysqlConnection),
};

async function runQuery(query, params) {
    try {
        const results = await Async_mysql.query(query, [params]);
        if (results[0]) {
            if (results[0].length > 0) {
                return { code: 200, data: results[0] }
            } else {
                return { code: 200, data: [] }
            }
        } else {
            return { code: 200, data: results }
        }
    } catch (error) {
        return { code: 500, data: error.message };
    }
}

module.exports = {
    runQuery
}