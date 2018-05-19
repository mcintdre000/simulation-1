module.exports = {
    create: ( req, res, next ) =>{
        const database = req.app.get( 'db' );
        const { name, price, image_url } = req.body
        
        database.create_product( [ name, price, image_url ] ).then( (user) => res.status(200).send(user) ).catch( ( error ) => {console.log( error )} );
    },
    read: ( req, res, next ) =>{
        const database = req.app.get( 'db' );
        
        database.read_products().then( products => res.status(200).send( products ) ).catch( ( error ) => {console.log( error )} );
    },
    update: ( req, res, next ) =>{
        const database = req.app.get( 'db' );
        const { params } = req;
        const { name, price, image_url } = req.body

        database.update_product( [ params.id, name, price, image_url ] ).then( () => res.status(200).send() ).catch( ( error ) => {console.log( error )} );
    },
    delete: ( req, res, next ) => {
        const database = req.app.get( 'db' );
        const { params } = req;
        console.log('hey')
        database.delete_product( [ params.id ] ).then( () => res.status(200).send() ).catch( ( error ) => {console.log( error )} );
    }
};