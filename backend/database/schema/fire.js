const mongoose = require('mongoose');

export const fireSchema = new mongoose.Schema({
    X: {
        type: Number,
        required: true,
        min: 1,
        max: 9,
    },
    Y: {
        type: Number,
        required: true,
        min: 1,
        max: 9
    },
    month: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    FFMC: {
        type: {
            type: Number,
            required: false,
        },
    },
    DMC: {
        type: Number,
        required: false
    },
    DC: {
        type: Number,
        required: false
    },
    ISI: {
        type: Number,
        required: false
    },
    temp: {
        type: Number,
        required: true,
        min: 2.2,
        max: 33.3
    },
    RH: {
        type: Number,
        required: true,
        min: 15,
        max: 100,
    },
    wind: {
        type: Number,
        required: true,
        min: 0.4,
        max: 9.4
    },
    rain: {
        type: Number,
        required: true,
        min: 0,
        max: 6.4
    },
    area: {
        type: Number,
        required: true,
        min: 0,
        max: 1090.84
    }
})