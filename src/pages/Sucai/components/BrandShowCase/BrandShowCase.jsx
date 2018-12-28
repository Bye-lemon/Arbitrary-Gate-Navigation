import React, { Component } from 'react';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const generatorData = () => {
  const list = [{
    name: 'Stock Photo Search',
    description: '无版权图片搜索入口，支持20+图片站',
    link: 'javascript:(function(win,kw,imgs){var random =  Math.floor((Math.random() * 1000) + 1); var kwparam = (kw!==\'\')?\'kw=\'+kw+\'&\':\'\';var imgSrcs = []; for (var i = 0; i < Math.min(33, imgs.length); i++) {if(imgs[i].src.substr(0,4)==\'http\' && (imgs[i].src.split(\'.\').pop().substr(0,3)==\'jpg\'||imgs[i].src.split(\'.\').pop().substr(0,3)==\'png\'||imgs[i].src.split(\'.\').pop().substr(0,4)==\'jpeg\')){imgSrcs.push(imgs[i].src);}}win.open(\'https://sps.mailomix.com/?\'+kwparam+\'imgs=\'+encodeURIComponent(JSON.stringify(imgSrcs))+\'&utm_source=ba720dab-ac8c-78da-b5b5-e1296fe7450a\',\'stock-photo-search \' + random,\'width=500,height=600,left=\'+(win.screenX+(win.outerWidth-500)/2)+\',top=\'+(win.screenY+(win.outerHeight-740)/2)); })(window,getSelection?getSelection().toString():\'\',document.getElementsByTagName(\'img\'));',
  },
  {
    name: '网站名',
    description: '全球最大的同性交友网站',
    link: 'https://github.com',
  }];
  return list;
};

export default class BrandShowCase extends Component {
  static displayName = 'BrandShowCase';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = generatorData();
    return (
      <div className="brand-show-case" style={styles.container}>
        <Row gutter="20" wrap style={styles.items}>
          {data.map((item, index) => {
            return (
              <Col xxs="12" s="12" l="12" key={index}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                  <div style={styles.item}>
                    <div style={styles.image}>
                      {item.name}
                    </div>
                    <div style={styles.desc}>{item.description}</div>
                  </div>
                </a>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '0px 0',
  },
  items: {
    margin: '10px 0',
  },
  item: {
    margin: '10px 0',
    textAlign: 'center',
    border: '1px solid #e4ecf3',
    borderRadius: '6px',
    boxShadow: '1px 2px 3px #999',
    overflow: 'hidden',
    padding: '10px',
    transition: 'all .3s',
  },
  image: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#3273dc',
  },
  desc: {
    color: 'gray',
    fontSize: '12px',
    paddingTop: '10px',
    height: '35px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
