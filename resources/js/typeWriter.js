var typed = new Typed('#welcome-message-text', {
    strings: ["Hi,<br/>I am Vaijyant!<br/>I am a programmer.",
        "Hi,<br/>I am Vaijyant!<br/>I am an engineer.",
        "Hi,<br/>I am Vaijyant!<br/>I am a problem solver.",
        ":)", ":^)", ":P", ":D^2750"],
    typeSpeed: 90,
    onComplete: (self) => {scrollToMain()}
});
