import dotenv from "dotenv"
dotenv.config()

export const isProd = process.env.NODE_ENV === "production" ? true : false
export const isTest = process.env.NODE_ENV === "development-test" ? true : false

const PORT: number = parseInt(process.env.PORT) || 3000

export { PORT }
