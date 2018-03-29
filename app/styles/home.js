import { StyleSheet, Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
    saveBtn: {
        width: windowWidth,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6B9EFA"
    },

    buttonText: {
        color: "#ffffff",
        fontWeight: "500"
    }
});

export default styles;
