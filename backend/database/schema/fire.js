const mongoose = require('mongoose');

export const fireSchema = new mongoose.Schema({
    x: {
        type: Number,
        required: true,
    },
    y: {
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
    ffmc: {
        type: {
            type: Number,
            required: true,
        },
    dmc: {
        type: Number,
        required: true
    },
    dc: {
        type: Number,
        required: true
    },
    isi: {
        type: Number,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    rh: {
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

    }
})