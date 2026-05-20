import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

function ForgotPassword() {

    const navigation = useNavigation()

    const GeneralView = styled.SafeAreaView({
        alignItems: "center",
        gap: "20",
        justifyContent: "center",
    })

    const ForgotPasswordScreenInfoView = styled.View({
        width: "90%",
        height: "35px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "185px"
    })

    const ForgotPasswordTextView = styled.View({
        width: "90%",
        alignItems: "center",
        justifyContent:"center",
        padding: "10px",
        borderRadius: "10px"
    })

    const SelectMailReset = styled.TouchableOpacity({
        width: "90%",
        height: "60px",
        textAlign: "center",
        border: "1px solid #1366B2",
        borderRadius: "10px",
        alignItems: "start",
        justifyContent: "center",
        marginTop: "80px"
    })

    const SelectNumberReset = styled.TouchableOpacity({
        width: "90%",
        height: "60px",
        textAlign: "center",
        border: "1px solid #1366B2",
        borderRadius: "10px",
        alignItems: "start",
        justifyContent: "center",
    })

    const TurnbackButton = styled.TouchableOpacity({
        width: "90%",
        height: "40px",
        textAlign: "center",
        border: "1px solid #1366B2",
        backgroundColor: "#1366B2",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "80px"
    })

    const handleTurnBack = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" as never }],
        })
    }

    const handleMailReset = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "PasswordResetMail" as never }],
        })
    }

    const handleNumberReset = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "PasswordResetNumber" as never }],
        })
    }

    return (
        <GeneralView>
            <ForgotPasswordScreenInfoView>
                <Text style={{ color: "#1366B2", fontSize: 25, fontWeight: "400", fontFamily: "urbanist" }}>Şifrenizi mi Unuttunuz ?</Text>
            </ForgotPasswordScreenInfoView>

            <ForgotPasswordTextView>
                <Text style={{ color: "black", fontSize: 15, fontWeight: "400", fontFamily: "urbanist", textAlign: "center" }}>Endişe etmeyin, şifrenizi değiştirmenize yardımcı olacağız.</Text>
            </ForgotPasswordTextView>

            <SelectMailReset onPress={handleMailReset}>
                <Text style={{ color: "#1366B2", fontSize: 15, fontWeight: "400", fontFamily: "urbanist" }}> 📩 E-posta ile sıfırla</Text>
            </SelectMailReset>

            <SelectNumberReset onPress={handleNumberReset}>
                <Text style={{ color: "#1366B2", fontSize: 15, fontWeight: "400", fontFamily: "urbanist" }}> 📞 Telefon numarası ile sıfırla</Text>
            </SelectNumberReset>

            <TurnbackButton onPress={handleTurnBack}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", fontFamily: "urbanist" }}>Giriş Sayfasına Dön</Text>
            </TurnbackButton>

        </GeneralView>

    )
}

export default ForgotPassword