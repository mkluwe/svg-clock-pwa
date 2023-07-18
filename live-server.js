var liveServer = require("live-server");

var params = {
    "browser": "google-chrome",
    "ignore": "**/README.md,**/live-server.js",
    "mount": [["/svg-clock-pwa", "."]]
};

liveServer.start(params);