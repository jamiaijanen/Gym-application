import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import Home from './pages/Home.js';
import Trainings from './pages/Trainings';
import AppNotifications from './pages/Notifications.js';

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'md-home';
    } else if (route.name === 'Trainings') {
      iconName = 'md-bicycle'
    } else if (route.name === 'Notifications') {
      iconName = 'md-notifications'
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Trainings" component={Trainings} />
        <Tab.Screen name="Notifications" component={AppNotifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
