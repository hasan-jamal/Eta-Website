document.addEventListener("DOMContentLoaded", () => {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr("#player");
  window.player = player;
  const player1 = new Plyr("#player1");
  window.player = player1;
  const player2 = new Plyr("#player2");
  window.player = player2;
  const player3 = new Plyr("#player3");
  window.player = player3;
  const player4 = new Plyr("#player4");
  window.player = player4;
  const player5 = new Plyr("#player5");
  window.player = player5;
  const player6 = new Plyr("#player6");
  window.player = player6;
  const player7 = new Plyr("#player7");
  window.player = player7;
  const player8 = new Plyr("#player8");
  window.player = player8;
  const player9 = new Plyr("#player9");
  window.player = player9;
  const player10 = new Plyr("#player10");
  window.player = player10;

  // playerAr in Ar Page Index
  const playerAr = new Plyr("#playerAr", {
    autoplay: true,
    muted: false,
    youtube: {
      noCookie: true,
      rel: 0,
      modestbranding: 1,
      autoplay: 1,
      mute: 1,
    },
  });
  playerAr.once("ready", () => {
    playerAr.play();
  });

  // playerEn in En Page Index
  const playerEn = new Plyr("#playerEn", {
    autoplay: true,
    muted: false,
    youtube: {
      noCookie: true,
      rel: 0,
      modestbranding: 1,
      autoplay: 1,
      mute: 1,
    },
  });
  playerEn.once("ready", () => {
    playerEn.play();
  });
  window.player = playerEn;
  window.player = playerAr;
});
