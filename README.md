# Google-Chrome-Video-Capture-trial
Trial Video Capturing

A wrapper for getUserMedia, enabling easy cross-browser support for webcam access with JavaScript.

## Usage

First, create a new instance of `Wrapper`, providing the id of a video element. The success and error callback arguments are optional.

    var Wra = new Wrapper({video: 'myVideo'}, showSuccess, showError);

Call the play method and you should be good to go!

    Wra.play();

## Dependencies

- The latest Firefox, Opera or Chrome/Chromium. N.b. if using Firefox 18 or 19, `media.peerconnection.enabled` needs to be set to `true` in `about:config`
- JavaScript turned on - note no other libraries required.


