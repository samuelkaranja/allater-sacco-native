import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Card from '../Card/Card';

const CardCarousel: React.FC = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToAlignment="start"
      contentContainerStyle={styles.scrollContainer}>
      <Card
        title="Savings"
        balance={368.0}
        account="42464246"
        route="Savings"
      />
      <Card title="Shares" balance={125.5} account="33813381" route="Shares" />
      <Card title="Loans" balance={750.75} account="71237123" route="Loan" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
  },
});

export default CardCarousel;
