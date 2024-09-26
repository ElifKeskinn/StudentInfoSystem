import fs from 'fs';
import path from 'path';

export function getStudentsData() {
  const filePath = path.resolve('./app/data/students.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const students = JSON.parse(fileData).students;
  return students;
}
