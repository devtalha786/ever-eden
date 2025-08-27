// firebase/firebaseUtils.js
export const getFirebase = async () => {
	const firebase = (await import('../config/firebase')).default;
	return firebase;
};

// Function to get the users collection from Firestore
export const getUsersCollection = async () => {
	const firebase = await getFirebase();
	return firebase.firestore().collection('users');
};

// Function to get a specific user's document reference
export const getUserDocRef = async uid => {
	const usersCollection = await getUsersCollection();
	return usersCollection.doc(uid);
};

export const uploadImage = async file => {
	const firebase = await getFirebase();
	const filePath = `brands/${Date.now()}-${file.name}`;
	const storageRef = firebase.storage().ref().child(filePath);
	await storageRef.put(file);
	const downloadURL = await storageRef.getDownloadURL();
	return downloadURL;
};

export const deleteImageFromStorage = async imageUrl => {
	if (!imageUrl || typeof imageUrl !== 'string') return;
	try {
		const firebase = await getFirebase();
		const storageRef = firebase.storage().refFromURL(imageUrl);
		await storageRef.delete();
	} catch (error) {
		console.warn('Failed to delete image from storage:', error);
	}
};
