var isAnagram = function (s, t) {
  // Jika panjang tidak sama, tidak bisa menjadi anagram
  if (s.length !== t.length) {
    return false;
  }

  // Membuat peta frekuensi untuk karakter di s
  const charCount = {};

  // Menghitung karakter dalam s
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1; //output: a= (undefined || 0) + 1
  }

  // Mengurangi jumlah untuk karakter dalam t
  for (const char of t) {
    if (!charCount[char]) {
      return false; // Jika karakter tidak ada di s atau digunakan lebih banyak kali dari s
    }
    charCount[char] -= 1;
  }

  // Memeriksa apakah semua jumlah adalah nol
  return Object.values(charCount).every((count) => count === 0);
};

// Contoh penggunaan:
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false
