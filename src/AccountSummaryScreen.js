import React, { Component } from 'react';
import './App.css';
import Trend from 'react-trend';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import btn_icon_back_accountsummary from './images/btn_icon_back_accountsummary.png';
import Appbar from 'muicss/lib/react/appbar';
import { Auth } from 'aws-amplify';


async function signOut() {
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export default class AccountSummaryScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, symbol

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

  // --- Functions for component state index 0 (1 of 3) --- 
  
  onClick_state0_elHotspot736801 = (ev) => {
    // Go to screen 'Adaptive Shield Setup'
    this.props.appActions.goToScreen('AdaptiveShieldSetup', { transitionId: 'fadeIn' });

  }
  
  
  renderState0() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_state0_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_state0_elText = {
      fontSize: 19.9,
      color: '#00ad5d',
      textAlign: 'center',
     };
    const style_state0_elText2 = {
      color: 'black',
      textAlign: 'center',
     };
    const style_state0_elTextCopy = {
      fontSize: 19.0,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    const style_state0_elTextCopy2 = {
      fontSize: 19.0,
      color: '#0093d5',
      textAlign: 'center',
     };
    const style_state0_elTextCopy3 = {
      fontSize: 19.0,
      color: '#0093d5',
      textAlign: 'center',
     };
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<html>\n<head>\n\t<title></title>\n<style>\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ecf0f1;\n  height: 20vh;\n}\n\n/* Hide the input */\n#chck {\n  position: absolute;\n  opacity: 0;\n  z-index: -0;\n}\n\n.toggle {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 11em;\n  height: 4em;\n  background-color: #bdd4e7;\n  background-image: linear-gradient(315deg, #8693ab 0%, #bdd4e7 74%);\n  border-radius: 6em;\n  transition: all 0.5s ease;\n  cursor: pointer;\n}\n.toggle:after {\n  position: absolute;\n  content: \"Adaptive Shield\";\n  align-content: left;\n  justify-content: left;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-align: left;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: left;\n  color: #ffffff;\n  font-size: 1.1em;\n  height: 3.25em;\n  width: 3.25em;\n  transform: translate(15%);\n}\n\n.toggle-handler {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -7em;\n  justify-content: center;\n  align-items: center;\n  width: 3.25em;\n  height: 3.25em;\n  background: #5e6a73;\n  border-radius: 75%;\n  transition: all 0.5s ease;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n}\n.toggle-handler::before {\n  content: \"OFF\";\n  color: #f9f9f9;\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.toggle:hover {\n  transform: scale(1.1);\n}\n\n.toggle-handler:hover {\n  transform: scale(1.2);\n}\n\n#chck:checked + .toggle {\n  background-color: #ffffff;\n  background-image: linear-gradient(315deg, #ffffff 0%, #82bc23 74%);\n}\n#chck:checked + .toggle::after {\n  color: white;\n  transform: translate(-75%);\n}\n#chck:checked + .toggle .toggle-handler {\n  content: \"\";\n  transform: translate(80px, 0);\n  width: 3.25em;\n  height: 3.25em;\n  margin-right: 3em;\n  margin-left: 0px;\n  background: #68961c;\n}\n#chck:checked + .toggle .toggle-handler::before {\n  content: \"ON\";\n  font-size: 1em;\n  color: #f9f9f9;\n}\n\n\n/*# sourceMappingURL=shield-switch-3.css.map */\n\n</style>\n</head>\n<body>\n\t\t<input id=\"chck\" type=\"checkbox\">\n\t\t<label for=\"chck\" class=\"toggle\">\n  \t\t\t<span class=\"toggle-handler\"></span>\n\t\t</label>\n</body>\n</html>";
    
    const style_state0_elEmbed935675 = {
      pointerEvents: 'auto',
     };
    
    const style_state0_elHotspot736801 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy4 = {
      fontSize: 17.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const sheet_state0_elTrend = null  /* Warning: React Studio codegen didn't find requested data sheet */;
    let data_state0_elTrend;
    if (sheet_state0_elTrend) {
      data_state0_elTrend = sheet_state0_elTrend.items.map((item) => {
        return parseFloat(item['value']);
      });
    } else {
      // default to demo data if no sheet is available
      data_state0_elTrend = [0, 10, 25, 22, 8, 5, 2];
    }
    const style_state0_elTrend = {
      pointerEvents: 'auto',
     };
    const style_state0_elTextCopy5 = {
      fontSize: 17.1,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'center',
     };
    
    const state0_elReactTable_data = this.props.appActions.getDataSheet('stock').items;
    let state0_elReactTable_columns = [];
    if (state0_elReactTable_data.length > 0) {
      for (let col in state0_elReactTable_data[0]) {
        if (col == "key" || (state0_elReactTable_data[0][col] instanceof Object)) continue;
        state0_elReactTable_columns.push({
          Header: col,
          accessor: col
        });
      }
    }
    const style_state0_elReactTable = {
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen AccountSummaryScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight state0_elBackground" style={style_state0_elBackground_outer}>
            <div className="appBg" style={style_state0_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="state0_elText">
            <div className="systemFontBold" style={style_state0_elText}>
              <div>{this.props.locStrings.accountsummary_text_163783}</div>
            </div>
          </div>
          
          <div className="state0_elText2">
            <div className="headlineFont" style={style_state0_elText2}>
              <div>{this.props.locStrings.accountsummary_text2_786874}</div>
            </div>
          </div>
          
          <div className="state0_elTextCopy">
            <div className="systemFontBold" style={style_state0_elTextCopy}>
              <div>{this.props.locStrings.accountsummary_textcopy_217773}</div>
            </div>
          </div>
          
          <div className="state0_elTextCopy2">
            <div className="systemFontBold" style={style_state0_elTextCopy2}>
              <div>{this.props.locStrings.accountsummary_textcopy2_520858}</div>
            </div>
          </div>
          
          <div className="state0_elTextCopy3">
            <div className="systemFontBold" style={style_state0_elTextCopy3}>
              <div>{this.props.locStrings.accountsummary_textcopy3_574373}</div>
            </div>
          </div>
          
          <div className="embeddedContent state0_elEmbed935675">
            <div style={style_state0_elEmbed935675}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
          
          <div className="state0_elHotspot736801">
            <div className="actionFont" style={style_state0_elHotspot736801} onClick={this.onClick_state0_elHotspot736801}  />
          </div>
          
          <div className="state0_elTextCopy4">
            <div className="systemFontBold" style={style_state0_elTextCopy4}>
              <div>{this.props.locStrings.accountsummary_textcopy4_625530}</div>
            </div>
          </div>
          
          <div className="state0_elTrend">
            <div style={style_state0_elTrend}>
              <Trend data={data_state0_elTrend} autoDraw autoDrawDuration={2000} radius={10} strokeWidth={2} strokeLinecap={'butt'} gradient={['rgba(127.5, 229.5, 255, 1)', 'rgba(229.5, 229.5, 76.5, 1)']} />
            </div>
          </div>
          
          <div className="state0_elTextCopy5">
            <div className="systemFontBold" style={style_state0_elTextCopy5}>
              <div>{this.props.locStrings.accountsummary_textcopy5_316209}</div>
            </div>
          </div>
          
          <div className="state0_elReactTable">
            <div style={style_state0_elReactTable}>
              <ReactTable
                data={state0_elReactTable_data}
                columns={state0_elReactTable_columns}
                defaultPageSize={2}
                />
            </div>
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Account Summary</div>  <div className="backBtn" onClick={ (ev)=>{ signOut() } }><img src={btn_icon_back_accountsummary} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 3) --- 
  
  onClick_state1_elHotspot736801 = (ev) => {
    // Go to screen 'Adaptive Shield Setup'
    this.props.appActions.goToScreen('adaptiveShieldSetup', { transitionId: 'fadeIn' });
  
  }
  
  
  renderState1() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<html>\n<head>\n\t<title></title>\n<style>\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ecf0f1;\n  height: 20vh;\n}\n\n/* Hide the input */\n#chck {\n  position: absolute;\n  opacity: 0;\n  z-index: -0;\n}\n\n.toggle {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 11em;\n  height: 4em;\n  background-color: #bdd4e7;\n  background-image: linear-gradient(315deg, #8693ab 0%, #bdd4e7 74%);\n  border-radius: 6em;\n  transition: all 0.5s ease;\n  cursor: pointer;\n}\n.toggle:after {\n  position: absolute;\n  content: \"Adaptive Shield\";\n  align-content: left;\n  justify-content: left;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-align: left;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: left;\n  color: #ffffff;\n  font-size: 1.1em;\n  height: 3.25em;\n  width: 3.25em;\n  transform: translate(15%);\n}\n\n.toggle-handler {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -7em;\n  justify-content: center;\n  align-items: center;\n  width: 3.25em;\n  height: 3.25em;\n  background: #5e6a73;\n  border-radius: 75%;\n  transition: all 0.5s ease;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n}\n.toggle-handler::before {\n  content: \"OFF\";\n  color: #f9f9f9;\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.toggle:hover {\n  transform: scale(1.1);\n}\n\n.toggle-handler:hover {\n  transform: scale(1.2);\n}\n\n#chck:checked + .toggle {\n  background-color: #ffffff;\n  background-image: linear-gradient(315deg, #ffffff 0%, #82bc23 74%);\n}\n#chck:checked + .toggle::after {\n  color: white;\n  transform: translate(-75%);\n}\n#chck:checked + .toggle .toggle-handler {\n  content: \"\";\n  transform: translate(80px, 0);\n  width: 3.25em;\n  height: 3.25em;\n  margin-right: 3em;\n  margin-left: 0px;\n  background: #68961c;\n}\n#chck:checked + .toggle .toggle-handler::before {\n  content: \"ON\";\n  font-size: 1em;\n  color: #f9f9f9;\n}\n\n\n/*# sourceMappingURL=shield-switch-3.css.map */\n\n</style>\n</head>\n<body>\n\t\t<input id=\"chck\" type=\"checkbox\">\n\t\t<label for=\"chck\" class=\"toggle\">\n  \t\t\t<span class=\"toggle-handler\"></span>\n\t\t</label>\n</body>\n</html>";
    
    const style_state1_elEmbed935675 = {
      pointerEvents: 'auto',
     };
    
    const style_state1_elHotspot736801 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen AccountSummaryScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="embeddedContent state1_elEmbed935675">
            <div style={style_state1_elEmbed935675}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
          
          <div className="state1_elHotspot736801">
            <div className="actionFont" style={style_state1_elHotspot736801} onClick={this.onClick_state1_elHotspot736801}  />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Account Summary</div>  <div className="backBtn" onClick={ (ev)=>{ signOut() } }><img src={btn_icon_back_accountsummary} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
  // --- Functions for component state index 2 (3 of 3) --- 
  
  onClick_state2_elHotspot736801 = (ev) => {
    // Go to screen 'Adaptive Shield Setup'
    this.props.appActions.goToScreen('adaptiveShieldSetup', { transitionId: 'fadeIn' });
  
  }
  
  
  renderState2() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    // Embedded HTML content for element 'embed'
    const htmlContent_embed = "<html>\n<head>\n\t<title></title>\n<style>\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #ecf0f1;\n  height: 20vh;\n}\n\n/* Hide the input */\n#chck {\n  position: absolute;\n  opacity: 0;\n  z-index: -0;\n}\n\n.toggle {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  width: 11em;\n  height: 4em;\n  background-color: #bdd4e7;\n  background-image: linear-gradient(315deg, #8693ab 0%, #bdd4e7 74%);\n  border-radius: 6em;\n  transition: all 0.5s ease;\n  cursor: pointer;\n}\n.toggle:after {\n  position: absolute;\n  content: \"Adaptive Shield\";\n  align-content: left;\n  justify-content: left;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-align: left;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: left;\n  color: #ffffff;\n  font-size: 1.1em;\n  height: 3.25em;\n  width: 3.25em;\n  transform: translate(15%);\n}\n\n.toggle-handler {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -7em;\n  justify-content: center;\n  align-items: center;\n  width: 3.25em;\n  height: 3.25em;\n  background: #5e6a73;\n  border-radius: 75%;\n  transition: all 0.5s ease;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);\n}\n.toggle-handler::before {\n  content: \"OFF\";\n  color: #f9f9f9;\n  font-size: 1em;\n  font-weight: bold;\n}\n\n.toggle:hover {\n  transform: scale(1.1);\n}\n\n.toggle-handler:hover {\n  transform: scale(1.2);\n}\n\n#chck:checked + .toggle {\n  background-color: #ffffff;\n  background-image: linear-gradient(315deg, #ffffff 0%, #82bc23 74%);\n}\n#chck:checked + .toggle::after {\n  color: white;\n  transform: translate(-75%);\n}\n#chck:checked + .toggle .toggle-handler {\n  content: \"\";\n  transform: translate(80px, 0);\n  width: 3.25em;\n  height: 3.25em;\n  margin-right: 3em;\n  margin-left: 0px;\n  background: #68961c;\n}\n#chck:checked + .toggle .toggle-handler::before {\n  content: \"ON\";\n  font-size: 1em;\n  color: #f9f9f9;\n}\n\n\n/*# sourceMappingURL=shield-switch-3.css.map */\n\n</style>\n</head>\n<body>\n\t\t<input id=\"chck\" type=\"checkbox\">\n\t\t<label for=\"chck\" class=\"toggle\">\n  \t\t\t<span class=\"toggle-handler\"></span>\n\t\t</label>\n</body>\n</html>";
    
    const style_state2_elEmbed935675 = {
      pointerEvents: 'auto',
     };
    
    const style_state2_elHotspot736801 = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen AccountSummaryScreen" style={baseStyle}>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="embeddedContent state2_elEmbed935675">
            <div style={style_state2_elEmbed935675}>
              <div dangerouslySetInnerHTML={{__html: htmlContent_embed}}></div>
            </div>
          </div>
          
          <div className="state2_elHotspot736801">
            <div className="actionFont" style={style_state2_elHotspot736801} onClick={this.onClick_state2_elHotspot736801}  />
          </div>
        </div>
        <Appbar className="navBar">
          <div className="title">Account Summary</div>  <div className="backBtn" onClick={ (ev)=>{ signOut() } }><img src={btn_icon_back_accountsummary} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  
  
  render() {
    switch (0) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
      case 2:
        return this.renderState2();
    }
  }
  
}

