import React from 'react';
import {firebaseConfig} from '../../config/config';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {useState} from 'react';

initializeApp(firebaseConfig);
function Inscription() {
	const auth = getAuth();

	const [loading, setLoading] = useState(false);
	return (
		<div className='inscription-container'>
			<form action='submit' className='inscription-form'>
				<label htmlFor='Email'>
					Email
					<input type='email' name='email' placeholder='VotreEmail@exemple.com' className='inscription-input' />
				</label>

				<label htmlFor='password'>
					Mot de passe
					<input type='password' name='password' placeholder='Votre mot de passe' className='inscription-input' />
				</label>
			</form>
			<button type='submit'>Envoyer</button>
		</div>
	);
}

export default Inscription;
