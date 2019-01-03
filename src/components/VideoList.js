import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  List, Button, Popover, Radio, Input,
} from 'antd';

import styles from './VideoList.module.scss';

const RadioGroup = Radio.Group;
export default class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100,
    };
  }

  componentDidMount() {
    console.log('');
  }

  renderContent = id => {
    console.log(id);
    return (
      <div className={styles.addScorePanel}>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={100}>100</Radio>
          <Radio value={200}>200</Radio>
          <Radio value={500}>500</Radio>
          <Radio value={1000}>1000</Radio>
          <Radio value={-1}>
            其它
            {this.state.value === -1 ? <Input className={styles.input} placeholder="100的倍数" /> : null}
          </Radio>
        </RadioGroup>
        <div>
          <Button style={{ margin: 'auto', display: 'block', marginTop: '5px' }} type="primary">加分</Button>
        </div>
      </div>
    );
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

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
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
};
