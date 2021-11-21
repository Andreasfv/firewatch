import { isString } from "util";

const fireKeys = ["RH", "X", "Y", "area", "day", "month", "rain", "temp", "wind", "__typename", "_id"]
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
//validator for the data entries
const validateFireData = (data) => {
    //
    try {
        if(typeof data !== "object" && !Array.isArray(data)) throw new Error("Invalid variable type, not an object")
        if (data == undefined || data == null) throw new Error("Invalid variable type, not an object")

        for (let key of Object.keys(data)){
            if(!fireKeys.includes(key) && key == " ") throw new Error(`${key} is an invalid object key`)
        }
        if (isNaN(data.RH)) throw new Error("RH is not a number")
        if (data.RH < 15 || data.RH >= 100) throw new Error("RH is invalid, must be between 15 and 100")

        if (isNaN(data.area) && data.area) throw new Error("area is not a number or invalid amount")
        if (data.area < 0 || data.area > 1090.84) throw new Error("area is invalid, number must be between 0 and 1090.84")

        if (Object.prototype.toString.call(data.day) == "[Object String]") throw new Error("day is not a string")
        if (!days.includes(data.day)) throw new Error("Day has to be a 3 string version of weekdays in english, ie: 'mon', input: ", data.day)
        if (Object.prototype.toString.call(data.month) == "[Object String]") throw new Error("day is not a string")
        if (!months.includes(data.month)) throw new Error("Month has to be a valid month with 3string notation, ie: 'jan', input: ", data.month)

        if (isNaN(data.rain)) throw new Error("area is not a number")
        if(data.rain < 0.0 || data.rain > 6.4) throw new Error("Rain is an invalid amount, valid is between 0.0 and 6.4")
        if (isNaN(data.temp)) throw new Error("temp is not a number")
        if(data.temp < 2.2 || data.temp > 33.30) throw new Error("Temperature is an invalid amount, valid is between 0.4 and 33.3")
        if (isNaN(data.wind)) throw new Error("wind is not a number")
        if(data.wind < 0.40 || data.wind > 9.4) throw new Error("Wind is an invalid amount, 0.4 to 9.4 is valid")

        if(!Number.isInteger(data.X)) throw new Error("X is not an integer")
        if(data.X < 1 || data.X > 9) throw new Error("X has to be a integer between 1 and 9")
        if(!Number.isInteger(data.Y)) throw new Error("Y is not an integer")
        if(data.Y < 1 || data.Y > 9) throw new Error("Y has to be an integer between 1 and 9")

    } catch (error) {
        console.log(error);
        return {
                value: false,
                error: error
                };
    }
    
    return {
            value: true,
            error: null,
            }
}

export default validateFireData;
