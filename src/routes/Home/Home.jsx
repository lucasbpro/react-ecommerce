import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";

//import Loading from '../../components/Loading';

import {URL_API} from "../../constants";
import Catalog from "../../containers/Catalog";
import SearchWindow from '../../containers/SearchWindow/SearchWindow';
import {updateProductList} from '../../actions';
import './Home.scss';

const Home = () => {

  const dispatch = useDispatch();
  const [productList,setProductList] = useState([]);

  // pulls data from API and updates global state
  useEffect(()=>{
    fetch(URL_API).then((response) => response.json()).then(setProductList);
  },[productList]);

  useEffect(() => {
    dispatch(updateProductList(productList))
  });

  return (
    <div data-testid="home" className="home">
      <Catalog />
    </div>
  );
};

export default Home;
