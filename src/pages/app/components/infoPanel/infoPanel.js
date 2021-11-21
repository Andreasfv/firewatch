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
import makeStats from '../../../../scripts/makeStats';
import { useEffect } from 'react';

export default function InfoPanel(props) {
    let data = props.data.data
    const [error, setError] = useState(false);
    const [stats, setStats] = useState(null)

    useEffect(()=> {
        if(validateFireData(data)) console.log(makeStats(data, setError))
    },)

    return (
        <Box sx={{minWidth: 300}}>
            <Card variant="outlined">
                <>
                    <CardContent>
                        <Typography sx={{fontSize: 13 }} color="text.primary" gutterBottom>
                            {error ? error : Array.isArray(data) ? data[0].area : "mordi"}
                        </Typography>
                    </CardContent>
                </>
            </Card>
        </Box>
    )
}