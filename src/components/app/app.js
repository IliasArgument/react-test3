import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import gotService from "../../services/gotService";
import {
  CharacterPage,
  CharacterItem,
  BookPages,
  HousePages,
  BookItem,
} from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";

class App extends React.Component {
  gotService = new gotService();

  state = {
    show: true,
  };

  onShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { show } = this.state;
    const look = show ? <RandomChar /> : null;

    return (
      <>
        <div className="app">
          <Router>
            <Container>
              <Header />
            </Container>
            <Container>
              <Row>
                <Col lg={{ size: 5, offset: 0 }}>
                  {look}
                  <button className="toggle-btn" onClick={() => this.onShow()}>
                    warning
                  </button>
                </Col>
              </Row>
              <Route
                path="/"
                component={() => <h1>Welcome to GOT DB</h1>}
                exact
              />
              <Route path="/characters/" component={CharacterPage} exact />
              <Route
                path="/characters/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <CharacterItem charId={id} />;
                }}
              />
              <Route path="/books/" component={BookPages} exact />
              <Route
                path="/books/:id"
                render={({ match}) => {
                  const { id } = match.params;
                  console.log('Nigga',id);
                  return <BookItem bookId={id} />;
                }}
              />
              <Route path="/houses/" component={HousePages} />
              {/* <Route path='/houses/:id' render={
                            ({match}) => {
                        const {id} = match.params;
                        return <HouseItem houseId={id}/>


                            }} />      */}
            </Container>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
