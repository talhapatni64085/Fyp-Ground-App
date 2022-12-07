import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Button, Alert} from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
// import {auth} from '../../firebase/firebase'

const Home = (props) => {

    const { width, height } = Dimensions.get("window");

    // const handleSignOut = () => {
    //     auth
    //     .signOut()
    //     .then(() => {
    //         props.navigation.navigate('SignIn')
    //     })
    //     .catch(error => alert(error.message))
    // }

    return (
        <View
            style={{
                height: height,
                width: width,
                backgroundColor: "lightgray",
                flex: 1,
            }}>
            <View
                style={{
                    backgroundColor: "black",
                    height: "45%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        width: "50%",
                        alignItems: 'flex-start',
                        marginTop: '30%'
                    }}>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('Profile')} 
                    >
                        <Icons
                            name='face-man-profile'
                            size={30}
                            color='white'
                        />
                    </TouchableOpacity>
                </View>
                {/* <View>
                <Button title='Logout' onPress={handleSignOut}/>
                </View> */}
                <View
                    style={{
                        width: "100%",
                        alignItems: 'flex-end',
                        marginTop: -30,
                    }}>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('Notification')}
                    >
                        <Icon
                            name='notifications'
                            size={30}
                            color='white'
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "100%",
                    marginTop: '45%',
                }}>
                    <Text style={{
                        fontSize: 28,
                        color: "#FFF",
                        fontWeight: "bold",
                    }}>Hi 
                    {/* {auth.currentUser?.email} */}
                    </Text>
                </View>
                {/* <View style={{
                    backgroundColor: "#FFF",
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    marginHorizontal: 20,
                    borderRadius: 15,
                    marginTop: '15%',
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <TextInput
                        style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            width: 260,
                        }}
                        placeholder='Search'
                        placeholderTextColor='black'
                    />
                </View> */}
            </View>
            <View style={{
                marginTop: '8%',
            }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 400 }}
                >
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate('Grounds')}
                    >
                        <View style={{
                            height: 300,
                            elevation: 2,
                            backgroundColor: "#FFF",
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 15,
                            marginBottom: 10,
                            width: 160,
                        }}>
                            <Text style={{
                            textAlign:'center',
                            fontSize:20,
                            color:'black'
                        }}>
                            Register Your Ground
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            height: 300,
                            elevation: 2,
                            backgroundColor: "#FFF",
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 15,
                            marginBottom: 10,
                            width: 160,
                        }}>
                            <Text style={{
                            textAlign:'center',
                            fontSize:20,
                            color:'black'
                        }}>
                            Your Grounds
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            height: 300,
                            elevation: 2,
                            backgroundColor: "#FFF",
                            marginLeft: 20,
                            marginTop: 20,
                            borderRadius: 15,
                            marginBottom: 10,
                            width: 160,
                        }}>
                            <Text style={{
                            textAlign:'center',
                            fontSize:20,
                            color:'black'
                        }}>
                            Live Score
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>

    )
}

export default Home