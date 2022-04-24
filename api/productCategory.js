
const TABLE_PRODUCTCATEGORY = 'ProductCategory';

const Category = Moralis.Object.extend(TABLE_PRODUCTCATEGORY);

Moralis.Cloud.define('getCategory', async (request) => {
    const query = new Moralis.Query(Category);
    const toSkip = ((request.params.page - 1 ) * 10);
    query.includeAll();
    query.descending('createdAt');
    query.skip(toSkip);
    query.limit(request.params.pageSize);
    query.withCount();
    const results = await query.find( { useMasterKey: true } );
    return results;
});

Moralis.Cloud.define('getAllCategory', async (request) => {
    const query = new Moralis.Query(Category);
    const results = await query.find( { useMasterKey: true } );
    return results;
});