import React, { Component } from 'react'
import print from './assets/print-icon.png';

export default class Article extends Component {
    render() {
        return (
            <div>
                <h2>Chocolate Pizza</h2>
                <p>{this.props.date}</p>
                <img src={print} alt="print-icon"/><span>Print</span>
            </div>
        )
    }
}
