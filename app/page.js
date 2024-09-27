import { getStudentsData } from './lib/students';
import Link from 'next/link';
import image from './image.png';
import Image from 'next/image';



const Home = async () => {
  const students = await getStudentsData();

  return (
    <div className="home-container">
        <Image src={image} 
        alt="Açıklayıcı Alt Metin" 
              className="top-left-image"        />

      <h1 className="home-title">Student tracking system</h1>
      <ul className="student-list">
        {students.map((student) => (
          <li className="student-item" key={student.student_number}>
              <div className="profile-picture">
              {student.name.charAt(0)}
              {/* Profil resmi gelirse buraya img etiketi açıcam */}
            </div>
            <div className="student-details">
              <p className="student-name">
                {student.name}
              </p>
              <p className="student-number">Öğrenci No: {student.student_number}</p>
            </div>
            <Link href={`/student/${student.student_number}`}>
              <button className="view-profile-button">Detaylar</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


