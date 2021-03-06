import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faWallet, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { RecoilRoot } from 'recoil';

library.add(faCaretDown, faCaretUp, faWallet, faExternalLinkAlt);

function App() {
  return (
    <RecoilRoot>
      <Layout></Layout>
    </RecoilRoot>
  );
}

export default App;
