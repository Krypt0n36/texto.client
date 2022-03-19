import React from 'react';
import { TextInput } from 'react-native';



export default function Textbox(props){
    const additionStyling = props.style;
    return (
        <TextInput onChangeText={(value)=>props.onChange(props.name, value)} secureTextEntry={props.type=='password'} placeholder={props.placeholder} value={props.value} style={Object.assign({},{height:'50px', backgroundColor:'white', padding:'20px', borderRadius:'8px', borderWidth:1, borderColor:'#E6E6E6'},props.style)} />
    );
}