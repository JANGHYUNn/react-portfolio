import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Skils.css';
import java from './logo/java-logo-vector.png';
import react from './logo/react.svg';
import js from './logo/900px-JavaScript-logo.png';
import jquery from './logo/iconfinder_JQuery_logo_282806.png';
import css from './logo/css.png';
import spring from './logo/spring.png';
import vue from './logo/vue.png';
import mybatis from './logo/mybatis.png';
import mssql from './logo/microsoft-sql-server.svg';
import oracle from './logo/oracle-logo.png';
import github from './logo/github-logo.png';
import html from './logo/html-5.png';
import svn from './logo/subversion-logo.png';
import webpack from './logo/webpack.jpg';

const Skils = () => (
  <div className="Skill" id="s">
    <h1 className="Skill_Heeding"> Skils </h1>
    <div className="Skill_Content">
      <h2 className="Skill_Title"> Launage</h2>
      <span className="Skill_Content">
        <div className="SKill_box">
          <div
            className="Skill_image_container"
            style={{ backgroundImage: `url(${java})`, textAlign: "left"}}
            data-tip
            data-for='java'
            data-place="right"
            data-type="info"
          >
            {/* <div className="Skill_label">초-중급</div> */}
            <ReactTooltip id="java" >• 자바를 이용하여 웹 어플리케이션을 개발<br/>• 싱글톤 구현<br/>• 쓰레드를 이용한 프로그램 개발</ReactTooltip>
          </div>
          <div
            className="Skill_image_container"
            style={{ backgroundImage: `url(${js})` , textAlign: "left"}}
            data-tip
            data-for='javascript'
            data-place="right"
            data-type="info"
          >
            {/* <div className="Skill_label">초-중급</div> */}
            <ReactTooltip id="javascript">• axios를 이용한 RestAPI 사용<br/>• 실행 컨텍스트에 대한 이해<br/>• this바인딩에 대한 이해<br/>• Closer를 이용한 캡슐화<br/>• prototype을 이용한 상속구현<br/>• 이벤트 버블링, 캡쳐 개념이해</ReactTooltip>
          </div>
        </div>
      </span>
      <h2 className="Skill_Title"> Web Skils</h2>
      <span className="Skill_Content">
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${html})` , textAlign: "left"}}
          data-tip
            data-for='html'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="html">• 상황에 맞는 시멘틱 태그 적용</ReactTooltip>
        </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${css})` , textAlign: "left"}}
          data-tip
            data-for='css'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="css">• 태그 및 문서 내부에서 정의하는 style로 문서꾸미기<br/>• 선택자의 이해<br/>• Form문서의 이해, 여러가지 문서 입력 양식만들기</ReactTooltip>
        </div>
        <div
            className="Skill_image_container"
            style={{ backgroundImage: `url(${js})` , textAlign: "left"}}
            data-tip
            data-for='javascript'
            data-place="right"
            data-type="info"
          >
            {/* <div className="Skill_label">초-중급</div> */}
            <ReactTooltip id="javascript">• axios를 이용한 RestAPI 사용<br/>• 실행 컨텍스트에 대한 이해<br/>• this바인딩에 대한 이해<br/>• Closer를 이용한 캡슐화<br/>• prototype을 이용한 상속구현<br/>• 이벤트 버블링, 캡쳐 개념이해</ReactTooltip>
          </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${jquery})` , textAlign: "left"}}
          data-tip
            data-for='jquery'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초-중급</div> */}
          <ReactTooltip id="jquery">• 유효성 검사(요소 제어, 이벤트 처리, ajax중복 검사)</ReactTooltip>
        </div>
      </span>
      <h2 className="Skill_Title">FrameWork</h2>
      <span className="Skill_Content">
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${vue})` ,textAlign: "left" }}
          data-tip
            data-for='vue'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="vue">• MVVM 패턴의 이해<br/>• vuex를 통한 데이터 상태관리<br/>• vue-router를 사용한 컴포넌트 통신(dynamic import, navigation gard)<br/>• Mixin을 이용한 코드 재사용<br/>• slot을 이용한 분기처리</ReactTooltip>
        </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${react})` ,textAlign: "left" }}
          data-tip
            data-for='react'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="react">• spa에 대한 개념이해<br/>• state, props 기본 사용법<br/>• 이벤트 핸들링을 이용한 기능 개발</ReactTooltip>
        </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${spring})`  ,textAlign: "left"}}
          data-tip
            data-for='spring'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초-중급</div> */}
          <ReactTooltip id="spring">• Spring AOP개념과 활용<br/>• Spring MVC 패턴 이용 WebApp제작</ReactTooltip>
        </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${mybatis})` ,textAlign: "left"}}
          data-tip
            data-for='mybatis'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초-중급</div> */}
          <ReactTooltip id="mybatis">• MyBatis연동 이용 WebApp, xml작성</ReactTooltip>
        </div>
      </span>

      <h2 className="Skill_Title">DataBase</h2>
      <span className="Skill_Content">
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${mssql})`  ,textAlign: "left"}}
          data-tip
            data-for='mssql'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초-중급</div> */}
          <ReactTooltip id="mssql">• T-SQL이용한 프로시저 작성 </ReactTooltip>
        </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${oracle})` ,textAlign: "left"}}
          data-tip
            data-for='oracle'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="oracle">• DB 설치 및 기본 SQL(join, subQuery)작성<br/>• 트랜잭션의 개념과 처리 방법 작성</ReactTooltip>
        </div>
      </span>

      <h2 className="Skill_Title">Etc</h2>
      <span className="Skill_Content">
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${github})`,textAlign: "left" }}
          data-tip
            data-for='github'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="github">• 기본 push, pull, commit, clone 사용 가능<br/>• branch를 이용한 버전관리</ReactTooltip>
        </div>
        <div
          className="Skill_image_container"
          style={{ backgroundImage: `url(${webpack})` ,textAlign: "left" }}
          data-tip
            data-for='webpack'
            data-place="right"
            data-type="info"
        >
          {/* <div className="Skill_label">초급</div> */}
          <ReactTooltip id="webpack">• 모듈번들링에 대한 개념 이해<br/>• 주요 4가지 entry, output, module, plugin 을 이용한 webpack 설정</ReactTooltip>
        </div>
      </span>
    </div>
  </div>
);

export default Skils;
