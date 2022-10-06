import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { useNavigate } from "react-router-dom";

import Moment from 'moment';

const AddPage = ({data, addData}) =>{
    const navigate = useNavigate();
    const dateNow = Moment(new Date()).format('YYYY-MM-DD HH:MM:SS');
    const [values, setValues] = React.useState({
        id: parseInt(data[parseInt(data.length)-1].id) + 1,
        productID: '',
        productName: '',
        amount: '',
        customerName: '',
        status: '0',
        transactionDate: dateNow.toString(),
        createBy: 'abc',
        createOn: dateNow.toString(),
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div align="center" style={{marginTop: "0px"}}>
            <div>
                <h1>ADD DATA</h1>
            </div>

            <Container maxWidth="sm" align="center">
                <Box sx={{width: '60ch'}} align="center">
                    <div align="center">
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
                                <div style={{marginTop: '1ch', marginLeft: '1ch', width: '28ch'}}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Transaction Date"
                                            value={values.transactionDate}
                                            onChange={handleChange('transactionDate')}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
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
                        
                        <div align="center" style={{marginTop: '15px'}}>
                            <Button variant="contained" color="error" sx={{ m: 1, width: '28ch' }} onClick={() => navigate('/')}>Cancel</Button>
                            <Button 
                                variant="contained" 
                                color="success" 
                                sx={{ m: 1, width: '28ch' }} 
                                onClick={() => {addData(values); navigate('/')}}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default AddPage;