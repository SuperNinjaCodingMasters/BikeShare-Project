const env = {
    PORT: process.env.PORT || 3000,
    DATABASE_NAME: process.env.DATABASE_NAME || 'database name',
    DATABASE_HOST: process.env.DATABASE_HOST || 'host name',
    DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'database username',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'database password',
    DATABASE_PORT: process.env.DATABASE_PORT || 3306,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

    NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;