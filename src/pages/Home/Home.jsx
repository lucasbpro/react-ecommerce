import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";

//import Loading from '../../components/Loading';

import Catalog from "../../containers/Catalog"
import {URL_API} from "../../constants";

import './Home.scss';

const Home = () => {

  const dispatch = useDispatch();
  const [productList,setProductList] = useState([]);

  // pulls data from API
  useEffect(()=>{
    fetch(URL_API).then((response) => response.json()).then(setProductList);
  },[productList]);

  // updates global state
  useEffect(()=>{
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: { productList } })
  },[dispatch, productList]);

  return (
    <div data-testid="home" className="home">
      <Catalog />
    </div>
  );
};

export default Home;
