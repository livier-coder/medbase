import {createPool} from 'mysql2/promise';
import {DB_DATABASE, DB_HOST,DB_PORT,DB_USER} from './config.js'

//create connection

export const pool = createPool({
    host:DB_HOST,
    user: DB_USER,
    database:DB_DATABASE,
    port:DB_PORT,
})