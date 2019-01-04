import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List, Button, Popover, Radio, Input, message,
} from 'antd';

import styles from './VideoList.module.scss';

const RadioGroup = Radio.Group;
export default class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionValue: 100,
      value: -1,
    };
  }

  componentDidMount() {
    console.log('');
  }

  renderContent = id => {
    console.log(id);
    const { optionValue } = this.state;
    return (
      <div className={styles.addScorePanel}>
        <RadioGroup onChange={this.onChangeOption} value={optionValue}>
          <Radio value={100}>100</Radio>
          <Radio value={200}>200</Radio>
          <Radio value={500}>500</Radio>
          <Radio value={1000}>1000</Radio>
          <Radio value={-1}>
            其它
            {optionValue === -1 ? <Input className={styles.input} placeholder="100的倍数" onChange={this.setScoreValue} /> : null}
          </Radio>
        </RadioGroup>
        <div>
          <Button className={styles.addScoreBtn} type="primary" onClick={() => this.addScore(id)}>加分</Button>
        </div>
      </div>
    );
  }

  addScore = id => {
    const { value, optionValue } = this.state;
    if (!Number.isInteger(value / 100)) {
      message.error('分数必须为100的倍数！');
      return;
    }
    let score = 0;
    if (optionValue === -1) {
      score = value;
    } else {
      score = optionValue;
    }
    const obj = { id, score };
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_SCORE',
      payload: obj,
    });
  }

  setScoreValue = e => {
    const { value } = e.target;
    this.setState({
      value,
    });
  }

  renderItem = item => {
    console.log('');
    return (
      <List.Item>
        <span className={styles.movieName}>{`${item.index}.${item.movieName}`}</span>
        <span className={styles.movieName}>{`分数：${item.score}`}</span>
        <div>
          <Popover content={this.renderContent(item.id)} title={<center>加分</center>} trigger="click" placement="right">
            <Button className={styles.addScoreBtn} type="primary">加分</Button>
          </Popover>
        </div>
      </List.Item>
    );
  }

  onChangeOption = e => {
    this.setState({
      optionValue: e.target.value,
    });
  }

  render() {
    const { movieList } = this.props;

    for (let item = 0; item < movieList.length; item += 1) {
      movieList[item].index = item + 1;
    }

    return (
      <div className={styles.videoList}>
        <List
          header={<center>播放列表</center>}
          footer={<center>列表已加载完</center>}
          dataSource={movieList}
          bordered
          renderItem={item => this.renderItem(item)}
        />
      </div>
    );
  }
}

VideoList.propTypes = {
  movieList: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
