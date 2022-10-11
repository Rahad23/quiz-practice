import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export const DataContext = createContext();
const Main = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <DataContext.Provider value={data}>
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </DataContext.Provider>
        
    );
};

export default Main;