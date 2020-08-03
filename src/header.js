import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import fb from './assets/fb-icon.png';
import twit from './assets/twit-icon.png';
import gp from './assets/gp-icon.png';
import insta from './assets/insta-icon.png';
import flic from './assets/flic-icon.png';
import pint from './assets/pint-icon.png';
import rss from './assets/rss-icon.png';
import mail from './assets/mail-icon.png';

class ChocolatePizzaHeader extends React.Component {
    render() {
        return (
            <header>
            <div className="Header-left">
                <img src={logo} className="Fork-knife" alt="logo" />
                <p><strong>Delicious</strong></p>
                <br />
                <p>the best food blog on the web.</p>
            </div>
            <div className="Header-right">
                <img src={fb} alt="facebook" />
                <img src={twit} alt="twitter" />
                <img src={gp} alt="google" />
                <img src={insta} alt="instagram"/>
                <img src={flic} alt="flic" />
                <img src={pint} alt="pinterest" />
                <img src={rss} alt="rss" />
                <img src={mail} alt="mail" />
            </div>
                <hr />
            </header>

        )
    }
}

export default ChocolatePizzaHeader;