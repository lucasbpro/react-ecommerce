import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

//import Loading from '../../components/Loading';

import {URL_API} from "../../constants";
import Catalog from "../../containers/Catalog";
import ShoppingCart from "../../containers/ShoppingCart";
import SearchWindow from '../../containers/SearchWindow/SearchWindow';
import {updateProductList} from '../../actions';
import './Home.scss';

const Home = () => {

  const dispatch = useDispatch();
  const opacityOn = useSelector(state => state.visibilitySearch || state.visibilityCart);
  const [productList,setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // pulls data from API and updates global state
  useEffect(()=>{
        fetch(URL_API).then((response) => response.json()).then(setProductList);
  },[]);

  useEffect(() => {
    dispatch(updateProductList(productList))
    setIsLoading(false);
  },[dispatch, productList]);

  return (
    <div data-testid="home" className="home">
        {isLoading?  <h1>Carregando...</h1> : <Catalog opacityOn={opacityOn}/>}
    </div>
  );
};

export default Home;
