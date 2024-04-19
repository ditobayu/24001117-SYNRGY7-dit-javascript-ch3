function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Mengurutkan mobil secara descending berdasarkan tahun pembuatannya
  result.sort((a, b) => b.year - a.year);

  // Mengembalikan array hasil sorting
  return result;
}
