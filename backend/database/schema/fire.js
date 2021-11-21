const mongoose = require('mongoose');

export const fireSchema = new mongoose.Schema({
    X: {
        type: Number,
        required: true,
    },
    Y: {
        type: Number,
        required: true,
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
        required: true
    },
    RH: {
        type: Number,
        required: true
    },
    wind: {
        type: Number,
        required: true
    },
    rain: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    }
})