---
title: Volunteer
subtitle: Sign up here
layout: layouts/base.njk
---

## Sign Up to Volunteer


For assistance please fill out the form [here](/assistance)

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
      <label>Your Contact Number: <input type="tel" name="contact" class="form-input" /></label>
    </p>
    <p>
      <label>Ward of Residence: <input type="text" name="ward" class="form-input" /></label>
    </p>
    <h4>Some useful info</h4>
    <p>
      <input type="checkbox" id="vehicle" name="vehicle" value="true" class="form-input">
      <label for="vehicle"> I have access to a Vehicle 🚗</label>
      <br>      
      <input type="checkbox" id="dbs" name="dbs" value="true" class="form-input">
      <label for="dbs"> I have a valid DBS check ✅</label>
      <br>
      <input type="checkbox" id="condition" name="condition" value="true" class="form-input">
      <label for="condition"> I have no Severe Health Conditions 🩺</label>
      <br>
      <input type="checkbox" id="carer" name="carer" value="true" class="form-input">
      <label for="carer"> I am a registered carer 🤗</label>
    </p>
    <h4>Assistance I can offer</h4>
    <p>
      <input type="checkbox" id="shopping" name="shopping" value="true" class="form-input">
      <label for="shopping">Collecting Shopping 🛍️ </label>
      <br>      
      <input type="checkbox" id="mail" name="mail" value="true" class="form-input">
      <label for="mail"> Posting Mail ✉️</label>
      <br>
      <input type="checkbox" id="phonecall" name="phonecall" value="true" class="form-input">
      <label for="phonecall"> A Friendly Phone Call 📞</label>
      <br>
      <input type="checkbox" id="supplies" name="supplies" value="true" class="form-input">
      <label for="supplies"> Urgent Supplies / Medication 💊</label>
      <br>
      <input type="checkbox" id="dogwalk" name="dogwalk" value="true" class="form-input">
      <label for="supplies"> Dog Walking / Animal Care 🐕</label>
    </p>
    <p>
      <label>Available Dates and Times<textarea rows="4" name="dates" class="form-input"></textarea></label>
    </p>
    <p>
      <label>Notes: <textarea rows="4" name="message" class="form-input"></textarea></label>
    </p>
    <p>
      <div data-netlify-recaptcha="true"></div>
    </p>
    <p>
      <input type="submit" class="button"></input><button type="reset" class="button">Reset</button>
    </p>
  </form>
</div>


