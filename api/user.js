
const TABLE_USER = 'User';

Moralis.Cloud.define('get_user', async (request) => {
    const User = Moralis.Object.extend(TABLE_USER);
    const query = new Moralis.Query(User);
    query.equalTo("username", request.params.username);
    const user = await query.first({useMasterKey:true});
    return user == null ? [] : user ;
});