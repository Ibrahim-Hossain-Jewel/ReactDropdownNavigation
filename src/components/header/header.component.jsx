import React from "react";
import { Link, NavLink } from "react-router-dom";
import './header.styles.scss';
import Dropdown from "../dropdown/dropdown.component";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allobj: props,
            location: [
                {
                    id: 0,
                    title: ' Advisory & Consulting',
                    selected: false,
                    key: 'location',
                    path: 'advisory',
                    cName: 'advisoryconsulting'
                },
                {
                  id: 1,
                  title: ' Cloud Services',
                  selected: false,
                  key: 'location',
                  path: 'cloudservices',
                  cName: 'cloudservices'
                },
                {
                  id: 2,
                  title: 'Contact Centers',
                  selected: false,
                  key: 'location',
                  path: 'contactcenters',
                  cName: 'contactcenters'
                },
                {
                  id: 3,
                  title: 'Customer Experience',
                  selected: false,
                  key: 'location',
                  path: "customerexperience",
                  cName: "customerexperience"
                },
                {
                  id: 4,
                  title: 'Data Analytics',
                  selected: false,
                  key: 'location',
                  path: 'dataanalytics',
                  cName: 'dataanalytics'
                },
                {
                  id: 5,
                  title: 'Data Center',
                  selected: false,
                  key: 'location',
                  path: 'dataCenter',
                  cName: 'datacenter'
                }
            ]
        };

    }
    render(){
        console.log("Your passed props are below!");
        return(
            <div className="header"> 
                <div className="options">
                    <div className="gridContainer">
                        <div className="logoSection">Logo</div>
                        <div className="menuSection">
                            <ul className="menu-row">
                                <li className="menu1">
                                    <Dropdown title = "Solutions" list = {this.state.location} />
                                </li>
                                <li className="menu2">
                                    <NavLink to = '/industries' style={{textDecoration: 'none'}} activeClassName = "current">
                                        <li>Industries</li>
                                    </NavLink>
                                </li>
                                <li className="menu3">
                                    <NavLink to = '/discover' style={{textDecoration: 'none'}} activeClassName = "current">
                                        <li>Discover</li>
                                    </NavLink>
                                </li>
                                <li className="menu4">
                                    <NavLink to = '/aboutUs' style={{textDecoration: 'none'}} activeClassName="current">
                                        <li>About Us</li>
                                    </NavLink>
                                </li>
                                <li className="menu5">
                                    <NavLink to = '/careers' style={{textDecoration: 'none'}} activeClassName="current">
                                        <li>Careers</li>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="otherPropsSection">Hello world </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default Header;