// import React, { Component } from 'react';


// export default class Form extends Component {
//     constructor() {
//         super();

//         this.state = {
//             name: '',
//             price: 0,
//             image_url: ''
//         };
//     }

//     nameHandle(val) {
//         this.setState({
//             name: val
//         });
//     }

//     priceHandle(val) {
//         this.setState({
//             price: val
//         });
//     }

//     imgHandle(val) {
//         this.setState({
//             image_url: val
//         });
//     }



//     render() {
//         console.log(this.state)
//         return(
//             <div>
//                 Form
//                 <input onChange={ event => this.nameHandle( event.target.value ) }></input>
//                 <input onChange={ event => this.priceHandle( event.target.value ) }></input>
//                 <input onChange={ event => this.imgHandle( event.target.value ) }></input>
//             </div>
//         )
//     }
// }