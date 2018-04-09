import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";

class PrincipalHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header noShadow={true}>
                <Left>
                    <Button transparent onPress={() => this.props.openDrawer()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Game of life</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}

export default PrincipalHeader;
