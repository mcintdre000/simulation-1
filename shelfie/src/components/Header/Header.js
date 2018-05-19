import React, { Component } from 'react';


export default function Header(props){
    
        return(
            <div>
                Header
                <button>{props.text}</button>
            </div>
        )
    }
