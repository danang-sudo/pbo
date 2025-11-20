*// MAP mahasiswa
let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra"); // menimpa "Budi"

// OUTPUT SEPERTI FOTO
console.log(mahasiswa.get("001")); // Andi
console.log(mahasiswa.get("003")); // Citra
console.log(mahasiswa.get("001")); // Andi
console.log(mahasiswa.get("001")); // Andi


// FUNCTION printItems
function printItems(items) {
    for (let item of items) {
        console.log(item);
    }
}

printItems([1, 2, 3]);         // Output: 1 2 3
printItems(["A", "B", "C"]);   // Output: A B C
printItems([1, 2, 3, "A", "B", "C"]); // Output: 1 2 3 A B C


// SET tugas
let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); // beda karena ada spasi

console.log(tugas);
