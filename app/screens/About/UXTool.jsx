import React from "react";
import { StyleSheet, Text, View, FlatList, Linking,Button, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TOOLS from "../../components/About/InfoUxTools";


export default function UXTool(){
    return(
        <LinearGradient colors={["#87CEEB", "#b5d1ff"]} style={Styles.main_view}>
    <View style={Styles.listBtn}
    >
        <FlatList
          data={TOOLS}
          renderItem={({ item }) => 
          <View
          style={Styles.containerBtn}> 

                <TouchableOpacity
                    style={Styles.btn}
                    onPress={() => Linking.openURL(item.links)}
               >
                    <Text style={Styles.btnText}> {item.name}</Text>
                </TouchableOpacity>
                </View>
            }
          keyExtractor={(item) => item.name}
        />
        
   
    </View>
    </LinearGradient>)
}

const Styles = StyleSheet.create({
    main_view: {
      flex: 1,
    },

    btn:{
      backgroundColor:"#5AA3BC",
      marginTop:40,
      width:"60%",
      height:30,
      borderRadius:20,  
      alignItems: "center",
      marginHorizontal:"20%"
      
    },
    btnText:{
      fontWeight:"bold",
      fontSize:15,
      margin:5
      
    }
 
    
  });
  