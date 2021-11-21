import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useMutation } from '@apollo/client';
import { CREATE_FIRE } from '../../../../scripts/queries';
import validateFireData from '../../../../scripts/validateData';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const inputVals = {
    X: "",
    Y: "",
    day: "",
    month: "",
    temp: "",
    RH: "",
    wind: "",
    rain: "",
    area: "",
}
export default function InputModal(props) {
    const [error, setError] = useState(false);
    const [inputs, setInputs] = useState(inputVals)
    const [createFire, {data, loading, queryError}] = useMutation(CREATE_FIRE)
    const { open, handleClose } = props;

    const handleChange = event => {
        const value = event.target.value;
        setInputs({
            ...inputs,
            [event.target.name]: value,
        })
        console.log(inputs)
    }

    const handleSubmit = () => {
        console.log(inputs)
        if (validateFireData(inputs).value == false) {
            console.log(error.error)
            setError(validateFireData(inputs))
            return;
        }
        let data = inputs;
        data.wind = Number(data.wind)
        data.rain = Number(data.wind)
        data.RH = Number(data.RH);
        data.area = Number(data.area)
        data.temp = Number(data.temp);
        setInputs(inputVals)
        createFire({variables: inputs}).then(() => {
            handleClose();
        });

    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="daySelect">Day</InputLabel>
                        <Select
                            labelId="daySelect"
                            id="daySelect"
                            value={inputs.day}
                            label="Day"
                            name="day"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem selected value={"mon"}>Monday</MenuItem>
                            <MenuItem value={"tue"}>Tuesday</MenuItem>
                            <MenuItem value={"wed"}>Wednesday</MenuItem>
                            <MenuItem value={"thu"}>Thursday</MenuItem>
                            <MenuItem value={"fri"}>Friday</MenuItem>
                            <MenuItem value={"sat"}>Saturday</MenuItem>
                            <MenuItem value={"sun"}>Sunday</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="monthSelect">Month</InputLabel>
                        <Select
                            labelId="monthSelect"
                            id="monthSelect"
                            value={inputs.month}
                            label="Month"
                            name="month"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem selected value={"jan"}>January</MenuItem>
                            <MenuItem value={"feb"}>February</MenuItem>
                            <MenuItem value={"mar"}>Mars</MenuItem>
                            <MenuItem value={"apr"}>April</MenuItem>
                            <MenuItem value={"may"}>May</MenuItem>
                            <MenuItem value={"jun"}>Juni</MenuItem>
                            <MenuItem value={"jul"}>Juli</MenuItem>
                            <MenuItem value={"aug"}>August</MenuItem>
                            <MenuItem value={"sep"}>September</MenuItem>
                            <MenuItem value={"oct"}>October</MenuItem>
                            <MenuItem value={"nov"}>November</MenuItem>
                            <MenuItem value={"dec"}>December</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="XSelect">X Coordinate</InputLabel>
                        <Select
                            labelId="XSelect"
                            id="xSelect"
                            value={inputs.X}
                            label="X Coordinate"
                            name="X"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem selected value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="XSelect">Y Coordinate</InputLabel>
                        <Select
                            labelId="XSelect"
                            id="xSelect"
                            value={inputs.Y}
                            label="Y Coordinate"
                            name="Y"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem selected value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                    <div>
                        <TextField
                            name="temp"
                            required
                            id="tempInput"
                            size="small"
                            label="Temperature 2.2 - 33.3"
                            value={inputs.temp}
                            onChange={handleChange}
                        />
                        <TextField
                            name="area"
                            required
                            id="areaInput"
                            size="small"
                            label="Area 0 - 1090.84"
                            value={inputs.area}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id="RHInput"
                            size="small"
                            label="Relative humidity 15 - 100"
                            name="RH"
                            value={inputs.RH}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="windInput"
                            size="small"
                            label="Wind 0.4 - 9.4"
                            name="wind"
                            value={inputs.wind}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="windInput"
                            size="small"
                            label="Rain 0 - 6.4"
                            name="rain"
                            value={inputs.rain}
                            onChange={handleChange}
                        />
                    </div>
                    <div> 
                        <Typography>
                            {`${error.error}`}
                        </Typography>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                    </div>
                </Box>
            </Box>
        </Modal>
    );
}