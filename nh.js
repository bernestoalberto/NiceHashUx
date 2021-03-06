const axios = require('axios');
const config  = require ('./config/config.js');


let nh = {
    getBalance(){
        let balanceURl = `https://api.nicehash.com/api?method=balance&id=${config.api.id}&key=${config.api.key}`;
        axios.get(balanceURl).then((response)=>{
            console.log(response.data.result);
            return response.data;
        }
        ).catch(error=>console.error()
        );
    },
    orders(){
        let url =`https://api.nicehash.com/api?method=orders.get&my&id=${config.api.id}
        &key=${config.api.key}&location=${config.api.location.mine}&algo=1`;
        axios.get(url).then((response)=>{
            console.log(response.data.result);
            return response.data;
        }
        ).catch(error=>console.error()
        );
    }
    
    
}

module.exports = nh;
nh.orders();
nh.getBalance();

