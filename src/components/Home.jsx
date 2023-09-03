import React from 'react'
import toast from 'react-hot-toast';
import {useDispatch} from 'react-redux'

import img1 from '../assets/leptop.jpg'
import img2 from '../assets/phone.jpg'
import img3 from '../assets/keyboard.jpg'
import img4 from '../assets/headphone.jpg'

const Home = () => {

  const productList = [
  {name:'Mac Book',price: 84000,imgSrc: img1,id: '8978600'},
  {name:'Moto G73 5G',price: 16999,imgSrc: img2,id: '8978986'},
  {name:'Keyboard with RGB Lights',price: 1999,imgSrc: img3,id: '8978989'},
  {name:'Headphones with RGB Lights with very good voice quality',price: 699,imgSrc: img4,id: '8978947'},
]

const dispatch =  useDispatch();

const addToCartHandler = (options) =>{
  console.log(options);
  dispatch({
    type:'addToCart',
    payload: options,
  })
  dispatch({type: 'calculatePrice'})

  toast.success('Added to cart');
}
  return (
    <div className='home'>
      {
        productList.map(i=>(
          <ProductCard key={i.id} name={i.name} price={i.price} imgSrc={i.imgSrc} id={i.id} handler={addToCartHandler}  />
        ))
      }
    </div>
  )
}

const ProductCard = ({name,price,imgSrc,id,handler}) =>(
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={()=>handler({price,name,id,imgSrc,quantity:1})}>Add to Cart</button>
  </div>
)
;
export default Home
