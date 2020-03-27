---
title: Wards
layout: layouts/base.njk
includes: [
    <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.min.js"></script>,
<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.4.2/mapbox-gl-geocoder.css" type="text/css"/>
]
---


<div id="map"></div>

<br/>

<h2> Ward Contact Details</h2>
<br/>

<table id="wards">
    <thead>
        <tr>
            <th>Ward</th>
            <th>Website</th>
            <th>Contact</th>
        </tr>
    </thead>
    <tbody>
        {%- for ward in contacts -%}
        <tr>
            <td>{{ ward.ward}}</td>
            <td><button class="bttn-simple bttn-lg bttn-success"><a href="{{ ward.website }}">Website</a></button></td>
            <td><button class="bttn-simple bttn-lg bttn-royal"><a href="mailto:{{ ward.email }}">Email</a></button</td>
        </tr>
        {%- endfor -%}
    </tbody>
</table>
