import * as React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { DataGrid } from '@mui/x-data-grid';

import { useNavigate, Link } from "react-router-dom";

const HomePage = ({data, status, addData, editData}) =>{
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const header = [
    {field: 'productID', headerName: 'Product ID', flex: 1, width: 120},
    {field: 'productName', headerName: 'Product Name', flex: 1, width: 120},
    {field: 'customerName', headerName: 'Customer Name', flex: 1, width: 120},
    {field: 'amount', headerName: 'Amount', flex: 1, width: 120},
    {field: 'transactionDate', headerName: 'Transaction Date', flex: 1, width: 120},
    {
      field: 'action',
      headerName: 'Action',
      fleX: 1, 
      width: 120,
      renderCell: (params) => {
        return <Link
          to={{
            pathname: "/detail/" + params.id
          }}
        >
          <Button variant="contained">Detail</Button>
        </Link>
      }
    }
  ];
  
  return (
    <div align="center" style={{marginTop: "0px"}}>
      <div>
        <h1>DATA TABLE</h1>
      </div>

      <Container maxWidth="lg">
        <Box sx={{ '& > :not(style)': { m: 1 } }} align="right">
          <Fab color="primary" aria-label="add" variant="extended" style={{marginBottom: "15px"}} onClick={() => navigate('/add')}>
            <AddIcon sx={{ mr: 1 }} />
            Add Data
          </Fab>
        </Box>

        <Box sx={{ height: '600px'}}>
          <DataGrid 
            columns = {header} 
            rows = {data} 
            initialState={{
              sorting: {
                sortModel: [{ field: 'transactionDate', sort: 'desc' }],
              },
            }}
          />
        </Box>
      </Container>
    </div>
  );
}

export default HomePage;