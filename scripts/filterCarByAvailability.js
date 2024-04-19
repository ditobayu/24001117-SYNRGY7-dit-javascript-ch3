function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Memfilter mobil berdasarkan ketersediaannya
  let resultIndex = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available) {
      result[resultIndex] = cars[i];
      resultIndex++;
    }
  }

  // Mengembalikan array hasil filter
  return result;
}
