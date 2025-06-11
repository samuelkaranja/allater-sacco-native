import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Welcome: undefined;
  OnBoarding: undefined;
  Register: undefined;
  Login: undefined;
  MainApp: undefined;
  Loan: undefined;
};

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Transact: undefined;
  Profile: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  About: undefined;
  FAQs: undefined;
};

export type HomeStackParamList = {
  HomeMain: undefined;
  Savings: undefined;
  Shares: undefined;
  Loan: undefined;
  Contact: undefined;
  Investing: undefined;
  Locate: undefined;
  About: undefined;
  Faq: undefined;
  Withdraw: undefined;
  Save: undefined;
  Member: undefined;
  Kin: undefined;
  BuyShares: undefined;
};
