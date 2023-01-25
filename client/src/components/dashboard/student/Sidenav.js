import React from 'react'
import './static/sidenav.css'
import { Link } from 'react-router-dom'

export default function Sidenav() {
    return (
        <>
            <div className="sidenav_main_div bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 ">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                        <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                            alt="..." width="80vw" style={{ padding: '10px', objectFit: 'cover' }} />
                    </a>
                    <ul className="nav nav-pills flex-column align-items-center align-items-sm-start" id="menu">
                        <li>
                            <Link to="/students/dashboard" className="text-white selected nav-link align-middle mt-4 px-0">
                                <i className="navitem bi bi-speedometer2"></i> <span className="navitem ms-1 d-none d-sm-inline">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/students/courses" className="text-white nav-link px-0 align-middle">
                                <i className="navitem bi bi-journal-bookmark"></i> <span className="navitem ms-1 d-none d-sm-inline">Courses</span> </Link>
                        </li>
                        <li>
                            <Link to="/students/messages" className="text-white nav-link px-0 align-middle">
                                <i className="bi bi-chat-right-text navitem"></i> <span className="ms-1 d-none d-sm-inline navitem">Messages</span></Link>
                        </li>
                        <li >
                            <Link to="/students/instructors" className="text-white nav-link px-0 align-middle ">
                                <i className="navitem bi bi-person"></i> <span className="navitem ms-1 d-none d-sm-inline">Instructors</span></Link>
                        </li>
                        <li>
                            <a href="#" className="text-white nav-link px-0 align-middle">
                                <i className="navitem bi bi-gear"></i> <span className="navitem ms-1 d-none d-sm-inline ">Settings</span> </a>
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <a href="#" className="text-white nav-link px-0 align-middle">
                                <i className="navitem bi bi-box-arrow-left"></i> <span className="navitem ms-1 d-none d-sm-inline ">Log out</span> </a>
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
