import React from 'react'
import NextArrow from '../../carousel/nextArrow'
import PrevArrow from '../../carousel/prevArrow'
import Slider from "react-slick"
import DeliveryItem from './deliveryItem'
import './deliveryCollections.css'


const deliveryItems=[
    {
        id:1,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:2,
        title: "Bowl",
        cover: "https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png"
    },
    {
        id:3,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id:4,
        title: "Sandwich",
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
        id:5,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:6,
        title: "Kebabs",
        cover: "https://b.zmtcdn.com/data/dish_photos/4c6/4f2cb1bfb215d0af454e65291aec74c6.jpg"
    },
    {
        id:7,
        title: "Paratha",
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
}

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item)=>{
                    return <DeliveryItem item={item}/>
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections