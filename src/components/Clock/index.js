import { Component } from 'react';
import './style.scss';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      cronometro: 60,
      toggleRetomar:true,
      textoBotao: 'Pausar'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    if (this.state.cronometro === 0)  
    this.componentWillUnmount()

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      cronometro: this.state.cronometro - 1
    })
  }

  restart =()=>{
    this.componentWillUnmount();
    this.setState({
      cronometro: 60
    })
    this.componentDidMount();
  }

  pausarEretomar = () =>{
    this.setState({
      toggleRetomar:!this.state.toggleRetomar
    })
    
    if(this.state.toggleRetomar){
      this.componentWillUnmount();
      
      this.setState({
        textoBotao:'Retomar'
      })
    } else{
      this.componentDidMount()

      this.setState({
        textoBotao:'Pausar'
      })
    }
  }


  render() {
    return (
      <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" >
        <h2>{this.state.cronometro}</h2>
        <div>
          <button onClick={this.pausarEretomar}>{this.state.textoBotao}</button>
          <button onClick={this.restart}>Reiniciar</button>
        </div>
      </div>
    )
  }
}