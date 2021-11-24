import React from "react";
import { StyleSheet, Text, View, FlatList, Image, Linking,TouchableOpacity} from "react-native";
import {SocialIcon} from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";
import INFO_US from "../../components/About/Info";

function Item({ item }) {
  return (
    <View style={Styles.listItem}>
      <Image style={{ width: 60, height: 60 }} source={item.image} />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={Styles.nameText}>{item.name}</Text>
        <View style={{flexDirection: 'row'}}>
        

        <SocialIcon
          type="github-alt"
          style={Styles.icon}
          onPress={() => Linking.openURL(item.github)}
        />

        <SocialIcon
                  type="linkedin"
                  style={Styles.icon}
                  onPress={() => Linking.openURL(item.linkedin)}
                />
                </View>
      </View>
  
    </View>
  );
}

export default function About({navigation}) {
  return (
    <LinearGradient colors={["#87CEEB", "#b5d1ff"]} style={Styles.main_view}>
      <View>
        <FlatList
          data={INFO_US}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.name}
        />
        <Text style={Styles.textApp}>App desarrollada para el curso de react native de IBM</Text>
        <View style={Styles.btncontainer}>
        <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("UXTool")}>
        <Text
        style={Styles.textBtn}>Herramientas UX usadas</Text>
        </TouchableOpacity>
        </View>

      </View>
    </LinearGradient>
  );
}

const Styles = StyleSheet.create({
  main_view: {
    flex: 1,
  },
  listItem: {
    margin: 7,
    padding: 7,
    backgroundColor: "#5AA3BC",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
  },
  nameText:{
    fontWeight:"bold",
    fontSize:18
  },
  itemText: {
    padding: 10,
    fontSize: 18,
    backgroundColor: "#5AA3BC",
  },
  icon:{
    height:30,
    width:30,
    marginRight:40,
    marginLeft:40
  },
  textApp:{
    fontSize:25,
    textAlign:"center",
    color:"#045797",
    margin:25
  },
button: {
  alignItems: 'center',
  backgroundColor: '#445BCD',
  padding: 10,
  width:"70%",
},
textBtn:{
  fontWeight:"bold",
    fontSize:18
},
btncontainer:{
  alignItems: 'center'
}


});
