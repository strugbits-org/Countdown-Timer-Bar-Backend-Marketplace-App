const mongoose = require('mongoose');

const timerSchema = mongoose.Schema({
    //timer data
    name: {
        type: String,
        required: true
    },

    messageBeforeTimer: {
        type: String
    },

    messageAfterTimer: {
        type: String
    },

    linkUrl: {
        type: String
    },

    barClickable: {
        type: String
    },

    buttonText: {
        type: String
    },

    newTab: {
        type: Boolean
    },

    closeButton: {
        type: String
    },

    timer: {
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    },



    //style schema for a current timer
    styleSchema: {
        backgroundColor: {
            type: String
        },

        buttonBackgroundColor: {
            type: String
        },

        timerBackgroundColor: {
            type: String
        },

        textColor: {
            type: String
        },

        buttonTextColor: {
            type: String
        },

        timerDigitColor: {
            type: String
        },

        backgroundColorOpacity: {
            type: String
        },

        backgroundImage: {
            type: String
        },

        buttonAnimation: {
            type: String
        },

        fonts: {
            type: String
        },

        language: {
            type: String
        },

        fontSize: {
            type: String
            // type: Number
        },

        barPadding: {
            type: String
            // type: Number
        },

        secondsDisplay: {
            type: String
            // type: Number
        },

        intervalSeconds: {
            type: String
            // type: Number
        },

        animateSeconds: {
            type: String
            // type: Number
        },

    },


    //Target schema for a timer
    targetSchema: {
        customerTargeting: {
            type: String
        },

        // geoLocation: {
            targetLocations: {
                type: String
            },
            excludedLocations: {
                type: String
            }
        // },
    },



})

const timer = mongoose.model("TimerSchema", timerSchema)
module.exports = timer