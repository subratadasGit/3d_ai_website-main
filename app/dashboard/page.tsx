// components/AddStudents.tsx

"use client"; // Add this line to make the component a Client Component

import { useState } from "react";

const AddStudents: React.FC = () => {
  const [studentData, setStudentData] = useState({
    studentId: "",
    studentName: "",
    email: "",
    password: "",
    dob: "",
    phoneNumber: "",
    address: "",
    enrollmentYear: "",
  });

  const [semesters, setSemesters] = useState([
    { semesterName: "Semester 1", subjects: [{ name: "", marks: "", grade: "" }] },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSemesterChange = (index: number, field: string, value: string) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[index][field] = value;
    setSemesters(updatedSemesters);
  };

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { semesterName: `Semester ${semesters.length + 1}`, subjects: [{ name: "", marks: "", grade: "" }] },
    ]);
  };

  const addSubject = (semesterIndex: number) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects.push({ name: "", marks: "", grade: "" });
    setSemesters(updatedSemesters);
  };

  const handleSubjectChange = (
    semesterIndex: number,
    subjectIndex: number,
    field: string,
    value: string
  ) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[semesterIndex].subjects[subjectIndex][field] = value;
    setSemesters(updatedSemesters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted student data:", studentData);
    console.log("Submitted semesters data:", semesters);
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="bg-purple-800 bg-opacity-20 backdrop-blur-md shadow-lg w-full fixed top-0 z-10 border-b border-purple-500 border-opacity-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-start items-center">
          <a className="text-purple-400 text-xl font-bold flex items-center">
            <i className="fas fa-user-graduate mr-2"></i> {/* Icon added here */}
            Student Management System
          </a>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-purple-800 bg-opacity-20 backdrop-blur-md shadow-lg h-screen fixed top-0 pt-20 border border-purple-500 border-opacity-40 rounded-lg">
          <h4 className="text-purple-400 text-xl font-bold p-4">Menu</h4>
          <ul className="space-y-4 px-4">
            <li><a href="list.tsx" className="hover:bg-purple-700 p-2 block rounded">Student List</a></li>
            <li><a href="/app/dashboard/page.tsx" className="hover:bg-purple-700 p-2 block rounded">Add Transcript</a></li>
            <li><a href="blocklist.html" className="hover:bg-purple-700 p-2 block rounded">Blocklist</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow ml-64 pt-24 px-6">
          <h2 className="text-3xl font-bold mb-6">Add Student</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="studentId"
                placeholder="Student ID"
                value={studentData.studentId}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                value={studentData.studentName}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={studentData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={studentData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="date"
                name="dob"
                value={studentData.dob}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={studentData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={studentData.address}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
              <input
                type="text"
                name="enrollmentYear"
                placeholder="Enrollment Year"
                value={studentData.enrollmentYear}
                onChange={handleInputChange}
                className="w-full bg-gray-900 border border-gray-600 text-white rounded p-2"
              />
            </div>

            {semesters.map((semester, semesterIndex) => (
              <div key={semesterIndex} className="bg-gray-800 p-4 rounded mb-4">
                <h4 className="text-xl font-semibold mb-2">{semester.semesterName}</h4>
                {semester.subjects.map((subject, subjectIndex) => (
                  <div key={subjectIndex} className="space-y-2">
                    <input
                      type="text"
                      placeholder="Subject Name"
                      value={subject.name}
                      onChange={(e) => handleSubjectChange(semesterIndex, subjectIndex, "name", e.target.value)}
                      className="w-full bg-gray-700 text-white rounded p-2"
                    />
                    <input
                      type="number"
                      placeholder="Marks"
                      value={subject.marks}
                      onChange={(e) => handleSubjectChange(semesterIndex, subjectIndex, "marks", e.target.value)}
                      className="w-full bg-gray-700 text-white rounded p-2"
                    />
                    <input
                      type="text"
                      placeholder="Grade"
                      value={subject.grade}
                      onChange={(e) => handleSubjectChange(semesterIndex, subjectIndex, "grade", e.target.value)}
                      className="w-full bg-gray-700 text-white rounded p-2"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addSubject(semesterIndex)}
                  className="mt-2 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded"
                >
                  Add Subject
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addSemester}
              className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded"
            >
              Add Semester
            </button>
            <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudents;
