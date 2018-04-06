import React, { Component } from "react";
import { View } from "react-native";
import { StyleProvider } from "native-base";
import getTheme from "./../native-base-theme/components";
import Expo from "expo";

import { Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";

import { getGrid } from "./actions";
import Home from "./containers/home";
import PatternSelector from "./components/patternSelector";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }

        return (
            <StyleProvider style={getTheme()}>
                <Router>
                    <Scene key="root" hideNavBar={true}>
                        <Scene
                            key="home"
                            component={Home}
                            title="Home"
                            initial={true}
                        />
                        <Scene
                            key="patternSelector"
                            component={PatternSelector}
                            title="Patter selector"
                        />
                    </Scene>
                </Router>
            </StyleProvider>
        );
    }
}

export default connect(null, { getGrid })(Main);
