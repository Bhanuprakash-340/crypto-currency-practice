import './index.css'

const Cryptocurrencyitem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  //   console.log(currencyName)

  return (
    <li className="list-items">
      <div className="image-currency-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-image" />
        <p className="currency-name-price">{currencyName}</p>
      </div>
      <div className="price-container">
        <p className="currency-name-price">{usdValue}</p>
        <p className="currency-name-price">{euroValue}</p>
      </div>
    </li>
  )
}

export default Cryptocurrencyitem
