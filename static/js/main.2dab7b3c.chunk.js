(window.webpackJsonpnutrinionix=window.webpackJsonpnutrinionix||[]).push([[0],{104:function(e,t,a){e.exports=a(150)},109:function(e,t,a){},110:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},111:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(109),a(10)),c=a(11),l=a(13),u=a(12),m=a(14),g=(a(110),a(111),a(36)),p=a(4),d=a(180),h=a(184),f=a(186),b=a(185),v=a(41),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).sumCalories=function(e){return e.length?e.reduce((function(e,t){return e+t.serving_size/t.serving_qty*t.nf_calories}),0):0},a.sumCaloriesByType=function(e,t){return e.length?e.reduce((function(e,a){return a.meal_type==t?e+a.serving_size/a.serving_qty*a.nf_calories:e}),0):0},a.calculateGoalPercentage=function(e,t){var a=e/t*100;return a>100?100:Number(a.toFixed(1))},a.roundNumber=function(e){return Number(parseFloat(e).toFixed(1))},a.state={profile:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.intake_list,n=t.profile,r=this.props.classes,s=this.sumCalories(a);return i.a.createElement(d.a,{className:r.root},i.a.createElement(d.a,{container:!0,spacing:1,justify:"center",alignItems:"center",className:r.container},i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(h.a,{className:r.avatar},i.a.createElement("div",{className:""},i.a.createElement(v.a,{variant:"h6",className:r.headline},n.height_cm),i.a.createElement(v.a,{variant:"caption",className:r.caption},"CM")))),i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(h.a,{src:"/jane.jpg",className:r.profile_img})),i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(h.a,{className:r.avatar},i.a.createElement("div",{className:""},i.a.createElement(v.a,{variant:"h6",className:r.headline},n.weight_kg),i.a.createElement(v.a,{variant:"caption",className:r.caption},"KG"))))),i.a.createElement(d.a,{container:!0,justify:"center",alignItems:"flex-start",className:r.profile_name},i.a.createElement(v.a,{variant:"h5"},n.first_name," ",n.last_name)),i.a.createElement(b.a,{className:r.divider}),i.a.createElement(d.a,{container:!0,spacing:3,className:r.container},i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement(v.a,{variant:"h5",id:"current_caloriesparseFloat"},this.roundNumber(s)," Cal"),i.a.createElement(v.a,{variant:"caption"},"Consumed")),i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement(v.a,{variant:"h5",id:"goal_calories"},n.daily_goal," Cal"),i.a.createElement(v.a,{variant:"caption"},"Daily Goal"))),i.a.createElement("div",{className:r.progress_line},i.a.createElement(f.a,{variant:"determinate",value:this.calculateGoalPercentage(s,n.daily_goal)})),i.a.createElement(d.a,{alignItems:"center",justify:"center",container:!0,className:r.intake_types,spacing:4},["breakfast","lunch","snack","dinner"].map((function(t){return i.a.createElement(d.a,{item:!0,xs:3},i.a.createElement(v.a,{variant:"h6",className:r.headline6},e.sumCaloriesByType(a,t)),i.a.createElement(v.a,{variant:"caption"},t))}))))}}]),t}(n.Component),y=Object(p.a)((function(e){return{root:Object(g.a)({backgroundColor:"#f5f5f5"},e.breakpoints.up("lg"),{minHeight:"100vh"}),container:{padding:"10px 0"},divider:{margin:"20px 0",width:"100%"},content:{margin:"0",padding:"1px"},avatar:{margin:"auto",width:"56px",height:"56px"},profile_img:{margin:"auto",backgroundColor:"blue",width:"96px",height:"96px"},headline:{width:"40px",height:"24px",fontFamily:"Roboto",fontSize:"20px",fontWeight:"500",fontStretch:"normal",fontStyle:"normal",lineHeight:"normal",letterSpacing:"0.25px",textAlign:"center",color:"#ffffff"},headline6:{margin:"0","font-size":"20px"},caption:{width:"40px",height:"16px","font-size":"12px","font-weight":"normal","font-stretch":"normal","font-style":"normal","line-height":"1.33","letter-spacing":"0.4px","text-align":"center",color:"#ffffff"},profile_name:Object(g.a)({"font-size":"24px"},e.breakpoints.up("lg"),{"padding-bottom":"30px"}),progress_line:{flexGrow:1,padding:"10px"},intake_types:{margin:"auto"}}}))(_),E={first_name:"Jane",last_name:"Appleseed",height_cm:163,weight_kg:57,daily_goal:1500,data_points:[{date:"2019-11-5",intake_list:[]},{date:"2019-11-4",intake_list:[{nix_item_id:"55c9298af0432259369100c4",food_name:"Italian sausage",serving_unit:"link",serving_weight_grams:75,serving_qty:1,nf_calories:258,serving_size:2,meal_type:"breakfast",thumb:"https://d1r9wva3zcpswd.cloudfront.net/55c92acdf04322593691010c.jpeg"},{food_name:"salmon salad",serving_unit:"cup",serving_weight_grams:407.01,serving_qty:1,nf_calories:389.27,serving_size:1.5,meal_type:"lunch",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"},{food_name:"boneless skinless chicken breasts",serving_qty:1,serving_unit:"breast",serving_weight_grams:120,nf_calories:198,serving_size:2,meal_type:"dinner",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/7820_thumb.jpg"},{food_name:"slice cheese",serving_qty:1,serving_unit:"slice",serving_weight_grams:28,nf_calories:113.12,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"},{food_name:"orange",serving_qty:1,serving_unit:'fruit (2-7/8" dia)',serving_weight_grams:140,nf_calories:68.6,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"}]},{date:"2019-11-3",intake_list:[{food_name:"fried eggs",serving_qty:1,serving_unit:"large",serving_weight_grams:46,nf_calories:90.16,serving_size:2,meal_type:"breakfast",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/1741_thumb.jpg"},{food_name:"chicken salad",serving_qty:.5,serving_unit:"cup",serving_weight_grams:112.1,nf_calories:253.99,serving_size:1,meal_type:"lunch",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"},{nix_item_id:"598c0695306b814040ff908b",food_name:"Boneless Skinless Chicken Breasts",serving_unit:"oz",serving_qty:4,nf_calories:110,serving_size:1,meal_type:"dinner",thumb:"https://d1r9wva3zcpswd.cloudfront.net/5c04d53ff01a65ec7b2089dd.jpeg"},{food_name:"slice cheese",serving_qty:1,serving_unit:"slice",serving_weight_grams:28,nf_calories:113.12,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/8185_thumb.jpg"},{food_name:"orange",serving_qty:1,serving_unit:'fruit (2-7/8" dia)',serving_weight_grams:140,nf_calories:68.6,serving_size:2,meal_type:"snack",thumb:"https://d2xdmhkmkbyw75.cloudfront.net/719_thumb.jpg"}]}]},x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.intake,t=e.serving_size/e.serving_qty;return i.a.createElement("div",null,i.a.createElement("img",{style:{width:50,height:50},src:e.thumb}),i.a.createElement("span",{className:"name"}," ",e.food_name),i.a.createElement("span",{className:"serving"},e.serving_size," ",e.serving_unit," (",e.serving_weight_grams*t," g)"),i.a.createElement("span",{className:"calories"},e.nf_calories*t))}}]),t}(n.Component),k=(n.Component,a(187)),j=a(151),O=a(189),w=a(190),S=a(188),C=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.intake_list,t=this.props.classes;return i.a.createElement("div",{style:{zIndex:2}},i.a.createElement(k.a,null,e.map((function(e){var a=e.serving_size/e.serving_qty;return i.a.createElement(j.a,null,i.a.createElement(S.a,null,i.a.createElement(h.a,{src:e.thumb})),i.a.createElement(O.a,{classes:{primary:t.primaryText,secondary:t.secondaryText},primary:e.food_name,secondary:"".concat(e.serving_qty," ").concat(e.serving_unit," (").concat(a*e.serving_weight_grams," g)")}),i.a.createElement(w.a,null,i.a.createElement(O.a,{classes:{secondary:t.secondaryActionText},primary:"".concat(a*e.nf_calories," Cal"),secondary:e.meal_type})))}))))}}]),t}(n.Component),N=Object(p.a)({primaryText:{fontFamily:"Roboto-Medium",fontSize:"16px"},secondaryText:{fontFamily:"Roboto-Regular",fontSize:"14px"},secondaryActionText:{textAlign:"right"}})(C),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addIntake=function(e){console.log("adding item ".concat(e));var t=a.state.profile;t.data_points[0].intake_list.push(e),a.setState({profile:t})},a.changeCurrentCalories=function(e){var t=a.state.profile;t.data_points[1].intake_list.push({nf_calories:258}),a.setState({profile:t})},a.findIndexByDate=function(e){if(e.setHours(0,0,0,0),a.state.profile)for(var t=0;t<a.state.profile.data_points.length;t++){var n=new Date(a.state.profile.data_points[t].date);if(n.setHours(0,0,0,0),e.getTime()==n.getTime())return void a.setState({intake_index:t})}a.setState({intake_index:-1})},a.findDataPoints=function(e){var t=a.state.profile.data_points?a.state.profile.data_points[a.state.intake_index]:null;return t?t.intake_list:[]},a.state={profile:{},currentCalories:0,intake_index:0,currentDataPoints:[]},a.inputRef=i.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.findDataPoints(this.state.intake_index);return i.a.createElement(d.a,{container:!0,spacing:3},i.a.createElement(d.a,{className:e.item,item:!0,xs:12,md:5},i.a.createElement(y,{profile:this.state.profile,intake_list:t})),i.a.createElement(d.a,{className:e.item,item:!0,xs:12,md:7},i.a.createElement(N,{intake_list:t})))}},{key:"componentDidMount",value:function(){this.setState({profile:E})}}]),t}(n.Component),I=Object(p.a)((function(e){return{root:{flexGrow:1,zIndex:-1},item:{zIndex:-1}}}))(q),z=a(40),R=a.n(z),D=a(210),T=a(198),P=a(192),B=a(197),F=a(82),A=a.n(F),M=a(83),L=a.n(M),V=a(89),G=a(193),J=a(191),H=Object(V.a)({palette:{primary:J.a}});function Q(e){var t=e.servingChangeValue,a=e.size,n=e.changeQty,r=e.servingUnit;return i.a.createElement(P.a,null,i.a.createElement(G.a,{theme:H},i.a.createElement(D.a,{label:"Servings",value:a,color:"primary",variant:"filled","aria-describedby":"weight-helper-text",InputProps:{endAdornment:i.a.createElement(T.a,null,i.a.createElement(d.a,{justify:"center",alignItems:"center"},i.a.createElement(A.a,{onClick:function(){return n(a+t)}}),i.a.createElement(L.a,{onClick:function(){return n(a-t)}}))),"aria-label":"weight"}}),i.a.createElement(B.a,{id:"weight-helper-text"},r)))}var W=a(207),Y=a(199),U=a(200),K=a(205),$=a(196),X=a(201),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeQty=function(e){e>=.5&&a.setState({qty:e},(function(){a.setState({multiplier:a.state.qty/a.state.base_qty})}))},a.addItem=function(){var e=a.props.item,t={food_name:e.food_name,serving_qty:a.state.base_qty,serving_unit:e.serving_unit,serving_weight_grams:e.serving_weight_grams,nf_calories:e.nf_calories,serving_size:a.state.qty,meal_type:a.state.mealType,thumb:e.photo.thumb};console.log(t),a.props.add(t),a.props.close()},a.changeMealType=function(e){a.setState({mealType:e.target.value})},a.roundNumber=function(e){return Number(parseFloat(e).toFixed(2))},a.state={servingChangeValue:.5,base_qty:0,qty:1,multiplier:1,mealType:"breakfast"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.close,r=t.item,s=t.open,o=["breakfast","lunch","snack","dinner"];return console.log(r),i.a.createElement(W.a,{open:s,onClose:n,"aria-labelledby":"form-dialog-title"},i.a.createElement("figure",null,i.a.createElement("img",{id:"itemImage",className:a.mealThumb,src:r.photo.thumb,alt:r.food_name})),i.a.createElement(Y.a,null,r?r.food_name:null),i.a.createElement(b.a,null),i.a.createElement(U.a,{id:"mealDetails"},i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:4},i.a.createElement(Q,{servingChangeValue:this.state.servingChangeValue,size:this.state.qty,changeQty:function(t){return e.changeQty(t)},servingUnit:r.serving_unit})),i.a.createElement(d.a,{item:!0,xs:4,className:a.itemInfo},i.a.createElement("label",null,this.roundNumber(this.state.multiplier*r.serving_weight_grams)),i.a.createElement(B.a,{id:"serving_unit"},"grams")),i.a.createElement(d.a,{xs:4,className:a.itemInfo},i.a.createElement("label",null,this.roundNumber(this.state.multiplier*r.nf_calories)),i.a.createElement(B.a,{id:"serving_unit"},"calories")))),i.a.createElement(b.a,null),i.a.createElement(U.a,{id:"mealType"},i.a.createElement(P.a,{variant:"filled",className:a.formControl},i.a.createElement(d.a,null,i.a.createElement($.a,null,"Add To Today"),i.a.createElement("br",null),i.a.createElement(K.a,{className:a.mealTypeSelect,native:!0,value:this.state.mealType?this.state.mealType:o[0],onChange:this.changeMealType},o.map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement("br",null),i.a.createElement(d.a,{container:!0,justify:"flex-end"},i.a.createElement(X.a,{onClick:this.addItem},"Add")))))}},{key:"componentDidMount",value:function(){var e=this.props.item;this.setState({base_qty:e.serving_qty,qty:e.serving_qty})}}]),t}(n.Component),ee=Object(p.a)((function(e){return{mealThumb:{width:"64px",height:"64px",borderRadius:"4px"},formControl:{display:"flex"},mealTypeSelect:{width:"100%"},itemInfo:{textAlignLast:"end"}}}))(Z),te=a(90),ae=a(84),ne=a.n(ae),ie=(a(145),a(147),a(92)),re=a(85),se=a.n(re),oe=a(202);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var le=function(e){return e?R.a.get("https://trackapi.nutritionix.com/v2/search/instant?query=".concat(e),{headers:{"x-app-id":"30645a8a","x-app-key":"c480af1726fb78bb87f97bb49779e736"}}).then((function(e){var t=e.data;return Object.keys(t).map((function(e){return{title:e,value:t[e].slice(0,5)}}))})):[]},ue=function(e){var t=e.classes,a=e.inputRef,n=Object(te.a)(e,["classes","inputRef"]);return console.log(a),i.a.createElement(ie.a,Object.assign({fullWidth:!0,startAdornment:i.a.createElement(T.a,{position:"start"},i.a.createElement(se.a,null)),inputprops:{classes:{input:t.input}},inputRef:a},n))},me=function(e){return i.a.createElement(v.a,{variant:"overline",align:"left"},i.a.createElement(b.a,{component:"div"}),e.title)},ge=function(e){return e.value},pe=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).isLastSuggestion=function(t){var a=e.state.stateSuggestions[0].value[4],n=e.state.stateSuggestions[1].value[4];return JSON.stringify(t)==JSON.stringify(a)||JSON.stringify(t)==JSON.stringify(n)},e.renderSuggestion=function(t,a){a.query;var n=a.isHighlighted;return i.a.createElement(k.a,{selected:n,component:"div"},i.a.createElement(oe.a,{component:"div",style:{whiteSpace:"normal"}},i.a.createElement(S.a,null,i.a.createElement(h.a,{src:t.photo.thumb,style:{width:"40px",height:"40px",borderRadius:"4px"}})),i.a.createElement(O.a,{primary:t.food_name})),e.isLastSuggestion(t)?null:i.a.createElement(b.a,{variant:"inset"}))},e.handleSuggestionsFetchRequested=function(t){var a=t.value;le(a).then((function(t){e.setState({stateSuggestions:t})}))},e.handleSuggestionsClearRequested=function(){e.setState({stateSuggestions:[]})},e.handleChange=function(t){return function(a,n){var i=n.newValue;e.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(g.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state,Object(g.a)({},t,i)))}},e.getSuggestionValue=function(t){return e.props.setItem(t),t.food_name},e.storeInputReference=function(t){null!==t&&(e.input=t.input,console.log("this input is"),console.log(t))},e.state={single:"",popper:"",stateSuggestions:[],anchorEl:null,value:"",suggestions:[],classes:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.value,e.suggestions,e.anchorEl,e.stateSuggestions,this.props),a=t.classes,n=t.inputRef,r={renderInputComponent:ue,suggestions:this.state.stateSuggestions,onSuggestionsFetchRequested:this.handleSuggestionsFetchRequested,onSuggestionsClearRequested:this.handleSuggestionsClearRequested,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion};return i.a.createElement("div",{className:a.root},i.a.createElement(ne.a,Object.assign({multiSection:!0,renderSectionTitle:me,getSectionSuggestions:ge},r,{inputProps:{classes:a,id:"react-autosuggest-simple",label:"searchFood",placeholder:"Search Food...",value:this.state.single,onChange:this.handleChange("single"),inputRef:n},theme:{container:a.container,suggestionsContainerOpen:a.suggestionsContainerOpen,suggestionsList:a.suggestionsList,suggestion:a.suggestion}})))}}]),t}(i.a.Component),de=Object(p.a)((function(e){return{root:{flexGrow:1},container:{position:"relative",backgroundColor:"white",zIndex:0},suggestionsContainerOpen:{backgroundColor:"white",position:"absolute",zIndex:2,paddingLeft:e.spacing(1),borderRadius:e.spacing(1),marginTop:e.spacing(1),left:0,right:0},suggestion:{display:"block"},suggestionsList:{margin:0,padding:0,listStyleType:"none"},suggestionImage:{width:"40px",height:"40px",borderRadius:"4px"},divider:{height:e.spacing(2)},fab:{position:"absolute",bottom:"2%",right:"2%"}}}))(pe),he=a(203),fe=a(152),be=a(86),ve=a.n(be),_e=a(87),ye=a.n(_e),Ee=a(88),xe=a.n(Ee),ke=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props,a=t.date,n=t.onClick;return i.a.createElement("div",{className:e.root},i.a.createElement(d.a,{container:!0,justify:"center"},i.a.createElement(ye.a,{onClick:function(){return n(-1)}}),i.a.createElement(ve.a,{format:"YYYY/MM/DD"},a),i.a.createElement(xe.a,{onClick:function(){return n(1)}})))}}]),t}(n.Component),je=Object(p.a)((function(e){return{root:{padding:"10px 0"}}}))(ke),Oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(){a.setState({query:a.search.value},(function(){a.state.query.length>0?a.getSearchResult():a.setState({results:null})}))},a.getSearchResult=function(){R.a.get("https://trackapi.nutritionix.com/v2/search/instant?query=".concat(a.state.query),{headers:{"x-app-id":"30645a8a","x-app-key":"c480af1726fb78bb87f97bb49779e736"}}).then((function(e){var t=e.data;a.setState({results:t})}))},a.toggleSuggestionBar=function(){setTimeout((function(){a.setState({showSuggestionBar:!a.state.showSuggestionBar})}),500)},a.togglePopup=function(){a.setState({showPopup:!a.state.showPopup})},a.setItem=function(e){e.nix_item_id?R.a.get(" https://trackapi.nutritionix.com/v2/search/item?nix_item_id=".concat(e.nix_item_id),{headers:{"x-app-id":"30645a8a","x-app-key":"c480af1726fb78bb87f97bb49779e736"}}).then((function(e){var t=e.data;a.setState({item:t.foods[0]},(function(){a.togglePopup()}))})):R.a.post("https://trackapi.nutritionix.com/v2/natural/nutrients",{query:e.food_name},{headers:{"Content-Type":"application/json","x-app-id":"30645a8a","x-app-key":"c480af1726fb78bb87f97bb49779e736"}}).then((function(e){var t=e.data;a.setState({item:t.foods[0]},(function(){a.togglePopup()}))}))},a.state={query:"",results:null,item:null,showPopup:!1,showSuggestionBar:!1,date:""},a.config={headers:{"Content-Type":"application/json, x-app-id:30645a8a x-app-key:c480af1726fb78bb87f97bb49779e736"}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.inputRef;return i.a.createElement(d.a,null,i.a.createElement(he.a,{position:"static",className:a.nav},i.a.createElement(fe.a,{className:a.root},i.a.createElement(de,{inputRef:n,setItem:this.setItem})),i.a.createElement(je,{date:this.props.date,onClick:this.props.changeDataDate})),this.state.showPopup?i.a.createElement(ee,{open:this.state.showPopup,add:function(t){return e.props.addItem(t)},close:this.togglePopup,item:this.state.item}):null)}}]),t}(n.Component),we=Object(p.a)((function(e){return{nav:{zIndex:2},root:{padding:"4px 4px",display:"flex",alignItems:"center",margin:"auto"},input:{marginLeft:e.spacing(1),flex:1,padding:"5px 0"},iconButton:{padding:10},suggestionBar:{}}}))(Oe),Se=a(204),Ce=a(56),Ne=a.n(Ce),qe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeDataDate=function(e){var t=a.state.date;t.setDate(t.getDate()+e),a.setState({date:t}),a.dashboard.findIndexByDate(t)},a.state={date:0},a.inputRef=i.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"}),i.a.createElement(we,{addItem:function(t){return e.dashboard.addIntake(t)},date:this.state.date,changeDataDate:function(t){return e.changeDataDate(t)},inputRef:this.inputRef}),i.a.createElement(I,{ref:function(t){e.dashboard=t},date:this.state.date}),i.a.createElement(Se.a,{onClick:function(){return e.inputRef.current.focus()},className:t.fab,color:"primary","aria-label":"add"},i.a.createElement(Ne.a,null)))}},{key:"componentDidMount",value:function(){var e=this;this.setState({date:new Date},(function(){e.dashboard.findIndexByDate(new Date)}))}}]),t}(n.Component),Ie=Object(p.a)((function(e){return{fab:{position:"absolute",bottom:"2%",right:"2%"}}}))(qe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[104,1,2]]]);
//# sourceMappingURL=main.2dab7b3c.chunk.js.map