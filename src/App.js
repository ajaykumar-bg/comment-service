import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import CommentsPage from './components/CommentsPage';

function App() {
	return (
		<div>
			<Header />
			<main>
				<CommentsPage />
			</main>
			<Footer />
			<ToastContainer autoClose={3000} hideProgressBar />
		</div>
	);
}

export default App;
