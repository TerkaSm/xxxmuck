import './style.css'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  const {productId} = useParams()
  
  return (
    <div className='product-detail'>
      <picture className='product-detail__pic'>
        <img className='product-detail__img' src="" alt="" />
      </picture>
      <div className='product-detail__desc'>
        <p className='product-detail__title'>name</p>
        <button className='product-detail__button'>Objednat</button>
      </div>
    </div>
  )
}

