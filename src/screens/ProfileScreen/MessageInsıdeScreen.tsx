import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const GeneralView = styled.SafeAreaView({
    flex: 1,
    backgroundColor: "#F8F9FA",
});

const HeaderWrapper = styled.View({});

const HeaderTop = styled.View({
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center"
});

const BackButton = styled.TouchableOpacity({
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    width: "10%",
    position: "absolute",
    left: 5
});

const HeaderTitle = styled.Text({
    fontSize: 20,
    fontWeight: "500",
    color: "black",
});

const HeaderSub = styled.View({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
});

const ItemTitle = styled.Text({
    fontSize: 14,
    color: "#333",
    left: 10,
});

const ItemRef = styled.Text({
    fontSize: 12,
    color: "#A0A0A0",
    left: 10
});

const ChatArea = styled.ScrollView({
    flex: 1,
    padding: 15,
});

const MessageBubble = styled.View<{ isOwn: boolean }>(({ isOwn }) => ({
    backgroundColor: isOwn ? "#9AC2DF" : "#D1D6DD",
    alignSelf: isOwn ? "flex-end" : "flex-start",
    borderRadius: 15,
    minWidth: 150,
    minHeight: 40,
    marginBottom: 15,
    padding: 10,
}));

const InputAreaWrapper = styled.View({
    padding: 15,
    paddingBottom: Platform.OS === "ios" ? 25 : 15,
});

const InputContainer = styled.View({
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1D6DD",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 15,
});

const MessageInput = styled.TextInput({
    flex: 1,
    height: "100%",
    fontSize: 14,
});

const SendButton = styled.TouchableOpacity({
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
});

const ImageView = styled.Image({
    width: "100%",
    resizeMode: "contain",
});

function MessageInsideScreen() {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };


    
    return (
        <GeneralView>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <HeaderWrapper>
                    <HeaderTop>
                        <BackButton onPress={handleGoBack}>
                            <ImageView source={require("../../logos/BackButtonIcon.png")} />
                        </BackButton>
                        <HeaderTitle>Mesajlarım</HeaderTitle>
                    </HeaderTop>

                    <HeaderSub>
                        <View>
                            <ItemTitle>Tein Yat</ItemTitle>
                            <ItemRef>(Rezervasyon No: #121416)</ItemRef>
                        </View>
                    </HeaderSub>
                </HeaderWrapper>

                <ChatArea showsVerticalScrollIndicator={false}>
                    <MessageBubble isOwn={true} />
                    <MessageBubble isOwn={false} />
                    <MessageBubble isOwn={true} style={{ height: 80 }} />
                    <MessageBubble isOwn={false} />
                    <MessageBubble isOwn={true} />
                </ChatArea>

                <InputAreaWrapper>
                    <InputContainer>
                        <MessageInput
                            placeholder="Mesajınızı buraya yazınız..."
                            placeholderTextColor="#A0A0A0"
                        />
                        <SendButton>
                            <Text>Gönder</Text>
                        </SendButton>
                    </InputContainer>
                </InputAreaWrapper>

            </KeyboardAvoidingView>
        </GeneralView>
    );
}

export default MessageInsideScreen;