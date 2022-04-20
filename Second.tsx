import React from "react";
import { View, StyleSheet } from "react-native";

const Second = () => {
    return <View style={{ height: "100%" }}>
        <View style={[styles.containerR]}>
            <View style={[styles.row, {justifyContent: "flex-end"}]}>
                <View style={[styles.box]}>
                    <View style={styles.boxCircle} />
                </View>
                <View style={[styles.box]}>
                    <View style={styles.boxCircle} />
                </View>
            </View>
        </View>

        <View style={[styles.containerR, { justifyContent: 'center' }]}>
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <View style={[styles.box]} />
                </View>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <View style={[styles.box]} />
                </View>
                <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <View style={[styles.box]} />
                </View>
            </View>
        </View>


        <View style={[{ flex: 1, justifyContent: "space-between", flexDirection: "row" }]}>
            <View style={[{ display: "flex", flexDirection: "row" }]}>
                <View style={[styles.box]}>
                    <View style={styles.boxCircle} />
                </View>
                <View style={[styles.box]}>
                    <View style={styles.boxCircle} />
                </View>
            </View>
            <View style={[styles.box]} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'grey',
        height: 50,
        width: 50,
        margin: 20,
    },
    boxCircle: {
        width: 20,
        height: 20,
        backgroundColor: "yellow",
        borderRadius: 12
    },

    row: {
        flex: 1,
        flexDirection: "row"
    },
    containerR: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Second;