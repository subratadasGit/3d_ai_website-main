import React, { useState } from 'react';

interface Subject {
  subject_name: string;
  marks: number | '';  // Keeping it as number | '' for clarity
  grade: string;
}

interface Semester {
  semester_number: number;
  subjects: Subject[];
}

interface FormData {
  student_id: string;
  name: string;
  email: string;
  password: string;
  dob: string;
  address: string;
  phone_number: string;
  enrollment_year: string;
  course: string;
  semesters: Semester[];
}

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    student_id: '',
    name: '',
    email: '',
    password: '',
    dob: '',
    address: '',
    phone_number: '',
    enrollment_year: '',
    course: '',
    semesters: [
      {
        semester_number: 1,
        subjects: [{ subject_name: '', marks: '', grade: '' }],
      },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubjectChange = (index: number, field: keyof Subject, value: string | number) => {
    const newSemesters = [...formData.semesters];

    if (field === 'marks') {
      newSemesters[0].subjects[index].marks = value === '' ? '' : Number(value);
    } else {
      newSemesters[0].subjects[index][field] = value as string; // Cast to string for subject_name and grade
    }

    setFormData((prevData) => ({ ...prevData, semesters: newSemesters }));
  };

  const addSubject = () => {
    const newSemesters = [...formData.semesters];
    newSemesters[0].subjects.push({ subject_name: '', marks: '', grade: '' });
    setFormData((prevData) => ({ ...prevData, semesters: newSemesters }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-6">Student Enrollment Form</h1>
      <form onSubmit={submitForm} className="space-y-5">
        {Object.keys(formData).map((key) => {
          if (key !== 'semesters') {
            return (
              <div key={key} className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  {key.replace(/_/g, ' ').toUpperCase()}
                </label>
                <input
                  type={key === 'email' ? 'email' : key === 'password' ? 'password' : 'text'}
                  name={key}
                  value={formData[key as keyof Omit<FormData, 'semesters'>] as string}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Enter ${key.replace(/_/g, ' ')}`}
                  required
                />
              </div>
            );
          } else {
            return formData.semesters.map((semester, index) => (
              <div key={index} className="mb-6 border border-gray-300 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Semester {semester.semester_number}</h3>
                {semester.subjects.map((subject, i) => (
                  <div key={i} className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900">Subject {i + 1} Name</label>
                    <input
                      type="text"
                      value={subject.subject_name}
                      onChange={(e) => handleSubjectChange(i, 'subject_name', e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter subject name"
                      required
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900">Marks</label>
                    <input
                      type="number"
                      value={subject.marks}
                      onChange={(e) => handleSubjectChange(i, 'marks', e.target.value === '' ? '' : +e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter marks"
                      required
                    />
                    <label className="block mb-2 text-sm font-medium text-gray-900">Grade</label>
                    <input
                      type="text"
                      value={subject.grade}
                      onChange={(e) => handleSubjectChange(i, 'grade', e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter grade"
                      required
                    />
                  </div>
                ))}
                <button type="button" onClick={addSubject} className="mt-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  Add Subject
                </button>
              </div>
            ));
          }
        })}
        <button type="submit" className="mt-6 w-full bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
