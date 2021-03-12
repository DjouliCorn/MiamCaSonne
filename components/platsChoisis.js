import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import{Card,Container, Content, Footer} from 'native-base';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
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

    footer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },    
    
    btn:{
        width: "90%", 
        margin: 10,
    },
  });

export default class PlatsChoisis extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
    }

    IncrementItem = () => {
        this.setState({
            count: this.state.count + 1
          });
        }

    DecreaseItem = () => {
        if(this.state.count > 0)
        return this.setState({
            count: this.state.count - 1
          });
        return null;
        }

    render(){
        return(

            <Container>
            <Content>
                <Image source={require('../assets/img-dish/calzone.jpeg')} style={styles.imageSize} />
                <Ionicons name="close-outline" size={40} style={styles.iconClose} onPress={() => this.props.navigation.goBack()}/>   
                <Ionicons name="resize-outline" size={35} style={styles.iconResize} />

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
                    <Ionicons name="remove-circle-outline" size={30} style={styles.btnMoins} onPress={this.DecreaseItem}/>
                    <Text style={styles.nbQuantite}>{ this.state.count }</Text>
                    <Ionicons name="add-circle-outline" size={30} style={styles.btnPlus} onPress={this.IncrementItem}/>      
                </Card>      
            </Content>
                <Footer style={styles.footer}>
                    <View style={styles.btn}>
                    <Button title='Ajouter un article' color="#00CDBC" onPress={() => this.props.navigation.navigate('ScreenCart')}/>
                    </View>
                </Footer>
            </Container> 
          
            
            
           

            
            
            
        );
    }
}