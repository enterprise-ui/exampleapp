import {ConnectionOptions} from 'typeorm'

const databaseConfig: ConnectionOptions = {
    type: 'sqlite',
    database: 'data/points.db',
    synchronize: !!process.env.DB_SYNC,
    entities: ['src/entities/*.{js,ts}'],
    migrations: ['src/migrations/*.{js,ts}'],
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entities',
    },
}

export = databaseConfig // used by CLI