import {Client} from "pg";
const dotenv = require("dotenv").config();
console.log(process.env.DB_PASSWORD);

export const client = new Client({
    user: "postgres",
    host: "db.otiurqjfthaasezqmclm.supabase.co",
    database: "postgres",
    password: "JZEUDUXi7agJjlL8",
    port: 5432,
});



client.connect(function(err){
    if(err) throw err;
    console.log("Connected to supabase pgsql instance");
});

module.exports = {client};