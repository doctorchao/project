import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import one from './views/one';
import two from './views/two';
import third from './views/person';
import eor from './views/notFound'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/two">第二页</Link></li>
          </ul>
        </header>
        <hr/>
        <Switch> // 相同效果路由 会只执行一个
          <Route path="/" exact component={one} /> 
          <Route path="/two" component={two} />
          <Route path="/girl/:id" component={third} />


          
          <Route path="/404" component={eor} />
          <Route component={eor} />
          {/* <Route render={()=>
            <Redirect to="/404"></Redirect>
          } component={eor} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;


