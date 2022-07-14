import React, {useState} from 'react';
import ReactDom from 'react-dom';
import { Star, Recommend, Characteristics, Summary, ReviewBody, Photo, NickName, Email } from './newReview.jsx'


var ModalView = function({clickFunc, product_id, needChar}) {
  const [submit, setSubmit] = useState(false);
  const [allInfo, setAllInfo] = useState({product_id: product_id, rating: null, summary: null, body: null, recommend: true, name: null, email: null, photos:[], characteristics:{14:null}})

  return ReactDom.createPortal(
  <>
    <div className='modalView'/>
    <div className='modal-content'>
      <span className="close" onClick = {() => {clickFunc(false)}}>&times;</span>
      <div className='review-addReview'>
        <p>Write Your Review</p>
        <Star setSubmit={setSubmit}/>
        <Recommend/>
        <Characteristics needChar={needChar}/>
        <Summary/>
        <ReviewBody/>
        <Photo/>
        <NickName/>
        <Email/>
      </div>
    </div>
  </>,
  document.getElementById('portal')
  )
}


var AddReview = function({product_id, needChar}) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button className="btn btn-moreRevew" onClick={() => {setModal(true)}}>Add Review</button>
      {modal && <ModalView clickFunc={setModal} product_id={product_id} needChar={needChar}/>}
    </>


  )
}

export default AddReview;