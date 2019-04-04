import * as PIXI from 'pixi.js';

const app = new PIXI.Application(800, 600, {backgroundColor : 0x000000});

document.body.appendChild(app.view);


if(Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
 }
 