import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "native-base";

import styles from "./styles";

import gameOfLife from "../../utils/gameOfLife";

import GeneralContent from "../GeneralContent";
import Grid from "../../containers/grid";

class Home extends Component {
    constructor(props) {
        super(props);

        this.gameOfLife = new gameOfLife();
        this.grid = [];

        this.start = this.start.bind(this);
        this.generate = this.generate.bind(this);
    }

    generate() {
        let newGrid = this.gameOfLife.createGrid(20, 20);
        this.grid = this.gameOfLife.fillGrid(newGrid);

        this.props.updateGrid(this.grid);
    }

    start() {
        let ctx = this;
        let grid = this.grid;

        let c = 0;
        let i = setInterval(function() {
            grid = ctx.gameOfLife.nextGeneration(grid);
            ctx.props.updateGrid(grid);

            c++;
            if (c === 200) {
                clearInterval(i);
            }
        }, 100);
    }

    render() {
        const content = (
            <View>
                <View style={{ padding: 10 }}>
                    <Grid />
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.saveBtn]}
                        disabled={false}
                        onPress={this.generate}
                    >
                        <Text style={styles.buttonText}>New grid</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.saveBtn]}
                        disabled={false}
                        onPress={this.start}
                    >
                        <Text style={styles.buttonText}>Start random</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        return <GeneralContent content={content} />;
    }
}

export default Home;
