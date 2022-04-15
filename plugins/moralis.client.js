import { Moralis } from 'moralis';

Moralis.start({ 
    serverUrl: process.env.serverURL,
    appId: process.env.appID
});