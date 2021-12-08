const geoCode = require("./geoCode");
const forecast = require("./forecast");


const stdin = process.openStdin();

console.log("SVP Entez soit : {nom de la vile} + full(pour plus d'infos),ville \nsoit : latitude,longitude")

const tenki = async (city,lat,lon,len) =>{
    if(len === 1){
        city = city.toString('utf8').split(" ").join("")
        city = city.toLowerCase()
        geoCode(city)
    }else if(len === 2){
        forecast(lat,lon)
    }
    

}
stdin.addListener("data", function (st) {
    const argLen = (st.toString().split(",",4)).length
    if(argLen === 1){
        const city = (st.toString().split(",",4))[0];
        tenki(city,"void","void",argLen);
    }else if(argLen === 2){
        const lat = (st.toString().split(",",4))[1];
        const lon = (st.toString().split(",",4))[2];
        tenki("void",lat,lon,argLen);
    }else{
        console.log("SVP Entez soit : {nom de la vile} + full(pour plus d'infos),ville \nsoit : coordonnées,latitude,longitude")
    }
    
})



