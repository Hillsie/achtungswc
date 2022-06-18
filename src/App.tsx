import * as React from 'react';
import Main from './md/main.mdx';
import logo from './logo.svg';
import  styles from './App.module.css';
import clsx from 'clsx';

function App() {
  console.log('App'); // Console log  stripped out with .swcrc config
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />

        <ul className={styles.AppList}>
          <li className="box-decoration-slice bg-gradient-to-r from-green-400 to-blue-500 text-white px-2">Tailwindcss</li>
          <li className="box-decoration-slice bg-gradient-to-r from-blue-600  to-pink-500 text-white px-2">TypeScript</li>
          <li className="box-decoration-slice bg-gradient-to-r from-green-600  to-blue-500 text-white px-2">React router</li>
          <li className="box-decoration-slice bg-gradient-to-r from-orange-700  to-red-600 text-white px-2">Mobx</li>
          <li className="box-decoration-slice bg-gradient-to-r from-blue-600  to-pink-500 text-white px-2">MDX</li>
        </ul>
      </header>
      <Main />
    </div>
  );
}

export default App;
