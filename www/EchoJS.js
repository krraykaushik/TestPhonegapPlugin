var EchoJS = {
    echo: function("echo", successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "Echo",
            "echoText",
            [{                  // and this array of custom arguments to create our entry
                "text": "Hello how are you.?"
            }]
        );
    }
}
module.exports = EchoJS;









