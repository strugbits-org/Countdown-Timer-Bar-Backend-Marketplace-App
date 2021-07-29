const mongoose = require('mongoose');
//schema for saving Instance Id
const instanceId = mongoose.Schema({
    instanceKey: {
        type: String
    }
})

const instance_Key = mongoose.model('InstanceSchemsa', instanceId);
module.exports = instance_Key