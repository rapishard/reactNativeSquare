import React from "react";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

const Fourth = () => {

/*     const [cardwidth, setCardwidth] = useState<number>()
 */    return (
        <View style={[styles.container, { flexDirection: 'row' }]}>
            <View style={[styles.box, {
                height: "100%",
                justifyContent: "flex-start"
            }]} />
            <View style={[styles.box, {
                position: 'absolute',
                height: 50, width: 30, backgroundColor: 'red',
                left: 80
            }]} />
            <View style={[{ margin: 50, height: "100%", flexDirection: 'column', justifyContent: "center" }]}>
                <View style={[styles.box, { height: 200, backgroundColor: 'green' }]} />
                <View style={[styles.box, { width: 70, height: 50, alignSelf: "center", backgroundColor: 'blue' }]} />
                <View style={[styles.box, { height: 200, backgroundColor: 'green' }]} />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    bottomRight: {
        bottom: -25,
        right: -25,
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'grey',
        height: 50,
        width: 100,
        margin: 20,
    },
    boxCircle: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        borderRadius: 30
    },

    card: {
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 15,
        flexDirection: "row",
        height: 200,
        width: "100%",
    },
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        padding: 30,

    },
    round: {
        alignSelf: "center",
        backgroundColor: "cyan",
        borderRadius: 50,
        height: 50,
        position: "absolute",
        top: -25,
        width: 50,

    },

});
export default Fourth;
