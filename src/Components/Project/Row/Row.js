import React from 'react';
import kcar from './image/kcar.png';
import hanskin from './image/hanskin.png';
import namyang from './image/namyang.png';
import github from './image/github-logo.svg';
import  './Row.css';


const Row = () => (
  <div className="Row">
    <div className="Box">
      <div className="Box_image">
      <a href="https://www.kcar.com/index.do"> <img src={kcar} alt="kcar" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">K car 직영중고차 리뉴얼</h1>
     
      <h2 className="name">개발기간 : 2018.07 ~ 2018.11</h2>
      <p className="Box_content">javascript localstorage 를 이용하여 최근 본 차량 조회 및 jQuery ajax 를 통해 찜목록 조회</p>
      <ul className="Box_ul">   
      <li  className="Box_li">#javascript</li>  
       <li className="Box_li">#jQuery</li>  
       <li className="Box_li">#Spring</li>
       <li className="Box_li">#Oracle</li> 
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
       </li>
      </ul>
            </div>
    </div>

     <div className="Box">
      <div className="Box_image">
      <a href="https://www.hanskin.com/main"> <img src={hanskin} alt="Virtual" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">셀트리온스킨큐어 한스킨 웹사이트 구축</h1>

      <h2 className="name">개발기간 : 2018.12 ~ 2019.03</h2>
      <p className="Box_content"> ERP와 EAI ( 두 시스템의 데이터 연동 )를 통해 송/수신 프로시저 작성
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#msSql</li>  
       <li className="Box_li">#Sql server</li>  
       <li className="Box_li">#T-SQL</li>
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
       </li>
      </ul>
            </div>
    </div>
    <div className="Box">
       <div className="Box_image">
       <a href="https://shopping.namyangi.com/main/main"> <img src={namyang} alt="namyang" className="image"></img> </a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">남양유업 커머스 구축</h1>
     
      <h2 className="name">개발기간 : 2019.04 ~ 2019.09</h2>
      <p className="Box_content">ERP와 EAI ( 두 시스템의 데이터 연동 )를 통해 송/수신 프로시저 작성
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#msSql</li>  
       <li className="Box_li">#Sql server</li>  
       <li className="Box_li">#T-SQL</li>
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      {/* <a href="https://github.com/weaklion/Jarvis_Mirror" alt="github"> <img src={github} alt="github" className="icon_image"/></a> */}
       </li>
      </ul>
            </div>
            </div>
            <div className="Box">
      <div className="Box_image">
      {/* <a href="https://www.hanskin.com/main"> <img src={hanskin} alt="Virtual" className="image"></img></a> */}
      </div>
      <div className="Box_info">
      <h1 className="Box_title">포스코 차세대 생산, 물류관리 시스템</h1>

      <h2 className="name">개발기간 : 2019.11 ~ 2020.01</h2>
      <p className="Box_content"> 작업지시서 등록 및 물류관리 조회 기능 개발
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#react</li>  
       <li className="Box_li">#mobx</li>  
       <li className="Box_li">#axios</li>
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
       </li>
      </ul>
            </div>
    </div>
    </div>
);


export default Row;