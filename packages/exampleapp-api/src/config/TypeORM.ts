import {ConnectionOptions} from 'typeorm'

// console.log('process.env.DB_USER', process.env.DB_USER)

const databaseConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: !!process.env.DB_SYNC,
    entities: ['src/entities/*.{js,ts}'],
    migrations: ['src/migrations/*.{js,ts}'],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities',
    },
}

export = databaseConfig // used by CLI