import React from 'react';
import ReactDOM from 'react-dom/client';
import './_index.scss';
import { BrowserView, MobileOnlyView } from 'react-device-detect';
import BillBoard from './components/BillBoard/BillBoard';
import GambleCalc from './components/GambleCalc/GambleCalc';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <MobileOnlyView>
      <GambleCalc />
    </MobileOnlyView>
    <BrowserView>
      <BillBoard />
    </BrowserView>
  </React.StrictMode>
);
