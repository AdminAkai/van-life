import{s as n,L as o,j as e,r as s}from"./index-1e8f967c.js";const i="/assets/van-life-logo-f07bda1c.png",r=n(o)`
  font-size: 16px;
  text-decoration: none;
  margin-left: 16px;
  color: ${({theme:t})=>t.text.gray};
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.923px;
`,l=({label:t,route:a})=>e.jsx(r,{to:a,children:t}),c=[{label:"About",route:"/about"},{label:"Vans",route:"/vans"}],p=n.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({theme:t})=>t.background.primary};
  padding: 36px 26px;
`,x=n.img`
  height: 26px;
`,g=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,d=()=>e.jsxs(p,{children:[e.jsx(x,{src:i}),e.jsx(g,{children:c.map((t,a)=>s.createElement(l,{...t,key:`${a}-${t.label}`}))})]});export{d as default};
