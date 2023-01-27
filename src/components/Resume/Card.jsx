import React,{useEffect} from "react";
import styled from "styled-components";
import "./Resume.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])



  const Wrapper = styled.section`
  /* background-color: green; */
  .box{
    /* border: 3px solid red; */
    .title_content{
      border: 3px solid rgb(33, 33, 33);
      box-shadow: 5px 15px 20px 0px rgb(5, 5, 5);
      .edu-tittle{
        font-size: 3rem;
      }
      .personal{
        font-size: 2.4rem;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        color: black;
      }
    }
  }
  `;

  return (
    <>
      <Wrapper>
        <div className='box btn_shadow'>
          <div className='title_content d_flex' data-aos="slide-down">
            <div className='title' data-aos="zoom-in">
              <h3 className="edu-tittle">{props.title}</h3>
              <h3 className="personal">{props.name}</h3>
              <h3 className="personal">{props.dob}</h3>
              <h3 className="personal">{props.sex}</h3>
              <h3 className="personal">{props.status}</h3>
              <h3 className="personal">{props.national}</h3>
              <h3 className="personal">{props.lang}</h3>
              <h3 className="personal">{props.hoby}</h3>
              <h3 className="personal">{props.addrs}</h3>
              <p>{props.desc}</p>
              <span>{props.marks}</span>
              {/* <span>{props.year}</span> */}

            </div>
            {/* <div className='title'>
              <h3 className="edu-tittle">{props.name}</h3>
              <h3 className="edu-tittle">{props.dob}</h3>
              <span>{props.sex}</span>
              <span>{props.status}</span>

            </div> */}
            {/* <div className='rate'>
            <button className='btn_shadow '>{props.rate}</button>
          </div> */}
            <hr />
          </div>

        </div>
      </Wrapper>
    </>
  );
};

export default Card;
