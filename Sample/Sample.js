import React from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";


const Sample = () => {

    const [value, setValue] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod');

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.topContainer}>
                <Text style={styles.text}>Hello ReactNative</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.text}>{value}</Text>
                <Button title="Click Me" onPress={ () => setValue('State has been updated')}/>
                
            </View>
            
            <View style={styles.boxContainer}>
                
                <View style={styles.box1}>
                <Text style={styles.text}>Box 1</Text>
                </View>
                <View style={styles.box2}>
                <Text style={styles.text}>Box 2</Text>

                </View>
                <View style={styles.box3}>
                <Text style={styles.text}>Box 3</Text>

                </View>

            </View>
        </SafeAreaView>

    );

};

export default Sample;

