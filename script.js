$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = document.getElementById("bg-music");

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    music.play(); // 🎵 start music
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    music.pause(); // optional: stop music
    music.currentTime = 0; // optional: restart next time
  }
});
