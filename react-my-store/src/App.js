import React from "react";
import Product from "./components/Product";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-12">
                <h2>React My Store</h2>
              </div>
            </div>
          </div>
          <Product/>
        </div>
      </Container>
    );
  }
}

export default App;