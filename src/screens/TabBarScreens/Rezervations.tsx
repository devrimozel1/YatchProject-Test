import React, { useState } from 'react'
import { Text, View, Alert } from 'react-native'
import styled from 'styled-components/native'
import TekneImage from "../../logos/tein_tekne 1.png"
import { useNavigation } from '@react-navigation/native';

function Rezervations() {
    const [activeTab, setActiveTab] = useState('Onaylanan');
    const navigation = useNavigation()


    const handleTabPress = (tabName: any) => {
        setActiveTab(tabName);
        if (tabName === 'Bekleyen' || tabName === 'Geçmiş') {
            Alert.alert("Bilgi", "Yönlendiriliyorsunuz...");
        }
    };

    const GeneralView = styled.SafeAreaView({
        alignItems: "center",
        gap: "20",
        justifyContent: "center",
    })
    const HomeImageView = styled.View({
        width: "80%",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
    })

    const SelectRezervView = styled.View({
        width: "90%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        gap: 10,
    })

    const SelectTOpacity = styled.TouchableOpacity({
        alignItems: "center",
        justifyContent: "center",
    })

    const ProductView = styled.ScrollView({
        width: "100%",
        borderRadius: "10px",
    })

    const ProductViewBox = styled.TouchableOpacity({
        width: "90%",
        borderRadius: "10px",
        alignItems: "center",
        margin: "auto",
        resizeMode: "contain",

    })

    const ProductImage = styled.Image({
        width: "100%",
        borderRadius: "10px",
        marginTop: 20,
    })

    const ProductInfoView = styled.View({
        width: "90%",
        height: "70px",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        margin: "auto",
        padding: "10px",
        gap: "10px",
    })

    const ProductInfobox = styled.View({
        width: "50%",
        borderRadius: "10px",
        alignItems: "start",
        flexDirection: "column",
        height: "100",
        margin: "auto",
    })

    const ProductInfobox2 = styled.View({
        width: "50%",
        height: "100%",
        borderRadius: "10px",
        alignItems: "flex-end",
        flexDirection: "column",
    })

    const handleDetail = () => {
        navigation.navigate("ProductDetail" as never)
    }


    return (
        <GeneralView>
            <HomeImageView>
                <Text style={{ color: "black", fontSize: 24, fontWeight: "400", fontFamily: "urbanist" }}>Rezervasyonlarım</Text>
            </HomeImageView>

            <SelectRezervView>
                <SelectTOpacity onPress={() => handleTabPress('Bekleyen')}>
                    <View style={{ borderBottomWidth: activeTab === 'Bekleyen' ? 1 : 0, borderBottomColor: '#1366B2', paddingBottom: 5, alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "600", fontFamily: "urbanist" }}>🟠 Bekleyen</Text>
                    </View>
                </SelectTOpacity>

                <SelectTOpacity onPress={() => handleTabPress('Onaylanan')}>
                    <View style={{ borderBottomWidth: activeTab === 'Onaylanan' ? 1 : 0, borderBottomColor: '#1366B2', paddingBottom: 5, alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "600", fontFamily: "urbanist" }}>🟢 Onaylanan</Text>
                    </View>
                </SelectTOpacity>

                <SelectTOpacity onPress={() => handleTabPress('Geçmiş')}>
                    <View style={{ borderBottomWidth: activeTab === 'Geçmiş' ? 1 : 0, borderBottomColor: '#1366B2', paddingBottom: 5, alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 16, fontWeight: "600", fontFamily: "urbanist" }}>⚪️ Geçmiş</Text>
                    </View>
                </SelectTOpacity>
            </SelectRezervView>

            <ProductView>
                {activeTab === 'Onaylanan' && (
                    <>
                        <ProductViewBox onPress={handleDetail}>
                            <ProductImage source={TekneImage} />
                        </ProductViewBox>
                        <ProductInfoView>
                            <ProductInfobox>
                                <Text style={{ color: "#1366B2", fontWeight: "bold" }}>21.09.2026
                                </Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>Bebek, İstanbul 📍</Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>4 Kişi</Text>
                            </ProductInfobox>
                            <ProductInfobox2>
                                <Text style={{ color: "green", borderWidth: 1, padding: 5, borderRadius: 10, backgroundColor: "lightgreen", fontWeight: "bold" }}>Kaptan Onaylandı</Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>5000₺</Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>Rezervasyon No: #121416</Text>

                            </ProductInfobox2>
                        </ProductInfoView>
                        <ProductViewBox onPress={handleDetail}>
                            <ProductImage source={TekneImage} />
                        </ProductViewBox>
                        <ProductInfoView style={{ marginBottom: 70 }}>
                            <ProductInfobox>
                                <Text style={{ color: "#1366B2", fontWeight: "bold" }}>21.09.2026
                                </Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>Bebek, İstanbul 📍</Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>4 Kişi</Text>
                            </ProductInfobox>
                            <ProductInfobox2>
                                <Text style={{ color: "green", borderWidth: 1, padding: 5, borderRadius: 10, backgroundColor: "lightgreen", fontWeight: "bold" }}>Kaptan Onaylandı</Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>5000₺</Text>
                                <Text style={{ color: "#1366B2", marginTop: 3 }}>Rezervasyon No: #121416</Text>
                            </ProductInfobox2>
                        </ProductInfoView>


                    </>
                )}
            </ProductView>
        </GeneralView>
    )
}

export default Rezervations