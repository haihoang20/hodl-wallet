import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View, ScrollView, StyleSheet, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from '../Actions/FetchCoinData';
import ResetTotal from '../Actions/ResetTotal';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.refreshData()
  }

  refreshData() {
    this.props.ResetTotal();
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { crypto } = this.props;
    if (!crypto.hasError) {
      return crypto.data.map((coin, index) =>
        <CoinCard
          key={index}
          coin_name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          price_cad={coin.price_cad}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d}
        />
      )
    } else {
      return (
        <Text>{crypto.errorMessage}</Text>
      )
    }
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation={"fade"}
          />
        </View>
      )
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
        <View style={totalContainer}>
          <Text style={total}>Total: $ {Math.round(this.props.total.amount*100)/100}</Text>
          <View style={refreshBtnContainer}>
            <Button
              onPress={() => this.refreshData()}
              title={"Refresh"}
            />
          </View>
        </View>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto,
    total: state.total
  }
}

export default connect(mapStateToProps, { FetchCoinData, ResetTotal })(CryptoContainer)

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 25
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20
  },
  total: {
    paddingTop: 14,
    fontWeight: 'bold'
  },
  refreshBtnContainer: {
    marginLeft: 'auto',
    marginRight: 20
  }
});

const { contentContainer, totalContainer, total, refreshBtnContainer } = styles;