"use client"
import React from 'react'
import useTabStore from './Store'
import ProductConfig from './tabs/Product';
import DoorConfig from './tabs/Door';
import WindowConfig from './tabs/Window';
import Applicators from './tabs/Applicators';
import SummaryConfig from './tabs/Summary';

const ConfigurationTab = () => {
  const { currentTab } = useTabStore();
  return (
    <>
    <div className="w-[45rem] bg-[#FAFAFA] flex flex-col h-full px-20 pt-20 text-2xl gap-8 text-[#1A1A1A]">
      {
        currentTab == "products" ? <ProductConfig/> : 
        currentTab == "doors" ? <DoorConfig/> : 
        currentTab == "window" ? <WindowConfig/> : 
        currentTab == "applicators" ? <Applicators/> : 
        currentTab == "summary" ? <SummaryConfig/> : <></>
      }
      </div>
    </>
  )
}

export default ConfigurationTab
