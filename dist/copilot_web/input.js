const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["copilot_web/App-CZpp8dzt.js","copilot_web/vendor-markdown-Dek94WS0.js","copilot_web/vendor-react-V04_Axys.js","copilot_web/message-components-DjFRyC2j.js"])))=>i.map(i=>d[i]);
import{j as u}from"./vendor-markdown-Dek94WS0.js";import{a as v,R as p}from"./vendor-react-V04_Axys.js";import{w}from"./message-components-DjFRyC2j.js";const R="modulepreload",b=function(e){return"/"+e},m={},P=function(a,s,S){let d=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),t=r?.nonce||r?.getAttribute("nonce");d=Promise.allSettled(s.map(n=>{if(n=b(n),n in m)return;m[n]=!0;const c=n.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${h}`))return;const o=document.createElement("link");if(o.rel=c?"stylesheet":R,c||(o.as="script"),o.crossOrigin="",o.href=n,t&&o.setAttribute("nonce",t),document.head.appendChild(o),c)return new Promise((y,E)=>{o.addEventListener("load",y),o.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function l(r){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r}return d.then(r=>{for(const t of r||[])t.status==="rejected"&&l(t.reason);return a().catch(l)})};var i={},f=v;i.createRoot=f.createRoot,i.hydrateRoot=f.hydrateRoot;const _=p.lazy(()=>P(async()=>{const{default:e}=await import("./App-CZpp8dzt.js").then(a=>a.A);return{default:e}},__vite__mapDeps([0,1,2,3])).then(({default:e})=>({default:e})));function A(){return new Promise(e=>{if(document.body)return e(document.body);document.addEventListener("DOMContentLoaded",()=>{e(document.body)})})}A().then(()=>w()).then(()=>{const e=document.createElement("div");document.body.append(e),i.createRoot(e).render(u.jsx(p.StrictMode,{children:u.jsx(_,{})}))});export{P as _};
