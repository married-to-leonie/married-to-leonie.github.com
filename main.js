var audio = new Audio("music/iloveu.mp3");
 audio.loop = true;
audio.play();


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

