import React ,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsImage } from 'react-icons/bs';
import logo1 from '../../assets/logo 1.png';
import comingSoon from '../../assets/coming soon.png';

function ComingSoon() {
  const navigate =useNavigate();
  const[timeLeft,setTimeLeft]=useState({
    days:519,
    hours:21,
    minutes:52,
    seconds:48,
  });
  useEffect(()=>{
    const timer=setInterval(()=>{
      setTimeLeft((prev)=>{
        if(prev.seconds>0){
          return{...prev,seconds: prev.seconds -1};
        }else if(prev.minutes>0){
          return{...prev,minutes:59,seconds:59};
        }else if(prev.hours>0){
          return{...prev,hours:prev.hours - 1,minutes:59,seconds: 59};
        }else if(prev.days>0){
          return{...prev, days:prev.days - 1, hours:23,minutes:59,seconds:59};
        }
        return prev;
      });
    },1000);
    return()=>clearInterval(timer);
  },[]);

  const handleBackToHome = ()=>{
    navigate('/');
  };

  return(
    <div className='container-fluid min-vh-100 pt-2 pb-4 px-4 d-flex flex-column align-items-center justify-content-center bg-light'>
      <div className='row w-100 g-4 align-items-center justify-content-center' style={{maxWidth:'1280px'}}>
        <div className='col-lg-6 col-md-10 text-center py-2 px-md-5'>
          <div className='mb-4 d-flex justify-content-center cursor-pointer' onClick={handleBackToHome}>
            <img 
            src={logo1}
            alt="larkon logo" 
            style={{maxHeight:'28px',width:'auto',objectFit:"contain"}}/>
          </div>

          <div className='mb-4 d-flex justify-content-center'>
            <img src={comingSoon} alt="comingsoon" 
            className='img-fluid'
            style={{maxHeight:'210px',width:'auto',objectFit:'contain'}}
            />
          </div>

          <div className='row g-3 justify-content-center mb-4'>
            <div className='col-auto'>
              <div className='p-3 text-center' style={{minWidth:'85px'}}>
                <h2 className='fw-bold mb-0 fs-1' style={{color:'#000000'}}>{timeLeft.days}</h2>
                <span className='fw-semibold text-uppercase' style={{ fontSize:'0.7rem',letterSpacing:'1px',color:'#000000'}}>
                  DAYS
                </span>
              </div>
            </div>

            <div className='col-auto'>
              <div className='p-3 text-center' style={{minWidth:'85px'}}>
                <h2 className='fw-bold mb-0 fs-1' style={{color:'#000000'}}>{timeLeft.hours}</h2>
                <span className='fw-semibold text-uppercase' style={{ fontSize:'0.7rem',letterSpacing:'1px',color:'#000000'}}>
                  HOURS 
                </span>
              </div>
            </div>

            <div className='col-auto'>
              <div className='p-3 text-center' style={{minWidth:'85px'}}>
                <h2 className='fw-bold mb-0 fs-1' style={{color:'#000000'}}>{timeLeft.minutes}</h2>
                <span className='fw-semibold text-uppercase' style={{ fontSize:'0.7rem',letterSpacing:'1px',color:'#000000'}}>
                  MINUTES
                </span>
              </div>
            </div>

            <div className='col-auto'>
              <div className='p-3 text-center' style={{minWidth:'85px'}}>
                <h2 className='fw-bold mb-0 fs-1' style={{color:'#000000'}}>{timeLeft.seconds}</h2>
                <span className='fw-semibold text-uppercase' style={{ fontSize:'0.7rem',letterSpacing:'1px',color:'#000000'}}>
                  SECONDS 
                </span>
              </div>
            </div>
          </div>

          <p className='mx-auto mb-4'style={{maxWidth:'480px',fontSize:'0.825rem',lineHeight:'1.6',color:'#000000'}}>
            Exciting news is on the horizon! We're thrilled to announce that something incredible is coming your way very soon. Our team has been hard at work behind the scenes, crafting something special just for you.
          </p>
          <button
            className='btn text-white px-4 py-2 rounded-3 shadow-sm border-0 fw-medium'
            style={{ backgroundColor:'#ff5e29',fontSize:'0.85rem'}}
            onClick={handleBackToHome}
          >
            Back To Home
          </button>
        </div>
        <div className='col-lg-6'>
          <div className='rounded-4 d-flex align-items-center justify-content-center'
            style={{
              minHeight:'500px',
              backgroundColor:'#d9d9d9',
              border:'1px solid #c8c8c8',
            }}
          >
            <BsImage style={{fontSize:'4.5rem',color:'#000000',opacity:0.85}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon;