export default class Sueldo{
    
    constructor(){
        this.sueldo = 5000
    }

    getAumento(){
        if(this.sueldo <= 1000){
            this.sueldo = this.sueldo + (this.sueldo * 15)/100;
            return this.sueldo;
        } else if((this.sueldo >= 1001) && (this.sueldo <= 1200) ){
            this.sueldo = this.sueldo + (this.sueldo * 12)/100;
            return this.sueldo;
        }else if((this.sueldo >= 1201) && (this.sueldo <= 1400) ){
            this.sueldo = this.sueldo + (this.sueldo * 10)/100;
            return this.sueldo;
        }else if((this.sueldo >= 1401) && (this.sueldo <= 1500) ){
            this.sueldo = this.sueldo + (this.sueldo * 8)/100;
            return this.sueldo;
        }else if(this.sueldo > 1500){
            this.sueldo = this.sueldo + (this.sueldo * 5)/100;
            return this.sueldo;
        }
    }
}

let app = new Sueldo();
console.log(app.getAumento());