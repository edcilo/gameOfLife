import React, { Component } from "react";
import { View } from "react-native";
import { Col, Grid } from 'react-native-easy-grid';

import style from "./styles";
import patterns from "./patterns";

import GeneralContent from "../GeneralContent/index";
import Card from "../PatternCard";

class SelectorPattern extends Component {
    getCards() {
        const p = patterns.patterns;
        const c = [];

        for (let i = 0; i < p.length; i++) {
            c.push(<Card key={`card-${i}`} name={p[i].name} image={p[i].image} />);
        }

        return c;
    }

    render() {
        const cards = this.getCards();

        const content = (
            <Grid>
                <Col style={style.col}>
                    <View style={style.container}>{ cards }</View>
                </Col>
            </Grid>
        );

        return <GeneralContent content={content} />;
    }
}

export default SelectorPattern;
