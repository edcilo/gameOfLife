import React, { Component } from "react";
import { View } from "react-native";
import style from "../styles/grid";
import Row from "./row";

class Grid extends Component {
    constructor(props) {
        super(props);

        this.getRows = this.getRows.bind(this);
    }

    componentDidMount() {
        // this.props.getGrid();
    }

    getRows() {
        const grid = this.props.grid;
        const rows = [];

        for (let i = 0; i < grid.length; i++) {
            rows.push(<Row key={`row-${i}`} cells={grid[i]} />);
        }

        return rows;
    }

    render() {
        const rows = this.getRows();

        return <View style={style.wrapper}>{rows}</View>;
    }
}

export default Grid;
