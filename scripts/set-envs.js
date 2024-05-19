const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  ENDPOINT_FINANCIAL_MODELING_PREP: "${ process.env['ENDPOINT_FINANCIAL_MODELING_PREP'] }",
  APIKEY: "${ process.env['APIKEY'] }",
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );



