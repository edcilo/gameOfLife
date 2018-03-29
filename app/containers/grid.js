import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { getGrid } from "../actions";
import Grid from "../components/grid";

function mapStateToProps(state, props) {
    return {
        grid: state.dataReducer.grid
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getGrid }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
