import React, { Component } from "react";
import { View } from "react-native";
import style from "../styles/row";
import Cell from "../containers/cell";

class Row extends Component {
    constructor(props) {
        super(props);

        this.getCells = this.getCells.bind(this);
    }

    getCells() {
        const cells = this.props.cells;
        const items = [];

        for (let i = 0; i < cells.length; i++) {
            items.push(<Cell key={`cell-${i}`} alive={cells[i]} />);
        }

        return items;
    }

    render() {
        const cells = this.getCells();

        return <View style={style.wrapper}>{cells}</View>;
    }
}

export default Row;
