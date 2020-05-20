import React from 'react';
import { BrowserRouter, HashRouter, Link, Redirect, Route } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./components/Admin";

const PageOne = (props) => {
  console.log("props page 1", props);
  return (
    <div>
      <h2>Page 1</h2>
      {/* <a href="/pageTwo">Ke Halaman 2</a> */}
      <Link to="/pageTwo">Ke Halaman 2</Link>
    </div>
  )
};

const PageTwo = () => {
  return (
    <div>
      <h2>Page 2</h2>
      {/* <a href="/">Ke Halaman Awal</a> */}
      <Link to="/">Ke Halaman 1</Link>
      <Link to="/pageThree/3">Ke Halaman 3</Link>
    </div>
  )
};

const PageThree = (props) => {
  console.log("props page 3", props);
  return (
    <div>
      Page {props.match.params.num}
      <Link to="/">Ke Halaman 1</Link>
    </div>
  )
};

class App extends React.Component {
  state = { auth: true }

  render() {
    return (
      // <div>
      //   <BrowserRouter>
      //     <Header />
      //     <div>
      //       <Route path="/" exact component={PageOne} />
      //       <Route path="/pageTwo" component={PageTwo} />
      //       <Route path="/pageThree/:num" component={PageThree}/>
      //       <Route path="/admin" component={Admin} />
      //     </div>
      //   </BrowserRouter>
      // </div>

      <div>
        <HashRouter>
          <Header />
          <div>
            <Route path="/" exact render={(props) => {
              // console.log("ini props", props)
              return <PageOne {...props} /> }} />
            <Route path="/pageTwo" render={(props) => {
              return this.state.auth ? <PageTwo {...props} /> : <Redirect to='/' />
            }} />
            <Route path="/pageThree/:num" component={PageThree} />
            <Route path="/admin" component={Admin} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
