import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ReviewForm() {
  return (
    <div>
        <h1>We Value Your Comment</h1>
    <form>
        <div class="form-group">
        <label for="formGroupExampleInput">Put your comment down below</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
        </div>
  </form>
  </div>
  )
}

export default ReviewForm