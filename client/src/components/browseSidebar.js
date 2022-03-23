import React from "react";

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

import { FaGem, FaHeart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";


import "react-pro-sidebar/dist/css/styles.css";
import "./pages/profile/css/sidebar.css";




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
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('sports-cards')} /> Sports</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('pokemon-cards')} /> Pokemon</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('magic-cards')} />Magic the Gathering</MenuItem>
                                </SubMenu>
                                <SubMenu title="Toys" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('action-figures')} />Action Figures</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('plushies')} />Plushies</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('games')} />Games</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Clothing" icon={<FaGem />}>
                                <SubMenu title="Outerwear" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('jackets')} />Jackets</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('shoes')} />Shoes</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('pants')} />Pants</MenuItem>
                                </SubMenu>
                                <SubMenu title="Underwear" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('panties')} />Panties</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('bras')} />Bras</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('socks')} />Socks</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Music" icon={<FaGem />}>
                                <SubMenu title="Instruments" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('guitar')} />Guitar</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('bass')} />Bass</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('drums')} />Drums</MenuItem>
                                </SubMenu>
                                <SubMenu title="Amplification" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('guitar-amps')} />Guitar Amps</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('bass-amps')} />Bass Amps</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('live-sound')} />Live Sound</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Electronics" icon={<FaGem />}>
                                <SubMenu title="Computers" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('desktops')} />Desktops</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('laptops')} />Laptops</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('monitors')} />Monitors</MenuItem>
                                </SubMenu>
                                <SubMenu title="Entertainment" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('televisions')} />Televisions</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('surround-sound')} />Surround Sound</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('video-games')} />Video Games</MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                        <Menu iconShape="square">
                            <SubMenu title="Outdoors" icon={<FaGem />}>
                                <SubMenu title="Camping" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('tents')} />Tents</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('comfort')} />Comfort</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('cooking')} />Cooking</MenuItem>
                                </SubMenu>
                                <SubMenu title="Excersize" icon={<FaHeart />}>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('gym-equip')} />Gym Equiptment</MenuItem>
                                    <MenuItem>
                                        <a onClick={() => setCurrentFilter('sports')} />Sports</MenuItem>
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
                                            }} className='pro-item-content text-black'>Logout</a>
                                        )
                                        :
                                        (
                                            <a href="/login" className='pro-item-content text-black'>Log in</a>
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