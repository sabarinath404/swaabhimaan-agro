import React, { useState } from 'react';
import axios from 'axios';
import addUser from './data';

const UserInputForm = () => {
  const [inputData, setInputData] = useState({
    productName: '',
    productId: 0,
    price: 0,
    description: '',
    features: '',
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

        // Get the actual name of the uploaded image
        newImageName = selectedImage.name;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    // Convert features string to an array
    const featuresArray = inputData.features.split(',').map(feature => feature.trim());

    // Call the addUser function with modified data
    const inputDataWithImage = {
      ...inputData,
      imageName: newImageName,
      productId: parseInt(inputData.productId),
      price: parseInt(inputData.price),
      features: featuresArray,
    };
    addUser(inputDataWithImage);

    // Add the user input and image data to Firebase if needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="productName">Product Name: </label>
          <input
            type="text"
            name="productName"
            value={inputData.productName || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="productId">Product ID: </label>
          <input
            type="text"
            name="productId"
            value={inputData.productId || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={inputData.price || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            value={inputData.description || ''}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="features">Features: </label>
          <textarea
            name="features"
            value={inputData.features || ''}
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
