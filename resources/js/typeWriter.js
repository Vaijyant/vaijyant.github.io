window.onload = function () {
    typeWriter()
};
var i = 0;
function typeWriter() {

    var txt = 'Hi, I am Vaijyant!';
    /* The text */
    var speed = 50;

    /* The speed/duration of the effect in milliseconds */

    if (i < txt.length) {
        document.getElementById('welcome-message-text').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }


}