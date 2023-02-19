import React from 'react';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h1 className='section-header'> Contact Us</h1>

        <div class="form-area mb-5">
        <div class="container">
            <div class="row single-form g-0">
                <div class="col-sm-12 col-lg-6">
                    <div class="left">
                        <h2><span>Lets talk about your favorite food</span> <br />Contact us now!</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="right">
                       <i class="fa fa-caret-left"></i>
                       <form action="https://formspree.io/f/mwkjpdvb" method="POST">
                          <div class="mb-3">
                            <label > Your Name</label>
                            <input type="text" name="name" required aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="email" name="email">Email address</label>
                            <input type="email" name="email" required aria-describedby="emailHelp" />
                          </div>
                          <div class="mb-3">
                            <label for="message" >Message</label>
                              <textarea type="message" required ></textarea>
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