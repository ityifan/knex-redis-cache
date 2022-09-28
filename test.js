const MysqlBin = require('./index')
const config = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '19990728',
    database: 'core',
    trace: true
}
const mysqlBin = new MysqlBin(config)
let main = async () => {
    const a = await mysqlBin.io.table('core_users').select('userName')
    // console.log(a);
}
main()