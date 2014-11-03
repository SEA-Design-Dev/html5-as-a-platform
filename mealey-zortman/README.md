# HTML5 as a platform
This project is a compilation of HTML5 features as examples. Each example is briefly described here

## Audio
> Location: /audio/index.html

HTML5 comes with an `<audio>` tag that can be utilized to play audio on the fly inside the document or with Javascript. We used it to play a sound when a user hits a *404 error page*.

## Forms
> Location: /forms/index.html

For this example, use input fields with pre-defined requirements that must be met before a form is submitted. For example:

> <input id='email' name='email' type='email' placeholder='example@domain.com' required>
The `required` attribute of this field means that the form will not submit unless the input is met correctly. The `type='email'` will evaluate proper formatting to ensure the user inputs the data correctly.


## Video
> Location: /video/index.html

This example shows a full-width video playing as a background on the site. This can be a very dynamic aesthetic feature. The video autoplays on load with the `autoplay` attribute.

## Camera
> Location: /camera/index.html

HTML5 comes with feature of utilizing the user's camera with `navigator.getUserMedia` (depending on the browser). We created a photo booth where a user can start a timer and snap a photo. In addition, we added audio to the camera count down and shutter.
