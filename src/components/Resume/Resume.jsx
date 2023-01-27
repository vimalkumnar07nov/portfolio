import React, { useEffect } from "react";
import "./Resume.css";
import ResumeApi from "./ResumeApi";
import Card from "./Card";
import { Button } from "../../style/Button";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])
  


  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1 className="my-resume" data-aos="slide-down">My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h1 data-aos="fade-right">Educational Qualification📚</h1>
                <h4 className="year">2012-2018</h4>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} marks={val.marks} desc={val.desc}  />
                  }
                })}
              </div>
            </div>
{/* --------------------------Personal Info Card------------------- */}
                
            <div className='left'>
              <div className='heading'>
                <h1 data-aos="fade-left">Personal information💁</h1>
                <a href='vimalcv.pdf' download='vimalkumar.pdf'>
                  <Button className='btn resume-btn' data-aos="slide-right">download cv 🔴 </Button>
                </a>
                {/* <h4 className="year">My detail</h4> */}
              </div>

              <div className='info'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "personal") {
                    return <Card key={index} name={val.name} dob={val.dob} sex={val.sex} status={val.status} desc={val.desc} national={val.national} lang={val.lang} hoby={val.hoby} addrs={val.addrs } />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume;
