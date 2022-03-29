module.exports = {
    flowFile: 'flows.json',
    flowFilePretty: true,
    uiPort: process.env.PORT || 1880,
    logging: {
         console: {
             level: "info",
             metrics: false,
             audit: false
         }
     },
     storageModule: require("node-red-contrib-storage-s3"),
     exportGlobalContextKeys: false,
     externalModules: {
     },
    editorTheme: {
        palette: {
        },
        projects: {
            enabled: false,
            workflow: {
                mode: "manual"
            }
        },
        codeEditor: {
            lib: "ace",
            options: {
                theme: "vs",
            }
        }
    },
    functionExternalModules: true,
    functionGlobalContext: {
    },
    debugMaxLength: 1000,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
}