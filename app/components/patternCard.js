import React, { Component } from "react";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text
} from "native-base";

class PatternCard extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>NAME</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default PatternCard;
