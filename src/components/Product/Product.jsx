import React, { useState } from 'react'
import like from '../../../public/catalog/heart.svg'
import add0 from '../../../public/catalog/add0.svg'
import add from '../../../public/catalog/add.svg'
import './Product.css'
export default function Product({ product }) {
    const [isFavorite, setIsFavorite] = useState(false)

    const favoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    
    return (
        <>
            <div className="item">
                <div className="like" onClick={favoriteClick} style={{backgroundColor: isFavorite ? 'rgba(255, 0, 0, 0.438)' : 'transparent'}}>

                    <img src={like} alt="" />
                    

                </div>

                <img className='imageitem' src={product.img} alt="" />
                <div className="item-top">
                    <p>{product.category}</p>
                    <p>{product.name}</p>
                </div>
                <div className="item-bottom">
                    <div className="price">
                        <span>ЦЕНА:</span>
                        <p>{product.price} руб</p>
                    </div>
                    <button className='add'>
                        <img src={add0} alt="" />
                    </button>
                    

                </div>
            </div>
            
        </>
    )
}   ``