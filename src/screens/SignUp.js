import { View, Text, useWindowDimensions, Image, TextInput, Alert} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Dimensions } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
import Logo from '../../assets/images/logo_1.png'
import CustomButton from '../components/CustomButton'

const SignUp = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();

    const { wt, ht } = Dimensions.get("window");

    const onGoogle = () => {
        console.warn('Google');
    };
    const onCreatePressed = () => {
        
            props.navigation.navigate(SignIn)
        
    };

    const onSignUpPressed = () => {
        props.navigation.navigate(Home)
    };
    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    };

// const handleSignUp=()=>{
//     auth
//     .createUserWithEmailAndPassword(email,password)
//     .then(userCredentials => {
//         const user = userCredentials.user;
//         console.log('Register With:',user.email);
//     })
//     .catch(error => alert(error.message))
// }

    return (
        <ScrollView vertical
        showsVerticalScrollIndicator={false}>
        <View style={{
            height: ht,
            width: wt,
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
                    Welcome For SignUp
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
                <TextInput
                    placeholder='Enter Confirm Password'
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
                    text="Register"
                    onPress={onSignUpPressed}
                    bgColor='#E7EAF4'
                    fgColor='#4765A9'
                />

                <Text>By Registering, you confirm that you accept our {''}
                    <Text style={{ color: 'blue' }} onPress={onTermsOfUsePressed}>Terms of Use</Text> and {''}
                    <Text style={{ color: 'blue' }} onPress={onPrivacyPolicyPressed}>Privacy Policy.</Text>
                </Text>

                <CustomButton
                    text="Sign Up with Google"
                    onPress={onGoogle}
                    bgColor="#FAE9EA"
                    fgColor='#DD4D44'
                />

                <CustomButton
                    text="Have an account?"
                    onPress={onCreatePressed}
                    fgColor='black'
                    type="TERTIARY"
                />
            </View>
        </View>

        </ScrollView>
    )
}

export default SignUp