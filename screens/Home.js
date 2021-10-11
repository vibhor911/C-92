import React, { Component } from "react";
import {View,Text,TouchableOpacity,StyleSheet,Platform,StatusBar,SafeAreaView,
ImageBackground} from "react-native";

export default class HomeScreen extends Component {
      constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
          <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>

            <TouchableOpacity onPress={() =>this.props.navigation.navigate("Feed")}
            style={styles.routeCard}>
            <Text style={styles.routeText}>Feed</Text>
            <Text style={styles.bgDigit}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>this.props.navigation.navigate("PostScreen")}
            style={styles.routeCard}>
            <Text style={styles.routeText}>PostScreen</Text>
            <Text style={styles.bgDigit}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>this.props.navigation.navigate("Profile")}
            style={styles.routeCard}>
            <Text style={styles.routeText}>Profile</Text>
            <Text style={styles.bgDigit}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>this.props.navigation.navigate("UploadPhoto")}
            style={styles.routeCard}>
            <Text style={styles.routeText}>UploadPhoto</Text>
            <Text style={styles.bgDigit}>4</Text>
            </TouchableOpacity>

            </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.95,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 30
    },

    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },

});