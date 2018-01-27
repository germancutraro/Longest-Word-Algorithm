const getLongestWord = (...words) => {
  return [...words]
    .reduce((prev, current) => (current.length > prev.length) ? current : prev, '');
}

console.log(
  getLongestWord('PHP', 'JavaScript', 'Python')
);