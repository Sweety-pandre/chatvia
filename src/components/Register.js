import React, { useState } from 'react'
import "./Register.css";
import logo from "../imgs/logo.png"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from "firebase/firestore"





function Register() {


    const [err, setErr] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const fileInput = e.target[3];



        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            console.error("No file selected.");
            return; // Return early if no file was selected
        }
        const file = fileInput.files[0];




        try {
            // Create a user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
        
            // Reference to Firebase Storage using the user's display name
            const storageRef = ref(storage, `${displayName}`);
        
            // Upload the file to Firebase Storage
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            // Set up progress tracking (optional)
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // You can track upload progress here if needed
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload is ${progress}% done`);
                },
                (error) => {
                    console.error("Error uploading file: ", error);
                    setErr(true);
                },
                async () => {
                    // Upload completed successfully, get the download URL
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        
                        // Update the user's profile with display name and photo URL
                        await updateProfile(user, {
                            displayName,
                            photoURL: downloadURL,
                        });
        
                        // Add user data to Firestore (if you're using Firestore)
                        await setDoc(doc(db, 'users', user.uid), {
                            uid: user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
                    } catch (error) {
                        console.error("Error getting download URL or updating user profile: ", error);
                        setErr(true);
                    }
                }
            );
        } catch (err) {
            console.error("Error creating user: ", err);
            setErr(true);
        }
        
    };









    return (

        <div className="container">

            <div className="left">
                <div className="leftContainer">

                    <h2 className="title">
                        <span className="title-word title-word-1">Ch</span>
                        <span className="title-word title-word-2">at</span>
                        <span className="title-word title-word-3">vi</span>
                        <span className="title-word title-word-4">a</span>
                    </h2>
                    <h4>Connect with people u know.... </h4>
                </div>

            </div>

            <div className="formContainer">
                <div className="formWrapper">
                    <img src={logo} alt="log" />

                    <p>Login to your Chatvia account now.</p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your Name " className="formEle" />
                        <input type="email" placeholder="Enter your email " className="formEle" />
                        <input type="password" placeholder="Password" className="formEle" />
                        <input type="file" id="file" className="formEle" />
                        <label htmlFor="file"><img src="" alt="" /></label>


                        <button type="submit" className='submitBtn'>Sign up</button>
                        {err && <span>An error occurred....</span>}</form>

                    <p>Already have an account? Signin </p>
                </div></div>
        </div>

    )
}

export default Register;