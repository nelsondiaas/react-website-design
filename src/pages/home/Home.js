import React, { Component } from 'react';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Service from '../../components/service/Service';


class Home extends Component {
    
    render() {
        return (
            <>
                <Header></Header>
                <Banner></Banner>
                <About></About>
                <Service></Service>
            </>
        );
    }
}

export default Home;