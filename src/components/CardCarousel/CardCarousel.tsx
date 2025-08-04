import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';
import SavingsCard from '../Card/SavingsCard';
import LoansCard from '../Card/LoansCard';
import SharesCard from '../Card/SharesCard';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store/store';
import {fetchUserOverview} from '../../store/slices/overviewSlice';

const {width} = Dimensions.get('window');
const cardWidth = width * 0.75 + 20;

const CardCarousel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const overview = useSelector((state: RootState) => state.overview);
  const profile = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUserOverview());
  }, [dispatch]);

  return (
    <ScrollView
      horizontal
      nestedScrollEnabled={true}
      snapToInterval={cardWidth}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToAlignment="start"
      contentContainerStyle={styles.scrollContainer}>
      <SavingsCard
        title="Savings"
        balance={overview.savings}
        account={profile?.accountID || 'N/A'}
      />
      <SharesCard
        title="Shares"
        balance={overview.shares}
        account={profile?.accountID || 'N/A'}
      />
      <LoansCard
        title="Loans"
        balance={overview.loan}
        account={profile?.accountID || 'N/A'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
});

export default CardCarousel;
