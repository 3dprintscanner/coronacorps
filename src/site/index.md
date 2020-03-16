---
title: Corona Corps
subtitle: The virus is coming and we must be best preprared to look after the vulnerable around us and prevent it spreading faster than our health services can cope.
layout: layouts/base.njk
---

## Who are we?
  Corona Corps is a voluntary organisation dedicated to helping citizens organise to assist in dealing with the coronavirus epidemic.
  Currently we are recuiting volunteers in the Clerkenwell & Bunhill Wards of London and collecting data on those who will require assistance.

## We Aim to

 - Stand up groups of volunteers to help the vunerable, ill and immuno-compromised through the course of the Pandemic.
 - Provide deliveries of essential supplies, medications and pastoral care.
 - Be on hand to assist local authorities when necessary
 - Co-ordinate the distribution of aid 


## How Can I help?

 - Sign up for the Volunteering form below and we will in contact with you shortly.
 - Share this with any friends or colleagues who would also be able to help

## How Can I get help?

 - Fill the [form](#assistance) below and we will get back to you to design a plan to meet your needs.
 
 

## Sign Up to Volunteer
<div class="form-card">
  <form name="volunteer" method="POST" data-netlify="true">
    <p>
      <label>Your First Name: <input type="text" name="firstname" class="form-input" /></label>   
    </p>
    <p>
      <label>Your Last Name: <input type="text" name="lastname" class="form-input" /></label>   
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" class="form-input" /></label>
    </p>
    <p>
      <label>House Name / Flat Number: <input type="text" name="house" class="form-input" /></label>
    </p>
    <p>
      <label>Street: <input type="text" name="street" class="form-input" /></label>
    </p>
    <p>
      <label>City: <input type="text" name="city" class="form-input" /></label>
    </p>
    <p>
      <label>County: <input type="text" name="county" class="form-input" /></label>
    </p>
    <p>
      <label>Postcode: <input type="text" name="postcode" class="form-input" /></label>
    </p>
    <p>
      <label>Your Contact Number: <input type="tel" name="contact" class="form-input" /></label>
    </p>
    <p>
      <input type="checkbox" id="vehicle" name="vehicle" value="Vehicle" class="form-input">
      <label for="vehicle"> I have access to a Vehicle</label>
      <br>
      <input type="checkbox" id="infected" name="infected" value="infected" class="form-input">
      <label for="infected"> I have already been infected and recovered from COVID-19</label>
      <br>
      <input type="checkbox" id="dbs" name="dbs" value="dbs" class="form-input">
      <label for="vehicle3"> I have a valid DBS check</label>
      <br>
      <input type="checkbox" id="condition" name="condition" value="condition" class="form-input">
      <label for="vehicle3"> I have no Severe Health Conditions</label>
    </p>
    <p>
      <label>Available Dates and Times<textarea rows="4" name="dates" class="form-input"></textarea></label>
    </p>
    <p>
      <label>Message: <textarea rows="4" name="message" class="form-input"></textarea></label>
    </p>
    <p>
      <div data-netlify-recaptcha="true"></div>
    </p>
    <p>
      <input type="submit" class="button"></input><button type="reset" class="button">Reset</button>
    </p>
  </form>
</div>

<section id="assistance">
  <h2>Sign up for assistance</h2>
  <div class="form-card">
    <form name="assistance" method="POST" data-netlify="true">
      <p>
        <label>Your First Name: <input type="text" name="firstname" class="form-input" /></label>   
      </p>
      <p>
        <label>Your Last Name: <input type="text" name="lastname" class="form-input" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" class="form-input" /></label>
      </p>
      <p>
        <label>House Name / Flat Number: <input type="text" name="house" class="form-input" /></label>
      </p>
      <p>
        <label>Street: <input type="text" name="street" class="form-input" /></label>
      </p>
      <p>
        <label>City: <input type="text" name="city" class="form-input" /></label>
      </p>
      <p>
        <label>County: <input type="text" name="county" class="form-input" /></label>
      </p>
      <p>
        <label>Postcode: <input type="text" name="postcode" class="form-input" /></label>
      </p>
      <p>
        <label>Your Contact Number: <input type="tel" name="contact" class="form-input" /></label>
      </p>
      <p>
        <label>Please describe how you would like to be helped?: <textarea rows="4" name="assist-what" class="form-input"></textarea></label>
      </p>
      <p>
        <label>Please list any specific requirements (diet, access, communication) etc: <textarea rows="4" name="assist-requirements" class="form-input"></textarea></label>
      </p>
      <p>
        <div data-netlify-recaptcha="true"></div>
      </p>
      <p>
        <input type="submit" class="button"></input><button type="reset" class="button">Reset</button>
      </p>
    </form>
  </div>
</section>