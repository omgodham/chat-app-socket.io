var socket = io();

const inputArea = document.getElementById('input-area');
const chatArea = document.querySelector('.chat-area');


inputArea.addEventListener('keyup',(e)=>{

    if(e.key == 'Enter'){
        addMsgToDom(e.target.value.trim() , 'outgoing');
        inputArea.scrollTop = inputArea.scrollHeight;
        socket.emit("message" ,  e.target.value.trim());
        e.target.value = '';
    }
});

const addMsgToDom = (value , type) => {

const msgDiv = document.createElement('div');
msgDiv.classList.add(`${type}` , 'message');
msgDiv.innerText = value;
chatArea.appendChild(msgDiv);

}


socket.on("message" , (msg) => {
    addMsgToDom(msg , 'incoming');
    textArea.scrollTop = textArea.scrollHeight;
});

    
        



