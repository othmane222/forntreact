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

  const handleSubmit = async (event) => {
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
    } catch (error) {
      console.error('There was an error creating the course!', error);
    }
  };

  return (
    <div>
      <LandingNav />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add a New Course</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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

        {/* Success message displayed after form */}
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-6" role="alert">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCourse;
