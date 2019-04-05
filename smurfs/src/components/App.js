import React from 'react';
import { Route } from 'react-router';

import SmurfNavBar from './SmurfNavBar';
import SmurfVillage from './SmurfVillage';
import AddSmurfForm from './AddSmurfForm';
import SmurfSpotlight from './SmurfSpotlight';
import EditSmurfForm from './EditSmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = () => {
  return (
    <div className='app'>
      <SmurfNavBar />
      <Route exact path='/' component={SmurfVillage} />
      <Route path='/addsmurfform' component={AddSmurfForm} />
      <Route path='/smurfspotlight/:id' component={SmurfSpotlight} />
      <Route path='/editsmurfform/:id' component={EditSmurfForm} />
    </div>
  );
};

export default App;
