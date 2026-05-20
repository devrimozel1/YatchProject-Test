import React, { useEffect } from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import Logo1 from "../logos/YacthIcon.png"
import Logo2 from "../logos/TEINYACHT.png"
import apple from "../logos/apple.png"
import google from "../logos/google.png"

function HomeScreen() {
    const navigation = useNavigation()
    const data = useSelector((state: any) => state.register.users);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    console.log("Kayıtlı Kullanıcılar: ", data);

    const handleLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
            Alert.alert("Uyarı", "Lütfen e-mail ve şifre alanlarını doldurun.");
            return;
        }

        const user = data.find((user: any) => user.email === email && user.password === password);

        if (user) {
            navigation.reset({
                index: 0,
                routes: [{ name: "Main" as never }],
            })
        } else {
            Alert.alert("Giriş Başarısız", "E-mail veya şifre yanlış.");
        }
    }

    const handleRegister = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Register" as never }],
        })
    }

    const handleForgotPassword = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "ForgotPassword" as never }],
        })
    }

    const handleFacebookLogin = () => {
        Alert.alert("Facebook ile Giriş Yapıldı")
    }

    const handleAppleLogin = () => {
        Alert.alert("Apple ile Giriş Yapıldı")
    }

    const handleGoogleLogin = () => {
        Alert.alert("Google ile Giriş Yapıldı")
    }

    return (
        <GeneralView>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
                <HomeImageView>
                    <ImageView source={Logo1} />
                    <ImageView2 source={Logo2} />
                </HomeImageView>

                <HomeInputView>
                    <Text style={{ color: "#1366B2", fontWeight: "bold" }}>E-mail</Text>
                    <Input
                        placeholder="E-mail"
                        placeholderTextColor="#1366B2"
                        onChangeText={setEmail}
                        value={email}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <Text style={{ color: "#1366B2", fontWeight: "bold" }}>Şifre</Text>
                    <PasswordText
                        secureTextEntry={true}
                        placeholder="Şifre"
                        placeholderTextColor="#1366B2"
                        onChangeText={setPassword}
                        value={password}
                        autoCapitalize="none"
                    />

                    <View style={{ alignItems: "flex-end", marginRight: 5 }}>
                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={{ color: "#1366B2", fontWeight: 'bold' }}>Şifrenizi mi unuttunuz ?</Text>
                        </TouchableOpacity>
                    </View>
                </HomeInputView>

                <HomeTouchableView>
                    <HomeButton onPress={handleLogin}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Giriş Yap</Text>
                    </HomeButton>
                    <View style={{ height: 20, alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                        <Text>Hesabınız yok mu ? </Text>
                        <TouchableOpacity onPress={handleRegister}>
                            <Text style={{ color: "#1366B2", fontWeight: "bold" }}>Hesap Oluşturun!</Text>
                        </TouchableOpacity>
                    </View>
                </HomeTouchableView>

                <SocialMediaBox>
                    <SocialMediaButton onPress={handleAppleLogin}>
                        <Image source={apple} style={{ width: "50%", height: "100%", resizeMode: "contain" }} />
                    </SocialMediaButton>
                    <SocialMediaButton onPress={handleGoogleLogin}>
                        <Image source={google} style={{ width: "50%", height: "100%", resizeMode: "contain" }} />
                    </SocialMediaButton>
                </SocialMediaBox>
            </ScrollView>
        </GeneralView >
    )
}


const GeneralView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;


const HomeImageView = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 30px;

`;

const ImageView = styled.Image`
    width: 200px;
    height: 200px;
    resize-mode: contain; 
`;

const ImageView2 = styled.Image`
    width: 300px;
    height: 45px;
    resize-mode: contain;
    margin-top: 10px; /* İki logo arasındaki boşluk */
`;

const HomeInputView = styled.View`
    width: 350px;
    height: 220px;
    gap: 10px;
`;

const Input = styled.TextInput`
    width: 350px;
    height: 50px;
    border-width: 1px;
    border-color: #1366B2;
    border-style: solid;
    border-radius: 10px;
    text-align: left;
    padding-left: 10px;
    color: #000;
`;

const PasswordText = styled.TextInput`
    width: 350px;
    height: 50px;
    border-width: 1px;
    border-color: #1366B2;
    border-style: solid;
    border-radius: 10px;
    text-align: left;
    padding-left: 10px;
    color: #000;
`;

const HomeTouchableView = styled.View`
    width: 350px;
    height: 100px;
    margin-top: 30px;
`;

const HomeButton = styled.TouchableOpacity`
    width: 350px;
    height: 45px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    background-color: #1366B2;
`;

const SocialMediaBox = styled.View`
    width: 350px;
    height: 100px;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: row;
    margin-top: -20px;
`;

const SocialMediaButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-width: 1px;
    border-color: #1366B2;
    border-style: solid;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export default HomeScreen;