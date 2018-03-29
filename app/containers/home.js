import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { updateGrid } from "../actions";
import Home from "../components/home";

function mapStateToProps(state, props) {
    return {
        grid: state.dataReducer.grid
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateGrid }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
