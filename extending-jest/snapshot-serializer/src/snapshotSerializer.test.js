expect.addSnapshotSerializer({
  // TODO: implement me
});

const movies = [
  { year: 2013, title: 'Frozen', emoji: '❄️👗'},
  { year: 'TBA', title: 'Frozen 2', emoji: '️️️️❄️👗✌️' },
  { year: 2003, title: 'Finding Nemo', emoji: '🔎🐠' },
  { year: 2008, title: 'Kung Fu Panda', emoji: '👊💥🐼' }
];

const searchMovies = (char) => movies.filter(movie => movie.title.includes(char));

it('Returns the movies that match the query', () => {
  expect(searchMovies('F')).toMatchSnapshot();
});
