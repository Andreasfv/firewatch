import validateFireData from "./validateData"

const makeStats = (data, setError) => {
    let stats = {
        avgRH: 0,
        avgArea: 0,
        avgWind: 0,
        avgTemp: 0,
        maxRH: null,
        maxWind: null,
        maxarea: null,
        maxTemp: null,

    }

    if (!Array.isArray(data)){
        setError("Supplied variable is not an array!")
        return;
    } else {
        setError(false);
    }

    for (const fire of data) {
        if(validateFireData(data)){
            stats.avgRH += data.RH;
            stats.avgArea += data.area;
            stats.avgWind += data.wind;
            stats.avgTemp += data.temp
            if(data.RH > stats.maxRH || stats.maxRH == null) stats.maxRH = data.RH

        }
    }
    return stats;
}

export default makeStats;