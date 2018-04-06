import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { TouchableOpacity } from "react-native";
import { Button, Content, List, ListItem, Text } from "native-base";
import style from "./../styles/sidebar";

class SideBar extends Component {
    render() {
        return (
            <Content style={style.sidebar}>
                <TouchableOpacity onPress={Actions.home} style={style.item}>
                    <Text style={style.text}>Game of life</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={Actions.patternSelector}
                    style={style.item}
                >
                    <Text style={style.text}>Patterns</Text>
                </TouchableOpacity>
            </Content>
        );
    }
}

export default SideBar;
