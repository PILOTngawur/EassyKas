import React from 'react'
import Navbar from './navbar'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style/Sidebar.css';

// You can combine these imports into one line
import {
    faHome,
    faUsers,
    faSquarePen,
    faReceipt,
    faBook
} from '@fortawesome/free-solid-svg-icons'

function Sidebar({ children }) {
    const menuitem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: faHome,  // Just use the icon reference, not the component
        },
        {
            path: "/tabsiswa",
            name: "TabSiswa",
            icon: faUsers,
        },
        {
            path: "/catatkas",
            name: "Catatkas",
            icon: faSquarePen,
        },
        {
            path: "/pengeluarankas",
            name: "Pengeluarankas",
            icon: faReceipt,
        },
        {
            path: "/laporan",
            name: "Laporan",
            icon: faBook,
        },
    ]
    return (
        <div>
            <Navbar/>
            <div className="sidebar">
                {
                    menuitem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon"><FontAwesomeIcon icon={item.icon} /></div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar