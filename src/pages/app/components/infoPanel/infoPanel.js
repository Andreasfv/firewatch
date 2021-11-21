import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { typography } from '@mui/system';
import "./infoPanel.css"
import validateFireData from '../../../../scripts/validateData';

export default function InfoPanel(props) {
    let data = props.data;
    console.log(data)
    const [error, setError] = useState(false);
    const [stats, setStats] = useState(null)
    const makeStats = (data) => {
        if (!Array.isArray(data)){
            console.log("Supplied parameter is not an array!")
            setError("Supplied variable is not an array!")
        }


        Object.keys(arr[0])
    }

    if(error) return <div>{error}</div>
    return (
        <Box sx={{minWidth: 300}}>
            <Card variant="outlined">
                <>
                    <CardContent>
                        <Typography sx={{fontSize: 13 }} color="text.primary" gutterBottom>
                            {Array.isArray(data.data) ? data.data[0].area : "mordi"}
                        </Typography>
                    </CardContent>
                </>
            </Card>
        </Box>
    )
}