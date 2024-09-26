// Home.js
import { getStudentsData } from './lib/students';
import Link from 'next/link';

const Home = async () => {
  const students = await getStudentsData();

  return (
    <div className="home-container">
      <h1 className="home-title">Student tracking system</h1>
      <ul className="student-list">
        {students.map((student) => (
          <li className="student-item" key={student.student_number}>
            <span className="student-info">
              {student.name} - {student.student_number} - {student.gender}
            </span>
            <Link href={`/student/${student.student_number}`}>
              <button className="view-profile-button">Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
