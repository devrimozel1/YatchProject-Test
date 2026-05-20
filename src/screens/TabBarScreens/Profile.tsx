import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import ProfileImage from "../../logos/Rectangle.png"
import SaleImage from "../../logos/Sale.png"
import IkImage from "../../logos/IK.png"
import MessageImage from "../../logos/Message.png"
import NotificationImage from "../../logos/bell.png"
import SecurityImage from "../../logos/Lock.png"
import HelpImage from "../../logos/Phone.png"
import ExitImage from "../../logos/Logout.png"
import { useNavigation } from '@react-navigation/native'

function Profile() {

    const navigation = useNavigation()


    const GeneralView = styled.SafeAreaView({
        alignItems: "center",
        gap: "20",
        justifyContent: "center",
        backgroundColor: "white",
    })

    const RectangelImageView = styled.View({
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        resizeMode: "contain",
    })

    const ImageView = styled.Image({
        width: "100%",
        resizeMode: "contain",
    })

    const TextBox = styled.View({
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
    })

    const GroupView = styled.View({
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "10px",
        gap: "10px",
        marginTop: "20px",
        marginBottom: "50px",

    })

    const Onlyline = styled.View({
        width: "90%",
        height: "1px",
        backgroundColor: "black",
    })

    const SelectBox = styled.TouchableOpacity({
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "5px",
        flexDirection: "row",
        borderRadius: "10px",
    })

    const Imagebox = styled.View({
        width: "35px",
        height: "35px",
        alignItems: "center",
        justifyContent: "center",
    })

    const Images = styled.Image({
        width: "100%",
        resizeMode: "contain",
    })


    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" as never }],
        })
    }

    const handleProfileDetail = () => {
        navigation.navigate("ProfileDetail" as never)
    }

    const NotificationDetail = () => {
        navigation.navigate("NotificationDetail" as never)
    }

    const SecurityDetail = () => {
        navigation.navigate("SecurityDetail" as never)
    }

    const MessageDetail = () => {
        navigation.navigate("MessageDetail" as never)
    }

    const SupportDetail = () => {
        navigation.navigate("SupportDetail" as never)
    }






    return (
        <GeneralView>
            <RectangelImageView>
                <ImageView source={ProfileImage} />
            </RectangelImageView>
            <TextBox>
                <Text style={{ color: "#1366B2", fontWeight: "700", fontSize: 24 }}>Devrim Özel</Text>
            </TextBox>
            <GroupView>
                <Onlyline />
                <SelectBox onPress={handleProfileDetail}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Kişisel Bilgilerim</Text>
                    <Imagebox>
                        <ImageView source={require("../../logos/UserIcon.png")} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Satılık Deniz Araçları</Text>
                    <Imagebox>
                        <ImageView source={SaleImage} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>İnsan Kaynakları</Text>
                    <Imagebox>
                        <ImageView source={IkImage} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox onPress={MessageDetail}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Mesajlarım</Text>
                    <Imagebox>
                        <ImageView source={MessageImage} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox onPress={NotificationDetail}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Bildirimlerim</Text>
                    <Imagebox>
                        <ImageView source={NotificationImage} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox onPress={SecurityDetail}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Güvenlik</Text>
                    <Imagebox>
                        <ImageView source={SecurityImage} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox onPress={SupportDetail}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Destek</Text>
                    <Imagebox>
                        <ImageView source={HelpImage} />
                    </Imagebox>
                </SelectBox>
                <Onlyline />
                <SelectBox onPress={handleLogout}>
                    <Text style={{ color: "black", fontWeight: "400", fontSize: 24 }}>Çıkış Yap</Text>
                    <Imagebox>
                        <ImageView source={ExitImage} />
                    </Imagebox>
                </SelectBox>


            </GroupView>
        </GeneralView>


    )
}

export default Profile