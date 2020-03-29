---
title: Assistance
subtitle: Request assistance here
layout: layouts/base.njk
---

## Sign up for Assistance

To Volunteer please fill out the form [here](/volunteer)

<section id="assistance">
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
        <label>Your Contact Number: <input type="tel" name="contact" class="form-input" /></label>
    </p>
    <p>
        <label>Street Name: <input type="text" name="ward" class="form-input" /></label>
    </p>
    <p>
      <label>House Number / Name: <input type="text" name="housenumber" class="form-input" /></label>
    </p>
    <p>
      <label>Postcode: <input type="text" name="postcode" class="form-input" /></label>
    </p>
        <h4>Required Assistance:</h4>
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
        <label>Anything else?: <textarea rows="4" name="assist-what" class="form-input"></textarea></label>
      </p>
      <p>
        <label>Any specific requirements (diet, access, communication) etc: <textarea rows="4" name="assist-requirements" class="form-input"></textarea></label>
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