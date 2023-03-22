import React from 'react';
import config from '../../config/config';
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {getFirestore} from 'firebase/firestore';

initializeApp(config.firebaseConfig);

function Inscription() {
	const auth = getAuth();
	const db = getFirestore();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log('user créer', user.email);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.error(`Erreur lors de la création de l'utilisateur : ${errorCode} - ${errorMessage}`);
		});

	// Récupérer les inputs de l'utilisateur et les stocker dans la variable setEmail
	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
		console.log('email', email);
	};
	// Récupéer les inputs de l'utilisateur et les stocker dans la variable setPassword
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<div className='inscription-container'>
			<form action='submit' className='inscription-form'>
				<label htmlFor='Email'>
					Email
					<input
						id='email'
						type='email'
						name='email'
						value={email}
						onChange={handleEmail}
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
						onChange={handlePassword}
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
