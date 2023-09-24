const environment = process.env.NODE_ENV || 'production';

const config = {
    version: 1.0,
    port: 80,
    host: 'websockets'
}

if (environment == 'development') {
    config.port = 8080;
    config.host = 'localhost';
}

module.exports = config;