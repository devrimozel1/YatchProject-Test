import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import { G } from 'react-native-svg';
import styled from 'styled-components/native';
import TekneImage from "../../logos/tein_tekne 1.png"


function Favorites() {
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
        <Text style={{ color: "black", fontSize: 24, fontWeight: "400", fontFamily: "urbanist" }}>Favorilerim</Text>
      </HomeImageView>
      <SelectView>
        <SelectBox onPress={handleSelect} isClicked={isClicked}>
          <Text style={{ color: isClicked ? "white" : "#1366B2", fontWeight: "bold" }}>Kiralık Araçlar</Text>
        </SelectBox>
        <SelectBox onPress={handleSelect2} isClicked={!isClicked}>
          <Text style={{ color: !isClicked ? "white" : "#1366B2", fontWeight: "bold" }}>Satılık Araçlar</Text>
        </SelectBox>
      </SelectView>
      <ProductViewBox>
        <ProductImage source={TekneImage} />
      </ProductViewBox>
      <ProductInfoView>
        <ProductInfobox>
          <Text style={{ color: "#1366B2", fontWeight: "bold",}}>21.09.2026</Text>
          <Text style={{ color: "#1366B2", marginTop: 3 }}>Bebek, İstanbul 📍</Text>
          <Text style={{ color: "#1366B2", marginTop: 3 }}>4 Kişi</Text>
        </ProductInfobox>
        <ProductInfobox2>
          <Text style={{ color: "#1366B2", marginTop: 3 }}>5000₺ / Saat</Text>
          <Text style={{ color: "#1366B2", marginTop: 3 }}>Rezervasyon No: #121416</Text>
        </ProductInfobox2>
      </ProductInfoView>
    </GeneralView>

  )
}

export default Favorites