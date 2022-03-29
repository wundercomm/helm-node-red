module.exports = {
    flowFile: 'flows.json',
    flowFilePretty: true,

    adminAuth: {
        type: 'strategy',
        strategy: {
          name: 'Keycloak',
          label: process.env.KEYCLOAK_LABEL,
          icon: 'fa-lock',
          strategy: require('@exlinc/keycloak-passport'),
          options: {
            host: process.env.KEYCLOAK_HOST,
            realm: process.env.KEYCLOAK_REALM,
            clientID: process.env.KEYCLOAK_CLIENT_ID,
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
            callbackURL: process.env.KEYCLOAK_CALLBACK_URL,
            authorizationURL: process.env.KEYCLOAK_AUTHORIZATION_URL,
            tokenURL: process.env.KEYCLOAK_TOKEN_URL,
            userInfoURL: process.env.KEYCLOAK_USER_INFO_URL
          }
        },
        users: function (username) {
          return new Promise(function (resolve) {
            var user = { username: username, permissions: '*' }
            resolve(user)
          })
        },
        sessionExpiryTime: 86400
      },
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