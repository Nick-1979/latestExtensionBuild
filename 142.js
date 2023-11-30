(()=>{var e,t,r={18983:()=>{},45255:(e,t,r)=>{"use strict";var n=r(60576),o=r(38090),i=r(13249),a=r(6222);const s=async function(e){if(e.startsWith("wss")){const t=new n.U(e);return await o.G.create({provider:t})}if(e.startsWith("light"))return await async function(e){const t=(e=>{if(!e)return;const t=e.split("/")[3];return t.charAt(0).toUpperCase()+t.slice(1)})(e),r=(e=>{switch(e){case"Polkadot":return i.WellKnownChain.polkadot;case"Kusama":return i.WellKnownChain.ksmcc3;case"Westend":return i.WellKnownChain.westend2;default:return""}})(t);try{if(console.log("connecting through light client, endpoint:",e),r.length){const e=new a.x(i,r);return await e.connect(),await o.G.create({provider:e})}return Promise.reject(new Error(`Unsupported network: ${t}`))}catch(e){return Promise.reject(e)}}(e);throw new Error(`Invalid endpoint: ${e}`)};onmessage=e=>{const{endpoint:t,validatorsAccountIds:r}=e.data;(async function(e,t){try{const r=await s(e);let n=[];const o=50;let i=0;const a=await r.query.staking.currentEra();for(;t.length>i;){console.log(`Fetching validators identities : ${i}/${t.length}`);const e=await Promise.all(t.slice(i,i+o).map((e=>r.derive.accounts.info(e))));n=n.concat(e),i+=o}return{accountsInfo:JSON.parse(JSON.stringify(n)),eraIndex:Number(a.toString()||"0")}}catch(e){return console.log("something went wrong while getting validators id, err:",e),null}})(t,r).then((e=>{postMessage(e)}))}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=r,o.x=()=>{var e=o.O(void 0,[33],(()=>o(45255)));return o.O(e)},e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={142:1};o.f.i=(t,r)=>{e[t]||importScripts(o.p+o.u(t))};var t=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension=("undefined"!=typeof self?self:this).webpackChunk_polkadot_extension||[],r=t.push.bind(t);t.push=t=>{var[n,i,a]=t;for(var s in i)o.o(i,s)&&(o.m[s]=i[s]);for(a&&a(o);n.length;)e[n.pop()]=1;r(t)}})(),t=o.x,o.x=()=>o.e(33).then(t),o.x()})();