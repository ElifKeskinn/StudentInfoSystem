'use client';

import { useState } from 'react';
import Link from 'next/link';

const StudentSearch = ({ students }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <ul className="student-list">
        {filteredStudents.map((student) => (
          <li
            className={`student-item ${
              student.absences > 5 ? 'absence-high' : 'absence-low'
            }`}
            key={student.student_number}
          >
            <div className="profile-picture">
              {student.name.charAt(0)}
              {/* Profil imgsi gelebilir*/}
            </div>
            <div className="student-details">
              <p className="student-name">{student.name}</p>
              <p className="student-number">
                Student No: {student.student_number}
              </p>
            </div>
            <Link href={`/student/${student.student_number}`}>
              <button className="view-profile-button">Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSearch;