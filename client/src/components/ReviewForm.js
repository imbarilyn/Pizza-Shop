import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/ReviewForm.css'

function ReviewForm() {
  return (
    <div className='main-container'>
      <div className='review-container'>
        <div className ="card p-3">
          <h5>We value your comment</h5>
            <textarea id="textarea" class="form-control" />
              <div class="mt-3 d-flex justify-content-between align-items-center">
                <span id="count"> </span>
                <button class="btn btn-sm btn-danger" type='submit'>Add comment</button> 
              </div> 
        </div>
      </div>
      <div className='review-container'>
        <div className='card p-3'>
        <h6>Hello</h6>
        <p>hello there</p>
        </div>
              
      </div>
    </div>
  )
}

export default ReviewForm