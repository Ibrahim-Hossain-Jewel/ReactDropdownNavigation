import React from "react";
import {FaAngleRight } from 'react-icons/fa';
import './dropdown.styles.scss';


class Dropdown extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
        
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
          <div className="dd-wrapper" >
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className = "dd-header-title">
                    {headerTitle}
                </div>
            </div>
                <div className="wholeSolutions">
                  <div className="dropdownleft">
                  {listOpen && <ul className="dd-list solution">
                  {list.map((item) => (
                      <ul className="list-container" key={item.id} >
                              <div className={item.cName} key={item.id} >
                                {item.title} 
                                <span className="dropDownRightArrow"> <FaAngleRight /> </span> 
                              </div>
                        </ul>
                      ))}
                    </ul>}

                  </div> {/*Dropdown left end div*/}
                  
                </div> {/*wholeSolutions end div*/}
          </div>
        )
      }
}
export default Dropdown;
