module.exports = {
    web: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        project_id: process.env.GOOGLE_PROJECT_ID,
        auth_uri: process.env.GOOGLE_AUTH_URI,
        token_uri: process.env.GOOGLE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uris: [process.env.GOOGLE_REDIRECT_URI],
        javascript_origins: [process.env.GOOGLE_ORIGINS_URI],
        cookieKey: process.env.COOKIE_KEY
    },
    mongoDB: {
        mongoURI: process.env.MONGO_URI
    }
};
