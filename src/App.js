import "./App.css";

import React, { useState, useEffect, Component } from "react";
import { db } from "./database/database";

import NavBar from "./components/NavBar";
import Messages from "./components/Messages";
import MessageBox from "./components/MessageBox";

class App extends Component {
  // const [user, setUser] = useState("Blue.B");
  // const [message, setMessage] = useState([]);
  // const [isSended, setIsSended] = useState(false);

  // useEffect(() => {
  //   setMessage([]);
  //   let messageData = [];
  //   db.ref("app/messages").on("value", (snapshot) => {
  //     snapshot.forEach((snap) => {
  //       messageData.push(snap.val());
  //     });
  //     setMessage(messageData);
  //     if(module.hot) {
  //       module.hot.accept('./components/Messages', () => {
  //         this.forceUpdate()
  //       })
  //     }
  //   });
  // }, []);

  state = {
    user: 'Beer.B',
    message: []
  }

  componentDidMount() {
      let messageData = [];
      db.ref("app/messages").on("value", (snapshot) => {
        snapshot.forEach((snap) => {
          messageData.push(snap.val());
        });
        this.setState({message: messageData});
        if(module.hot) {
          module.hot.accept('./components/Messages', () => {
            this.forceUpdate()
          })
        }
      })
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <Messages
          user={this.state.user}
          message={this.state.message}
          onChangeName={(user) => {
            this.setState({user: user});
          }}
        />
        <MessageBox
          user={this.state.user}
          onSended={(msg) => {
            const sendMessage = {
              name: this.state.user,
              message: msg,
              datetime: new Date(),
            };

            const rootRef = db.ref();
            const storesRef = rootRef.child("app/messages");
            const newStoreRef = storesRef.push();
            newStoreRef.set(sendMessage);

            // setIsSended((prev) => !prev);
          }}
        ></MessageBox>
      </div>
    );
  }
}

export default App;
