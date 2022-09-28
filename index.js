"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlBin = void 0;
const Knex_1 = require("knex");
class MysqlBin {
    constructor(config) {
        // 创建数据库连接
        const { host, port, user, password, database, trace } = config;
        // 数据库连接
        const io = Knex_1({ client: 'mysql', connection: { host, port, user, password, database } });
        io.on('query-error', (error) => {
            console.log('MysqlBin.Error.' + error.errno + '. ' + error.code, error.sqlMessage);
        });
        trace &&
            io.on('query', (data) => {
                console.log('* SQL: %s', io.raw(data.sql, data.bindings).toString())
            });
        // 赋值
        this.config = config;
        this.io = io;
    }
}
module.exports = MysqlBin
