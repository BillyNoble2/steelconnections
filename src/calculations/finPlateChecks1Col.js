// src/calculations/finPlateChecks.js

// This is your "stub" function for today
export function runFinPlateChecks1Col(inputs) {
    // For now, just return fixed values
    boltShearResistance(0, 30, 2, 60, 94.1);
    return {
      boltShearUtilisation: 0.75, // dummy utilisation
      passes: true                 // dummy pass/fail
    };
  }


function boltShearResistance(a, z, n1, p1,fvrd){
    //Required inputs
    //n1 = rows of bolts
    //n2 = columns of bolts
    //d = bolt diameter (mm)
    //Fv,rd = bolt shear resistance (kN)
    //av = 0.6 for G8.8 bolts
    //p1 = vertical bolt pitch (mm)
    //z = distance from flange of col to bolt line
    let beta = 6*z / (n1*(n1+1)*p1)
    console.log(beta)

    let Vrd = n1*fvrd / Math.sqrt(Math.pow((1+a*n1),2)+Math.pow((beta*n1), 2))
  }
  