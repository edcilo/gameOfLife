import React, { Component } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import style from "../styles/cell";

class Cell extends Component {
    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        this.props.updateGrid([
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, true, true, true, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ]);
    }

    render() {
        const styleCell = this.props.alive ? style.alive : style.dead;

        return (
            <View style={style.wrapper}>
                <TouchableWithoutFeedback onPress={this._onPress}>
                    <View style={styleCell} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default Cell;
