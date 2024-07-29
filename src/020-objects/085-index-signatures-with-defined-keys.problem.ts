interface Scores {
  [key: string]: number
  math: number;
  english: number;
  science: number
}

const scores: Scores = {
  math: 95,
  english: 90,
  science: 12
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
