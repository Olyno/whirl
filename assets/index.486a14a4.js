var U=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var C=(a,s,t)=>s in a?U(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,S=(a,s)=>{for(var t in s||(s={}))X.call(s,t)&&C(a,t,s[t]);if(z)for(var t of z(s))Y.call(s,t)&&C(a,t,s[t]);return a},M=(a,s)=>H(a,Q(s));import{C as Z,S as I,i as D,s as T,a as B,b as o,c as b,d as m,n as V,e as g,f as E,g as A,m as L,t as N,h as j,j as O,w as ee,A as se,k as re,l as q,o as te,p as ie,r as ae,q as ne,u as le,v as W}from"./vendor.16eed0d6.js";const ce=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}};ce();const oe="modulepreload",F={},ue="/whirl/",e=function(s,t){return!t||t.length===0?s():Promise.all(t.map(n=>{if(n=`${ue}${n}`,n in F)return;F[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":oe,r||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),r)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",u)})})).then(()=>s())};var _e=a=>new Z(a);function me(a){let s,t,n;return{c(){s=B("svg"),t=B("path"),o(t,"d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"),o(s,"xmlns","http://www.w3.org/2000/svg"),o(s,"class",a[0]),o(s,"width",a[1]),o(s,"height",a[2]),o(s,"viewBox",n="0 0 "+a[1]+" "+a[2])},m(r,i){b(r,s,i),m(s,t)},p(r,[i]){i&1&&o(s,"class",r[0]),i&2&&o(s,"width",r[1]),i&4&&o(s,"height",r[2]),i&6&&n!==(n="0 0 "+r[1]+" "+r[2])&&o(s,"viewBox",n)},i:V,o:V,d(r){r&&g(s)}}}function de(a,s,t){let{class:n=""}=s,{width:r=24}=s,{height:i=24}=s;return a.$$set=l=>{"class"in l&&t(0,n=l.class),"width"in l&&t(1,r=l.width),"height"in l&&t(2,i=l.height)},[n,r,i]}class Ee extends I{constructor(s){super();D(this,s,de,me,T,{class:0,width:1,height:2})}}function pe(a){let s,t,n,r;return n=new Ee({props:{class:"fill-secondary w-full h-full"}}),{c(){s=E("nav"),t=E("a"),A(n.$$.fragment),o(t,"href","https://github.com/Olyno/whirl"),o(t,"class","w-15 h-15 hvr-outline-in before:border-secondary before:border-2 before:rounded-md p-2"),o(s,"class","absolute top-5 right-5 flex justify-evenly items-center")},m(i,l){b(i,s,l),m(s,t),L(n,t,null),r=!0},p:V,i(i){r||(N(n.$$.fragment,i),r=!0)},o(i){j(n.$$.fragment,i),r=!1},d(i){i&&g(s),O(n)}}}class fe extends I{constructor(s){super();D(this,s,null,pe,T,{})}}const G=[{className:"arc",name:"arc",requiredElements:0,active:!0},{className:"basic",name:"basic",requiredElements:0,active:!0},{className:"bounce",name:"bounce",requiredElements:0,active:!0},{className:"chase",name:"chase",requiredElements:0,active:!0},{className:"color-range",name:"color-range",requiredElements:0,active:!0},{className:"color-wheel",name:"color-wheel",requiredElements:0,active:!0},{className:"different-directions",name:"different-directions",requiredElements:0,active:!0},{className:"dots",name:"dots",requiredElements:0,active:!0},{className:"dots-fade",name:"dots-fade",requiredElements:0,active:!0},{className:"dots-flow",name:"dots-flow",requiredElements:0,active:!0},{className:"double-ringed",name:"double-ringed",requiredElements:0,active:!0},{className:"double-up",name:"double-up",requiredElements:0,active:!0},{className:"duo",name:"duo",requiredElements:0,active:!0},{className:"eclipse",name:"eclipse",requiredElements:0,active:!0},{className:"eight",name:"eight",requiredElements:0,active:!0},{className:"fidget",name:"fidget",requiredElements:0,active:!0},{className:"flickering-pentagon",name:"flickering-pentagon",requiredElements:0,active:!0},{className:"flip-square",name:"flip-square",requiredElements:0,active:!0},{className:"fly-by",name:"fly-by",requiredElements:0,active:!0},{name:"four-dots",className:"four-dots",requiredElements:0,active:!0},{className:"gyro",name:"gyro",requiredElements:0,active:!0},{className:"half-ring",name:"half-ring",requiredElements:0,active:!0},{className:"line",name:"line",requiredElements:0,active:!0},{className:"line-of-dots",name:"line-of-dots",requiredElements:0,active:!0},{className:"mexican-wave",name:"mexican-wave",requiredElements:0,active:!0},{className:"orbit",name:"orbit",requiredElements:0,active:!0},{className:"outline-square",name:"outline-square",requiredElements:0,active:!0},{className:"palette",name:"palette",requiredElements:0,active:!0},{className:"pendulum",name:"pendulum",requiredElements:0,active:!0},{className:"pill",name:"pill",requiredElements:0,active:!0},{className:"radial",name:"radial",requiredElements:0,active:!0},{className:"rays",name:"rays",requiredElements:0,active:!0},{className:"ring-of-dots",name:"ring-of-dots",requiredElements:0,active:!0},{className:"ring-of-stars",name:"ring-of-stars",requiredElements:0,active:!0},{className:"ringed",name:"ringed",requiredElements:0,active:!0},{className:"rings",name:"rings",requiredElements:0,active:!0},{className:"rotary",name:"rotary",requiredElements:0,active:!0},{className:"scale-dots",name:"scale-dots",requiredElements:0,active:!0},{className:"scale-dots-offset",name:"scale-dots-offset",requiredElements:0,active:!0},{className:"scan",name:"scan",requiredElements:0,active:!0},{className:"siblings",name:"siblings",requiredElements:0,active:!0},{className:"side-to-side",name:"side-to-side",requiredElements:0,active:!0},{className:"sliding-tiles",name:"sliding-tiles",requiredElements:0,active:!0},{className:"snake",name:"snake",requiredElements:0,active:!0},{className:"spinning-coin",name:"spinning-coin",requiredElements:0,active:!0},{className:"spinning-coin-fall",name:"spinning-coin-fall",requiredElements:0,active:!0},{className:"spinning-dots",name:"spinning-dots",requiredElements:0,active:!0},{className:"spinning-dots-scaled",name:"spinning-dots-scaled",requiredElements:0,active:!0},{className:"split",name:"split",requiredElements:0,active:!0},{className:"square-of-dots",name:"square-of-dots",requiredElements:0,active:!0},{className:"stop-and-go",name:"stop-and-go",requiredElements:0,active:!0},{className:"swap",name:"swap",requiredElements:0,active:!0},{className:"throw",name:"throw",requiredElements:0,active:!0},{className:"traditional",name:"traditional",requiredElements:0,active:!0},{className:"trigger",name:"trigger",requiredElements:0,active:!0},{className:"tumble",name:"tumble",requiredElements:0,active:!0},{className:"whirl",name:"whirl",requiredElements:0,active:!0},{className:"wind-up",name:"wind-up",requiredElements:0,active:!0}],ve=[{className:"bar-spin",name:"bar-spin",requiredElements:1,active:!0},{name:"battery",className:"battery",requiredElements:1,active:!0},{className:"bloom",name:"bloom",requiredElements:1,active:!0},{className:"borders",name:"borders",requiredElements:1,active:!0},{name:"box-spin",className:"box-spin",requiredElements:1,active:!0},{className:"breakout",name:"breakout",requiredElements:1,active:!0},{className:"color-arc",name:"color-arc",requiredElements:1,active:!0},{className:"color-bridge",name:"color-bridge",requiredElements:1,active:!0},{className:"cyclical",name:"cyclical",requiredElements:1,active:!0},{name:"flip-square-travel",className:"flip-square-travel",requiredElements:1,active:!0},{className:"hourglass",name:"hourglass",requiredElements:1,active:!0},{className:"load-man",name:"load-man",requiredElements:1,active:!0},{className:"merge",name:"merge",requiredElements:1,active:!0},{className:"rainbow",name:"rainbow",requiredElements:1,active:!0},{className:"sliding-tiles-bordered",name:"sliding-tiles-bordered",requiredElements:1,active:!0},{name:"zonal",className:"zonal",requiredElements:1,active:!0}],he=[{className:"building-blocks",name:"building-blocks",requiredElements:7,active:!0},{className:"cascade",name:"cascade",requiredElements:5,active:!0},{className:"blades",name:"blades",requiredElements:5,active:!0},{className:"book",name:"book",requiredElements:5,active:!0},{className:"circle-path",name:"circle-path",requiredElements:11,active:!0},{className:"coffee",name:"coffee",requiredElements:3,active:!0},{className:"combine",name:"combine",requiredElements:4,active:!0},{className:"combine-two",name:"combine-two",requiredElements:4,active:!0},{className:"cube",name:"cube",requiredElements:6,active:!0},{className:"dominoes",name:"dominoes",requiredElements:5,active:!0},{name:"equalizer",className:"equalizer",requiredElements:5,active:!0},{className:"feeder",name:"feeder",requiredElements:3,active:!0},{className:"flip-to-square",name:"flip-to-square",requiredElements:9,active:!0},{className:"flip-to-square-random",name:"flip-to-square-random",requiredElements:9,active:!0},{className:"flippers",name:"flippers",requiredElements:5,active:!0},{name:"flippers-alternate",className:"flippers-alternate",requiredElements:5,active:!0},{className:"follow-the-leader",name:"follow-the-leader",requiredElements:5,active:!0},{name:"follow-the-leader-line",className:"follow-the-leader-line",requiredElements:5,active:!0},{className:"honeycomb",name:"honeycomb",requiredElements:7,active:!0},{name:"in-and-out",className:"in-and-out",requiredElements:5,active:!0},{name:"infinity-path",className:"infinity-path",requiredElements:2,active:!0},{className:"meetup",name:"meetup",requiredElements:4,active:!0},{name:"pan-out-circle",className:"pan-out-circle",requiredElements:8,active:!0},{className:"pong",name:"pong",requiredElements:3,active:!0},{name:"push-out",className:"push-out",requiredElements:2,active:!0},{name:"push-pop",className:"push-pop",requiredElements:2,active:!0},{name:"reach",className:"reach",requiredElements:10,active:!0},{name:"rotating-dots",className:"rotating-dots",requiredElements:2,active:!0},{name:"scaling-circle",className:"scaling-circle",requiredElements:8,active:!0},{name:"scaling-dots",className:"scaling-dots",requiredElements:5,active:!0},{className:"slide-in",name:"slide-in",requiredElements:3,active:!0},{className:"waterfall",name:"waterfall",requiredElements:5,active:!0}],P=ee(G[0]);function we(a){switch(a){case"./whirls/arc.scss":return e(()=>Promise.resolve({}),["assets/arc.1f562838.css"]);case"./whirls/bar-spin.scss":return e(()=>Promise.resolve({}),["assets/bar-spin.076b6163.css"]);case"./whirls/basic.scss":return e(()=>Promise.resolve({}),["assets/basic.37d8b018.css"]);case"./whirls/battery.scss":return e(()=>Promise.resolve({}),["assets/battery.ff1c06af.css"]);case"./whirls/blades.scss":return e(()=>Promise.resolve({}),["assets/blades.a51cd34a.css"]);case"./whirls/bloom.scss":return e(()=>Promise.resolve({}),["assets/bloom.3f3b6eeb.css"]);case"./whirls/book.scss":return e(()=>Promise.resolve({}),["assets/book.67816a10.css"]);case"./whirls/borders.scss":return e(()=>Promise.resolve({}),["assets/borders.e9382c37.css"]);case"./whirls/bounce.scss":return e(()=>Promise.resolve({}),["assets/bounce.1f38058c.css"]);case"./whirls/box-spin.scss":return e(()=>Promise.resolve({}),["assets/box-spin.c77286b1.css"]);case"./whirls/breakout.scss":return e(()=>Promise.resolve({}),["assets/breakout.36a00685.css"]);case"./whirls/building-blocks.scss":return e(()=>Promise.resolve({}),["assets/building-blocks.d77027c0.css"]);case"./whirls/cascade.scss":return e(()=>Promise.resolve({}),["assets/cascade.c9cb8dda.css"]);case"./whirls/chase.scss":return e(()=>Promise.resolve({}),["assets/chase.2d958e14.css"]);case"./whirls/circle-path.scss":return e(()=>Promise.resolve({}),["assets/circle-path.4d3b0cca.css"]);case"./whirls/coffee.scss":return e(()=>Promise.resolve({}),["assets/coffee.2893096b.css"]);case"./whirls/color-arc.scss":return e(()=>Promise.resolve({}),["assets/color-arc.852554fa.css"]);case"./whirls/color-bridge.scss":return e(()=>Promise.resolve({}),["assets/color-bridge.6f77abb9.css"]);case"./whirls/color-range.scss":return e(()=>Promise.resolve({}),["assets/color-range.65e5e2ce.css"]);case"./whirls/color-wheel.scss":return e(()=>Promise.resolve({}),["assets/color-wheel.fbb6f439.css"]);case"./whirls/combine-two.scss":return e(()=>Promise.resolve({}),["assets/combine-two.d6a9953a.css"]);case"./whirls/combine.scss":return e(()=>Promise.resolve({}),["assets/combine.6ac16d93.css"]);case"./whirls/cube.scss":return e(()=>Promise.resolve({}),["assets/cube.9ee5b3c7.css"]);case"./whirls/cyclical.scss":return e(()=>Promise.resolve({}),["assets/cyclical.353d9d33.css"]);case"./whirls/different-directions.scss":return e(()=>Promise.resolve({}),["assets/different-directions.02a9f49c.css"]);case"./whirls/dominoes.scss":return e(()=>Promise.resolve({}),["assets/dominoes.4f408b34.css"]);case"./whirls/dots-fade.scss":return e(()=>Promise.resolve({}),["assets/dots-fade.bd318629.css"]);case"./whirls/dots-flow.scss":return e(()=>Promise.resolve({}),["assets/dots-flow.309fe1ed.css"]);case"./whirls/dots.scss":return e(()=>Promise.resolve({}),["assets/dots.a77a2881.css"]);case"./whirls/double-ringed.scss":return e(()=>Promise.resolve({}),["assets/double-ringed.d4d9e190.css"]);case"./whirls/double-up.scss":return e(()=>Promise.resolve({}),["assets/double-up.bc80d6a3.css"]);case"./whirls/duo.scss":return e(()=>Promise.resolve({}),["assets/duo.9d845d19.css"]);case"./whirls/eclipse.scss":return e(()=>Promise.resolve({}),["assets/eclipse.3c9a468f.css"]);case"./whirls/eight.scss":return e(()=>Promise.resolve({}),["assets/eight.ba77f772.css"]);case"./whirls/equalizer.scss":return e(()=>Promise.resolve({}),["assets/equalizer.c1a5db84.css"]);case"./whirls/feeder.scss":return e(()=>Promise.resolve({}),["assets/feeder.45be0488.css"]);case"./whirls/fidget.scss":return e(()=>Promise.resolve({}),["assets/fidget.49ede551.css"]);case"./whirls/flickering-pentagon.scss":return e(()=>Promise.resolve({}),["assets/flickering-pentagon.5aa92e10.css"]);case"./whirls/flip-square-travel.scss":return e(()=>Promise.resolve({}),["assets/flip-square-travel.91642963.css"]);case"./whirls/flip-square.scss":return e(()=>Promise.resolve({}),["assets/flip-square.c267f407.css"]);case"./whirls/flip-to-square-random.scss":return e(()=>Promise.resolve({}),["assets/flip-to-square-random.dcda820d.css"]);case"./whirls/flip-to-square.scss":return e(()=>Promise.resolve({}),["assets/flip-to-square.370a6ffb.css"]);case"./whirls/flippers-alternate.scss":return e(()=>Promise.resolve({}),["assets/flippers-alternate.23e425e2.css"]);case"./whirls/flippers.scss":return e(()=>Promise.resolve({}),["assets/flippers.36061f86.css"]);case"./whirls/fly-by.scss":return e(()=>Promise.resolve({}),["assets/fly-by.24c442f9.css"]);case"./whirls/follow-the-leader-line.scss":return e(()=>Promise.resolve({}),["assets/follow-the-leader-line.e6fdc3c7.css"]);case"./whirls/follow-the-leader.scss":return e(()=>Promise.resolve({}),["assets/follow-the-leader.d82d92b3.css"]);case"./whirls/four-dots.scss":return e(()=>Promise.resolve({}),["assets/four-dots.0361a15b.css"]);case"./whirls/gyro.scss":return e(()=>Promise.resolve({}),["assets/gyro.6f047371.css"]);case"./whirls/half-ring.scss":return e(()=>Promise.resolve({}),["assets/half-ring.3342c926.css"]);case"./whirls/honeycomb.scss":return e(()=>Promise.resolve({}),["assets/honeycomb.6ce49bf3.css"]);case"./whirls/hourglass.scss":return e(()=>Promise.resolve({}),["assets/hourglass.65ba4ef6.css"]);case"./whirls/in-and-out.scss":return e(()=>Promise.resolve({}),["assets/in-and-out.fe97b429.css"]);case"./whirls/infinity-path.scss":return e(()=>Promise.resolve({}),["assets/infinity-path.958c6c2c.css"]);case"./whirls/line-of-dots.scss":return e(()=>Promise.resolve({}),["assets/line-of-dots.50d3f364.css"]);case"./whirls/line.scss":return e(()=>Promise.resolve({}),["assets/line.4e9c3e07.css"]);case"./whirls/load-man.scss":return e(()=>Promise.resolve({}),["assets/load-man.c0f993a4.css"]);case"./whirls/meetup.scss":return e(()=>Promise.resolve({}),["assets/meetup.ef476bde.css"]);case"./whirls/merge.scss":return e(()=>Promise.resolve({}),["assets/merge.d26d60b1.css"]);case"./whirls/mexican-wave.scss":return e(()=>Promise.resolve({}),["assets/mexican-wave.00479b4b.css"]);case"./whirls/orbit.scss":return e(()=>Promise.resolve({}),["assets/orbit.e2a523df.css"]);case"./whirls/outline-square.scss":return e(()=>Promise.resolve({}),["assets/outline-square.114c0963.css"]);case"./whirls/palette.scss":return e(()=>Promise.resolve({}),["assets/palette.26dc438e.css"]);case"./whirls/pan-out-circle.scss":return e(()=>Promise.resolve({}),["assets/pan-out-circle.14f4f5eb.css"]);case"./whirls/pendulum.scss":return e(()=>Promise.resolve({}),["assets/pendulum.d1b53b58.css"]);case"./whirls/pill.scss":return e(()=>Promise.resolve({}),["assets/pill.92150079.css"]);case"./whirls/pong.scss":return e(()=>Promise.resolve({}),["assets/pong.a1c24f49.css"]);case"./whirls/push-out.scss":return e(()=>Promise.resolve({}),["assets/push-out.39cb1b23.css"]);case"./whirls/push-pop.scss":return e(()=>Promise.resolve({}),["assets/push-pop.83531f81.css"]);case"./whirls/radial.scss":return e(()=>Promise.resolve({}),["assets/radial.ca4696dc.css"]);case"./whirls/rainbow.scss":return e(()=>Promise.resolve({}),["assets/rainbow.88119a6d.css"]);case"./whirls/rays.scss":return e(()=>Promise.resolve({}),["assets/rays.a19fd4dd.css"]);case"./whirls/reach.scss":return e(()=>Promise.resolve({}),["assets/reach.868a4145.css"]);case"./whirls/ring-of-dots.scss":return e(()=>Promise.resolve({}),["assets/ring-of-dots.e0b5a7ac.css"]);case"./whirls/ring-of-stars.scss":return e(()=>Promise.resolve({}),["assets/ring-of-stars.771cc5d1.css"]);case"./whirls/ringed.scss":return e(()=>Promise.resolve({}),["assets/ringed.c85be92d.css"]);case"./whirls/rings.scss":return e(()=>Promise.resolve({}),["assets/rings.20f153a3.css"]);case"./whirls/rotary.scss":return e(()=>Promise.resolve({}),["assets/rotary.002b9246.css"]);case"./whirls/rotating-dots.scss":return e(()=>Promise.resolve({}),["assets/rotating-dots.85e3c091.css"]);case"./whirls/scale-dots-offset.scss":return e(()=>Promise.resolve({}),["assets/scale-dots-offset.6c997a19.css"]);case"./whirls/scale-dots.scss":return e(()=>Promise.resolve({}),["assets/scale-dots.0cb4525a.css"]);case"./whirls/scaling-circle.scss":return e(()=>Promise.resolve({}),["assets/scaling-circle.656901ac.css"]);case"./whirls/scaling-dots.scss":return e(()=>Promise.resolve({}),["assets/scaling-dots.aa374b60.css"]);case"./whirls/scan.scss":return e(()=>Promise.resolve({}),["assets/scan.633a53ca.css"]);case"./whirls/siblings.scss":return e(()=>Promise.resolve({}),["assets/siblings.b63de52b.css"]);case"./whirls/side-to-side.scss":return e(()=>Promise.resolve({}),["assets/side-to-side.1d3e4dc0.css"]);case"./whirls/slide-in.scss":return e(()=>Promise.resolve({}),["assets/slide-in.668517b2.css"]);case"./whirls/sliding-tiles-bordered.scss":return e(()=>Promise.resolve({}),["assets/sliding-tiles-bordered.de2dd296.css"]);case"./whirls/sliding-tiles.scss":return e(()=>Promise.resolve({}),["assets/sliding-tiles.1176465e.css"]);case"./whirls/snake.scss":return e(()=>Promise.resolve({}),["assets/snake.7787491d.css"]);case"./whirls/spinning-coin-fall.scss":return e(()=>Promise.resolve({}),["assets/spinning-coin-fall.a80bd28f.css"]);case"./whirls/spinning-coin.scss":return e(()=>Promise.resolve({}),["assets/spinning-coin.3e3cf05f.css"]);case"./whirls/spinning-dots-scaled.scss":return e(()=>Promise.resolve({}),["assets/spinning-dots-scaled.59cee2b4.css"]);case"./whirls/spinning-dots.scss":return e(()=>Promise.resolve({}),["assets/spinning-dots.5228ce4b.css"]);case"./whirls/split.scss":return e(()=>Promise.resolve({}),["assets/split.66bce63a.css"]);case"./whirls/square-of-dots.scss":return e(()=>Promise.resolve({}),["assets/square-of-dots.5d4cab9a.css"]);case"./whirls/stop-and-go.scss":return e(()=>Promise.resolve({}),["assets/stop-and-go.12841a43.css"]);case"./whirls/swap.scss":return e(()=>Promise.resolve({}),["assets/swap.298cad8b.css"]);case"./whirls/throw.scss":return e(()=>Promise.resolve({}),["assets/throw.0291b6b3.css"]);case"./whirls/traditional.scss":return e(()=>Promise.resolve({}),["assets/traditional.47a746e9.css"]);case"./whirls/trigger.scss":return e(()=>Promise.resolve({}),["assets/trigger.24ce1c19.css"]);case"./whirls/tumble.scss":return e(()=>Promise.resolve({}),["assets/tumble.d471fade.css"]);case"./whirls/waterfall.scss":return e(()=>Promise.resolve({}),["assets/waterfall.f82d41df.css"]);case"./whirls/whirl.scss":return e(()=>Promise.resolve({}),["assets/whirl.22d1635f.css"]);case"./whirls/wind-up.scss":return e(()=>Promise.resolve({}),["assets/wind-up.0b457b1c.css"]);case"./whirls/zonal.scss":return e(()=>Promise.resolve({}),["assets/zonal.ed31d717.css"]);default:return new Promise(function(s,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+a)))})}}function J(a,s,t){const n=a.slice();return n[6]=s[t],n}function K(a){let s;return{c(){s=E("div")},m(t,n){b(t,s,n)},d(t){t&&g(s)}}}function be(a){let s,t,n,r=new Array(a[0].requiredElements).fill(null),i=[];for(let l=0;l<r.length;l+=1)i[l]=K(J(a,r,l));return{c(){s=E("div"),t=E("div");for(let l=0;l<i.length;l+=1)i[l].c();o(t,"class",n=a[0].className+" flex justify-center items-center"),o(s,"class","w-full h-full bg-secondary rounded-md flex justify-center items-center")},m(l,d){b(l,s,d),m(s,t);for(let u=0;u<i.length;u+=1)i[u].m(t,null)},p(l,d){if(d&1){const u=r.length;r=new Array(l[0].requiredElements).fill(null);let c;for(c=u;c<r.length;c+=1)J(l,r,c),i[c]||(i[c]=K(),i[c].c(),i[c].m(t,null));for(c=r.length;c<u;c+=1)i[c].d(1);i.length=r.length}d&1&&n!==(n=l[0].className+" flex justify-center items-center")&&o(t,"class",n)},d(l){l&&g(s),le(i,l)}}}function ge(a){let s,t,n,r,i,l,d,u,c,f,y,p,k,v,h,R,$;return t=new fe({}),c=new se({props:{class:"w-full h-full",$$slots:{default:[be]},$$scope:{ctx:a}}}),p=new re({props:{containerClasses:"w-75 h-full",placeholder:"Find a whirl animation...",items:a[1].map(qe),groupBy:Ae}}),p.$on("select",a[3]),{c(){s=E("main"),A(t.$$.fragment),n=q(),r=E("h1"),r.textContent="Whirl",i=q(),l=E("h2"),l.textContent="CSS loading animations with minimal effort!",d=q(),u=E("div"),A(c.$$.fragment),y=q(),A(p.$$.fragment),k=q(),v=E("button"),v.textContent="Discover a new one!",o(r,"class","text-white text-5xl font-bold"),o(l,"class","text-white text-xl"),o(u,"class","w-75 h-75"),o(u,"data-clipboard-text",f=a[0].className),o(v,"class","bg-secondary rounded-md w-75 h-10 text-white hvr-float"),o(s,"class","flex justify-center items-center w-full h-screen bg-primary flex-col gap-10")},m(_,w){b(_,s,w),L(t,s,null),m(s,n),m(s,r),m(s,i),m(s,l),m(s,d),m(s,u),L(c,u,null),m(s,y),L(p,s,null),m(s,k),m(s,v),h=!0,R||($=[te(_e.call(null,u)),ie(v,"click",a[2])],R=!0)},p(_,[w]){const x={};w&513&&(x.$$scope={dirty:w,ctx:_}),c.$set(x),(!h||w&1&&f!==(f=_[0].className))&&o(u,"data-clipboard-text",f)},i(_){h||(N(t.$$.fragment,_),N(c.$$.fragment,_),N(p.$$.fragment,_),h=!0)},o(_){j(t.$$.fragment,_),j(c.$$.fragment,_),j(p.$$.fragment,_),h=!1},d(_){_&&g(s),O(t),O(c),O(p),R=!1,ae($)}}}const qe=a=>({value:a,label:a.name,group:a.category}),Ae=a=>a.group;function Le(a,s,t){let n;ne(a,P,c=>t(0,n=c));const r=c=>f=>M(S({},f),{category:c}),i=G.map(r("pseudo")).concat(he.map(r("multi"))).concat(ve.map(r("single"))),l=()=>i[Math.floor(Math.random()*i.length)],d=()=>W(P,n=l(),n);return P.subscribe(c=>{we(`./whirls/${c.name}.scss`)}),[n,i,d,c=>W(P,n=c.detail.value,n)]}class Ne extends I{constructor(s){super();D(this,s,Le,ge,T,{})}}new Ne({target:document.getElementById("app")});
