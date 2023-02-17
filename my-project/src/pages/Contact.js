import React from 'react';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1 className='section-header'></h1>

        <div class="form-area mb-5">
        <div class="container">
            <div class="row single-form g-0">
                <div class="col-sm-12 col-lg-6">
                    <div class="left">
                        <h2><span>Welcome to our food recipe website! We're thrilled to have you here, and we can't wait to share some delicious and easy-to-follow recipes with you.
                            </span> <br />Contact us now!</h2>
                            <h2><span>Welcome to our food recipe website! We're thrilled to have you here, and we can't wait to share some delicious and easy-to-follow recipes with you.
                            </span> <br />Contact us now!</h2>
                            <h2><span>Welcome to our food recipe website! We're thrilled to have you here, and we can't wait to share some delicious and easy-to-follow recipes with you.
                            </span> <br />Contact us now!</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="right">
                       <i class="fa fa-caret-left"></i>
                        <form>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                              <textarea type="password" class="form-control" id="exampleInputPassword1"></textarea>
                          </div>
                          <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Contact;