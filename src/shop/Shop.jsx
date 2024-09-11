import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults  = "Showing 01- 12 of 139 Results"
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import Popularpost from './Popularpost'
import Tags from './Tags'



const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products,setproducts] = useState(Data);


  const [currentpage, setCurrentpage] =  useState(1);
  const productsPerge = 12;

  const  indexOfLastproduct = currentpage * productsPerge;
  const indexOffirstproduct = indexOfLastproduct - productsPerge;
  const currentProducts = products.slice( indexOffirstproduct,indexOfLastproduct);
  

  const paginate = (pageNumber) => {
    setCurrentpage(pageNumber)
  }

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })
    setSelectedCategory(curcat);
    setproducts(newItem)
  }


  return (
    <div>
    <PageHeader title="Our Shop Page" curPage="Shop"/>

    <div className='shop-page padding-tb'>
      <div className='container'>
         <div className="row justify-content-center">
            <div className='col-lg-8 col-12'>
               <article>
                <div className='shop-title d-flex flex-warp justify-content-between'>
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive" }`}>
                    <a className='grid' onClick={()=> setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={()=> setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                  
                <div>
                    <ProductCards GridList={GridList} products={currentProducts}/>             
                </div>
                <Pagination 
                  productsPerge={productsPerge}
                   totaLproducts = {products.length}
                   paginate={paginate}
                   activePoge = {currentpage}
                />
               </article>
            </div>
            <div className='col-lg-4 col-12'>
               <aside>
                  <Search products={products} GridList={GridList}/>
                     <ShopCategory 
                     filterItem={filterItem}
                      setItem={setproducts}
                      menuItems={menuItems}
                      setproducts={setproducts}
                      selectedCategory={selectedCategory}
                     />
                     <Popularpost/>
                     <Tags/>
               </aside>
            </div>
          </div> 
      </div>
    </div>
       
    </div>
  )
}

export default Shop




