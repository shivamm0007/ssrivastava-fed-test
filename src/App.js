import React from "react";
import Card from "./card";
import "./App.css";
class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={
      userList: []
    }
  }

  componentDidMount()
  {

    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => this.setState({userList:data.results}));

  }
  handleLoad = () => 
  {
let {userList} = this.state
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => this.setState({userList:userList.concat(data.results)}));

  }

  render()
  {
    let {userList} = this.state;
 
    return(<><div className="App">
      {
        userList.map((item)=> {
          return <Card key={item.login.uuid} name={item.name.title + " " + item.name.first + " " + item.name.last} id={item.id.value} gender={item.gender} city={item.location.city} country={item.location.country} email = {item.email} pic={item.picture.medium} cell={item.cell} /> 
        })
      }
       
    </div>
    <div>
   <button onClick={this.handleLoad} className="load">Load More</button>
     </div> 
    </>)
  }

}

export default App;