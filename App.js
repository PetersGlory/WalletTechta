import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './app/config/redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './app/UI/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/UI/Authentication/LoginScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  // registerNNPushToken(14312, 'NRKYt9PycbIzkLWoNHDK1o');
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator
        initialRouteName='IntroScreen'
        screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name='IntroScreen' component={IntroScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          {/*
          <Stack.Screen name='VerificationScreen' component={VerificationScreen} />
          <Stack.Screen name='RegistrationScreen' component={RegistrationScreen} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name='HomeScreen' component={IndexHome} />
          <Stack.Screen name='ExchangeScreen' component={ExchangeScreen} />
          <Stack.Screen name='TransactionScreen' component={TransactionScreen} />
          <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
          <Stack.Screen name='AccountDetails' component={AccountDetails} />
          <Stack.Screen name='AccountLimits' component={AccountLimits} />
          <Stack.Screen name='MoreScreen' component={MoreScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
          <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
          <Stack.Screen name='ReceiverScreen' component={ReceiverScreen} />
          <Stack.Screen name='SummaryScreen' component={SummaryScreen} />
          <Stack.Screen name='SuccesScreen' component={SuccessTransaction} /> */}
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
