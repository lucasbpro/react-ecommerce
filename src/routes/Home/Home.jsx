import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

/* commented this because code is not using API 
   instead, it is using mock data stored in the frontend app
 import {URL_API} from "../../constants"; */

import Catalog from "../../containers/Catalog";
import {updateProductList} from '../../actions';
import './Home.scss';

const Home = () => {

  const dispatch = useDispatch();
  const opacityOn = useSelector(state => state.isSearchOpen || state.isCartOpen);
  const [productList,setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // pulls data from API and updates global state
  useEffect(()=>{
         /* commented this because code is not using API. Instead, it is using mock data 
            stored in the frontend app.
        fetch(URL_API).then(response => response.json()).then((json)=>{
            if (json.length!==0 && json!=="No subscription") 
              setProductList(json)
        }).then(dispatch(updateProductList(productList)));  */

      const data = require('../../data/products.json');
      setProductList(data.products);
      dispatch(updateProductList(productList));
  },[dispatch,productList]);

  useEffect(() => setIsLoading(false),[productList]);

  return (
    <div data-testid="home" className="home">
        {isLoading? <h1 className="loading">Carregando...</h1> : 
            (productList.length!==0 && productList!=="No subscription")?
              <Catalog opacityOn={opacityOn}/> : <h1 className="loading">Nenhum item disponível :/</h1> 
        }
    </div>
  );
};

export default Home;
