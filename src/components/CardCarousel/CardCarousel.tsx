import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
//import Card from '../Card/Card';
import SavingsCard from '../Card/SavingsCard';
import LoansCard from '../Card/LoansCard';
import SharesCard from '../Card/SharesCard';

const CardCarousel: React.FC = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToAlignment="start"
      contentContainerStyle={styles.scrollContainer}>
      <SavingsCard title="Savings" balance={368.0} account="42464246" />
      <SharesCard title="Shares" balance={125.5} account="33813381" />
      <LoansCard title="Loans" balance={750.75} account="71237123" />

      {/* <Card
        title="Savings"
        balance={368.0}
        account="42464246"
        route="Savings"
      />
      <Card title="Shares" balance={125.5} account="33813381" route="Shares" />
      <Card title="Loans" balance={750.75} account="71237123" route="Loan" /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
});

export default CardCarousel;
