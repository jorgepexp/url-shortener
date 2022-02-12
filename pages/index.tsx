import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRef, useState } from 'react';
import axios from 'axios';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortURL, setShortURL] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current !== null) {
      const url = inputRef.current.value ?? '';
      axios
        .post('/api/shortenUrl', {
          url: JSON.stringify(url),
        })
        .then(response => {
          setShortURL(response.data.randomUrl);
        })
        .catch(error => console.error(error.message));
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>URL Shortener</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>URL Shortener</h1>

        <p className={styles.description}>Shorten here your URL&apos;s</p>

        <div className={styles.grid}>
          <form className={styles.card} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type='text'
              className={styles.input}
              placeholder='URL'
            />
            <button className={styles.button}>Shorten</button>
            <span className={styles.input}>{shortURL}</span>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
