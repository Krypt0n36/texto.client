
import { StyleSheet, Text, View } from 'react-native';
import Button from './../Components/Button';
import Textbox from './../Components/Textbox';
import Brand from './../brand.svg';

import Avatar from './../Components/Avatar.js';

export default function Inbox() {
    return (
        <View style={styles.container}>
            <View style={{ height: '50px', width: '100%', paddingVertical: '5px' }}>
                <img src={Brand} style={{ height: '100%' }} />
            </View>
            <View style={{paddingVertical:'10px', paddingHorizontal:'10px', marginBottom:'10px'}}>
                <Textbox placeholder="Search in contacts.." style={{width:'100%'}}/>
            </View>
            <View style={{width:'100%', flexDirection:'row', paddingHorizontal:'10px', marginBottom:'10px'}}>
            <View style={{width:'60px', marginRight:'10px'}}>
                <Avatar />
                <View style={{width:'100%', alignItems:'center', paddingVertical:'5px'}}>
                    <Text>Kryptos</Text>
                </View>
            </View>
            <View style={{width:'60px'}}>
                <Avatar />
                <View style={{width:'100%', alignItems:'center', paddingVertical:'5px'}}>
                    <Text>Firas</Text>
                </View>
            </View>
            </View>

            <View style={{width:'100%', flex:1, paddingHorizontal:'10px'}}>
                <View style={{width:'100%', flexDirection:'row', paddingVertical:'10px', borderBottomColor:'#F2F2F2', borderBottomWidth:'1px'}}>
                <Avatar />
                <View style={{height:'60px', marginLeft:'10px', width:'100%', flexDirection:'row'}}>
                    <View style={{height:'60px', justifyContent:'center'}}>
                        <Text style={{fontSize:'20px'}}>Firas</Text>
                        <Text style={{opacity:'0.6'}}>Hello kryptos</Text>
                    </View>
                    <View style={{margin:'auto', height:'60px', marginRight:'0px'}}>
                    <Text style={{opacity:'0.6'}}>Hello kryptos</Text>

                    </View>
                </View>
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      width:'100%',
      maxWidth:'428px'
    },
  });