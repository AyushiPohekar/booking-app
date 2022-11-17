import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import './Home.css';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import MailList from '../../components/maillist/MailList';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <div className="homeTitle">Browse by Property Type</div>
          <PropertyList/>
          <div className="homeTitle">Homes guests love</div>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}
