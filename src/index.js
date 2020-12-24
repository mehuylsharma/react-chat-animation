import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Message from './components/message';
import { Header, Footer } from './components/ui-components';
import ReactDOM from 'react-dom';

//Var to index the next message from Data
let nextMessage = 0;

function Chat() {
  let [data, setData] = useState([]);
  const [seconds, setSeconds] = useState(0);

  //Hardcoded Data - Header + Footer + Messages
  const initialData = {
    headerInfo : {
      menuIconURL: "/images/menu-icon.png",
      recipentName: "Broadband Support"
    },
    footerInfo : {
      imageURL: "/images/footer-image.png"
    },
    messages : [
      {
        text: "Did it work yet?",
        time: new Date(Date.now()).getTime(),
        status: "/images/sent-icon.png",
        tempStatus: "/images/read-icon.png",
        messageClass: "message sent",
        key: data.length - 1
      },
      {
        text: "Nope. We're still trying.",
        time: new Date(Date.now()).getTime(),
        status: "",
        tempStatus: "",
        messageClass: "message received",
        key: data.length - 1
      },
      {
        text: "You can use your mobile data in the meantime, we'll pay.",
        time: new Date(Date.now()).getTime(),
        status: "",
        tempStatus: "",
        messageClass: "message received",
        key: data.length - 1
      },
      {
        text: "Thank you, but make sure it's fixed fast.",
        time: new Date(Date.now()).getTime(),
        status: "/images/sent-icon.png",
        tempStatus: "/images/read-icon.png",
        messageClass: "message sent",
        key: data.length - 1
      },
      {
        text: "It's my company's and my boss will eat me up.",
        time: new Date(Date.now()).getTime(),
        status: "/images/sent-icon.png",
        tempStatus: "/images/read-icon.png",
        messageClass: "message sent",
        key: data.length - 1
      },
      {
        text: "Don't worry we're trying to fix it asap.",
        time: new Date(Date.now()).getTime(),
        status: "",
        tempStatus: "",
        messageClass: "message received",
        key: data.length - 1
      }
    ]
  }

  //Adding new messages
  useEffect(() => {
    const timer = setInterval(() => {
      setData((oldData) => [...oldData, initialData.messages[nextMessage]]);
      setSeconds(seconds+1);
      nextMessage++;
      if (nextMessage > initialData.messages.length - 1) {
        nextMessage = 0;
      }
    }, 2500);

    return () => clearInterval(timer);
  })

  return (
    <div className="chat">
      <Header headerInfo={initialData.headerInfo}/>
      <div className="chat-live">
          <TransitionGroup className="inner-chat">
            {data.map(message => {
              return  <CSSTransition timeout={500} key={message.key} classNames="animated">
                          <Message message={message} key={message.key}/>
                      </CSSTransition>
            })}
          </TransitionGroup>
      </div>
      <Footer footerInfo={initialData.footerInfo}/>
    </div>
  )
};

ReactDOM.render(<Chat />, document.getElementById('root'));