import React, { useState,useEffect } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

function APOD(props) {
  const [media, setMedia] = useState(<img src={props.data.url} alt=""></img>)
  const iframe = <iframe src={props.data.url} title={props.data.title}></iframe>;
  const image = <img src={props.data.url} alt=""></img>;

  useEffect(() => {
    if(props.data.media_type === 'video'){
      setMedia(iframe);
    } else {
      setMedia(image);
    }
  }, [props.data.media_type, media, iframe, image]);


  if (!props.data.url) {
    return (
      <Dimmer
        active
        style={{height: '400px'}}>
        <Loader
          content="Loading"
          size="massive" />
      </Dimmer>
    )
  };

  return (
    <div className="img-container">
      {media}
    </div>
  )
};

export default APOD;
