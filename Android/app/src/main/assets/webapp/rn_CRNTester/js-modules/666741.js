__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),l=r(d[2]),u=r(d[3]),o=r(d[4]),c=r(d[5]),s=r(d[6]),h=r(d[7]),f=r(d[8]),p=r(d[9]),y=r(d[10]),E=r(d[11]),x=E.Text,b=E.TextInput,v=E.View,T=E.StyleSheet,S=E.Slider,C=E.Switch,w=E.Alert,k=(function(t){function n(){return u(this,n),c(this,s(n).apply(this,arguments))}return h(n,t),o(n,[{key:"render",value:function(){return y.createElement(v,{style:N.labelContainer},y.createElement(v,{style:N.label},y.createElement(x,null,this.props.label)),this.props.children)}}]),n})(y.Component),R=(function(t){function n(){var t,l;u(this,n);for(var o=arguments.length,h=new Array(o),f=0;f<o;f++)h[f]=arguments[f];return(l=c(this,(t=s(n)).call.apply(t,[this].concat(h)))).state={curText:'<No Event>',prevText:'<No Event>',prev2Text:'<No Event>',prev3Text:'<No Event>'},l.updateText=function(t){l.setState(function(n){return{curText:t,prevText:n.curText,prev2Text:n.prevText,prev3Text:n.prev2Text}})},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this;return y.createElement(v,null,y.createElement(b,{autoCapitalize:"none",placeholder:"Enter text to see events",autoCorrect:!1,onFocus:function(){return t.updateText('onFocus')},onBlur:function(){return t.updateText('onBlur')},onChange:function(n){return t.updateText('onChange text: '+n.nativeEvent.text)},onEndEditing:function(n){return t.updateText('onEndEditing text: '+n.nativeEvent.text)},onSubmitEditing:function(n){return t.updateText('onSubmitEditing text: '+n.nativeEvent.text)},onSelectionChange:function(n){return t.updateText('onSelectionChange range: '+n.nativeEvent.selection.start+','+(n.nativeEvent.selection.end||''))},onKeyPress:function(n){t.updateText('onKeyPress key: '+n.nativeEvent.key)},style:N.default}),y.createElement(x,{style:N.eventLabel},this.state.curText,'\n',"(prev: ",this.state.prevText,")",'\n',"(prev2: ",this.state.prev2Text,")",'\n',"(prev3: ",this.state.prev3Text,")"))}}]),n})(y.Component),A=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={text:'Placeholder Text'},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this;return y.createElement(v,null,y.createElement(b,{style:N.default,inputAccessoryViewID:"inputAccessoryView1",onChangeText:function(n){return t.setState({text:n})},value:this.state.text}),y.createElement(p,{nativeID:"inputAccessoryView1"},y.createElement(v,{style:{backgroundColor:'white'}},y.createElement(f,{onPress:function(){return t.setState({text:'Placeholder Text'})},title:"Reset Text"}))))}}]),n})(y.Component),z=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={text:''},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this,n=20-this.state.text.length,l=n>5?'blue':'red';return y.createElement(v,{style:N.rewriteContainer},y.createElement(b,{multiline:!1,maxLength:20,onChangeText:function(n){n=n.replace(/ /g,'_'),t.setState({text:n})},style:N.default,value:this.state.text}),y.createElement(x,{style:[N.remainder,{color:l}]},n))}}]),n})(y.Component),V=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={text:''},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this;return y.createElement(v,{style:N.rewriteContainer},y.createElement(b,{multiline:!1,onChangeText:function(n){t.setState({text:n.replace(/\s/g,'')})},style:N.default,value:this.state.text}))}}]),n})(y.Component),P=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={text:''},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this;return y.createElement(v,{style:N.rewriteContainer},y.createElement(b,{multiline:!1,onChangeText:function(n){t.setState({text:n.replace(/\u3072/g,'\u65e5')})},style:N.default,value:this.state.text}))}}]),n})(y.Component),F=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={text:'',password:'',isSecureTextEntry:!0},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this;return y.createElement(v,null,y.createElement(b,{secureTextEntry:!0,style:N.default,defaultValue:"abc",onChangeText:function(n){return t.setState({text:n})},value:this.state.text}),y.createElement(x,null,"Current text is: ",this.state.text),y.createElement(v,{style:{flex:1,flexDirection:'row'}},y.createElement(b,{style:N.default,defaultValue:"cde",onChangeText:function(n){return t.setState({password:n})},secureTextEntry:this.state.isSecureTextEntry,value:this.state.password}),y.createElement(C,{onValueChange:function(n){t.setState({isSecureTextEntry:n})},style:{marginLeft:4},value:this.state.isSecureTextEntry})))}}]),n})(y.Component),O=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={text:'Hello #World'},l}return h(n,t),o(n,[{key:"render",value:function(){for(var t,n,l=this,u=/\s+/,o=this.state.text,c=[];o&&(u.lastIndex=0,null!==(t=u.exec(o)));)n=t.index,0===t[0].length&&(n=1),c.push(o.substr(0,n)),c.push(t[0]),n+=t[0].length,o=o.slice(n);return c.push(o),c=c.map(function(t){return/^#/.test(t)?y.createElement(x,{key:t,style:N.hashtag},t):t}),y.createElement(v,null,y.createElement(b,{multiline:!0,style:N.multiline,onChangeText:function(t){l.setState({text:t})}},y.createElement(x,null,c)))}}]),n})(y.Component),I=(function(t){function n(){var t,l;u(this,n);for(var o=arguments.length,h=new Array(o),f=0;f<o;f++)h[f]=arguments[f];return(l=c(this,(t=s(n)).call.apply(t,[this].concat(h)))).focusNextField=function(t){l.refs[t].focus()},l}return h(n,t),o(n,[{key:"render",value:function(){var t=this;return y.createElement(v,null,y.createElement(b,{ref:"1",style:N.default,placeholder:"blurOnSubmit = false",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){return t.focusNextField('2')}}),y.createElement(b,{ref:"2",style:N.default,keyboardType:"email-address",placeholder:"blurOnSubmit = false",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){return t.focusNextField('3')}}),y.createElement(b,{ref:"3",style:N.default,keyboardType:"url",placeholder:"blurOnSubmit = false",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){return t.focusNextField('4')}}),y.createElement(b,{ref:"4",style:N.default,keyboardType:"numeric",returnKeyType:"done",placeholder:"blurOnSubmit = false",blurOnSubmit:!1,onSubmitEditing:function(){return t.focusNextField('5')}}),y.createElement(b,{ref:"5",style:N.default,keyboardType:"numbers-and-punctuation",placeholder:"blurOnSubmit = true",returnKeyType:"done"}))}}]),n})(y.Component),W=(function(t){function n(t){var l;return u(this,n),(l=c(this,s(n).call(this,t))).state={selection:{start:0,end:0},value:t.value},l}return h(n,t),o(n,[{key:"onSelectionChange",value:function(t){var n=t.nativeEvent.selection;this.setState({selection:n})}},{key:"getRandomPosition",value:function(){var t=this.state.value.length;return Math.round(Math.random()*t)}},{key:"select",value:function(t,n){this._textInput.focus(),this.setState({selection:{start:t,end:n}})}},{key:"selectRandom",value:function(){var t=[this.getRandomPosition(),this.getRandomPosition()].sort(function(t,n){return t-n});this.select.apply(this,l(t))}},{key:"placeAt",value:function(t){this.select(t,t)}},{key:"placeAtRandom",value:function(){this.placeAt(this.getRandomPosition())}},{key:"render",value:function(){var t=this,n=this.state.value.length;return y.createElement(v,null,y.createElement(b,{multiline:this.props.multiline,onChangeText:function(n){return t.setState({value:n})},onSelectionChange:this.onSelectionChange.bind(this),ref:function(n){return t._textInput=n},selection:this.state.selection,style:this.props.style,value:this.state.value}),y.createElement(v,null,y.createElement(x,null,"selection = ",JSON.stringify(this.state.selection)),y.createElement(x,{onPress:this.placeAt.bind(this,0)},"Place at Start (0, 0)"),y.createElement(x,{onPress:this.placeAt.bind(this,n)},"Place at End (",n,", ",n,")"),y.createElement(x,{onPress:this.placeAtRandom.bind(this)},"Place at Random"),y.createElement(x,{onPress:this.select.bind(this,0,n)},"Select All"),y.createElement(x,{onPress:this.selectRandom.bind(this)},"Select Random")))}}]),n})(y.Component),L=(function(l){function f(t){var n;return u(this,f),(n=c(this,s(f).call(this,t))).state={width:100,multiline:!0,text:'',contentSize:{width:0,height:0}},n}return h(f,l),o(f,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){this.setState({multiline:t.multiline})}},{key:"render",value:function(){var l=this,u=this.props,o=u.style,c=(u.multiline,n(u,["style","multiline"]));return y.createElement(v,null,y.createElement(x,null,"Width:"),y.createElement(S,{value:100,minimumValue:0,maximumValue:100,step:10,onValueChange:function(t){return l.setState({width:t})}}),y.createElement(x,null,"Multiline:"),y.createElement(C,{value:this.state.multiline,onValueChange:function(t){return l.setState({multiline:t})}}),y.createElement(x,null,"TextInput:"),y.createElement(b,t({value:"prop",multiline:this.state.multiline,style:[o,{width:this.state.width+'%'}],onChangeText:function(t){return l.setState({text:t})},onContentSizeChange:function(t){return l.setState({contentSize:t.nativeEvent.contentSize})}},c)),y.createElement(x,null,"Plain text value representation:"),y.createElement(x,null,this.state.text),y.createElement(x,null,"Content Size: ",JSON.stringify(this.state.contentSize)))}}]),f})(y.Component),N=T.create({default:{borderWidth:T.hairlineWidth,borderColor:'#0f0f0f',flex:1,fontSize:13,padding:4},multiline:{borderWidth:T.hairlineWidth,borderColor:'#0f0f0f',flex:1,fontSize:13,height:50,padding:4,marginBottom:4},multilineExpandable:{height:'auto',maxHeight:100},multilineWithFontStyles:{color:'blue',fontWeight:'bold',fontSize:18,fontFamily:'Cochin',height:60},eventLabel:{margin:3,fontSize:12},labelContainer:{flexDirection:'row',marginVertical:2,flex:1},label:{width:115,alignItems:'flex-end',marginRight:10,paddingTop:2},rewriteContainer:{flexDirection:'row',alignItems:'center'},remainder:{textAlign:'right',width:24},hashtag:{color:'blue',fontWeight:'bold'}});e.displayName=void 0,e.title='<TextInput>',e.description='Single and multi-line text inputs.',e.examples=[{title:'Auto-focus',render:function(){return y.createElement(b,{autoFocus:!0,style:N.default,accessibilityLabel:"I am the accessibility label for text input"})}},{title:"Live Re-Write (<sp>  ->  '_') + maxLength",render:function(){return y.createElement(z,null)}},{title:'Live Re-Write (no spaces allowed)',render:function(){return y.createElement(V,null)}},{title:'Live Re-Write (\u3072 -> \u65e5)',render:function(){return y.createElement(P,null)}},{title:'Keyboard Accessory View',render:function(){return y.createElement(A,null)}},{title:'Auto-capitalize',render:function(){return y.createElement(v,null,y.createElement(k,{label:"none"},y.createElement(b,{autoCapitalize:"none",style:N.default})),y.createElement(k,{label:"sentences"},y.createElement(b,{autoCapitalize:"sentences",style:N.default})),y.createElement(k,{label:"words"},y.createElement(b,{autoCapitalize:"words",style:N.default})),y.createElement(k,{label:"characters"},y.createElement(b,{autoCapitalize:"characters",style:N.default})))}},{title:'Auto-correct',render:function(){return y.createElement(v,null,y.createElement(k,{label:"true"},y.createElement(b,{autoCorrect:!0,style:N.default})),y.createElement(k,{label:"false"},y.createElement(b,{autoCorrect:!1,style:N.default})))}},{title:'Nested content and `value` property',render:function(){return y.createElement(v,null,y.createElement(k,{label:"singleline"},y.createElement(b,{style:N.default,value:"(value property)"},"(first raw text node)",y.createElement(x,{style:{color:'red'}},"(internal raw text node)"),"(last raw text node)")),y.createElement(k,{label:"multiline"},y.createElement(b,{style:N.default,multiline:!0,value:"(value property)"},"(first raw text node)",y.createElement(x,{style:{color:'red'}},"(internal raw text node)"),"(last raw text node)")))}},{title:'Keyboard types',render:function(){var t=['default','ascii-capable','numbers-and-punctuation','url','number-pad','phone-pad','name-phone-pad','email-address','decimal-pad','twitter','web-search','numeric'].map(function(t){return y.createElement(k,{key:t,label:t},y.createElement(b,{keyboardType:t,style:N.default}))});return y.createElement(v,null,t)}},{title:'Keyboard appearance',render:function(){var t=['default','light','dark'].map(function(t){return y.createElement(k,{key:t,label:t},y.createElement(b,{keyboardAppearance:t,style:N.default}))});return y.createElement(v,null,t)}},{title:'Return key types',render:function(){var t=['default','go','google','join','next','route','search','send','yahoo','done','emergency-call'].map(function(t){return y.createElement(k,{key:t,label:t},y.createElement(b,{returnKeyType:t,style:N.default}))});return y.createElement(v,null,t)}},{title:'Enable return key automatically',render:function(){return y.createElement(v,null,y.createElement(k,{label:"true"},y.createElement(b,{enablesReturnKeyAutomatically:!0,style:N.default})))}},{title:'Secure text entry',render:function(){return y.createElement(F,null)}},{title:'Event handling',render:function(){return y.createElement(R,null)}},{title:'Colored input text',render:function(){return y.createElement(v,null,y.createElement(b,{style:[N.default,{color:'blue'}],defaultValue:"Blue"}),y.createElement(b,{style:[N.default,{color:'green'}],defaultValue:"Green"}))}},{title:'Colored highlight/cursor for text input',render:function(){return y.createElement(v,null,y.createElement(b,{style:N.default,selectionColor:'green',defaultValue:"Highlight me"}),y.createElement(b,{style:N.default,selectionColor:'rgba(86, 76, 205, 1)',defaultValue:"Highlight me"}))}},{title:'Clear button mode',render:function(){var t=['never','while-editing','unless-editing','always'].map(function(t){return y.createElement(k,{label:t},y.createElement(b,{key:t,style:N.default,clearButtonMode:t,defaultValue:t}))});return y.createElement(v,null,t)}},{title:'Clear and select',render:function(){return y.createElement(v,null,y.createElement(k,{label:"clearTextOnFocus"},y.createElement(b,{placeholder:"text is cleared on focus",defaultValue:"text is cleared on focus",style:N.default,clearTextOnFocus:!0})),y.createElement(k,{label:"selectTextOnFocus"},y.createElement(b,{placeholder:"text is selected on focus",defaultValue:"text is selected on focus",style:N.default,selectTextOnFocus:!0})),y.createElement(k,{label:"clearTextOnFocus (multiline)"},y.createElement(b,{placeholder:"text is cleared on focus",defaultValue:"text is cleared on focus",style:N.default,clearTextOnFocus:!0,multiline:!0})),y.createElement(k,{label:"selectTextOnFocus (multiline)"},y.createElement(b,{placeholder:"text is selected on focus",defaultValue:"text is selected on focus",style:N.default,selectTextOnFocus:!0,multiline:!0})))}},{title:'Blur on submit',render:function(){return y.createElement(I,null)}},{title:'Multiline blur on submit',render:function(){return y.createElement(v,null,y.createElement(b,{style:N.multiline,placeholder:"blurOnSubmit = true",returnKeyType:"next",blurOnSubmit:!0,multiline:!0,onSubmitEditing:function(t){return w.alert('Alert',t.nativeEvent.text)}}))}},{title:'Multiline',render:function(){return y.createElement(v,null,y.createElement(b,{placeholder:"multiline text input",multiline:!0,style:N.multiline}),y.createElement(b,{placeholder:"multiline text input with font styles and placeholder",multiline:!0,clearTextOnFocus:!0,autoCorrect:!0,autoCapitalize:"words",placeholderTextColor:"red",keyboardType:"url",style:[N.multiline,N.multilineWithFontStyles]}),y.createElement(b,{placeholder:"multiline text input with max length",maxLength:5,multiline:!0,style:N.multiline}),y.createElement(b,{placeholder:"uneditable multiline text input",editable:!1,multiline:!0,style:N.multiline}),y.createElement(b,{defaultValue:"uneditable multiline text input with phone number detection: 88888888.",editable:!1,multiline:!0,style:N.multiline,dataDetectorTypes:"phoneNumber"}))}},{title:'TextInput Intrinsic Size',render:function(){return y.createElement(v,null,y.createElement(x,null,"Singleline TextInput"),y.createElement(v,{style:{height:80}},y.createElement(b,{style:{position:'absolute',fontSize:16,backgroundColor:'#eeeeee',borderColor:'#666666',borderWidth:5,borderTopWidth:20,borderRadius:10,borderBottomRightRadius:20,padding:10,paddingTop:20},testID:"singleline_textinput",placeholder:"Placeholder defines intrinsic size"})),y.createElement(x,null,"Multiline TextInput"),y.createElement(v,{style:{height:130}},y.createElement(b,{style:{position:'absolute',fontSize:16,backgroundColor:'#eeeeee',borderColor:'#666666',borderWidth:5,borderTopWidth:20,borderRadius:10,borderBottomRightRadius:20,padding:10,paddingTop:20,maxHeight:100},testID:"multiline_textinput",multiline:!0,placeholder:"Placeholder defines intrinsic size"})),y.createElement(v,null,y.createElement(b,{style:{fontSize:16,backgroundColor:'#eeeeee',borderColor:'#666666',borderWidth:5,borderTopWidth:20,borderRadius:10,borderBottomRightRadius:20,padding:10,paddingTop:20},testID:"multiline_textinput_with_flex",multiline:!0,placeholder:"Placeholder defines intrinsic size"})))}},{title:'Auto-expanding',render:function(){return y.createElement(v,null,y.createElement(b,{placeholder:"height increases with content",defaultValue:"React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about - learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.",multiline:!0,enablesReturnKeyAutomatically:!0,returnKeyType:"go",style:[N.multiline,N.multilineExpandable]}))}},{title:'Auto-expanding',render:function(){return y.createElement(v,null,y.createElement(L,{enablesReturnKeyAutomatically:!0,returnKeyType:"done",multiline:!0,style:{maxHeight:400,minHeight:20,paddingTop:0,backgroundColor:'#eeeeee',color:'blue'}},y.createElement(x,{style:{fontSize:30,color:'green'}},"huge"),"generic generic generic",y.createElement(x,{style:{fontSize:6,color:'red'}},"small small small small small small"),y.createElement(x,null,"regular regular"),y.createElement(x,{style:{fontSize:30,color:'green'}},"huge huge huge huge huge"),"generic generic generic"))}},{title:'Attributed text',render:function(){return y.createElement(O,null)}},{title:'Text selection & cursor placement',render:function(){return y.createElement(v,null,y.createElement(W,{style:N.default,value:"text selection can be changed"}),y.createElement(W,{multiline:!0,style:N.multiline,value:'multiline text selection\ncan also be changed'}))}},{title:'TextInput maxLength',render:function(){return y.createElement(v,null,y.createElement(k,{label:"maxLength: 5"},y.createElement(b,{maxLength:5,style:N.default})),y.createElement(k,{label:"maxLength: 5 with placeholder"},y.createElement(b,{maxLength:5,placeholder:"ZIP code entry",style:N.default})),y.createElement(k,{label:"maxLength: 5 with default value already set"},y.createElement(b,{maxLength:5,defaultValue:"94025",style:N.default})),y.createElement(k,{label:"maxLength: 5 with very long default value already set"},y.createElement(b,{maxLength:5,defaultValue:"9402512345",style:N.default})))}},{title:'Text Content Type',render:function(){return y.createElement(v,null,y.createElement(k,{label:"emailAddress"},y.createElement(b,{textContentType:"emailAddress",style:N.default})),y.createElement(k,{label:"name"},y.createElement(b,{textContentType:"name",style:N.default})))}}]},666741,[14,22,30,3,4,5,8,9,179,271,11,15]);