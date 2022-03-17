import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../lottie/cocktail-loader';

const Loading = () => {
 const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={800}
        width={800}
        speed={6}
      />
    </div>
  );
}

export default Loading
