import React, { useState } from "react";

import AuthService from "../utils/auth";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart, FaGem, FaHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


import "react-pro-sidebar/dist/css/styles.css";
import "./pages/css/sidebar.css";




const BrowseSidebar = ({ currentFilter, setCurrentFilter }) => {

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
                            <SubMenu title="Collectibles" icon={<FaGem />}>
                                <SubMenu title="Trading Cards" icon={<FaHeart />}>
                                    <MenuItem>Sports</MenuItem>
                                    <MenuItem>Pokemon</MenuItem>
                                    <MenuItem>Magic the Gathering</MenuItem>
                                </SubMenu>
                                <SubMenu title="Toys" icon={<FaHeart />}>
                                    <MenuItem>Action Figures</MenuItem>
                                    <MenuItem>Plushies</MenuItem>
                                    <MenuItem>Games</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Clothing" icon={<FaGem />}>
                                <SubMenu title="Outerwear" icon={<FaHeart />}>
                                    <MenuItem>Jackets</MenuItem>
                                    <MenuItem>Shoes</MenuItem>
                                    <MenuItem>Pants</MenuItem>
                                </SubMenu>
                                <SubMenu title="Underwear" icon={<FaHeart />}>
                                    <MenuItem>Panties</MenuItem>
                                    <MenuItem>Bras</MenuItem>
                                    <MenuItem>Socks</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Music" icon={<FaGem />}>
                                <SubMenu title="Instruments" icon={<FaHeart />}>
                                    <MenuItem>Guitar</MenuItem>
                                    <MenuItem>Bass</MenuItem>
                                    <MenuItem>Drums</MenuItem>
                                </SubMenu>
                                <SubMenu title="Amplification" icon={<FaHeart />}>
                                    <MenuItem>Guitar Amps</MenuItem>
                                    <MenuItem>Bass Amps</MenuItem>
                                    <MenuItem>Live Sound</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Electronics" icon={<FaGem />}>
                                <SubMenu title="Computers" icon={<FaHeart />}>
                                    <MenuItem>Desktops</MenuItem>
                                    <MenuItem>Laptops</MenuItem>
                                    <MenuItem>Monitors</MenuItem>
                                </SubMenu>
                                <SubMenu title="Entertainment" icon={<FaHeart />}>
                                    <MenuItem>Televisions</MenuItem>
                                    <MenuItem>Surround Sound</MenuItem>
                                    <MenuItem>Video Games</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Outdoors" icon={<FaGem />}>
                                <SubMenu title="Camping" icon={<FaHeart />}>
                                    <MenuItem>Tents</MenuItem>
                                    <MenuItem>Comfort</MenuItem>
                                    <MenuItem>Cooking</MenuItem>
                                </SubMenu>
                                <SubMenu title="Excersize" icon={<FaHeart />}>
                                    <MenuItem>Gym Equiptment</MenuItem>
                                    <MenuItem>Sports</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>
                                {
                                    AuthService.checkLogin() ?
                                        (
                                            <a onClick={() => {
                                                AuthService.logout();
                                            }} className='nav-item'>Logout</a>
                                        )
                                        :
                                        (
                                            <a href="/login" className='nav-item'>Log in</a>
                                        )

                                }
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
                <div className='spacer'></div>
            </div>
        </>
    );
};


export default BrowseSidebar;