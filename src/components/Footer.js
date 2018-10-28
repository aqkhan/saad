import React, {Component} from 'react';

export default class Footer extends Component{

    state = {
        companyName: 'i-Intellect Inc.'
    };

    render() {
        return(
            <h4>I am  a fucking footer. Copyrights reserver {this.state.companyName}</h4>
        )
    }
}