import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { TouchableHighlight } from "react-native";
import { Content, Text } from "native-base";

import style from "./styles";

class SideBar extends Component {
    render() {
        return (
            <Content style={style.sidebar}>
                <TouchableHighlight onPress={Actions.home} style={style.item}>
                    <Text style={style.text}>Game of life</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={Actions.patternSelector}
                    style={style.item}
                >
                    <Text style={style.text}>Patterns</Text>
                </TouchableHighlight>
            </Content>
        );
    }
}

export default SideBar;
