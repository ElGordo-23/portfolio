import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Contact() {
	return (
		<>
			<Head>
			  <title>Contact</title>
			</Head>

			<Navbar />

			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">Contact</h1>
			      <p className="description">Hit me up peoples! I don't bite.

			      </p>
			      <ul className="contact-links">
			      	<li className="contact-item">Email: felix.lang[at]mailbox.org</li>
			      	<li className="contact-item">Phone: +43664 415 75 51</li>
						{/* Changed info above */}
			      </ul>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default Contact;