import React, { Component } from 'react';
import {HashRouter,Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import fv from './img/fv.png';

class Docs extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="main-container">
        <ul className="aside  Docs-aside">
            <li><NavLink activeClassName="active" to="/docs/code">编码规范</NavLink><span  onClick={this.props.change}>&gt;</span></li>
            <ul className="tab-child" style={this.props}>
              <li><NavLink activeClassName="active" to="/docs/sql" >SQL规范</NavLink></li>
              <li><NavLink activeClassName="active" to="/docs/java">Java基础开发规范</NavLink></li>
              <li><NavLink activeClassName="active" to="/docs/framework">Java后端服务开发规范</NavLink></li>
              <li><NavLink activeClassName="active" to="/docs/rest">Rest api 规范</NavLink></li>
              <li><NavLink activeClassName="active" to="/docs/front">前端服务开发规范</NavLink></li>
              <li><NavLink activeClassName="active" to="/docs/git">git 提交规范</NavLink></li>
              <li><NavLink activeClassName="active" to="/docs/gitlab">gitLab CI规范</NavLink></li>
            </ul>
            
          </ul>
          <div className="main-content">
            <Switch>
              <Route path="/docs/code" component={Code}/>
              <Route path="/docs/sql" component={Sql}/>
              <Route path="/docs/java" component={Java} />
              <Route path="/docs/framework" component={Framework}/>
              <Route path="/docs/rest" component={Rest} />
              <Route path="/docs/front" component={Front}/>
              <Route path="/docs/git" component={Git} />
              <Route path="/docs/gitlab" component={GitLab} />
              <Route component={Home}/>
            </Switch>
          </div>
      </div>
    );
  }
}

class Summary extends Component {
  render() {
    return (
      <div className="main-container">
        <ul className="aside Summary-aside">
            <li><NavLink activeClassName="active" to="/summary/backtend">后端</NavLink></li>
            <li><NavLink activeClassName="active" to="/summary/frontend">前端</NavLink></li>
            <li><NavLink activeClassName="active" to="/summary/android">移动中心</NavLink></li>
            <li><NavLink activeClassName="active" to="/summary/pre">提前批</NavLink></li>
            <li><NavLink activeClassName="active" to="/summary/rongjing">融晶</NavLink></li>
            <li><NavLink activeClassName="active" to="/summary/test">测试中心</NavLink></li>
          </ul>
          <div className="main-content">
            <Switch>
              <Route path="/summary/backtend" component={Backend}/>
              <Route path="/summary/frontend" component={Frontend} />
              <Route path="/summary/android" component={Android}/>
              <Route path="/summary/pre" component={Pre} />
              <Route path="/summary/rongjing" component={Rongjing}/>
              <Route path="/summary/test" component={Test} />
              <Route component={Backend}/>
            </Switch>
          </div>
      </div>
    );
  }
}
class Home extends Component{
  render(){
    return (
      <div className="main-content-text">
        首页
      </div>
    );
  }
}
class Code extends Component{
  render(){
    return (
      <div className="main-content-text">
        编码规范
      </div>
    );
  }
}
class Sql extends Component{
  render(){
    return (
      <div className="main-content-text">
        Sql
      </div>
    );
  }
}
class Java extends Component{
  render(){
    return (
      <div className="main-content-text">
        Java
      </div>
    );
  }
}
class Framework extends Component{
  render(){
    return (
      <div className="main-content-text">
        Framework
      </div>
    );
  }
}
class Rest extends Component{
  render(){
    return (
      <div className="main-content-text">
        Rest
      </div>
    );
  }
}
class Front extends Component{
  render(){
    return (
      <div className="main-content-text">
       Front
      </div>
    );
  }
}
class Git extends Component{
  render(){
    return (
      <div className="main-content-text">
        Git
      </div>
    );
  }
}
class GitLab extends Component{
  render(){
    return (
      <div className="main-content-text">
        GitLab
      </div>
    );
  }
}
class Backend extends Component{
  render(){
    return (
      <div className="main-content-text">
        Backend
      </div>
    );
  }
}
class Frontend extends Component{
  render(){
    return (
      <div className="main-content-text">
        Frontend
      </div>
    );
  }
}
class Android extends Component{
  render(){
    return (
      <div className="main-content-text">
        Android
      </div>
    );
  }
}
class Pre extends Component{
  render(){
    return (
      <div className="main-content-text">
        Pre
      </div>
    );
  }
}
class Rongjing extends Component{
  render(){
    return (
      <div className="main-content-text">
        Rongjing
      </div>
    );
  }
}
class Test extends Component{
  render(){
    return (
      <div className="main-content-text">
        Test
      </div>
    );
  }
}

class App extends Component {

  constructor(){
    super();
    this.state={
      display:'block'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    if(this.state.display === 'block'){
      this.setState({
        display:'none'
      });
    }else{
      this.setState({
        display:'block'
      });
    }
  } //通过change属性传递过去

  render() {
    return (
      <HashRouter>
        <div className="container" >
          <ul className="header">
            <img src={fv}/>
            <li><NavLink to="/summary">每日总结</NavLink></li>
            <li><NavLink to="/docs">文档</NavLink></li>
          </ul>
          <div className="main">
            <Switch>
              <Route path="/docs" component={Docs} />
              <Route path="/summary" component={Summary} />
              <Route component={Docs}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
