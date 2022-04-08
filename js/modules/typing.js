export default function initTyping() {
    let i = 0;
    const text = '     Gabriela Souza';

    function typeWriter() {
        if(i < text.length) {
            document.querySelector("#sentence").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}