let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] }
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let totalScores = 0;

  for (let j = 0; j < student.scores.length; j++) {
    totalScores += student.scores[j];
  }

  let average = totalScores / student.scores.length;
  console.log(`${student.name}'s average score is ${average.toFixed(2)}`);
}