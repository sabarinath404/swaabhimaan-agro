// addUser.js
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Make sure db is correctly initialized

const addUser = async (user) => {
  try {
    const usersCollection = collection(db, 'users'); // Change 'products' to 'users' or the correct collection name
    const docRef = await addDoc(usersCollection, user);
    console.log('Document written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error);
  }
};

export default addUser;



// const fetchUsers = async () => {
//   try {



// const fetchUsers = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, 'users'));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//     });
//   } catch (error) {
//     console.error('Error fetching documents:', error);
//   }
// };


// const updateDocument = async () => {
//   const userDocRef = doc(db, 'users', 'documentId'); // Replace 'documentId' with the actual document ID
//   const newData = {
//     first: 'Updated First Name',
//     last: 'Updated Last Name',
//     born: 2000,
//     // Add other fields you want to update
//   };

//   try {
//     await updateDoc(userDocRef, newData);
//     console.log('Document updated successfully.');
//   } catch (error) {
//     console.error('Error updating document:', error);
//   }
// };

// updateDocument();