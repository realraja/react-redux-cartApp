import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {useSelector,useDispatch} from 'react-redux'


const Cart = () => {
  const {cartItems,subTotal,shipping,tax,total} = useSelector((state)=>state.cart);
  const dispatch = useDispatch();

  const incriment = (id) =>{
    dispatch({
        type: 'addToCart',
        payload: {id},
    })
    dispatch({type: 'calculatePrice'})
  }
  const decriment = (id) =>{
    dispatch({
        type: 'decriment',
        payload: id,
    })
    dispatch({type: 'calculatePrice'})
  }
  const deleteHandler = (id) =>{
    dispatch({
        type: 'deleteFromCart',
        payload: id,
    })
    dispatch({type: 'calculatePrice'})
  }

  return (
    <div className='cart'>
      <main>
        {cartItems.length > 0 ?(
            cartItems.map((i) => (
        <CartItem key={i.id} name={i.name} price={i.price} imgSrc={i.imgSrc} qty={i.quantity} id={i.id} incriment={incriment} decriment={decriment} deleteHandler={deleteHandler} />

            ))
        ):(
            <h1>No Items Here</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ₹{subTotal}</h2>
        <h2>Shipping: ₹{shipping}</h2>
        <h2>Tax: ₹{tax}</h2>
        <h2>Total: ₹{total}</h2>
      </aside>
    </div>
  )
}

const CartItem = ({name,price,imgSrc,qty,incriment,decriment,deleteHandler,id}) =>(
    <div className="CartItem">
        <img src={imgSrc} alt="item" />
        <article>
            <h3>{name}</h3>
            <p>₹{price}</p>
        </article>
        <div>
            <button onClick={()=>decriment(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>incriment(id)}>+</button>
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)} />
    </div>
)

export default Cart
