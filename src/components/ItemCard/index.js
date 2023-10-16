import {useContext, useState} from 'react'
import {BiFoodTag} from 'react-icons/bi'
import CartContext from '../../utils/CartContext'
import './index.css'

function ItemCard(props) {
  const {addCartItem} = useContext(CartContext)
  const {itemData} = props
  const {
    dishType,
    dishName,
    dishCurrency,
    dishPrice,
    dishDescription,
    dishAvailability,
    addonCat,
    dishCalories,
    dishImage,
  } = itemData

  const [quantity, setQuantity] = useState(0)

  const onDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const onIncrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const onClickAddToCart = () => {
    if (quantity > 0) {
      addCartItem({...itemData, quantity})
    }
  }

  return (
    <li className="ic-con">
      <div className="ic-con1">
        {dishType === 1 ? (
          <BiFoodTag color="red" className="veg-non" />
        ) : (
          <BiFoodTag color="green" className="veg-non" />
        )}
        <div className="ic-con2">
          <h1 className="dish-name">{dishName}</h1>
          <p className="dish-price">{`${dishCurrency} ${dishPrice}`}</p>
          <p className="dish-desc">{dishDescription}</p>
          {dishAvailability ? (
            <div className="btn-con1">
              <div className="ic-btn-con">
                <button
                  className="in-de-btn"
                  type="button"
                  onClick={onDecrementQuantity}
                >
                  -
                </button>
                <p className="qty">{quantity}</p>
                <button
                  className="in-de-btn"
                  type="button"
                  onClick={onIncrementQuantity}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="button add-to-cart-btn"
                onClick={onClickAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          ) : (
            <p className="dna">Not available</p>
          )}
          {addonCat.length > 0 ? (
            <p className="cus">Customizations available</p>
          ) : null}
        </div>
      </div>
      <div className="ic-con3">
        <p className="calo">{`${dishCalories} calories`}</p>
        <img src={dishImage} alt={dishName} className="dish-img" />
      </div>
    </li>
  )
}

export default ItemCard
