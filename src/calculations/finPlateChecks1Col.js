// src/calculations/finPlateChecks.js

// This is your "stub" function for today
export function runFinPlateChecks1Col(inputs) {
    // For now, just return fixed values
    boltShearResistance(30, 2, 60, 94.1);
    boltBearingWeb(30, 22, 0, 30, 1, 60, 50, 800, 470, 20, 6);
    return {
      boltShearUtilisation: 0.75, // dummy utilisation
      passes: true                 // dummy pass/fail
    };
  }


function boltShearResistance(z, n1, p1,fvrd){
    //Required inputs
    //n1 = rows of bolts
    //n2 = columns of bolts
    //d = bolt diameter (mm)
    //Fv,rd = bolt shear resistance (kN)
    //av = 0.6 for G8.8 bolts
    //p1 = vertical bolt pitch (mm)
    //z = distance from flange of col to bolt line
    let a = 0;
    let beta = 6*z / (n1*(n1+1)*p1)

    let Vrd = n1*fvrd / Math.sqrt(Math.pow((1+a*n1),2)+Math.pow((beta*n1), 2))
  }

function boltBearingWeb(e2b, d0, p2, z, n1, p1, e1b, fub, fub1, d, twb1){
  //e1,b = distance from first bolt to top of beam
  //he = distance from last bolt to bottom of beam
  //gh = gap between sections
  //a = 0
  //n1 = rows of bolts
  //p1 = vertical bolt pitch (mm)
  //z = distance from flange of col to bolt line
  //e2b = from bolt line to end of beam
  //d0 = bolt hole diameter
  //fub = ultimate tensile resistance of bolt
  //fub1 = ultimate tensile resitance of beam
  //d = bolt diameter (mm)
  //twb1 = thickness of beam web

  let a =0;
  let gammaM2 = 1.25;
  let beta = 6*z / (n1*(n1+1)*p1)

  let k1ver = Math.min((2.8*(e2b/d0)-1.7), (1.4*(p2/d0)-1.7), 2.5);
  let abver = Math.min((e1b/(3*d0)), ((p1/(3*d0))-(1/4)), (fub/fub1), 1.0);
  let fbrdVert = ((k1ver*abver*fub1*d*twb1)/gammaM2)/1000;

  console.log(fbrdVert)
  
}
  