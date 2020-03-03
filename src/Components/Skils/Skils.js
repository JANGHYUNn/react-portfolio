import React from 'react';
import './Skils.css';
import java from './logo/java-logo-vector.png';
import react from './logo/react.svg';
import js from './logo/900px-JavaScript-logo.png';
import jquery from './logo/iconfinder_JQuery_logo_282806.png';
import css from './logo/css.png';
import spring from './logo/spring.png';
import mybatis from './logo/mybatis.png';
import mssql from './logo/microsoft-sql-server.svg';
import oracle from './logo/oracle-logo.png';
import github from './logo/github-logo.png';
import html from './logo/html-5.png';
import svn from './logo/subversion-logo.png';


const Skils = () => (


  <div className="Skill" id="s">
    <h1 className="Skill_Heeding"> Skils </h1>
    <div className="Skill_Content">
    <h2 className="Skill_Title"> Launage</h2>
    <span className="Skill_Content">
    <div className="SKill_box">
    <div className="Skill_image_container" style={{backgroundImage: `url(${java})`}}><div className="Skill_label">초-중급</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${js})`}}><div className="Skill_label">초-중급</div></div>
     </div>
    </span>
     <h2 className="Skill_Title"> Web Skils</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${html})`}}><div className="Skill_label">초급</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${css})`}}><div className="Skill_label">초급</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${js})`}}><div className="Skill_label">초-중급</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${jquery})`}}><div className="Skill_label">초-중급</div></div>
    
    </span>
    <h2 className="Skill_Title">FrameWork</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${react})`}}><div className="Skill_label">초급</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${spring})`}}><div className="Skill_label">초-중급</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${mybatis})`}}><div className="Skill_label">초-중급</div></div>
    </span>

    <h2 className="Skill_Title">DataBase</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${mssql})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${oracle})`}}><div className="Skill_label">Intermediate</div></div>
    </span>
    
    
    
    <h2 className="Skill_Title">Etc</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${github})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${svn})`}}><div className="Skill_label">Intermediate</div></div>
    </span>
    </div>
  </div>
);


export default Skils;