import React, { Component } from 'react';
import './App.css';
import Trend from 'react-trend';
import btn_icon_back_confirmationpage from './images/btn_icon_back_confirmationpage.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';

export default class ConfirmationPageScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  onClick_elButton = (ev) => {
    // Go to screen 'Shield On'
    this.props.appActions.goToScreen('shieldOn', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
    // Go to screen 'Account Summary'
    this.props.appActions.goToScreen('accountSummary', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    
    const sheet_elTrend = null  /* Warning: React Studio codegen didn't find requested data sheet */;
    let data_elTrend;
    if (sheet_elTrend) {
      data_elTrend = sheet_elTrend.items.map((item) => {
        return parseFloat(item['value']);
      });
    } else {
      // default to demo data if no sheet is available
      data_elTrend = [0, 10, 25, 22, 8, 5, 2];
    }
    const style_elTrend = {
      pointerEvents: 'auto',
     };
    const style_elText = {
      fontSize: 17.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elCard_outer = {
      backgroundColor: 'white',
      filter: 'drop-shadow(0.0px 2.3px 18px rgba(0, 0, 0, 0.1600))',
      overflow: 'visible',
     };
    const style_elText2 = {
      fontSize: 13.3,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const style_elButton = {
      display: 'block',
      fontSize: 14.2,
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    const style_elButtonCopy = {
      display: 'block',
      fontSize: 14.2,
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen ConfirmationPageScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_ConfirmationPageScreen_elTrend_689361">
          <div className="elTrend">
            <div style={style_elTrend}>
              <Trend data={data_elTrend} smooth autoDraw autoDrawDuration={2000} radius={10} strokeWidth={2} strokeLinecap={'butt'} gradient={['rgba(4.962065862491727, 229.49999392032623, 255, 1)', 'rgba(229.49999392032623, 229.49999392032623, 0, 1)']} />
            </div>
          </div>
          
          <div className="elText">
            <div className="systemFontRegular" style={style_elText}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.confirmationpage_text_169946.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          </div>
          <div className="elCard" style={style_elCard_outer}>
            <div className="cardBg" />
          </div>
          
          <div className="flowRow flowRow_ConfirmationPageScreen_elText2_395040">
          <div className="elText2">
            <div className="systemFontRegular" style={style_elText2}>
              <div>{this.props.locStrings.confirmationpage_text2_395040}</div>
            </div>
          </div>
          
          </div>
          <div className="elButton">
            <Button className="systemFontBold" style={style_elButton}  variant="raised" color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.confirmationpage_button_66082}
            </Button>
          </div>
          
          <div className="elButtonCopy">
            <Button className="systemFontBold" style={style_elButtonCopy}  variant="raised" color="accent" onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.confirmationpage_buttoncopy_944499}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Confirmation Page</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_confirmationpage} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
