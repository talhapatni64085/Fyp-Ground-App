import { View, Text, useWindowDimensions, Image, TextInput, Button, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dimensions } from "react-native"
import Logo from '../../assets/images/logo_1.png'
import CustomButton from '../components/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { lg } = useWindowDimensions();

    const { width, height } = Dimensions.get("window");

    const onSignInPressed = () => {
        if (username == 'talha' && password == '123') {
            Alert.alert('Login Successfully');
            props.navigation.navigate(Home)
        }
        else {
            Alert.alert('Username & Password does not match');
        }
    };

    const onForgotPasswordPressed = () => {
        props.navigation.navigate(ForgotPassword)
    };

    const onGoogle = () => {
        console.warn('Google');
    };

    const onSignUpPressed = () => {
        props.navigation.navigate(SignUp)
    };

// const handleLogIn = () => {
//     auth
//     .signInWithEmailAndPassword(email,password)
//     .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log('Logged In With:',user.email);
//     })
//     .catch(error => alert(error.message))
// }

// useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//         if (user) {
//             props.navigation.navigate('Home')
//         }
//     })
//     return unsubscribe
// }, [])
    
    return (
        <ScrollView vertical
        showsVerticalScrollIndicator={false}>
        <View style={{
            height: height,
            width: width,
            backgroundColor: "lightgray",
            flex: 1,
        }}>

            <View style={{
                alignItems: 'center',
                marginTop: '15%'
            }}>
                <Text style={{
                    color: 'black',
                    fontSize: 28,
                    fontWeight: 'bold'
                }}>
                    Welcome Back For SignIn
                </Text>
            </View>
            <View style={{
                alignItems: 'center',
                marginTop: '5%'
            }}>
                <Image
                    source={Logo}
                    resizeMode="contain"
                    style={{
                        height: height * 0.3
                    }}
                />
            </View>
            <View style={{
                alignItems: 'center',
                padding: 20,

            }}>
                <TextInput
                    placeholder='Enter Email'
                    value={email}
                    onChangeText={setEmail}
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
                    placeholder='Enter Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
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
                <CustomButton
                    text="Sign In"
                    onPress={onSignInPressed}
                    bgColor='#E7EAF4'
                    fgColor='#4765A9'
                />
                <CustomButton
                    text="forgot password?"
                    onPress={onForgotPasswordPressed}
                    fgColor='black'
                    type="TERTIARY"
                />

                <CustomButton
                    text="Sign In with Google"
                    onPress={onGoogle}
                    bgColor='#FAE9EA'
                    fgColor='#DD4D44'
                />

                <CustomButton
                    text="Not Registered yet? Create One"
                    onPress={onSignUpPressed}
                    fgColor='black'
                    type="TERTIARY"
                />
            </View>
        </View>
        </ScrollView>
    )
}

export default SignIn 