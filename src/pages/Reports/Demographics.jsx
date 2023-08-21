import React from 'react'
import TabsBasic from '../../components/tabs/tabs'
import Sidebar from '../../components/sidenav/Sidebar'
import Header from '../../components/header/Header'

const Demographics = () => {
  return (
    <>
    <Header />
    <Sidebar >
    <h3 >Demographics</h3>
    <TabsBasic/>
    </Sidebar>
    </>
    
  )
}

export default Demographics