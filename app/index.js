import React, { Component } from "react";
import { View } from "react-native";

import { Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";

import { getGrid } from "./actions";
import Home from "./containers/home";

class Main extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={Home} title="Home" initial />
                </Scene>
            </Router>
        );
    }
}

export default connect(null, { getGrid })(Main);
