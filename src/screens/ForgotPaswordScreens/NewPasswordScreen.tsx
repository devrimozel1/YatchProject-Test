import React, { useState } from 'react';
import { Text, Modal } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const GeneralView = styled.SafeAreaView({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

const TitleView = styled.View({
  width: "90%",
  height: 35,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 50,
});

const Title2View = styled.View({
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  padding: 10,
  borderRadius: 10
});

const NewPasswordView = styled.View({
  width: "90%",
  alignItems: "flex-start",
  justifyContent: "center",
  marginTop: 80,
  gap: 10,
});

const NewPasswordInput = styled.TextInput({
  width: "100%",
  height: 50,
  textAlign: "left",
  paddingLeft: 10,
  borderWidth: 1, 
  borderColor: "#1366B2",
  borderRadius: 10,
});

const PasswordConfirmButton = styled.TouchableOpacity({
  width: "90%",
  height: 40,
  backgroundColor: "#1366B2",
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 80
});

const ModalOverlay = styled.View({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const ModalContent = styled.View({
  width: "80%",
  backgroundColor: "white",
  padding: 20,
  borderRadius: 10,
  alignItems: "center",
  gap: 20,
});

const ModalButton = styled.TouchableOpacity({
  width: "100%",
  height: 40,
  backgroundColor: "#1366B2",
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "center",
});

function NewPasswordScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleLoginNavigate = () => {
    setModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" as never }],
    });
  };

  return (
    <GeneralView>
      <TitleView>
        <Text style={{ color: "#1366B2", fontSize: 30, fontWeight: "400", fontFamily: "montserrat", textAlign: "center" }}>
          Yeni Şifrenizi Belirleyin
        </Text>
      </TitleView>
      
      <Title2View>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "montserrat", textAlign: "center" }}>
          Şifrenizi Minimum 6 karakter
        </Text>
        <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "montserrat", textAlign: "center" }}>
          1 rakam ve 1 harf olacak şekilde belirleyiniz.
        </Text>
      </Title2View>
      
      <NewPasswordView>
        <Text style={{ color: "#1366B2", fontSize: 15, fontWeight: "400", fontFamily: "urbanist" }}>Yeni Şifreniz</Text>
        <NewPasswordInput placeholder='Yeni Şifre' secureTextEntry={true} />
        
        <Text style={{ color: "#1366B2", fontSize: 15, fontWeight: "400", fontFamily: "urbanist" }}>Şifreyi Tekrarla</Text>
        <NewPasswordInput placeholder='Yeni Şifre Tekrar' secureTextEntry={true} />
      </NewPasswordView>
      
      <PasswordConfirmButton onPress={() => setModalVisible(true)}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", fontFamily: "urbanist" }}>Şifremi Yenile</Text>  
      </PasswordConfirmButton>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalOverlay>
          <ModalContent>
            <Text>✅</Text>
            <Text style={{ color: "#1366B2", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Şifreniz Yenilendi!</Text>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "medium", textAlign: "center" }}>
              Yeni Şifreniz ile Giriş Yapabilirsiniz
            </Text>
            <ModalButton onPress={handleLoginNavigate}>
              <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>Giriş Yap</Text>
            </ModalButton>
          </ModalContent>
        </ModalOverlay>
      </Modal>

    </GeneralView>
  );
}

export default NewPasswordScreen;
