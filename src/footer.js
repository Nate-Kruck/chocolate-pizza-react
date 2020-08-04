import React, { Component } from 'react'
import small from './assets/small-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={small} alt="" />
                <p>
                    Delicious &copy 2013 &#8226; All rights Reserved.<br></br>
                    Proudly published with {this.props.name}.
                </p>
            </footer>
        )
    }
}

