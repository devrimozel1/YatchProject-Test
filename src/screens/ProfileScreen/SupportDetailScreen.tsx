import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import styled from 'styled-components/native';
import BackButtonIcon from "../../logos/BackButtonIcon.png"
import Logo1 from "../../logos/YacthIcon.png"

function SupportDetailScreen() {
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
    const ImageView = styled.Image({
        width: "100%",
        resizeMode: "contain",
    })
    const HomeImageView = styled.View({
        width: "290px",
        height: "290px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px"
    })

    const TextBox = styled.View({
        width: "90%",
        justifyContent: "center",
        borderRadius: "10px",
        gap: "15",
        marginBottom: "50px"
    })

    const handleGoBack = () => {
        navigation.goBack();
    }

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
                    <HeaderTitle>Destek</HeaderTitle>
                </Header>
                <HomeImageView>
                    <ImageView source={Logo1} />
                </HomeImageView>
                <TextBox>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "700", textAlign: "center" }}>Tein Yat iletişim bilgileri aşağıda yer {"\n"} almaktadır:</Text>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "urbanist", textAlign: "center" }}>Adres: Ataköy 7-8-9-10. Kısım Mahallesi Çobançeşme E-5 Caddesi İstanbul/Bakırköy</Text>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "urbanist", textAlign: "center" }}>Telefon: 0850 303 46 38</Text>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "urbanist", textAlign: "center" }}>E-posta: info@tein.com.tr</Text>
                </TextBox>
                <TextBox>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "700", textAlign: "center" }}>Müşteri Hizmetleri</Text>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "urbanist", textAlign: "center" }}>Çağrı Merkezimiz hafta içi ve hafta sonu 08.30 / 24.00 saatleri arasında hizmet vermektedir.</Text>
                    <Text style={{ color: "black", fontSize: 15, fontWeight: "500", fontFamily: "urbanist", textAlign: "center" }}>Çağrı Merkezi: 0850 303 46 38</Text>

                </TextBox>




            </KeyboardAvoidingView>



        </GeneralView>
    )
}

export default SupportDetailScreen