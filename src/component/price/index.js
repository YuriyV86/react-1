import "./index.css"

import Box from "../box"
import ListItem from "../list-item"

export default function Price({
  // price, discount, currency, clearning, service, chekin, checkout
  price, discount, currency, ...rest
}) {
  return <Box className='price'>
    <div class="price__header">
      <span className={`price__value ${discount ? "price__value--has-discount" : ""}`}>
        {currency}
        {price}
      </span>

      {discount && (
        <span className={`price__value`}>
          {currency}
          {discount}
        </span>
      )}
    </div>

    <List {...rest} currency = {currency}/>

  </Box>
} 

function List ({currency, clearning = 0, service = 0, chekin, checkout}) {
  return (
    <ul className="price__list">

      <ListItem>
        <span>Плата за прибирання:</span>
        <span>
          {currency}
          {clearning}
        </span>
      </ListItem>

      <ListItem>
        <span>Сервісний збір:</span>
        <span>
          {currency}
          {service}
        </span>
      </ListItem>

      <ListItem>
        <span>Дата прибуття:</span>
        <span>
          {chekin}
        </span>
      </ListItem>

      <ListItem>
        <span>Дата від'їзду:</span>
        <span>
          {checkout}
        </span>
      </ListItem>

    </ul>
  )
}