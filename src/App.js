import React, { Component } from 'react'
import Home from './Pages/Home/Home'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import SideDrawer from './Components/Navbar/SideDrawer/SideDrawer'
import Footer from './Components/Footer/Footer'
import MainForm from './Components/MainForm/MainForm'
import Modal from 'react-modal'

class App extends Component {
  state={
    SideDrawerOpen : false,
    MainFormOpen : false
  }

  SideDrawerToggleHandler = () => {
    this.setState(prevState => ({
      SideDrawerOpen : !prevState.SideDrawerOpen
    }))
  }
  CloseDrawerHandler = () => {
    this.setState({SideDrawerOpen : false})
  }

  MainFormToggleHandler = () => {
    this.setState(prevState => ({
      MainFormOpen : !prevState.MainFormOpen
    }))
  }
  CloseMainFormHandler = () => {
    this.setState({MainFormOpen: false})
  }
 
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar ToggleSideDrawer={this.SideDrawerToggleHandler} />
          <SideDrawer
            show={this.state.SideDrawerOpen}
            CloseHandler={this.CloseDrawerHandler}
          />
          <Modal>
            
          </Modal>
          <Switch>
            <Route path='/blog' exact component={Home} />
            <Route path='/portfolio' exact component={Home} />
            <Route path='/' exact component={Home} />
          </Switch>

          <Footer></Footer>
          {/* <MainForm></MainForm> */}
          
        </div>
      </Router>
    )
  }
}

export default App;
