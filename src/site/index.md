---
title: Corona Corps
subtitle: The virus is coming and we must be best preprared to look after the vulnerable around us and prevent it spreading faster than our health services can cope.
layout: layouts/base.njk
---

## Who are we?
  Corona Corps is a voluntary organisation dedicated to helping citizens organise to assist in dealing with the coronavirus epidemic.
  Currently we are recuiting volunteers in London and collecting data on those who will require assistance.

## We Aim to

 - Stand up groups of volunteers to help the vunerable, ill and immuno-compromised through the course of the Pandemic.
 - Provide deliveries of essential supplies, medications and pastoral care.
 - Be on hand to assist local authorities when necessary
 - Co-ordinate the distribution of aid 


## How Can I help?

 - Sign up for the Volunteering form below and we will in contact with you shortly.
 - Share this with any friends or colleagues who would also be able to help
 -

## Volunteer

<form name="volunteer" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Address: <input type="text" name="address" /></label>
  </p>
  <p>
    <label>Your Contact Number: <input type="tel" name="address" /></label>
  </p>
  <p>
    <input type="checkbox" id="vehicle" name="vehicle" value="Vehicle">
    <label for="vehicle"> I have access to a Vehicle</label><br>
    <input type="checkbox" id="infected" name="infected" value="infected">
    <label for="infected"> I have already been infected and recovered from COVID-19</label><br>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
    <label for="vehicle3"> I have a boat</label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
  <p>
    <input type="reset">
  </p>
</form>


## Request Assistance

<form name="volunteer" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Address: <input type="text" name="address" /></label>
  </p>
  <p>
    <label>Your Contact Number: <input type="tel" name="address" /></label>
  </p>
  <p>
    <label>Assistance Required: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
  <p>
    <input type="reset">
  </p>
</form>

## Running locally

```bash
# install the dependencies
npm install

# External data sources can be stashed locally
npm run seed

# It will then be available locally for building with
npm run start
```

## Add some Netlify helpers
Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get Netlify Dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar in front of Eleventy
netlify dev
```

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- [/.netlify/functions/hello](/.netlify/functions/hello)
- [/.netlify/functions/fetch-joke](/.netlify/functions/fetch-joke)

### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- [/api/hello](/api/hello)
- [/api/fetch-joke](/api/fetch-joke)




