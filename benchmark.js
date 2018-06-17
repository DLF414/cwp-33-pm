const siege = require('siege');

siege()
    .on(3000)
    .concurrent(50)
    .for(120).seconds
    .get("http://localhost:3000/hash")
    .attack();
