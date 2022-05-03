import { useState } from 'react';
import '../styles/Cart.css'

function Cart({cart, setCart}) {
	const monsteraPrice = 8
	const [isOpen, setIsOpen] = useState(false)

	return isOpen ? (
		<div className='lmj-cart'>
			<button 
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}>Fermer</button>
			<h2>Panier</h2>
			<div>
				Monstera : {monsteraPrice}€
			</div>
			<h3>Total : {monsteraPrice * cart}€</h3>
			<button onClick={() => setCart(0)}>Vider le panier</button>
		</div>

	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Afficher le Panier
			</button>
		</div>
	)
}

export default Cart
