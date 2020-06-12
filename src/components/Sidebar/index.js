import React, { useState } from 'react'
import './style.css';
import Card from '../UI/Card';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [search,setSearch] = useState(false);

    const submitSearch = (e) =>{
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () =>{
        setSearch(true);
    }

    const searchClass= search?'searchinput active':'searchinput';

  return(
        <div className="container">
          
          <Card style={{padding:'18px 18px',boxSizing:"border-box",border:"2px solid #333",position:'relative'}}>
            
            <img onClick={openSearch} className="searchicon" src={require('../../assets/Searchicon.png')} alt="Search" /><br /><br />
            
            <img onClick={openSearch} className="searchicon" src={require('../../assets/filtericon.png')} alt="Search" />
            
            <div className="bottomContent">
              <img onClick={openSearch} className="searchicon" src={require('../../assets/Leftarrow.png')} alt="Search" />
            </div>
            
          </Card>
          
        </div>
    )
}

export default Sidebar