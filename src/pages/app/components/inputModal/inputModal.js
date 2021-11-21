import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InputModal(props) {
    const [inputs, setInputs] = useState({
        X: "",
        Y: "",
        day: "",
        month: "",
        temp: "",
        RH: "",
        wind: "",
        rain: "",
        area: "",
    })
    const {open, handleClose} = props;

    const handleChange = event => {
        const value = event.target.value;
        setInputs({
            [event.target.name]: value,
        })
    }

  return (
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
        <Box sx={style}>
            <Box sx= {{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                component = "form"
                noValidate
                autoComplete="off"

            >
                <div>
                    <TextField
                        required
                        name="day"
                        id="dayInput"
                        size="small"
                        label="Day"
                        value={inputs.day}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        name="month"
                        id="monthInput"
                        size="small"
                        label="Month"
                        value={inputs.month}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        required
                        name="X"
                        id="xInput"
                        size="small"
                        label="X Coordinate"
                        value={inputs.X}
                        onChange={handleChange}
                        default
                    />
                    <TextField
                        required
                        name="Y"
                        id="yInput"
                        size="small"
                        label="Y Coordinate"
                        value={inputs.Y}
                        onChange={handleChange}
                    />
                    <TextField
                        name="temp"
                        required
                        id="tempInput"
                        size="small"
                        label="Temperature"
                        value={inputs.temp}
                        onChange={handleChange}
                    />  
                    <TextField
                        name="area"
                        required
                        id="areaInput"
                        size="small"
                        label="Area"
                        value={inputs.area}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="RHInput"
                        size="small"
                        label="Relative humidity"
                        value={inputs.RH}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="windInput"
                        size="small"
                        label="Wind"
                        value={inputs.wind}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="windInput"
                        size="small"
                        label="Rain"
                        value={inputs.rain}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button variant="outlined" onClick={handleClose}>Close</Button>
                    <Button variant="outlined" onClick={handleClose}>Submit</Button>

                </div>
            </Box>
        </Box>
      </Modal>
  );
} 