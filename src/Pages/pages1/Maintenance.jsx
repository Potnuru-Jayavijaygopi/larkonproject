import React from 'react';
import { useNavigate } from 'react-router-dom';
import {BsImage} from 'react-icons/bs';
import logo1 from '../../assets/logo 1.png';

function Maintenance() {
  const navigate=useNavigate();

  const handleBackToHome = () =>{
    navigate('/');
  };
  return (
    <div className='container-fluid min-vh-100 pt-2 pb-4 px-4 d-flex flex-column align-items-center justify-content-center bg-light'>
      <div className='row w-100 g-4 align-items-center justify-content-center' style={{maxWidth:'1280px'}}>
        <div className='col-lg-6 col-md-10 text-center py-2 px-md-5'>
          <div className='mb-4 d-flex justify-content-center cursor-pointer' onClick={handleBackToHome}>
            <img src={logo1} alt="larkon logo" 
            style={{ maxHeight:'28px',width:'auto',objectFit:'contain'}}
            />
          </div>

          <div className='rounded-3 d-flex align-items-center justify-content-center mb-4 mx-auto'
          style={{
            width:'100%',
            maxWidth:'520px',
            height:'300px',
            backgroundColor:'#d9d9d9',
            border:'1px solid #c8c8c8',
          }}
          >
            <BsImage style={{fontSize:'4rem',color:'#000000',opacity:0.85}}/>
          </div>

          <h3 className='fw-bold mb-2' style={{color:'#1e293b',fontSize:'1.5rem'}}>
            We are currently performing maintenance
          </h3>

          <p className='text-muted mx-auto mb-4' style={{maxWidth:'460px',fontSize:'0.85rem',lineHeight:'1.6'}}>
            We're making the system more awesome. We'll be back shortly.
          </p>

          <button className='btn text-white px-4 py-2 rounded-3 shadow-sm border-0 fw-medium'
          style={{backgroundColor:'#ff5e29',fontSize:'0.85rem'}}
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

export default Maintenance