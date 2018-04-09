import React, { Component } from "react";
import { View } from "react-native";
import { Col, Grid } from 'react-native-easy-grid';
import style from "./styles";
import GeneralContent from "../GeneralContent/index";
import Card from "../PatternCard";

class SelectorPattern extends Component {
    render() {
        const content = (
            <Grid>
                <Col style={style.col}>
                    <View style={style.container}>
                        <Card name="Glider" cover="./../../assets/img/glider.png" />
                        <Card name="Small explorer" cover="./../../assets/img/glider.png" />
                        <Card name="Explorer" cover="./../../assets/img/glider.png" />
                        <Card name="10 cell row" cover="./../../assets/img/glider.png" />
                        <Card name="Lightweight spaceship" cover="./../../assets/img/glider.png" />
                        <Card name="Tumbler" cover="./../../assets/img/glider.png" />
                        <Card name="Gosper Glider Gun" cover="./../../assets/img/glider.png" />
                    </View>
                </Col>
            </Grid>
        );

        return <GeneralContent content={content} />;
    }
}

export default SelectorPattern;
