var sueldo = 5000;

if(sueldo <= 1000){
    sueldo = sueldo + (sueldo * 15)/100;
} else if((sueldo >= 1001) && (sueldo <= 1200) ){
    sueldo = sueldo + (sueldo * 12)/100;
}else if((sueldo >= 1201) && (sueldo <= 1400) ){
    sueldo = sueldo + (sueldo * 10)/100;
}else if((sueldo >= 1401) && (sueldo <= 1500) ){
    sueldo = sueldo + (sueldo * 8)/100;
}else if(sueldo > 1500){
    sueldo = sueldo + (sueldo* 5)/100;
}

console.log(sueldo);
