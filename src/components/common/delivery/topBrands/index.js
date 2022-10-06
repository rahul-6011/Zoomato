import React from 'react'
import "./topBrands.css"
import NextArrow from '../../carousel/nextArrow'
import PrevArrow from '../../carousel/prevArrow'
import Slider from "react-slick"

const brandList = [
    {
        id:1,
        time: "30min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp"
    },
    {
        id:2,
        time: "33min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp"
    },
    {
        id:3,
        time: "25min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id:4,
        time: "27min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp"
    },
    {
        id:5,
        time: "34min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    },
    {
        id:6,
        time: "42min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429766.png?output-format=webp"
    },
    {
        id:7,
        time: "38min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/30ebb0e7aac79d952b3cfbf77802fac9_1663653518.png?output-format=webp"
    },
    {
        id:8,
        time: "45min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp"
    },
    {
        id:9,
        time: "33min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
}

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>
            Top brands for you
        </div>
         <Slider {...settings}>
            {brandList.map((brand)=>
            {
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className='top-brands-image' alt={brand.title}>
                        </img>
                    </div>
                </div>
            })}
         </Slider>
    </div>
  )
}

export default TopBrands
