
;(function(n,t){"use strict";n.Wrapper=function(i,r,u){function f(n){if(u){var t=new Error;t.message=n,u(t)}else console.error(n)}function e(){function o(t){u.mozSrcObject!==undefined?u.mozSrcObject=t:u.src=n.URL&&n.URL.createObjectURL(t)||t,u.play()}function e(){f("Unable to get webcam stream.")}var u=t.getElementById(i.video);if(!u){f("Unable to find the video element.");return}navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,n.URL=n.URL||n.webkitURL||n.mozURL||n.msURL,navigator.getUserMedia?navigator.getUserMedia({video:!0},o,e):f("Native web camera streaming (getUserMedia) not supported in this browser."),u.addEventListener("loadeddata",function(){function t(){i>0?u.videoWidth>0&&u.videoHeight>0?r&&r(u):n.setTimeout(t,500):f("Unable to play video stream. Is webcam working?"),i--}var i=10;t()},!1)}return{play:e}}})(window,document);
