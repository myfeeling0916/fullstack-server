// https://console.developers.google.com/
// https://blog.gtwang.org/programming/obtaining-api-key-from-google-developers-console/
module.exports = {
    web: {
        client_id:
            "1234567890-aaaaaaaaaaaaaa.apps.googleusercontent.com",
        project_id: "travis-dev-123456",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://accounts.google.com/o/oauth2/token",
        auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: "aaaaaaaaaaaaaaaaaaaaaa",
        redirect_uris: ["http://localhost:5000/*"],
        javascript_origins: ["http://localhost:5000"],
        cookieKey: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3" // SHA-256 hash
    },
    mongoDB: {
        mongoURI: "mongodb://<username>:<password>@ds123456.mlab.com:57233/databaseName"
    }
};