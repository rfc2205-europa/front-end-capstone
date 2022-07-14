import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { Star, Recommend, Characteristics } from './newReview.jsx'


var ModalView = function({clickFunc}) {

  return ReactDom.createPortal(
  <>
    <div className='modalView'/>
    <div className='modal-content'>
      <span className="close" onClick = {() => {clickFunc(false)}}>&times;</span>
      <div className='review-addReview'>
        <p>Write Your Review</p>
        <Star/>
        <Recommend/>
        <Characteristics/>
      </div>
    </div>
  </>,
  document.getElementById('portal')
  )
}


var AddReview = function() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button className="btn btn-moreRevew" onClick={() => {setModal(true)}}>Add Review</button>
      {modal && <ModalView clickFunc={setModal}/>}
    </>


  )
}

export default AddReview;