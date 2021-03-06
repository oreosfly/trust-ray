const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const ERC20ContractScheme = new Schema({
    address :  {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    totalSupply: {
        type: String,
        required: true
    },
    decimals: {
        type: Number,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
});

// indices
ERC20ContractScheme.index({address: 1}, {name: "contractAddressIndex"});
ERC20ContractScheme.index({symbol: 1}, {name: "contractSymbolIndex"});
ERC20ContractScheme.index({name: 1}, {name: "contractNameIndex"});

ERC20ContractScheme.plugin(mongoosePaginate);

export const ERC20Contract = mongoose.model("ERC20Contract", ERC20ContractScheme);