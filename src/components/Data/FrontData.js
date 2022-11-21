import React, {useState, useEffect} from 'react';
import './FrontData.css';

const FrontData = () => {
  const [frameHeight, setframeHeight] = useState();
  useEffect(() => {
    const frame = document.getElementById('colab');
    setTimeout(() => {
      setframeHeight(frame.contentWindow.document.body.scrollHeight + "px")
     },100)
  }, []);
  const notebook_url = 'https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb';
  return (
    <>
    <h1>Data Source</h1>
    <div className="FrontData">
      <iframe id="colab"
      width="100%" 
      height={frameHeight} 
      frameBorder="0"  
      scrolling="no"
      src='graphdatacleanup.html'></iframe>
    </div>
    </>
    );
  };

  // <JupViewer
  // // coverImg="https://notionpress.com/blog/wp-content/uploads/2018/06/Cover-design.png"
  // // file={ipynb}
  //   file={notebook_url}
  // // file="https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb"
  // />
  
  export default FrontData;