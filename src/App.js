import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [selectedImg, setSelectImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectImg={setSelectImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectImg={setSelectImg}/> }
    </div>
  );
}

export default App;
