import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import PostCard from "./PostCard";
import { FlatList } from "react-native-gesture-handler";
let posts = require("./temp_posts.json");

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
    renderItem = ({ item: post }) => {
        return <PostCard post={post} navigation={this.props.navigation} />;
    };


  keyExtractor = (item, index) => index.toString();

  render(){
      return (
      <View style={styles.container}>

      <SafeAreaView style={styles.droidSafeArea} />

      <View style={styles.appTitle}>

      <View style={styles.appIcon}>

      <Image source={require("../assets/logo.png")}
      style={styles.iconImage}></Image>
      </View>

      <View style={styles.appTitleTextContainer}>
      <Text style={styles.appTitleText}>Spectagram</Text>
      </View>
       </View>
       <View style={styles.cardContainer}>
       <FlatList keyExtractor={this.keyExtractor}
        data={posts}
        renderItem={this.renderItem}/>
        
        </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: 28,
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.85
  }
});
