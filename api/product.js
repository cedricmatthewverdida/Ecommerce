// import product from "./routes/product";


// product();

const logger = Moralis.Cloud.getLogger();

const TABLE_PRODUCT = 'Product';

const Product = Moralis.Object.extend(TABLE_PRODUCT);


Moralis.Cloud.define('getProduct', async (request) => {
    const query = new Moralis.Query(Product);
    const toSkip = ((request.params.page - 1 ) * request.params.pageSize);
    if(request.params.category != undefined){
        query.containedIn("category", request.params.category);
    }
    if(request.params.search != undefined){
        query.fullText("name", request.params.search);
    }
    query.includeAll();
    query.descending('createdAt')
    query.skip(toSkip);
    query.limit(request.params.pageSize);
    query.withCount();
    const results = await query.find( { useMasterKey: true } );
    return results
});


Moralis.Cloud.define('createProduct', async (request) => {
    const product = new Product();
    product.set('name', request.params.name);
    product.set('price', request.params.price);
    // product.set('image', request.params.image);
    product.set('sale', request.params.sale);

    product.save().then((result) => {
        return result;
    }).catch((error) => {
       return error;
    });
});