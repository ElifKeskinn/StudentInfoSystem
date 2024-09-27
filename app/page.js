import { getStudentsData } from './lib/students';
import Link from 'next/link';
import image from './image.png';
import Image from 'next/image';
import StudentSearch from './components/StudentSearch';


const Home = async () => {
  const students = await getStudentsData();

  return (
    <div className="home-container">
      <Image src={image}
        alt="Açıklayıcı Alt Metin"
        className="top-left-image"

      />
      <h1 className="home-title">Student tracking system</h1>
      <StudentSearch students={students} />

    </div>
  );
};

export default Home;