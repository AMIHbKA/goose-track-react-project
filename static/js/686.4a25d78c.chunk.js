"use strict";(self.webpackChunkgoose_track_project=self.webpackChunkgoose_track_project||[]).push([[686],{4390:function(n,e,t){t.d(e,{Z:function(){return m}});var r,i,o,a=t(2791),d=t(168),c=t(8789),s=c.default.div(r||(r=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n\n  width: 100%;\n\n  margin-top: 24px;\n  margin-bottom: 14px;\n\n  ",";\n\n  background-color: ",";\n\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  @media (min-width: ",") {\n    margin-top: 32px;\n\n    ",";\n  }\n"])),(function(n){return n.condensed?"padding: 15px 0 14px;":"padding: 17px 0 16px;"}),(function(n){return n.theme.choosedMonth.dateBackground}),(function(n){return n.theme.choosedMonth.borderColor}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.condensed?"padding: 11px 0 10px;":"padding: 15px 0 14px;"})),p=t(7413),u=t(8509),l=c.default.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .date-badge-wrapper {\n    margin-top: 6px;\n  }\n\n  .date-wrapper {\n    text-align: center;\n\n    ","\n  }\n"])),(function(n){return n.pointer&&"\n    cursor: pointer;\n  "})),x=c.default.div(o||(o=(0,d.Z)(["\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 18px;\n\n  text-align: center;\n\n  ",";\n"])),(function(n){var e=n.theme;return n.isWeekend&&"\n        color: ".concat(e.colors.primary,";\n    ")})),f=t(184),h=function(n){var e=n.day,t=n.date,r=n.activeDate,i=n.onDateClick,o=(0,p.L)(),d=(0,a.useContext)(c.ThemeContext),s=(0,a.useCallback)((function(){return o<Number.parseInt(d.breakpoints.tablet)?e.slice(0,1):e}),[e,o,d]),h=!t&&("SAT"===e||"SUN"===e),m=t&&r&&t.dateObject.getDate()===r.getDate();return t?(0,f.jsx)(l,{pointer:i&&!0,children:(0,f.jsxs)("div",{className:"date-wrapper",onClick:i,children:[(0,f.jsx)(x,{isWeekend:h,children:s()}),(0,f.jsx)("div",{className:"date-badge-wrapper",children:(0,f.jsx)(u.Z,{isActive:m,children:t.day})})]})}):(0,f.jsx)(x,{isWeekend:h,children:s()})},m=function(n){var e=n.weekDates,t=n.activeDate,r=n.onDateClick;return(0,f.jsx)(s,{condensed:e,children:["MON","TUE","WED","THU","FRI","SAT","SUN"].map((function(n,i){return(0,f.jsx)(h,{day:n,date:e?e[i]:null,activeDate:t,onDateClick:r&&r},n)}))})}},1686:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,o,a,d,c,s,p=t(733),u=t(4390),l=t(2320),x=t(168),f=t(8789),h=f.default.button(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  /* position: absolute; */\n\n  /* bottom: 20px;\n  left: 18px;\n  right: 18px; */\n\n  /* width: calc(100vw - 40px - 18px - 18px); */\n\n  width: 100%;\n\n  padding: 12px;\n\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n\n  color: ",";\n\n  background-color: ",";\n\n  border-radius: 8px;\n\n  ","\n\n  div {\n    margin-left: 8px;\n    padding-top: 2px;\n  }\n"])),(function(n){return n.theme.colors.mainText}),(function(n){return n.theme.choosedDay.addBtnBackground}),(function(n){var e=n.theme;return e.choosedDay.addBtnBorder?"border: ".concat(e.choosedDay.addBtnBorder,";"):"border: none;"})),m=f.default.div(i||(i=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 7px 0;\n\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 20px;\n\n  @media (min-width: ",") {\n    font-size: 20px;\n    line-height: 24px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),g=t(5634),w=t(184),b=function(n){var e=n.stage,t=(0,f.useTheme)().colors.mainText,r=(0,g.XA)();return(0,w.jsxs)(m,{children:[e,(0,w.jsx)(l.wl,{size:r?22:24,stroke:t})]})},v=f.default.div(o||(o=(0,x.Z)(["\n  height: 35px;\n  width: 100%;\n"]))),k=function(n){return n.tasks?(0,w.jsx)("div",{children:"Tasks EXISTS!"}):(0,w.jsx)(v,{})},j=f.default.div(a||(a=(0,x.Z)(["\n  position: relative;\n\n  flex-grow: 1;\n\n  width: calc(100vw - 40px);\n\n  padding: 18px 18px 20px;\n\n  background-color: ",";\n\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  @media (min-width: ",") {\n    width: calc((100vw - 64px - 16px) / 2);\n\n    padding: 20px;\n  }\n\n  @media (min-width: ",") {\n    width: calc((100vw - 64px - 289px - (27px * 2)) / 3);\n  }\n"])),(function(n){return n.theme.choosedMonth.dateBackground}),(function(n){return n.theme.choosedMonth.borderColor}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.laptop})),y=function(n){var e=n.stage,t=(0,f.useTheme)().colors.mainText;return(0,w.jsxs)(j,{children:[(0,w.jsx)(b,{stage:e}),(0,w.jsx)(k,{}),(0,w.jsxs)(h,{children:[(0,w.jsx)(l.pO,{size:24,stroke:t})," ",(0,w.jsx)("div",{children:"AddTask"})]})]})},D=f.default.div(d||(d=(0,x.Z)(["\n  flex-grow: 1;\n\n  width: calc(100vw - 40px);\n\n  overflow-x: auto;\n\n  @media (min-width: ",") {\n    width: calc(100vw - 64px);\n  }\n\n  @media (min-width: ",") {\n    width: calc(100vw - 64px - 289px);\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.laptop})),Z=f.default.div(c||(c=(0,x.Z)(["\n  display: inline-flex;\n  gap: 16px;\n\n  @media (min-width: ",") {\n    justify-content: space-between;\n  }\n\n  @media (min-width: ",") {\n    gap: 27px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.laptop})),T=function(){return(0,w.jsx)(D,{children:(0,w.jsx)(Z,{children:["To do","In progress","Done"].map((function(n){return(0,w.jsx)(y,{stage:n},n)}))})})},C=f.default.div(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n\n  height: 100%;\n"]))),B=function(){var n=new Date("2023-09-01"),e=(0,p.fk)(n);return(0,w.jsxs)(C,{children:[(0,w.jsx)(u.Z,{weekDates:e,activeDate:n,onDateClick:function(){}}),(0,w.jsx)(T,{})]})}},8509:function(n,e,t){var r,i=t(168),o=t(8789).default.div(r||(r=(0,i.Z)(["\n  padding: 4px 6px;\n\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 14px;\n\n  ","\n\n  @media (min-width: ",") {\n    padding: 4px 8px;\n\n    font-size: 16px;\n    line-height: 18px;\n\n    ","\n  }\n"])),(function(n){var e=n.isActive,t=n.theme;return e&&"\n    background-color: ".concat(t.colors.primary,";\n    color: ").concat(t.choosedMonth.todayBadgeTextColor,";\n    border-radius: 6px;\n  ")}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.isActive&&"\n    border-radius: 8px;\n  "}));e.Z=o},733:function(n,e,t){t.d(e,{E6:function(){return s},a_:function(){return p},fk:function(){return u}});var r=t(9439),i=t(3629),o=t(4565),a=t(9365),d=t(6386),c=function(n){return new Date(n).getDay()},s=function(n){for(var e=0,t=0;t<n.length;t++){var r=n[t];if("current"===r.type){if(1===c(r.iso)){e=t;break}for(var i=t-1;i>=0;i--)if("previous"===n[i].type&&1===c(n[i].iso)){e=i;break}break}}return n.slice(e,e+35)},p=function(n){var e=n.split(" "),t=(0,r.Z)(e,2),i=t[0],o=t[1],a=new Date(Date.parse("".concat(i," 1, 2023"))).getMonth(),d=parseInt(o);return new Date(d,a)},u=function(n){var e=(0,i.Z)(n,{weekStartsOn:1}),t=(0,o.Z)(n,{weekStartsOn:1});return(0,a.Z)({start:e,end:t}).map((function(n){return{date:(0,d.Z)(n,"yyyy-MM-dd"),day:(0,d.Z)(n,"d"),dateObject:n}}))}}}]);
//# sourceMappingURL=686.4a25d78c.chunk.js.map