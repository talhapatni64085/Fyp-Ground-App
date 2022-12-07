import { View, Text, SafeAreaView, ScrollView, TextInput} from 'react-native'
import React from 'react'
import { Dimensions } from "react-native";
import { useState } from 'react'

const RegGround = () => {

    const { width, height } = Dimensions.get("window");
    const [location, setLocation] = useState('');
    const [payment, setPayment] = useState('');
    const [description, setDescription] = useState('');

  return (
    <ScrollView>
    <SafeAreaView style={{
        height: height,
        width: width,
        backgroundColor: "lightgray",
        flex: 1,
    }}>
        
            <View style={{
                        backgroundColor: "black",
                        height: "18%",
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingHorizontal: 20,
                        //borderTopLeftRadius: 50,
                        //borderTopRightRadius: 50
                    }}>
<View style={{
                        width: "100%",
                        marginTop: '25%'
                    }}>
                        <Text style={{
                            fontSize: 28,
                            color: "#FFF",
                            fontWeight: "bold",
                            textAlign: 'center',
                        }}>Register Your Ground</Text>
                    </View>
            </View>
            <View style={{
                    width: "100%",
                    height: "30%",
                    marginTop: "3%",
                    backgroundColor: 'black',
                }}>
                </View>
                <View style={{
                alignItems: 'center',
                padding: 20,

            }}>
                <TextInput
                    placeholder='Enter Location'
                    value={location}
                    onChangeText={setLocation}
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        borderColor: '#e8e8e8',
                        borderWidth: 6,
                        borderRadius: 8,
                        paddingHorizontal: 20,
                        marginVertical: 12,

                    }}
                />
                <TextInput
                    placeholder='Enter Payment'
                    value={payment}
                    onChangeText={setPayment}
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        borderColor: '#e8e8e8',
                        borderWidth: 6,
                        borderRadius: 8,
                        paddingHorizontal: 20,
                        marginVertical: 12,

                    }}
                />
                <TextInput
                    placeholder='Enter Description'
                    value={description}
                    onChangeText={setDescription}
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        borderColor: '#e8e8e8',
                        borderWidth: 6,
                        borderRadius: 8,
                        paddingHorizontal: 20,
                        marginVertical: 12,
                        height:"40%",
                    }}
                />
                </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default RegGround