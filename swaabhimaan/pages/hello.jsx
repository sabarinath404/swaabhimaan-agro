import React, { useState } from 'react';
import firebase from 'firebase/app'; // Import Firebase if needed
import 'firebase/firestore'; // Import Firestore if needed
import addUser from './data';
import axios from 'axios';

const UserInputForm = () => {
  const [inputData, setInputData] = useState({
    first: '',
    last: '',
    born: 0,
  });
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image file

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Upload image if selected
    let newImageName = '';
    if (selectedImage) {
      try {
        const formData = new FormData();
        formData.append('myImage', selectedImage);
        const { data } = await axios.post('/api/image', formData);

        // Rename image using the first name
        newImageName = `${inputData.first}_${data.imageName}`;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    // Call the addUser function with modified data
    const inputDataWithImage = {
      ...inputData,
      imageName: newImageName,
    };
    addUser(inputDataWithImage);

    // Add the user input and image data to Firebase if needed
    try {
      await firebase.firestore().collection('users').add(inputDataWithImage);
    } catch (error) {
      console.error('Error adding to Firebase:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">First Name: </label>
          <input
            type="text"
            name="first"
            value={inputData.first || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="last">Last Name: </label>
          <input
            type="text"
            name="last"
            value={inputData.last || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="born">Born: </label>
          <input
            type="number"
            name="born"
            value={inputData.born || ''}
            onChange={handleInputChange}
          />
        </div>
        {/* File input for image selection */}
        <div>
          <label htmlFor="image">Image: </label>
          <input type="file" accept="image/*" onChange={handleImageSelect} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Input Object:</h2>
        <pre>{JSON.stringify(inputData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserInputForm;
