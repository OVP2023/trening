import { Component } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
const jsonData = [{
  date: "Дата",
  km: "Км",
  }
]


class ListView extends Component {
constructor(props) {
  super(props);
  this.handleSubmitx = this.handleSubmitx.bind(this);
  this.state = {flag:''}
}

handleSubmitx(event) {
  for (let i = jsonData.length; i--; ) {
    if (jsonData[i].date === event.target.getElementsByTagName('input')[0].value){
      jsonData.splice(i, 1)
    }
  }
  this.setState({flag: 5});
  event.preventDefault();
  
}
render() {
  return (
    <> 
       {jsonData.map(product => ( 
         <form className="out"  onSubmit={this.handleSubmitx}>
            <input type="text" value={product.date}  />
            <input type="text" value={product.km}  />
            <input  className="buttonx" type="submit" value="X" />
         </form>
      ))}
   </>
 );
}
} 

class NameForm extends Component {
constructor(props) {
super(props);
this.state = {valfirst: '',valsecond: '',flag:''};
this.handleChangeFirst = this.handleChangeFirst.bind(this);
this.handleChangeSecond = this.handleChangeSecond.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeFirst(event) {
this.setState({valfirst: event.target.value});
}
handleChangeSecond(event) {
this.setState({valsecond: event.target.value});
}

handleSubmit(event) {
console.log(this.state)
let flg = 0
let dataVal = this.state.valfirst
let kmVal = this.state.valsecond
for (let i = jsonData.length; i--; ) {
  console.log(jsonData[i].date,' ', dataVal)
  if (jsonData[i].date === dataVal){
    jsonData.splice(i, 1,{date:dataVal,km:(Number(jsonData[i].km) + Number(this.state.valsecond))})
    flg = 1
  }
}

if (flg == 0) {
  jsonData.push({date:this.state.valfirst,km:this.state.valsecond});
}
this.setState({flag: 5});
event.preventDefault();

}
render() {
return (
  <>
    <form onSubmit={this.handleSubmit}>
      <label className="first">
        Дата:
        <br />
        <input type="text" value={this.state.valfirst} onChange={this.handleChangeFirst} />
      </label>
       <br />
      <label className="second">
        Количество км:
        <br />
        <input type="text" value={this.state.valsecond} onChange={this.handleChangeSecond} />
      </label>
      <br />     
      <input className="button" type="submit" value="OK" />
    </form>
    <ListView />
 </>
);
}
}





export default NameForm 
