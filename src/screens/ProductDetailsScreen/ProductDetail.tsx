import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import styled from 'styled-components/native';
import TekneImage from "../../logos/tein_tekne 1.png"; // Kendi yoluna göre ayarla
import BackButtonIcon from "../../logos/BackButtonIcon.png"


const Container = styled.SafeAreaView({
    flex: 1, backgroundColor: "white"
});

const Header = styled.View({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    borderRadius: "10px",
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

const Content = styled.View({
    padding: "20px", alignItems: "center"
});

const ImageContainer = styled.View({
    alignItems: "center", justifyContent: "center", marginTop: "10px", marginBottom: "20px", shadowColor: "rgba(0, 0, 0, 0.1)", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: "8px"
});

const CircleImage = styled.Image({
    width: "140px", height: "140px", borderRadius: "70px", borderWidth: "1px", borderColor: "rgba(0, 0, 0, 0.1)"
});

const StatusTextContainer = styled.View({
    width: "90%", alignItems: "center"
});

const StatusText = styled.Text({
    fontSize: "14px", color: "#555", textAlign: "center", lineHeight: "20px", fontFamily: "urbanist"
});

const DetailCard = styled.View({
    width: "95%", backgroundColor: "#f8f9fa", borderRadius: "20px", padding: "20px", marginBottom: "25px", shadowColor: "rgba(0, 0, 0, 0.05)", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: "4px"
});

const DateTimeRow = styled.View({
    flexDirection: "row", justifyContent: "space-around", width: "100%", marginBottom: "20px"
});

const DateTimeColumn = styled.View({
    alignItems: "center", width: "45%"
});

const DateTimeTitle = styled.Text({
    fontSize: "12px", color: "#777", textAlign: "center", fontWeight: "500", fontFamily: "urbanist"
});

const DateTimeValues = styled.View({
    width: "100%", alignItems: "center", paddingTop: "8px"
});

const DateTimeText = styled.Text({
    fontSize: "16px", color: "black", fontWeight: "600", textAlign: "center", fontFamily: "urbanist"
});

const DetailItem = styled.View({
    flexDirection: "row", alignItems: "center", width: "100%"
});

const IconPlaceholder = styled.View({
    width: "30px", alignItems: "center", justifyContent: "center"
});

const DetailText = styled.Text({
    fontSize: "16px", color: "black", marginLeft: "10px", fontFamily: "urbanist"
});

const ExtraServiceButton = styled.TouchableOpacity({
    width: "90%", backgroundColor: "#A4BFE0", borderRadius: "12px", height: "50px", justifyContent: "center", alignItems: "center", marginBottom: "25px"
});

const ExtraServiceText = styled.Text({
    fontSize: "16px", color: "#1366B2", fontWeight: "700", fontFamily: "urbanist"
});

const PriceCard = styled.View({
    width: "95%", backgroundColor: "#f8f9fa", borderRadius: "20px", padding: "20px", marginBottom: "30px"
});

const Divider = styled.View({
    width: "100%", height: "1px", backgroundColor: "rgba(0, 0, 0, 0.1)", margin: "15px 0"
});

const PriceHeaderLine = styled.View({
    flexDirection: "row", justifyContent: "space-between", alignItems: "center"
});

const PriceHeaderTitle = styled.Text({
    fontSize: "18px", color: "black", fontWeight: "700", fontFamily: "urbanist"
});

const TotalPrice = styled.Text({
    fontSize: "20px", color: "#1366B2", fontWeight: "700", fontFamily: "urbanist"
});

const PriceDetailLine = styled.View({
    flexDirection: "row", justifyContent: "space-between", marginBottom: "8px"
});

const PriceDetailLabel = styled.Text({
    fontSize: "16px", color: "#555", fontFamily: "urbanist"
});

const PriceDetailValue = styled.Text({
    fontSize: "16px", color: "black", fontWeight: "600", fontFamily: "urbanist"
});

const CancelButton = styled.TouchableOpacity({
    width: "90%", backgroundColor: "#D63031", borderRadius: "12px", height: "55px", justifyContent: "center", alignItems: "center"
});

const CancelText = styled.Text({
    fontSize: "18px", color: "white", fontWeight: "700", fontFamily: "urbanist"
});

const ModalOverlay = styled.View({
    flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center"
});

const ModalContent = styled.View({
    width: "85%", backgroundColor: "white", borderRadius: "16px", padding: "20px", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5
});

const ModalHeaderLine = styled.View({
    flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "15px"
});

const ModalTitle = styled.Text({
    fontSize: "18px", fontWeight: "bold", color: "black", fontFamily: "urbanist", textAlign: "center", flex: 1
});

const CloseButton = styled.TouchableOpacity({
    padding: "5px"
});

const BulletList = styled.View({
    marginBottom: "20px"
});

const BulletItem = styled.View({
    flexDirection: "row", marginBottom: "8px", paddingRight: "10px"
});

const BulletDot = styled.Text({
    fontSize: "14px", color: "black", marginRight: "5px"
});

const BulletText = styled.Text({
    fontSize: "14px", color: "black", fontFamily: "urbanist", flexShrink: 1
});

const ActionButton = styled.TouchableOpacity<{ bg?: string }>(({ bg }) => ({ backgroundColor: bg || "#2D68C4", borderRadius: "8px", paddingVertical: "12px", alignItems: "center", marginTop: "10px" }));

const ActionButtonText = styled.Text({
    color: "white", fontSize: "16px", fontWeight: "bold", fontFamily: "urbanist"
});

const ConfirmText = styled.Text({
    fontSize: "14px", color: "black", fontFamily: "urbanist", textAlign: "center", marginBottom: "15px"
});

const StyledTextInput = styled.TextInput({
    height: "80px", borderColor: "#A4BFE0", borderWidth: "1px", borderRadius: "8px", padding: "10px", textAlignVertical: "top", fontFamily: "urbanist", marginBottom: "15px"
});

const ImageView = styled.Image({
    width: "100%",
    resizeMode: "contain",
})

function ReservationDetail({ navigation }: { navigation: any }) {
    // Modal Durum Yönetimi
    const [isPolicyModalVisible, setPolicyModalVisible] = useState(false);
    const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
    const [cancelReason, setCancelReason] = useState("");

    const handleGoBack = () => {
        if (navigation) {
            navigation.goBack();
        }
    };

    const handleExtraServices = () => {
        console.log("Ekstra Hizmetler'e basıldı.");
    };

    const handleInitialCancel = () => {
        setPolicyModalVisible(true);
    };

    const handleContinueToConfirm = () => {
        setPolicyModalVisible(false);
        setConfirmModalVisible(true);
    };

    const handleFinalCancel = () => {
        console.log("İptal Onaylandı. Sebep:", cancelReason);
        setConfirmModalVisible(false);
        setCancelReason("");
        navigation.goBack();
    };

    return (
        <Container>
            <Header>
                <BackButton onPress={handleGoBack}>
                    <ImageView source={BackButtonIcon} />
                </BackButton>
                <HeaderTitle>Rezervasyon Detayları</HeaderTitle>
            </Header>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Content>
                    <ImageContainer>
                        <CircleImage source={TekneImage} />
                    </ImageContainer>

                    <StatusTextContainer>
                        <StatusText>
                            #121416 numaralı rezervasyonunuz onaylanmış ve kaptan sağlanmıştır. Keyifli seyahatler dileriz.
                        </StatusText>
                    </StatusTextContainer>

                    <DetailCard>
                        <DateTimeRow>
                            <DateTimeColumn>
                                <DateTimeTitle>Başlangıç</DateTimeTitle>
                                <DateTimeValues>
                                    <DateTimeText>21.09.2023</DateTimeText>
                                    <DateTimeText>10.00</DateTimeText>
                                </DateTimeValues>
                            </DateTimeColumn>
                            <DateTimeColumn>
                                <DateTimeTitle>Bitiş</DateTimeTitle>
                                <DateTimeValues>
                                    <DateTimeText>21.09.2023</DateTimeText>
                                    <DateTimeText>12.00</DateTimeText>
                                </DateTimeValues>
                            </DateTimeColumn>
                        </DateTimeRow>

                        <DetailItem>
                            <IconPlaceholder><Text style={{ fontSize: 18 }}>👥</Text></IconPlaceholder>
                            <DetailText>6 Kişi</DetailText>
                        </DetailItem>

                        <DetailItem>
                            <IconPlaceholder><Text style={{ fontSize: 18 }}>📍</Text></IconPlaceholder>
                            <DetailText>Bebek Limanı</DetailText>
                        </DetailItem>
                    </DetailCard>

                    <ExtraServiceButton onPress={handleExtraServices}>
                        <ExtraServiceText>Ekstra Hizmetler</ExtraServiceText>
                    </ExtraServiceButton>

                    <PriceCard>
                        <PriceHeaderLine>
                            <PriceHeaderTitle>Toplam:</PriceHeaderTitle>
                            <TotalPrice>5000 ₺</TotalPrice>
                        </PriceHeaderLine>
                        <Divider />
                        <PriceDetailLine>
                            <PriceDetailLabel>Hizmet Bedeli:</PriceDetailLabel>
                            <PriceDetailValue>4000 ₺</PriceDetailValue>
                        </PriceDetailLine>
                        <PriceDetailLine>
                            <PriceDetailLabel>KDV:</PriceDetailLabel>
                            <PriceDetailValue>1000 ₺</PriceDetailValue>
                        </PriceDetailLine>
                    </PriceCard>

                    <CancelButton onPress={handleInitialCancel}>
                        <CancelText>İptal Et</CancelText>
                    </CancelButton>
                </Content>
            </ScrollView>

            <Modal transparent={true} visible={isPolicyModalVisible} animationType="fade">
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeaderLine>
                            <View style={{ width: 20 }} />
                            <ModalTitle>İptal Politikası</ModalTitle>
                            <CloseButton onPress={() => setPolicyModalVisible(false)}>
                                <Text style={{ fontSize: 18, color: 'black' }}>✕</Text>
                            </CloseButton>
                        </ModalHeaderLine>

                        <BulletList>
                            <BulletItem>
                                <BulletDot>•</BulletDot>
                                <BulletText>7 gün öncesine kadar teklif tutarının %100'ü iade edilir.</BulletText>
                            </BulletItem>
                            <BulletItem>
                                <BulletDot>•</BulletDot>
                                <BulletText>Hizmet ücretleri iade edilmez.</BulletText>
                            </BulletItem>
                        </BulletList>

                        <ActionButton bg="#2D68C4" onPress={handleContinueToConfirm}>
                            <ActionButtonText>Devam Et</ActionButtonText>
                        </ActionButton>
                    </ModalContent>
                </ModalOverlay>
            </Modal>

            <Modal transparent={true} visible={isConfirmModalVisible} animationType="fade">
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeaderLine>
                            <View style={{ width: 20 }} />
                            <ModalTitle>İptal Onayı</ModalTitle>
                            <CloseButton onPress={() => setConfirmModalVisible(false)}>
                                <Text style={{ fontSize: 18, color: 'black' }}>✕</Text>
                            </CloseButton>
                        </ModalHeaderLine>

                        <ConfirmText>Talebinizi iptal etmek istediğinizden emin misiniz?</ConfirmText>

                        <StyledTextInput
                            placeholder="Talebinizi neden iptal etmek istediğinize dair bir yorum ekleyin. (İsteğe bağlıdır)"
                            placeholderTextColor="#999"
                            multiline={true}
                            value={cancelReason}
                            onChangeText={setCancelReason}
                        />

                        <ActionButton bg="#D63031" onPress={handleFinalCancel}>
                            <ActionButtonText>İptal Et</ActionButtonText>
                        </ActionButton>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Container>
    );
}

export default ReservationDetail;