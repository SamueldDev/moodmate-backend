

import Sequelize from "sequelize"
import dotenv from "dotenv"
dotenv.config()

const isProduction = process.env.NODE_ENV === "production"

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect : "postgres",
    logging: false,
    dialectOption : isProduction ?
    {
        ssl : {
            require : true,
            rejectUnauthorized: false
        },
    }: {}

})

export default sequelize