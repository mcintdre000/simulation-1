const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const massive = require( 'massive' );
const controller = require( './controller' );
require( 'dotenv' ).config();

const app = express();
app.use( bodyParser.json() );
// app.use( express.static(__dirname ) );

massive( process.env.CONNECTION_STRING ).then( database => {
    app.set( 'db', database );
});

app.post( '/api/product', controller.create );
app.get( '/api/products', controller.read );
app.put( '/api/product/:id', controller.update );
app.delete( '/api/product/:id', controller.delete);

app.get('/', (req, res) => {
    // req.app.get('db').
    res.send('Hello World!')
});



const PORT = 9000;
app.listen( PORT, () => {
    console.log( `This port is over ${ PORT }!!!` );
});