/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Global, css} from '@emotion/react';
import emotionReset from 'emotion-reset';

import Privacypolicy from '@/pages/fromFooter/privacypolicy/index';
import Sitepolicy from '@pages/fromFooter/sitepolicy/index';
import Faq from '@/pages/fromFooter/faq/index';

import Footer from '@components/Footer/Footer';
import Header from './components/Header/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Global styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smooth: antialiased;
        }
      `} />
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path={`/`} element={<Home />} /> */}
          <Route path={`/privacypolicy`} element={<Privacypolicy />} />
          <Route path={`/sitepolicy`} element={<Sitepolicy />} />
          <Route path={`/faq`} element={<Faq />} />
          {/* 上から順番にマッチしていく */}
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>,
);
