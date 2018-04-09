import React, { Component } from "react";
import { View } from "react-native";
import GeneralContent from "./generalContent";
import Card from "./patternCard";

class SelectorPattern extends Component {
    render() {
        const content = (
            <View>
                <Card />
            </View>
        );

        return <GeneralContent content={content} />;
    }
}

export default SelectorPattern;
