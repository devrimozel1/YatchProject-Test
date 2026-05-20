import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Logo2 from "../logos/TEINYACHT.png"
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../ReduxToolkit/registerSlice'

const { height } = Dimensions.get('window');


const GeneralView = styled.SafeAreaView({
    flex: 1,
    alignItems: "center",
})

const HomeImageView = styled.View({
    width: "80%",
    alignItems: "center",
})

const ImageView2 = styled.Image({
    width: "80%",
    resizeMode: "contain",
})

const RegisterTypeView = styled.View({
    width: "90%",
    gap: 10,
    marginVertical: 15
})

const RadioButtonView = styled.View({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
})

const RadioButtons = styled.TouchableOpacity<{ isClicked?: boolean }>`
    width: 18px;
    height: 18px;
    border-radius: 10px;
    border: 2px solid #1366B2;
    background-color: ${props => (props.isClicked ? "#1366B2" : "transparent")};
    justify-content: center; 
    align-items: center;
`;

const RegisterInputView = styled.View({
    width: "90%",
    gap: 5,
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

const RegisterKVKK = styled.View({
    width: "90%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
})

const HomeButton = styled.TouchableOpacity({
    width: "90%",
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1366B2",
    marginTop: 20
})

const ModalContainer = styled.View({
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    maxHeight: height * 0.8,
})

const CloseButton = styled.TouchableOpacity({
    alignSelf: 'flex-end',
    padding: 5
})

const AcceptButton = styled.TouchableOpacity({
    backgroundColor: '#1366B2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15
})

function RegisterScreen() {
    const dispatch = useDispatch();

    const navigation = useNavigation()
    const [isClicked, setIsClicked] = useState(true)
    const [isclicked2, setIsClicked2] = useState(false)
    const [isclicked3, setIsClicked3] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [taxNumber, setTaxNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleAcceptKVKK = () => {
        setIsClicked2(true);
        toggleModal();
    }

    const handleRegister = () => {
        if (!isclicked2) {
            Alert.alert("Hata", "Lütfen aydınlatma metnini onaylayın.");
            return;

        }

        const formData = {
            role: isClicked ? 'Müşteri' : 'Acente',
            firstName: isClicked ? firstName : undefined,
            lastName: isClicked ? lastName : undefined,
            companyName: !isClicked ? companyName : undefined,
            taxNumber: !isClicked ? taxNumber : undefined,
            phone: phone,
            email: email,
            password: password,
            marketingAccepted: isclicked3,
        };

        const finalDataArray = [formData];

        Alert.alert("Başarılı", isClicked ? "Müşteri Kaydı Alındı" : "Acente Kaydı Alındı");
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" as never }],
        })

        dispatch(register(formData));
    }

    return (
        <GeneralView>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
                <HomeImageView>
                    <ImageView2 source={Logo2} />
                </HomeImageView>

                <RegisterTypeView>
                    <Text style={{ fontSize: 16, color: "#1366B2", fontWeight: '600' }}>Kayıt Tipi</Text>
                    <RadioButtonView>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <RadioButtons isClicked={isClicked} onPress={() => setIsClicked(true)} />
                            <Text>Müşteri</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <RadioButtons isClicked={!isClicked} onPress={() => setIsClicked(false)} />
                            <Text>Acente</Text>
                        </View>
                    </RadioButtonView>
                </RegisterTypeView>

                <RegisterInputView>
                    {isClicked ? (
                        <>
                            <Text style={{ color: "#1366B2" }}>İsim</Text>
                            <Input placeholder='İsim' value={firstName} onChangeText={setFirstName} />
                            <Text style={{ color: "#1366B2" }}>Soyisim</Text>
                            <Input placeholder='Soyisim' value={lastName} onChangeText={setLastName} />
                        </>
                    ) : (
                        <>
                            <Text style={{ color: "#1366B2" }}>Şirket İsmi</Text>
                            <Input placeholder='Şirket İsmi' value={companyName} onChangeText={setCompanyName} />
                            <Text style={{ color: "#1366B2" }}>Vergi Numarası</Text>
                            <Input placeholder='Vergi Numarası' keyboardType="numeric" value={taxNumber} onChangeText={setTaxNumber} />
                        </>
                    )}

                    <Text style={{ color: "#1366B2" }}>Telefon Numarası</Text>
                    <Input placeholder='🇹🇷 +90' keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
                    <Text style={{ color: "#1366B2" }}>{isClicked ? "E-mail" : "Şirket E-mail"}</Text>
                    <Input placeholder='Email' keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
                    <Text style={{ color: "#1366B2" }}>Şifre</Text>
                    <Input placeholder='Şifre' secureTextEntry value={password} onChangeText={setPassword} />
                </RegisterInputView>

                <RegisterKVKK>
                    <RadioButtons isClicked={isclicked2} onPress={() => setIsClicked2(!isclicked2)} style={{ marginTop: 3, marginRight: 10 }} />
                    <Text style={{ flex: 1, fontSize: 13 }}>
                        Kişisel verilerimin işlenmesine yönelik{' '}
                        <Text onPress={toggleModal} style={{ color: '#1366B2', textDecorationLine: 'underline' }}>aydınlatma metnini</Text> ve{' '}
                        <Text onPress={toggleModal} style={{ color: '#1366B2', textDecorationLine: 'underline' }}>kullanım şartlarını</Text> okudum ve anladım.
                    </Text>
                </RegisterKVKK>

                <RegisterKVKK>
                    <RadioButtons isClicked={isclicked3} onPress={() => setIsClicked3(!isclicked3)} style={{ marginTop: 3, marginRight: 10 }} />
                    <Text style={{ flex: 1, fontSize: 13 }}>Teinyacth’tan reklam ve kampanya içerikli iletiler ve haberler almayı kabul ediyorum.</Text>
                </RegisterKVKK>

                <HomeButton onPress={handleRegister}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Kayıt Ol</Text>
                </HomeButton>

                <View style={{ marginVertical: 20, flexDirection: "row" }}>
                    <Text>Hesabınız var mı? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home" as never)}><Text style={{ color: "#1366B2", fontWeight: "bold" }}>Giriş Yap</Text></TouchableOpacity>
                </View>
            </ScrollView>

            <Modal isVisible={isModalOpen} onBackdropPress={toggleModal} backdropOpacity={0.5}>
                <ModalContainer>
                    <CloseButton onPress={toggleModal}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>✕</Text>
                    </CloseButton>
                    <Text style={{ fontWeight: 'bold', marginBottom: 15, textAlign: 'center' }}>
                        KİŞİSEL VERİLERİN KORUNMASI KANUNU AYDINLATMA METNİ
                    </Text>
                    <ScrollView showsVerticalScrollIndicator={true}>
                        <Text style={{ lineHeight: 20, color: '#444' }}>
                            Buraya KVKK metninizin tamamını ekleyebilirsiniz... {"\n\n"}
                            1. Veri Sorumlusu... {"\n"}
                            2. Kişisel Verilerin İşlenme Amacı... {"\n"}
                        </Text>
                    </ScrollView>
                    <AcceptButton onPress={handleAcceptKVKK}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Kabul Ediyorum</Text>
                    </AcceptButton>
                </ModalContainer>
            </Modal>
        </GeneralView>
    )
}

export default RegisterScreen;