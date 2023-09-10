import{s as a,L as i,r as s,u as c,j as e,a as l}from"./index-9dc64311.js";const p="/assets/van-life-logo-f07bda1c.png",x=a.div`
  margin-left: 16px;
`,d=a(i)`
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid ${({theme:t})=>t.text.gray};
    transform: ${({$isActive:t})=>t?"scaleX(1)":"scaleX(0)"};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
  font-size: 16px;
  text-decoration: none;
  color: ${({theme:t})=>t.text.gray};
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.923px;
`,g=({label:t,route:n})=>{const{pathname:o}=c();return e.jsx(x,{children:e.jsx(d,{$isActive:o===n,to:n,children:t})})},m=s.memo(g),b=[{label:"About",route:"/about"},{label:"Vans",route:"/vans"}],f=a.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({theme:t})=>t.background.primary};
  padding: 36px 26px;
`,u=a.img`
  height: 26px;
  cursor: pointer;
`,v=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=()=>{const t=l(),n=()=>{t("/")};return e.jsxs(f,{children:[e.jsx(u,{src:p,onClick:n}),e.jsx(v,{children:b.map((o,r)=>s.createElement(m,{...o,key:`${r}-${o.label}`}))})]})};export{y as default};
