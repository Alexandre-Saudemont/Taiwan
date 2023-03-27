import React from 'react';
import config from '../../config/config';
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {useState} from 'react';
import {addDoc, collection, getFirestore} from 'firebase/firestore';

// Initialize Firebase
initializeApp(config.firebaseConfig);

console.log('firebase', initializeApp(config.firebaseConfig));

function Inscription() {
	const auth = getAuth();
	const db = getFirestore();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	// To register a new user
	function handleSubmit(event: any) {
		event.preventDefault();
	}
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const serverResponse = error.serverResponse;
			console.error(`Erreur lors de la création de l'utilisateur : ${errorCode} - ${errorMessage}- ${serverResponse}`);
		});

	// // Récupérer les inputs de l'utilisateur et les stocker dans la variable setEmail
	// const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setEmail(event.target.value);
	// 	console.log('email', email);
	// };
	// // Récupéer les inputs de l'utilisateur et les stocker dans la variable setPassword
	// const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setPassword(event.target.value);
	// };

	return (
		<div className='inscription-container'>
			<form action='submit' className='inscription-form' onSubmit={handleSubmit}>
				<label htmlFor='Email'>
					Email
					<input
						id='email'
						type='email'
						name='email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder='VotreEmail@exemple.com'
						className='inscription-input'
					/>
				</label>

				<label htmlFor='password'>
					Mot de passe
					<input
						type='password'
						name='password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder='Votre mot de passe'
						className='inscription-input'
					/>
				</label>
				<button type='submit'>Envoyer</button>
			</form>
		</div>
	);
}

export default Inscription;
