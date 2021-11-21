import validateFireData from "./validateData"

const makeStats = (data) => {

    console.log("firedoff", data)

    let stats = {
        avgRH: 0,
        avgArea: 0,
        avgWind: 0,
        avgTemp: 0,
        maxRH: null,
        minRH: null,
        maxWind: null,
        minWind: null,
        maxArea: null,
        minArea: null, 
        maxTemp: null,
        minTemp: null,
    }

    if (!Array.isArray(data)){
        console.log("error in makeStats")
        return false;
    }

    for (const fire of data) {
        if(validateFireData(fire)){
            stats.avgRH += fire.RH;
            stats.avgArea += fire.area;
            stats.avgWind += fire.wind;
            stats.avgTemp += fire.temp;
            if(fire.RH > stats.maxRH || stats.maxRH == null) stats.maxRH = fire.RH;
            if(fire.RH < stats.minRH || stats.minRH == null) stats.minRH = fire.RH
            if(fire.area > stats.maxArea || stats.maxArea == null) stats.maxArea = fire.area;
            if(fire.area < stats.minArea || stats.minArea == null) stats.minArea = fire.area;
            if(fire.wind > stats.maxWind || stats.maxWind == null) stats.maxWind = fire.wind;
            if(fire.wind < stats.minWind || stats.minWind == null) stats.minWind = fire.wind;
            if(fire.temp > stats.maxTemp || stats.maxTemp == null) stats.maxTemp = fire.temp;
            if(fire.temp < stats.minTemp || stats.minTemp == null) stats.minTemp = fire.temp;
        } else {
            continue;
        }

    }

    stats.avgRH = (stats.avgRH / data.length).toFixed(2);
    stats.avgArea = (stats.avgArea / data.length).toFixed(2);
    stats.avgWind = (stats.avgWind / data.length).toFixed(2);
    stats.avgTemp = (stats.avgTemp / data.length).toFixed(2);

    console.log(stats)
    return stats;
}

export default makeStats;