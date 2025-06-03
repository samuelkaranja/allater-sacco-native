import React, {useEffect} from 'react';
import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
//import Card from '../Card/Card';
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

  useEffect(() => {
    dispatch(fetchUserOverview());
  }, [dispatch]);

  return (
    <ScrollView
      horizontal
      snapToInterval={cardWidth}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToAlignment="start"
      contentContainerStyle={styles.scrollContainer}>
      <SavingsCard
        title="Savings"
        balance={overview.savings}
        account="42464246"
        route="Savings"
      />
      <SharesCard
        title="Shares"
        balance={overview.shares}
        account="33813381"
        route="Shares"
      />
      <LoansCard
        title="Loans"
        balance={overview.loan}
        account="71237123"
        route="Loan"
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
