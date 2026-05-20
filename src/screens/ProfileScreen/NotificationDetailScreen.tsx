import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import styled from 'styled-components/native';
import CheckIcon from "../../logos/CheckIcon.png"
import DeclineIcon from "../../logos/DeclineIcon.png"
import VectorIcon from "../../logos/VectorIcon.png"
import ShipIcon from "../../logos/ShipIcon.png"
import BackButtonIcon from "../../logos/BackButtonIcon.png"
import { Image } from 'react-native-svg';


function NotificationDetailScreen() {

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

    const NotifiView = styled.View({
        width: "90%",
        height: "100px",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "10px",
        marginBottom: "20px",
        flexDirection: "row"
    })
    const NotifiIcon = styled.View({
        width: "20%",
        height: "80%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
    })

    const NotifiTextBox = styled.View({
        width: "80%",
        height: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: "10px",
        flexDirection: "column",
        gap: "5px",
        padding: "5px"
    })

    const OnlyLine = styled.View({
        width: "90%",
        height: "1px",
        backgroundColor: "black",
        marginBottom: "10px"
    })

    const ImageView = styled.Image({
        width: "100%",
        resizeMode: "contain",
    })

    const handleGoBack = () => {
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
                        <ImageView source={BackButtonIcon} />
                    </BackButton>
                    <HeaderTitle>Bildirimlerim</HeaderTitle>
                </Header>
                <NotifiView>
                    <NotifiIcon>
                        <ImageView source={CheckIcon} />
                    </NotifiIcon>
                    <NotifiTextBox>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Rezervasyon Onayı !</Text>
                        <Text style={{ color: "black", fontWeight: "normal", fontSize: 14 }}>Rezervasyonunuz onaylandı. Rezervasyonunuzla ilgili detaylara rezervasyonlarım sayfasından ulaşabilirsiniz.</Text>
                    </NotifiTextBox>
                </NotifiView>
                <OnlyLine />
                <NotifiView>
                    <NotifiIcon>
                        <ImageView source={VectorIcon} />
                    </NotifiIcon>
                    <NotifiTextBox>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Fiyat Alarmı !</Text>
                        <Text style={{ color: "black", fontWeight: "normal", fontSize: 14 }}>İlgilendiğiniz satılık tekne ilanının fiyatı düştü. Bu bildirime tıklayarak detaylara ulaşabilirsiniz.</Text>
                    </NotifiTextBox>
                </NotifiView>
                <OnlyLine />
                <NotifiView>
                    <NotifiIcon>
                        <ImageView source={DeclineIcon} />
                    </NotifiIcon>
                    <NotifiTextBox>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Rezervasyon İptali !</Text>
                        <Text style={{ color: "black", fontWeight: "normal", fontSize: 14 }}>Rezervasyon iptal isteğiniz onaylanmıştır. Geri ödeme en kısa sürede hesabınıza aktarılacaktır.</Text>
                    </NotifiTextBox>
                </NotifiView>
                <OnlyLine />
                <NotifiView>
                    <NotifiIcon>
                        <ImageView source={ShipIcon} />
                    </NotifiIcon>
                    <NotifiTextBox>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Yat Keyfinizi Sürmeye Devam</Text>
                        <Text style={{ color: "black", fontWeight: "normal", fontSize: 14 }}>Kışa uygun yatlar ile kış mevsiminde de keyfinize devam edin !</Text>
                    </NotifiTextBox>
                </NotifiView>
                <OnlyLine />
                <NotifiView>
                    <NotifiIcon>
                        <ImageView source={VectorIcon} />
                    </NotifiIcon>
                    <NotifiTextBox>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Fiyat Alarmı !</Text>
                        <Text style={{ color: "black", fontWeight: "normal", fontSize: 14 }}>İlgilendiğiniz satılık tekne ilanının fiyatı düştü. Bu bildirime tıklayarak detaylara ulaşabilirsiniz.</Text>
                    </NotifiTextBox>
                </NotifiView>



            </KeyboardAvoidingView>



        </GeneralView>

    )
}

export default NotificationDetailScreen