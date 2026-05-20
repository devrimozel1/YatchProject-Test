import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Text, View } from 'react-native'
import styled from 'styled-components/native'

function PasswordResetNumber() {

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
    justifyContent: "center",
    padding: "10px",
    borderRadius: "10px"
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
  const TurnbackButton2 = styled.TouchableOpacity({
    width: "90%",
    height: "40px",
    textAlign: "center",
    border: "1px solid #1366B2",
    backgroundColor: "#1366B2",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
  })

  const ForgotMailBox = styled.View({
    width: "90%",
    height: "100px",
    alignItems: "left",
    justifyContent: "center",
    marginTop: "80px",
    gap: "5px",
  })



  const ForgotMailInput = styled.TextInput({
    width: "100%",
    height: "50px",
    border: "1px solid #1366B2",
    borderRadius: "10px",
    padding: "10px",
  })

  const handleTurnBack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "ForgotPassword" as never }]
    })
  }

  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "ResetPhoneSecond" as never }]
    })
  }

  return (
    <GeneralView>
      <ForgotPasswordScreenInfoView>
        <Text style={{ color: "#1366B2", fontSize: 25, fontWeight: "400", fontFamily: "urbanist" }}>Şifre Yenileme</Text>
      </ForgotPasswordScreenInfoView>

      <ForgotPasswordTextView>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "400", fontFamily: "urbanist", textAlign: "center" }}>Şifre yenileme bağlantısını gönderebilmemiz için telefon numaranıza ihtiyacımız var.</Text>
      </ForgotPasswordTextView>
      <ForgotMailBox>
        <Text style={{ color: "#1366B2", fontSize: 15, fontWeight: "400", fontFamily: "urbanist", textAlign: "left" }}>Telefon Numaranız</Text>
        <ForgotMailInput placeholder='Telefon Numaranızı Giriniz' keyboardType='email-address' />
      </ForgotMailBox>




      <TurnbackButton onPress={handleContinue}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", fontFamily: "urbanist" }}>Devam Et</Text>
      </TurnbackButton>
      <TurnbackButton2 onPress={handleTurnBack}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", fontFamily: "urbanist" }}>Önceki Sayfaya Dön</Text>
      </TurnbackButton2>

    </GeneralView>
  )
}

export default PasswordResetNumber