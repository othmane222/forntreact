import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  // Define state variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [teacherId, setTeacherId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append('course', JSON.stringify({
      title,
      description,
      price,
      category_id: categoryId,
      teacher_id: teacherId
    }));
    formData.append('pdfFile', pdfFile);

    try {
      const response = await axios.post('http://localhost:8081/api/courses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Course created:', response.data);
    } catch (error) {
      console.error('There was an error creating the course!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Category ID:
        <input
          type="text"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Teacher ID:
        <input
          type="text"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
        />
      </label>
      <br />
      <label>
        PDF File:
        <input
          type="file"
          ame="pdfFile"
  accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
        />
      </label>
      <br />
      <button type="submit">Create Course</button>
    </form>
  );
};

export default AddCourse;
