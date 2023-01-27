import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Button } from '../style/Button';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  // ----------------animation code

  useEffect(() => {
    AOS.init({
      duration: 2000,
    },
      AOS.refresh())
  }, [])

  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div className='footer-top-div' data-aos='zoom-in'>
            <h3 className='footer-head'>Ready to get started?</h3>
            <h3 className='footer-head'>Talk to us today</h3>
          </div>

          <div className='contact-short-btn' data-aos='flip-down'>
            <NavLink to='/'>
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>ReactJs developer</h3>
            <p>Hii, I am ReactJs Front-End-Developer</p>
          </div>

          {/* 2nd column */}

          <div className='footer-subscribe'>
            <h3>Get In Touch</h3>
            <form
              action="https://formspree.io/f/myyveqrj"
              method="POST" >
              <input
                type='email'
                name="Email"
                required
                autoComplete='off'
                placeholder='Email'
              />
              <input type='submit' value='Subscribe' data-aos='flip-up'/>
            </form>
          </div>

          {/* 3rs column  */}

          <div className='footer-social'>
            <h3>Follows Me👍</h3>
            <div className='footer-social--icons' data-aos='flip-up'>
              <div>
                <a
                  href='https://www.instagram.com/vimalkumar26feb/?hl=en'
                  target='_blank'>
                  <FaInstagram className='icons' />
                </a>
              </div>
              <div>
                <a
                  href='https://www.facebook.com/vimalkumar26feb/'
                  target='_blank'>
                  <FaFacebook className='icons' />
                </a>
              </div>
              <div>
                <a
                  href='https://www.linkedin.com/in/vimal-kumar-528193b4/'
                  target='_blank'>
                  <FaLinkedin className='icons' />
                </a>

              </div>
              <div>
                <a
                  href='https://www.youtube.com/channel/UCCsmwGQ4czWsthWzGVlCnAQ/featured'
                  target='_blank'>
                  <FaYoutube className='icons' />
                </a>
              </div>
              <div>
                <a
                  href='https://www.twitter.com/vimalkumar26feb'
                  target='_blank'>
                  <FaTwitter className='icons' />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className='footer-contact'>
            <h3>Call Me📱</h3>
            <h3>📞 7070717794 , 9504298588</h3>
            <h3>📧 E-Mail - vimalkumar.zee@gmail.com</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className='footer-bottom--section'>
          <hr />
          <div className='container grid grid-two-column'>
            <p>
              @{new Date().getFullYear()} Vimal Kumar. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #242421;
  /* background-color: #fff; */

  .footer-head{
    color: green;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: rgb(31 31 31);
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: #171717;
                    /* #0a1435 */
    h3 {
      color: #ffffff;
      margin-bottom: 2.4rem;
    }
    p {
      color: #fff;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #fff;

        .icons {
          color: #fff;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: #ffffff;
        height: 0.1px;
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;