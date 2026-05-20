import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const GeneralView = styled.SafeAreaView({
    flex: 1,
    backgroundColor: "white",
});

const Header = styled.View({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
});

const BackButton = styled.TouchableOpacity({
    position: "absolute",
    left: 15,
    padding: 10,
    width: 40,
});

const HeaderTitle = styled.Text({
    fontSize: 20,
    fontWeight: "500",
    color: "black",
});

const MessageTouchable = styled.TouchableOpacity({
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    alignItems: "center",
});

const Avatar = styled.View({
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
});

const AvatarText = styled.Text({
    fontSize: 20,
});

const MessageContent = styled.View({
    flex: 1,
});

const TopRow = styled.View({
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
});

const NameText = styled.Text({
    fontSize: 16,
    fontWeight: "600",
});

const TimeText = styled.Text({
    fontSize: 12,
    color: "#A0A0A0",
});

const SubjectText = styled.Text({
    fontSize: 14,
    color: "#1366B2", // Görseldeki mavi renk
    marginBottom: 2,
});

const RefText = styled.Text({
    fontSize: 12,
    color: "#A0A0A0",
});
const ImageView = styled.Image({
    width: "100%",
    resizeMode: "contain",
})

function MessagesScreen() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    // 2. Sayfaya geçiş fonksiyonu
    const goToDetail = () => {
        navigation.navigate('MessageInsıde' as never);
    };

    return (
        <GeneralView>
            <Header>
                <BackButton onPress={handleGoBack}>
                    <ImageView source={require("../../logos/BackButtonIcon.png")} />
                </BackButton>
                <HeaderTitle>Mesajlarım</HeaderTitle>
            </Header>

            <ScrollView>
                <MessageTouchable onPress={goToDetail}>
                    <Avatar><AvatarText>A</AvatarText></Avatar>
                    <MessageContent>
                        <TopRow>
                            <NameText>Ali YILMAZ</NameText>
                            <TimeText>14:27</TimeText>
                        </TopRow>
                        <SubjectText>Sahibinden Satılık Ticari Motoryat</SubjectText>
                        <RefText>(İlan No: #1214161820)</RefText>
                    </MessageContent>
                </MessageTouchable>

                <MessageTouchable onPress={goToDetail}>
                    <Avatar><AvatarText>B</AvatarText></Avatar>
                    <MessageContent>
                        <TopRow>
                            <NameText>Betül Keskin</NameText>
                            <TimeText>Cuma</TimeText>
                        </TopRow>
                        <SubjectText>Sahibinden Kiralık Tein Yat</SubjectText>
                        <RefText>(Rezervasyon No: #121416)</RefText>
                    </MessageContent>
                </MessageTouchable>
            </ScrollView>
        </GeneralView>
    );
}

export default MessagesScreen;