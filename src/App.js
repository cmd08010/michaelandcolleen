import './App.css';
import RSVP from './components/RSVP'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Nav from 'react-bootstrap/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Nav fill variant="tabs" defaultActiveKey="/home" className="App-header">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="/photos">Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" href="/rsvp">RSVP</Nav.Link>
            </Nav.Item>
          </Nav>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/rsvp">
            <Redirect to="https://michaelandcolleen.planningpod.com"/>
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
