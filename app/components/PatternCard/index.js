import React, { Component } from "react";
import { Image, View } from 'react-native';
import { Text } from "native-base";
import style from "./styles";

class PatternCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let patternImage = "./../../assets/img/default.png";

        return (
            <View style={style.card}>
                <View style={style.body}>
                    <Image source={ require(patternImage) } />
                    <Text style={style.text}>{ this.props.name }</Text>
                </View>
            </View>
        );
    }
}

export default PatternCard;
