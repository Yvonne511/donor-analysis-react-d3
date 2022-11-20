import GetNoteBook from './GetNoteBook';
import React from 'react';

const FrontData = () => {
  const notebook_url = '/graph_data_cleanup.ipynb';
  return (
    <>
    <h1>Data Source</h1>
    <GetNoteBook url ={notebook_url}></GetNoteBook>
    </>
    );
  };
  
  export default FrontData;