import React, { Component } from 'react';
import login from "./App.js"
import './App.css';
import btn_icon_back_adaptiveshieldsetup from './images/btn_icon_back_adaptiveshieldsetup.png';

// UI framework component imports
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // if you are using Amplify CLI
import { withRouter } from 'react-router-dom';
Amplify.configure(awsconfig);




class AdaptiveShieldSetupScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      checkbox: 'false',
      checkboxCopy: 'false',
      checkboxCopy2: 'false',
    };
  }



  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  checkboxChanged_checkbox = (event) => {
    this.setState({checkbox: (event.target.checked ? 'true' : 'false')});
  }
  
  checkboxChanged_checkboxCopy = (event) => {
    this.setState({checkboxCopy: (event.target.checked ? 'true' : 'false')});
  }
  
  checkboxChanged_checkboxCopy2 = (event) => {
    this.setState({checkboxCopy2: (event.target.checked ? 'true' : 'false')});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Confirmation Page'
    this.props.appActions.goToScreen('confirmationPage', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButtonCopy = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
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
    
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    let checked_checkbox = this.state.checkbox;
    
    const style_elCheckbox = {
      fontSize: 17.1,
      pointerEvents: 'auto',
     };
    
    let checked_checkboxCopy = this.state.checkboxCopy;
    
    const style_elCheckboxCopy = {
      fontSize: 17.1,
      pointerEvents: 'auto',
     };
    const style_elText3 = {
      fontSize: 13.3,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<!DOCTYPE html>\n<html>\n<head>\n<style>\n.slider-wrapper {\n  display: inline-block;\n  width: 20px;\n  height: 150px;\n  padding: 0;\n}\n.slider-wrapper input {\n  width: 150px;\n  height: 20px;\n  margin: 0;\n  transform-origin: 75px 75px;\n  transform: rotate(-90deg);\n}\n</style>\n</head>\n<body>\n\n<div class=\"slider-wrapper\">\n  <input type=\"range\" min=\"0\" max=\"11\" value=\"7\" step=\"1\">\n</div>\n\n</body>\n</html>";
    
    const style_elEmbed = {
      pointerEvents: 'auto',
     };
    
    let checked_checkboxCopy2 = this.state.checkboxCopy2;
    
    const style_elCheckboxCopy2 = {
      fontSize: 17.1,
      pointerEvents: 'auto',
     };
    const style_elText2 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elText4 = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_elTextCopy = {
      fontSize: 15.2,
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
      <div className="AppScreen AdaptiveShieldSetupScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBackground" style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elText">
            <div className="baseFont" style={style_elText}>
              <div>{this.props.locStrings.adaptiveshieldsetup_text_197115}</div>
            </div>
          </div>
          
          <div className="elCheckbox">
            <Checkbox className="systemFontRegular" style={style_elCheckbox}  label={this.props.locStrings.adaptiveshieldsetup_checkbox_573746} onChange={this.checkboxChanged_checkbox} checked={checked_checkbox === 'true' || checked_checkbox === true || ''+checked_checkbox === '1'}  />
          </div>
          
          <div className="elCheckboxCopy">
            <Checkbox className="systemFontRegular" style={style_elCheckboxCopy}  label={this.props.locStrings.adaptiveshieldsetup_checkboxcopy_902133} onChange={this.checkboxChanged_checkboxCopy} checked={checked_checkboxCopy === 'true' || checked_checkboxCopy === true || ''+checked_checkboxCopy === '1'}  />
          </div>
          
          <div className="flowRow flowRow_AdaptiveShieldSetupScreen_elText3_388283">
          <div className="elText3">
            <div className="systemFontRegular" style={style_elText3}>
              <div>{this.props.locStrings.adaptiveshieldsetup_text3_388283}</div>
            </div>
          </div>
          
          <div className="embeddedContent elEmbed">
            <div style={style_elEmbed}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
          
          </div>
          <div className="elCheckboxCopy2">
            <Checkbox className="systemFontRegular" style={style_elCheckboxCopy2}  label={this.props.locStrings.adaptiveshieldsetup_checkboxcopy2_761190} onChange={this.checkboxChanged_checkboxCopy2} checked={checked_checkboxCopy2 === 'true' || checked_checkboxCopy2 === true || ''+checked_checkboxCopy2 === '1'}  />
          </div>
          
          <div className="flowRow flowRow_AdaptiveShieldSetupScreen_elText2_448772">
          <div className="elText2">
            <div className="baseFont" style={style_elText2}>
              <div>{this.props.locStrings.adaptiveshieldsetup_text2_448772}</div>
            </div>
          </div>
          
          </div>
          <div className="elText4">
            <div className="baseFont" style={style_elText4}>
              <div>{this.props.locStrings.adaptiveshieldsetup_text4_71641}</div>
            </div>
          </div>
          
          <div className="elTextCopy">
            <div className="systemFontRegular" style={style_elTextCopy}>
              <div>{this.props.locStrings.adaptiveshieldsetup_textcopy_650576}</div>
            </div>
          </div>
          
          <div className="elButton">
            <Button className="systemFontBold" style={style_elButton}  variant="raised" color="accent" onClick={this.onClick_elButton} >
              {this.props.locStrings.adaptiveshieldsetup_button_364166}
            </Button>
          </div>
          
          <div className="elButtonCopy">
            <Button className="systemFontBold" style={style_elButtonCopy}  variant="raised" color="accent" onClick={this.onClick_elButtonCopy} >
              {this.props.locStrings.adaptiveshieldsetup_buttoncopy_248410}
            </Button>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Adaptive Shield Setup</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_adaptiveshieldsetup} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
}
export default withRouter(AdaptiveShieldSetupScreen)