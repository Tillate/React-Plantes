import CareScale from './CareScale';

import '../styles/PlantItem.css';

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({cover, name, water, light, price}) {

    return (
        <li className='lmj-plant-item' onClick={()=>handleClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover'/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}></CareScale>
                <CareScale careType='light' scaleValue={light}></CareScale>
            </div>
        </li>
    );
}

export default PlantItem;