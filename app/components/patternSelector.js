import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "native-base";
import GeneralContent from "./generalContent";

class SelectorPattern extends Component {
    render() {
        const content = <Text>Patter selector</Text>;

        return <GeneralContent content={content} />;
    }
}

export default SelectorPattern;
