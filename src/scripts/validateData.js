import { isString } from "util";

const fireKeys = ["RH", "X", "Y", "area", "day", "month", "rain", "temp", "wind", "__typename", "_id"]
const validateFireData = (data) => {
    //Uh det ble janky, men w/e, dårlig med tid.
    try {
        if(typeof data !== "object" && !Array.isArray(data)) throw new Error("Invalid variable type, not an object")
        if (data == undefined || data == null) throw new Error("Invalid variable type, not an object")
        let keys = Object.keys(data);
        /*
        for (let key of keys){
            if(!fireKeys.includes(key)) throw new Error("Invalid Keys in object!" + key + Object.keys(data))
        }*/
        if (keys == fireKeys) console.log("WAWI TRUE DOE")
        if (isNaN(data.RH)) throw new Error("RH is not a number")
        if (isNaN(data.area)) throw new Error("area is not a number")
        if (Object.prototype.toString.call(data.day) == "[Object String]") throw new Error("day is not a string")
        if (Object.prototype.toString.call(data.month) == "[Object String]") throw new Error("day is not a string")
        if (isNaN(data.rain)) throw new Error("area is not a number")
        if (isNaN(data.temp)) throw new Error("area is not a number")
        if (isNaN(data.wind)) throw new Error("area is not a number")
        if(!Number.isInteger(data.X)) throw new Error("X is not an integer")
        if(!Number.isInteger(data.Y)) throw new Error("Y is not an integer")
    } catch (error) {
        return error
    }
    
    return true;
}

export default validateFireData;
