import React from 'react'
import Layout from '../components/Layout'
import MainBanner from '../components/HomePageComponents/MainBanner'
import ModalBox from '../components/HomePageComponents/ModalBox'
import Modal from '../components/HomePageComponents/Modal'
import ServicesBox from '../components/HomePageComponents/ServicesBox'
import AboutArea from '../components/HomePageComponents/AboutArea'
import ServicesArea from '../components/HomePageComponents/ServicesArea'
import Partners from '../components/HomePageComponents/Partners'
import WhyUs from '../components/HomePageComponents/WhyUs'
import Quote from '../components/HomePageComponents/Quote'
import Ctr from '../components/HomePageComponents/CTR'
import Cia from '../components/HomePageComponents/Cia'
import Advices from '../components/HomePageComponents/Advices'
import Actus from '../components/HomePageComponents/Actus'

const Home = () => {
  return (
    <Layout>
      <MainBanner />
      <ModalBox />
      <Modal />
      <ServicesBox />
      <AboutArea />
      <ServicesArea />
      <Partners />
      <WhyUs />
      <Quote />
      <Ctr />
      <Cia />
      <Advices />
      <Actus />
      <br /><br /><br /><br />
    </Layout>
  )
}

export default Home