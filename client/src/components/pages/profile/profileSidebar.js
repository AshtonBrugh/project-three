import React, { useState } from "react";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


import "react-pro-sidebar/dist/css/styles.css";
import "./css/sidebar.css";




const ProfileSidebar = ({ currentPage, handlePageChange }) => {

    return (
        <>
            <div className="sidebar">
                <ProSidebar>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>Where to?</p>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                <a onClick={() => handlePageChange('profile')} > </a>Home
                            </MenuItem>
                            <MenuItem icon={<FaList />}>
                                <a onClick={() => handlePageChange('activelistings')} > Active Listings </a>
                            </MenuItem>
                            <MenuItem icon={<FaRegHeart />}>
                                <a onClick={() => handlePageChange('activeoffers')} > Active Offers </a>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine />}>
                                <a onClick={() => handlePageChange('reviewlist')} > Reviews </a>
                            </MenuItem>
                            <MenuItem icon={<BiCog />}>
                                <a onClick={() => handlePageChange('settings')} > Settings </a>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>
                                <a href='/login' onClick={() => handlePageChange('RegisterLogin')} > Logout </a></MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
                <div className='spacer'></div>
            </div>
        </>
    );
};


export default ProfileSidebar;