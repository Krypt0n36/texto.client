
import { StyleSheet, Text, View } from 'react-native';
import Button from './../Components/Button';
import Textbox from './../Components/Textbox';
import Brand from './../brand.svg';
import {useState} from 'react';
import axios, { Axios } from 'axios';

import CryptoJS from 'crypto-js';
import {globe} from '../configs';

import {hashSHA256, encryptAES, generateRSAKeyPair, decryptAES} from './../Core/crptowizardry.js';


export default function Register() {
    const [fields, setFields] = useState({});
    function handleChange(name,value){
        var new_fields = fields;
        new_fields[name] = value;
        setFields(new_fields);
    }
    
    function handleSubmit(){
        console.log(fields);
        const {privateKey, publicKey} = generateRSAKeyPair();
        
        // encrypt private key with password
        const encryptionKey = hashSHA256(fields.password);
        const encPrivateKey = encryptAES(privateKey, encryptionKey);
        
        // test
        console.log(privateKey);
       
        // hash username
        const identifier = hashSHA256(fields.username);

        const payload = {
            identifier:identifier,
            publicKey:publicKey,
            encPrivateKey:encPrivateKey
        }
        console.log(payload)
        axios.post(globe.SERVER_HOST + '/storeKeyPair', payload)
            .then(function(resp){
                console.log(resp);
            })
            .catch(function(err){
                console.log(err);
            })
    }
    return (
        <View style={styles.container}>
            <img src={Brand} style={{ height: '80px', marginBottom: '50px' }} />
            <View style={{ marginBottom: '20px' }}>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2px', fontFamily: 'Play-Bold' }}>Create a new account</Text>
                <Text style={{ fontSize: '13px', opacity: 0.7 }}>Welcome to texto where your privacy is our first concern, every bit of your data is encrypted and only accessible by you.</Text>
            </View>
            <Textbox name="username" onChange={handleChange} placeholder="Username.." style={{ marginBottom: '5px', width: '100%', borderBottomLeftRadius: '0px' }} />
            <Textbox name="password" onChange={handleChange}  placeholder="Password.." type="password" style={{ marginBottom: '5px', width: '100%', borderBottomLeftRadius: '0px' }} />
            <Textbox name="password-repeat" onChange={handleChange} placeholder="Repeat password.." type="password" style={{ marginBottom: '10px', width: '100%', borderBottomLeftRadius: '0px' }} />
            <Button onClick={handleSubmit} variant="primary" text="Create" style={{ width: '100%', marginBottom: '5px', borderBottomRightRadius: '0px' }}></Button>
            <Button variant="ghost-primary" text="I have an account" style={{ width: '100%', borderBottomLeftRadius: '0px' }}></Button>
            <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center', paddingVertical: 5 }}>
                <Text>Made with ❤️  by kry.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:10,
      backgroundColor: 'white',
      
      justifyContent: 'center',
      width:'100%',
      maxWidth:'428px'
    },
  });