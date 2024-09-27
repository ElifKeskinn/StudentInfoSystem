import { getStudentsData } from '../../lib/students';
import { FaUser } from 'react-icons/fa';



const genderSymbols = {
  male: '♂',
  female: '♀',
};


const StudentProfile = async ({ params }) => {
  const students = await getStudentsData();
  const student = students.find(s => s.student_number === parseInt(params.student_number));

  if (!student) {
    return <div className="error-message">Not Found</div>;
  }

  return (
    <div className="student-profile">
      <div className="profile-header">
        <div className="profile-picture">
          {/* Profil resmi için ikon */}
          <FaUser color="#ffffff" size={50} />

        </div>
        <h1 className="student-name">
          {student.name}

        </h1>
      </div>
      <ul className="student-info">
        <li>
          <span className="label">Student Number:</span>
          <span className="value">{student.student_number}</span>
        </li>
        <li>
          <span className="label">Gender:</span>

          <span
            className={`gender-icon ${student.gender === 'male' ? 'blue' : 'pink'
              }`}
          >
            <span className="gender-icon">{genderSymbols[student.gender]}
            </span>

          </span>

        </li>
        <li>
          <span className="label">Absences:</span>
          <span className="value">
            {student.absences}{' '}
            <span
              className={`status ${student.absences > 5 ? 'red' : 'green'
                }`}
            >
              {student.absences > 5 ? 'High' : 'Fine'}
            </span>
          </span>
        </li>
        <li>
          <span className="label">Assignment Average:</span>
          <span className="value">{student.homework_average}</span>
        </li>
      </ul>
    </div>
  );
};

export default StudentProfile;
