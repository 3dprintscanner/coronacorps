---
title: Volunteer
layout: layouts/base.njk
---

{% import "ward-settings.njk" as settings %}

## Join the {{ settings.ward }} Volunteer Network

{% if settings.volunteer_form_type == "iframe" %}

  <iframe src="{{ settings.volunteer_form_link }}" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

{% elseif settings.volunteer_form_type == "whatsapp" %}

You can provide assistance to people in {{ settings.ward }} by joining [the WhatsApp group](settings.whatsapp) and doing one or more of the following:

- 🛍️ Deliver shopping or medicine
- 📞 Make a friendly phone call to someone in isolation
- 🐕 Dog walking and vet visits
- 📧 Posting mail

## How it works
Once in the group, you can respond to any of the requests for help that are broadcast. Please respond by direct message to the person making the request, not directly in the group. 

**NOTE** this is a public group, so please **do not post any private information**.

<br>
<div class="button-container">
  <button class="bttn-simple bttn-lg bttn-success"><a href="settings.whatsapp">Join WhatsApp Group</a></button> 
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


## Privacy

The information collected will be used for the legitimate purposes of the group to connect volunteers working in the same area, and to match volunteers to members of the community seeking support. 

Please do not upload any sensitive information. If you are completing this form on behalf of someone else, please ask for consent and include your name in the form as well. 

Any information gathered will be deleted when the group disbands. To remove your data or ask any questions, please contact us.

{% endif %}

