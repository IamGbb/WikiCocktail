import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../lottie/error';

const Error = () => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <section className="error-page section">
      <div className="error-container">
        <Lottie 
	    options={defaultOptions}
        height={300}
        width={300}
        speed={6}
      />
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">Take me home</Link>
      </div>
    </section>
  )
}

export default Error
