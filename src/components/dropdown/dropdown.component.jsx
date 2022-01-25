import React from "react";
import { Link,NavLink } from "react-router-dom";
import {FaAngleRight } from 'react-icons/fa';
import './dropdown.styles.scss';
import collectionItem from '../services-collections/service-collection.component';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
      }
      
      handleClickOutside(){
        this.setState({
          listOpen: false
        })
      }
      toggleList(){
        this.setState(prevState => ({
          listOpen: !prevState.listOpen
        }))
      }

      render(){
        const{list} = this.props;
        const{listOpen, headerTitle} = this.state;
        return(
          <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className = "dd-header-title">
                    {headerTitle}
                </div>
            </div>
                {listOpen && <ul className="dd-list solution">
                {list.map((item) => (
                    <ul className="list-container" key={item.id}>
                          <NavLink to={item.path} className={item.cName} activeClassName="is-active">
                            <li className={item.cName} key={item.id}>
                              {item.title}
                              <span className="dropDownRightArrow"> <FaAngleRight /> </span> 
                            </li>
                            <collectionItem />
                          </NavLink>
                      </ul>
                    ))}
                  </ul>}
            
          </div>
        )
      }
}
export default Dropdown;
