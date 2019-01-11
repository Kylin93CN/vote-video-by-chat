import React, { Component } from 'react';
import { Input, Button } from 'antd';

import socket from 'socket.io-client';
import styles from './ChatRoom.module.scss';

const mySocket = socket('http://localhost:7001/chat');
export default class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    mySocket.on('connect', () => {
      console.log('connect!');
      mySocket.emit('chat', window.navigator.userAgent);
    });
    mySocket.on('res', msg => {
      console.log('res from server: %s!', msg);
    });
  }

  changeInput = e => {
    const { value } = e.target;
    this.setState({
      content: value,
    });
  }

  sendMessage = () => {
    mySocket.emit('message', this.state.content);
  }

  render() {
    const imgUrl = 'https://thirdwx.qlogo.cn/mmopen/vi_32/nic9bUaLw33cQ2icb75libTiceibB5vXzgHvbNpiaibpDKw87xZQNcl1QqNXsm6XpEOw4VV5srYJ9kRVjA1sgnr3G0Yeg/132'; // eslint-disable-line
    return (
      <div>
        <div className={styles.content}>
          <span>聊天室</span>
        </div>
        <div className={styles.content}>
          <ul className={styles.commentList}>
            <li>
              <div>
                <img alt="123" src={imgUrl} />
                <p>xx</p>
                <p>hello</p>
              </div>
            </li>
          </ul>
          <Input placeholder="请输入聊天内容..." value={this.state.content} onChange={() => this.changeInput} />
          <Button type="primary" onClick={() => this.sendMessage}>发送</Button>
        </div>
      </div>
    );
  }
}
