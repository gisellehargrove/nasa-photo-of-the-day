import React, { useState,useEffect } from 'react';

function APOD(props) {
  const [media, setMedia] = useState(<img src={props.data.url}></img>)
  const iframe = <iframe src={props.data.url}></iframe>;

  useEffect(() => {
    if(props.data.media_type === 'video'){
      setMedia(iframe);
    }
  }, [props.data.media_type]);

  const image = <img src={props.data.url}></img>;

  if (!props.data.url) return <h3>Loading...</h3>;
  return (
    <div className="img-container">
      {media}
    </div>
  )
};

export default APOD;
