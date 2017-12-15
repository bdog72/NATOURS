import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo-box">
                    <img
                        src={require('./img/logo-white.png')}
                        alt="logo"
                        className="logo"
                    />
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Outdoors</span>
                        <span className="heading-primary-sub">
                            is where life happens
                        </span>
                    </h1>
                </div>
            </header>
        )
    }
}

export default App
