import React from 'react'
import Footer from '../../components/common/footer'
import Header from '../../components/common/header'
import { useState } from 'react'
import Delivery from '../../components/common/delivery'
import DiningOut from '../../components/common/diningout'
import TabOptions from '../../components/common/tabOptions'
import Nightlife from '../../components/common/NightLife'

const HomePage = () => {
  const [activeTab,setActiveTab] = useState("Delivery");
  return (
    <div>
        <Header/>
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
};

const getCorrectScreen = (tab) => {
  switch(tab){
    case "Delivery":
      return <Delivery/>;
    case "Dining Out":
      return <DiningOut/>
    case "Nightlife":
      return <Nightlife/>;
    default:
      return <div>Delivery</div>;

  }
}

export default HomePage