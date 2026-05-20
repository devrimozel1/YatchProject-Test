import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import MaılImage from "../../logos/Forgotmail.png"
import { useNavigation } from '@react-navigation/native'

function PasswordResetMailSecondScreen() {

    const navigation = useNavigation()

    const GeneralView = styled.SafeAreaView({
        alignItems: "center",
        gap: "20",
        justifyContent: "center",
    })

    const MailImageView = styled.View({
        width: "230px",
        height: "205px",
        marginTop: "150px",
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
    })

    const Image = styled.Image({
        width: "90%",
        height: "90%",
    })

    const TextView = styled.View({
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "10px"
    })

    const OtpBarView = styled.View({
        width: "90%",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        borderRadius: "10px",
        flexDirection: "row",
        gap: "10px",
    })

    const OtpBarBox = styled.TouchableOpacity({
        width: "15%",
        height: "100%",
        border: "1px solid #1366B2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
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
        marginTop: "50px"
    })
    const TurnbackButton2 = styled.TouchableOpacity({
        width: "90%",
        height: "40px",
        textAlign: "center",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
    })

    const handleContinue = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "NewPassword" as never }]
        })
    }






    return ( 
        <GeneralView>
            <MailImageView>
                <Image source={MaılImage} />
            </MailImageView>
            <TextView>
                <Text style={{ fontSize: 15, fontWeight: "medium", color: "#000", alignItems: "center", justifyContent: "center", textAlign: "center" }}>Lütfen mailinize(****@gmail.com) gelen doğrulama kodunu aşağıdaki alana giriniz.</Text>
            </TextView>
            <OtpBarView>
                <OtpBarBox></OtpBarBox>
                <OtpBarBox></OtpBarBox>
                <OtpBarBox></OtpBarBox>
                <OtpBarBox></OtpBarBox>
                <OtpBarBox></OtpBarBox>
            </OtpBarView>

            <TurnbackButton onPress={handleContinue}>
                <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>Kodu Gönder</Text>
            </TurnbackButton>
            <TurnbackButton2>
                <Text style={{ color: "#1366B2", fontSize: 15, fontWeight: "medium" }}>Kodu Tekrar Gönder</Text>
            </TurnbackButton2>

          


        </GeneralView>


    )
}

export default PasswordResetMailSecondScreen