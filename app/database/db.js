import mysql from 'mysql2/promise';

export const connection = async () => {
    try {
        if(global.connection && global.connection.state !== 'disconnected'){
            return global.connection;
        }
        console.log('\t - Conectando a base de dados')
        const connection = await mysql.createConnection({
            host : '172.17.0.2',
            user : 'root',
            port : '3306',
            database : 'heroes',
            password : '123456',
        });
        global.connection = connection;
        console.log('\t - Conectado')
        return connection;
    } catch (error) {
        console.log('\t - Erro ao se connectar a base de dados')
        console.log(error);
        return false;
    }
}

