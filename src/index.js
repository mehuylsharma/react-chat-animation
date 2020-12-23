import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Message from './components/message';
import { Header, Footer } from './components/ui-components';
import ReactDOM from 'react-dom';

let nextMessage = 0;

function Chat() {

  const initialData = {
    headerInfo : {
      menuIconURL: "/images/menu-icon.png",
      recipentName: "Probably Adam"
    },
    footerInfo : {
      imageURL: "/images/footer-image.png"
    },
    messages : [
      {
        text: "Hello, Who's This?",
        time: new Date(Date.now()).getTime(),
        status: "/images/sent-icon.png",
        tempStatus: "/images/read-icon.png",
        messageClass: "message sent",
        key: 0
      },
      {
        text: "Adam this side.",
        time: new Date(Date.now()).getTime(),
        status: "",
        tempStatus: "",
        messageClass: "message received",
        key: 1
      },
      {
        text: "Who are you?",
        time: new Date(Date.now()).getTime(),
        status: "",
        tempStatus: "",
        messageClass: "message received",
        key: 2
      },
      {
        text: "Ah, It must be a wrong number then.",
        time: new Date(Date.now()).getTime(),
        status: "/images/sent-icon.png",
        tempStatus: "/images/read-icon.png",
        messageClass: "message sent",
        key: 3
      },
      {
        text: "Meant to contact someone else, anyway have a good one!",
        time: new Date(Date.now()).getTime(),
        status: "/images/sent-icon.png",
        tempStatus: "/images/read-icon.png",
        messageClass: "message sent",
        key: 4
      },
      {
        text: "You too stranger!",
        time: new Date(Date.now()).getTime(),
        status: "",
        tempStatus: "",
        messageClass: "message received",
        key: 5
      }
    ]
  }

  let [data, setData] = useState([]);
  const [seconds, setSeconds] = useState(0);
  /* let chatRef = useRef(null); */

  useEffect(() => {
    const timer = setInterval(() => {
      setData((oldData) => [...oldData, initialData.messages[nextMessage]]);
      setSeconds(seconds+1);
      if (nextMessage < initialData.messages.length - 1) nextMessage++;
    }, 2000);

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