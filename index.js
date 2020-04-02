//.................1.1 Module.exports 1 data.................
// const bebas= require('./day2')       // nama constnya bisa apaaja, karena ada Babel polyfill( auto download waktu download react) jadinya import di React
// console.log(bebas)                   // isi bebas = 'ini'

//.................1.2 Module.exports banyak data.................
//cara Destructuring                                  // Cara Ribet
/* const {apa,jika}=require('./day2') */              // const bebas= require('./day2')                        
/* console.log(apa + jika) */                         // console.log(bebas.apa +' '+ bebas.jika)               

//.................1.3 Function + Module.exports banyak data.................
// const {apa,jika,inifungsi}=require('./day2')
// console.log(apa + jika) 
// console.log(inifungsi("Theda"))

//.................1.4. Destructuring Fungsi+ BONUS GAMES.................
// const {apa,jika,inifungsi,desfungsi,decimalToBiner}=require('./day2')
// console.log(apa + jika) 
// console.log(inifungsi("Theda"))
// console.log(decimalToBiner(50))
// //cara destructuring                                    // Cara Ribet
// console.log(desfungsi({nama: 'dino', status:'home'}))   // var obj= {nama: 'dino', status:'jc12'}                 
//                                                         //console.log(desfungsi(obj))                       

//.................2.0. Built-In Modules.................
// Built-in module: merupakan modul yang sudah ada ada dinode.js (tak perlu install lagi)
    // *info lanjut buka node.js di google
    // *buka pdf modul-2 purwadhikanya
// Beberapa di antaranya yg akan dipelajarin:
    // *crypto: untuk keamanan password
    // *fs: untuk file sistem (untuk buat file)

    //Contoh 1 :
    // const os = require('os')                // untuk tahu os laptop kita
    // console.log(os.totalmem())              // tak terlalu penting sebenarnya...
    //Contoh 2 :
    // var namaBebas=require('assert')         // var kalau mau disamain sama isi require-nya
    // var drinks=['luwak','hitam','susu']

    // namaBebas.equal(drinks.length,3)        // param ke 2 pastiin: bener gak sih lengthnya 4?
    //                                         // buka terminal--> node .
    // console.log('lanjutkah?')               // kalau salah akan muncul error mengharapkan 3. Koding stop
    //                                         // kalau benar, akan lanjut ke koding berikutnya
                                            // digunakan untuk tester
    // Contoh 3 :
    // var events=require('events')            
    // var eventsku =new events.EventEmitter
    // eventsku.on('klik', (param)=>{          // pakai callback. bisa pakai param. bisa juga tidak
    //     console.log('anda klik' + param)    // kalau stop sampai sini aja, tak akan kebaca kalau di node .-in
    // })
    // eventsku.emit('klik',' berhasil')       // emit untuk trigger si .on-nya               
    //                                         // isi '' harus sama dgn yang di atas(.on-nya)
    //                                         // biasa digunakan untuk real time(fitur chat)
    //                                         // .emit= back-end, .on nanti ada di front-end(dlm btk setState), tanpa di reload

//.................2.1. Fs.................

//Berguna untuk upload file / pdf, push file, buat folder
/*Contoh:   User membuat album image dlm sebuah folder.
            Tiap user mempunyai foldernya sendiri
            (bukan dari admin yang buat foldernya)
            Cara membuat foldernya itu menggunakan fs.
            */
//.................2.1.1. Fs-Asynchoronous.................
// var fs = require('fs')
                                                             // writeFile: membuat file secara async
// fs.writeFile('tes1.js','var job="Designer"', (err)=>{        // parameter ke-1: nama & jenis filenya, param ke-2: isinya
//     if(err) throw err                                        // + Ada callback buat crash (programnya dihentikan) u/kemungkinan adanya error
//     console.log('file telah dibuat')                         // u/memastikan berhasil kalau di node .
// })                                                           // Kalau nama filenya sama, tak akan dibuat lagi

// fs.appendFile('tes.js','\n console.log(job)',(err)=>{        // appendFile: menambah/mengedit isi file
//         console.log('file has been edited')                  // u/memastikan berhasil kalau di node .
// })                                                              
// console.log('membuktikan fs itu async')                      // Ini duluan daripada fs

// fs.readFile('tes.js','utf8',(err,data)=>{                    // Baca isi file secara async. Tambah format 'utf8'
//     console.log('ini readfile async: ',data)                 // Kalau tak tambah 'utf8', maka yang keluar: <Buffer 76 61 72 20 6a 6f 62 3d 22 44...>
// })

// fs.unlink('tes1.js',(err)=>{                                 // untuk hapus foto secara async
//     console.log(`file berhasil di hapus`)
// })

//.................2.1.2. Fs-Synchoronous.................
// fs.writeFileSync('tessync.js','var job="Programmer"')        // Membuat file tanpa async (tak perlu callback)
//                                                              // Tergantung algorithm mau pilih yg async atau sync

// var x=fs.readFileSync('tessync.js')                          // Membaca file secara sync
// console.log('ini readfile sync:',x.toString())               // Bisa pakai utf8, bisa juga pakai toString() u/baca data

// fs.unlinkSync('tes2.js')                                     // Hapus file secara sync (langsung dihapus tanpa pemberitahuan)

// fs.mkdirSync('testes')                                       // Buat folder baru
// fs.rmdirSync ('testes')                                      // Menghapus folder                         

//.................2.1.Stream.................
// fs.writeFile('halo.txt','lorem',(err)=>{                     // Buat filenya dulu
//     if (err) throw err
//     console.log("file sudah terbuat")
// })

// var bacastream=fs.createReadStream('halo.txt')                  // Biar tahu aja proses kirim datanya gimana
// bacastream.on('data',(potdata)=>{
//     console.log('=============data masuk=============')
//     console.log(potdata)
// })


