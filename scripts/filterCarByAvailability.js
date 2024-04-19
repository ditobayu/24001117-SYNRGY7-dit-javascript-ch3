function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Memfilter mobil berdasarkan ketersediaannya
  for (const car of cars) {
    if (car.available) {
      result.push(car);
    }
  }

  // Mengembalikan array hasil filter
  return result;
}
