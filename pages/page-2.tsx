import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page 2</title>
        <meta name='description' content='Page 2' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Page 2!</a>
        </h1>

        <p className={styles.description}>
          This is from page 2
          <code className={styles.code}>pages/page-2.tsx</code>
        </p>

        <div className={styles.grid}>
          <Link href='/' passHref>
            <div className={styles.card}>
              <h2>&larr; Home</h2>
              <p>Go to home.</p>
            </div>
          </Link>

          <Link href='/page-1' passHref>
            <div className={styles.card}>
              <h2>Page 1 &rarr;</h2>
              <p>Sample page 1!</p>
            </div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <img src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
