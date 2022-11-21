import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
        <a>
          <Image
            src="/assets/logo/main.svg"
            alt="Tukkit logo"
            width={30}
            height={30}
          />
        </a>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.content_large}>
            Latest Business <br /> and Startup news
          </h1>
          <p className={styles.content_small}>
            Get updates on all sort of startup and business related news in one
            swipe instantly
          </p>
          <Link href="https://play.google.com/store/apps/details?id=com.tukkit">
            <Image
              src="/assets/badges/google-play.png"
              alt="Google-Play"
              width={200}
              height={80}
            />
          </Link>
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
          <Link href="/assets/docs/terms-and-conditions.pdf">
            Terms and Conditions
          </Link>
          <Link href="/assets/docs/privacy-policy.pdf"> Privacy </Link>
        </div>
      </footer>
    </div>
  );
}
