import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/_index.scss';
import { BrowserView, MobileOnlyView, isMobile } from 'react-device-detect';
import Home from 'components/Home';
import BillBoard from 'components/BillBoard';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    {
      isMobile ? (
        <MobileOnlyView>
          <Router>
            <Home />
          </Router>
        </MobileOnlyView>
      ) : (
        <BrowserView>
          <BillBoard />
        </BrowserView>
      )
    }
  </React.StrictMode >
);
