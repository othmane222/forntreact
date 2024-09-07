import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingNav from '../LandingNav';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [categories, setCategories] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [videoUploadFormVisible, setVideoUploadFormVisible] = useState(false);
  const [assignmentFormVisible, setAssignmentFormVisible] = useState(false);
  const [courseId, setCourseId] = useState(null);

  // New state for multiple videos and assignments
  const [videoFiles, setVideoFiles] = useState([{ file: null, title: '' }]);
  const [assignments, setAssignments] = useState([{ title: '', description: '' }]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/users');
        setTeachers(response.data.filter(user => user.role === 'TEACHER'));
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchCategories();
    fetchTeachers();
  }, []);

  // Course submission
  const handleCourseSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const courseData = {
      title,
      description,
      price,
      category: { id: categoryId },
      teacher: { id: teacherId },
    };

    formData.append('course', JSON.stringify(courseData));
    formData.append('pdfFile', pdfFile);

    try {
      const response = await axios.post('http://localhost:8081/api/courses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Course created:', response.data);
      setSuccessMessage('Course created successfully!');
      setCourseId(response.data.id);  // Capture the course ID here
      setVideoUploadFormVisible(true);
      setAssignmentFormVisible(true);
    } catch (error) {
      console.error('There was an error creating the course!', error);
    }
  };

  // Video submission
  const handleVideoSubmit = async (event) => {
    event.preventDefault();

    if (!courseId) {
      console.error('No course ID available');
      return;
    }

    for (const video of videoFiles) {
      const { file, title } = video;
      if (!file || !title) {
        console.error('Video file or title is missing');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
        const url = `http://localhost:8081/api/videos?courseId=${courseId}&title=${encodeURIComponent(title)}`;
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Video added successfully', response.data);
        setSuccessMessage('All videos added successfully!');
      } catch (error) {
        console.error('Error adding video:', error);
      }
    }
    setVideoFiles([{ file: null, title: '' }]);
  };

  // Assignment submission
  const handleAssignmentSubmit = async (event) => {
    event.preventDefault();

    if (!courseId) {
      console.error('No course ID available');
      return;
    }

    for (const assignment of assignments) {
      const { title, description } = assignment;
      if (!title || !description) {
        console.error('Assignment title or description is missing');
        return;
      }

      const assignmentData = {
        title,
        description,
        course: { id: courseId },  // Pass the courseId here
      };

      try {
        const response = await axios.post('http://localhost:8081/api/assignments', assignmentData);
        console.log('Assignment added successfully', response.data);
        setSuccessMessage('Assignments added successfully!');
      } catch (error) {
        console.error('Error adding assignment:', error);
      }
    }

    setAssignments([{ title: '', description: '' }]);
  };

  const handleVideoChange = (index, field, value) => {
    const newVideoFiles = [...videoFiles];
    newVideoFiles[index][field] = value;
    setVideoFiles(newVideoFiles);
  };

  const addVideoField = () => {
    setVideoFiles([...videoFiles, { file: null, title: '' }]);
  };

  const handleAssignmentChange = (index, field, value) => {
    const newAssignments = [...assignments];
    newAssignments[index][field] = value;
    setAssignments(newAssignments);
  };

  const addAssignmentField = () => {
    setAssignments([...assignments, { title: '', description: '' }]);
  };

  return (
    <div>
      <LandingNav />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add a New Course</h2>

        {/* Course creation form */}
        {!videoUploadFormVisible && (
          <form onSubmit={handleCourseSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2" htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course title"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2" htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course description"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2" htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course price"
              />
            </div>

            <div className="flex flex-col">
              <label className="block mb-2">
                Category:
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="border w-full px-3 py-2 rounded"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="block mb-2">
                Teacher:
                <select
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="border w-full px-3 py-2 rounded"
                  required
                >
                  <option value="">Select a teacher</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.username}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2" htmlFor="pdfFile">PDF File</label>
              <input
                type="file"
                id="pdfFile"
                onChange={(e) => setPdfFile(e.target.files[0])}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Create Course
            </button>
          </form>
        )}

        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-6" role="alert">
            <p>{successMessage}</p>
          </div>
        )}

        {/* Video upload form */}
        {videoUploadFormVisible && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Upload Videos</h2>

            <form onSubmit={handleVideoSubmit}>
              {videoFiles.map((video, index) => (
                <div key={index} className="mb-4">
                  <input
                    type="file"
                    onChange={(e) => handleVideoChange(index, 'file', e.target.files[0])}
                    className="mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter video title"
                    value={video.title}
                    onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={addVideoField}
                className="bg-gray-200 text-gray-700 py-1 px-4 rounded-md mr-4"
              >
                Add Another Video
              </button>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Upload Videos
              </button>
            </form>
          </div>
        )}

        {/* Assignment submission form */}
        {assignmentFormVisible && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Assignments</h2>

            <form onSubmit={handleAssignmentSubmit}>
              {assignments.map((assignment, index) => (
                <div key={index} className="mb-6">
                  <div className="flex flex-col mb-4">
                    <label className="text-gray-700 mb-2" htmlFor={`assignmentTitle-${index}`}>Assignment Title</label>
                    <input
                      type="text"
                      id={`assignmentTitle-${index}`}
                      value={assignment.title}
                      onChange={(e) => handleAssignmentChange(index, 'title', e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter assignment title"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 mb-2" htmlFor={`assignmentDescription-${index}`}>Assignment Description</label>
                    <textarea
                      id={`assignmentDescription-${index}`}
                      value={assignment.description}
                      onChange={(e) => handleAssignmentChange(index, 'description', e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter assignment description"
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addAssignmentField}
                className="bg-gray-200 text-gray-700 py-1 px-4 rounded-md mr-4"
              >
                Add Another Assignment
              </button>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-4"
              >
                Create Assignments
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCourse;
