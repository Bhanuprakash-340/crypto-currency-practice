import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currency: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyLists()
  }

  getCurrencyLists = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({currency: formattedData, isLoading: false})
  }

  render() {
    const {currency, isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="crypto-currencies-list-container">
        <h1 className="heading">Cryptocurrency Tracker </h1>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image"
          />
        </div>
        <div className="list-items-container">
          <div className="extra-container">
            <div className="column-heading-container">
              <p className="column-headings">Coin Type</p>
              <div className="used-euro">
                <p className="column-headings">USD</p>
                <p className="column-headings">EURO</p>
              </div>
            </div>
          </div>
          <ul className="currency-list-items-container">
            {currency.map(eachCurrency => (
              <CryptocurrencyItem
                currencyDetails={eachCurrency}
                key={eachCurrency.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
