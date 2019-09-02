export async function fetchAthletesBySearchTerm(searchTerm) {
  const year = 2019;
  const competition = "open";
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/http://games.crossfit.com/competitions/api/v1/competitions/${competition}/${year}/athletes?term=${searchTerm}`
  );
  const athletes = await res.json();
  const athletesByYear = athletes.map(athlete => ({
    ...athlete,
    year,
    competition
  }));
  return athletesByYear;
}
