import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import "./infoPanel.css"
import makeStats from '../../../../scripts/makeStats';
import { useEffect } from 'react';

export default function InfoPanel(props) {
    let data = props.data
    const [stats, setStats] = useState(null);
    const [loaded, setLoaded] = useState(false);


    useEffect(()=> {
        setStats(makeStats(data.data));
    }, [data])

    return (
        <Box sx={{minWidth: 300}}>
            <Card variant="outlined">
                <>
                    {
                        stats ? 
                            <CardContent>
                                <Typography >
                                    Average statistics over {data.data.length} fires
                                </Typography>
                                <Typography> 
                                    RH: {stats.avgRH}{" "}
                                    Wind: {stats.avgWind}{" "} 
                                    Temp: {stats.avgTemp}{" "}
                                    Area: {stats.avgArea}{" "} 
                                </Typography>
                                <Typography>
                                    Maximum values
                                </Typography>
                                <Typography>
                                    RH: {stats.maxRH}{" "}
                                    Wind: {stats.maxWind}{" "}
                                    Temp: {stats.maxTemp}{" "}
                                    Area: {stats.maxArea}{" "}
                                </Typography>
                                <Typography>
                                    Minimum Values
                                </Typography>
                                <Typography>
                                    RH: {stats.minRH}{" "}
                                    Wind: {stats.minWind}{" "}
                                    Temp: {stats.minTemp}{" "}
                                    Area: {stats.minArea}{" "}
                                </Typography>
                            </CardContent>
                        : "No stats loaded yet"
                    }
                </>
            </Card>
        </Box>
    )
}