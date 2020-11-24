import React, { Component } from 'react'
import Home from './Pages/Home/Home'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import SideDrawer from './Components/Navbar/SideDrawer/SideDrawer'
import Footer from './Components/Footer/Footer'

class App extends Component {
  state={
    SideDrawerOpen : false,
  }

  SideDrawerToggleHandler = () => {
    this.setState(prevState => ({
      SideDrawerOpen : !prevState.SideDrawerOpen
    }))
  }
  CloseDrawerHandler = () => {
    this.setState({SideDrawerOpen : false})
  }
 
  render() {
    return (
      <Router>
          <div className='App'>
            <Navbar ToggleSideDrawer={this.SideDrawerToggleHandler} />
            <SideDrawer show={this.state.SideDrawerOpen} CloseHandler={this.CloseDrawerHandler}/>
          <Switch>
            <Route path='/blog' exact component={Home} />
            <Route path='/portfolio' exact component={Home} />
            <Route path='/' exact component={Home} />
          </Switch>

          <Footer></Footer>
          </div>
      </Router>
    )
  }
}

export default App;
