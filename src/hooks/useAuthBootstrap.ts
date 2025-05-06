import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setCredentials} from '../store/features/auth/authSlice';
import axios from 'axios';

export const useAuthBootstrap = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          const response = await axios.get(
            'https://allater-sacco-backend.onrender.com/auth/me',
            {
              headers: {Authorization: `Bearer ${token}`},
            },
          );
          dispatch(setCredentials({token, user: response.data}));
        }
      } catch (err) {
        console.log('Auth bootstrap failed:', err);
      } finally {
        setLoading(false);
      }
    };

    bootstrap();
  }, [dispatch]);

  return {loading};
};
