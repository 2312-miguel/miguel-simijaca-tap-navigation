import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 8,
    },
    title: {
        textAlign: 'right'
    }
});