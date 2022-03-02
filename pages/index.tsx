import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import NavBar from '../components/TheNavigation/index';
import {
  useTheme,
  Container,
  Row,
  Col,
  Spacer,
  Card,
  Divider,
  Input,
  Button,
  Text,
} from '@nextui-org/react';
import { useRef, useState } from 'react';

const Home: NextPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortURL, setShortURL] = useState('');
  const { theme, isDark } = useTheme();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current !== null) {
      const url = inputRef.current.value ?? '';

      await fetch('api/shortenUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
        .then(res => res.json())
        .then(data => {
          setShortURL(data.shortenedUrl);
        });
    }
  };

  return (
    <Container
      css={{
        background: isDark ? ' $blue900' : '$cyan100',
        margin: 0,
        minWidth: '100%',
      }}
    >
      <NavBar />

      <Head>
        <title>URL Shortener</title>
        <meta name='description' content='Basic custom URL shortener' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Text
          h1
          size={70}
          css={{
            textGradient: '45deg, $purple500 -20%, $pink500 100%',
            marginTop: '2rem',
          }}
        >
          URL Shortener
        </Text>
        <Text
          h2
          size={40}
          css={{
            color: '$black200',
            marginBottom: '2rem',
          }}
        >
          An easy way to shorten your URL&apos;s
        </Text>

        <Card
          bordered
          css={{
            width: '600px',
          }}
        >
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
            onSubmit={handleSubmit}
          >
            <Input
              ref={inputRef}
              placeholder='Enter here your URL'
              color='secondary'
              type='text'
              bordered
              clearable
              underlined
              animated={false}
            ></Input>

            <Spacer />
            <Button color='gradient' auto>
              Shorten
            </Button>
            <Spacer />
            <Container
              align='center'
              css={{
                display: shortURL.length === 0 ? 'none' : 'block',
              }}
            >
              <Text
                size={22}
                css={{
                  color: isDark
                    ? theme?.colors.white.value
                    : theme?.colors.black.value,
                }}
              >
                Your shortened url is
              </Text>
              <Divider />
              <Text
                size={18}
                css={{
                  color: isDark ? '$cyan500' : '$blue500',
                }}
              >
                {shortURL}
              </Text>
            </Container>
          </form>
        </Card>
      </main>
    </Container>
  );
};

export default Home;
