import React,{Component} from 'react';
import  './Home.css';
class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      text:"Developer 김장현의 포트폴리오 입니다."
    }
  };

  componentDidMount() {
    let i =0;

    // const typing = setInterval(() =>{
    //   const typed = this.state.text;
    //   const finalText= "Developer 김장현의 포트폴리오 입니다.";

    //   if(i<finalText.length) { 
    //     this.setState ({
    //       text: typed + finalText[i]
    //     });
    //     i++

    //   } else {
    //     clearInterval(typing);
    //   }
    // },178);
  }

  render(){
    return (
  <div className="typer" id="h">
    <section className="con">
    <h1 className="title1">
      <span>안녕하세요!</span>
      <span>클릭 해주셔서</span>
      <span>감사합니다!</span>
    </h1>
    <h2 className="title2">
      <span>Developer</span>
      <span>김장현의</span>
      <span>포트폴리오 입니다.</span>
    </h2>
  </section>
   {/* <h1 className="typer-text">{this.state.text}</h1> */}
  </div>
);
}
}

export default Home;