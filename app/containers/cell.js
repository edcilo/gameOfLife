import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

import { updateGrid } from "../actions";
import Cell from "../components/cell";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateGrid }, dispatch);
}

export default connect(null, mapDispatchToProps)(Cell);
