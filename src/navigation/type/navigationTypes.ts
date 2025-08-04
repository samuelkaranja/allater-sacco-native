import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Welcome: undefined;
  OnBoarding: undefined;
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  MainApp: undefined;
  Loan: undefined;
  Save: undefined;
  Withdraw: undefined;
  BuyShares: undefined;
};

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Savings: undefined;
  Shares: undefined;
  Profile: undefined;
};

export type DrawerParamList = {
  MainTabs: undefined;
  About: undefined;
  FAQs: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  Loan: undefined;
  Contact: undefined;
  Investing: undefined;
  Locate: undefined;
  About: undefined;
  Faq: undefined;
  Member: undefined;
  Kin: undefined;
};
