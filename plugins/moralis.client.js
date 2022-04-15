import { Moralis } from 'moralis';

Moralis.start({ 
    serverUrl: $config.serverUrl,
    appId: $config.appId
});