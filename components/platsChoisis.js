import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import{Card,Container, Content} from 'native-base';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    groupImage:{
        marginTop:40,
        
    },
    imageSize: {
    width: 400,
    height: 200,
    },
    iconClose:{
        position: 'absolute', 
        top: 10, 
        left: 10,
        color:'#00CDBC',
        backgroundColor:'white',
        borderRadius: 50
    },
    iconResize:{
        position: 'absolute',
        top: 150, 
        right: 10,
        color:'white',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderRadius:5,
    },
    agencementDescriptionPrix:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-around',
        paddingBottom:20,
       
        marginTop:20,
    },
    nomDescription:{
        width:300,
        paddingTop:10
    },
    nom:{
        fontSize:25,
    },
    description:{
        fontSize:15,
    },
    prix:{
        paddingTop:25,
    },
    blocQuantite:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop:15,
        paddingBottom:15,
    },
    btnPlus:{
        paddingRight:50,
        color:'#00CDBC',
    },
    btnMoins:{
        paddingLeft:50,
        color:'#00CDBC',
    },

    nbQuantite:{
        fontSize:25,
        fontWeight: 'bold',
    },
    
    
  });

export default class PlatsChoisis extends React.Component{
    render(){
        return(
            <Container>
            <Content style={styles.groupImage}>
                <Image source={require('../assets/img-dish/calzone.jpeg')} style={styles.imageSize} />
                <Ionicons name="close-outline" size={40} style={styles.iconClose}/>
                <Ionicons name="resize-outline" size={35} style={styles.iconResize}/>
                <Card style={styles.agencementDescriptionPrix}>
                    <View style={styles.nomDescription}>
                    <Text style={styles.nom}>Calzone</Text>
                    <Text style={styles.description}>Sauce tomate, mozzarella, jambon, champignons, oeuf</Text>
                    </View>
                    <View style={styles.prix}>
                        <Text style={{fontSize:20}}>15€</Text>
                    </View>
                </Card>  
            </Content>
            <Content >
                <Card style={styles.blocQuantite}>
                    <Ionicons name="remove-circle-outline" size={30} style={styles.btnMoins}/>
                    <Text style={styles.nbQuantite}>1</Text>
                    <Ionicons name="add-circle-outline" size={30} style={styles.btnPlus}/>
                    
                </Card>
            </Content>
            </Container>


            
            
            
        );
    }
}