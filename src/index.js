import React, { useState, useRef, useEffect } from 'react';
import Message from './components/message';
import { Header, Footer } from './components/ui-components';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

const initialData = {
  headerInfo : {
    menuIconURL: "/images/menu-icon.png",
    recipentName: "Surbhat"
  },
  footerInfo : {
    imageURL: "/images/footer-image.png"
  },
  messages : [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem leo. Etiam arcu mi, lobortis eu lacus vitae, convallis ullamcorper leo.",
      time: "5:31PM",
      status: "/images/sent-icon.png",
      tempStatus: "/images/read-icon.png",
      owner: "sent"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae sem leo. Etiam arcu mi, lobortis eu lacus vitae, convallis ullamcorper leo.",
      time: "5:31PM",
      status: "/images/sent-icon.png",
      tempStatus: "/images/read-icon.png",
      owner: "received"
    }
  ]
}

function Chat() {
  let [data, setData] = useState(initialData.messages);
  const [seconds, setSeconds] = useState(0);
  let chatRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setData((oldData) => [...oldData, initialData.messages[Math.round(Math.random())]]);
      setSeconds(seconds+1);
    }, 144000);

    return () => clearInterval(timer);
  })

  return (
    <div className="chat">
      <Header headerInfo={initialData.headerInfo}/>
      <div className="chat-live">
        <div className="inner-chat" ref={chatRef}>
          {data.map(message => (
            <Message message={message} key={Math.random()*10000}/>
          ))}
        </div>
      </div>
      <Footer footerInfo={initialData.footerInfo}/>
    </div>
  )
};

ReactDOM.render(<Chat />, document.getElementById('root'));