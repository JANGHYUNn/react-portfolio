import React, { Component } from 'react';
import  './About.css';

class About extends Component {

  render() {
    return (
   
      <div className="about_me" id="a" >
   <div className="about_me_title">
       <h1 className="hedding">About Me</h1>
       
   </div>
   <div className="about_me_content">
   <h1>프론트엔드 개발자</h1>
   <section className="about_me_section">
        <p>
          저는 개발자로써에 경력은 약 1년 6개월 정도 되어 다른 신입과 달리 실무 경험으로 다른 분야와 원활한 소통 능력이있다고 생각됩니다.
          <br/>
          그리구 백엔드 개발 경험도 있기때문에 백엔드 개발자와 원활하게 커뮤니케이션이 가능 합니다.
          <br/>
          프론트엔드 개발자가 되고싶은 이유는 javascript에 대한 전문가가 되고싶어서 입니다.
          <br/>
          이유는 javascript에 매력에 이끌려서 입니다. 특히 javascript가 가지는 자유로움에 끌렸습니다.
          <br/>
          운영체제를 가리지 않는 자유로움, 변수 타입에 제한을 두지 않는 자유로움, 또 웹이 확장되어가고 
          탈웹의 흐름에 따라 더 많은 곳에서 사용될 가능성이 저를 매료시켰습니다. 
          생활코딩 강의를 들으면서도 jQuery 같은 강력한 라이브러리가 자바스크립트에 기반을 두고 있다는 
          사실 이 언어를 매력적으로 보이게 만들었습니다.<br/>
          저는 전문가가 되기 위해 계속 공부하여 '잘하는'개발자로써 남고 싶습니다.
        </p>
        </section>
   </div>
   </div>
 
    );
  }
}


export default About;