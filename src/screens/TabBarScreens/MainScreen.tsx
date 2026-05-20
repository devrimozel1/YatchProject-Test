import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import TeinLogo from "../../logos/TEIN2.png"
import Pınlogo from "../../logos/pin_drop.png"
import InstantLogo from "../../logos/instant_mix.png"
import TekneImage from "../../logos/tein_tekne 1.png"

function MainScreen() {
    const navigation = useNavigation()
    const [isClicked, setIsClicked] = React.useState(false);

    const handleSelect = () => {
        setIsClicked(true);
    };
    const handleSelect2 = () => {
        setIsClicked(false);
    };


    const handleturnback = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Home" as never }],
        })
    }

    const GeneralView = styled.SafeAreaView({
        alignItems: "center",
        gap: "20",
        justifyContent: "center",
    })
    const HomeButton = styled.TouchableOpacity({
        width: "50px",
        height: "45px",
        textAlign: "center",
        border: "1px solid #1366B2",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1366B2",
    })
    const HomeImageView = styled.View({
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    })

    const ImageView = styled.Image({
        width: "100%",
        resizeMode: "contain",
    })

    const SelectView = styled.View({
        width: "90%",
        height: "50px",
        alignItems: "start",
        border: "1px solid #1366B2",
        borderRadius: "50px",
        flexDirection: "row",
        padding: "5px",
    })

    const SelectBox = styled.TouchableOpacity<{ isClicked?: boolean }>`
  width: 50%;
  border-radius: 50px;
  border: ${props => (props.isClicked ? "1px solid #1366B2" : "none")};
  align-items: center;
  justify-content: center;
  

  background-color: ${props => (props.isClicked ? "#1366B2" : "transparent")};
`;
    const LocationBar = styled.View({
        width: "90%",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        border: "1px solid #1366B2",
        borderRadius: "10px",
        gap: "15px",
    })

    const LocationTouchablePın = styled.TouchableOpacity({
        width: "50px",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
    })

    const ProductView = styled.ScrollView({
        marginBottom: "120px",
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
        height: "100%",
        borderRadius: "10px",
        alignItems: "start",
        flexDirection: "column",
    })
    const ProductInfobox2 = styled.View({
        width: "50%",
        height: "100%",
        borderRadius: "10px",
        alignItems: "flex-end",
        flexDirection: "column",
    })


    return (

        <GeneralView>
            <HomeImageView>
                <ImageView source={TeinLogo} />
            </HomeImageView>
            <SelectView>
                <SelectBox onPress={handleSelect} isClicked={isClicked}>
                    <Text style={{ color: isClicked ? "white" : "#1366B2", fontWeight: "bold" }}>Kiralık Araçlar</Text>
                </SelectBox>
                <SelectBox onPress={handleSelect2} isClicked={!isClicked}>
                    <Text style={{ color: !isClicked ? "white" : "#1366B2", fontWeight: "bold" }}>Satılık Araçlar</Text>
                </SelectBox>
            </SelectView>
            <LocationBar>
                <LocationTouchablePın>
                    <ImageView source={Pınlogo} />
                </LocationTouchablePın>
                <Text style={{ color: "#1366B2", fontWeight: "bold" }}>Nereden Binmek İstersiniz ?</Text>
                <LocationTouchablePın>
                    <ImageView source={InstantLogo} />
                </LocationTouchablePın>
            </LocationBar>
            <ProductView>
                <ProductViewBox>
                    <ProductImage source={TekneImage} />
                </ProductViewBox>
                <ProductInfoView>
                    <ProductInfobox>
                        <Text style={{ color: "#1366B2", fontWeight: "bold" }}>Tein Yat</Text>
                        <Text style={{ color: "#1366B2", }}>📍Bebek, İstanbul</Text>

                    </ProductInfobox>
                    <ProductInfobox2>
                        <Text style={{ color: "#1366B2", }}>⭐️ 5.0</Text>
                        <Text style={{ color: "#1366B2", }}>👥 20 Kişilik</Text>
                    </ProductInfobox2>
                </ProductInfoView>
                <ProductViewBox>
                    <ProductImage source={TekneImage} />
                </ProductViewBox>
                <ProductInfoView>
                    <ProductInfobox>
                        <Text style={{ color: "#1366B2", fontWeight: "bold" }}>Tein Yat</Text>
                        <Text style={{ color: "#1366B2", }}>📍Bebek, İstanbul</Text>

                    </ProductInfobox>
                    <ProductInfobox2>
                        <Text style={{ color: "#1366B2", }}>⭐️ 5.0</Text>
                        <Text style={{ color: "#1366B2", }}>👥 20 Kişilik</Text>
                    </ProductInfobox2>
                </ProductInfoView>

            </ProductView>
            
        </GeneralView>

    )
}

export default MainScreen