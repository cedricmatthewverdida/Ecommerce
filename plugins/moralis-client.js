import Server from 'moralis';

Server.start({ 
    serverUrl: process.env.serverURL,
    appId: process.env.appID
});

export default ({ app, store }, inject) => {
    store.dispatch('verify');
    inject('Server', Server)

}