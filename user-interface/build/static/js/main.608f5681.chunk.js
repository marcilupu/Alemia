(this.webpackJsonpalemia=this.webpackJsonpalemia||[]).push([[0],{33:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(23),c=a.n(r),i=(a(33),a(24)),d=a(25),l=a(7),o=a(26),h=a(28),j=a(60),u=a(61),g=a(63),p=a(62),b=a(64),O=a(9),m=a.n(O),f=(a(53),a(5)),v="http://127.0.0.1:3001",x=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).default_state={current_step:1,selected_filename:"Archive",predicted_grade:"NaN",adjusted_grade:""},s.state=s.default_state,s.selectArchive=s.selectArchive.bind(Object(l.a)(s)),s.adjustGrade=s.adjustGrade.bind(Object(l.a)(s)),s.sendChangeRequest=s.sendChangeRequest.bind(Object(l.a)(s)),s.retrainModel=s.retrainModel.bind(Object(l.a)(s)),s.restartGradingProcess=s.restartGradingProcess.bind(Object(l.a)(s)),s}return Object(d.a)(a,[{key:"selectArchive",value:function(e){var t=this,a=new FormData;a.append("file",e.target.files[0]),m.a.post(v+"/predict",a,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"}}).then((function(a){t.setState({current_step:2,selected_filename:e.target.files[0].name,predicted_grade:a.data.predicted_grade})})).catch((function(e){return console.log(e)}))}},{key:"adjustGrade",value:function(e){this.setState({adjusted_grade:e.target.value})}},{key:"sendChangeRequest",value:function(){m.a.get(v+"/adjust_grade",{headers:{"Access-Control-Allow-Origin":"*"},params:{adjusted_grade:this.state.adjusted_grade}}).catch((function(e){return console.log(e)}))}},{key:"retrainModel",value:function(){m.a.get(v+"/retrain_model",{headers:{"Access-Control-Allow-Origin":"*"}}).catch((function(e){return console.log(e)}))}},{key:"restartGradingProcess",value:function(){this.setState(this.default_state)}},{key:"render",value:function(){var e=["process-step"],t=["process-step"];return 1===this.state.current_step?(e.push("current"),t.push("inactive")):(e.push("done"),t.push("current")),e=e.join(" "),t=t.join(" "),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(j.a,{children:[Object(f.jsxs)("div",{className:"logo-container",children:[Object(f.jsx)("img",{src:"images/logo.png",alt:"Naevia Logo"}),Object(f.jsx)("h1",{children:"Alemia"})]}),Object(f.jsxs)(u.a,{className:e,children:[Object(f.jsx)("h3",{children:"First Step"}),Object(f.jsxs)("p",{children:["Select the ",Object(f.jsx)("code",{children:".zip"})," archive containing the source code of the student you want to grade."]}),Object(f.jsx)(g.a,{children:Object(f.jsx)(g.a.File,{label:this.state.selected_filename,custom:!0,onChange:this.selectArchive})})]}),Object(f.jsxs)(u.a,{className:t,children:[Object(f.jsx)("h3",{children:"Second Step"}),Object(f.jsx)("p",{children:"Review the predicted grade. If you consider it is not right, create a change request to improve the machine learning models trained in the future."}),Object(f.jsxs)("p",{className:"grade",children:["The predicted grade is ",Object(f.jsx)("b",{children:this.state.predicted_grade}),"."]}),Object(f.jsx)(g.a,{children:Object(f.jsxs)(p.a,{className:"mb-3",children:[Object(f.jsx)(g.a.Control,{type:"text",placeholder:"Manually adjusted grade",value:this.state.adjusted_grade,onChange:this.adjustGrade}),Object(f.jsx)(p.a.Append,{children:Object(f.jsx)(b.a,{variant:"outline-secondary",onClick:this.sendChangeRequest,children:"Send a change request"})})]})}),Object(f.jsx)("p",{children:"Go to the next student or retrain the machine learning model. When the training process ends, the new model will automatically replace the current one."}),Object(f.jsx)(b.a,{variant:"secondary",size:"sm",block:!0,onClick:this.retrainModel,children:"Retrain the model"}),Object(f.jsx)(b.a,{variant:"secondary",size:"sm",block:!0,onClick:this.restartGradingProcess,children:"Restart the grading process"})]})]})})}}]),a}(n.a.Component);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.608f5681.chunk.js.map