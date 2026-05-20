import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, Modal, View, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import BackButtonIcon from "../../logos/BackButtonIcon.png";

function SecurityDetailScreen() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const GeneralView = styled.SafeAreaView({
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    });
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
        left: 5
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

    const TextView = styled.View({
        width: "90%",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "50px"
    });
    const TextView2 = styled.View({
        width: "90%",
        alignItems: "flex-start",
        justifyContent: "center",
    });
    const RegisterInputView = styled.View({
        width: "90%",
        gap: 5,
        marginTop: 20,
    });

    const Input = styled.TextInput({
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderColor: "#1366B2",
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 10
    });

    const ImageView = styled.Image({
        width: "100%",
        resizeMode: "contain",
    });

    const WarningBox = styled.View({
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        padding: "10px",
    });

    const HomeButton = styled.TouchableOpacity({
        width: "70%",
        height: 45,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1366B2",
        marginTop: 20,
        marginBottom: 50,
    });

    const DeleteButton = styled.TouchableOpacity({
        width: "70%",
        height: 45,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DD0808",
        marginTop: 30,
    });

    const ModalOverlay = styled.View({
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
    });

    const ModalContainer = styled.View({
        width: "80%",
        backgroundColor: "white",
        padding: 25,
        alignItems: "center",
        position: "relative",
        borderRadius: 10,
    });

    const CloseButton = styled.TouchableOpacity({
        position: "absolute",
        top: 10,
        right: 15,
        padding: 5,
    });

    const WarningIconCircle = styled.View({
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#1366B2",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 10,
    });

    const ModalText = styled.Text({
        fontSize: 15,
        textAlign: "center",
        color: "black",
        marginBottom: 20,
        lineHeight: 22,
    });

    const ModalConfirmDeleteButton = styled.TouchableOpacity({
        width: "100%",
        height: 45,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DD0808",
    });
    

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleConfirmDelete = () => {
        setModalVisible(false);
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" as never }],
        });
    };


    const handleSave = () => {
        Alert.alert("Değişiklikler Kaydedildi");
        navigation.goBack();

    };


     


    return (
        <GeneralView>
            <KeyboardAvoidingView
                style={{ flex: 1, width: '100%', alignItems: 'center' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <Header>
                    <BackButton onPress={handleGoBack}>
                        <ImageView source={BackButtonIcon} />
                    </BackButton>
                    <HeaderTitle>Güvenlik</HeaderTitle>
                </Header>

                <TextView>
                    <Text style={{ color: "#1366B2", fontWeight: "400", fontSize: 20, }}>Şifre Değiştir</Text>
                </TextView>
                <TextView2>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 15, }}>Şifreniz en az bir harf, rakam veya özel karakter içermelidir. Ayrıca şifreniz en az 8 karakterden oluşmalıdır.</Text>
                </TextView2>

                <RegisterInputView>
                    <Text style={{ color: "#1366B2", fontWeight: "400", fontSize: 15, }}>Mevcut Şifreniz</Text>
                    <Input placeholder='Mevcut Şifre' secureTextEntry />
                    <Text style={{ color: "#1366B2", fontWeight: "400", fontSize: 15, }}>Yeni Şifreniz</Text>
                    <Input placeholder='Yeni Şifreniz' secureTextEntry />
                </RegisterInputView>

                <WarningBox>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 12, textAlign: "center" }}>⚠ Güvenliğiniz için adınız, soyadınız, doğum tarihinizi içermeyen bir şifre belirlemenizi öneririz.</Text>
                </WarningBox>

                <HomeButton onPress={handleSave}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Kaydet</Text>
                </HomeButton>

                <TextView>
                    <Text style={{ color: "#1366B2", fontWeight: "400", fontSize: 20 }}>Hesabı Sil</Text>
                </TextView>
                <TextView2>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 15, }}>Hesabı silerseniz aktif rezervasyonlarınız iptal olmayacaktır ancak kayıtlı tüm teklifleriniz, taşıtlarınız ve fiyatlandırmalarınız silinecektir.</Text>
                </TextView2>

                <DeleteButton onPress={() => setModalVisible(true)}>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Hesabı Sil</Text>
                </DeleteButton>

                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ModalOverlay>
                        <ModalContainer>
                            <CloseButton onPress={() => setModalVisible(false)}>
                                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>✕</Text>
                            </CloseButton>

                            <WarningIconCircle>
                                <Text style={{ color: "#1366B2", fontSize: 24, fontWeight: "bold" }}>!</Text>
                            </WarningIconCircle>

                            <ModalText>
                                Bu işlem tüm verilerini kalıcı olarak silecek ve geri alınamaz. Emin misin?
                            </ModalText>

                            <ModalConfirmDeleteButton onPress={handleConfirmDelete}>
                                <Text style={{ color: "white", fontWeight: "500", fontSize: 16 }}>Hesabı Sil</Text>
                            </ModalConfirmDeleteButton>
                        </ModalContainer>
                    </ModalOverlay>
                </Modal>

            </KeyboardAvoidingView>
        </GeneralView>
    );
}

export default SecurityDetailScreen;