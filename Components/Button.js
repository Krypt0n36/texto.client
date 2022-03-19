import React from 'react';
import { Text, TouchableOpacity } from 'react-native';




export default function Button(props){
    let bgColor='red';
    let txtColor='white';
    if(props.variant=='primary'){
        bgColor='#498DF3';
        txtColor='white';
    }else if(props.variant=='ghost-primary'){
        bgColor='#E3EEFD';
        txtColor='#498DF3';
    }else{
        bgColor='#F4F4F4';
        txtColor='black';
    }
   
    return (
        <TouchableOpacity onPress={props.onClick} style={Object.assign({},{backgroundColor:bgColor, paddingVertical:'15px', paddingHorizontal:'30px', borderRadius:'8px'}, props.style)}>
            <Text style={{color:txtColor, alignSelf:'center'}}>{props.text}</Text>
        </TouchableOpacity>
    );
}

