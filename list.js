console.clear();

let lessons = Array.from($$(".p"));
let lessons_x = [...new Set(lessons.map(item => item.textContent))].length;

let teachers = Array.from($$(".n"));
let teachers_x = [...new Set(teachers.map(item => item.textContent))].length;

console.log(lessons.length, teachers.length)

let merged = lessons.map((lesson, index) => ({ lesson: lesson.textContent, teacher: teachers[index].textContent } ))

let unique = [...new Map(merged.map((item) => [item["lesson"], item])).values()];

unique.sort((a, b) => a.lesson.localeCompare(b.lesson));

let results = unique.map(item => ({ lesson: item.lesson, teacher: item.teacher }));
results = results.filter(item => !item.lesson.includes("religia"));

let results_v = results.map(item => `${item.lesson} - ${item.teacher}`).join("\n");


console.log("\n\n\n\nLista przedmiotów (" + lessons_x + ") i nauczycieli:\n\n")
console.log(results_v)

console.log("\n\nLista nauczycieli w klasie:\n\n")
let teachers_v = [...new Set(results.map(item => item.teacher))].sort().join(", ");
console.log(teachers_v)