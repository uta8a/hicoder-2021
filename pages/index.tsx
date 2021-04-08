import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>広島大学コンピュータサークル HiCoder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.desc}>HiCoder</h1>
          <div className={styles.desc}>
            <span>広島大学 コンピュータサークル HiCoderです！</span>
            <span>プログラミングに興味がある人を募集しています。</span>
          </div>
          <div className={styles.desc}>
            <span>Zoomでオンライン説明会をします！</span>
            <span>この google formから申し込みをしてください。</span>
            <span>次回の説明会は4/9(金)！ぜひ来てください。</span>
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.desc}>活動</h1>
          <div className={styles.act}>
            <span>
              HiCoderは、広島大学のコンピュータが好きな学生の集まりです。
            </span>
            <span>活動は</span>
            <span>・オンライン雑談会</span>
            <span>・競技プログラミング</span>
            <span>・Web開発</span>
            <span>・LT会</span>
            <span>これから</span>
            <span>・もくもく会</span>
            <span>・ハッカソン</span>
            <span>・ITトライアスロン</span>
            <span>を開催する予定です。</span>
          </div>
        </div>
        <div className={styles.container}>
          <h1 className={styles.desc}>実績</h1>
          <span>
            ハッカソン出場、大学別対抗プログラミングコンテストへの出場、LT会の開催
          </span>
        </div>
        <div className={styles.container}>
          <h1>contact</h1>
        </div>
      </main>

      <footer className={styles.footer}>Powered by HiCoder</footer>
    </div>
  );
};
export default Home;
