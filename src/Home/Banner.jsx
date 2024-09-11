// import React from 'react'
import React, { useState } from 'react'
import productData from "/src/products.json"
import { Link} from 'react-router-dom';
import SeletedCategory from '../components/SeletedCategory';
const title = (
  <h2>Search Your One from <span>Thoussand</span> of products</h2>
  
)
 
const desc = "We have the largest collection of products"
 

const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredproducts, setfilteredproducts] = useState(productData);
  const handleSearch = e => {
    const searchInput = e.target.value
    setSearchInput(searchInput);
    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));
    setfilteredproducts(filtered)
  }
  return (
  <div className='banner-section style-4'>
    <div className='container'>
      <div className='banner-content'>
      {title}
      <form>
        <SeletedCategory/>
          <input type="text" name="search" id="search" placeholder='Search your product' value={searchInput} onChange={handleSearch}/>
            <button type='submit'>
              <i className='icofont-search'></i>
            </button>
        </form>
        <p>{desc}</p>
        <ul className='lab-ul'>
          {
            searchInput && filteredproducts.map((product,i) => (
              <li key={i}>
                <Link to={`/shop/${product.id}`}>{product.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
        
    </div>
  </div>
  )
}

export default Banner 