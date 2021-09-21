import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import _ from 'lodash';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Page 1</title>
        <meta name='description' content='Page 1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Page 1!</a>
        </h1>

        <p className={styles.description}>
          This is from page 1
          <code className={styles.code}>pages/page-1.tsx</code>
        </p>

        <p className={styles.description}>
          Use of lodash kebabCase
          <code className={styles.code}> {_.kebabCase('DevOps by Zack')}</code>
        </p>

        <div className={styles.grid}>
          <Link href='/' passHref>
            <div className={styles.card}>
              <h2>&larr; Home</h2>
              <p>Go to home.</p>
            </div>
          </Link>

          <Link href='/page-2' passHref>
            <div className={styles.card}>
              <h2>Page 2 &rarr;</h2>
              <p>Sample page 2!</p>
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
