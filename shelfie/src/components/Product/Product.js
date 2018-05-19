import React, { Component } from 'react';


export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // displayProduct = () => {
    //     const { val, index, name, price, img_url } = this.props
    //     if( val ) {
    //         return( <ul key={ index }>
    //                     <li>{ name }</li>
    //                     <li>{ price }</li>
    //                     <img src ={ img_url } alt="product"/>
    //                 </ul>

    //         )
    //     }
    // }

    render() {
        const { name, price, image_url } = this.props.val
        const { val, index } = this.props

        if (val) {
                       
        return(
            <div>
                <ul key={ index }>
                    <li>{ name }</li>
                    <li>{ price }</li>
                    <img src ={ image_url } alt="product"/>
                </ul>
            </div>
        )
    }
}
}