let Mapex = {
    snare: "groovada e estalada",
        kick: "pesado e controlado",
        tomTom: "lindamente ressonantes"
    }
    let cymbals = {
        hiHat: "Zildjian A",
        crashRide: 'Zildjian K Dark 24"',
        crashes: "Paiste 2002"
    }
    
    
    console.log(Mapex);
    Object.assign(Mapex,cymbals);
    console.log(Mapex);