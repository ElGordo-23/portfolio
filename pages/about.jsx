import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
			      	Greetings People, I'm Felix, I'm a photographer by trade and I'm starting to learn to code like the madman I am.
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;