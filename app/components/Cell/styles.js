import { StyleSheet } from "react-native";

const borderColor = "#dcd7ca";
const aliveColor = "#464646";
const deadColor = "#c07365";
const size = 16;

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: borderColor,
        height: size,
        width: size,
        padding: 1
    },

    alive: {
        backgroundColor: aliveColor,
        height: size - 2,
        width: size - 2
    },

    dead: {
        backgroundColor: deadColor,
        height: size - 2,
        width: size - 2
    }
});

export default style;
