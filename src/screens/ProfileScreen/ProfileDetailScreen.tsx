import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import styled from 'styled-components/native'

function ProfileDetailScreen() {
    const navigation = useNavigation()

    const GeneralView = styled.SafeAreaView({
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    })
    const Header = styled.View({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        borderRadius: "10px",
        marginTop: 10,
        marginBottom: 20,
    });

    const BackButton = styled.TouchableOpacity({
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        padding: "10px",
        width: "10%",
        position: "absolute",
        left: "5"
    });
    const HeaderTitle = styled.Text({
        fontSize: "24px",
        fontWeight: "400",
        color: "black",
        fontFamily: "urbanist",
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px"
    });

    const ProfilePhotoView = styled.View({
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
        borderRadius: "10px",
        marginBottom: 20,
    })

    const ImageView = styled.Image({
        width: "100%",
        resizeMode: "contain",
    })

    const ChangeButton = styled.TouchableOpacity({
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        marginTop: "10px"
    })

    const RegisterInputView = styled.ScrollView({
        width: "90%",
    })
    const Input = styled.TextInput({
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderColor: "#1366B2",
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 10
    })
    const SaveButton = styled.TouchableOpacity({
        width: "90%",
        height: 45,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1366B2",
        marginTop: 10,
        marginBottom: 50,
    })
    

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleSave = () => {
        Alert.alert("Değişiklikler Kaydedildi")
        navigation.goBack();
    };


    return (
        <GeneralView>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%', alignItems: 'center' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Header>
                    <BackButton onPress={handleGoBack}>
                        <ImageView source={require("../../logos/BackButtonIcon.png")} />
                    </BackButton>
                    <HeaderTitle>Kişisel Bilgilerim</HeaderTitle>
                </Header>

                <RegisterInputView showsVerticalScrollIndicator={false}>
                    <ProfilePhotoView>
                        <ImageView source={require("../../logos/Rectangle.png")}></ImageView>
                        <ChangeButton>
                            <Text style={{ fontSize: 14, color: "#1366B2", fontWeight: 'bold', textAlign: "center" }}>Profil Fotoğrafınızı Değiştirin</Text>
                        </ChangeButton>
                    </ProfilePhotoView>

                    <Text style={{ color: "#1366B2", marginBottom: 5 }}>İsim</Text>
                    <Input placeholder='İsim' />

                    <Text style={{ color: "#1366B2", marginBottom: 5 }}>Soyisim</Text>
                    <Input placeholder='Soyisim' />

                    <Text style={{ color: "#1366B2", marginBottom: 5 }}>Telefon Numarası</Text>
                    <Input placeholder='🇹🇷 +90' keyboardType="phone-pad" />

                    <Text style={{ color: "#1366B2", marginBottom: 5 }}>E-mail</Text>
                    <Input placeholder='Email' keyboardType="email-address" autoCapitalize="none" />

                    <Text style={{ color: "#1366B2", marginBottom: 5 }}>Doğum Tarihi</Text>
                    <Input placeholder="gg/aa/yyyy" keyboardType="numeric" />
                </RegisterInputView>

                <SaveButton onPress={handleSave}>
                    <Text style={{ color: "white", fontWeight: "bold",fontSize:18 }}>Kaydet</Text>
                </SaveButton>
            </KeyboardAvoidingView>
        </GeneralView>
    )
}

export default ProfileDetailScreen