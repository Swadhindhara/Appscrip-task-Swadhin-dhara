"use client"
import './Home.css'
import ProductCard from "./_components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import ProductList from './_components/ProductList/ProductList';

export default function Home() {

  const filters = [
    {
      id: 1,
      name: 'IDEAL FOR'
    },
    {
      id: 2,
      name: 'OCCASION'
    },
    {
      id: 3,
      name: 'WORK'
    },
    {
      id: 4,
      name: 'FABRIC'
    },
    {
      id: 5,
      name: 'SEGMENT'
    },
    {
      id: 6,
      name: 'SUITABLE FOR'
    },
    {
      id: 7,
      name: 'RAW MATERIALS'
    },
    {
      id: 8,
      name: 'PATTERNS'
    }
  ]

  const [filterActive, setFilterActive] = useState(false);

  const filterSection = () => {
    if (filterActive === true) {
      setFilterActive(false);
    } else {
      setFilterActive(true);
    }
  }

  const [filerActiveIndex, setFilterActiveIndex] = useState(0)

  const filterManage = (index) => {
    if (filerActiveIndex === index) {
      setFilterActiveIndex(null)
    } else {
      setFilterActiveIndex(index)
    }
  }

  const [mobileFilter, setMobileFilter] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobileFilter(true)
    }
  }, [window.innerWidth])

  const [mobileFilterPop, setMobileFilterPop] = useState(false)

  const mobileFilterHandle = () => {
    if (mobileFilterPop === true) {
      setMobileFilterPop(false)
      document.body.style.overflow = 'scroll'
    } else {
      setMobileFilterPop(true)
      document.body.style.overflow = 'hidden'
    }
  }

  const [products, setProducts] = useState ([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      
  }, [])




  return (
    <>
      {/* -------------------------- Section 1 -------------------------------- */}
      <div className="section1_container">
        <div className="container">
          <div className="section1">
            <h2>DISCOVER OUR PRODUCTS</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
        </div>
      </div>

      {/* -------------------------- Section 2 ----------------------------- */}
      <div className="section2_container">
        <div className="container">
          <div className="section2">
            <div className="top">
              {!mobileFilter ? (
                <div className="left">
                  <h3>3425 ITEMS</h3>
                  <div className="filter" onClick={() => filterSection()}>
                    <img className={`${filterActive ? 'active' : ''}`} src={'/arrow.png'} alt="" />
                    {filterActive ? <p>Show Filter</p> : <p>Hide Filter</p>}
                  </div>
                </div>
              ) : (
                <div className="left">
                  <h3 onClick={() => mobileFilterHandle()}>FILTERS</h3>
                </div>
              )}
              <div className="right">
                <div className="sort">
                  <h3>RECOMMENDED</h3>
                  <img src={'/arrow.png'} alt="" />
                </div>
              </div>
            </div>
            <div className={`bottom ${filterActive ? 'active' : ''}`}>
              <div className={`main ${mobileFilterPop ? 'active' : ''}`} onClick={() => mobileFilterHandle()}>
                <div className={`left mobile ${filterActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                  <img className='cross' src={'/cross.png'} alt="" onClick={() => mobileFilterHandle()} />
                  <div className="left_top">
                    <input className="styled-checkbox" id="customizable" type="checkbox" value="value1" />
                    <label className="customizable" htmlFor="customizable">CUSTOMIZABLE</label>
                  </div>
                  <div className="left_bottom">
                    {
                      filters.map((filter, index) => (
                        <div className="box" key={index}>
                          <div className={`box_top ${filerActiveIndex === index ? 'active' : ''}`} >
                            <div className="details" onClick={() => filterManage(index)}>
                              <h4>{filter.name}</h4>
                              <img src={'/arrow.png'} className={`${filerActiveIndex === index ? 'active' : ''}`} alt="" />
                            </div>
                            <p>All</p>
                          </div>
                          <div className={`box_bottom ${filerActiveIndex === index ? 'active' : ''}`}>
                            <div className="check">
                              <input
                                className="styled-checkbox"
                                id={`men-${index}`}
                                type="checkbox"
                                value="man"
                              />
                              <label className="men" htmlFor={`men-${index}`}>Men</label>
                            </div>
                            <div className="check">
                              <input
                                className="styled-checkbox"
                                id={`woman-${index}`}
                                type="checkbox"
                                value="woman"
                              />
                              <label className="woman" htmlFor={`woman-${index}`}>Women</label>
                            </div>
                            <div className="check">
                              <input
                                className="styled-checkbox"
                                id={`kids-${index}`}
                                type="checkbox"
                                value="kids"
                              />
                              <label className="kids" htmlFor={`kids-${index}`}>Baby & Kids</label>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className={`left ${filterActive ? 'active' : ''}`}>
                <div className="left_top">
                  <input className="styled-checkbox" id="customizable" type="checkbox" value="value1" />
                  <label className="customizable" htmlFor="customizable">CUSTOMIZABLE</label>
                </div>
                <div className="left_bottom">
                  {
                    filters.map((filter, index) => (
                      <div className="box" key={index}>
                        <div className={`box_top ${filerActiveIndex === index ? 'active' : ''}`} >
                          <div className="details" onClick={() => filterManage(index)}>
                            <h4>{filter.name}</h4>
                            <img src={'/arrow.png'} className={`${filerActiveIndex === index ? 'active' : ''}`} alt="" />
                          </div>
                          <p>All</p>
                        </div>
                        <div className={`box_bottom ${filerActiveIndex === index ? 'active' : ''}`}>
                          <div className="check">
                            <input
                              className="styled-checkbox"
                              id={`men-${index}`}
                              type="checkbox"
                              value="man"
                            />
                            <label className="men" htmlFor={`men-${index}`}>Men</label>
                          </div>
                          <div className="check">
                            <input
                              className="styled-checkbox"
                              id={`woman-${index}`}
                              type="checkbox"
                              value="woman"
                            />
                            <label className="woman" htmlFor={`woman-${index}`}>Women</label>
                          </div>
                          <div className="check">
                            <input
                              className="styled-checkbox"
                              id={`kids-${index}`}
                              type="checkbox"
                              value="kids"
                            />
                            <label className="kids" htmlFor={`kids-${index}`}>Baby & Kids</label>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className={`right ${filterActive ? 'active' : ''}`}>
                {
                  products.map((item, index) => (
                    <ProductCard key={index} filterActive={filterActive} item={item}/>
                  ))

                  // <ProductList />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
