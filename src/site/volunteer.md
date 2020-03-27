---
title: Volunteer
layout: layouts/base.njk
form_type: whatsapp
form_link: 'https://chat.whatsapp.com/HY8PhgRogE4EqRjGrel3QJ'
form_text_above: "You can provide assistance to people in Holloway by joining the WhatsApp welcome group linked below and responding to help with any of the following:\r\n\r\n- \U0001F6CD️ Deliver shopping or medicine\r\n- \U0001F4DE Make a friendly phone call to someone in isolation\r\n- \U0001F415 Dog walking and vet visits\r\n- \U0001F4E7 Posting mail\r\n\r\n## How it works\r\nOnce in the group, you will be directed to join one of the broadcast groups where requests for assistance are sent out. You can then respond by direct message to the person making the request to take that task on. \r\n\r\n**NOTE** this is a public group, so please **do not post any private information**."
form_text_below: ''
---

## Join the {{ ward }} Volunteer Network

{{form_text_above}}

{% if form_type == "iframe" %}

  <iframe src="{{ form_link }}" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

{% elseif form_type == "whatsapp" %}

<br>
<div class="button-container">
  <button class="bttn-simple bttn-lg bttn-success"><a href="{{ form_link }}">Join WhatsApp Group</a></button> 
</div>
<br> 

Link requires [WhatsApp](https://www.whatsapp.com/) to be installed on your phone

{% else %}

<div class="form-card">
  <form name="volunteer-holloway" method="POST" data-netlify="true">
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
      <label>Postcode: <input type="text" name="postcode" class="form-input" /></label>
    </p>
    <h4>Some useful info:</h4>
    <p>
      <input type="checkbox" id="vehicle" name="vehicle" value="true" class="form-input">
      <label for="vehicle"> I have access to a Vehicle 🚗</label>
      <input type="checkbox" id="dbs" name="dbs" value="true" class="form-input">
      <label for="dbs"> Valid DBS Check? ☑️</label>
      <br>      
    </p>
    <h4>How would you prefer to be contacted?</h4>
    <p>
      <fieldset id="contact-preference">
        <input type="radio" value="phone" name="contact-preference" class="form-input">
        <label for="phone">Phone 📞 </label>
        <input type="radio" value="email" name="contact-preference" class="form-input">
        <label for="email">Email 📧 </label>
        <input type="radio" value="sms" name="contact-preference" class="form-input">
        <label for="email">WhatsApp / Text Message 📲 </label>
      </fieldset>
    </p>
    <h4>Assistance I can offer:</h4>
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
      <br>
      <input type="checkbox" id="tech-help" name="tech-help" value="true" class="form-input">
      <label for="supplies">Help with Phones / Laptops / Tech  🖥️</label>
      <br/>
      <label>Anything else? <textarea rows="4" name="skills-else" class="form-input"></textarea></label>
    </p>
    <h4>When I'm available:</h4>
    <p>
      <input type="checkbox" id="daytime" name="daytime" value="true" class="form-input">
      <label for="daytime">Daytime ☀️</label>
      <input type="checkbox" id="evening" name="evening" value="true" class="form-input">
      <label for="evening">Evening 🌙</label>
      <input type="checkbox" id="irregular" name="irregular" value="true" class="form-input">
      <label for="irregular">Irregular Hours 🌃</label>
    </p>
    <p>
      <label>Anything else we need to know?<textarea rows="4" name="message" class="form-input"></textarea></label>
    </p>
    <p>
      <div data-netlify-recaptcha="true"></div>
    </p>
    <p>
      <input type="checkbox" id="consent" name="consent" value="true" class="form-input">
      <label for="consent">I consent to be contacted by my local Mutual Aid volunteer groups.</label>
    </p>
    <p>
      <input type="submit" class="button"></input><button type="reset" class="button">Reset</button>
    </p>
  </form>
</div>

{% endif %}

{{form_text_below}}
