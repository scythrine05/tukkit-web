import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tukkit</title>
        <meta name="title" content="Tukkit" />
        <meta
          name="description"
          content=" Get updates on all sort startup and business related news in one swipe"
        />
        <meta
          name="keywords"
          content="news, shorts, e-magazine, magazine, business, startup"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/assets/logo/main.svg"
          alt="Tukkit logo"
          width={40}
          height={40}
        />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.content_large}>
            Latest Business <br /> and Startup news
          </h1>
          <p className={styles.content_small}>
            Get updates on all sort startup and business related news in one
            swipe instantly
          </p>
          <a>
            <Image
              src="/assets/badges/google-play.png"
              alt="Google-Play"
              width={200}
              height={80}
            />
          </a>
        </div>
        <div className={styles.images}>
          <Image
            src="/assets/images/main.png"
            alt="main"
            width={550}
            height={750}
            className={styles.main_img}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <a> Terms and Services</a>
          <a> Privacy </a>
        </div>
      </footer>
    </div>
  );
}
