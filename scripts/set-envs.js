const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  ENDPOINT_FINANCIAL_MODELING_PREP: "${ process.env['ENDPOINT_FINANCIAL_MODELING_PREP'] }",
  firebaseConfig: {
    apiKey: "${ process.env['FIREBASE_API_KEY'] }",
    authDomain: "${ process.env['FIREBASE_AUTH_DOMAIN'] }",
    projectId: "${ process.env['FIREBASE_PROJECT_ID'] }",
    storageBucket: "${ process.env['FIREBASE_STORAGE_BUCKET'] }",
    messagingSenderId: "${ process.env['FIREBASE_MESSAGING_SENDER_ID'] }",
    appId: "${ process.env['FIREBASE_APP_ID'] }"
  },
  production: "${ process.env['PRODUCTION'] }",
  useEmulators: "${ process.env['USEEMULATORS'] }",
};`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );



