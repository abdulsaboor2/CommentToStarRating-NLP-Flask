import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';


const App = () => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  // To set the default Star Selected
  const [rating, setRating] = useState();
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
 
  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const handleSubmit = () => {
      if(text == ""){
        alert("Please Write Some Text on Text Box");
      }
      else{
        getModelPrediction()
        setVisible(true);
      }
    }

    const getModelPrediction = async () => {
     
        try {
          await fetch("http://192.168.10.10?q=" + text, { method: "GET" }).then((response) => response.json())
            .then((responseJson) => {
              setRating(responseJson);
            })
            .catch((error) => {
              console.error(error);
            });
  
        } catch (err) {
          console.log("error  " + err);
        }
    };

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}>
              <Image
                style={styles.starImageStyle}
                source={ item <= rating ? {uri: starImageFilled} : {uri: starImageCorner} }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" />
      <View>
        <View style={{marginTop:20, marginBottom:20, marginLeft:5, marginRight:5}}>
          <Text style={{margin:10, fontSize:18, color:"black", fontWeight:"bold", }}>Write Comment Below</Text>
          <TextInput style={{borderWidth:3, borderColor:"gray", fontSize:20, padding:10, minHeight:100, color: "black"}} multiline keyboardType='text' placeholder='Write Some Text' onChangeText={(e)=>setText(e)} />
        </View>
        <View style={{padding:10}}>
          <TouchableOpacity style={{backgroundColor:"lightgreen", height:45, borderRadius: 10, alignContent:"center", alignItems:"center", paddingTop:8}} onPress={handleSubmit}>
            <Text style={{textAlign:"center", fontSize:21, fontWeight:"bold", color:"white"}}>Submit</Text>
          </TouchableOpacity>
        </View>

        { visible ? <CustomRatingBar /> : <></> }
        

      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default App;
