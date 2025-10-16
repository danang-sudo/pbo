// ===========================
// 1. KELAS ABSTRAK: KENDARAAN
// ===========================
class Kendaraan {
    constructor(merk) {
        this.merk = merk;
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        }
    }

    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
}

class Mobil extends Kendaraan {
    maju() {
        return `${this.merk} melaju dengan kecepatan tinggi!`; // Pastikan menggunakan backtick (`) bukan kutip miring (‘ atau ’)
    }
}

const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan tinggi!

// const kendaraanBaru = new Kendaraan("Generic"); // Error: Kelas abstrak tidak bisa diinstansiasi langsung.


// ======================================
// 2. INTERFACE SEBAGAI BLUEPRINT: KENDARAAN
// ======================================
const kendaraanInterface = {
    maju: function () {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
};

class Sepeda {
    constructor(merk) {
        this.merk = merk;
    }

    maju() {
        return `${this.merk} melaju dengan tenaga manusia!`;
    }
}

// Menguji apakah Sepeda mematuhi interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia!

if (typeof polygon.maju !== "function") {
    throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!"); 
    // Pengecekan ini dilakukan setelah objek dibuat, 
    // jadi jika method tidak ada, error baru muncul saat runtime.
}


// ======================================
// 3. KELAS ABSTRAK: PEMBAYARAN
// ======================================
class Pembayaran {
    constructor(jumlah) {
        this.jumlah = jumlah;
        if (this.constructor === Pembayaran) {
            throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung."); // Benar untuk mencegah instansiasi langsung
        }
    }

    prosesPembayaran() {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!"); // Method abstrak
    }
}

class KartuKredit extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`; 
        // Secara logika benar, tetapi sebaiknya tambahkan "Rp" agar lebih informatif
    } 
}

class PayPal extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`; 
        // Sama seperti di atas, sebaiknya tambahkan satuan mata uang agar konsisten
    } 
}

// Implementasi
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // Pembayaran 500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); // Pembayaran 250000 melalui PayPal berhasil!
