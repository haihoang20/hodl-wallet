import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, View } from 'react-native';
import { tokens, defaultImg } from "../Utils/Constants";
import AddToTotal from "../Actions/AddToTotal"

class CoinCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    let value = this.calculatePrice(this.props.symbol, this.props.price_cad);
    this.setState({
      value: value
    });
    this.props.AddToTotal(value);
  }

  calculatePrice(token, price_cad) {
    let value = tokens[token].amount * price_cad;
    return Math.round(value * 100) / 100
  }

  render() {
    return (
      <View style={container}>

        <View style={upperRow}>
          <Image
            style={image}
            source={{ uri: tokens[this.props.symbol].img ? tokens[this.props.symbol].img : defaultImg }}
          />
          <Text style={coinSymbol}>{this.props.symbol}</Text>
          <Text style={seperator}>|</Text>
          <Text style={coinName}>{this.props.coin_name}</Text>
          <Text style={coinPrice}>{this.state.value}
            <Text style={moneySymbol}> $ </Text>
          </Text>
        </View>

        <View style={statisticsContainer}>
          <Text>24h:
            <Text style={this.props.percent_change_24h < 0 ? percentChangeMinus : percentChangePlus}> {this.props.percent_change_24h} % </Text>
          </Text>
          <Text>7d:
            <Text style={this.props.percent_change_7d < 0 ? percentChangeMinus : percentChangePlus}> {this.props.percent_change_7d} % </Text>
          </Text>
        </View>

      </View>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, { AddToTotal })(CoinCard)

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: "bold",
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 10,
    fontWeight: "bold",
  },
  image: {
    width: 35,
    height: 35,
  },
  moneySymbol: {
    fontWeight: "bold",
  },
  statisticsContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  percentChangePlus: {
    color: "#00BFA5",
    fontWeight: "bold",
    marginLeft: 5
  },
  percentChangeMinus: {
    color: "#DD2C00",
    fontWeight: "bold",
    marginLeft: 5
  }
});


const {
  container,
  image,
  moneySymbol,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus
} = styles;