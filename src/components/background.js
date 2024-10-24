import React from 'react';
import Header from './header';
import Maincontent from './maincontent';
function Background() {
    return (
      <div className="background">
        <div>
            <Header/>
        </div>
          <Maincontent/>
      </div>
    );
  }
  
  export default Background;