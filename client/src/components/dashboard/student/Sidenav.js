import React from 'react'
import './static/sidenav.css'


export default function Sidenav() {
    return (
        <>
            <div className="sidenav_main_div bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                            alt="..." width="80vw" style={{ padding: '10px', objectFit: 'cover' }} />
                    </a>
                    <ul className="nav nav-pills flex-column align-items-center align-items-sm-start" id="menu">
                        <li>
                            <a href="#" className="text-white nav-link align-middle mt-4 px-0">
                                <i className="navitem bi-speedometer2"></i> <span className="navitem ms-1 d-none d-sm-inline">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" className="text-white nav-link px-0 align-middle">
                                <i className="navitem bi-journal-bookmark"></i> <span className="navitem ms-1 d-none d-sm-inline">Courses</span> </a>
                            {/* <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="text-white nav-link py-2 px-0"> <span className="navitem d-none d-sm-inline">Item</span> 1 </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white nav-link py-2 px-0"> <span className="navitem d-none d-sm-inline">Item</span> 2 </a>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="#" className="text-white nav-link px-0 align-middle">
                                <i className="bi-chat-right-text navitem"></i> <span className="ms-1 d-none d-sm-inline navitem">Messages</span></a>
                        </li>
                        <li >
                            <a href="#submenu2" className="text-white nav-link px-0 align-middle ">
                                <i className="navitem bi-person"></i> <span className="navitem ms-1 d-none d-sm-inline">Instructors</span></a>
                            {/* <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="py-2 text-white nav-link px-0"> <span className="navitem d-none d-sm-inline">Item</span> 1</a>
                                </li>
                                <li>
                                    <a href="#" className="py-2 text-white nav-link px-0"> <span className="navitem d-none d-sm-inline">Item</span> 2</a>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <a href="#" className="text-white nav-link px-0 align-middle">
                                <i className="navitem bi-gear"></i> <span className="navitem ms-1 d-none d-sm-inline ">Settings</span> </a>
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <a href="#" className="text-white nav-link px-0 align-middle">
                                <i className="navitem bi-box-arrow-left"></i> <span className="navitem ms-1 d-none d-sm-inline ">Log out</span> </a>
                        </li>
                    </ul>
                    {/* <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                           
                            <span className="d-none d-sm-inline mx-1">loser</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    )
}
