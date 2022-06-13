import * as React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  console.log('App'); // Console log  stripped out with .swcrc config
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Create React App Ejected with swc hack
          <ul className={styles.AppList}>
            <li>TypeScript</li>
            <li>Sass</li>
            <li>Mobx</li>
            <li>Yup</li>
          </ul>
        </p>
        <a
          className={styles['App-link']}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React and other stuff
        </a>
      </header>
    </div>
  );
}

export default App;
