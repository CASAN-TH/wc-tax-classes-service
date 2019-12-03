'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaxclassesSchema = new Schema({

    slug: {
        type: String,
    },
    name: {
        type: String,
        required: 'Please fill a Taxclasses name',
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});

mongoose.model("Taxclasses", TaxclassesSchema);