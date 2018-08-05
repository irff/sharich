import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OldHomeScreen from '../screens/OldHomeScreen';
import FrontScreen from '../screens/FrontScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QuizScreen from '../screens/QuizScreen';
import RiskProfileScreen from '../screens/RiskProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentReceivedScreen from '../screens/PaymentReceivedScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  drawerLabel: 'Home',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const OldHomeStack = createStackNavigator({
  OldHome: OldHomeScreen,
});

OldHomeStack.navigationOptions = {
  drawerLabel: 'OldHome',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const FrontStack = createStackNavigator({
  Front: FrontScreen,
});

FrontStack.navigationOptions = {
  drawerLabel: 'Front',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  drawerLabel: 'Links',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const RiskProfileStack = createStackNavigator({
  RiskProfil: RiskProfileScreen,
});

RiskProfileStack.navigationOptions = {
  drawerLabel: 'Risk Profile',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const DashboardStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

DashboardStack.navigationOptions = {
  drawerLabel: 'Dashboard',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  drawerLabel: 'Settings',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const PaymentStack = createStackNavigator({
  Payment: PaymentScreen,
});

PaymentStack.navigationOptions = {
  drawerLabel: 'Payment',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const PaymentReceivedStack = createStackNavigator({
  PaymentReceived: PaymentReceivedScreen,
});

PaymentReceivedStack.navigationOptions = {
  drawerLabel: 'PaymentReceived',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};


const QuizStack = createStackNavigator(
  {
    Quiz: QuizScreen,
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

QuizStack.navigationOptions = {
  drawerLabel: 'Quiz',
  drawerIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createDrawerNavigator(
  {
    HomeStack,
    OldHomeStack,
    FrontStack,
    LinksStack,
    SettingsStack,
    DashboardStack,
    RiskProfileStack,
    QuizStack,
    PaymentStack,
    PaymentReceivedStack
  },
  {
    initialRouteName: 'DashboardStack',
  }
);
