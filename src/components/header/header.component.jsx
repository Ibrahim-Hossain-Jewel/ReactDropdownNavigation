import React from "react";
import { NavLink } from "react-router-dom";
import './header.styles.scss';
import Dropdown from "../dropdown/dropdown.component";
import CollectionItem from '../services-collections/service-collection.component';
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
                                <div className="menu1">
                                    <Dropdown title = "Solutions" list = {this.state.location} />
                                </div>
                                <div className="menu2">
                                    <li>Industries</li>
                                </div>
                                <div className="menu3">
                                    <li>Discover</li>
                                </div>
                                <div className="menu4">
                                    <li>About Us</li>
                                </div>
                                <div className="menu5">
                                    <li>Careers</li>
                                </div>
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