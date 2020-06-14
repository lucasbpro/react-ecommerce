import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

//import Loading from '../../components/Loading';

import {URL_API} from "../../constants";
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
        fetch(URL_API).then((response) => response.json()).then(
                setProductList).then(dispatch(updateProductList(productList)));
        },[dispatch,productList]);

  useEffect(() => setIsLoading(false),[productList]);

  return (
    <div data-testid="home" className="home">
        {(isLoading || productList.length===0)?  
              <h1 className="loading">Carregando...</h1> : 
              <Catalog opacityOn={opacityOn}/>
        }
    </div>
  );
};

export default Home;
