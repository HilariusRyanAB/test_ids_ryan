import React from 'react';
import RouteStack from './routes/RouteStack';

import ViewData from './viewData.json';

const App = () =>{
  const {data, status} = ViewData;
  const [dataList, setDataList] = React.useState(data);
  const [statusList, setStatusList] = React.useState(status);

  const addDataList = React.useCallback((list) => {
    setDataList([...dataList, list]);
  }, [dataList]);

  const editDataList = (list, id) => {
    const editData = dataList.map((listData) =>{
      if(listData.id === id)
      {
        listData = list;
        return listData;
      }
      else
      {
        return listData;
      }
    });
    setDataList(editData);
  };

  return(
    <RouteStack data={dataList} status={statusList} addData={addDataList} editData={editDataList} />
  ); 
}

export default App;