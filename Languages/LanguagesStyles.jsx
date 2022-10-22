
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0060f7",
        alignItems: "center",
    },
    flatList: {
        flex: 0.90
    },
    topView: {
        flex: 0.20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 50,
        width: 50,
        margin: 10,
    },
    TitleText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    flatliststyle: {
        flexDirection: 'row',
        borderRadius: 25,
        height: 80,
        alignItems: "center",
        padding: 10,
        marginBottom: 20,
    },
    rowimage: {
        height: 75,
        width: 75,
        borderRadius: 40,
        borderColor: 'white',
        overflow: 'hidden',
        borderWidth: 4,
        resizeMode: 'contain'
    },
    LangaugeText: {
        paddingLeft: 20,
        fontSize: 30,
        fontWeight: "800",
        color: 'white'
    },
});

export default styles;