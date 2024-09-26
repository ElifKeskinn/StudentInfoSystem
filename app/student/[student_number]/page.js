import { getStudentsData } from '../../lib/students';

const StudentProfile = async ({ params }) => {
  const students = await getStudentsData();
  const student = students.find(s => s.student_number === parseInt(params.student_number));

  if (!student) {
    return <div className="error-message">Not Found</div>;
  }

  return (
    <div className="student-profile">
      <h1 className={`student-name ${student.absences > 5 ? 'red' : 'green'}`}>
        {student.name}
      </h1>
      <p className="student-number">Student Number: {student.student_number}</p>
      <p className="student-gender">Gender: {student.gender}</p>
      <p className="student-absences">Absences: {student.absences}</p>
      <p className="student-average">Assignment Average: {student.homework_average}</p>
    </div>
  );
};

export default StudentProfile;
