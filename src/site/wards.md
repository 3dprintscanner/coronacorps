---
title: Wards
layout: layouts/base.njk
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
