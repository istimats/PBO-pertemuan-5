class kapal {
    constructor(nama , pelabuhan , muatan){
        this.nama = nama;
        this.pelabuhan = pelabuhan;
        this.muatan = muatan;
    }

    info(){
        console.log(`kapal ${this.nama} berada di pelabuhan ${this.pelabuhan} dengan muatan ${this.muatan}`);
    }
    }


class kapalContainer extends kapal {
    
    info(){
        console.log(`kapal ${this.nama} berada di pelabuhan ${this.pelabuhan} dengan muatan ${this.muatan} Container`);
    }

}

class kapalNelayan extends kapal{
   
    
    info(){
        console.log(`kapal ${this.nama} berada di pelabuhan ${this.pelabuhan} dengan muatan ${this.muatan} TON`);
    }   
}

class kapalTanker extends kapal{
   
    
    info(){
        console.log(`kapal ${this.nama} berada di pelabuhan ${this.pelabuhan} dengan muatan ${this.muatan} MT`);
    }
}

class kapalPenumpang extends kapal{
    

    info(){
        console.log(`kapal ${this.nama} berada di pelabuhan ${this.pelabuhan} dengan kapasitas ${this.muatan} Orang`);
    }
}


let kapal1 = new kapalContainer('evergreen', 'Hong Kong', 1000);
let kapal2 = new kapalNelayan('limbongan', 'PPN karangantu', 100); 
let kapal3 = new kapalTanker('Pertamina', 'balikpapan', 80.000);
let kapal4 = new kapalPenumpang('sriwijaya', 'bakauheni', 1000);
  

kapal1.info();
kapal2.info();
kapal3.info();
kapal4.info();


class mobil {
    constructor(nama , type , roda){
        this.nama = nama;
        this.type = type;
        this.roda = roda;
    }
}

class sedan extends mobil {

    info(){
        console.log(`mobil ${this.nama} memiliki type ${this.type} dan ${this.roda} roda`);
    }
}

class jip extends mobil {

    info(){
        console.log(`mobil ${this.nama} memiliki type ${this.type} dan ${this.roda} roda`);
    }
}

class bus extends mobil {

    info(){
        console.log(`mobil ${this.nama} memiliki type ${this.type} dan ${this.roda} roda`);
    }
}

let mobil1 = new sedan('civic', 'sedan', 4);
let mobil2 = new jip('jeep', 'jip', 4);
let mobil3 = new bus('bus', 'bus', 6);

mobil1.info();
mobil2.info();
mobil3.info();

class motor {
    constructor(nama , type , roda){
        this.nama = nama;
        this.type = type;
        this.roda = roda;
    }
}

class motorcross extends motor {

    info(){
        console.log(`motor ${this.nama} memiliki type ${this.type} dan ${this.roda} roda`);
    }
}

class motorbebek extends motor {

    info(){
        console.log(`motor ${this.nama} memiliki type ${this.type} dan ${this.roda} roda`);
    }
}

class motorgede extends motor {

    info(){
        console.log(`motor ${this.nama} memiliki type ${this.type} dan ${this.roda} roda`);
    }
}
let motor1 = new motorcross('vixion', 'motorcross', 2);
let motor2 = new motorbebek('beat', 'motorbebek', 2);
let motor3 = new motorgede('vario', 'motorgede', 2);

motor1.info();
motor2.info();
motor3.info();
class kunci {
    constructor(nama , bahan , fungsi){
        this.nama = nama;
        this.bahan = bahan;
        this.fungsi = fungsi;
    }
}

class kuncilaser extends kunci {

    info(){
        console.log(`kunci ${this.nama} memiliki bahan ${this.bahan} dan fungsi ${this.fungsi}`);
    }
}

class kuncimagnet extends kunci {

    info(){
        console.log(`kunci ${this.nama} memiliki bahan ${this.bahan} dan fungsi ${this.fungsi}`);
    }
}

class kuncipintu extends kunci {

    info(){
        console.log(`kunci ${this.nama} memiliki bahan ${this.bahan} dan fungsi ${this.fungsi}`);
    }
}
let kunci1 = new kuncilaser('kunci laser', 'logam', 'membuka mobil');
let kunci2 = new kuncimagnet('kunci magnet', 'magnet', 'membuka brankas');
let kunci3 = new kuncipintu('kunci pintu', 'tembaga', 'membuka pintu');

kunci1.info();
kunci2.info();
kunci3.info();
