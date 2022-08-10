import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';


const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
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

    const handleEmoji = (responseJson) => {
      if(responseJson == 1){
        setResult("Negative ☹️")
      }
      else if(responseJson == 2){
        setResult("Negative But Not Least 🙁")
      }
      else if(responseJson == 3){
        setResult("Neutral 🙂")
      }
      else if(responseJson == 4){
        setResult("Positive But not 5 😀")
      }
      else if(responseJson == 5){
        setResult("Positive 😍")
      }
    }

    const handleSubmit = () => {
      if(text == ""){
        alert("Please Write Some Text on Text Box");
      }
      else{
        getModelPrediction();
        setVisible(true);
      }
    }

    const getModelPrediction = async () => {
        try {
          await fetch("http://192.168.10.7?q=" + text, { method: "GET" }).then((response) => response.json())
            .then((responseJson) => {
              setRating(responseJson);
              handleEmoji(responseJson);
            })
            .catch((error) => {
              alert(error);
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
      <Text style={styles.header}>Sentiment Analysis using NLP</Text>
      <View style={styles.container}>
        <View>
          <Text style={styles.boxHeader}>Write Comment Below</Text>
          <TextInput 
            style={styles.inputBox} 
            multiline keyboardType='text' 
            placeholder='Write Some Text' 
            onChangeText={(e)=>setText(e)} />
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        { visible ? 
          <>
            <Text style={{fontSize:26, textAlign:'center', color:"black"}}> {result} </Text>
            <CustomRatingBar />
          </>
          : <></> }
        
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize:25, 
    fontWeight:"bold", 
    textAlign:"center", 
    backgroundColor:"#61daff", 
    padding: 10, 
    borderTopColor:"lightgray", 
    borderTopWidth:1, 
    color:"black",
  },
  container: {
    margin:20, 
    marginLeft:5, 
    marginRight:5,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  boxHeader: {
    fontSize:18, 
    color:"black", 
    fontWeight:"bold",
  },
  inputBox: {
    borderWidth:3, 
    borderColor:"gray", 
    fontSize:20, 
    minHeight:100, 
    color: "black",
    paddingLeft:10,
    paddingRight: 10,
    borderRadius: 10,
    marginTop:10,
  },
  buttonContainer: {
    backgroundColor:"lightgreen", 
    height:45, 
    borderRadius: 10,
    paddingTop:8,
    marginTop:20,
  },
  buttonText:{
    textAlign:"center", 
    fontSize:21, 
    fontWeight:"bold", 
    color:"white",
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
