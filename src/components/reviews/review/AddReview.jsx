import React, {useState} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { Star, Recommend, Characteristics, Summary, ReviewBody, Photo, NickName, Email } from './newReview.jsx'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3005',
  changeOrigin: true,
})

var ModalView = function({clickFunc, product_id, needChar}) {

  const [chars, setAllChars] = useState({product_id: Number(product_id), rating: null, summary: '', body: '', recommend: true, name: '', email: '', photos:[], characteristics:{}})
  const [invalid, setInvalid] = useState(false)

  var submitChars = function(e) {
    e.preventDefault();
    // console.log(chars)
    var validateEmail = function(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (!chars.rating || chars.body.length < 50 || chars.body.length > 1000 || chars.name.length > 60 || !validateEmail(chars.email)) {
      setInvalid(true)
    } else {
      setInvalid(false)
      var postChars = {...chars, type: 'review', api: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews'}
      console.log('this is postchar: ', postChars)
      service.post('/', postChars)
       .then((res) => {
         console.log('success!', res)
       })
       .catch((err) => {
         console.log(err)
       })
      }
    }


  return ReactDom.createPortal(
  <>
    <div className='modalView'/>
    <div className='modal-content'>
      <span className="close" onClick = {() => {clickFunc(false)}}>&times;</span>
      <div className='review-addReview'>
        {invalid && <div style={{ color: 'red' }}>Please enter valid input</div>}
        <div className='review-addReview-title'>Write Your Review</div>
        <Star setFunc = {setAllChars} chars={chars}/>
        <Recommend setFunc = {setAllChars} chars={chars}/>
        <div className='review-singleReview-divider-container'>
          <span className = 'review-singleReview-divider'></span>
        </div>
        <Characteristics needChar={needChar} setFunc = {setAllChars} chars={chars}/>
        <div className='review-singleReview-divider-container'>
          <span className = 'review-singleReview-divider'></span>
        </div>
        <div className='review-addReview-subtitle'>Review<span style={{ color: 'red' }}>*</span>:</div>
        <Summary setFunc = {setAllChars} chars={chars}/>
        <ReviewBody setFunc = {setAllChars} chars={chars}/>
        <Photo setFunc = {setAllChars} chars={chars}/>
        <div className='review-singleReview-divider-container'>
          <span className = 'review-singleReview-divider'></span>
        </div>
        <div className='review-addReview-subtitle'>Personal Information<span style={{ color: 'red' }}>*</span>:</div>
        <div className='review-addReview-personal-container'>
          <NickName setFunc = {setAllChars} chars={chars}/>
          <Email setFunc = {setAllChars} chars={chars}/>
        </div>
      </div>
      <button className='review-addReview-submit-btn' onClick={submitChars}>SUBMIT</button>
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