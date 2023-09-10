import{s as n,j as e}from"./index-edd046a0.js";const o="/assets/mountain-backdrop-9368d073.png",i=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: ${`url(${o})`};
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.46) 100%),
    url(${o}),
    lightgray 0px -65.191px / 100% 178.109% no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
`,r=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
`,a=n.h1`
  color: ${({theme:t})=>t.text.white};
  font-size: 36px;
  font-style: normal;
  margin-bottom: 24px;
  text-align: left;
  line-height: 42px;
  font-weight: 800;
`,l=n.h3`
  color: #fff;
  font-size: 16px;
  margin-bottom: 56px;
  text-align: left;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
`,s=n.button`
  background-color: ${({theme:t})=>t.button.primary};
  border-radius: 5px;
  width: 100%;
  height: 48px;
  border-style: none;
  color: ${({theme:t})=>t.text.white};
  text-align: center;
  font-size: 15.946px;
  font-style: normal;
  font-weight: 700;
  line-height: 31.662px;
`,g=()=>e.jsx(i,{children:e.jsxs(r,{children:[e.jsx(a,{children:"You got the travel plans, we got the travel vans."}),e.jsx(l,{children:"Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip."}),e.jsx(s,{children:"Find your van"})]})});export{g as default};
