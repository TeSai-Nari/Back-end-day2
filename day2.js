//................0.1. Info.....................
// 1. Melanjutkan module.exports kemarin
// 2. module.exports HANYA BOLEH ADA 1
// 3. sumber: MODULE 2 BACK-END: BUILT-IN MODULES & MODULE 3: NPM
// 4. Di file day2.js: Mengenai module.exports
// 5. Di file index.js: Mengenai module.exports Built-In Modules, & Npm

//.................1.1 Module.exports 1 data.................
// var nama='haha'
// module.exports =nama        //--> spt day1, contoh sederhana string

//.................1.2 Module.exports banyak data.................
// module.exports ={           // Kalau lebih banyak, maka bisa pilih antara obj (direkomendasikan) atau array (lebih ribet)
//     apa: 'ini',
//     jika:'sabar'
// }

//.................1.3.Module.exports banyak data + Versi-versi Fungsi .................
    /*1.3.1 + Fungsi ver.1*/
    //      inifungsi=(nama)=>{            // bisa taruh fungsi sblm module (kayak taruh fungsi sebelum render class di react)
    //         return `nama saya ${nama}`  // Cara es6. Cara biasa -> 'nama saya' + nama  
    //     }
    // module.exports ={           
    //     apa: 'ini',
    //     jika:'sabar',
    //     inifungsi
    // }

    /*1.3.2 + Fungsi ver.2*/
    // module.exports = {                  // Dimasukkan ke module.exportnya
    //     apa: 'ini',
    //     jika:'sabar',
    //     inifungsi(nama){                // Sebagai fungsi
    //         return `nama saya ${nama}`        
    //     }
    // }
    /*1.3.3 + Fungsi ver.3*/
    // module.exports = {                  // Dimasukkan ke module.exportnya
    //     apa: 'ini',
    //     jika:'sabar',
    //     inifungsi:nama=>{               // karena 1 parameter, tak pakai kurung tak papa             
    //         return `nama saya ${nama}`  // Sebagai object
    //     }
    // }
//.................BONUS GAMES.................
const decimalToBiner =(angka) =>{         // ubah angka desimal jadi bilangan biner (0 & 1)
    var newarr=[]
    do{
        var sisa=angka%2                  // hasilnya berapa apakah 0 /1 
        angka=angka/2                     // dilooping sampai hasilnya kosong
        newarr.push(sisa)
        angka=Math.floor(angka)           // ada chance angkanya jadi desimal, jadi dibulatkan ke bawah
    }while (angka>0)
    return newarr.reverse().join('')      // kalau gak pakai join, masih dlm array
}
//.................1.4. Destructuring Fungsi.................
module.exports = {                       // Dimasukkan ke module.exportnya
    apa: 'ini',
    jika:'sabar',
    inifungsi:namaewa=>{                 // karena 1 parameter, tak pakai kurung tak papa             
        return `nama saya ${namaewa}`        
    },
    decimalToBiner,                                                          
    //cara destructuring                                    // Cara Ribet
    desfungsi:({nama,status})=>{                            /* desfungsi:(obj)=>{*/
        return `My name is ${nama}, study at ${status}`         /* return `My name is ${obj.nama}, study at ${obj.status}`*/     
    }                                                          /*}*/
}                                                           /*}*/

//.................3.0.Npm.................
// NPM --> modul bukan bawaan Node.js
// Merupakan modul pihak ke-3 u/membangun aplikasi lebih mudah



