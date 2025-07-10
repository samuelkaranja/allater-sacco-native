import React from 'react';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#2ecc71'}}
      text1Style={{
        fontSize: 12,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 14, // 👈 increase text2 font size here
        color: '#444',
      }}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 12,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 14, // 👈 increase text2 font size here too
        color: '#a00',
      }}
    />
  ),
};
