import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;