import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      obj: {
        name: '',
        price: 0,
        image_url: ''
      }

    };
    
  }

  componentDidMount() {
    axios.get('/api/products').then( res => {
      
      this.setState({
        products: res.data
      });
      // console.log(this.state.products)
    }).catch( error => console.log( error ) );
  }

  addProduct = () => {
    let newProduct = this.state.obj;
    // let newProduct = {
    //   "name": name,
    //   "price": price,
    //   "image_url": image_url
    // }
    axios.post( '/api/product', newProduct ).then( res => {
      this.setState({
        products: res.data
      });
      console.log('----', res)
      // this.clearInputs();
    }).catch( error => console.log( error ) );
  }

  nameHandle(val) {
    let obj = {...this.state.obj };
    obj.name = val;
    this.setState({
        obj: obj
    });
}

  priceHandle(val) {
    let obj = Object.assign( {}, this.state.obj );
    obj.price = val;
    this.setState({
        obj: obj
    });
}

  imgHandle(val) {
    let obj = Object.assign( {}, this.state.obj );
    obj.image_url = val;
    this.setState({
        obj: obj
    });
}


// clearInputs() {
//   let obj= { ...this.state.obj }
//   obj.name= '';
//   obj.price=0;
//   obj.image_url='';
//   this.setState({
//     obj: obj
//   });
// }

  render() {
    console.log('----',this.state.obj)
    // console.log('products', this.state.products)
    let displayProducts = this.state.products.map( ( e, i ) => {
      return(
        <div key= { i }>
          <Product val={ e } index={ i } />
         
        </div>
      )
    })
    // console.log('products', this.state.products)
    // console.log(this.props.val)
    // console.log(this.state)
    return (
      <div className="App">
        <Header text={'I was passed through props'}/>
        <Dashboard />
        <input value={ this.state.obj.name } onChange={ event => this.nameHandle( event.target.value ) }></input>
        <input value={ this.state.obj.price } onChange={ event => this.priceHandle( event.target.value ) }></input>
        <input value={ this.state.obj.image_url } onChange={ event => this.imgHandle( event.target.value ) }></input>
        <button onClick={ this.addProduct }> Add Product </button>
        {/* <Form /> */}
        { displayProducts }
      </div>
    );
  }
}

export default App;
