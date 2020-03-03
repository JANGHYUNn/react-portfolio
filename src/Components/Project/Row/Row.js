import React from 'react';
// import sia from './image/1.png';
import github from './image/github-logo.svg';
import  './Row.css';
// import virtual from './image/virtual.png';
// import smartmirror from './image/smartmirror.png';

const Row = () => (
  <div className="Row">
    <div className="Box">
      <div className="Box_image">
      {/* <a href="https://github.com/weaklion/React-spa"> <img src={sia} alt="sia" className="image"></img></a> */}
        이미지
      </div>
      <div className="Box_info">
      <h1 className="Box_title">title</h1>
     
      <h2 className="name">개발기간</h2>
      <p className="Box_content">설명
      </p>
      <ul className="Box_ul">   
      {/* <li  className="Box_li">#React</li>  
       <li className="Box_li">#Redux</li>  
       <li className="Box_li">#Node.js(Koa)</li>
       <li className="Box_li">#MongoDB</li>  */}
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      {/* <a href="https://github.com/weaklion/React-spa" alt="github"> <img src={github} alt="github" className="icon_image"/></a> */}
       </li>
      </ul>
            </div>
    </div>

     <div className="Box">
      <div className="Box_image">
      이미지
      {/* <a href="https://github.com/weaklion/StreetTravel"> <img src={virtual} alt="Virtual" className="image"></img></a> */}
      </div>
      <div className="Box_info">
      <h1 className="Box_title">title</h1>

      <h2 className="name">개발기간</h2>
      <p className="Box_content">설명
      </p>
      <ul className="Box_ul">   
      {/* <li  className="Box_li">#Java</li>  
       <li className="Box_li">#GoogleAPI</li>  
       <li className="Box_li">#Android</li> */}
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      {/* <a href="https://github.com/weaklion/StreetTravel" alt="github"> <img src={github} alt="github" className="icon_image"/></a> */}
       </li>
      </ul>
            </div>
    </div>
    <div className="Box">
       <div className="Box_image">
       이미지
       {/* <a href="https://github.com/weaklion/Jarvis_Mirror"> <img src={smartmirror} alt="smartMirror" className="image"></img> </a> */}
      </div>
      <div className="Box_info">
      <h1 className="Box_title">title</h1>
     
      <h2 className="name">개발기간</h2>
      <p className="Box_content">설명
      </p>
      <ul className="Box_ul">   
      {/* <li  className="Box_li">#JavaScript</li>  
       <li className="Box_li">#Raspberry Pi</li>  
       <li className="Box_li">#Node.js</li>
       <li  className="Box_li">#Electron</li>  */}
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      {/* <a href="https://github.com/weaklion/Jarvis_Mirror" alt="github"> <img src={github} alt="github" className="icon_image"/></a> */}
       </li>
      </ul>
            </div>
            </div>
    </div>
);


export default Row;