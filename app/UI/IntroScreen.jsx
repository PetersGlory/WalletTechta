import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import tw from 'twrnc'
import PrimaryBtn from '../Components/common/PrimaryBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from "react-redux"
import { setAccessToken, setRates, setUserProfile } from '../config/redux/slice'
import { BASE_URL, GENERAL_URL, updatedevicetoken } from '../config/api/Index'
import axios from 'axios'

const IntroScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const btnGetstarted = () =>{
        navigation.push("LoginScreen")
    }
    useEffect(()=>{
      getToken()
    })

    const getToken = async () =>{
      // let accessTokens = await AsyncStorage.setItem('accessToken', '');
      let accessToken = await AsyncStorage.getItem('accessToken');
      console.log(accessToken);
      if(accessToken !== null & accessToken !== ""){
        dispatch(setAccessToken(accessToken))
        getProfile(accessToken)
        getRates();
        navigation.replace("HomeScreen")
      }
    }

    // Getting Profile
    const getProfile = (key) =>{
      axios.request({
          method: 'GET',
          url: `${BASE_URL}/profile`,
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: 'Bearer '+key
          }
      }).then((response)=>{
          let dataUser = response.data.data;
          dispatch(setUserProfile(dataUser));
          updatedevicetoken(dataUser.email, key);
      }).catch((err)=>{
          console.error(err)
      })
    }

    // Getting Rates
    const getRates = () =>{
      axios.request({
          method: 'GET',
          url: `${GENERAL_URL}/rates`
      }).then((response)=>{
          let dataRate = response.data.message;
          dispatch(setRates(dataRate));
      }).catch((err)=>{
          console.error(err)
      })
    }
  return (
    <SafeAreaView style={tw`flex-grow w-full h-full bg-white`}>
      {/* <View style={tw`flex-1`} /> */}
      <View style={tw`flex-1`} />
      <View style={tw`flex-1 w-full h-full items-center pt-10`}>
        <Image source={require("../../assets/Image/intro.png")} alt='intro' />
      </View>
      <View style={tw`flex-1`} />
      <View style={tw`flex-1`} />
      <View style={tw`flex-1`} />
      <View style={{
        ...tw`bg-white h-[45%] p-8 pt-10`,
        flexShrink: 0,
        boxShadow: '0px -35px 25px 0px #FFF',
      }}>
        <Text style={{
            ...tw`text-2xl text-center uppercase`,
            // fontFamily: "Roboto",
            fontWeight:700,
            color: "#800B47",
        }}>
          Send and Receive Money to Friends!
        </Text>
        <Text style={tw`text-[13px] text-gray-500 p-4 text-center`}>
          A secured financial platform that allows you to send and receive crypto and also allows you to exchange 
          currencies to cash in just few clicks.
        </Text>
        <PrimaryBtn title={"Get Started"} onpressed={btnGetstarted} />
      </View>
        {/* <View style={styles.root}>
            
        </View> */}
    </SafeAreaView>
  )
}

export default IntroScreen