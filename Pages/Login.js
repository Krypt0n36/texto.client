
import { StyleSheet, Text, View } from 'react-native';
import Button from './../Components/Button';
import Textbox from './../Components/Textbox';
import Brand from './../brand.svg';
import {useState} from 'react';
import axios from 'axios';
import {globe} from './../configs.js';
import { hashSHA256, decryptAES, deriveRSAPublicKey,  } from '../Core/crptowizardry';

export default function Login() {
    const [fields, setFields] = useState({});
    function handleChange(name,value){
        var new_fields = fields;
        new_fields[name] = value;
        setFields(new_fields);
    }

    function handleSubmit(){
        const identifier = hashSHA256(fields.username);
        const password = hashSHA256(fields.password);
        // pull key pairs
        axios.get(globe.SERVER_HOST + `/pullKeyPair?identifier=${identifier}`)
            .then((resp)=>{
                console.log(resp.data);
                console.log(password);
                // decrypt private key
                var privateKey;
                try{
                    privateKey = decryptAES(resp.data.privateKey, password);

                }catch{
                    console.log('Decryption failed')
                }
                // to add : derive public key from private key and compare it with the one's in the response in order to locally verify the authentication process
                if(resp.data.publicKey == deriveRSAPublicKey(privateKey)){
                    // Authentication is valid
                    alert('Valid');
                }
                else{
                    alert('Invalid');
                }
            })
            .catch((err)=>{
                console.log('[!] Error axios.')
                console.log(err)
            })
    }
    return (
        <View style={styles.container}>
            <img src={Brand} style={{ height: '80px', marginBottom: '50px' }} />
            <View style={{ marginBottom: '20px' }}>
                <Text style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '2px', fontFamily: 'Play-Bold' }}>Log into your account</Text>
                <Text style={{ fontSize: '13px', opacity: 0.7 }}>Welcome to texto where your privacy is our first concern, every bit of your data is encrypted and only accessible by you.</Text>
            </View>
            <Textbox name="username" onChange={handleChange} placeholder="Username.." style={{ marginBottom: '5px', width: '100%', borderBottomLeftRadius: '0px' }} />
            <Textbox name="password" onChange={handleChange} type="password" placeholder="Password.." style={{ marginBottom: '10px', width: '100%', borderBottomLeftRadius: '0px' }} />
            <Button onClick={handleSubmit} variant="primary" text="Continue" style={{ width: '100%', marginBottom: '5px', borderBottomRightRadius: '0px' }}></Button>
            <Button variant="ghost-primary" text="Create an account" style={{ width: '100%', borderBottomLeftRadius: '0px' }}></Button>
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