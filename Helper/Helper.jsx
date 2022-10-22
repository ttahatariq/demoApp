 
import { useState } from "react";
import { Alert } from "react-native";

 const allValidations = (params) => {
    console.log('allValidations Screen is ',params)
     if(params.username.trim().length<1){
        Alert.alert('Username is Required')
      } 
      else if(params.confirmpassword.trim().length<1){
        Alert.alert('Confirm Password is Required')
      }
      else if(params.email.trim().length<1){
        Alert.alert('Email is Required')
      }
      else if(params.fullname.trim().length<1){
        Alert.alert('Full Name is Required')
      }
      else if(params.phonenumber.trim().length<1){
        Alert.alert('Phone Number is Required')
      } 
      else if(params.password!=confirmpassword){
        Alert.alert('Password should be same')
      } 
      else if(!validate(params.email)){
        Alert.alert('email is not in correct format')
      }else{
      }

    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          return false;
        }
        else {
          return true;
        }
      }

    return true
  };
  
  export default allValidations;