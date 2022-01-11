"use strict";

var users = [
  {salis: "Lietuva", plotas: 65300, gyventojai: 2784279},
  {salis: "Anglija", plotas: 130395, gyventojai: 55619400},
  {salis: "Latvija", plotas: 64589, gyventojai: 1934379},
  {salis: "Suomija", plotas: 338145, gyventojai: 5541274},
  {salis: "Estija", plotas: 45226, gyventojai: 1305755}
];

for(var x of users){
  
  var salis = x.salis;
  var plotas = x.plotas;
  var gyventojai = x.gyventojai;
  var kvMetrai = plotas * 1000000;
  var vienam = (kvMetrai / gyventojai).toFixed(2);

  
  console.log("Šalis: " + salis + ", joje gyvena " + gyventojai + " gyventojų.");
  console.log("Valstybės plotas: " +  plotas + " km². , plotas tenkantis vienam gyventojui: " + vienam + " m².");
  console.log("===========");
}



