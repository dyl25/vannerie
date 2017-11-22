const PROXY_CONFIG = [
    {
        context: [
            "/api/",
            "/oauth/"
        ],
        target: "http://localhost/vannerie/public/index.php",
        secure: false,
        logLevel: "debug"
    }
]

module.exports = PROXY_CONFIG;
