import React from "react";
import { View, StyleSheet } from "react-native";
import { useState } from "react";

const Five = () => {

    return (
        <View style={styles.container}>
            <View style={[styles.card, { width: '55%', height: '60%' }]}>
                <View style={[styles.box, { height: 100, margin: 50 }]} />
                <View style={[{ margin: 50, flexDirection: 'row', justifyContent: "flex-end" }]}>
                    <View style={[styles.box, { margin: 10, backgroundColor: 'red' }]} />
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                    </View>
                    <View style={[{ margin: 50, flexDirection: 'row', justifyContent: "flex-end" }]}>
                        <View style={[styles.box, { height: 150, backgroundColor: 'green' }]} />
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                    </View>
                    <View style={[styles.box, { margin: 10, backgroundColor: 'red' }]} />
                    <View style={[styles.round, { right: 20, top: +120 }]} />
                </View>
                <View style={[styles.box, { height: 100, margin: 50 }]} />
            </View>
            <View style={styles.container}>
                <View style={[{ flexDirection: 'column', justifyContent: "center" }]}>
                    <View style={[styles.box, { width: 300, height: 50, backgroundColor: 'blue' }]} />
                </View></View>
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
        backgroundColor: 'black',
        height: 50,
        width: 50,
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

export default Five;
