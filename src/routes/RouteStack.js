import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from '../components/HomePage';
import Add from '../components/AddPage';
import Detail from '../components/DetailPage';

const RouteStack = ({data, status, addData, editData}) =>{
  return(
    <Router>
      <Routes>
        <Route path={'/'} component={Home} element={<Home data={data} addData={addData} editData={editData}/>} />
        <Route path={'/home'} component={Home} element={<Home data={data} status={status} addData={addData} editData={editData}/>} />
        <Route path={'/add'} component={Add} element={<Add data={data} addData={addData}/>} />
        <Route path={'/detail/:id'} component={Detail} element={<Detail data={data} status={status} editData={editData}/>} />
      </Routes>
    </Router>
  ); 
}

export default RouteStack;