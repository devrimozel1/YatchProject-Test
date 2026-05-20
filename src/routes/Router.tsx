import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "../screens/HomeScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterScreen from '../screens/RegisterScreen'
import MainScreen from '../screens/TabBarScreens/MainScreen'
import TabNavigator from './TabNavigator'
import ForgotPassword from '../screens/ForgotPaswordScreens/ForgotPassword'
import PasswordResetMail from '../screens/ForgotPaswordScreens/PasswordResetMail'
import PasswordResetNumber from '../screens/ForgotPaswordScreens/PasswordResetNumber'
import PasswordResetMailSecondScreen from '../screens/ForgotPaswordScreens/PasswordResetMailSecondScreen'
import PassswordResetPhoneSecondScreen from '../screens/ForgotPaswordScreens/PassswordResetPhoneSecondScreen'
import { NewAppScreen } from '@react-native/new-app-screen'
import NewPasswordScreen from '../screens/ForgotPaswordScreens/NewPasswordScreen'
import ProductDetail from '../screens/ProductDetailsScreen/ProductDetail'
import ProfileDetailScreen from '../screens/ProfileScreen/ProfileDetailScreen'
import NotificationDetailScreen from '../screens/ProfileScreen/NotificationDetailScreen'
import SecurityDetailScreen from '../screens/ProfileScreen/SecurityDetailScreen'
import MessageDetailScreen from '../screens/ProfileScreen/MessageDetailScreen'
import MessageInsıdeScreen from '../screens/ProfileScreen/MessageInsıdeScreen'
import SupportDetailScreen from '../screens/ProfileScreen/SupportDetailScreen'

function Router() {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
                <Stack.Screen name='PasswordResetMail' component={PasswordResetMail} />
                <Stack.Screen name='ResetMailSecond' component={PasswordResetMailSecondScreen} />
                <Stack.Screen name='ResetPhoneSecond' component={PassswordResetPhoneSecondScreen} />
                <Stack.Screen name='PasswordResetNumber' component={PasswordResetNumber} />
                <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
                <Stack.Screen name='Main' component={TabNavigator} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} />
                <Stack.Screen name='ProfileDetail' component={ProfileDetailScreen} />
                <Stack.Screen name='NotificationDetail' component={NotificationDetailScreen} />
                <Stack.Screen name='SecurityDetail' component={SecurityDetailScreen} />
                <Stack.Screen name='MessageDetail' component={MessageDetailScreen} />
                <Stack.Screen name='MessageInsıde' component={MessageInsıdeScreen} />
                <Stack.Screen name='SupportDetail' component={SupportDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router