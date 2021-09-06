import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
           {/* Changed title */}
            <h1 className="title">Hello, I'm Felix</h1>
            <p className="description">
             Most of the time I look only half as grumpy. ---></p>


            <Link href="/contact"><a className="cta">Contact me</a></Link>
          </div>

          <div className="image-wrapper">
            <img src = "/me.jpg" alt = "A picture of me." width="426" height="543" viewBox="0 0 426 543" fill="none" />
          </div>
          </div>
      </section>
    </>
  );
}

export default Home;