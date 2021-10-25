let volumeInMetersA = 8*10*10;
let gardenSizeInM2A = 100;
let volumeInMetersB = 5*11*8;
let gardenSizeInM2B = 70;
let housePrice = [volumeInMetersA*2.5*1000 + gardenSizeInM2A *300,volumeInMetersB * 2.5 * 1000 + gardenSizeInM2B * 300 ]

if (housePrice[0] < 2500000 && housePrice[1] > 1000000){
    console.log("Peter are paying too little,Julia are paying too much")
}else if (housePrice[0] > 2500000 && housePrice[1] < 1000000){
    console.log("Peter are paying too much,Julia are paying too little")
}
