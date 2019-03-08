const axios = require('axios');
const config  = require ('./config/config.js');
config.api.key_read_only,config.id
let url =`https://api.nicehash.com/api?method=orders.get&my&id=${config.api.id}&key=${config.api.key_read_only}&location=${config.api.location}&algo=1`;
axios.get(url).then((response)=>{
    console.log(response.data);
}
).catch(error=>console.error()

);




