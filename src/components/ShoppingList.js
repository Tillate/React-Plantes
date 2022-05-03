import { useState } from 'react';
import { plantList } from '../datas/plantList';
import Recommendation from './Recommandation';
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css';
import Categories from './Categories';

function ShoppingList({ cart, setCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			setCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			setCart([...cart, { name, price, amount: 1 }])
		}
	}


	return (
		<div>
			<Recommendation/>
			<Categories 
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory} 
			/>
			<ul className='lmj-plant-list'>
				{plantList.map(({id, cover, name, water, light, price}) => (
					<div key={id}>
						<PlantItem
						cover={cover}
						name={name}
						water={water}
						light={light}
						price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
