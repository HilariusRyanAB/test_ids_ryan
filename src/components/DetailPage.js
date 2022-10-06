import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { useNavigate, useParams } from "react-router-dom";

import Moment from 'moment';

const DetailPage = ({data, status, editData}) =>{
    const navigate = useNavigate();
    const params = useParams();
    const jsonData = data.find(e => e.id == params.id);
    const dataStatus = status.find(e => e.id == jsonData.status);
    const tDate = Moment(new Date(jsonData.transactionDate)).format('YYYY-MM-DD HH:MM:SS');
    const cOn = Moment(new Date(jsonData.createOn)).format('YYYY-MM-DD HH:MM:SS');

    const [values, setValues] = React.useState({
        id: jsonData.id,
        productID: jsonData.productID,
        productName: jsonData.productName,
        amount: jsonData.amount,
        customerName: jsonData.customerName,
        transactionDate: tDate.toString(),
        createBy: jsonData.createBy,
        createOn: cOn.toString(),
        status: jsonData.status,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div align="center" style={{marginTop: "0px"}}>
            <div>
                <h1>DETAIL DATA</h1>
            </div>

            <Container maxWidth="sm" align="center">
                <Box sx={{width: '60ch'}} align="center">
                    <div align="center">
                        <div>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    label="ID"
                                    id="outlined-start-adornment"
                                    value={values.id}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ m: 1}}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
                                <TextField
                                    required
                                    label="Product ID"
                                    id="outlined-start-adornment"
                                    value={values.productID}
                                    onChange={handleChange('productID')}
                                    sx={{ m: 1, width: '28ch' }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
                                <TextField
                                    required
                                    label="Product Name"
                                    id="outlined-start-adornment"
                                    value={values.productName}
                                    onChange={handleChange('productName')}
                                    sx={{ m: 1, width: '28ch' }}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
                                <TextField
                                    required
                                    label="Customer Name"
                                    id="outlined-start-adornment"
                                    value={values.customerName}
                                    onChange={handleChange('customerName')}
                                    sx={{ m: 1, width: '28ch' }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
                                <TextField
                                    label="Create By"
                                    id="outlined-start-adornment"
                                    value={values.transactionDate}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ m: 1, width: '28ch' }}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    required
                                    label="Amount"
                                    id="outlined-start-adornment"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    sx={{ m: 1}}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
                                <TextField
                                    label="Create By"
                                    id="outlined-start-adornment"
                                    value={values.createBy}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ m: 1, width: '28ch' }}
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
                                <TextField
                                    label="Create By"
                                    id="outlined-start-adornment"
                                    value={values.createOn}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ m: 1, width: '28ch' }}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    required
                                    label="Status"
                                    id="outlined-start-adornment"
                                    value={dataStatus.name}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    sx={{ m: 1}}
                                />
                            </FormControl>
                        </div>
                        
                        <div align="center" style={{marginTop: '15px'}}>
                            <Button variant="contained" color="error" sx={{ m: 1, width: '28ch' }} onClick={() => navigate('/')}>Back</Button>
                            <Button 
                                variant="contained" 
                                color="success" 
                                sx={{ m: 1, width: '28ch' }} 
                                onClick={() => {editData(values, values.id); navigate('/')}}
                            >
                                Edit
                            </Button>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default DetailPage;