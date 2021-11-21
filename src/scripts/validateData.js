import { isString } from "util";

const fireKeys = ["RH", "X", "Y", "area", "day", "month", "rain", "temp", "wind", "__typename", "_id"]
//EVT todo: add the valid ranges, although primary function I needed was to determine if vars had correct types.
const validateFireData = (data) => {
    //
    try {
        if(typeof data !== "object" && !Array.isArray(data)) throw new Error("Invalid variable type, not an object")
        if (data == undefined || data == null) throw new Error("Invalid variable type, not an object")

        let keys = Object.keys(data);
        if (keys == fireKeys) console.log("WAWI TRUE DOE")

        if (isNaN(data.RH)) throw new Error("RH is not a number")
        if (data.RH < 15 || data.RH >= 100) throw new Error("RH is invalid, must be between 15 and 100")

        if (isNaN(data.area) && data.area) throw new Error("area is not a number or invalid amount")
        if (data.area < 0 || data.area > 1090.84) throw new Error("area is invalid, number must be between 0 and 1090.84")

        if (Object.prototype.toString.call(data.day) == "[Object String]") throw new Error("day is not a string")
        if (Object.prototype.toString.call(data.month) == "[Object String]") throw new Error("day is not a string")

        if (isNaN(data.rain)) throw new Error("area is not a number")
        if (isNaN(data.temp)) throw new Error("temp is not a number")
        if (isNaN(data.wind)) throw new Error("wind is not a number")

        if(!Number.isInteger(data.X)) throw new Error("X is not an integer")
        if(!Number.isInteger(data.Y)) throw new Error("Y is not an integer")
    } catch (error) {
        return error
    }
    
    return true;
}

export default validateFireData;
