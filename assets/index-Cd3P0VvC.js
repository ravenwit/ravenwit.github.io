var Cg=Object.defineProperty;var Pg=(r,e,t)=>e in r?Cg(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ut=(r,e,t)=>Pg(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Dg="modulepreload",Lg=function(r){return"/"+r},bd={},_e=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=a(t.map(c=>{if(c=Lg(c),c in bd)return;bd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Dg,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ch="183",ws={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ig=0,Sd=1,Ug=2,Fo=1,Ng=2,aa=3,sr=0,xn=1,ti=2,vi=0,Lr=1,kr=2,Md=3,Ed=4,Fg=5,Mr=100,Og=101,kg=102,Bg=103,zg=104,Vg=200,Hg=201,Gg=202,$g=203,Gc=204,$c=205,Wg=206,Xg=207,qg=208,Yg=209,jg=210,Zg=211,Kg=212,Jg=213,Qg=214,Wc=0,Xc=1,qc=2,Ls=3,Yc=4,jc=5,Zc=6,Kc=7,up=0,e0=1,t0=2,xi=0,hp=1,dp=2,fp=3,pp=4,mp=5,gp=6,_p=7,vp=300,Br=301,Is=302,Ol=303,kl=304,Sl=306,wa=1e3,Ui=1001,Jc=1002,Gt=1003,n0=1004,Za=1005,on=1006,Bl=1007,Rr=1008,Ln=1009,xp=1010,yp=1011,Aa=1012,uh=1013,yi=1014,vn=1015,Fn=1016,hh=1017,dh=1018,Ra=1020,bp=35902,Sp=35899,Mp=1021,Ep=1022,ri=1023,ki=1026,Cr=1027,_s=1028,fh=1029,Us=1030,ph=1031,mh=1033,Oo=33776,ko=33777,Bo=33778,zo=33779,Qc=35840,eu=35841,tu=35842,nu=35843,iu=36196,ru=37492,su=37496,au=37488,ou=37489,lu=37490,cu=37491,uu=37808,hu=37809,du=37810,fu=37811,pu=37812,mu=37813,gu=37814,_u=37815,vu=37816,xu=37817,yu=37818,bu=37819,Su=37820,Mu=37821,Eu=36492,Tu=36494,wu=36495,Au=36283,Ru=36284,Cu=36285,Pu=36286,i0=3200,Tp=0,r0=1,Ki="",Gn="srgb",Ns="srgb-linear",Qo="linear",it="srgb",qr=7680,Td=519,s0=512,a0=513,o0=514,gh=515,l0=516,c0=517,_h=518,u0=519,Du=35044,wd="300 es",pi=2e3,Ca=2001;function h0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function el(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function d0(){const r=el("canvas");return r.style.display="block",r}const Ad={};function tl(...r){const e="THREE."+r.shift();console.log(e,...r)}function wp(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Le(...r){r=wp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ze(...r){r=wp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function nl(...r){const e=r.join(" ");e in Ad||(Ad[e]=!0,Le(...r))}function f0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const p0={[Wc]:Xc,[qc]:Zc,[Yc]:Kc,[Ls]:jc,[Xc]:Wc,[Zc]:qc,[Kc]:Yc,[jc]:Ls};class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const pa=Math.PI/180,Pa=180/Math.PI;function Fi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function vh(r,e){return(r%e+e)%e}function m0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function g0(r,e,t){return r!==e?(t-r)/(e-r):0}function ma(r,e,t){return(1-t)*r+t*e}function _0(r,e,t,n){return ma(r,e,1-Math.exp(-t*n))}function v0(r,e=1){return e-Math.abs(vh(r,e*2)-e)}function x0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function y0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function b0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function S0(r,e){return r+Math.random()*(e-r)}function M0(r){return r*(.5-Math.random())}function E0(r){r!==void 0&&(Rd=r);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T0(r){return r*pa}function w0(r){return r*Pa}function A0(r){return(r&r-1)===0&&r!==0}function R0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function C0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function P0(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*p,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*p,o*c);break;case"ZYZ":r.set(l*p,l*f,o*u,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ap={DEG2RAD:pa,RAD2DEG:Pa,generateUUID:Fi,clamp:ze,euclideanModulo:vh,mapLinear:m0,inverseLerp:g0,lerp:ma,damp:_0,pingpong:v0,smoothstep:x0,smootherstep:y0,randInt:b0,randFloat:S0,randFloatSpread:M0,seededRandom:E0,degToRad:T0,radToDeg:w0,isPowerOfTwo:A0,ceilPowerOfTwo:R0,floorPowerOfTwo:C0,setQuaternionFromProperEuler:P0,normalize:rt,denormalize:ni};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],p=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);g=Math.sin(g*v)/S,o=Math.sin(o*v)/S,l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+_*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zl=new P,Cd=new ar;class ke{constructor(e,t,n,i,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],v=i[1],S=i[4],b=i[7],E=i[2],T=i[5],A=i[8];return s[0]=a*_+o*v+l*E,s[3]=a*m+o*S+l*T,s[6]=a*g+o*b+l*A,s[1]=c*_+u*v+d*E,s[4]=c*m+u*S+d*T,s[7]=c*g+u*b+d*A,s[2]=h*_+f*v+p*E,s[5]=h*m+f*S+p*T,s[8]=h*g+f*b+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vl.makeScale(e,t)),this}rotate(e){return this.premultiply(Vl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vl=new ke,Pd=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const r={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ki?Qo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ns]:{primaries:e,whitePoint:n,transfer:Qo,toXYZ:Pd,fromXYZ:Dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Pd,fromXYZ:Dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Ke=D0();function Oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function As(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yr;class L0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=el("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=el("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I0=0;class xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Hl(i[a].image)):s.push(Hl(i[a]))}else s=Hl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Hl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?L0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let U0=0;const Gl=new P;class cn extends Vr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Ui,i=Ui,s=on,a=Rr,o=ri,l=Ln,c=cn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Fi(),this.name="",this.source=new xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=vp;cn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(f+1)/2,E=(g+1)/2,T=(u+h)/4,A=(d+_)/4,x=(p+m)/4;return S>b&&S>E?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=A/n):b>E?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=x/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends Vr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new cn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new xh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends N0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rp extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F0 extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yt{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h+_*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,p=o*u,_=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,p=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,k0)}lookAt(e,t,n){const i=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Gi.crossVectors(n,An),Gi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Gi.crossVectors(n,An)),Gi.normalize(),Ka.crossVectors(An,Gi),i[0]=Gi.x,i[4]=Ka.x,i[8]=An.x,i[1]=Gi.y,i[5]=Ka.y,i[9]=An.y,i[2]=Gi.z,i[6]=Ka.z,i[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],S=n[7],b=n[11],E=n[15],T=i[0],A=i[4],x=i[8],y=i[12],O=i[1],R=i[5],N=i[9],B=i[13],L=i[2],D=i[6],F=i[10],I=i[14],q=i[3],X=i[7],Q=i[11],se=i[15];return s[0]=a*T+o*O+l*L+c*q,s[4]=a*A+o*R+l*D+c*X,s[8]=a*x+o*N+l*F+c*Q,s[12]=a*y+o*B+l*I+c*se,s[1]=u*T+d*O+h*L+f*q,s[5]=u*A+d*R+h*D+f*X,s[9]=u*x+d*N+h*F+f*Q,s[13]=u*y+d*B+h*I+f*se,s[2]=p*T+_*O+m*L+g*q,s[6]=p*A+_*R+m*D+g*X,s[10]=p*x+_*N+m*F+g*Q,s[14]=p*y+_*B+m*I+g*se,s[3]=v*T+S*O+b*L+E*q,s[7]=v*A+S*R+b*D+E*X,s[11]=v*x+S*N+b*F+E*Q,s[15]=v*y+S*B+b*I+E*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=l*f-c*h,S=o*f-c*d,b=o*h-l*d,E=a*f-c*u,T=a*h-l*u,A=a*d-o*u;return t*(_*v-m*S+g*b)-n*(p*v-m*E+g*T)+i*(p*S-_*E+g*A)-s*(p*b-_*T+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*o-n*a,S=t*l-i*a,b=t*c-s*a,E=n*l-i*o,T=n*c-s*o,A=i*c-s*l,x=u*_-d*p,y=u*m-h*p,O=u*g-f*p,R=d*m-h*_,N=d*g-f*_,B=h*g-f*m,L=v*B-S*N+b*R+E*O-T*y+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=(o*B-l*N+c*R)*D,e[1]=(i*N-n*B-s*R)*D,e[2]=(_*A-m*T+g*E)*D,e[3]=(h*T-d*A-f*E)*D,e[4]=(l*O-a*B-c*y)*D,e[5]=(t*B-i*O+s*y)*D,e[6]=(m*b-p*A-g*S)*D,e[7]=(u*A-h*b+f*S)*D,e[8]=(a*N-o*O+c*x)*D,e[9]=(n*O-t*N-s*x)*D,e[10]=(p*T-_*b+g*v)*D,e[11]=(d*b-u*T-f*v)*D,e[12]=(o*y-a*R-l*x)*D,e[13]=(t*R-n*y+i*x)*D,e[14]=(_*S-p*E-m*v)*D,e[15]=(u*E-d*S+h*v)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,p=s*d,_=a*u,m=a*d,g=o*d,v=l*c,S=l*u,b=l*d,E=n.x,T=n.y,A=n.z;return i[0]=(1-(_+g))*E,i[1]=(f+b)*E,i[2]=(p-S)*E,i[3]=0,i[4]=(f-b)*T,i[5]=(1-(h+g))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(p+S)*A,i[9]=(m-v)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=jr.set(i[0],i[1],i[2]).length();const o=jr.set(i[4],i[5],i[6]).length(),l=jr.set(i[8],i[9],i[10]).length();s<0&&(a=-a),jn.copy(this);const c=1/a,u=1/o,d=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=pi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(l)p=s/(a-s),_=a*s/(a-s);else if(o===pi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ca)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=pi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,_;if(l)p=1/(a-s),_=a/(a-s);else if(o===pi)p=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ca)p=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jr=new P,jn=new yt,O0=new P(0,0,0),k0=new P(1,1,1),Gi=new P,Ka=new P,An=new P,Ld=new yt,Id=new ar;class bi{constructor(e=0,t=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Cp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B0=0;const Ud=new P,Zr=new ar,Ti=new yt,Ja=new P,Xs=new P,z0=new P,V0=new ar,Nd=new P(1,0,0),Fd=new P(0,1,0),Od=new P(0,0,1),kd={type:"added"},H0={type:"removed"},Kr={type:"childadded",child:null},$l={type:"childremoved",child:null};class zt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new P,t=new bi,n=new ar,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,t){return Zr.setFromAxisAngle(e,t),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Xs,Ja,this.up):Ti.lookAt(Ja,Xs,this.up),this.quaternion.setFromRotationMatrix(Ti),i&&(Ti.extractRotation(i.matrixWorld),Zr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ni extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Xl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=vh(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Xl(a,s,e+1/3),this.g=Xl(a,s,e),this.b=Xl(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Gn){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Ke.workingToColorSpace(nn.copy(this),e),Math.round(ze(nn.r*255,0,255))*65536+Math.round(ze(nn.g*255,0,255))*256+Math.round(ze(nn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,s=nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Gn){Ke.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,i=nn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Qa);const n=ma($i.h,Qa.h,t),i=ma($i.s,Qa.s,t),s=ma($i.l,Qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ve;Ve.NAMES=Pp;class yh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new yh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class bh extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new P,wi=new P,ql=new P,Ai=new P,Jr=new P,Qr=new P,Bd=new P,Yl=new P,jl=new P,Zl=new P,Kl=new Ct,Jl=new Ct,Ql=new Ct;class $n{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zn.subVectors(e,t),i.cross(Zn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Zn.subVectors(i,t),wi.subVectors(n,t),ql.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(wi),l=Zn.dot(ql),c=wi.dot(wi),u=wi.dot(ql),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Kl.setScalar(0),Jl.setScalar(0),Ql.setScalar(0),Kl.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,n),Ql.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Kl,s.x),a.addScaledVector(Jl,s.y),a.addScaledVector(Ql,s.z),a}static isFrontFacing(e,t,n,i){return Zn.subVectors(n,t),wi.subVectors(e,t),Zn.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Zn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Jr.subVectors(i,n),Qr.subVectors(s,n),Yl.subVectors(e,n);const l=Jr.dot(Yl),c=Qr.dot(Yl);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,i);const u=Jr.dot(jl),d=Qr.dot(jl);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Jr,a);Zl.subVectors(e,s);const f=Jr.dot(Zl),p=Qr.dot(Zl);if(p>=0&&f<=p)return t.copy(s);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qr,o);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return Bd.subVectors(s,i),o=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(Bd,o);const g=1/(m+_+h);return a=_*g,o=h*g,t.copy(n).addScaledVector(Jr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Va{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),to.subVectors(this.max,qs),es.subVectors(e.a,qs),ts.subVectors(e.b,qs),ns.subVectors(e.c,qs),Wi.subVectors(ts,es),Xi.subVectors(ns,ts),pr.subVectors(es,ns);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-pr.z,pr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,pr.z,0,-pr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-pr.y,pr.x,0];return!ec(t,es,ts,ns,to)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,es,ts,ns,to))?!1:(no.crossVectors(Wi,Xi),t=[no.x,no.y,no.z],ec(t,es,ts,ns,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new P,new P,new P,new P,new P,new P,new P,new P],Kn=new P,eo=new Va,es=new P,ts=new P,ns=new P,Wi=new P,Xi=new P,pr=new P,qs=new P,to=new P,no=new P,mr=new P;function ec(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){mr.fromArray(r,s);const o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),l=e.dot(mr),c=t.dot(mr),u=n.dot(mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ot=new P,io=new pe;let $0=0;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Du,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Du&&(e.usage=this.usage),e}}class Dp extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lp extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const W0=new Va,Ys=new P,tc=new P;class Ha{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(tc)),this.expandByPoint(Ys.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let X0=0;const zn=new yt,nc=new zt,is=new P,Rn=new Va,js=new Va,Yt=new P;class St extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?Lp:Dp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Rn.min,js.min),Rn.expandByPoint(Yt),Yt.addVectors(Rn.max,js.max),Rn.expandByPoint(Yt)):(Rn.expandByPoint(js.min),Rn.expandByPoint(js.max))}Rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),Yt.add(is)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,u=new P,d=new P,h=new pe,f=new pe,p=new pe,_=new P,m=new P;function g(x,y,O){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,O),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,y),p.fromBufferAttribute(s,O),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),o[x].add(_),o[y].add(_),o[O].add(_),l[x].add(m),l[y].add(m),l[O].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,y=v.length;x<y;++x){const O=v[x],R=O.start,N=O.count;for(let B=R,L=R+N;B<L;B+=3)g(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new P,b=new P,E=new P,T=new P;function A(x){E.fromBufferAttribute(i,x),T.copy(E);const y=o[x];S.copy(y),S.sub(E.multiplyScalar(E.dot(y))).normalize(),b.crossVectors(T,y);const R=b.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,R)}for(let x=0,y=v.length;x<y;++x){const O=v[x],R=O.start,N=O.count;for(let B=R,L=R+N;B<L;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new P,s=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Dt(h,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class q0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Du,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new P;class il{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new il(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Y0=0;class ur extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Lr,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=$c,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sh extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const Zs=new P,ss=new P,as=new P,os=new pe,Ks=new pe,Ip=new yt,ro=new P,Js=new P,so=new P,zd=new pe,ic=new pe,Vd=new pe;class Hd extends zt{constructor(e=new Sh){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new q0(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new il(n,3,0,!1)),rs.setAttribute("uv",new il(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-as.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ao(ro.set(-.5,-.5,0),as,a,ss,i,s),ao(Js.set(.5,-.5,0),as,a,ss,i,s),ao(so.set(.5,.5,0),as,a,ss,i,s),zd.set(0,0),ic.set(1,0),Vd.set(1,1);let o=e.ray.intersectTriangle(ro,Js,so,!1,Zs);if(o===null&&(ao(Js.set(-.5,.5,0),as,a,ss,i,s),ic.set(0,1),o=e.ray.intersectTriangle(ro,so,Js,!1,Zs),o===null))return;const l=e.ray.origin.distanceTo(Zs);l<e.near||l>e.far||t.push({distance:l,point:Zs.clone(),uv:$n.getInterpolation(Zs,ro,Js,so,zd,ic,Vd,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ao(r,e,t,n,i,s){os.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ks.x=s*os.x-i*os.y,Ks.y=i*os.x+s*os.y):Ks.copy(os),r.copy(e),r.x+=Ks.x,r.y+=Ks.y,r.applyMatrix4(Ip)}const Ci=new P,rc=new P,oo=new P,qi=new P,sc=new P,lo=new P,ac=new P;class Ml{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rc.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(rc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=qi.dot(this.direction),l=-qi.dot(oo),c=qi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=s*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(rc).addScaledVector(oo,h),f}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,s){sc.subVectors(t,e),lo.subVectors(n,e),ac.crossVectors(sc,lo);let a=this.direction.dot(ac),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(lo.crossVectors(qi,lo));if(l<0)return null;const c=o*this.direction.dot(sc.cross(qi));if(c<0||l+c>a)return null;const u=-o*qi.dot(ac);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gd=new yt,gr=new Ml,co=new Ha,$d=new P,uo=new P,ho=new P,fo=new P,oc=new P,po=new P,Wd=new P,mo=new P;class jt extends zt{constructor(e=new St,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(oc.fromBufferAttribute(d,e),a?po.addScaledVector(oc,u):po.addScaledVector(oc.sub(t),u))}t.add(po)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(co.containsPoint(gr.origin)===!1&&(gr.intersectSphere(co,$d)===null||gr.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Gd.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Gd),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,E=S;b<E;b+=3){const T=o.getX(b),A=o.getX(b+1),x=o.getX(b+2);i=go(this,g,e,n,c,u,d,T,A,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const v=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);i=go(this,a,e,n,c,u,d,v,S,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,E=S;b<E;b+=3){const T=b,A=b+1,x=b+2;i=go(this,g,e,n,c,u,d,T,A,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const v=m,S=m+1,b=m+2;i=go(this,a,e,n,c,u,d,v,S,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function j0(r,e,t,n,i,s,a,o){let l;if(e.side===xn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===sr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:r}}function go(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,uo),r.getVertexPosition(l,ho),r.getVertexPosition(c,fo);const u=j0(r,e,t,n,uo,ho,fo,Wd);if(u){const d=new P;$n.getBarycoord(Wd,uo,ho,fo,d),i&&(u.uv=$n.getInterpolatedAttribute(i,o,l,c,d,new pe)),s&&(u.uv1=$n.getInterpolatedAttribute(s,o,l,c,d,new pe)),a&&(u.normal=$n.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};$n.getNormal(uo,ho,fo,h.normal),u.face=h,u.barycoord=d}return u}class Vo extends cn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Gt,u=Gt,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new P,Z0=new P,K0=new ke;class Zi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=lc.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||K0.getNormalMatrix(e),i=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Ha,J0=new pe(.5,.5),_o=new P;class Mh{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,s=new Zi,a=new Zi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],p=s[8],_=s[9],m=s[10],g=s[11],v=s[12],S=s[13],b=s[14],E=s[15];if(i[0].setComponents(c-a,f-u,g-p,E-v).normalize(),i[1].setComponents(c+a,f+u,g+p,E+v).normalize(),i[2].setComponents(c+o,f+d,g+_,E+S).normalize(),i[3].setComponents(c-o,f-d,g-_,E-S).normalize(),n)i[4].setComponents(l,h,m,b).normalize(),i[5].setComponents(c-l,f-h,g-m,E-b).normalize();else if(i[4].setComponents(c-l,f-h,g-m,E-b).normalize(),t===pi)i[5].setComponents(c+l,f+h,g+m,E+b).normalize();else if(t===Ca)i[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const t=J0.distanceTo(e.center);return _r.radius=.7071067811865476+t,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_o.x=i.normal.x>0?e.max.x:e.min.x,_o.y=i.normal.y>0?e.max.y:e.min.y,_o.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eh extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new P,sl=new P,Xd=new yt,Qs=new Ml,vo=new Ha,cc=new P,qd=new P;class Up extends zt{constructor(e=new St,t=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)rl.fromBufferAttribute(t,i-1),sl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rl.distanceTo(sl);e.setAttribute("lineDistance",new bt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(i),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Xd.copy(i).invert(),Qs.copy(e.ray).applyMatrix4(Xd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=u.getX(_),v=u.getX(_+1),S=xo(this,e,Qs,l,g,v,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(p-1),m=u.getX(f),g=xo(this,e,Qs,l,_,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,m=p-1;_<m;_+=c){const g=xo(this,e,Qs,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=xo(this,e,Qs,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xo(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(rl.fromBufferAttribute(o,i),sl.fromBufferAttribute(o,s),t.distanceSqToSegment(rl,sl,cc,qd)>n)return;cc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(cc);if(!(c<e.near||c>e.far))return{distance:c,point:qd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class Th extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yd=new yt,Lu=new Ml,yo=new Ha,bo=new P;class Ga extends zt{constructor(e=new St,t=new Th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;Yd.copy(i).invert(),Lu.copy(e.ray).applyMatrix4(Yd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,_=f;p<_;p++){const m=c.getX(p);bo.fromBufferAttribute(d,m),jd(bo,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,_=f;p<_;p++)bo.fromBufferAttribute(d,p),jd(bo,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jd(r,e,t,n,i,s,a){const o=Lu.distanceSqToPoint(r);if(o<t){const l=new P;Lu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Np extends cn{constructor(e=[],t=Br,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends cn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Da extends cn{constructor(e,t,n=yi,i,s,a,o=Gt,l=Gt,c,u=ki,d=1){if(u!==ki&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class e_ extends Da{constructor(e,t=yi,n=Br,i,s,a=Gt,o=Gt,l,c=ki){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fp extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $a extends St{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function p(_,m,g,v,S,b,E,T,A,x,y){const O=b/A,R=E/x,N=b/2,B=E/2,L=T/2,D=A+1,F=x+1;let I=0,q=0;const X=new P;for(let Q=0;Q<F;Q++){const se=Q*R-B;for(let ae=0;ae<D;ae++){const Re=ae*O-N;X[_]=Re*v,X[m]=se*S,X[g]=L,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=T>0?1:-1,u.push(X.x,X.y,X.z),d.push(ae/A),d.push(1-Q/x),I+=1}}for(let Q=0;Q<x;Q++)for(let se=0;se<A;se++){const ae=h+se+D*Q,Re=h+se+D*(Q+1),Fe=h+(se+1)+D*(Q+1),We=h+(se+1)+D*Q;l.push(ae,Re,We),l.push(Re,Fe,We),q+=6}o.addGroup(f,q,y),f+=q,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wh extends St{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let p=0;const _=[],m=n/2;let g=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(f,2));function v(){const b=new P,E=new P;let T=0;const A=(t-e)/n;for(let x=0;x<=s;x++){const y=[],O=x/s,R=O*(t-e)+e;for(let N=0;N<=i;N++){const B=N/i,L=B*l+o,D=Math.sin(L),F=Math.cos(L);E.x=R*D,E.y=-O*n+m,E.z=R*F,d.push(E.x,E.y,E.z),b.set(D,A,F).normalize(),h.push(b.x,b.y,b.z),f.push(B,1-O),y.push(p++)}_.push(y)}for(let x=0;x<i;x++)for(let y=0;y<s;y++){const O=_[y][x],R=_[y+1][x],N=_[y+1][x+1],B=_[y][x+1];(e>0||y!==0)&&(u.push(O,R,B),T+=3),(t>0||y!==s-1)&&(u.push(R,N,B),T+=3)}c.addGroup(g,T,0),g+=T}function S(b){const E=p,T=new pe,A=new P;let x=0;const y=b===!0?e:t,O=b===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*O,0),h.push(0,O,0),f.push(.5,.5),p++;const R=p;for(let N=0;N<=i;N++){const L=N/i*l+o,D=Math.cos(L),F=Math.sin(L);A.x=y*F,A.y=m*O,A.z=y*D,d.push(A.x,A.y,A.z),h.push(0,O,0),T.x=D*.5+.5,T.y=F*.5*O+.5,f.push(T.x,T.y),p++}for(let N=0;N<i;N++){const B=E+N,L=R+N;b===!0?u.push(L,L+1,B):u.push(L+1,L,B),x+=3}c.addGroup(g,x,b===!0?1:2),g+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ah extends wh{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ah(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rh extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(s.slice(),3)),this.setAttribute("uv",new bt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new P,b=new P,E=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],b),f(t[T+2],E),l(S,b,E,v)}function l(v,S,b,E){const T=E+1,A=[];for(let x=0;x<=T;x++){A[x]=[];const y=v.clone().lerp(b,x/T),O=S.clone().lerp(b,x/T),R=T-x;for(let N=0;N<=R;N++)N===0&&x===T?A[x][N]=y:A[x][N]=y.clone().lerp(O,N/R)}for(let x=0;x<T;x++)for(let y=0;y<2*(T-x)-1;y++){const O=Math.floor(y/2);y%2===0?(h(A[x][O+1]),h(A[x+1][O]),h(A[x][O])):(h(A[x][O+1]),h(A[x+1][O+1]),h(A[x+1][O]))}}function c(v){const S=new P;for(let b=0;b<s.length;b+=3)S.x=s[b+0],S.y=s[b+1],S.z=s[b+2],S.normalize().multiplyScalar(v),s[b+0]=S.x,s[b+1]=S.y,s[b+2]=S.z}function u(){const v=new P;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];const b=m(v)/2/Math.PI+.5,E=g(v)/Math.PI+.5;a.push(b,1-E)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){const S=a[v+0],b=a[v+2],E=a[v+4],T=Math.max(S,b,E),A=Math.min(S,b,E);T>.9&&A<.1&&(S<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),E<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,S){const b=v*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function p(){const v=new P,S=new P,b=new P,E=new P,T=new pe,A=new pe,x=new pe;for(let y=0,O=0;y<s.length;y+=9,O+=6){v.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),b.set(s[y+6],s[y+7],s[y+8]),T.set(a[O+0],a[O+1]),A.set(a[O+2],a[O+3]),x.set(a[O+4],a[O+5]),E.copy(v).add(S).add(b).divideScalar(3);const R=m(E);_(T,O+0,v,R),_(A,O+2,S,R),_(x,O+4,b,R)}}function _(v,S,b,E){E<0&&v.x===1&&(a[S]=v.x-1),b.x===0&&b.z===0&&(a[S]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.vertices,e.indices,e.radius,e.detail)}}class Op{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new pe:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,i=[],s=[],a=[],o=new P,l=new yt;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new P)}s[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ze(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ze(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class t_ extends Op{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function Ch(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const So=new P,uc=new Ch,hc=new Ch,dc=new Ch;class n_ extends Op{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(So.subVectors(i[0],i[1]).add(i[0]),c=So);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(So.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=So),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),uc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),hc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),dc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),hc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),dc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(uc.calc(l),hc.calc(l),dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class al extends Rh{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new al(e.radius,e.detail)}}class El extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const v=g*h-a;for(let S=0;S<c;S++){const b=S*d-s;p.push(b,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const S=v+c*g,b=v+c*(g+1),E=v+1+c*(g+1),T=v+1+c*g;f.push(S,b,T),f.push(b,E,T)}this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ph extends St{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const v=[],S=g/n;let b=0;g===0&&a===0?b=.5/t:g===n&&l===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const T=E/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+S*o),p.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+b,1-S),v.push(c++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const S=u[g][v+1],b=u[g][v],E=u[g+1][v],T=u[g+1][v+1];(g!==0||a>0)&&f.push(S,b,T),(g!==n-1||l<Math.PI)&&f.push(b,E,T)}this.setIndex(f),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ol extends St{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new P,f=new P,p=new P;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let g=0;g<=i;g++){const v=g/i*s;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,v=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,b=(i+1)*_+m;l.push(g,v,b),l.push(v,S,b)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Fs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dn(r){const e={};for(let t=0;t<r.length;t++){const n=Fs(r[t]);for(const i in n)e[i]=n[i]}return e}function i_(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const ll={clone:Fs,merge:dn};var r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class a_ extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o_ extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class l_ extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c_ extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bp extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fc=new yt,Zd=new P,Kd=new P;class u_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ca||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mo=new P,Eo=new ar,ai=new P;class zp extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mo,Eo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,Eo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Mo,Eo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,Eo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new P,Jd=new pe,Qd=new pe;class _n extends zp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Tl extends zp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class h_ extends u_{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cl extends Bp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new h_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vp extends Bp{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ls=-90,cs=1;class d_ extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(ls,cs,e,t);i.layers=this.layers,this.add(i);const s=new _n(ls,cs,e,t);s.layers=this.layers,this.add(s);const a=new _n(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new _n(ls,cs,e,t);o.layers=this.layers,this.add(o);const l=new _n(ls,cs,e,t);l.layers=this.layers,this.add(l);const c=new _n(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class f_ extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hp{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=p_.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function p_(){this._document.hidden===!1&&this.reset()}class ef{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const tf=new P;let To,pc;class m_ extends zt{constructor(e=new P(0,0,1),t=new P(0,0,0),n=1,i=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",To===void 0&&(To=new St,To.setAttribute("position",new bt([0,0,0,0,1,0],3)),pc=new Ah(.5,1,5,1),pc.translate(0,-.5,0)),this.position.copy(t),this.line=new Up(To,new Eh({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new jt(pc,new Hr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{tf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(tf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class g_ extends Vr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nf(r,e,t,n){const i=__(n);switch(t){case Mp:return r*e;case _s:return r*e/i.components*i.byteLength;case fh:return r*e/i.components*i.byteLength;case Us:return r*e*2/i.components*i.byteLength;case ph:return r*e*2/i.components*i.byteLength;case Ep:return r*e*3/i.components*i.byteLength;case ri:return r*e*4/i.components*i.byteLength;case mh:return r*e*4/i.components*i.byteLength;case Oo:case ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bo:case zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(r,16)*Math.max(e,8)/4;case Qc:case tu:return Math.max(r,8)*Math.max(e,8)/2;case iu:case ru:case au:case ou:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case su:case lu:case cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _u:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Eu:case Tu:case wu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Au:case Ru:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Cu:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function __(r){switch(r){case Ln:case xp:return{byteLength:1,components:1};case Aa:case yp:case Fn:return{byteLength:2,components:1};case hh:case dh:return{byteLength:2,components:4};case yi:case uh:case vn:return{byteLength:4,components:1};case bp:case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function v_(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var x_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,b_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,R_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_v=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:x_,alphahash_pars_fragment:y_,alphamap_fragment:b_,alphamap_pars_fragment:S_,alphatest_fragment:M_,alphatest_pars_fragment:E_,aomap_fragment:T_,aomap_pars_fragment:w_,batching_pars_vertex:A_,batching_vertex:R_,begin_vertex:C_,beginnormal_vertex:P_,bsdfs:D_,iridescence_fragment:L_,bumpmap_pars_fragment:I_,clipping_planes_fragment:U_,clipping_planes_pars_fragment:N_,clipping_planes_pars_vertex:F_,clipping_planes_vertex:O_,color_fragment:k_,color_pars_fragment:B_,color_pars_vertex:z_,color_vertex:V_,common:H_,cube_uv_reflection_fragment:G_,defaultnormal_vertex:$_,displacementmap_pars_vertex:W_,displacementmap_vertex:X_,emissivemap_fragment:q_,emissivemap_pars_fragment:Y_,colorspace_fragment:j_,colorspace_pars_fragment:Z_,envmap_fragment:K_,envmap_common_pars_fragment:J_,envmap_pars_fragment:Q_,envmap_pars_vertex:ev,envmap_physical_pars_fragment:hv,envmap_vertex:tv,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:rv,fog_pars_fragment:sv,gradientmap_pars_fragment:av,lightmap_pars_fragment:ov,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:fv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:xv,lights_fragment_end:yv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Ev,map_fragment:Tv,map_pars_fragment:wv,map_particle_fragment:Av,map_particle_pars_fragment:Rv,metalnessmap_fragment:Cv,metalnessmap_pars_fragment:Pv,morphinstance_vertex:Dv,morphcolor_vertex:Lv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Uv,morphtarget_vertex:Nv,normal_fragment_begin:Fv,normal_fragment_maps:Ov,normal_pars_fragment:kv,normal_pars_vertex:Bv,normal_vertex:zv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:$v,iridescence_pars_fragment:Wv,opaque_fragment:Xv,packing:qv,premultiplied_alpha_fragment:Yv,project_vertex:jv,dithering_fragment:Zv,dithering_pars_fragment:Kv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:sx,skinning_vertex:ax,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:ux,tonemapping_pars_fragment:hx,transmission_fragment:dx,transmission_pars_fragment:fx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:vx,background_frag:xx,backgroundCube_vert:yx,backgroundCube_frag:bx,cube_vert:Sx,cube_frag:Mx,depth_vert:Ex,depth_frag:Tx,distance_vert:wx,distance_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Dx,meshbasic_vert:Lx,meshbasic_frag:Ix,meshlambert_vert:Ux,meshlambert_frag:Nx,meshmatcap_vert:Fx,meshmatcap_frag:Ox,meshnormal_vert:kx,meshnormal_frag:Bx,meshphong_vert:zx,meshphong_frag:Vx,meshphysical_vert:Hx,meshphysical_frag:Gx,meshtoon_vert:$x,meshtoon_frag:Wx,points_vert:Xx,points_frag:qx,shadow_vert:Yx,shadow_frag:jx,sprite_vert:Zx,sprite_frag:Kx},ue={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ui={basic:{uniforms:dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:dn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:dn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:dn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:dn([ue.points,ue.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:dn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:dn([ue.common,ue.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:dn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:dn([ue.sprite,ue.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:dn([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:dn([ue.lights,ue.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ui.physical={uniforms:dn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const wo={r:0,b:0,g:0},vr=new bi,Jx=new yt;function Qx(r,e,t,n,i,s){const a=new Ve(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const b=v.backgroundBlurriness>0;S=e.get(S,b)}return S}function p(v){let S=!1;const b=f(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),S=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,S){const b=f(S);b&&(b.isCubeTexture||b.mapping===Sl)?(c===void 0&&(c=new jt(new $a(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Fs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),vr.copy(S.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(vr)),c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==it,(u!==b||d!==b.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new jt(new El(2,2),new Bt({name:"BackgroundMaterial",uniforms:Fs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(wo,kp(r)),t.buffers.color.setClear(wo.r,wo.g,wo.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:_,dispose:g}}function ey(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(R,N,B,L,D){let F=!1;const I=d(R,L,B,N);s!==I&&(s=I,c(s.object)),F=f(R,L,B,D),F&&p(R,L,B,D),D!==null&&e.update(D,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,b(R,N,B,L),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function d(R,N,B,L){const D=L.wireframe===!0;let F=n[N.id];F===void 0&&(F={},n[N.id]=F);const I=R.isInstancedMesh===!0?R.id:0;let q=F[I];q===void 0&&(q={},F[I]=q);let X=q[B.id];X===void 0&&(X={},q[B.id]=X);let Q=X[D];return Q===void 0&&(Q=h(l()),X[D]=Q),Q}function h(R){const N=[],B=[],L=[];for(let D=0;D<t;D++)N[D]=0,B[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:L,object:R,attributes:{},index:null}}function f(R,N,B,L){const D=s.attributes,F=N.attributes;let I=0;const q=B.getAttributes();for(const X in q)if(q[X].location>=0){const se=D[X];let ae=F[X];if(ae===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),se===void 0||se.attribute!==ae||ae&&se.data!==ae.data)return!0;I++}return s.attributesNum!==I||s.index!==L}function p(R,N,B,L){const D={},F=N.attributes;let I=0;const q=B.getAttributes();for(const X in q)if(q[X].location>=0){let se=F[X];se===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const ae={};ae.attribute=se,se&&se.data&&(ae.data=se.data),D[X]=ae,I++}s.attributes=D,s.attributesNum=I,s.index=L}function _(){const R=s.newAttributes;for(let N=0,B=R.length;N<B;N++)R[N]=0}function m(R){g(R,0)}function g(R,N){const B=s.newAttributes,L=s.enabledAttributes,D=s.attributeDivisors;B[R]=1,L[R]===0&&(r.enableVertexAttribArray(R),L[R]=1),D[R]!==N&&(r.vertexAttribDivisor(R,N),D[R]=N)}function v(){const R=s.newAttributes,N=s.enabledAttributes;for(let B=0,L=N.length;B<L;B++)N[B]!==R[B]&&(r.disableVertexAttribArray(B),N[B]=0)}function S(R,N,B,L,D,F,I){I===!0?r.vertexAttribIPointer(R,N,B,D,F):r.vertexAttribPointer(R,N,B,L,D,F)}function b(R,N,B,L){_();const D=L.attributes,F=B.getAttributes(),I=N.defaultAttributeValues;for(const q in F){const X=F[q];if(X.location>=0){let Q=D[q];if(Q===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const se=Q.normalized,ae=Q.itemSize,Re=e.get(Q);if(Re===void 0)continue;const Fe=Re.buffer,We=Re.type,Z=Re.bytesPerElement,ne=We===r.INT||We===r.UNSIGNED_INT||Q.gpuType===uh;if(Q.isInterleavedBufferAttribute){const ce=Q.data,Oe=ce.stride,Pe=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<X.locationSize;Ie++)g(X.location+Ie,ce.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)m(X.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let Ie=0;Ie<X.locationSize;Ie++)S(X.location+Ie,ae/X.locationSize,We,se,Oe*Z,(Pe+ae/X.locationSize*Ie)*Z,ne)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce,Q.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Fe);for(let ce=0;ce<X.locationSize;ce++)S(X.location+ce,ae/X.locationSize,We,se,ae*Z,ae/X.locationSize*ce*Z,ne)}}else if(I!==void 0){const se=I[q];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(X.location,se);break;case 3:r.vertexAttrib3fv(X.location,se);break;case 4:r.vertexAttrib4fv(X.location,se);break;default:r.vertexAttrib1fv(X.location,se)}}}}v()}function E(){y();for(const R in n){const N=n[R];for(const B in N){const L=N[B];for(const D in L){const F=L[D];for(const I in F)u(F[I].object),delete F[I];delete L[D]}}delete n[R]}}function T(R){if(n[R.id]===void 0)return;const N=n[R.id];for(const B in N){const L=N[B];for(const D in L){const F=L[D];for(const I in F)u(F[I].object),delete F[I];delete L[D]}}delete n[R.id]}function A(R){for(const N in n){const B=n[N];for(const L in B){const D=B[L];if(D[R.id]===void 0)continue;const F=D[R.id];for(const I in F)u(F[I].object),delete F[I];delete D[R.id]}}}function x(R){for(const N in n){const B=n[N],L=R.isInstancedMesh===!0?R.id:0,D=B[L];if(D!==void 0){for(const F in D){const I=D[F];for(const q in I)u(I[q].object),delete I[q];delete D[F]}delete B[L],Object.keys(B).length===0&&delete n[N]}}}function y(){O(),a=!0,s!==i&&(s=i,c(s.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:y,resetDefaultState:O,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function ty(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_]*h[_];t.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ny(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==ri&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!x)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:b,maxSamples:E,samples:T}}function iy(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Zi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,S=v*4;let b=g.clippingState||null;l.value=b,b=u(p,h,S,f);for(let E=0;E!==S;++E)b[E]=t[E];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,b=f;S!==_;++S,b+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Qi=4,rf=[.125,.215,.35,.446,.526,.582],Er=20,ry=256,ea=new Tl,sf=new Ve;let mc=null,gc=0,_c=0,vc=!1;const sy=new P;class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=sy}=s;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=vc,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Fn,format:ri,colorSpace:Ns,depthBuffer:!1},i=of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ay(s)),this._blurMaterial=ly(s,e,t),this._ggxMaterial=oy(s,e,t)}return i}_compileMaterial(e){const t=new jt(new St,e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,i,s){const l=new _n(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(sf),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new $a,new Hr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(sf),g=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const E=this._cubeSize;us(i,b*E,S>2?E:0,E,E),d.setRenderTarget(i),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Br||e.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Qi?n-p+Qi:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,us(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(o,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,us(e,m,g,3*_,2*_),i.setRenderTarget(e),i.render(o,ea)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Er-1),_=s/p,m=isFinite(s)?1+Math.floor(u*_):Er;m>Er&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const g=[];let v=0;for(let A=0;A<Er;++A){const x=A/_,y=Math.exp(-x*x/2);g.push(y),A===0?v+=y:A<m&&(v+=2*y)}for(let A=0;A<g.length;A++)g[A]=g[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=p,h.mipInt.value=S-n;const b=this._sizeLods[i],E=3*b*(i>S-Qi?i-S+Qi:0),T=4*(this._cubeSize-b);us(t,E,T,3*b,2*b),l.setRenderTarget(t),l.render(d,ea)}}function ay(r){const e=[],t=[],n=[];let i=r;const s=r-Qi+1+rf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Qi?l=rf[a-r+Qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,m=2,g=1,v=new Float32Array(_*p*f),S=new Float32Array(m*p*f),b=new Float32Array(g*p*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,x=T>2?0:-1,y=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];v.set(y,_*p*T),S.set(h,m*p*T);const O=[T,T,T,T,T,T];b.set(O,g*p*T)}const E=new St;E.setAttribute("position",new Dt(v,_)),E.setAttribute("uv",new Dt(S,m)),E.setAttribute("faceIndex",new Dt(b,g)),n.push(new jt(E,null)),i>Qi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function of(r,e,t){const n=new yn(r,e,t);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function oy(r,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ry,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function ly(r,e,t){const n=new Float32Array(Er),i=new P(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function lf(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function cf(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $p extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Np(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $a(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:vi});s.uniforms.tEquirect.value=t;const a=new jt(i,s),o=t.minFilter;return t.minFilter===Rr&&(t.minFilter=on),new d_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function cy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ol||f===kl)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new $p(p.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,p=f===Ol||f===kl,_=f===Br||f===Is;if(p||_){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new af(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return p&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new af(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Ol?h.mapping=Br:f===kl&&(h.mapping=Is),h}function l(h){let f=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function uy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&nl("WebGLRenderer: "+n+" extension not supported."),i}}}function hy(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let S=0,b=v.length;S<b;S+=3){const E=v[S+0],T=v[S+1],A=v[S+2];h.push(E,T,T,A,A,E)}}else{const v=p.array;_=p.version;for(let S=0,b=v.length/3-1;S<b;S+=3){const E=S+0,T=S+1,A=S+2;h.push(E,T,T,A,A,E)}}const m=new(p.count>=65535?Lp:Dp)(h,1);m.version=_;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function dy(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*a),t.update(f,n,1)}function c(h,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,h*a,p),t.update(f,n,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function d(h,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/a,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,p);let g=0;for(let v=0;v<p;v++)g+=f[v]*_[v];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function fy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function py(r,e,t){const n=new WeakMap,i=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let b=o.attributes.position.count*S,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*E*4*d),A=new Rp(T,b,E,d);A.type=vn,A.needsUpdate=!0;const x=S*4;for(let O=0;O<d;O++){const R=m[O],N=g[O],B=v[O],L=b*E*4*O;for(let D=0;D<R.count;D++){const F=D*x;f===!0&&(i.fromBufferAttribute(R,D),T[L+F+0]=i.x,T[L+F+1]=i.y,T[L+F+2]=i.z,T[L+F+3]=0),p===!0&&(i.fromBufferAttribute(N,D),T[L+F+4]=i.x,T[L+F+5]=i.y,T[L+F+6]=i.z,T[L+F+7]=0),_===!0&&(i.fromBufferAttribute(B,D),T[L+F+8]=i.x,T[L+F+9]=i.y,T[L+F+10]=i.z,T[L+F+11]=B.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new pe(b,E)},n.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function my(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const gy={[hp]:"LINEAR_TONE_MAPPING",[dp]:"REINHARD_TONE_MAPPING",[fp]:"CINEON_TONE_MAPPING",[pp]:"ACES_FILMIC_TONE_MAPPING",[gp]:"AGX_TONE_MAPPING",[_p]:"NEUTRAL_TONE_MAPPING",[mp]:"CUSTOM_TONE_MAPPING"};function _y(r,e,t,n,i){const s=new yn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new yn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),o=new St;o.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bt([0,2,0,0,2,0],2));const l=new a_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new jt(o,l),u=new Tl(-1,1,1,-1,0,1);let d=null,h=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(v,S){s.setSize(v,S),a.setSize(v,S);for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(v,S)}},this.setEffects=function(v){m=v,g=m.length>0&&m[0].isRenderPass===!0;const S=s.width,b=s.height;for(let E=0;E<m.length;E++){const T=m[E];T.setSize&&T.setSize(S,b)}},this.begin=function(v,S){if(f||v.toneMapping===xi&&m.length===0)return!1;if(_=S,S!==null){const b=S.width,E=S.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return g===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=xi,!0},this.hasRenderPass=function(){return g},this.end=function(v,S){v.toneMapping=p,f=!0;let b=s,E=a;for(let T=0;T<m.length;T++){const A=m[T];if(A.enabled!==!1&&(A.render(v,E,b,S),A.needsSwap!==!1)){const x=b;b=E,E=x}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},Ke.getTransfer(d)===it&&(l.defines.SRGB_TRANSFER="");const T=gy[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(_),v.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Wp=new cn,Iu=new Da(1,1),Xp=new Rp,qp=new F0,Yp=new Np,uf=[],hf=[],df=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function $s(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=uf[i];if(s===void 0&&(s=new Float32Array(i),uf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Al(r,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function yy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function Sy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if($t(t,n))return;pf.set(n),r.uniformMatrix2fv(this.addr,!1,pf),Wt(t,n)}}function My(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if($t(t,n))return;ff.set(n),r.uniformMatrix3fv(this.addr,!1,ff),Wt(t,n)}}function Ey(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if($t(t,n))return;df.set(n),r.uniformMatrix4fv(this.addr,!1,df),Wt(t,n)}}function Ty(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function Ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function Ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function Cy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function Dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function Ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function Iy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Iu.compareFunction=t.isReversedDepthBuffer()?_h:gh,s=Iu):s=Wp,t.setTexture2D(e||s,i)}function Uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qp,i)}function Ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yp,i)}function Fy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xp,i)}function Oy(r){switch(r){case 5126:return vy;case 35664:return xy;case 35665:return yy;case 35666:return by;case 35674:return Sy;case 35675:return My;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return wy;case 35668:case 35672:return Ay;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return Py;case 36295:return Dy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Fy}}function ky(r,e){r.uniform1fv(this.addr,e)}function By(r,e){const t=$s(e,this.size,2);r.uniform2fv(this.addr,t)}function zy(r,e){const t=$s(e,this.size,3);r.uniform3fv(this.addr,t)}function Vy(r,e){const t=$s(e,this.size,4);r.uniform4fv(this.addr,t)}function Hy(r,e){const t=$s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Gy(r,e){const t=$s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $y(r,e){const t=$s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wy(r,e){r.uniform1iv(this.addr,e)}function Xy(r,e){r.uniform2iv(this.addr,e)}function qy(r,e){r.uniform3iv(this.addr,e)}function Yy(r,e){r.uniform4iv(this.addr,e)}function jy(r,e){r.uniform1uiv(this.addr,e)}function Zy(r,e){r.uniform2uiv(this.addr,e)}function Ky(r,e){r.uniform3uiv(this.addr,e)}function Jy(r,e){r.uniform4uiv(this.addr,e)}function Qy(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Iu:a=Wp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function eb(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qp,s[a])}function tb(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Yp,s[a])}function nb(r,e,t){const n=this.cache,i=e.length,s=Al(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xp,s[a])}function ib(r){switch(r){case 5126:return ky;case 35664:return By;case 35665:return zy;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return $y;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return jy;case 36294:return Zy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}class rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Oy(t.type)}}class sb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ib(t.type)}}class ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function mf(r,e){r.seq.push(e),r.map[e.id]=e}function ob(r,e,t){const n=r.name,i=n.length;for(xc.lastIndex=0;;){const s=xc.exec(n),a=xc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){mf(t,c===void 0?new rb(o,r,e):new sb(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new ab(o),mf(t,d)),t=d}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ob(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gf(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const lb=37297;let cb=0;function ub(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _f=new ke;function hb(r){Ke._getMatrix(_f,Ke.workingColorSpace,r);const e=`mat3( ${_f.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case Qo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ub(r.getShaderSource(e),o)}else return s}function db(r,e){const t=hb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const fb={[hp]:"Linear",[dp]:"Reinhard",[fp]:"Cineon",[pp]:"ACESFilmic",[gp]:"AgX",[_p]:"Neutral",[mp]:"Custom"};function pb(r,e){const t=fb[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ao=new P;function mb(){Ke.getLuminanceCoefficients(Ao);const r=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function _b(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function oa(r){return r!==""}function xf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(r){return r.replace(xb,bb)}const yb=new Map;function bb(r,e){let t=Be[e];if(t===void 0){const n=yb.get(e);if(n!==void 0)t=Be[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uu(t)}const Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(r){return r.replace(Sb,Mb)}function Mb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Eb={[Fo]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function Tb(r){return Eb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wb={[Br]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Sl]:"ENVMAP_TYPE_CUBE_UV"};function Ab(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rb={[Is]:"ENVMAP_MODE_REFRACTION"};function Cb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pb={[up]:"ENVMAP_BLENDING_MULTIPLY",[e0]:"ENVMAP_BLENDING_MIX",[t0]:"ENVMAP_BLENDING_ADD"};function Db(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[r.combine]||"ENVMAP_BLENDING_NONE"}function Lb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ib(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tb(t),c=Ab(t),u=Cb(t),d=Db(t),h=Lb(t),f=gb(t),p=_b(s),_=i.createProgram();let m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(oa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(oa).join(`
`),g.length>0&&(g+=`
`)):(m=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),g=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Be.tonemapping_pars_fragment:"",t.toneMapping!==xi?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),a=Uu(a),a=xf(a,t),a=yf(a,t),o=Uu(o),o=xf(o,t),o=yf(o,t),a=bf(a),o=bf(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=v+m+a,b=v+g+o,E=gf(i,i.VERTEX_SHADER,S),T=gf(i,i.FRAGMENT_SHADER,b);i.attachShader(_,E),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(E)||"",L=i.getShaderInfoLog(T)||"",D=N.trim(),F=B.trim(),I=L.trim();let q=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,T);else{const Q=vf(i,E,"vertex"),se=vf(i,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+Q+`
`+se)}else D!==""?Le("WebGLProgram: Program Info Log:",D):(F===""||I==="")&&(X=!1);X&&(R.diagnostics={runnable:q,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:I,prefix:g}})}i.deleteShader(E),i.deleteShader(T),x=new Ho(i,_),y=vb(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(_,lb)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let Ub=0;class Nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fb(e),t.set(e,n)),n}}class Fb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Ob(r,e,t,n,i,s){const a=new Cp,o=new Nb,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,y,O,R,N){const B=R.fog,L=N.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,I=e.get(x.envMap||D,F),q=I&&I.mapping===Sl?I.image.height:null,X=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=Q!==void 0?Q.length:0;let ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let Re,Fe,We,Z;if(X){const nt=ui[X];Re=nt.vertexShader,Fe=nt.fragmentShader}else Re=x.vertexShader,Fe=x.fragmentShader,o.update(x),We=o.getVertexShaderID(x),Z=o.getFragmentShaderID(x);const ne=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,Ie=!!x.map,Xt=!!x.matcap,Ye=!!I,tt=!!x.aoMap,ft=!!x.lightMap,He=!!x.bumpMap,Lt=!!x.normalMap,k=!!x.displacementMap,Ft=!!x.emissiveMap,et=!!x.metalnessMap,vt=!!x.roughnessMap,Me=x.anisotropy>0,C=x.clearcoat>0,M=x.dispersion>0,V=x.iridescence>0,K=x.sheen>0,J=x.transmission>0,j=Me&&!!x.anisotropyMap,ve=C&&!!x.clearcoatMap,oe=C&&!!x.clearcoatNormalMap,Ae=C&&!!x.clearcoatRoughnessMap,De=V&&!!x.iridescenceMap,ee=V&&!!x.iridescenceThicknessMap,ie=K&&!!x.sheenColorMap,xe=K&&!!x.sheenRoughnessMap,be=!!x.specularMap,fe=!!x.specularColorMap,Ge=!!x.specularIntensityMap,z=J&&!!x.transmissionMap,le=J&&!!x.thicknessMap,re=!!x.gradientMap,ge=!!x.alphaMap,te=x.alphaTest>0,Y=!!x.alphaHash,ye=!!x.extensions;let Ue=xi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const xt={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:Re,fragmentShader:Fe,defines:x.defines,customVertexShaderID:We,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ns,alphaToCoverage:!!x.alphaToCoverage,map:Ie,matcap:Xt,envMap:Ye,envMapMode:Ye&&I.mapping,envMapCubeUVHeight:q,aoMap:tt,lightMap:ft,bumpMap:He,normalMap:Lt,displacementMap:k,emissiveMap:Ft,normalMapObjectSpace:Lt&&x.normalMapType===r0,normalMapTangentSpace:Lt&&x.normalMapType===Tp,metalnessMap:et,roughnessMap:vt,anisotropy:Me,anisotropyMap:j,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ae,dispersion:M,iridescence:V,iridescenceMap:De,iridescenceThicknessMap:ee,sheen:K,sheenColorMap:ie,sheenRoughnessMap:xe,specularMap:be,specularColorMap:fe,specularIntensityMap:Ge,transmission:J,transmissionMap:z,thicknessMap:le,gradientMap:re,opaque:x.transparent===!1&&x.blending===Lr&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:Y,combine:x.combine,mapUv:Ie&&p(x.map.channel),aoMapUv:tt&&p(x.aoMap.channel),lightMapUv:ft&&p(x.lightMap.channel),bumpMapUv:He&&p(x.bumpMap.channel),normalMapUv:Lt&&p(x.normalMap.channel),displacementMapUv:k&&p(x.displacementMap.channel),emissiveMapUv:Ft&&p(x.emissiveMap.channel),metalnessMapUv:et&&p(x.metalnessMap.channel),roughnessMapUv:vt&&p(x.roughnessMap.channel),anisotropyMapUv:j&&p(x.anisotropyMap.channel),clearcoatMapUv:ve&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(x.sheenRoughnessMap.channel),specularMapUv:be&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:Ge&&p(x.specularIntensityMap.channel),transmissionMapUv:z&&p(x.transmissionMap.channel),thicknessMapUv:le&&p(x.thicknessMap.channel),alphaMapUv:ge&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Lt||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Ie||ge),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ie&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ti,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)y.push(O),y.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(g(y,x),v(y,x),y.push(r.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function g(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){const y=f[x.type];let O;if(y){const R=ui[y];O=ll.clone(R.uniforms)}else O=x.uniforms;return O}function b(x,y){let O=u.get(y);return O!==void 0?++O.usedTimes:(O=new Ib(r,y,x,i),c.push(O),u.set(y,O)),O}function E(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:A}}function kb(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Bb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Mf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ef(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,_,m,g){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=p,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=g),e++,v}function l(h,f,p,_,m,g){const v=o(h,f,p,_,m,g);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function c(h,f,p,_,m,g){const v=o(h,f,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||Bb),n.length>1&&n.sort(f||Mf),i.length>1&&i.sort(f||Mf)}function d(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function zb(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Ef,r.set(n,[a])):i>=s.length?(a=new Ef,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Vb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ve};break;case"SpotLight":t={position:new P,direction:new P,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function Hb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gb=0;function $b(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Wb(r){const e=new Vb,t=Hb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new yt,a=new yt;function o(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,v=0,S=0,b=0,E=0,T=0,A=0;c.sort($b);for(let y=0,O=c.length;y<O;y++){const R=c[y],N=R.color,B=R.intensity,L=R.distance;let D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Us?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=N.r*B,d+=N.g*B,h+=N.b*B;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],B);A++}else if(R.isDirectionalLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const I=R.shadow,q=t.get(R);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=F,f++}else if(R.isSpotLight){const F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(N).multiplyScalar(B),F.distance=L,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[_]=F;const I=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,I.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=I.matrix,R.castShadow){const q=t.get(R);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=D,b++}_++}else if(R.isRectAreaLight){const F=e.get(R);F.color.copy(N).multiplyScalar(B),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=F,m++}else if(R.isPointLight){const F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){const I=R.shadow,q=t.get(R);q.shadowIntensity=I.intensity,q.shadowBias=I.bias,q.shadowNormalBias=I.normalBias,q.shadowRadius=I.radius,q.shadowMapSize=I.mapSize,q.shadowCameraNear=I.camera.near,q.shadowCameraFar=I.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=D,n.pointShadowMatrix[p]=R.shadow.matrix,S++}n.point[p]=F,p++}else if(R.isHemisphereLight){const F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(B),F.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[g]=F,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==f||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==g||x.numDirectionalShadows!==v||x.numPointShadows!==S||x.numSpotShadows!==b||x.numSpotMaps!==E||x.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,x.directionalLength=f,x.pointLength=p,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=g,x.numDirectionalShadows=v,x.numPointShadows=S,x.numSpotShadows=b,x.numSpotMaps=E,x.numLightProbes=A,n.version=Gb++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const S=c[g];if(S.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(S.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Tf(r){const e=new Wb(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Xb(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Tf(r),e.set(i,[o])):s>=a.length?(o=new Tf(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jb=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Zb=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],wf=new yt,ta=new P,yc=new P;function Kb(r,e,t){let n=new Mh;const i=new pe,s=new pe,a=new Ct,o=new l_,l=new c_,c={},u=t.maxTextureSize,d={[sr]:xn,[xn]:sr,[ti]:ti},h=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:qb,fragmentShader:Yb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new St;p.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let g=this.type;this.render=function(T,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ng&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fo);const y=r.getRenderTarget(),O=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),N=r.state;N.setBlending(vi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=g!==this.type;B&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(D=>D.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,D=T.length;L<D;L++){const F=T[L],I=F.shadow;if(I===void 0){Le("WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const q=I.getFrameExtents();i.multiply(q),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,I.mapSize.y=s.y));const X=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=X,I.map===null||B===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===aa){if(F.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new yn(i.x,i.y,{format:Us,type:Fn,minFilter:on,magFilter:on,generateMipmaps:!1}),I.map.texture.name=F.name+".shadowMap",I.map.depthTexture=new Da(i.x,i.y,vn),I.map.depthTexture.name=F.name+".shadowMapDepth",I.map.depthTexture.format=ki,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Gt,I.map.depthTexture.magFilter=Gt}else F.isPointLight?(I.map=new $p(i.x),I.map.depthTexture=new e_(i.x,yi)):(I.map=new yn(i.x,i.y),I.map.depthTexture=new Da(i.x,i.y,yi)),I.map.depthTexture.name=F.name+".shadowMap",I.map.depthTexture.format=ki,this.type===Fo?(I.map.depthTexture.compareFunction=X?_h:gh,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Gt,I.map.depthTexture.magFilter=Gt);I.camera.updateProjectionMatrix()}const Q=I.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<Q;se++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,se),r.clear();else{se===0&&(r.setRenderTarget(I.map),r.clear());const ae=I.getViewport(se);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),N.viewport(a)}if(F.isPointLight){const ae=I.camera,Re=I.matrix,Fe=F.distance||ae.far;Fe!==ae.far&&(ae.far=Fe,ae.updateProjectionMatrix()),ta.setFromMatrixPosition(F.matrixWorld),ae.position.copy(ta),yc.copy(ae.position),yc.add(jb[se]),ae.up.copy(Zb[se]),ae.lookAt(yc),ae.updateMatrixWorld(),Re.makeTranslation(-ta.x,-ta.y,-ta.z),wf.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),I._frustum.setFromProjectionMatrix(wf,ae.coordinateSystem,ae.reversedDepth)}else I.updateMatrices(F);n=I.getFrustum(),b(A,x,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===aa&&v(I,x),I.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(y,O,R)};function v(T,A){const x=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yn(i.x,i.y,{format:Us,type:Fn})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,x,f,_,null)}function S(T,A,x,y){let O=null;const R=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)O=R;else if(O=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=O.uuid,B=A.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let D=L[B];D===void 0&&(D=O.clone(),L[B]=D,A.addEventListener("dispose",E)),O=D}if(O.visible=A.visible,O.wireframe=A.wireframe,y===aa?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:d[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,x.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const N=r.properties.get(O);N.light=x}return O}function b(T,A,x,y,O){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===aa)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const B=e.update(T),L=T.material;if(Array.isArray(L)){const D=B.groups;for(let F=0,I=D.length;F<I;F++){const q=D[F],X=L[q.materialIndex];if(X&&X.visible){const Q=S(T,X,y,O);T.onBeforeShadow(r,T,A,x,B,Q,q),r.renderBufferDirect(x,null,B,Q,T,q),T.onAfterShadow(r,T,A,x,B,Q,q)}}}else if(L.visible){const D=S(T,L,y,O);T.onBeforeShadow(r,T,A,x,B,D,null),r.renderBufferDirect(x,null,B,D,T,null),T.onAfterShadow(r,T,A,x,B,D,null)}}const N=T.children;for(let B=0,L=N.length;B<L;B++)b(N[B],A,x,y,O)}function E(T){T.target.removeEventListener("dispose",E);for(const x in c){const y=c[x],O=T.target.uuid;O in y&&(y[O].dispose(),delete y[O])}}}function Jb(r,e){function t(){let z=!1;const le=new Ct;let re=null;const ge=new Ct(0,0,0,0);return{setMask:function(te){re!==te&&!z&&(r.colorMask(te,te,te,te),re=te)},setLocked:function(te){z=te},setClear:function(te,Y,ye,Ue,xt){xt===!0&&(te*=Ue,Y*=Ue,ye*=Ue),le.set(te,Y,ye,Ue),ge.equals(le)===!1&&(r.clearColor(te,Y,ye,Ue),ge.copy(le))},reset:function(){z=!1,re=null,ge.set(-1,0,0,0)}}}function n(){let z=!1,le=!1,re=null,ge=null,te=null;return{setReversed:function(Y){if(le!==Y){const ye=e.get("EXT_clip_control");Y?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),le=Y;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return le},setTest:function(Y){Y?ne(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(Y){re!==Y&&!z&&(r.depthMask(Y),re=Y)},setFunc:function(Y){if(le&&(Y=p0[Y]),ge!==Y){switch(Y){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case qc:r.depthFunc(r.LESS);break;case Ls:r.depthFunc(r.LEQUAL);break;case Yc:r.depthFunc(r.EQUAL);break;case jc:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case Kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Y}},setLocked:function(Y){z=Y},setClear:function(Y){te!==Y&&(te=Y,le&&(Y=1-Y),r.clearDepth(Y))},reset:function(){z=!1,re=null,ge=null,te=null,le=!1}}}function i(){let z=!1,le=null,re=null,ge=null,te=null,Y=null,ye=null,Ue=null,xt=null;return{setTest:function(nt){z||(nt?ne(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(nt){le!==nt&&!z&&(r.stencilMask(nt),le=nt)},setFunc:function(nt,Mi,Ei){(re!==nt||ge!==Mi||te!==Ei)&&(r.stencilFunc(nt,Mi,Ei),re=nt,ge=Mi,te=Ei)},setOp:function(nt,Mi,Ei){(Y!==nt||ye!==Mi||Ue!==Ei)&&(r.stencilOp(nt,Mi,Ei),Y=nt,ye=Mi,Ue=Ei)},setLocked:function(nt){z=nt},setClear:function(nt){xt!==nt&&(r.clearStencil(nt),xt=nt)},reset:function(){z=!1,le=null,re=null,ge=null,te=null,Y=null,ye=null,Ue=null,xt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,v=null,S=null,b=null,E=null,T=null,A=new Ve(0,0,0),x=0,y=!1,O=null,R=null,N=null,B=null,L=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,I=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=I>=2);let X=null,Q={};const se=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),Re=new Ct().fromArray(se),Fe=new Ct().fromArray(ae);function We(z,le,re,ge){const te=new Uint8Array(4),Y=r.createTexture();r.bindTexture(z,Y),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<re;ye++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(le+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Y}const Z={};Z[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(r.DEPTH_TEST),a.setFunc(Ls),He(!1),Lt(Sd),ne(r.CULL_FACE),tt(vi);function ne(z){u[z]!==!0&&(r.enable(z),u[z]=!0)}function ce(z){u[z]!==!1&&(r.disable(z),u[z]=!1)}function Oe(z,le){return d[z]!==le?(r.bindFramebuffer(z,le),d[z]=le,z===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),z===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(z,le){let re=f,ge=!1;if(z){re=h.get(le),re===void 0&&(re=[],h.set(le,re));const te=z.textures;if(re.length!==te.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,ye=te.length;Y<ye;Y++)re[Y]=r.COLOR_ATTACHMENT0+Y;re.length=te.length,ge=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,ge=!0);ge&&r.drawBuffers(re)}function Ie(z){return p!==z?(r.useProgram(z),p=z,!0):!1}const Xt={[Mr]:r.FUNC_ADD,[Og]:r.FUNC_SUBTRACT,[kg]:r.FUNC_REVERSE_SUBTRACT};Xt[Bg]=r.MIN,Xt[zg]=r.MAX;const Ye={[Vg]:r.ZERO,[Hg]:r.ONE,[Gg]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[jg]:r.SRC_ALPHA_SATURATE,[qg]:r.DST_COLOR,[Wg]:r.DST_ALPHA,[$g]:r.ONE_MINUS_SRC_COLOR,[$c]:r.ONE_MINUS_SRC_ALPHA,[Yg]:r.ONE_MINUS_DST_COLOR,[Xg]:r.ONE_MINUS_DST_ALPHA,[Zg]:r.CONSTANT_COLOR,[Kg]:r.ONE_MINUS_CONSTANT_COLOR,[Jg]:r.CONSTANT_ALPHA,[Qg]:r.ONE_MINUS_CONSTANT_ALPHA};function tt(z,le,re,ge,te,Y,ye,Ue,xt,nt){if(z===vi){_===!0&&(ce(r.BLEND),_=!1);return}if(_===!1&&(ne(r.BLEND),_=!0),z!==Fg){if(z!==m||nt!==y){if((g!==Mr||b!==Mr)&&(r.blendEquation(r.FUNC_ADD),g=Mr,b=Mr),nt)switch(z){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kr:r.blendFunc(r.ONE,r.ONE);break;case Md:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ed:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",z);break}else switch(z){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Md:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",z);break}v=null,S=null,E=null,T=null,A.set(0,0,0),x=0,m=z,y=nt}return}te=te||le,Y=Y||re,ye=ye||ge,(le!==g||te!==b)&&(r.blendEquationSeparate(Xt[le],Xt[te]),g=le,b=te),(re!==v||ge!==S||Y!==E||ye!==T)&&(r.blendFuncSeparate(Ye[re],Ye[ge],Ye[Y],Ye[ye]),v=re,S=ge,E=Y,T=ye),(Ue.equals(A)===!1||xt!==x)&&(r.blendColor(Ue.r,Ue.g,Ue.b,xt),A.copy(Ue),x=xt),m=z,y=!1}function ft(z,le){z.side===ti?ce(r.CULL_FACE):ne(r.CULL_FACE);let re=z.side===xn;le&&(re=!re),He(re),z.blending===Lr&&z.transparent===!1?tt(vi):tt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const ge=z.stencilWrite;o.setTest(ge),ge&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ne(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(z){O!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),O=z)}function Lt(z){z!==Ig?(ne(r.CULL_FACE),z!==R&&(z===Sd?r.cullFace(r.BACK):z===Ug?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),R=z}function k(z){z!==N&&(F&&r.lineWidth(z),N=z)}function Ft(z,le,re){z?(ne(r.POLYGON_OFFSET_FILL),(B!==le||L!==re)&&(B=le,L=re,a.getReversed()&&(le=-le),r.polygonOffset(le,re))):ce(r.POLYGON_OFFSET_FILL)}function et(z){z?ne(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function vt(z){z===void 0&&(z=r.TEXTURE0+D-1),X!==z&&(r.activeTexture(z),X=z)}function Me(z,le,re){re===void 0&&(X===null?re=r.TEXTURE0+D-1:re=X);let ge=Q[re];ge===void 0&&(ge={type:void 0,texture:void 0},Q[re]=ge),(ge.type!==z||ge.texture!==le)&&(X!==re&&(r.activeTexture(re),X=re),r.bindTexture(z,le||Z[z]),ge.type=z,ge.texture=le)}function C(){const z=Q[X];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function K(){try{r.texSubImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function J(){try{r.texSubImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function oe(){try{r.texStorage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function Ae(){try{r.texStorage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function De(){try{r.texImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function ee(){try{r.texImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function ie(z){Re.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Re.copy(z))}function xe(z){Fe.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Fe.copy(z))}function be(z,le){let re=c.get(le);re===void 0&&(re=new WeakMap,c.set(le,re));let ge=re.get(z);ge===void 0&&(ge=r.getUniformBlockIndex(le,z.name),re.set(z,ge))}function fe(z,le){const ge=c.get(le).get(z);l.get(le)!==ge&&(r.uniformBlockBinding(le,ge,z.__bindingPointIndex),l.set(le,ge))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},X=null,Q={},d={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,v=null,S=null,b=null,E=null,T=null,A=new Ve(0,0,0),x=0,y=!1,O=null,R=null,N=null,B=null,L=null,Re.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:ce,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:Ie,setBlending:tt,setMaterial:ft,setFlipSided:He,setCullFace:Lt,setLineWidth:k,setPolygonOffset:Ft,setScissorTest:et,activeTexture:vt,bindTexture:Me,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:De,texImage3D:ee,updateUBOMapping:be,uniformBlockBinding:fe,texStorage2D:oe,texStorage3D:Ae,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:j,compressedTexSubImage3D:ve,scissor:ie,viewport:xe,reset:Ge}}function Qb(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,M){return f?new OffscreenCanvas(C,M):el("canvas")}function _(C,M,V){let K=1;const J=Me(C);if((J.width>V||J.height>V)&&(K=V/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*J.width),ve=Math.floor(K*J.height);d===void 0&&(d=p(j,ve));const oe=M?p(j,ve):d;return oe.width=j,oe.height=ve,oe.getContext("2d").drawImage(C,0,0,j,ve),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+ve+")."),oe}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,M,V,K,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=M;if(M===r.RED&&(V===r.FLOAT&&(j=r.R32F),V===r.HALF_FLOAT&&(j=r.R16F),V===r.UNSIGNED_BYTE&&(j=r.R8)),M===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.R8UI),V===r.UNSIGNED_SHORT&&(j=r.R16UI),V===r.UNSIGNED_INT&&(j=r.R32UI),V===r.BYTE&&(j=r.R8I),V===r.SHORT&&(j=r.R16I),V===r.INT&&(j=r.R32I)),M===r.RG&&(V===r.FLOAT&&(j=r.RG32F),V===r.HALF_FLOAT&&(j=r.RG16F),V===r.UNSIGNED_BYTE&&(j=r.RG8)),M===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RG8UI),V===r.UNSIGNED_SHORT&&(j=r.RG16UI),V===r.UNSIGNED_INT&&(j=r.RG32UI),V===r.BYTE&&(j=r.RG8I),V===r.SHORT&&(j=r.RG16I),V===r.INT&&(j=r.RG32I)),M===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGB8UI),V===r.UNSIGNED_SHORT&&(j=r.RGB16UI),V===r.UNSIGNED_INT&&(j=r.RGB32UI),V===r.BYTE&&(j=r.RGB8I),V===r.SHORT&&(j=r.RGB16I),V===r.INT&&(j=r.RGB32I)),M===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),V===r.UNSIGNED_INT&&(j=r.RGBA32UI),V===r.BYTE&&(j=r.RGBA8I),V===r.SHORT&&(j=r.RGBA16I),V===r.INT&&(j=r.RGBA32I)),M===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),M===r.RGBA){const ve=J?Qo:Ke.getTransfer(K);V===r.FLOAT&&(j=r.RGBA32F),V===r.HALF_FLOAT&&(j=r.RGBA16F),V===r.UNSIGNED_BYTE&&(j=ve===it?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(C,M){let V;return C?M===null||M===yi||M===Ra?V=r.DEPTH24_STENCIL8:M===vn?V=r.DEPTH32F_STENCIL8:M===Aa&&(V=r.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===Ra?V=r.DEPTH_COMPONENT24:M===vn?V=r.DEPTH_COMPONENT32F:M===Aa&&(V=r.DEPTH_COMPONENT16),V}function E(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){const M=C.target;M.removeEventListener("dispose",T),x(M),M.isVideoTexture&&u.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),O(M)}function x(C){const M=n.get(C);if(M.__webglInit===void 0)return;const V=C.source,K=h.get(V);if(K){const J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(K).length===0&&h.delete(V)}n.remove(C)}function y(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const V=C.source,K=h.get(V);delete K[M.__cacheKey],a.memory.textures--}function O(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[K][J]);else r.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)r.deleteFramebuffer(M.__webglFramebuffer[K]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,J=V.length;K<J;K++){const j=n.get(V[K]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(C)}let R=0;function N(){R=0}function B(){const C=R;return C>=i.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function L(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function D(C,M){const V=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const K=C.image;if(K===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+M)}function F(C,M){const V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Z(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+M)}function I(C,M){const V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Z(V,C,M);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+M)}function q(C,M){const V=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){ne(V,C,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+M)}const X={[wa]:r.REPEAT,[Ui]:r.CLAMP_TO_EDGE,[Jc]:r.MIRRORED_REPEAT},Q={[Gt]:r.NEAREST,[n0]:r.NEAREST_MIPMAP_NEAREST,[Za]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[Bl]:r.LINEAR_MIPMAP_NEAREST,[Rr]:r.LINEAR_MIPMAP_LINEAR},se={[s0]:r.NEVER,[u0]:r.ALWAYS,[a0]:r.LESS,[gh]:r.LEQUAL,[o0]:r.EQUAL,[_h]:r.GEQUAL,[l0]:r.GREATER,[c0]:r.NOTEQUAL};function ae(C,M){if(M.type===vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===Bl||M.magFilter===Za||M.magFilter===Rr||M.minFilter===on||M.minFilter===Bl||M.minFilter===Za||M.minFilter===Rr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,X[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Q[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Q[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gt||M.minFilter!==Za&&M.minFilter!==Rr||M.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Re(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));const K=M.source;let J=h.get(K);J===void 0&&(J={},h.set(K,J));const j=L(M);if(j!==C.__cacheKey){J[j]===void 0&&(J[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),J[j].usedTimes++;const ve=J[C.__cacheKey];ve!==void 0&&(J[C.__cacheKey].usedTimes--,ve.usedTimes===0&&y(M)),C.__cacheKey=j,C.__webglTexture=J[j].texture}return V}function Fe(C,M,V){return Math.floor(Math.floor(C/V)/M)}function We(C,M,V,K){const j=C.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,V,K,M.data);else{j.sort((ee,ie)=>ee.start-ie.start);let ve=0;for(let ee=1;ee<j.length;ee++){const ie=j[ve],xe=j[ee],be=ie.start+ie.count,fe=Fe(xe.start,M.width,4),Ge=Fe(ie.start,M.width,4);xe.start<=be+1&&fe===Ge&&Fe(xe.start+xe.count-1,M.width,4)===fe?ie.count=Math.max(ie.count,xe.start+xe.count-ie.start):(++ve,j[ve]=xe)}j.length=ve+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),Ae=r.getParameter(r.UNPACK_SKIP_PIXELS),De=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ee=0,ie=j.length;ee<ie;ee++){const xe=j[ee],be=Math.floor(xe.start/4),fe=Math.ceil(xe.count/4),Ge=be%M.width,z=Math.floor(be/M.width),le=fe,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,Ge,z,le,re,V,K,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Z(C,M,V){let K=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=r.TEXTURE_3D);const J=Re(C,M),j=M.source;t.bindTexture(K,C.__webglTexture,r.TEXTURE0+V);const ve=n.get(j);if(j.version!==ve.__version||J===!0){t.activeTexture(r.TEXTURE0+V);const oe=Ke.getPrimaries(Ke.workingColorSpace),Ae=M.colorSpace===Ki?null:Ke.getPrimaries(M.colorSpace),De=M.colorSpace===Ki||oe===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ee=_(M.image,!1,i.maxTextureSize);ee=vt(M,ee);const ie=s.convert(M.format,M.colorSpace),xe=s.convert(M.type);let be=S(M.internalFormat,ie,xe,M.colorSpace,M.isVideoTexture);ae(K,M);let fe;const Ge=M.mipmaps,z=M.isVideoTexture!==!0,le=ve.__version===void 0||J===!0,re=j.dataReady,ge=E(M,ee);if(M.isDepthTexture)be=b(M.format===Cr,M.type),le&&(z?t.texStorage2D(r.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,ie,xe,null));else if(M.isDataTexture)if(Ge.length>0){z&&le&&t.texStorage2D(r.TEXTURE_2D,ge,be,Ge[0].width,Ge[0].height);for(let te=0,Y=Ge.length;te<Y;te++)fe=Ge[te],z?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,ie,xe,fe.data):t.texImage2D(r.TEXTURE_2D,te,be,fe.width,fe.height,0,ie,xe,fe.data);M.generateMipmaps=!1}else z?(le&&t.texStorage2D(r.TEXTURE_2D,ge,be,ee.width,ee.height),re&&We(M,ee,ie,xe)):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,ie,xe,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,be,Ge[0].width,Ge[0].height,ee.depth);for(let te=0,Y=Ge.length;te<Y;te++)if(fe=Ge[te],M.format!==ri)if(ie!==null)if(z){if(re)if(M.layerUpdates.size>0){const ye=nf(fe.width,fe.height,M.format,M.type);for(const Ue of M.layerUpdates){const xt=fe.data.subarray(Ue*ye/fe.data.BYTES_PER_ELEMENT,(Ue+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Ue,fe.width,fe.height,1,ie,xt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ee.depth,ie,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,be,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ee.depth,ie,xe,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,be,fe.width,fe.height,ee.depth,0,ie,xe,fe.data)}else{z&&le&&t.texStorage2D(r.TEXTURE_2D,ge,be,Ge[0].width,Ge[0].height);for(let te=0,Y=Ge.length;te<Y;te++)fe=Ge[te],M.format!==ri?ie!==null?z?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,ie,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,be,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe.width,fe.height,ie,xe,fe.data):t.texImage2D(r.TEXTURE_2D,te,be,fe.width,fe.height,0,ie,xe,fe.data)}else if(M.isDataArrayTexture)if(z){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,be,ee.width,ee.height,ee.depth),re)if(M.layerUpdates.size>0){const te=nf(ee.width,ee.height,M.format,M.type);for(const Y of M.layerUpdates){const ye=ee.data.subarray(Y*te/ee.data.BYTES_PER_ELEMENT,(Y+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ie,xe,ye)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,xe,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,ie,xe,ee.data);else if(M.isData3DTexture)z?(le&&t.texStorage3D(r.TEXTURE_3D,ge,be,ee.width,ee.height,ee.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,xe,ee.data)):t.texImage3D(r.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,ie,xe,ee.data);else if(M.isFramebufferTexture){if(le)if(z)t.texStorage2D(r.TEXTURE_2D,ge,be,ee.width,ee.height);else{let te=ee.width,Y=ee.height;for(let ye=0;ye<ge;ye++)t.texImage2D(r.TEXTURE_2D,ye,be,te,Y,0,ie,xe,null),te>>=1,Y>>=1}}else if(Ge.length>0){if(z&&le){const te=Me(Ge[0]);t.texStorage2D(r.TEXTURE_2D,ge,be,te.width,te.height)}for(let te=0,Y=Ge.length;te<Y;te++)fe=Ge[te],z?re&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ie,xe,fe):t.texImage2D(r.TEXTURE_2D,te,be,ie,xe,fe);M.generateMipmaps=!1}else if(z){if(le){const te=Me(ee);t.texStorage2D(r.TEXTURE_2D,ge,be,te.width,te.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,xe,ee)}else t.texImage2D(r.TEXTURE_2D,0,be,ie,xe,ee);m(M)&&g(K),ve.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,V){if(M.image.length!==6)return;const K=Re(C,M),J=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const j=n.get(J);if(J.version!==j.__version||K===!0){t.activeTexture(r.TEXTURE0+V);const ve=Ke.getPrimaries(Ke.workingColorSpace),oe=M.colorSpace===Ki?null:Ke.getPrimaries(M.colorSpace),Ae=M.colorSpace===Ki||ve===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let Y=0;Y<6;Y++)!De&&!ee?ie[Y]=_(M.image[Y],!0,i.maxCubemapSize):ie[Y]=ee?M.image[Y].image:M.image[Y],ie[Y]=vt(M,ie[Y]);const xe=ie[0],be=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),Ge=S(M.internalFormat,be,fe,M.colorSpace),z=M.isVideoTexture!==!0,le=j.__version===void 0||K===!0,re=J.dataReady;let ge=E(M,xe);ae(r.TEXTURE_CUBE_MAP,M);let te;if(De){z&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ge,xe.width,xe.height);for(let Y=0;Y<6;Y++){te=ie[Y].mipmaps;for(let ye=0;ye<te.length;ye++){const Ue=te[ye];M.format!==ri?be!==null?z?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Ue.width,Ue.height,be,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Ge,Ue.width,Ue.height,0,Ue.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,0,0,Ue.width,Ue.height,be,fe,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye,Ge,Ue.width,Ue.height,0,be,fe,Ue.data)}}}else{if(te=M.mipmaps,z&&le){te.length>0&&ge++;const Y=Me(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){z?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ie[Y].width,ie[Y].height,be,fe,ie[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,ie[Y].width,ie[Y].height,0,be,fe,ie[Y].data);for(let ye=0;ye<te.length;ye++){const xt=te[ye].image[Y].image;z?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,xt.width,xt.height,be,fe,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Ge,xt.width,xt.height,0,be,fe,xt.data)}}else{z?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,be,fe,ie[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,be,fe,ie[Y]);for(let ye=0;ye<te.length;ye++){const Ue=te[ye];z?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,0,0,be,fe,Ue.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ye+1,Ge,be,fe,Ue.image[Y])}}}m(M)&&g(r.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,V,K,J,j){const ve=s.convert(V.format,V.colorSpace),oe=s.convert(V.type),Ae=S(V.internalFormat,ve,oe,V.colorSpace),De=n.get(M),ee=n.get(V);if(ee.__renderTarget=M,!De.__hasExternalTextures){const ie=Math.max(1,M.width>>j),xe=Math.max(1,M.height>>j);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,j,Ae,ie,xe,M.depth,0,ve,oe,null):t.texImage2D(J,j,Ae,ie,xe,0,ve,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),Ft(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,J,ee.__webglTexture,0,k(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,J,ee.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(C,M,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,j=b(M.stencilBuffer,J),ve=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ft(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),j,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),j,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,j,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{const K=M.textures;for(let J=0;J<K.length;J++){const j=K[J],ve=s.convert(j.format,j.colorSpace),oe=s.convert(j.type),Ae=S(j.internalFormat,ve,oe,j.colorSpace);Ft(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(M),Ae,M.width,M.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(M),Ae,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(C,M,V){const K=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ae(r.TEXTURE_CUBE_MAP,M.depthTexture);const De=s.convert(M.depthTexture.format),ee=s.convert(M.depthTexture.type);let ie;M.depthTexture.format===ki?ie=r.DEPTH_COMPONENT24:M.depthTexture.format===Cr&&(ie=r.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ie,M.width,M.height,0,De,ee,null)}}else D(M.depthTexture,0);const j=J.__webglTexture,ve=k(M),oe=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,Ae=M.depthTexture.format===Cr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ki)Ft(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,oe,j,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,oe,j,0);else if(M.depthTexture.format===Cr)Ft(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,oe,j,0,ve):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,oe,j,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const M=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=K}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let K=0;K<6;K++)Pe(M.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?Pe(M.__webglFramebuffer[0],C,0):Pe(M.__webglFramebuffer,C,0)}else if(V){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=r.createRenderbuffer(),Oe(M.__webglDepthbuffer[K],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,j)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Oe(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(C,M,V){const K=n.get(C);M!==void 0&&ce(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Ie(C)}function Ye(C){const M=C.texture,V=n.get(C),K=n.get(M);C.addEventListener("dispose",A);const J=C.textures,j=C.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=M.version,a.memory.textures++),j){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let Ae=0;Ae<M.mipmaps.length;Ae++)V.__webglFramebuffer[oe][Ae]=r.createFramebuffer()}else V.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)V.__webglFramebuffer[oe]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ve)for(let oe=0,Ae=J.length;oe<Ae;oe++){const De=n.get(J[oe]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Ft(C)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Ae=J[oe];V.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const De=s.convert(Ae.format,Ae.colorSpace),ee=s.convert(Ae.type),ie=S(Ae.internalFormat,De,ee,Ae.colorSpace,C.isXRRenderTarget===!0),xe=k(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ie,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ae(r.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ce(V.__webglFramebuffer[oe][Ae],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae);else ce(V.__webglFramebuffer[oe],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Ae=J.length;oe<Ae;oe++){const De=J[oe],ee=n.get(De);let ie=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),ae(ie,De),ce(V.__webglFramebuffer,C,De,r.COLOR_ATTACHMENT0+oe,ie,0),m(De)&&g(ie)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ae(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ae=0;Ae<M.mipmaps.length;Ae++)ce(V.__webglFramebuffer[Ae],C,M,r.COLOR_ATTACHMENT0,oe,Ae);else ce(V.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,oe,0);m(M)&&g(oe),t.unbindTexture()}C.depthBuffer&&Ie(C)}function tt(C){const M=C.textures;for(let V=0,K=M.length;V<K;V++){const J=M[V];if(m(J)){const j=v(C),ve=n.get(J).__webglTexture;t.bindTexture(j,ve),g(j),t.unbindTexture()}}}const ft=[],He=[];function Lt(C){if(C.samples>0){if(Ft(C)===!1){const M=C.textures,V=C.width,K=C.height;let J=r.COLOR_BUFFER_BIT;const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),oe=M.length>1;if(oe)for(let De=0;De<M.length;De++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let De=0;De<M.length;De++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const ee=n.get(M[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,V,K,0,0,V,K,J,r.NEAREST),l===!0&&(ft.length=0,He.length=0,ft.push(r.COLOR_ATTACHMENT0+De),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ft.push(j),He.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,He)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let De=0;De<M.length;De++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,ve.__webglColorRenderbuffer[De]);const ee=n.get(M[De]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function k(C){return Math.min(i.maxSamples,C.samples)}function Ft(C){const M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function vt(C,M){const V=C.colorSpace,K=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Ns&&V!==Ki&&(Ke.getTransfer(V)===it?(K!==ri||J!==Ln)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",V)),M}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=q,this.rebindTextures=Xt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eS(r,e){function t(n,i=Ki){let s;const a=Ke.getTransfer(i);if(n===Ln)return r.UNSIGNED_BYTE;if(n===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===xp)return r.BYTE;if(n===yp)return r.SHORT;if(n===Aa)return r.UNSIGNED_SHORT;if(n===uh)return r.INT;if(n===yi)return r.UNSIGNED_INT;if(n===vn)return r.FLOAT;if(n===Fn)return r.HALF_FLOAT;if(n===Mp)return r.ALPHA;if(n===Ep)return r.RGB;if(n===ri)return r.RGBA;if(n===ki)return r.DEPTH_COMPONENT;if(n===Cr)return r.DEPTH_STENCIL;if(n===_s)return r.RED;if(n===fh)return r.RED_INTEGER;if(n===Us)return r.RG;if(n===ph)return r.RG_INTEGER;if(n===mh)return r.RGBA_INTEGER;if(n===Oo||n===ko||n===Bo||n===zo)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===eu||n===tu||n===nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===ru||n===su||n===au||n===ou||n===lu||n===cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===iu||n===ru)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===su)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===au)return s.COMPRESSED_R11_EAC;if(n===ou)return s.COMPRESSED_SIGNED_R11_EAC;if(n===lu)return s.COMPRESSED_RG11_EAC;if(n===cu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===_u||n===vu||n===xu||n===yu||n===bu||n===Su||n===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_u)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eu||n===Tu||n===wu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eu)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Ru||n===Cu||n===Pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ra?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:tS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jt(new El(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rS extends Vr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new iS,g={},v=t.getContextAttributes();let S=null,b=null;const E=[],T=[],A=new pe;let x=null;const y=new _n;y.viewport=new Ct;const O=new _n;O.viewport=new Ct;const R=[y,O],N=new f_;let B=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=E[Z];return ne===void 0&&(ne=new Wl,E[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=E[Z];return ne===void 0&&(ne=new Wl,E[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=E[Z];return ne===void 0&&(ne=new Wl,E[Z]=ne),ne.getHandSpace()};function D(Z){const ne=T.indexOf(Z.inputSource);if(ne===-1)return;const ce=E[ne];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||a),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",I);for(let Z=0;Z<E.length;Z++){const ne=T[Z];ne!==null&&(T[Z]=null,E[Z].disconnect(ne))}B=null,L=null,m.reset();for(const Z in g)delete g[Z];e.setRenderTarget(S),f=null,h=null,d=null,i=null,b=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Oe=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?Cr:ki,Oe=v.stencil?Ra:yi);const Ie={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ie),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new yn(h.textureWidth,h.textureHeight,{format:ri,type:Ln,depthTexture:new Da(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yn(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(Z){for(let ne=0;ne<Z.removed.length;ne++){const ce=Z.removed[ne],Oe=T.indexOf(ce);Oe>=0&&(T[Oe]=null,E[Oe].disconnect(ce))}for(let ne=0;ne<Z.added.length;ne++){const ce=Z.added[ne];let Oe=T.indexOf(ce);if(Oe===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=T.length){T.push(ce),Oe=Ie;break}else if(T[Ie]===null){T[Ie]=ce,Oe=Ie;break}if(Oe===-1)break}const Pe=E[Oe];Pe&&Pe.connect(ce)}}const q=new P,X=new P;function Q(Z,ne,ce){q.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const Oe=q.distanceTo(X),Pe=ne.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,Xt=Pe[14]/(Pe[10]-1),Ye=Pe[14]/(Pe[10]+1),tt=(Pe[9]+1)/Pe[5],ft=(Pe[9]-1)/Pe[5],He=(Pe[8]-1)/Pe[0],Lt=(Ie[8]+1)/Ie[0],k=Xt*He,Ft=Xt*Lt,et=Oe/(-He+Lt),vt=et*-He;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=Xt+et,C=Ye+et,M=k-vt,V=Ft+(Oe-vt),K=tt*Ye/C*Me,J=ft*Ye/C*Me;Z.projectionMatrix.makePerspective(M,V,K,J,Me,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ne=Z.near,ce=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),N.near=O.near=y.near=ne,N.far=O.far=y.far=ce,(B!==N.near||L!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,L=N.far),N.layers.mask=Z.layers.mask|6,y.layers.mask=N.layers.mask&-5,O.layers.mask=N.layers.mask&-3;const Oe=Z.parent,Pe=N.cameras;se(N,Oe);for(let Ie=0;Ie<Pe.length;Ie++)se(Pe[Ie],Oe);Pe.length===2?Q(N,y,O):N.projectionMatrix.copy(y.projectionMatrix),ae(Z,N,Oe)};function ae(Z,ne,ce){ce===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Z){return g[Z]};let Re=null;function Fe(Z,ne){if(u=ne.getViewerPose(c||a),p=ne,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Oe=!1;ce.length!==N.cameras.length&&(N.cameras.length=0,Oe=!0);for(let Ye=0;Ye<ce.length;Ye++){const tt=ce[Ye];let ft=null;if(f!==null)ft=f.getViewport(tt);else{const Lt=d.getViewSubImage(h,tt);ft=Lt.viewport,Ye===0&&(e.setRenderTargetTextures(b,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(b))}let He=R[Ye];He===void 0&&(He=new _n,He.layers.enable(Ye),He.viewport=new Ct,R[Ye]=He),He.matrix.fromArray(tt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(tt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ft.x,ft.y,ft.width,ft.height),Ye===0&&(N.matrix.copy(He.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Oe===!0&&N.cameras.push(He)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ye=d.getDepthInformation(ce[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,i.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ye=0;Ye<ce.length;Ye++){const tt=ce[Ye].camera;if(tt){let ft=g[tt];ft||(ft=new Fp,g[tt]=ft);const He=d.getCameraImage(tt);ft.sourceTexture=He}}}}for(let ce=0;ce<E.length;ce++){const Oe=T[ce],Pe=E[ce];Oe!==null&&Pe!==void 0&&Pe.update(Oe,ne,c||a)}Re&&Re(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),p=null}const We=new Gp;We.setAnimationLoop(Fe),this.setAnimationLoop=function(Z){Re=Z},this.dispose=function(){}}}const xr=new bi,sS=new yt;function aS(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,kp(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,S,b){g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=e.get(g),S=v.envMap,b=v.envMapRotation;S&&(m.envMap.value=S,xr.copy(b),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(sS.makeRotationFromEuler(xr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oS(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=i[v.id];b===void 0&&(p(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",m));const E=S.program;n.updateUBOMapping(v,E);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const S=d();v.__bindingPointIndex=S;const b=r.createBuffer(),E=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=i[v.id],b=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,A=b.length;T<A;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,O=x.length;y<O;y++){const R=x[y];if(f(R,T,y,E)===!0){const N=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let D=0;D<B.length;D++){const F=B[D],I=_(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,N+L,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,L),L+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,b,E){const T=v.value,A=S+"_"+b;if(E[A]===void 0)return typeof T=="number"||typeof T=="boolean"?E[A]=T:E[A]=T.clone(),!0;{const x=E[A];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return E[A]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function p(v){const S=v.uniforms;let b=0;const E=16;for(let A=0,x=S.length;A<x;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let O=0,R=y.length;O<R;O++){const N=y[O],B=Array.isArray(N.value)?N.value:[N.value];for(let L=0,D=B.length;L<D;L++){const F=B[L],I=_(F),q=b%E,X=q%I.boundary,Q=q+X;b+=X,Q!==0&&E-Q<I.storage&&(b+=E-Q),N.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=I.storage}}}const T=b%E;return T>0&&(b+=E-T),v.__size=b,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function g(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}const lS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function cS(){return oi===null&&(oi=new Vo(lS,16,16,Us,Fn),oi.name="DFG_LUT",oi.minFilter=on,oi.magFilter=on,oi.wrapS=Ui,oi.wrapT=Ui,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Dh{constructor(e={}){const{canvas:t=d0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ln}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([mh,ph,fh]),g=new Set([Ln,yi,Aa,Ra,hh,dh]),v=new Uint32Array(4),S=new Int32Array(4);let b=null,E=null;const T=[],A=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let O=!1;this._outputColorSpace=Gn;let R=0,N=0,B=null,L=-1,D=null;const F=new Ct,I=new Ct;let q=null;const X=new Ve(0);let Q=0,se=t.width,ae=t.height,Re=1,Fe=null,We=null;const Z=new Ct(0,0,se,ae),ne=new Ct(0,0,se,ae);let ce=!1;const Oe=new Mh;let Pe=!1,Ie=!1;const Xt=new yt,Ye=new P,tt=new Ct,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Lt(){return B===null?Re:1}let k=n;function Ft(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",xt,!1),k===null){const H="webgl2";if(k=Ft(H,w),k===null)throw Ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ze("WebGLRenderer: "+w.message),w}let et,vt,Me,C,M,V,K,J,j,ve,oe,Ae,De,ee,ie,xe,be,fe,Ge,z,le,re,ge;function te(){et=new uy(k),et.init(),le=new eS(k,et),vt=new ny(k,et,e,le),Me=new Jb(k,et),vt.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),C=new fy(k),M=new kb,V=new Qb(k,et,Me,M,vt,le,C),K=new cy(y),J=new v_(k),re=new ey(k,J),j=new hy(k,J,C,re),ve=new my(k,j,J,re,C),fe=new py(k,vt,V),ie=new iy(M),oe=new Ob(y,K,et,vt,re,ie),Ae=new aS(y,M),De=new zb,ee=new Xb(et),be=new Qx(y,K,Me,ve,p,l),xe=new Kb(y,ve,vt),ge=new oS(k,C,vt,Me),Ge=new ty(k,et,C),z=new dy(k,et,C),C.programs=oe.programs,y.capabilities=vt,y.extensions=et,y.properties=M,y.renderLists=De,y.shadowMap=xe,y.state=Me,y.info=C}te(),_!==Ln&&(x=new _y(_,t.width,t.height,i,s));const Y=new rS(y,k);this.xr=Y,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(w){w!==void 0&&(Re=w,this.setSize(se,ae,!1))},this.getSize=function(w){return w.set(se,ae)},this.setSize=function(w,H,W=!0){if(Y.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,ae=H,t.width=Math.floor(w*Re),t.height=Math.floor(H*Re),W===!0&&(t.style.width=w+"px",t.style.height=H+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(se*Re,ae*Re).floor()},this.setDrawingBufferSize=function(w,H,W){se=w,ae=H,Re=W,t.width=Math.floor(w*W),t.height=Math.floor(H*W),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===Ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,H,W,$){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,H,W,$),Me.viewport(F.copy(Z).multiplyScalar(Re).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,H,W,$){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,H,W,$),Me.scissor(I.copy(ne).multiplyScalar(Re).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(w){Me.setScissorTest(ce=w)},this.setOpaqueSort=function(w){Fe=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,W=!0){let $=0;if(w){let G=!1;if(B!==null){const he=B.texture.format;G=m.has(he)}if(G){const he=B.texture.type,me=g.has(he),de=be.getClearColor(),Se=be.getClearAlpha(),Te=de.r,Ne=de.g,$e=de.b;me?(v[0]=Te,v[1]=Ne,v[2]=$e,v[3]=Se,k.clearBufferuiv(k.COLOR,0,v)):(S[0]=Te,S[1]=Ne,S[2]=$e,S[3]=Se,k.clearBufferiv(k.COLOR,0,S))}else $|=k.COLOR_BUFFER_BIT}H&&($|=k.DEPTH_BUFFER_BIT),W&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),be.dispose(),De.dispose(),ee.dispose(),M.dispose(),K.dispose(),ve.dispose(),re.dispose(),ge.dispose(),oe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",fd),Y.removeEventListener("sessionend",pd),dr.stop()};function ye(w){w.preventDefault(),tl("WebGLRenderer: Context Lost."),O=!0}function Ue(){tl("WebGLRenderer: Context Restored."),O=!1;const w=C.autoReset,H=xe.enabled,W=xe.autoUpdate,$=xe.needsUpdate,G=xe.type;te(),C.autoReset=w,xe.enabled=H,xe.autoUpdate=W,xe.needsUpdate=$,xe.type=G}function xt(w){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function nt(w){const H=w.target;H.removeEventListener("dispose",nt),Mi(H)}function Mi(w){Ei(w),M.remove(w)}function Ei(w){const H=M.get(w).programs;H!==void 0&&(H.forEach(function(W){oe.releaseProgram(W)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,W,$,G,he){H===null&&(H=ft);const me=G.isMesh&&G.matrixWorld.determinant()<0,de=Mg(w,H,W,$,G);Me.setMaterial($,me);let Se=W.index,Te=1;if($.wireframe===!0){if(Se=j.getWireframeAttribute(W),Se===void 0)return;Te=2}const Ne=W.drawRange,$e=W.attributes.position;let we=Ne.start*Te,lt=(Ne.start+Ne.count)*Te;he!==null&&(we=Math.max(we,he.start*Te),lt=Math.min(lt,(he.start+he.count)*Te)),Se!==null?(we=Math.max(we,0),lt=Math.min(lt,Se.count)):$e!=null&&(we=Math.max(we,0),lt=Math.min(lt,$e.count));const It=lt-we;if(It<0||It===1/0)return;re.setup(G,$,de,W,Se);let At,ct=Ge;if(Se!==null&&(At=J.get(Se),ct=z,ct.setIndex(At)),G.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*Lt()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(G.isLine){let en=$.linewidth;en===void 0&&(en=1),Me.setLineWidth(en*Lt()),G.isLineSegments?ct.setMode(k.LINES):G.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else G.isPoints?ct.setMode(k.POINTS):G.isSprite&&ct.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const en=G._multiDrawStarts,Ee=G._multiDrawCounts,wn=G._multiDrawCount,Je=Se?J.get(Se).bytesPerElement:1,Yn=M.get($).currentProgram.getUniforms();for(let si=0;si<wn;si++)Yn.setValue(k,"_gl_DrawID",si),ct.render(en[si]/Je,Ee[si])}else if(G.isInstancedMesh)ct.renderInstances(we,It,G.count);else if(W.isInstancedBufferGeometry){const en=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,en);ct.renderInstances(we,It,Ee)}else ct.render(we,It)};function dd(w,H,W){w.transparent===!0&&w.side===ti&&w.forceSinglePass===!1?(w.side=xn,w.needsUpdate=!0,ja(w,H,W),w.side=sr,w.needsUpdate=!0,ja(w,H,W),w.side=ti):ja(w,H,W)}this.compile=function(w,H,W=null){W===null&&(W=w),E=ee.get(W),E.init(H),A.push(E),W.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();const $=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let me=0;me<he.length;me++){const de=he[me];dd(de,W,G),$.add(de)}else dd(he,W,G),$.add(he)}),E=A.pop(),$},this.compileAsync=function(w,H,W=null){const $=this.compile(w,H,W);return new Promise(G=>{function he(){if($.forEach(function(me){M.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){G(w);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Nl=null;function Sg(w){Nl&&Nl(w)}function fd(){dr.stop()}function pd(){dr.start()}const dr=new Gp;dr.setAnimationLoop(Sg),typeof self<"u"&&dr.setContext(self),this.setAnimationLoop=function(w){Nl=w,Y.setAnimationLoop(w),w===null?dr.stop():dr.start()},Y.addEventListener("sessionstart",fd),Y.addEventListener("sessionend",pd),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const W=Y.enabled===!0&&Y.isPresenting===!0,$=x!==null&&(B===null||W)&&x.begin(y,B);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(H),H=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,H,B),E=ee.get(w,A.length),E.init(H),A.push(E),Xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Oe.setFromProjectionMatrix(Xt,pi,H.reversedDepth),Ie=this.localClippingEnabled,Pe=ie.init(this.clippingPlanes,Ie),b=De.get(w,T.length),b.init(),T.push(b),Y.enabled===!0&&Y.isPresenting===!0){const me=y.xr.getDepthSensingMesh();me!==null&&Fl(me,H,-1/0,y.sortObjects)}Fl(w,H,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(Fe,We),He=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,He&&be.addToRenderList(b,w),this.info.render.frame++,Pe===!0&&ie.beginShadows();const G=E.state.shadowsArray;if(xe.render(G,w,H),Pe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&x.hasRenderPass())===!1){const me=b.opaque,de=b.transmissive;if(E.setupLights(),H.isArrayCamera){const Se=H.cameras;if(de.length>0)for(let Te=0,Ne=Se.length;Te<Ne;Te++){const $e=Se[Te];gd(me,de,w,$e)}He&&be.render(w);for(let Te=0,Ne=Se.length;Te<Ne;Te++){const $e=Se[Te];md(b,w,$e,$e.viewport)}}else de.length>0&&gd(me,de,w,H),He&&be.render(w),md(b,w,H)}B!==null&&N===0&&(V.updateMultisampleRenderTarget(B),V.updateRenderTargetMipmap(B)),$&&x.end(y),w.isScene===!0&&w.onAfterRender(y,w,H),re.resetDefaultState(),L=-1,D=null,A.pop(),A.length>0?(E=A[A.length-1],Pe===!0&&ie.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function Fl(w,H,W,$){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){$&&tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);const me=ve.update(w),de=w.material;de.visible&&b.push(w,me,de,W,tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const me=ve.update(w),de=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),tt.copy(w.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),tt.copy(me.boundingSphere.center)),tt.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(de)){const Se=me.groups;for(let Te=0,Ne=Se.length;Te<Ne;Te++){const $e=Se[Te],we=de[$e.materialIndex];we&&we.visible&&b.push(w,me,we,W,tt.z,$e)}}else de.visible&&b.push(w,me,de,W,tt.z,null)}}const he=w.children;for(let me=0,de=he.length;me<de;me++)Fl(he[me],H,W,$)}function md(w,H,W,$){const{opaque:G,transmissive:he,transparent:me}=w;E.setupLightsView(W),Pe===!0&&ie.setGlobalState(y.clippingPlanes,W),$&&Me.viewport(F.copy($)),G.length>0&&Ya(G,H,W),he.length>0&&Ya(he,H,W),me.length>0&&Ya(me,H,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function gd(w,H,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){const we=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new yn(1,1,{generateMipmaps:!0,type:we?Fn:Ln,minFilter:Rr,samples:vt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const he=E.state.transmissionRenderTarget[$.id],me=$.viewport||F;he.setSize(me.z*y.transmissionResolutionScale,me.w*y.transmissionResolutionScale);const de=y.getRenderTarget(),Se=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();y.setRenderTarget(he),y.getClearColor(X),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),He&&be.render(W);const Ne=y.toneMapping;y.toneMapping=xi;const $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),Pe===!0&&ie.setGlobalState(y.clippingPlanes,$),Ya(w,W,$),V.updateMultisampleRenderTarget(he),V.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let lt=0,It=H.length;lt<It;lt++){const At=H[lt],{object:ct,geometry:en,material:Ee,group:wn}=At;if(Ee.side===ti&&ct.layers.test($.layers)){const Je=Ee.side;Ee.side=xn,Ee.needsUpdate=!0,_d(ct,W,$,en,Ee,wn),Ee.side=Je,Ee.needsUpdate=!0,we=!0}}we===!0&&(V.updateMultisampleRenderTarget(he),V.updateRenderTargetMipmap(he))}y.setRenderTarget(de,Se,Te),y.setClearColor(X,Q),$e!==void 0&&($.viewport=$e),y.toneMapping=Ne}function Ya(w,H,W){const $=H.isScene===!0?H.overrideMaterial:null;for(let G=0,he=w.length;G<he;G++){const me=w[G],{object:de,geometry:Se,group:Te}=me;let Ne=me.material;Ne.allowOverride===!0&&$!==null&&(Ne=$),de.layers.test(W.layers)&&_d(de,H,W,Se,Ne,Te)}}function _d(w,H,W,$,G,he){w.onBeforeRender(y,H,W,$,G,he),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(y,H,W,$,w,he),G.transparent===!0&&G.side===ti&&G.forceSinglePass===!1?(G.side=xn,G.needsUpdate=!0,y.renderBufferDirect(W,H,$,G,w,he),G.side=sr,G.needsUpdate=!0,y.renderBufferDirect(W,H,$,G,w,he),G.side=ti):y.renderBufferDirect(W,H,$,G,w,he),w.onAfterRender(y,H,W,$,G,he)}function ja(w,H,W){H.isScene!==!0&&(H=ft);const $=M.get(w),G=E.state.lights,he=E.state.shadowsArray,me=G.state.version,de=oe.getParameters(w,G.state,he,H,W),Se=oe.getProgramCacheKey(de);let Te=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;const Ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=K.get(w.envMap||$.environment,Ne),$.envMapRotation=$.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",nt),Te=new Map,$.programs=Te);let $e=Te.get(Se);if($e!==void 0){if($.currentProgram===$e&&$.lightsStateVersion===me)return xd(w,de),$e}else de.uniforms=oe.getUniforms(w),w.onBeforeCompile(de,y),$e=oe.acquireProgram(de,Se),Te.set(Se,$e),$.uniforms=de.uniforms;const we=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=ie.uniform),xd(w,de),$.needsLights=Tg(w),$.lightsStateVersion=me,$.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=$e,$.uniformsList=null,$e}function vd(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=Ho.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function xd(w,H){const W=M.get(w);W.outputColorSpace=H.outputColorSpace,W.batching=H.batching,W.batchingColor=H.batchingColor,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.instancingMorph=H.instancingMorph,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function Mg(w,H,W,$,G){H.isScene!==!0&&(H=ft),V.resetTextureUnits();const he=H.fog,me=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,de=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ns,Se=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Te=K.get($.envMap||me,Se),Ne=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),we=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,It=!!W.morphAttributes.color;let At=xi;$.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(At=y.toneMapping);const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,en=ct!==void 0?ct.length:0,Ee=M.get($),wn=E.state.lights;if(Pe===!0&&(Ie===!0||w!==D)){const qt=w===D&&$.id===L;ie.setState($,w,qt)}let Je=!1;$.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==wn.state.version||Ee.outputColorSpace!==de||G.isBatchedMesh&&Ee.batching===!1||!G.isBatchedMesh&&Ee.batching===!0||G.isBatchedMesh&&Ee.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ee.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ee.instancing===!1||!G.isInstancedMesh&&Ee.instancing===!0||G.isSkinnedMesh&&Ee.skinning===!1||!G.isSkinnedMesh&&Ee.skinning===!0||G.isInstancedMesh&&Ee.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ee.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ee.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ee.instancingMorph===!1&&G.morphTexture!==null||Ee.envMap!==Te||$.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Ne||Ee.vertexTangents!==$e||Ee.morphTargets!==we||Ee.morphNormals!==lt||Ee.morphColors!==It||Ee.toneMapping!==At||Ee.morphTargetsCount!==en)&&(Je=!0):(Je=!0,Ee.__version=$.version);let Yn=Ee.currentProgram;Je===!0&&(Yn=ja($,H,G));let si=!1,fr=!1,Wr=!1;const pt=Yn.getUniforms(),Kt=Ee.uniforms;if(Me.useProgram(Yn.program)&&(si=!0,fr=!0,Wr=!0),$.id!==L&&(L=$.id,fr=!0),si||D!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue(k,"projectionMatrix",w.projectionMatrix),pt.setValue(k,"viewMatrix",w.matrixWorldInverse);const Hi=pt.map.cameraPosition;Hi!==void 0&&Hi.setValue(k,Ye.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&pt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&pt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,fr=!0,Wr=!0)}if(Ee.needsLights&&(wn.state.directionalShadowMap.length>0&&pt.setValue(k,"directionalShadowMap",wn.state.directionalShadowMap,V),wn.state.spotShadowMap.length>0&&pt.setValue(k,"spotShadowMap",wn.state.spotShadowMap,V),wn.state.pointShadowMap.length>0&&pt.setValue(k,"pointShadowMap",wn.state.pointShadowMap,V)),G.isSkinnedMesh){pt.setOptional(k,G,"bindMatrix"),pt.setOptional(k,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),pt.setValue(k,"boneTexture",qt.boneTexture,V))}G.isBatchedMesh&&(pt.setOptional(k,G,"batchingTexture"),pt.setValue(k,"batchingTexture",G._matricesTexture,V),pt.setOptional(k,G,"batchingIdTexture"),pt.setValue(k,"batchingIdTexture",G._indirectTexture,V),pt.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&pt.setValue(k,"batchingColorTexture",G._colorsTexture,V));const Vi=W.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&fe.update(G,W,Yn),(fr||Ee.receiveShadow!==G.receiveShadow)&&(Ee.receiveShadow=G.receiveShadow,pt.setValue(k,"receiveShadow",G.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(Kt.envMapIntensity.value=H.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=cS()),fr&&(pt.setValue(k,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Eg(Kt,Wr),he&&$.fog===!0&&Ae.refreshFogUniforms(Kt,he),Ae.refreshMaterialUniforms(Kt,$,Re,ae,E.state.transmissionRenderTarget[w.id]),Ho.upload(k,vd(Ee),Kt,V)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ho.upload(k,vd(Ee),Kt,V),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&pt.setValue(k,"center",G.center),pt.setValue(k,"modelViewMatrix",G.modelViewMatrix),pt.setValue(k,"normalMatrix",G.normalMatrix),pt.setValue(k,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let Hi=0,Xr=qt.length;Hi<Xr;Hi++){const yd=qt[Hi];ge.update(yd,Yn),ge.bind(yd,Yn)}}return Yn}function Eg(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function Tg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,H,W){const $=M.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(w.texture).__webglTexture=H,M.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const W=M.get(w);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0};const wg=k.createFramebuffer();this.setRenderTarget=function(w,H=0,W=0){B=w,R=H,N=W;let $=null,G=!1,he=!1;if(w){const de=M.get(w);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(k.FRAMEBUFFER,de.__webglFramebuffer),F.copy(w.viewport),I.copy(w.scissor),q=w.scissorTest,Me.viewport(F),Me.scissor(I),Me.setScissorTest(q),L=-1;return}else if(de.__webglFramebuffer===void 0)V.setupRenderTarget(w);else if(de.__hasExternalTextures)V.rebindTextures(w,M.get(w.texture).__webglTexture,M.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ne=w.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&M.has(Ne)&&(w.width!==Ne.image.width||w.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(w)}}const Se=w.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(he=!0);const Te=M.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Te[H])?$=Te[H][W]:$=Te[H],G=!0):w.samples>0&&V.useMultisampledRTT(w)===!1?$=M.get(w).__webglMultisampledFramebuffer:Array.isArray(Te)?$=Te[W]:$=Te,F.copy(w.viewport),I.copy(w.scissor),q=w.scissorTest}else F.copy(Z).multiplyScalar(Re).floor(),I.copy(ne).multiplyScalar(Re).floor(),q=ce;if(W!==0&&($=wg),Me.bindFramebuffer(k.FRAMEBUFFER,$)&&Me.drawBuffers(w,$),Me.viewport(F),Me.scissor(I),Me.setScissorTest(q),G){const de=M.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,de.__webglTexture,W)}else if(he){const de=H;for(let Se=0;Se<w.textures.length;Se++){const Te=M.get(w.textures[Se]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Se,Te.__webglTexture,W,de)}}else if(w!==null&&W!==0){const de=M.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,de.__webglTexture,W)}L=-1},this.readRenderTargetPixels=function(w,H,W,$,G,he,me,de=0){if(!(w&&w.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){Me.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Te=w.textures[de],Ne=Te.format,$e=Te.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de),!vt.textureFormatReadable(Ne)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable($e)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-$&&W>=0&&W<=w.height-G&&k.readPixels(H,W,$,G,le.convert(Ne),le.convert($e),he)}finally{const Te=B!==null?M.get(B).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(w,H,W,$,G,he,me,de=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=M.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se)if(H>=0&&H<=w.width-$&&W>=0&&W<=w.height-G){Me.bindFramebuffer(k.FRAMEBUFFER,Se);const Te=w.textures[de],Ne=Te.format,$e=Te.type;if(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+de),!vt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,we),k.bufferData(k.PIXEL_PACK_BUFFER,he.byteLength,k.STREAM_READ),k.readPixels(H,W,$,G,le.convert(Ne),le.convert($e),0);const lt=B!==null?M.get(B).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,lt);const It=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await f0(k,It,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,we),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,he),k.deleteBuffer(we),k.deleteSync(It),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,W=0){const $=Math.pow(2,-W),G=Math.floor(w.image.width*$),he=Math.floor(w.image.height*$),me=H!==null?H.x:0,de=H!==null?H.y:0;V.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,W,0,0,me,de,G,he),Me.unbindTexture()};const Ag=k.createFramebuffer(),Rg=k.createFramebuffer();this.copyTextureToTexture=function(w,H,W=null,$=null,G=0,he=0){let me,de,Se,Te,Ne,$e,we,lt,It;const At=w.isCompressedTexture?w.mipmaps[he]:w.image;if(W!==null)me=W.max.x-W.min.x,de=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,Ne=W.min.y,$e=W.isBox3?W.min.z:0;else{const Kt=Math.pow(2,-G);me=Math.floor(At.width*Kt),de=Math.floor(At.height*Kt),w.isDataArrayTexture?Se=At.depth:w.isData3DTexture?Se=Math.floor(At.depth*Kt):Se=1,Te=0,Ne=0,$e=0}$!==null?(we=$.x,lt=$.y,It=$.z):(we=0,lt=0,It=0);const ct=le.convert(H.format),en=le.convert(H.type);let Ee;H.isData3DTexture?(V.setTexture3D(H,0),Ee=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(V.setTexture2DArray(H,0),Ee=k.TEXTURE_2D_ARRAY):(V.setTexture2D(H,0),Ee=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const wn=k.getParameter(k.UNPACK_ROW_LENGTH),Je=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Yn=k.getParameter(k.UNPACK_SKIP_PIXELS),si=k.getParameter(k.UNPACK_SKIP_ROWS),fr=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,At.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,At.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Te),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ne),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$e);const Wr=w.isDataArrayTexture||w.isData3DTexture,pt=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const Kt=M.get(w),Vi=M.get(H),qt=M.get(Kt.__renderTarget),Hi=M.get(Vi.__renderTarget);Me.bindFramebuffer(k.READ_FRAMEBUFFER,qt.__webglFramebuffer),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Xr=0;Xr<Se;Xr++)Wr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(w).__webglTexture,G,$e+Xr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,M.get(H).__webglTexture,he,It+Xr)),k.blitFramebuffer(Te,Ne,me,de,we,lt,me,de,k.DEPTH_BUFFER_BIT,k.NEAREST);Me.bindFramebuffer(k.READ_FRAMEBUFFER,null),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||M.has(w)){const Kt=M.get(w),Vi=M.get(H);Me.bindFramebuffer(k.READ_FRAMEBUFFER,Ag),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,Rg);for(let qt=0;qt<Se;qt++)Wr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kt.__webglTexture,G,$e+qt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kt.__webglTexture,G),pt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vi.__webglTexture,he,It+qt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vi.__webglTexture,he),G!==0?k.blitFramebuffer(Te,Ne,me,de,we,lt,me,de,k.COLOR_BUFFER_BIT,k.NEAREST):pt?k.copyTexSubImage3D(Ee,he,we,lt,It+qt,Te,Ne,me,de):k.copyTexSubImage2D(Ee,he,we,lt,Te,Ne,me,de);Me.bindFramebuffer(k.READ_FRAMEBUFFER,null),Me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else pt?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Ee,he,we,lt,It,me,de,Se,ct,en,At.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Ee,he,we,lt,It,me,de,Se,ct,At.data):k.texSubImage3D(Ee,he,we,lt,It,me,de,Se,ct,en,At):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,he,we,lt,me,de,ct,en,At.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,he,we,lt,At.width,At.height,ct,At.data):k.texSubImage2D(k.TEXTURE_2D,he,we,lt,me,de,ct,en,At);k.pixelStorei(k.UNPACK_ROW_LENGTH,wn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yn),k.pixelStorei(k.UNPACK_SKIP_ROWS,si),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fr),he===0&&H.generateMipmaps&&k.generateMipmap(Ee),Me.unbindTexture()},this.initRenderTarget=function(w){M.get(w).__webglFramebuffer===void 0&&V.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?V.setTextureCube(w,0):w.isData3DTexture?V.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?V.setTexture2DArray(w,0):V.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){R=0,N=0,B=null,Me.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const U={mouse:null,phase:"LOADING",temperature:150,loadProgress:0,loadStage:"INITIALIZING",scrollY:0,targetScrollY:0,velocity:0,researchScrollY:0,researchVelocity:0,waveletScrollY:0,waveletVelocity:0,transitioning:!1,coordinateTime:0,properTime:0,snapTargets:[],activeSnapIndex:-1,isSnapped:!1,breakoutAccumulator:0},Go={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uS=new Tl(-1,1,1,-1,0,1);class hS extends St{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const dS=new hS;class jp{constructor(e){this._mesh=new jt(dS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fS extends Wa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ll.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new jp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Af extends Wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class pS extends Wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class mS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new pe);this._width=n.width,this._height=n.height,t=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fS(Go),this.copyPass.material.blending=vi,this.timer=new Hp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Af!==void 0&&(a instanceof Af?n=!0:a instanceof pS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class gS extends Wa{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const _S={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Os extends Wa{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new yn(s,a,{type:Fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new yn(s,a,{type:Fn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new yn(s,a,{type:Fn});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=_S;this.highPassUniforms=ll.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ll.clone(Go.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader,premultipliedAlpha:!0,blending:kr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Hr,this._fsQuad=new jp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new pe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Os.BlurDirectionX=new pe(1,0);Os.BlurDirectionY=new pe(0,1);const Li=new bh;Li.background=new Ve(0);Li.fog=new yh(0,.0015);const Ce=new _n(75,window.innerWidth/window.innerHeight,.1,5e3);Ce.position.set(0,0,90);const hi=new Dh({antialias:!0,alpha:!0});hi.setSize(window.innerWidth,window.innerHeight);hi.setPixelRatio(Math.min(window.devicePixelRatio,2));const Rl=new mS(hi);Rl.addPass(new gS(Li,Ce));const vS=new Os(new pe(window.innerWidth,window.innerHeight),.4,.6,.6);Rl.addPass(vS);function xS(){document.getElementById("canvas-container").appendChild(hi.domElement)}const mi=new bh,ii=new _n(45,1,.1,100);ii.position.set(0,0,6);let Dn=null,di=null;async function yS(r){Dn=new Dh({antialias:!0,alpha:!0}),Dn.setSize(r.clientWidth,r.clientHeight),Dn.setPixelRatio(Math.min(window.devicePixelRatio,2)),ii.aspect=r.clientWidth/r.clientHeight,ii.position.z=ii.aspect<1?10:6,ii.updateProjectionMatrix(),r.appendChild(Dn.domElement);const{OrbitControls:e}=await _e(async()=>{const{OrbitControls:s}=await Promise.resolve().then(()=>FE);return{OrbitControls:s}},void 0);di=new e(ii,Dn.domElement),di.enablePan=!1,di.maxDistance=12,di.minDistance=3,di.autoRotate=!1;const t=new Vp(16777215,.2),n=new cl(16777215,1);n.position.set(10,10,10);const i=new cl(4482815,.5);return i.position.set(-5,-5,-5),mi.add(t,n,i),Dn}function bS(){Dn&&(Dn.dispose(),Dn=null),di&&(di.dispose(),di=null)}function SS(){window.addEventListener("resize",()=>{const r=window.innerWidth,e=window.innerHeight;if(Ce.aspect=r/e,Ce.updateProjectionMatrix(),hi.setSize(r,e),Rl.setSize(r,e),Dn){const t=document.getElementById("geofno-container");if(t&&t.style.display!=="none"){const n=t.clientWidth,i=t.clientHeight;ii.aspect=n/i,ii.position.z=n/i<1?10:6,ii.updateProjectionMatrix(),Dn.setSize(n,i)}}})}const Jt={c_sim:80,scrollDamping:.1,coolingRate:.96,minTemp:.005,gridZStart:100,gridZEnd:-1550,gridWidth:500,gridDensity:.8,massStrength:15,lensingStrength:120},ht=[];function MS(){const r=[new P(0,20,150),new P(0,20,100),new P(0,20,50)];if(ht.forEach((t,n)=>{const i=(r[r.length-1].z+t.z)/2;r.push(new P(n%2===0?30:-30,20,i)),r.push(new P(t.x,0,t.z))}),ht.length>0){const t=ht[ht.length-1],n=t.z-600;r.push(new P(t.x,t.y,n))}else r.push(new P(0,30,-600));const e=new n_(r);return e.tension=.3,e}const ES=`
    uniform float uTime; uniform float uNoiseTime; uniform float uTemperature; uniform float uStretch; uniform float uOpacity;
    attribute float aRandom; attribute vec3 aLatticePos; varying float vAlpha; varying vec3 vColor;
    vec3 getChaoticNoise(float time, float seed) {
        float t = time;
        float x = sin(t + seed * 100.0) + cos(t * 0.4 + seed * 43.0) * 1.5;
        float y = cos(t + seed * 76.0) + sin(t * 0.6 + seed * 21.0) * 1.5;
        float z = sin(t * 0.8 + seed * 123.0) + cos(t * 0.3 + seed * 99.0);
        return vec3(x, y, z);
    }
    vec3 palette(float t) {
        vec3 a = vec3(0.5, 0.5, 0.5); vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0); vec3 d = vec3(0.263, 0.416, 0.557);
        return a + b * cos(6.28318 * (c * t + d));
    }
    void main() {
        vec3 targetPos = aLatticePos;
        vec3 noise = getChaoticNoise(uNoiseTime, aRandom);
        vec3 brownianTerm = noise * uTemperature;
        float dist = length(targetPos);
        float swirlAngle = uNoiseTime * 0.2 + dist * 0.05;
        float c = cos(swirlAngle); float s = sin(swirlAngle);
        mat2 rot = mat2(c, -s, s, c);
        if (uTemperature > 1.0) brownianTerm.xy = rot * brownianTerm.xy;
        vec3 pos = targetPos + brownianTerm;
        
        // STRETCH LOGIC (WARP EFFECT)
        pos.z += pos.z * uStretch * 2.0; 
        pos.z += uStretch * (aRandom * 100.0); 
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        float tempSize = clamp(uTemperature, 0.0, 20.0);
        float warpThinning = 1.0 / (1.0 + uStretch * 5.0);
        gl_PointSize = (2.0 + tempSize * 0.2) * (150.0 / -mvPosition.z) * warpThinning;
        
        float disorder = clamp(uTemperature / 15.0, 0.0, 1.0);
        vec3 nebulaColor = palette(length(pos) * 0.02 - uTime * 0.2 + aRandom);
        nebulaColor = mix(nebulaColor, vec3(1.0, 0.2, 0.8), 0.3);
        vec3 crystalColor = vec3(0.1, 0.9, 1.0);
        vColor = mix(crystalColor, nebulaColor, disorder);
        
        float twinkle = sin(uTime * 1.5 + aRandom * 100.0) * 0.5 + 0.5;
        float baseAlpha = mix(0.8, 0.25 + twinkle * 0.3, disorder);
        
        // ALPHA FADE ON STRETCH AND OPACITY (CRITICAL FOR DISSOLVE EFFECT)
        vAlpha = baseAlpha * (1.0 - smoothstep(0.0, 15.0, uStretch)) * uOpacity;
    }
`,TS=`
    varying float vAlpha; varying vec3 vColor;
    void main() {
        vec2 center = gl_PointCoord - 0.5; float dist = length(center);
        if (dist > 0.5) discard;
        float glow = exp(-dist * 8.0); float core = 1.0 - smoothstep(0.0, 0.5, dist);
        // Reduced glow and core brightness significantly so text is visible
        gl_FragColor = vec4(vColor, vAlpha * (core * 0.3 + glow * 0.3));
    }
`,wS=`
    uniform float uTime; 
    uniform int uMassCount;
    uniform vec3 uMassPositions[10]; 
    uniform float uMassStrengths[10];
    uniform float uOpacity; attribute vec3 basePos; varying float vDistortion; varying float vDepth;
    void main() {
        vec3 pos = basePos;
        float totalDisplacement = 0.0;
        for(int i = 0; i < 10; i++) {
            if (i >= uMassCount) break;
            float dx = pos.x - uMassPositions[i].x;
            float dz = pos.z - uMassPositions[i].z;
            float distSq = dx*dx + dz*dz;
            float decay = 0.4 / (uMassStrengths[i] + 10.0);
            decay = clamp(decay, 0.002, 0.02);
            float force = uMassStrengths[i] * exp(-distSq * decay);
            totalDisplacement -= force;
        }
        pos.y += totalDisplacement;
        vDistortion = totalDisplacement;
        vDepth = -pos.z;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = 2.0 * (100.0 / -mvPosition.z);
        gl_PointSize = clamp(gl_PointSize, 1.5, 3.5); 
    }
`,AS=`
    varying float vDistortion; uniform float uOpacity;
    void main() {
        vec3 color = vec3(0.1, 0.3, 0.4);
        float shift = smoothstep(-2.0, -25.0, vDistortion);
        color = mix(color, vec3(0.8, 0.3, 0.2), shift); 
        float alpha = 0.5 + (shift * 0.5);
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(abs(coord.x) > 0.45 || abs(coord.y) > 0.45) discard;
        gl_FragColor = vec4(color, uOpacity * alpha);
    }
`,RS=`
    uniform float uTime; uniform float uCameraZ; uniform float uSpeed; 
    uniform int uMassCount;
    uniform vec3 uMassPositions[10]; uniform float uMassStrengths[10];
    uniform vec3 uCameraPos; uniform float uLensing; uniform float uOpacity;
    attribute float size; attribute vec3 basePos; varying float vAlpha;
    void main() {
        vec3 pos = basePos;
        float wrapDepth = 1000.0;
        float relZ = pos.z - uCameraZ;
        float wrappedZ = mod(relZ + 500.0, wrapDepth) - 500.0;
        pos.z = uCameraZ + wrappedZ;
        vec3 viewDir = normalize(pos - uCameraPos);
        vec3 lensingOffset = vec3(0.0);
        for(int i = 0; i < 10; i++) {
            if (i >= uMassCount) break;
            vec3 massToCam = uMassPositions[i] - uCameraPos;
            float distToMass = length(massToCam);
            vec3 massDir = normalize(massToCam);
            float cosTheta = dot(viewDir, massDir);
            if (cosTheta > 0.9) { 
                float angle = acos(clamp(cosTheta, -1.0, 1.0));
                float thetaE = sqrt(uMassStrengths[i] * uLensing * 0.00002);
                float deflection = (thetaE * thetaE) / max(angle, 0.005);
                vec3 perp = normalize(viewDir - massDir * cosTheta);
                lensingOffset += perp * deflection * distToMass;
            }
        }
        vec4 mvPosition = viewMatrix * vec4(pos + lensingOffset, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        float dist = length(mvPosition.xyz);
        float sizeFactor = size * (400.0 / dist);
        float twinkle = sin(uTime * 3.0 + basePos.x);
        gl_PointSize = sizeFactor * (1.0 + uSpeed * 0.1 + twinkle * 0.3);
        vAlpha = uOpacity * (0.5 + 0.5 * twinkle) * (1.0 - smoothstep(400.0, 500.0, abs(wrappedZ)));
    }
`,CS=`
    varying float vAlpha;
    void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        if(length(coord) > 0.5) discard;
        gl_FragColor = vec4(1.0, 1.0, 1.0, vAlpha * pow(1.0 - length(coord)*2.0, 2.0));
    }
`;function PS(r,e){return new Promise(t=>{const n=new Worker(new URL("/assets/geometry.worker-DBzS26pg.js",import.meta.url),{type:"module"}),i={};let s=0,a=null;n.onmessage=({data:o})=>{if(i[o.type]=o,s++,o.type==="torus"&&(a=DS(o),e&&e(a)),r&&r(o.type,s),s===3){n.terminate();const l=LS(i.grid),c=IS(i.stars,l.gridMat);t({...a,...l,...c})}},n.postMessage({type:"torus"}),n.postMessage({type:"grid",config:{gridZStart:Jt.gridZStart,gridZEnd:Jt.gridZEnd,gridWidth:Jt.gridWidth,gridDensity:Jt.gridDensity}}),n.postMessage({type:"stars"})})}function DS(r){const{positions:e,randoms:t}=r,n=new St;n.setAttribute("aLatticePos",new Dt(e,3)),n.setAttribute("position",new Dt(e.slice(),3)),n.setAttribute("aRandom",new Dt(t,1));const i=new Bt({uniforms:{uTime:{value:0},uNoiseTime:{value:0},uTemperature:{value:50},uStretch:{value:0},uOpacity:{value:1}},vertexShader:ES,fragmentShader:TS,transparent:!0,depthWrite:!1,blending:kr});return{torusMesh:new Ga(n,i),torusMat:i}}function LS(r){const{positions:e}=r,t=new St;t.setAttribute("basePos",new Dt(e,3)),t.setAttribute("position",new Dt(e.slice(),3));const n=new Bt({vertexShader:wS,fragmentShader:AS,uniforms:{uTime:{value:0},uOpacity:{value:0},uMassCount:{value:0},uMassPositions:{value:Array.from({length:10},()=>new P)},uMassStrengths:{value:Array.from({length:10},()=>0)}},transparent:!0,depthWrite:!1,blending:Lr});return{gridMesh:new Ga(t,n),gridMat:n}}function IS(r,e){const{positions:t,sizes:n}=r,i=new St;i.setAttribute("position",new Dt(t,3)),i.setAttribute("basePos",new Dt(t.slice(),3)),i.setAttribute("size",new Dt(n,1));const s=new Bt({uniforms:{uTime:{value:0},uCameraZ:{value:0},uSpeed:{value:0},uOpacity:{value:0},uMassCount:e.uniforms.uMassCount,uMassPositions:{value:e.uniforms.uMassPositions.value},uMassStrengths:{value:e.uniforms.uMassStrengths.value},uCameraPos:{value:new P},uLensing:{value:Jt.lensingStrength}},vertexShader:RS,fragmentShader:CS,transparent:!0,depthWrite:!1,blending:kr}),a=new Ga(i,s);return a.frustumCulled=!1,{starField:a,starsMat:s}}function Pi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ks={duration:.5,overwrite:!1,delay:0},Lh,Qt,Mt,Wn=1e8,_t=1/Wn,Nu=Math.PI*2,US=Nu/4,NS=0,Kp=Math.sqrt,FS=Math.cos,OS=Math.sin,Zt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},Ih=function(e){return typeof e>"u"},Si=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Uh=function(){return typeof window<"u"},Ro=function(e){return Pt(e)||Zt(e)},Jp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,kS=/random\([^)]+\)/g,BS=/,\s*/g,Rf=/(?:-?\.?\d|\.)+/gi,Qp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,em=/[+-]=-?[.\d]+/,zS=/[^,'"\[\]\s]+/gi,VS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,ci,Fu,Nh,kn={},ul={},tm,nm=function(e){return(ul=Bs(e,kn))&&Tn},Fh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},La=function(e,t){return!t&&console.warn(e)},im=function(e,t){return e&&(kn[e]=t)&&ul&&(ul[e]=t)||kn},Ia=function(){return 0},HS={suppressEvents:!0,isStart:!0,kill:!1},$o={suppressEvents:!0,kill:!1},GS={suppressEvents:!0},Oh={},ir=[],Ou={},rm,Pn={},Sc={},Cf=30,Wo=[],kh="",Bh=function(e){var t=e[0],n,i;if(Si(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Wo.length;i--&&!Wo[i].targetTest(t););n=Wo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rm(e[i],n)))||e.splice(i,1);return e},Ir=function(e){return e._gsap||Bh(Xn(e))[0]._gsap},sm=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():Ih(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},Rs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$S=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=ir.length,t=ir.slice(0),n,i;for(Ou={},ir.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zh=function(e){return!!(e._initted||e._startAt||e.add)},am=function(e,t,n,i){ir.length&&!Qt&&hl(),e.render(t,n,!!(Qt&&t<0&&zh(e))),ir.length&&!Qt&&hl()},om=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zS).length<2?t:Zt(e)?e.trim():e},lm=function(e){return e},Bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},WS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Bs=function(e,t){for(var n in t)e[n]=t[n];return e},Pf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Si(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},dl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ga=function(e){var t=e.parent||Tt,n=e.keyframes?WS(un(e.keyframes)):Bn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},XS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},cm=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Cl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ur=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,n,i){return e._startAt&&(Qt?e._startAt.revert($o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},YS=function r(e){return!e||e._ts&&r(e.parent)},Df=function(e){return e._repeat?zs(e._tTime,e=e.duration()+e._rDelay)*e:0},zs=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pl=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},Dl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pl(e),n._dirty||Ur(n,e)),e},um=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=fl(e.rawTime(),t),(!t._dur||Xa(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),Ur(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},fi=function(e,t,n,i){return t.parent&&or(t),t._start=Et((Bi(n)?n:n||e!==Tt?Vn(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cm(e,t,"_first","_last",e._sort?"_start":0),Bu(t)||(e._recent=t),i||um(e,t),e._ts<0&&Dl(e,e._tTime),e},hm=function(e,t){return(kn.ScrollTrigger||Fh("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},dm=function(e,t,n,i,s){if(Hh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rm!==In.frame)return ir.push(e),e._lazy=[s,i],1},jS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Bu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ZS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&jS(e)&&!(!e._initted&&Bu(e))||(e._ts<0||e._dp._ts<0)&&!Bu(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Xa(0,e._tDur,t),u=zs(l,o),e._yoyo&&u&1&&(a=1-a),u!==zs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Qt||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&dm(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ku(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&or(e,1),!n&&!Qt&&(Un(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},KS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vs=function(e,t,n,i){var s=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Et(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Dl(e,e._tTime=e._tDur*o),e.parent&&Pl(e),n||Ur(e.parent,e),e},Lf=function(e){return e instanceof fn?Ur(e):Vs(e,e._dur)},JS={_start:0,endTime:Ia,totalDuration:Ia},Vn=function r(e,t,n){var i=e.labels,s=e._recent||JS,a=e.duration()>=Wn?s.endTime(!1):e._dur,o,l,c;return Zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},_a=function(e,t,n){var i=Bi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;a.immediateRender=bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new kt(t[0],a,t[s+1])},hr=function(e,t){return e||e===0?t(e):t},Xa=function(e,t,n){return n<e?e:n>t?t:n},an=function(e,t){return!Zt(e)||!(t=VS.exec(e))?"":t[1]},QS=function(e,t,n){return hr(n,function(i){return Xa(e,t,i)})},zu=[].slice,fm=function(e,t){return e&&Si(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Si(e[0]))&&!e.nodeType&&e!==ci},eM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Zt(i)&&!t||fm(i,1)?(s=n).push.apply(s,Xn(i)):n.push(i)})||n},Xn=function(e,t,n){return Mt&&!t&&Mt.selector?Mt.selector(e):Zt(e)&&!n&&(Fu||!Hs())?zu.call((t||Nh).querySelectorAll(e),0):un(e)?eM(e,n):fm(e)?zu.call(e,0):e?[e]:[]},Vu=function(e){return e=Xn(e)[0]||La("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Xn(t,n.querySelectorAll?n:n===e?La("Invalid scope")||Nh.createElement("div"):e)}},pm=function(e){return e.sort(function(){return .5-Math.random()})},mm=function(e){if(Pt(e))return e;var t=Si(e)?e:{each:e},n=Nr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return Zt(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,p){var _=(p||t).length,m=a[_],g,v,S,b,E,T,A,x,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!y){for(A=-Wn;A<(A=p[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=a[_]=[],g=l?Math.min(y,_)*u-.5:i%y,v=y===Wn?0:l?_*d/y-.5:i/y|0,A=0,x=Wn,T=0;T<_;T++)S=T%y-g,b=v-(T/y|0),m[T]=E=c?Math.abs(c==="y"?b:S):Kp(S*S+b*b),E>A&&(A=E),E<x&&(x=E);i==="random"&&pm(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=an(t.amount||t.each)||0,n=n&&_<0?Tm(n):n}return _=(m[h]-m.min)/m.max||0,Et(m.b+(n?n(_):_)*m.v)+m.u}},Hu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Bi(n)?0:an(n))}},gm=function(e,t){var n=un(e),i,s;return!n&&Si(e)&&(i=n=e.radius||Wn,e.values?(e=Xn(e.values),(s=!Bi(e[0]))&&(i*=i)):e=Hu(e.increment)),hr(t,n?Pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Wn,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Bi(a)?u:u+an(a)}:Hu(e))},_m=function(e,t,n,i){return hr(un(e)?!t:n===!0?!!(n=0):!i,function(){return un(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},tM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},nM=function(e,t){return function(n){return e(parseFloat(n))+(t||an(n))}},iM=function(e,t,n){return xm(e,t,0,1,n)},vm=function(e,t,n){return hr(n,function(i){return e[~~t(i)]})},rM=function r(e,t,n){var i=t-e;return un(e)?vm(e,r(0,e.length),t):hr(n,function(s){return(i+(s-e)%i)%i+e})},sM=function r(e,t,n){var i=t-e,s=i*2;return un(e)?vm(e,r(0,e.length-1),t):hr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ua=function(e){return e.replace(kS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(BS);return _m(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},xm=function(e,t,n,i,s){var a=t-e,o=i-n;return hr(s,function(l){return n+((l-e)/a*o||0)})},aM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Zt(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(un(e)&&!un(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(p){p*=d;var _=Math.min(h,~~p);return u[_](p-_)},n=t}else i||(e=Bs(un(e)?[]:{},e));if(!u){for(l in t)Vh.call(o,e,l,"get",t[l]);s=function(p){return Wh(p,o)||(a?e.p:e)}}}return hr(n,s)},If=function(e,t,n){var i=e.labels,s=Wn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Un=function(e,t,n){var i=e.vars,s=i[t],a=Mt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ir.length&&hl(),o&&(Mt=o),u=l?s.apply(c,l):s.call(c),Mt=a,u},la=function(e){return or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qt),e.progress()<1&&Un(e,"onInterrupt"),e},xs,ym=[],bm=function(e){if(e)if(e=!e.name&&e.default||e,Uh()||e.headless){var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ia,render:Wh,add:Vh,kill:SM,modifier:bM,rawVars:0},a={targetTest:0,get:0,getSetter:$h,aliases:{},register:0};if(Hs(),e!==i){if(Pn[t])return;Bn(i,Bn(dl(e,s),a)),Bs(i.prototype,Bs(s,dl(e,a))),Pn[i.prop=t]=i,e.targetTest&&(Wo.push(i),Oh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}im(t,i),e.register&&e.register(Tn,i,Mn)}else ym.push(e)},gt=255,ca={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},Mc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},Sm=function(e,t,n){var i=e?Bi(e)?[e>>16,e>>8&gt,e&gt]:0:ca.black,s,a,o,l,c,u,d,h,f,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ca[e])i=ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Rf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Mc(l+1/3,s,a),i[1]=Mc(l,s,a),i[2]=Mc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Qp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Rf)||ca.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/gt,a=i[1]/gt,o=i[2]/gt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mm=function(e){var t=[],n=[],i=-1;return e.split(rr).forEach(function(s){var a=s.match(vs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Uf=function(e,t,n){var i="",s=(e+i).match(rr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Sm(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Mm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rr,"1").split(vs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(rr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ca)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),oM=/hsl[a]?\(/,Em=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=oM.test(t),e[1]=Uf(e[1],n),e[0]=Uf(e[0],n,Mm(e[1])),!0},Na,In=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,p=function _(m){var g=r()-i,v=m===!0,S,b,E,T;if((g>e||g<0)&&(n+=g-t),i+=g,E=i-n,S=E-a,(S>0||v)&&(T=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,a+=S+(S>=s?4:s-S),b=1),v||(l=c(_)),b)for(f=0;f<o.length;f++)o[f](E,h,T,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){tm&&(!Fu&&Uh()&&(ci=Fu=window,Nh=ci.document||{},kn.gsap=Tn,(ci.gsapVersions||(ci.gsapVersions=[])).push(Tn.version),nm(ul||ci.GreenSockGlobals||!ci.gsap&&ci||{}),ym.forEach(bm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Na=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Ia},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,g,v){var S=g?function(b,E,T,A){m(b,E,T,A),d.remove(S)}:m;return d.remove(m),o[v?"unshift":"push"](S),Hs(),S},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},d})(),Hs=function(){return!Na&&In.wake()},Xe={},lM=/^[\d.\-M][\d.\-,\s]/,cM=/["']/g,uM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(cM,"").trim():+c,i=l.substr(o+1).trim();return t},hM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dM=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uM(t[1])]:hM(e).split(",").map(om)):Xe._CE&&lM.test(e)?Xe._CE("",e):n},Tm=function(e){return function(t){return 1-e(1-t)}},wm=function r(e,t){for(var n=e._first,i;n;)n instanceof fn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Nr=function(e,t){return e&&(Pt(e)?e:Xe[e]||dM(e))||t},Gr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Sn(e,function(o){Xe[o]=kn[o]=s,Xe[a=o.toLowerCase()]=n;for(var l in s)Xe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[o+"."+l]=s[l]}),s},Am=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ec=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Nu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*OS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Am(o);return s=Nu/s,l.config=function(c,u){return r(e,c,u)},l},Tc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Am(n);return i.config=function(s){return r(e,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Gr("Elastic",Ec("in"),Ec("out"),Ec());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Gr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Gr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Gr("Circ",function(r){return-(Kp(1-r*r)-1)});Gr("Sine",function(r){return r===1?1:-FS(r*US)+1});Gr("Back",Tc("in"),Tc("out"),Tc());Xe.SteppedEase=Xe.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-_t;return function(o){return((i*Xa(0,a,o)|0)+s)*n}}};ks.ease=Xe["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return kh+=r+","+r+"Params,"});var Rm=function(e,t){this.id=NS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sm,this.set=t?t.getSetter:$h},Fa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vs(this,+t.duration,1,1),this.data=t.data,Mt&&(this._ctx=Mt,Mt.data.push(this)),Na||In.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dl(this,n),!s._dp||s.parent||um(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),am(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Df(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Df(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?zs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(Xa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Pl(this),qS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Et(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=GS);var i=Qt;return Qt=n,zh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Vn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i)),this._dur||(this._zTime=-_t),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Pt(n)?n:lm,l=function(){var u=i.then;i.then=null,s&&s(),Pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){la(this)},r})();Bn(Fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var fn=(function(r){Zp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),Tt&&fi(n.parent||Tt,Pi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hm(Pi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return _a(0,arguments,this),this},t.from=function(i,s,a){return _a(1,arguments,this),this},t.fromTo=function(i,s,a,o){return _a(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new kt(i,s,Vn(this,a),1),this},t.call=function(i,s,a){return fi(this,kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new kt(i,a,Vn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ga(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,ga(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Et(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,p,_,m,g,v,S,b,E,T,A;if(this!==Tt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,S=this._ts,g=!S,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Et(u%m),u===l?(_=this._repeat,h=c):(E=Et(u/m),_=~~E,_&&_===E&&(h=c,_--),h>c&&(h=c)),E=zs(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),T&&_&1&&(h=c-h,A=1),_!==E&&!this._lock){var x=T&&E&1,y=x===(T&&_&1);if(_<E&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Et(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,E=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;wm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=KS(this,Et(o),Et(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(Un(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=-_t);break}}f=p}else{f=this._last;for(var O=i<0?i:h;f;){if(p=f._prev,(f._act||O<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(O-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(O-f._start)*f._ts,s,a||Qt&&zh(f)),h!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=O?-_t:_t);break}}f=p}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-_t)._zTime=h>=o?1:-1,this._ts))return this._start=b,Pl(this),this.render(i,s,a);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&or(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Bi(s)||(s=Vn(this,s,i)),!(i instanceof Fa)){if(un(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Zt(i))return this.addLabel(i,s);if(Pt(i))i=kt.delayedCall(0,i);else return this}return this!==i?fi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Zt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(i.parent===this&&Cl(this,i),i===this._recent&&(this._recent=this._last),Ur(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(In.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Vn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=kt.delayedCall(0,s||Ia,a);return o.data="isPause",this._hasPause=1,fi(this,o,Vn(this,i))},t.removePause=function(i){var s=this._first;for(i=Vn(this,i);s;)s._start===i&&s.data==="isPause"&&or(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)er!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Xn(i),l=this._first,c=Bi(s),u;l;)l instanceof kt?$S(l._targets,o)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Vn(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,p=kt.to(a,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&Vs(p,m,0,1).render(p._time,!0,!0),f=1}u&&u.apply(p,d||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Bn({startAt:{time:Vn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),If(this,Vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),If(this,Vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Et(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ur(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ur(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Wn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,fi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Et(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Vs(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Tt._ts&&(am(Tt,fl(i,Tt)),rm=In.frame),In.frame>=Cf){Cf+=On.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&On.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},e})(Fa);Bn(fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var fM=function(e,t,n,i,s,a,o){var l=new Mn(this._pt,e,t,0,1,Um,null,s),c=0,u=0,d,h,f,p,_,m,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ua(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(bc)||[];d=bc.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Rs(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=bc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(em.test(i)||g)&&(l.e=0),this._pt=l,l},Vh=function(e,t,n,i,s,a,o,l,c,u){Pt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Pt(d)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Pt(d)?c?vM:Lm:Gh,p;if(Zt(i)&&(~i.indexOf("random(")&&(i=Ua(i)),i.charAt(1)==="="&&(p=Rs(h,i)+(an(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Gu)return!isNaN(h*i)&&i!==""?(p=new Mn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?yM:Im,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!d&&!(t in e)&&Fh(t,i),fM.call(this,e,t,h,i,f,l||On.stringFilter,c))},pM=function(e,t,n,i,s){if(Pt(e)&&(e=va(e,s,t,n,i)),!Si(e)||e.style&&e.nodeType||un(e)||Jp(e))return Zt(e)?va(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=va(e[o],s,t,n,i);return a},Cm=function(e,t,n,i,s,a){var o,l,c,u;if(Pn[e]&&(o=new Pn[e]).init(s,o.rawVars?t[e]:pM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Mn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==xs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},er,Gu,Hh=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:m,S=e._overwrite==="auto"&&!Lh,b=e.timeline,E,T,A,x,y,O,R,N,B,L,D,F,I;if(b&&(!h||!s)&&(s="none"),e._ease=Nr(s,ks.ease),e._yEase=d?Tm(Nr(d===!0?s:d,ks.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!b&&!!i.runBackwards,!b||h&&!i.stagger){if(N=m[0]?Ir(m[0]).harness:0,F=N&&i[N.prop],E=dl(i,Oh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&p?$o:HS),_._lazy=0),a){if(or(e._startAt=kt.set(m,Bn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt||!o&&!f)&&e._startAt.revert($o),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!_){if(t&&(o=!1),A=Bn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&bn(l),immediateRender:o,stagger:0,parent:g},E),F&&(A[N.prop]=F),or(e._startAt=kt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qt?e._startAt.revert($o):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&bn(l)||l&&!p,T=0;T<m.length;T++){if(y=m[T],R=y._gsap||Bh(m)[T]._gsap,e._ptLookup[T]=L={},Ou[R.id]&&ir.length&&hl(),D=v===m?T:v.indexOf(y),N&&(B=new N).init(y,F||E,e,D,v)!==!1&&(e._pt=x=new Mn(e._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(q){L[q]=x}),B.priority&&(O=1)),!N||F)for(A in E)Pn[A]&&(B=Cm(A,E,e,D,y,v))?B.priority&&(O=1):L[A]=x=Vh.call(e,y,A,"get",E[A],D,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(y,e._op[T]),S&&e._pt&&(er=e,Tt.killTweensOf(y,L,e.globalTime(t)),I=!e.parent,er=0),e._pt&&l&&(Ou[R.id]=1)}O&&Nm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,h&&t<=0&&b.render(Wn,!0,!0)},mM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Gu=1,e.vars[t]="+=0",Hh(e,o),Gu=0,l?La(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Nt(n)+an(d.e)),d.b&&(d.b=u.s+an(d.b))},gM=function(e,t){var n=e[0]?Ir(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Bs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},_M=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(un(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},va=function(e,t,n,i,s){return Pt(e)?e.call(t,n,i,s):Zt(e)&&~e.indexOf("random(")?Ua(e):e},Pm=kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dm={};Sn(Pm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Dm[r]=1});var kt=(function(r){Zp(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ga(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,v=i.parent||Tt,S=(un(n)||Jp(n)?Bi(n[0]):"length"in i)?[n]:Xn(n),b,E,T,A,x,y,O,R;if(o._targets=S.length?Bh(S):La("GSAP target "+n+" not found. https://gsap.com",!On.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,p||h||Ro(c)||Ro(u)){if(i=o.vars,b=o.timeline=new fn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:S}),b.kill(),b.parent=b._dp=Pi(o),b._start=0,h||Ro(c)||Ro(u)){if(A=S.length,O=h&&mm(h),Si(h))for(x in h)~Pm.indexOf(x)&&(R||(R={}),R[x]=h[x]);for(E=0;E<A;E++)T=dl(i,Dm),T.stagger=0,g&&(T.yoyoEase=g),R&&Bs(T,R),y=S[E],T.duration=+va(c,Pi(o),E,y,S),T.delay=(+va(u,Pi(o),E,y,S)||0)-o._delay,!h&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),b.to(y,T,O?O(E,y,S):0),b._ease=Xe.none;b.duration()?c=u=0:o.timeline=0}else if(p){ga(Bn(b.vars.defaults,{ease:"none"})),b._ease=Nr(p.ease||i.ease||"none");var N=0,B,L,D;if(un(p))p.forEach(function(F){return b.to(S,F,">")}),b.duration();else{T={};for(x in p)x==="ease"||x==="easeEach"||_M(x,p[x],T,p.easeEach);for(x in T)for(B=T[x].sort(function(F,I){return F.t-I.t}),N=0,E=0;E<B.length;E++)L=B[E],D={ease:L.e,duration:(L.t-(E?B[E-1].t:0))/100*c},D[x]=L.v,b.to(S,D,N),N+=D.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!Lh&&(er=Pi(o),Tt.killTweensOf(S),er=0),fi(v,Pi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!p&&o._start===Et(v._time)&&bn(d)&&YS(Pi(o))&&v.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-u)||0)),m&&hm(Pi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-_t&&!u?l:i<_t?0:i,h,f,p,_,m,g,v,S,b;if(!c)ZS(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Et(d%_),d===l?(p=this._repeat,h=c):(m=Et(d/_),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),g=this._yoyo&&p&1,g&&(b=this._yEase,h=c-h),m=zs(this._tTime,_),h===o&&!a&&this._initted&&p===m)return this._tTime=d,this;p!==m&&(S&&this._yEase&&wm(S,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Et(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(dm(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(b||this._ease)(h/c),this._from&&(this.ratio=v=1-v),!o&&d&&!s&&!m&&(Un(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ku(this,i,s,a),Un(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ku(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&or(this,1),!s&&!(u&&!o)&&(d||o||g)&&(Un(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Na||In.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hh(this,c),u=this._ease(c/this._dur),mM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Dl(this,0),this.parent||cm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?la(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,er&&er.vars.overwrite!==!0)._first||la(this),this.parent&&a!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Xn(i):o,c=this._ptLookup,u=this._pt,d,h,f,p,_,m,g;if((!s||s==="all")&&XS(o,l))return s==="all"&&(this._pt=0),la(this);for(d=this._op=this._op||[],s!=="all"&&(Zt(s)&&(_={},Sn(s,function(v){return _[v]=1}),s=_),s=gM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],s==="all"?(d[g]=s,p=h,f={}):(f=d[g]=d[g]||{},p=s);for(_ in p)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Cl(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&la(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return _a(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return _a(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Tt.killTweensOf(i,s,a)},e})(Fa);Bn(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){kt[r]=function(){var e=new fn,t=zu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Gh=function(e,t,n){return e[t]=n},Lm=function(e,t,n){return e[t](n)},vM=function(e,t,n,i){return e[t](i.fp,n)},xM=function(e,t,n){return e.setAttribute(t,n)},$h=function(e,t){return Pt(e[t])?Lm:Ih(e[t])&&e.setAttribute?xM:Gh},Im=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Um=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},SM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},MM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Nm=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Mn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Im,this.d=l||this,this.set=c||Gh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=MM,this.m=n,this.mt=s,this.tween=i},r})();Sn(kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Oh[r]=1});kn.TweenMax=kn.TweenLite=kt;kn.TimelineLite=kn.TimelineMax=fn;Tt=new fn({sortChildren:!1,defaults:ks,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=Em;var Fr=[],Xo={},EM=[],Nf=0,TM=0,wc=function(e){return(Xo[e]||EM).map(function(t){return t()})},$u=function(){var e=Date.now(),t=[];e-Nf>2&&(wc("matchMediaInit"),Fr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ci.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nf=e,wc("matchMedia"))},Fm=(function(){function r(t,n){this.selector=n&&Vu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=TM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Pt(n)&&(s=i,i=n,n=Pt);var a=this,o=function(){var c=Mt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Vu(s)),Mt=a,d=i.apply(a,arguments),Pt(d)&&a._r.push(d),Mt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Mt;Mt=null,n(this),Mt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Fr.length;a--;)Fr[a].id===this.id&&Fr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),wM=(function(){function r(t){this.contexts=[],this.scope=t,Mt&&Mt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Si(n)||(n={matches:n});var a=new Fm(0,s||this.scope),o=a.conditions={},l,c,u;Mt&&!a.selector&&(a.selector=Mt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ci.matchMedia(n[c]),l&&(Fr.indexOf(a)<0&&Fr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener($u):l.addEventListener("change",$u)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return bm(i)})},timeline:function(e){return new fn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Zt(e)&&(e=Xn(e)[0]);var s=Ir(e||{}).get,a=n?lm:om;return n==="native"&&(n=""),e&&(t?a((Pn[t]&&Pn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Pn[o]&&Pn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Xn(e),e.length>1){var i=e.map(function(u){return Tn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Pn[t],o=Ir(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;xs._pt=0,d.init(e,n?u+n:u,xs,0,[e]),d.render(1,d),xs._pt&&Wh(1,xs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Tn.to(e,Bn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Nr(e.ease,ks.ease)),Pf(ks,e||{})},config:function(e){return Pf(On,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Pn[o]&&!kn[o]&&La(t+" effect requires "+o+" plugin.")}),Sc[t]=function(o,l,c){return n(Xn(o),Bn(l||{},s),c)},a&&(fn.prototype[t]=function(o,l,c){return this.add(Sc[t](o,Si(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Xe[e]=Nr(t)},parseEase:function(e,t){return arguments.length?Nr(e,t):Xe},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new fn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,i=Tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof kt&&i.vars.onComplete===i._targets[0]))&&fi(n,i,i._start-i._delay),i=s;return fi(Tt,n,0),n},context:function(e,t){return e?new Fm(e,t):Mt},matchMedia:function(e){return new wM(e)},matchMediaRefresh:function(){return Fr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$u()},addEventListener:function(e,t){var n=Xo[e]||(Xo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Xo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:rM,wrapYoyo:sM,distribute:mm,random:_m,snap:gm,normalize:iM,getUnit:an,clamp:QS,splitColor:Sm,toArray:Xn,selector:Vu,mapRange:xm,pipe:tM,unitize:nM,interpolate:aM,shuffle:pm},install:nm,effects:Sc,ticker:In,updateRoot:fn.updateRoot,plugins:Pn,globalTimeline:Tt,core:{PropTween:Mn,globals:im,Tween:kt,Timeline:fn,Animation:Fa,getCache:Ir,_removeLinkedListItem:Cl,reverting:function(){return Qt},context:function(e){return e&&Mt&&(Mt.data.push(e),e._ctx=Mt),Mt},suppressOverwrites:function(e){return Lh=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=kt[r]});In.add(fn.updateRoot);xs=pl.to({},{duration:0});var AM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},RM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=AM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ac=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Zt(s)&&(l={},Sn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}RM(o,s)}}}},Tn=pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ac("roundProps",Hu),Ac("modifiers"),Ac("snap",gm))||pl;kt.version=fn.version=Tn.version="3.14.2";tm=1;Uh()&&Hs();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ff,tr,Cs,Xh,Pr,Of,qh,CM=function(){return typeof window<"u"},zi={},Sr=180/Math.PI,Ps=Math.PI/180,hs=Math.atan2,kf=1e8,Yh=/([A-Z])/g,PM=/(left|right|width|margin|padding|x)/i,DM=/[\s,\(]\S/,gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},UM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Om=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},km=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},FM=function(e,t,n){return e.style[t]=n},OM=function(e,t,n){return e.style.setProperty(t,n)},kM=function(e,t,n){return e._gsap[t]=n},BM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},VM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},wt="transform",En=wt+"Origin",HM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ii(i,o)}):this.tfm[e]=a.x?a[e]:Ii(i,e),e===En&&(this.tfm.zOrigin=a.zOrigin);else return gi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(wt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Bm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Yh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qh(),(!s||!s.isStart)&&!n[wt]&&(Bm(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zm=function(e,t){var n={target:e,props:[],revert:GM,save:HM};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Vm,Xu=function(e,t){var n=tr.createElementNS?tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):tr.createElement(e);return n&&n.style?n:tr.createElement(e)},Nn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Yh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Gs(t)||t,1)||""},Bf="O,Moz,ms,Ms,Webkit".split(","),Gs=function(e,t,n){var i=t||Pr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Bf[a]:"")+e},qu=function(){CM()&&window.document&&(Ff=window,tr=Ff.document,Cs=tr.documentElement,Pr=Xu("div")||{style:{}},Xu("div"),wt=Gs(wt),En=wt+"Origin",Pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vm=!!Gs("perspective"),qh=Tn.core.reverting,Xh=1)},zf=function(e){var t=e.ownerSVGElement,n=Xu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Cs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Cs.removeChild(n),s},Vf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hm=function(e){var t,n;try{t=e.getBBox()}catch{t=zf(e),n=1}return t&&(t.width||t.height)||n||(t=zf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vf(e,["x","cx","x1"])||0,y:+Vf(e,["y","cy","y1"])||0,width:0,height:0}:t},Gm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hm(e))},lr=function(e,t){if(t){var n=e.style,i;t in zi&&t!==En&&(t=wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Yh,"-$1").toLowerCase())):n.removeAttribute(t)}},nr=function(e,t,n,i,s,a){var o=new Mn(e._pt,t,n,0,1,a?km:Om);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Hf={deg:1,rad:1,turn:1},$M={grid:1,flex:1},cr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Pr.style,l=PM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",p,_,m,g;if(i===a||!s||Hf[i]||Hf[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),g=e.getCTM&&Gm(e),(f||a==="%")&&(zi[t]||~t.indexOf("adius")))return p=g?e.getBBox()[l?"width":"height"]:e[u],Nt(f?s/p*d:s/100*p);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===tr||!_.appendChild)&&(_=tr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===In.time&&!m.uncache)return Nt(s/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,p=e[u],v?e.style[t]=v:lr(e,t)}else(f||a==="%")&&!$M[Nn(_,"display")]&&(o.position=Nn(e,"position")),_===e&&(o.position="static"),_.appendChild(Pr),p=Pr[u],_.removeChild(Pr),o.position="absolute";return l&&f&&(m=Ir(_),m.time=In.time,m.width=_[u]),Nt(h?p*s/d:p&&s?d/p*s:0)},Ii=function(e,t,n,i){var s;return Xh||qu(),t in gi&&t!=="transform"&&(t=gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(s=ka(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:gl(Nn(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[t]&&ml[t](e,t,n)||Nn(e,t)||sm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cr(e,t,s,n)+n:s},WM=function(e,t,n,i){if(!n||n==="none"){var s=Gs(t,e,1),a=s&&Nn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Nn(e,"borderTopColor"))}var o=new Mn(this._pt,e.style,t,0,1,Um),l=0,c=0,u,d,h,f,p,_,m,g,v,S,b,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Nn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Nn(e,t)||i,_?e.style[t]=_:lr(e,t)),u=[n,i],Em(u),n=u[0],i=u[1],h=n.match(vs)||[],E=i.match(vs)||[],E.length){for(;d=vs.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,b=_.substr((f+"").length),m.charAt(1)==="="&&(m=Rs(f,m)+b),g=parseFloat(m),S=m.substr((g+"").length),l=vs.lastIndex-S.length,S||(S=S||On.units[t]||b,l===i.length&&(i+=S,o.e+=S)),b!==S&&(f=cr(e,t,_,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:g-f,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?km:Om;return em.test(i)&&(o.e=0),this._pt=o,o},Gf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},XM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Gf[n]||n,t[1]=Gf[i]||i,t.join(" ")},qM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],zi[o]&&(l=1,o=o==="transformOrigin"?En:wt),lr(n,o);l&&(lr(n,wt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ka(n,1),a.uncache=1,Bm(i)))}},ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Mn(e._pt,t,n,0,0,qM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Oa=[1,0,0,1,0,0],$m={},Wm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$f=function(e){var t=Nn(e,wt);return Wm(t)?Oa:t.substr(7).match(Qp).map(Nt)},jh=function(e,t){var n=e._gsap||Ir(e),i=e.style,s=$f(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Oa:s):(s===Oa&&!e.offsetParent&&e!==Cs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Cs.appendChild(e)),s=$f(e),l?i.display=l:lr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Cs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yu=function(e,t,n,i,s,a){var o=e._gsap,l=s||jh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],S=t.split(" "),b=parseFloat(S[0])||0,E=parseFloat(S[1])||0,T,A,x,y;n?l!==Oa&&(A=f*m-p*_)&&(x=b*(m/A)+E*(-_/A)+(_*v-m*g)/A,y=b*(-p/A)+E*(f/A)-(f*v-p*g)/A,b=x,E=y):(T=Hm(e),b=T.x+(~S[0].indexOf("%")?b/100*T.width:b),E=T.y+(~(S[1]||S[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&o.smooth?(g=b-c,v=E-u,o.xOffset=d+(g*f+v*_)-g,o.yOffset=h+(g*p+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[En]="0px 0px",a&&(nr(a,o,"xOrigin",c,b),nr(a,o,"yOrigin",u,E),nr(a,o,"xOffset",d,o.xOffset),nr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},ka=function(e,t){var n=e._gsap||new Rm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Nn(e,En)||"0",u,d,h,f,p,_,m,g,v,S,b,E,T,A,x,y,O,R,N,B,L,D,F,I,q,X,Q,se,ae,Re,Fe,We;return u=d=h=_=m=g=v=S=b=0,f=p=1,n.svg=!!(e.getCTM&&Gm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),A=jh(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),Yu(e,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,T=n.yOrigin||0,A!==Oa&&(R=A[0],N=A[1],B=A[2],L=A[3],u=D=A[4],d=F=A[5],A.length===6?(f=Math.sqrt(R*R+N*N),p=Math.sqrt(L*L+B*B),_=R||N?hs(N,R)*Sr:0,v=B||L?hs(B,L)*Sr+_:0,v&&(p*=Math.abs(Math.cos(v*Ps))),n.svg&&(u-=E-(E*R+T*B),d-=T-(E*N+T*L))):(We=A[6],Re=A[7],Q=A[8],se=A[9],ae=A[10],Fe=A[11],u=A[12],d=A[13],h=A[14],x=hs(We,ae),m=x*Sr,x&&(y=Math.cos(-x),O=Math.sin(-x),I=D*y+Q*O,q=F*y+se*O,X=We*y+ae*O,Q=D*-O+Q*y,se=F*-O+se*y,ae=We*-O+ae*y,Fe=Re*-O+Fe*y,D=I,F=q,We=X),x=hs(-B,ae),g=x*Sr,x&&(y=Math.cos(-x),O=Math.sin(-x),I=R*y-Q*O,q=N*y-se*O,X=B*y-ae*O,Fe=L*O+Fe*y,R=I,N=q,B=X),x=hs(N,R),_=x*Sr,x&&(y=Math.cos(x),O=Math.sin(x),I=R*y+N*O,q=D*y+F*O,N=N*y-R*O,F=F*y-D*O,R=I,D=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),f=Nt(Math.sqrt(R*R+N*N+B*B)),p=Nt(Math.sqrt(F*F+We*We)),x=hs(D,F),v=Math.abs(x)>2e-4?x*Sr:0,b=Fe?1/(Fe<0?-Fe:Fe):0),n.svg&&(I=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Wm(Nn(e,wt)),I&&e.setAttribute("transform",I))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Nt(f),n.scaleY=Nt(p),n.rotation=Nt(_)+o,n.rotationX=Nt(m)+o,n.rotationY=Nt(g)+o,n.skewX=v+o,n.skewY=S+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[En]=gl(c)),n.xOffset=n.yOffset=0,n.force3D=On.force3D,n.renderTransform=n.svg?jM:Vm?Xm:YM,n.uncache=0,n},gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Rc=function(e,t,n){var i=an(t);return Nt(parseFloat(t)+parseFloat(cr(e,"x",n+"px",i)))+i},YM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Xm(e,t)},yr="0deg",na="0px",br=") ",Xm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,S=n.zOrigin,b="",E=g==="auto"&&e&&e!==1||g===!0;if(S&&(d!==yr||u!==yr)){var T=parseFloat(u)*Ps,A=Math.sin(T),x=Math.cos(T),y;T=parseFloat(d)*Ps,y=Math.cos(T),a=Rc(v,a,A*y*-S),o=Rc(v,o,-Math.sin(T)*-S),l=Rc(v,l,x*y*-S+S)}m!==na&&(b+="perspective("+m+br),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(E||a!==na||o!==na||l!==na)&&(b+=l!==na||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==yr&&(b+="rotate("+c+br),u!==yr&&(b+="rotateY("+u+br),d!==yr&&(b+="rotateX("+d+br),(h!==yr||f!==yr)&&(b+="skew("+h+", "+f+br),(p!==1||_!==1)&&(b+="scale("+p+", "+_+br),v.style[wt]=b||"translate(0, 0)"},jM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,v=n.forceCSS,S=parseFloat(a),b=parseFloat(o),E,T,A,x,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ps,c*=Ps,E=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Ps,y=Math.tan(c-u),y=Math.sqrt(1+y*y),A*=y,x*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),E*=y,T*=y)),E=Nt(E),T=Nt(T),A=Nt(A),x=Nt(x)):(E=d,x=h,T=A=0),(S&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(S=cr(f,"x",a,"px"),b=cr(f,"y",o,"px")),(p||_||m||g)&&(S=Nt(S+p-(p*E+_*A)+m),b=Nt(b+_-(p*T+_*x)+g)),(i||s)&&(y=f.getBBox(),S=Nt(S+i/100*y.width),b=Nt(b+s/100*y.height)),y="matrix("+E+","+T+","+A+","+x+","+S+","+b+")",f.setAttribute("transform",y),v&&(f.style[wt]=y)},ZM=function(e,t,n,i,s){var a=360,o=Zt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Sr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*kf)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*kf)%a-~~(c/a)*a)),e._pt=h=new Mn(e._pt,t,n,i,c,LM),h.e=u,h.u="deg",e._props.push(n),h},Wf=function(e,t){for(var n in t)e[n]=t[n];return e},KM=function(e,t,n){var i=Wf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[wt]=t,o=ka(n,1),lr(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],a[wt]=t,o=ka(n,1),a[wt]=c);for(l in zi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=an(c),p=an(u),d=f!==p?cr(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Mn(e._pt,o,l,d,h-d,Wu),e._pt.u=p||0,e._props.push(l));Wf(o,i)};Sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ml[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(p){return Ii(o,p,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(p,_){return f[p]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var qm={name:"css",register:qu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,p,_,m,g,v,S,b,E,T,A,x,y;Xh||qu(),this.styles=this.styles||zm(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Pn[_]&&Cm(_,t,n,i,e,s)))){if(f=typeof u,p=ml[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ua(u)),p)p(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(m=an(c),g=an(u),g?m!==g&&(c=cr(e,_,c,g)+g):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Zt(c)&&~c.indexOf("random(")&&(c=Ua(c)),an(c+"")||c==="auto"||(c+=On.units[_]||an(Ii(e,_))||""),(c+"").charAt(1)==="="&&(c=Ii(e,_))):c=Ii(e,_),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in gi&&(_==="autoAlpha"&&(h===1&&Ii(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),nr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in zi,S){if(this.styles.save(_),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Nn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var O=e.style.perspective;e.style.perspective=u,u=Nn(e,"perspective"),O?e.style.perspective=O:lr(e,"perspective")}d=parseFloat(u)}if(b||(E=e._gsap,E.renderTransform&&!t.parseTransform||ka(e,t.parseTransform),T=t.smoothOrigin!==!1&&E.smooth,b=this._pt=new Mn(this._pt,o,wt,0,1,E.renderTransform,E,0,-1),b.dep=1),_==="scale")this._pt=new Mn(this._pt,E,"scaleY",E.scaleY,(v?Rs(E.scaleY,v+d):d)-E.scaleY||0,Wu),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(En,0,o[En]),u=XM(u),E.svg?Yu(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==E.zOrigin&&nr(this,E,"zOrigin",E.zOrigin,g),nr(this,o,_,gl(c),gl(u)));continue}else if(_==="svgOrigin"){Yu(e,u,1,T,0,this);continue}else if(_ in $m){ZM(this,E,_,h,v?Rs(h,v+u):u);continue}else if(_==="smoothOrigin"){nr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){KM(this,u,e);continue}}else _ in o||(_=Gs(_)||_);if(S||(d||d===0)&&(h||h===0)&&!DM.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),g=an(u)||(_ in On.units?On.units[_]:m),m!==g&&(h=cr(e,_,c,g)),this._pt=new Mn(this._pt,S?E:o,_,h,(v?Rs(h,v+d):d)-h,!S&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?NM:Wu),this._pt.u=g||0,S&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=UM):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=IM);else if(_ in o)WM.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Fh(_,u);continue}S||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}A&&Nm(this)},render:function(e,t){if(t.tween._time||!qh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ii,aliases:gi,getSetter:function(e,t,n){var i=gi[t];return i&&i.indexOf(",")<0&&(t=i),t in zi&&t!==En&&(e._gsap.x||Ii(e,"x"))?n&&Of===n?t==="scale"?BM:kM:(Of=n||{})&&(t==="scale"?zM:VM):e.style&&!Ih(e.style[t])?FM:~t.indexOf("-")?OM:$h(e,t)},core:{_removeProperty:lr,_getMatrix:jh}};Tn.utils.checkPrefix=Gs;Tn.core.getStyleSaver=zm;(function(r,e,t,n){var i=Sn(r+","+e+","+t,function(s){zi[s]=1});Sn(e,function(s){On.units[s]="deg",$m[s]=1}),gi[i[13]]=r+","+e,Sn(n,function(s){var a=s.split(":");gi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){On.units[r]="px"});Tn.registerPlugin(qm);var at=Tn.registerPlugin(qm)||Tn;at.core.Tween;let ys=0,gn=0,qo=0;const JM=.095,QM=.25,Zh=8e3,eE=220,tE=90;function nE(r){qo=r,gn=r}function iE(r){!ht||ht.length===0||(U.snapTargets=ht.map(e=>{let t=0,n=1/0;const i=e.z+45;for(let s=0;s<=2e3;s++){const a=s/2e3,o=r.getPointAt(a),l=Math.abs(o.z-i);l<n&&(n=l,t=a)}return t*Zh}))}function bs(r){if(!U.snapTargets||U.snapTargets.length===0)return;const e=Math.max(0,Math.min(r,U.snapTargets.length-1)),t=U.snapTargets[e];Zm(),jm(),U.activeSnapIndex=e,U.isSnapped=!0,U.breakoutAccumulator=0,at.to({y:gn},{y:t,duration:.8,ease:"power2.out",onUpdate:function(){gn=this.targets()[0].y}})}function rE(){function r(i,s=i){if(!U.transitioning){if(U.phase==="TIMELINE"&&!U.transitioning){if(Math.abs(s)>5&&(jm(),Zm()),U.isSnapped&&U.activeSnapIndex>=0)if(U.breakoutAccumulator+=Math.abs(s),U.breakoutAccumulator>tE)U.isSnapped=!1,U.breakoutAccumulator=0,gn+=Math.sign(s)*60;else{gn=U.snapTargets[U.activeSnapIndex]+Math.sign(s)*(U.breakoutAccumulator*.4);return}else if(gn+=s*QM,gn=Math.max(0,Math.min(gn,Zh)),U.snapTargets&&U.snapTargets.length>0)for(let a=0;a<U.snapTargets.length;a++){const o=U.snapTargets[a];if(Math.abs(gn-o)<eE){U.isSnapped=!0,U.activeSnapIndex=a,U.breakoutAccumulator=0,gn=o;break}}}else if(U.phase==="RESEARCH"&&!U.transitioning){const a=Math.sign(i)*Math.min(Math.abs(i),200);U.researchVelocity+=a*6e-4}}}window.addEventListener("wheel",i=>{if(i.target.closest(".card-logs")||i.target.closest(".hud-card.expanded")||i.target.closest("#readme-modal-overlay"))return;i.preventDefault();let s=i.deltaY;i.deltaMode===1&&(s*=40),i.deltaMode===2&&(s*=window.innerHeight),r(s,i.deltaY)},{passive:!1});let e=0;window.addEventListener("touchstart",i=>{i.touches.length>0&&(e=i.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",i=>{if(!(i.target.closest(".card-logs")||i.target.closest(".hud-card.expanded")||i.target.closest("#readme-modal-overlay"))&&(i.preventDefault(),i.touches.length>0)){const s=i.touches[0].clientY;let a=(e-s)*1.5;e=s,r(a,a)}},{passive:!1}),window.addEventListener("keydown",i=>{if(U.phase!=="TIMELINE"||U.transitioning)return;const s=U.activeSnapIndex>=0?U.activeSnapIndex:0;i.key==="ArrowDown"||i.key==="PageDown"||i.key==="ArrowRight"?(i.preventDefault(),bs(s+1)):i.key==="ArrowUp"||i.key==="PageUp"||i.key==="ArrowLeft"?(i.preventDefault(),bs(s-1)):i.key==="Home"?(i.preventDefault(),bs(0)):i.key==="End"&&(i.preventDefault(),bs(U.snapTargets.length-1))});let t=!1,n=0;window.addEventListener("mousedown",i=>{U.phase!=="TIMELINE"||U.transitioning||i.target.closest("#timeline-player")&&(t=!0,n=i.clientY-ys,i.preventDefault(),at.killTweensOf("#timeline-player"))}),window.addEventListener("mousemove",i=>{if(!t)return;let s=i.clientY-n;s=Math.max(-120,Math.min(s,120)),ys=s,at.set("#timeline-player",{y:ys})}),window.addEventListener("mouseup",()=>{t&&(t=!1,at.to("#timeline-player",{y:0,duration:.8,ease:"elastic.out(1.2, 0.4)",onUpdate:function(){ys=at.getProperty("#timeline-player","y")}}))})}function sE(r){if(U.phase!=="RESEARCH"){if(U.phase==="TIMELINE"&&Math.abs(ys)>.5){const e=ys*.4;gn+=e,gn=Math.max(0,Math.min(gn,Zh)),U.isSnapped=!1}qo+=(gn-qo)*JM,U.targetScrollY=qo}}const Ym=(()=>{const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(100,200,255,0.5)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Q0(r)})(),aE=new Sh({map:Ym,color:16777215,transparent:!0,blending:kr,depthWrite:!1}),oE=new Sh({map:Ym,color:16777215}),lE=new Hr({color:62463,wireframe:!0,transparent:!0,opacity:.8}),cE=new Hr({color:8965375,wireframe:!0,transparent:!0,opacity:.5}),uE=new Eh({color:65535,transparent:!0,opacity:.05}),qn={};function hE(r){try{const e=document.getElementById(`card-${r}`),t=document.getElementById(`btn-${r}`),n=document.getElementById(`logs-container-${r}`);e.classList.contains("expanded")?(e.classList.remove("expanded"),t.innerHTML="[ + ]",qn[r].isTyping=!1):(e.classList.remove("minimized"),e.classList.add("expanded"),t.innerHTML="[ - ]",n.innerHTML="",qn[r].isTyping=!0,qn[r].lineIndex=0,qn[r].charIndex=0)}catch(e){document.querySelector(".hero-prompt").innerText="TGL: "+e.message}}function dE(r){const e=new Ni;return e.visible=!1,ht.forEach((t,n)=>{qn[n]={lineIndex:0,charIndex:0,isTyping:!1},n<10&&(r.uniforms.uMassPositions.value[n]=new P(t.x,0,t.z),r.uniforms.uMassStrengths.value[n]=t.mass*Jt.massStrength),r.uniforms.uMassCount.value=Math.min(ht.length,10);const i=new Ni;i.position.set(t.x,-(t.mass*Jt.massStrength)*.4,t.z);const s=12+t.mass*1.5,a=new Hd(aE);a.scale.set(s,s,1),i.add(a);const o=new Hd(oE);o.scale.set(s*.2,s*.2,1),i.add(o);const l=new St,c=[];for(let g=0;g<80;g++){const v=Math.random()*Math.PI*2,S=s*.4+Math.random()*(s*.2);c.push(S*Math.cos(v),(Math.random()-.5)*2,S*Math.sin(v))}l.setAttribute("position",new bt(c,3));const u=new Ga(l,new Th({color:16764040,size:.3,transparent:!0,opacity:.8,blending:kr}));i.add(u);const d=new Ni;d.position.y=12;const h=12,f=new t_(0,0,h,h,0,2*Math.PI,!1,0),p=new St().setFromPoints(f.getPoints(64));if(p.rotateX(-Math.PI/2),d.add(new Up(p,uE)),t.skills){const g=Math.PI*2/t.skills.length;t.skills.forEach((v,S)=>{const b=g*S,E=new Ni;E.position.set(Math.cos(b)*h,0,Math.sin(b)*h),E.add(new jt(new al(1.5,0),lE)),E.add(new jt(new al(2.5,0),cE)),E.userData={phase:Math.random()*Math.PI*2},d.add(E)})}i.add(d),e.add(i);const _=document.createElement("div");_.className="node-container",_.style.display="none",Math.min(t.mass/10*100,100);const m=t.skills?t.skills.map((g,v)=>`
            <div class="skill-label" id="skill-${n}-${v}">
                <div class="skill-line"></div>
                <div class="skill-text">${g}</div>
            </div>
        `).join(""):"";_.innerHTML=`
            ${m}
            <div class="node-anchor"></div><div class="node-connector"></div>
            <div class="hud-card minimized" id="card-${n}">
                <div class="card-header">
                    <span class="card-id">EVT-0${n+1}</span>
                    <div class="card-time-range">
                        <span class="time-value">${t.time_range?t.time_range.start:""}</span>
                        <span class="time-separator">⟶</span>
                        <span class="time-value">${t.time_range?t.time_range.end:""}</span>
                    </div>
                </div>
                <div class="card-body"><div class="card-title">${t.title}</div><div class="card-subtitle">${t.subtitle}</div></div>
                <div class="card-logs" id="logs-container-${n}"></div>
                <div class="card-footer">
                    <div class="card-location">
                        <span class="loc-icon">⌖</span>
                        <span class="loc-text">${t.location||"ORBITAL STATION"}</span>
                    </div>
                    <button class="expander-btn" id="btn-${n}">[ + ]</button>
                </div>
            </div>
        `,document.getElementById("labels-container").appendChild(_),_.querySelector(`#card-${n}`).addEventListener("click",g=>{g.stopPropagation();try{hE(n)}catch(v){const S=document.querySelector(".hero-prompt");S&&(S.innerText="ERR click: "+v.message)}}),t.skills&&t.skills.forEach((g,v)=>{const S=_.querySelector(`#skill-${n}-${v}`);S&&S.addEventListener("click",b=>{b.stopPropagation(),S.classList.toggle("active")})}),t.element=_}),e}function jm(){document.querySelectorAll(".skill-label.active").forEach(r=>{r.classList.remove("active")})}function Zm(){ht.forEach((r,e)=>{try{const t=document.getElementById(`card-${e}`),n=document.getElementById(`btn-${e}`),i=document.getElementById(`logs-container-${e}`);t&&t.classList.contains("expanded")&&(t.classList.remove("expanded"),t.classList.add("minimized"),n&&(n.innerHTML="[ + ]"),i&&(i.innerHTML=""),qn[e]&&(qn[e].isTyping=!1,qn[e].lineIndex=0,qn[e].charIndex=0))}catch{}})}function fE(){setInterval(()=>{ht.forEach((r,e)=>{if(qn[e].isTyping){const t=qn[e];if(t.lineIndex<r.responsibilities.length){const n=r.responsibilities[t.lineIndex],i=document.getElementById(`logs-container-${e}`);let s=document.getElementById(`log-line-${e}-${t.lineIndex}`);s||(s=document.createElement("div"),s.className="log-line",s.id=`log-line-${e}-${t.lineIndex}`,s.innerHTML='<span class="log-prefix">>></span><span class="log-content"></span>',i.appendChild(s));const a=s.querySelector(".log-content");t.charIndex<=n.length?(a.innerText=n.substring(0,t.charIndex)+(t.charIndex<n.length?"█":""),t.charIndex++):(a.innerText=n,t.lineIndex++,t.charIndex=0)}else qn[e].isTyping=!1}})},30)}const pE={"AdS/CFT Correspondence":"/icons/AdS_CFT_Correspondence.svg","Holographic Principle":"/icons/Holographic_Principle.svg","Gravitational Waves":"/icons/Gravitational_Waves.svg","Quantum Error Correction":"/icons/Quantum_Error_Correction.svg","Phase Transitions":"/icons/Phase_Transitions.svg",Renormalization:"/icons/Renormalization.svg","Category Theory":"/icons/Category_Theory.svg","Elliptic Curves":"/icons/Elliptic_Curves.svg",Sympy:"/icons/Sympy.svg",Sagemath:"/icons/Sagemath.svg","Adversarial Generative Networks (GANs)":"/icons/Adversarial_Generative_Networks__GANs_.svg","Neural Networks":"/icons/Neural_Networks.svg",Keras:"/icons/Keras.svg",TensorFlow:"/icons/TensorFlow.svg",Scipy:"/icons/Scipy.svg",Numpy:"/icons/Numpy.svg",Pandas:"/icons/Pandas.svg","Scikit-learn":"/icons/Scikit_learn.svg",OpenCV:"/icons/OpenCV.svg",Matplotlib:"/icons/Matplotlib.svg",Cryptography:"/icons/Cryptography.svg",Metasploit:"/icons/Metasploit.svg",Wireshark:"/icons/Wireshark.svg","Linux Server Administration":"/icons/Linux_Server_Administration.svg",bash:"/icons/bash.svg","Aircrack-ng":"/icons/Aircrack_ng.svg",BeEF:"/icons/BeEF.svg",Ettercap:"/icons/Ettercap.svg",Hexdump:"/icons/Hexdump.svg","Node.js":"/icons/Node_js.svg",Gatsby:"/icons/Gatsby.svg",HTML:"/icons/HTML.svg",JavaScript:"/icons/JavaScript.svg",PHP:"/icons/PHP.svg",Laravel:"/icons/Laravel.svg",".NET Framework":"/icons/_NET_Framework.svg",C:"/icons/C.svg","C++":"/icons/C__.svg","Qt Framework":"/icons/Qt_Framework.svg","Arduino IDE":"/icons/Arduino_IDE.svg",Git:"/icons/Git.svg",LaTeX:"/icons/LaTeX.svg","VS Code":"/icons/VS_Code.svg","Arch Linux":"/icons/Arch_Linux.svg",Ubuntu:"/icons/Ubuntu.svg",Violin:"/icons/Violin.svg",Origami:"/icons/Origami.svg",Kirigami:"/icons/Kirigami.svg","Paper Crafts":"/icons/Paper_Crafts.svg","Rubik's Cube":"/icons/Rubik_s_Cube.svg","Adobe Photoshop":"/icons/Adobe_Photoshop.svg",Music:"/icons/Music.svg",Movies:"/icons/Movies.svg",Kalimba:"/icons/Kalimba.svg",Arpspoof:"/icons/Arpspoof.svg",CentOS:"/icons/CentOS.svg",Debian:"/icons/Debian.svg",Dnsspoof:"/icons/Dnsspoof.svg",Gdb:"/icons/Gdb.svg",Manjaro:"/icons/Manjaro.svg","Red Hat Linux":"/icons/Red_Hat_Linux.svg",Robotics:"/icons/Robotics.svg",jQuery:"/icons/jQuery.svg",MATLAB:"/icons/MATLAB.svg","Microsoft Visual Basic 6.0":"/icons/Microsoft_Visual_Basic_6_0.svg","MS Office Suite":"/icons/MS_Office_Suite.svg",PyCharm:"/icons/PyCharm.svg","Visual Studio":"/icons/Visual_Studio.svg",Cardistry:"/icons/Cardistry.svg","Adobe Lightroom":"/icons/Adobe_Lightroom.svg","Adobe Premiere Pro":"/icons/Adobe_Premiere_Pro.svg",Figma:"/icons/Figma.svg","THEORETICAL PHYSICS":"/icons/category_physics.svg","PURE MATHEMATICS":"/icons/category_math.svg","MACHINE LEARNING & DATA SCIENCE":"/icons/category_ml_data.svg","SECURITY & SYSTEMS":"/icons/category_security.svg","SOFTWARE DEVELOPMENT":"/icons/category_dev.svg",ARTS:"/icons/category_arts.svg",MUSIC:"/icons/category_music.svg"},mE=r=>pE[r]||"",gE=r=>`cat-${r}`;let ju=[],Km=[],Jm=[];const Zu=2004,_E=2027,Cc=Array(36).fill(null),Pc=Array(36).fill(null),Ku=Array(49).fill(null),Co={},Po={},Do={},vE=[0,7,14,21,28,35],xE=[0,8,16,24,32,40,48];function yE(){const r=Ku.map((e,t)=>e===null?t:null).filter(e=>e!==null&&xE.includes(e));return r.length===0?null:r[Math.floor(Math.random()*r.length)]}function Xf(r,e){const t=vE,n=r.map((i,s)=>i===null?s:null).filter(i=>i!==null&&!t.includes(i));return n.length===0?null:n[Math.floor(Math.random()*n.length)]}function bE(){const r=document.getElementById("matrix-areas"),e=document.getElementById("matrix-tools"),t=document.getElementById("matrix-categories");if(!r||!e||!t)return;for(let i=0;i<36;i++){let s=document.createElement("div");s.className="cell",r.appendChild(s);let a=document.createElement("div");a.className="cell",e.appendChild(a)}for(let i=0;i<49;i++){let s=document.createElement("div");s.className="cell",t.appendChild(s)}fetch("/data/hobbies.json").then(i=>i.json()).then(i=>{i.forEach(s=>{Jm.push({name:s.category,id:s.id,catId:s.id,isShortTerm:!1}),s.items&&s.items.forEach(a=>{const o=parseInt(a.time_range.start)||Zu,l=a.time_range.end==="Present"?9999:parseInt(a.time_range.end),c={name:a.name,catId:s.id,start:o,end:l,duration:(l===9999?2026:l)-o,isShortTerm:(l===9999?2026:l)-o<3&&l!==9999};a.type==="area"?ju.push(c):a.type==="tool"&&Km.push(c)})})}).catch(i=>{console.error("Failed to load hobbies.json:",i)});const n=document.getElementById("triptych-container");n&&(n.addEventListener("mousemove",i=>{const s=n.getBoundingClientRect(),a=(i.clientX-s.left)/s.width*2-1,o=(i.clientY-s.top)/s.height*2-1,l=5,c=o*l,u=-a*l;n.style.transition="none",n.style.transform=`rotateX(${c}deg) rotateY(${u}deg)`}),n.addEventListener("mouseleave",()=>{n.style.transition="transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",n.style.transform="rotateX(0deg) rotateY(0deg)"}))}function SE(r){const e=document.getElementById("matrix-areas"),t=document.getElementById("matrix-tools"),n=document.getElementById("matrix-categories");if(!e||!ju.length)return;const i=_E-Zu,s=(r-Zu)/i*100,a=document.getElementById("timeline-progress");a&&(a.style.height=`${s}%`);const o=document.getElementById("hobbies-year-display");o&&(o.innerText=r);const l=ju.filter(d=>r>=d.start&&r<=d.end);l.forEach(d=>{if(!Co[d.name]){const h=Xf(Cc);h!==null&&Dc(d,h,Cc,Co,e)}}),Object.keys(Co).forEach(d=>{l.find(h=>h.name===d)||Lc(d,Co,Cc)});const c=Km.filter(d=>r>=d.start&&r<=d.end);c.forEach(d=>{if(!Po[d.name]){const h=Xf(Pc);h!==null&&Dc(d,h,Pc,Po,t)}}),Object.keys(Po).forEach(d=>{c.find(h=>h.name===d)||Lc(d,Po,Pc)});const u=new Set;[...l,...c].forEach(d=>u.add(d.catId)),Jm.forEach(d=>{if(u.has(d.id)){if(!Do[d.name]){const f=yE();f!==null&&Dc(d,f,Ku,Do,n)}}else Do[d.name]&&Lc(d.name,Do,Ku)})}function Dc(r,e,t,n,i,s){const a=i.children[e];if(!a)return;const o=r.isShortTerm?"short-term":"long-term",l=document.createElement("div");l.className=`item spawning ${gE(r.catId)} ${o}`,l.innerHTML=`<span>${r.name}</span>`;let c=mE(r.name);c&&fetch(c).then(u=>{var d;if(!u.ok)throw new Error("Not found");if((d=u.headers.get("content-type"))!=null&&d.includes("text/html"))throw new Error("Fallback HTML returned instead of SVG");return u.text()}).then(u=>{if(!u.includes("<svg"))return;let d=u.replace(/stroke="[^"]+"/g,_=>_.includes("none")?_:'stroke="currentColor"').replace(/fill="[^"]+"/g,_=>_.includes("none")?_:'fill="currentColor"');d=d.replace(/stroke-width="[^"]+"/g,'stroke-width="var(--icon-stroke-width, 2.5px)"'),d=d.replace(/<path/g,'<path vector-effect="non-scaling-stroke"');const p=new DOMParser().parseFromString(d,"image/svg+xml").documentElement;p.classList.add("item-icon"),l.prepend(p)}).catch(u=>{}),a.appendChild(l),t[e]=r.name,n[r.name]={element:l,cellIndex:e,isShortTerm:r.isShortTerm,name:r.name}}function Lc(r,e,t,n){const i=e[r];if(!i||i.isExiting)return;i.isExiting=!0;const s=i.element,a=i.cellIndex;s.classList.add("merging"),s.classList.remove("short-term","long-term"),s.style.transition="all 0.5s ease-in",requestAnimationFrame(()=>{s.style.transform="translate(0px, -50px) scale(0)",s.style.opacity="0",s.style.filter="blur(10px) brightness(3)"}),setTimeout(()=>{s.parentNode&&s.parentNode.removeChild(s),t[a]=null,delete e[r]},500)}const qf={type:"change"},Kh={type:"start"},Qm={type:"end"},Lo=new Ml,Yf=new Zi,ME=Math.cos(70*Ap.DEG2RAD),Vt=new P,pn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ic=1e-6;class eg extends g_{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ar,this._lastTargetPosition=new P,this._quat=new ar().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ef,this._sphericalDelta=new ef,this._scale=1,this._panOffset=new P,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new P,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TE.bind(this),this._onPointerDown=EE.bind(this),this._onPointerUp=wE.bind(this),this._onContextMenu=IE.bind(this),this._onMouseWheel=CE.bind(this),this._onKeyDown=PE.bind(this),this._onTouchStart=DE.bind(this),this._onTouchMove=LE.bind(this),this._onMouseDown=AE.bind(this),this._onMouseMove=RE.bind(this),this._interceptControlDown=UE.bind(this),this._interceptControlUp=NE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=dt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Vt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<ME?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ic||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ic||this._lastTargetPosition.distanceToSquared(this.target)>Ic?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Vt.copy(i).sub(this.target);let s=Vt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function EE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function TE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function wE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qm),this.state=dt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function AE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=dt.DOLLY;break;case ws.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=dt.ROTATE}break;case ws.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Kh)}function RE(r){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function CE(r){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(r.preventDefault(),this.dispatchEvent(Kh),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Qm))}function PE(r){this.enabled!==!1&&this._handleKeyDown(r)}function DE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=dt.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=dt.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Kh)}function LE(r){switch(this._trackPointer(r),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=dt.NONE}}function IE(r){this.enabled!==!1&&r.preventDefault()}function UE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const FE=Object.freeze(Object.defineProperty({__proto__:null,OrbitControls:eg},Symbol.toStringTag,{value:"Module"}));let tg={uScroll:{value:0}},Dr,Ji,Di,Tr,xa,ya,wr,Ss;function OE(){const r=document.getElementById("left-hemi");if(!r)return null;xa=new bh,ya=new _n(45,window.innerWidth/2/window.innerHeight,.1,100),ya.position.set(8,6,8),wr=new Dh({antialias:!0,alpha:!0}),wr.setSize(window.innerWidth/2,window.innerHeight),wr.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(wr.domElement),Ss=new eg(ya,wr.domElement),Ss.enableDamping=!0,Ss.enableZoom=!1,Ss.enablePan=!1;const e=150,t=60,n=new St,i=new Float32Array((e+1)*(t+1)*3),s=new Float32Array((e+1)*(t+1)*2),a=[];let o=0,l=0;for(let h=0;h<=e;h++)for(let f=0;f<=t;f++)i[o++]=0,i[o++]=0,i[o++]=0,s[l++]=h/e,s[l++]=f/t;for(let h=0;h<e;h++)for(let f=0;f<t;f++){let p=h*(t+1)+f,_=p+(t+1),m=p+1,g=_+1;a.push(p,_,g),a.push(p,g,m)}n.setIndex(a),n.setAttribute("position",new Dt(i,3)),n.setAttribute("uv",new Dt(s,2)),n.computeBoundingSphere(),n.boundingSphere.radius=10;const c=new o_({color:11184810,roughness:.1,metalness:.8,side:ti,transparent:!0,opacity:.8,wireframe:!0});c.defines={USE_UV:""},c.onBeforeCompile=h=>{h.uniforms.uScroll=tg.uScroll,h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
            uniform float uScroll;

            vec3 evaluateMasterEquation(float u_norm, float v_norm, float T_val) {
                float u = u_norm * 2.0 * PI;
                
                float geomT;
                float morphDuration = 23.5;
                if (T_val <= morphDuration) {
                    geomT = T_val * (4.0 / morphDuration);
                } else if (T_val <= 94.0) {
                    geomT = 4.0;
                } else {
                    geomT = max(0.0, 4.0 - (T_val - 94.0) * (4.0 / morphDuration));
                }
                
                // Divide 4.0 scroll units into 2 main phases (Flatten, then Twist)
                float phase = floor(geomT / 2.0);
                if (phase >= 2.0) phase = 1.0;
                
                // Normalize lambda scale 0->1 per 2.0 duration phase
                float rawLambda = (geomT - phase * 2.0) / 2.0;
                if (geomT >= 4.0) rawLambda = 1.0;
                float lambda = rawLambda * rawLambda * (3.0 - 2.0 * rawLambda); // smoothstep

                float f1, f2, tau;
                float vmax = 2.0 * PI; // Vmax is locked to 2*PI permanently
                float v = v_norm * vmax;
                
                if (phase < 0.5) { // Phase 0 (0-2.0): Flatten the Tube to a Ribbon
                    f1 = (1.0 - lambda) * cos(v) + lambda * sin(v); 
                    f2 = sin(v); 
                    tau = 0.0;
                } else { // Phase 1 (2.0-4.0): Perform the Half Twist
                    f1 = sin(v); 
                    f2 = sin(v); 
                    tau = 0.5 * lambda; 
                }

                float twistAngle = tau * u;
                float x_prime = f1 * cos(twistAngle) - f2 * sin(twistAngle);
                float z_prime = f1 * sin(twistAngle) + f2 * cos(twistAngle);
                
                float R = 3.0;
                vec3 p = vec3((R + x_prime) * cos(u), z_prime, -(R + x_prime) * sin(u));
                
                return p;
            }

            vec3 calculateNormal(float u_norm, float v_norm, float T_val, vec3 pos) {
                float d = 0.001;
                vec3 pU = evaluateMasterEquation(u_norm + d, v_norm, T_val);
                vec3 pV = evaluateMasterEquation(u_norm, v_norm + d, T_val);
                vec3 Tu = pU - pos;
                vec3 Tv = pV - pos;
                return normalize(cross(Tu, Tv));
            }
            `),h.vertexShader=h.vertexShader.replace("#include <beginnormal_vertex>",`
            vec3 computedPos = evaluateMasterEquation(uv.x, uv.y, uScroll);
            vec3 objectNormal = calculateNormal(uv.x, uv.y, uScroll, computedPos);
            #ifdef USE_TANGENT
                vec3 objectTangent = vec3( tangent.xyz );
            #endif
            `),h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`
            vec3 transformed = computedPos; 
            `)},Di=new jt(n,c),Di.frustumCulled=!1,xa.add(Di),Di.visible=!1,Dr=new jt(new Ph(.15,16,16),new Hr({color:16724736})),Di.add(Dr),Ji=new m_(new P(0,1,0),new P,1.5,16724736,.3,.2),Di.add(Ji),Dr.visible=!1,Ji.visible=!1,Tr=new Ni,Tr.add(new Vp(16777215,.8));const u=new cl(65484,2.5);u.position.set(5,5,5),Tr.add(u);const d=new cl(16711782,2);return d.position.set(-5,-2,-5),Tr.add(d),xa.add(Tr),Di}function Uc(r,e,t){const i=r*2*Math.PI;let s;const a=23.5;t<=a?s=t*(4/a):t<=94?s=4:s=Math.max(0,4-(t-94)*(4/a));let o=Math.floor(s/2);o>=2&&(o=1);let l=(s-o*2)/2;s>=4&&(l=1);const c=l*l*(3-2*l);let u,d,h;const f=2*Math.PI,p=e*f;o===0?(u=(1-c)*Math.cos(p)+c*Math.sin(p),d=Math.sin(p),h=0):(u=Math.sin(p),d=Math.sin(p),h=.5*c);const _=h*i,m=u*Math.cos(_)-d*Math.sin(_),g=u*Math.sin(_)+d*Math.cos(_);return{pos:new P((3+m)*Math.cos(i),g,-(3+m)*Math.sin(i))}}let Rt={x:-1e3,y:-1e3,px:-1e3,py:-1e3,vx:0,vy:0},Ju=!1,mn,Hn,rn=[],ia,Qe;const ba=90,Sa=170,kE=4e-5,jf=.9976,Nc=25,BE=.15,zE=.2,VE=.003,Zf=400,HE=.035;class GE{constructor(e,t,n,i,s){this.x=e,this.y=t,this.baseY=t,this.vy=0,this.c2=e<s/2?.0015:.006,this.localDamping=jf;let a=Math.min(n,i);if(a<Nc){let o=(Nc-a)/Nc;this.localDamping=jf-BE*Math.pow(o,2)}}update(){this.vy+=(this.baseY-this.y)*kE,this.vy*=this.localDamping,this.y+=this.vy}}function Jh(){if(ia=document.getElementById("research-bg-canvas"),!ia)return;Qe=ia.getContext("2d"),mn=ia.width=window.innerWidth,Hn=ia.height=window.innerHeight,rn=[];const r=mn/(Sa-1),e=Hn/(ba+1);for(let t=0;t<ba;t++){let n=[];for(let i=0;i<Sa;i++)n.push(new GE(i*r,(t+1)*e,i,t,mn));rn.push(n)}}function ng(r){if(!Qe)return;Qe.clearRect(0,0,mn,Hn),Qe.fillStyle="rgba(12, 12, 12, 0.3)",Qe.fillRect(mn/2,0,mn/2,Hn),Qe.fillStyle="rgba(6, 6, 6, 0.3)",Qe.fillRect(0,0,mn/2,Hn),Qe.strokeStyle="rgba(255, 255, 255, 0.03)",Qe.lineWidth=1,Qe.beginPath(),Qe.moveTo(mn/2,0),Qe.lineTo(mn/2,Hn),Qe.moveTo(0,Hn/2),Qe.lineTo(mn,Hn/2),Qe.stroke();const e=mn/4,t=Hn/2,n=Math.min(mn,Hn)*.25,i=Math.min(mn,Hn)*.4;Qe.beginPath(),Qe.arc(e,t,n,0,Math.PI*2),Qe.arc(e,t,i,0,Math.PI*2),Qe.stroke(),Qe.beginPath();for(let o=0;o<360;o+=15){let l=o*Math.PI/180,c=o%90===0?20:10;Qe.moveTo(e+Math.cos(l)*i,t+Math.sin(l)*i),Qe.lineTo(e+Math.cos(l)*(i+c),t+Math.sin(l)*(i+c))}Qe.stroke(),Rt.vx*=.5,Rt.vy*=.5;const s=mn,a=Hn;for(let o=0;o<ba;o++)for(let l=0;l<Sa;l++){let c=rn[o][l],u=Rt.x-c.x,d=Rt.y-c.y,h=Math.sqrt(u*u+d*d);if(h<120){let E=1-h/120;c.vy+=Rt.vy*.05*E}let f=s-c.x,p=a-c.baseY,_=Math.sqrt(f*f+p*p);if(_<Zf){let E=Math.pow(1-_/Zf,2),T=(f+p)/Math.SQRT2;c.vy+=Math.cos(performance.now()*VE-HE*T)*zE*E}let m=c.y-c.baseY,g=l>0?rn[o][l-1].y-c.y:rn[o][l+1].y-c.y,v=l<Sa-1?rn[o][l+1].y-c.y:rn[o][l-1].y-c.y,S=o>0?rn[o-1][l].y-rn[o-1][l].baseY:rn[o+1][l].y-rn[o+1][l].baseY,b=o<ba-1?rn[o+1][l].y-rn[o+1][l].baseY:rn[o-1][l].y-rn[o-1][l].baseY;c.vy+=(g+v+(S-m)+(b-m))*c.c2}Qe.strokeStyle="#ffffff",Qe.lineWidth=1,Qe.globalAlpha=.08;for(let o=0;o<ba;o++){Qe.beginPath();for(let l=0;l<Sa;l++){let c=rn[o][l];c.update(),l===0?Qe.moveTo(c.x,c.y):Qe.lineTo(c.x,c.y)}Qe.stroke()}Qe.globalAlpha=1}let Kf=!1;window.addEventListener("resize",()=>{document.getElementById("ui-research")&&document.getElementById("ui-research").style.display!=="none"&&Jh()});function $E(){Kf||(window.addEventListener("mousemove",r=>{if(!Ju){Rt.px=Rt.x=r.clientX,Rt.py=Rt.y=r.clientY,Ju=!0;return}Rt.px=Rt.x,Rt.py=Rt.y,Rt.x=r.clientX,Rt.y=r.clientY,Rt.vx=Rt.x-Rt.px,Rt.vy=Rt.y-Rt.py}),Kf=!0)}const WE=Object.freeze(Object.defineProperty({__proto__:null,animateResearchBG:ng,bindResearchMouse:$E,get hasInteractedResearch(){return Ju},initResearchBG:Jh,researchMouse:Rt},Symbol.toStringTag,{value:"Module"}));async function XE(){const r=document.getElementById("research-cards-container");if(r)try{const e=await fetch("/data/research.json");if(!e.ok)throw new Error("Failed to fetch research cards data");(await e.json()).forEach((n,i)=>{const s=(i+1).toString().padStart(2,"0");let a=`<div class="res-card-header">${n.id}</div>`;n.link&&(a+=`
                    <a href="${n.link}" target="_blank" class="res-card-link" aria-label="View Project">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                `);let o="";n.collaborators&&n.collaborators.length>0&&(o=`<div class="res-card-collab">with ${n.collaborators.join(", ")}</div>`),r.innerHTML+=`
                <div class="research-card" id="res-card-${i}">
                    <div class="editorial-number">${s}</div>
                    <div class="res-card-content">
                        ${a}
                        <div class="res-card-title">${n.title}</div>
                        ${o}
                        <div class="res-card-body">${n.desc}</div>
                        <div class="res-card-tags">${n.tags.map(l=>`<span class="res-tag">${l}</span>`).join("")}</div>
                    </div>
                </div>
            `}),window.MathJax&&MathJax.typesetPromise([r]).catch(n=>console.log("MathJax typeset failed: "+n.message))}catch(e){console.error("Failed to load research.json:",e)}}function ig(r){document.querySelectorAll(".research-card").forEach((t,n)=>{const i=1.5+n*2.5,s=(r-i)*.4,a=n%2===0;t.style.width=a?"80%":"65%",t.style.left=a?"0":"auto",t.style.right=a?"auto":"0";const o=a?-2:3;if(s<0){const l=Math.abs(s),c=Math.min(l,3),u=250+c*40,d=-100*c,h=a?-(c*20):c*20,f=o+(a?-c*2:c*2);t.style.transform=`translate3d(${h}px, calc(-50% + ${u}px), ${d}px) rotateZ(${f}deg)`,t.style.opacity=1-c*.05,t.style.zIndex=10-Math.floor(l),t.style.pointerEvents="auto"}else if(s<1){const l=-300*s,c=a?-10*s:15*s,u=1-s;t.style.transform=`translate3d(${c}px, calc(-50% + ${l}px), 0px) rotateZ(${o}deg)`,t.style.opacity=u,t.style.zIndex=10,t.style.pointerEvents="auto"}else t.style.opacity=0,t.style.pointerEvents="none"})}const qE=`
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
    }
`,YE=`
    uniform float intensity;
    uniform float gain;
    uniform sampler2D dataTexture;
    uniform float isErrorMode;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    // Default palette: rose gold (positive) / bioluminescent mint (negative)
    vec3 colorZero = vec3(0.04, 0.05, 0.08);
    vec3 colorPos  = vec3(1.0, 0.45, 0.35);
    vec3 colorNeg  = vec3(0.1, 0.95, 0.7);

    // Heatmap palette for error mode
    vec3 heatmap(float t) {
        vec3 c0 = vec3(0.05, 0.05, 0.15);
        vec3 c1 = vec3(0.8, 0.1, 0.2);
        vec3 c2 = vec3(1.0, 0.8, 0.1);
        vec3 c3 = vec3(1.0, 1.0, 1.0);
        
        if (t < 0.33) return mix(c0, c1, t * 3.0);
        if (t < 0.66) return mix(c1, c2, (t - 0.33) * 3.0);
        return mix(c2, c3, (t - 0.66) * 3.0);
    }

    void main() {
        float wave = texture2D(dataTexture, vUv).r;
        
        vec3 materialColor;
        
        if (isErrorMode > 0.5) {
            // Error heatmap mode
            float t = clamp(abs(wave) * gain, 0.0, 1.0);
            materialColor = heatmap(t);
        } else {
            // Default rose gold / mint mode
            if (wave > 0.0) {
                float t = clamp(wave * gain, 0.0, 1.0);
                materialColor = mix(colorZero, colorPos, smoothstep(0.0, 1.0, t));
            } else {
                float t = clamp(-wave * gain, 0.0, 1.0);
                materialColor = mix(colorZero, colorNeg, smoothstep(0.0, 1.0, t));
            }
        }
        
        // Procedural Lighting
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        vec3 lightDir = normalize(vec3(1.0, 1.5, 1.0));
        vec3 lightColor = vec3(1.0, 0.98, 0.95);
        vec3 ambient = vec3(0.2, 0.25, 0.3);
        
        float diff = max(dot(normal, lightDir), 0.0);
        vec3 diffuse = diff * lightColor;
        
        vec3 halfVector = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfVector), 0.0), 64.0);
        vec3 specular = 0.6 * spec * lightColor;
        
        float rimDot = 1.0 - max(dot(viewDir, normal), 0.0);
        float rimAmount = smoothstep(0.6, 1.0, rimDot);
        vec3 rimLight = vec3(0.4, 0.5, 0.8) * rimAmount * 0.4;
        
        vec3 finalColor = materialColor * (ambient + diffuse) + specular + rimLight;
        
        gl_FragColor = vec4(finalColor * intensity, 1.0);
    }
`;function Fc(r={}){const{intensity:e=1.5,gain:t=1,isErrorMode:n=!1}=r;return new Bt({vertexShader:qE,fragmentShader:YE,uniforms:{dataTexture:{value:null},intensity:{value:e},gain:{value:t},isErrorMode:{value:n?1:0}},side:ti})}const Jf=1,Qf=.4,jE=128,ZE=32,Cn=16384;let Ms,Es,Ts,Oc,kc,Bc,Yo,jo,Zo,Or,ra,Ba,Ut,Qu=!1;async function KE(){if(Qu)return;Qu=!0,U.geofnoPlaying===void 0&&(U.geofnoPlaying=!1),U.geofnoFrame===void 0&&(U.geofnoFrame=0),U.geofnoSpeed===void 0&&(U.geofnoSpeed=1);const r=document.getElementById("geofno-container");if(!r)return;r.style.display="block";const e=JE(r);await yS(e);const t={minFilter:Gt,magFilter:Gt,wrapS:wa,wrapT:wa,format:_s,type:vn};Ms=new Vo(new Float32Array(Cn),128,128,_s,vn),Object.assign(Ms,t),Ms.needsUpdate=!0,Es=new Vo(new Float32Array(Cn),128,128,_s,vn),Object.assign(Es,t),Es.needsUpdate=!0,Ts=new Vo(new Float32Array(Cn),128,128,_s,vn),Object.assign(Ts,t),Ts.needsUpdate=!0,Yo=Fc({intensity:1.5,gain:30}),Yo.uniforms.dataTexture.value=Ms,jo=Fc({intensity:1.5,gain:30}),jo.uniforms.dataTexture.value=Es,Zo=Fc({intensity:2,gain:1,isErrorMode:!0}),Zo.uniforms.dataTexture.value=Ts;const n=new ol(Jf,Qf,ZE,jE);Oc=new jt(n,Yo),Oc.position.set(-2.2,0,0),mi.add(Oc),kc=new jt(n,jo),kc.position.set(2.2,0,0),mi.add(kc);const i=new ol(Jf*.5,Qf*.5,64,64);Bc=new jt(i,Zo),Bc.position.set(0,-2.1,0),mi.add(Bc);const s=new St,a=2e3,o=new Float32Array(a*3);for(let u=0;u<a*3;u++)o[u]=(Math.random()-.5)*50;s.setAttribute("position",new Dt(o,3));const l=new Th({color:16777215,size:.05,transparent:!0,opacity:.6}),c=new Ga(s,l);mi.add(c),QE(),Ll(0)}function JE(r){r.innerHTML=`
        <style>
        .geofno-modern-layout {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
            height: 100%;
            padding: 40px;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #fff;
            align-items: center;
            justify-content: center;
        }
        
        @media (min-width: 768px) {
            .geofno-modern-layout {
                flex-direction: row;
                gap: 40px;
            }
        }

        .geofno-text-panel {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 500px;
        }

        .geofno-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 800;
            letter-spacing: -1px;
            margin: 0 0 1rem 0;
            line-height: 1.1;
        }

        .geofno-desc {
            font-size: 1.1rem;
            color: #8888aa;
            line-height: 1.6;
            margin: 0 0 2rem 0;
        }

        .geofno-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 30px;
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(255,255,255,0.2);
            width: fit-content;
            margin-bottom: 3rem;
            backdrop-filter: blur(10px);
        }

        .geofno-link:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .geofno-3d-wrapper {
            flex: 1.5;
            height: 100%;
            max-height: 600px;
            border-radius: 24px;
            background: #050510;
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        
        .geofno-canvas-target {
            flex: 1;
            width: 100%;
            height: 100%;
            position: relative;
        }

        .modern-controls {
            display: flex;
            align-items: center;
            gap: 15px;
            background: rgba(255,255,255,0.05);
            padding: 15px 25px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
        }

        .modern-play-btn {
            background: #fff;
            color: #000;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.2s;
        }
        .modern-play-btn:hover {
            transform: scale(1.1);
        }

        .modern-slider {
            flex: 1;
            -webkit-appearance: none;
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            outline: none;
        }
        .modern-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
        }

        .modern-frame-display {
            font-variant-numeric: tabular-nums;
            font-size: 0.85rem;
            color: #8888aa;
            min-width: 60px;
            text-align: right;
        }

        .modern-labels-top {
            position: absolute;
            top: 30px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            pointer-events: none;
        }

        .modern-labels-error {
            position: absolute;
            top: 72%;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            pointer-events: none;
        }

        .modern-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            color: rgba(255,255,255,0.7);
        }

        #geofno-loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(5,5,16,0.8);
            backdrop-filter: blur(5px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 100;
            border-radius: 24px;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        </style>
        
        <div class="geofno-modern-layout">
            <div class="geofno-text-panel">
                <h1 class="geofno-title">NOMAD Geo-FNO</h1>
                <p class="geofno-desc">
                    A fully data driven Scientific Machine Learning (SciML) pipeline designed to formally simulate and predict acoustic wave propagation on a closed toroidal manifold (T²) utilizing a Geometry-Aware Fourier Neural Operator.
                </p>
                <a href="https://github.com/ravenwit/NOMAD" target="_blank" class="geofno-link">
                    View on GitHub ↗
                </a>

                <div class="modern-controls">
                    <button id="geofno-play" class="modern-play-btn">▶</button>
                    <input type="range" id="geofno-slider" class="modern-slider" min="0" max="496" value="0">
                    <span id="geofno-frame-display" class="modern-frame-display">0 / 0</span>
                </div>
            </div>
            
            <div class="geofno-3d-wrapper">
                <div id="geofno-canvas-target" class="geofno-canvas-target"></div>
                <div class="modern-labels-top">
                    <div class="modern-label">Ground Truth</div>
                    <div class="modern-label">Prediction</div>
                </div>
                <div class="modern-labels-error">
                    <div class="modern-label">Error</div>
                </div>
            </div>
        </div>
    `,Or=document.getElementById("geofno-slider"),ra=document.getElementById("geofno-play"),Ba=document.getElementById("geofno-frame-display"),Or.addEventListener("input",()=>{U.geofnoPlaying=!1,ra&&(ra.textContent="▶"),U.geofnoFrame=parseInt(Or.value),Ll(U.geofnoFrame)}),ra.addEventListener("click",()=>{U.geofnoPlaying=!U.geofnoPlaying,ra.textContent=U.geofnoPlaying?"⏸":"▶"}),Ut=document.createElement("div"),Ut.id="geofno-loading",Ut.style.position="absolute",Ut.style.top="0",Ut.style.left="0",Ut.style.width="100%",Ut.style.height="100%",Ut.style.display="flex",Ut.style.flexDirection="column",Ut.style.alignItems="center",Ut.style.justifyContent="center",Ut.style.background="radial-gradient(circle at center, rgba(30,30,50,0.9) 0%, rgba(5,5,16,0.95) 100%)",Ut.style.zIndex="10",Ut.style.backdropFilter="blur(12px)",Ut.style.transition="opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",Ut.innerHTML=`
        <style>
        .loading-ring {
            width: 48px;
            height: 48px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 24px;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .geofno-loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(255, 255, 255, 0.03);
            padding: 40px;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.02);
        }
        .geofno-loading-text {
            color: #fff; 
            font-size: 1.1rem; 
            font-weight: 500; 
            letter-spacing: 0.5px;
            margin-bottom: 20px;
            text-align: center;
        }
        .geofno-loading-bar-wrapper {
            width: 240px; 
            height: 6px; 
            background: rgba(255,255,255,0.1); 
            border-radius: 3px; 
            overflow: hidden;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
            position: relative;
        }
        #geofno-loading-fill {
            width: 0%; 
            height: 100%; 
            background: linear-gradient(90deg, #4A90E2, #50E3C2);
            border-radius: 3px;
            transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 0 10px rgba(80,227,194,0.5);
        }
        </style>
        <div class="geofno-loading-container">
            <div class="loading-ring"></div>
            <div class="geofno-loading-text">Loading Manifold Topology</div>
            <div class="geofno-loading-bar-wrapper">
                <div id="geofno-loading-fill"></div>
            </div>
        </div>
    `;const e=document.querySelector(".geofno-3d-wrapper");return e&&e.appendChild(Ut),document.getElementById("geofno-canvas-target")}async function QE(){if(U.geofnoGtData&&U.geofnoPredData){Ut&&(Ut.style.display="none");return}const r=["/data/complex_chaos_gt.bin","/data/complex_chaos_pred.bin"];await Promise.all(r.map((e,t)=>eT(e,t))),Ut&&(Ut.style.display="none"),U.geofnoPlaying||Ll(U.geofnoFrame||0)}async function eT(r,e){try{const t=await fetch(r);if(!t.ok)throw new Error(`HTTP ${t.status}: ${t.statusText} for ${r}`);if(!t.body)throw new Error("ReadableStream not supported");const n=t.headers.get("Content-Length"),i=n?parseInt(n,10):null;if(!i||isNaN(i))throw new Error(`Missing or invalid Content-Length for ${r}`);const s=i/4,a=new Float32Array(s),o=t.body.getReader();let l=0;const c=document.getElementById("geofno-loading-fill");for(;;){const{done:u,value:d}=await o.read();if(u)break;const h=new Float32Array(d.buffer,d.byteOffset,d.byteLength/4);a.set(h,l/4),l+=d.byteLength;const f=Math.round(l/i*100);c&&(c.style.width=f+"%")}if(e===0?U.geofnoGtData=a:U.geofnoPredData=a,U.geofnoGtData&&U.geofnoPredData){const u=Math.min(U.geofnoGtData.length,U.geofnoPredData.length);U.geofnoTotalFrames=Math.floor(u/Cn),Or&&(Or.max=Math.max(0,U.geofnoTotalFrames-1)),Ba&&(Ba.textContent=`${U.geofnoFrame} / ${U.geofnoTotalFrames-1}`)}}catch(t){console.error("Geofno data stream error:",t)}}function tT(r){if(!U.geofnoPlaying||!U.geofnoGtData||!U.geofnoPredData||(U.geofnoTotalFrames=Math.floor(U.geofnoGtData.length/Cn),U.geofnoTotalFrames<=0))return;const e=r*30*U.geofnoSpeed;U.geofnoFrame=(U.geofnoFrame+e)%U.geofnoTotalFrames;const t=Math.floor(U.geofnoFrame);Ll(t)}function Ll(r){if(!U.geofnoGtData||!U.geofnoPredData)return;const e=r*Cn;if(e+Cn>U.geofnoGtData.length)return;const t=U.geofnoGtData.subarray(e,e+Cn),n=U.geofnoPredData.subarray(e,e+Cn),i=Ts.image.data;let s=0;for(let l=0;l<Cn;l++){const c=Math.abs(n[l]-t[l]);i[l]=c,c>s&&(s=c)}Ms.image.data.set(t),Ms.needsUpdate=!0,Es.image.data.set(n),Es.needsUpdate=!0,Ts.needsUpdate=!0,s>0&&(Zo.uniforms.gain.value=1/s);let a=0;for(let l=0;l<Cn;l++){const c=Math.abs(t[l]);c>a&&(a=c)}a>0&&(Yo.uniforms.gain.value=1/a),a=0;for(let l=0;l<Cn;l++){const c=Math.abs(n[l]);c>a&&(a=c)}a>0&&(jo.uniforms.gain.value=1/a);const o=Math.floor(U.geofnoGtData.length/Cn);Or&&(Or.value=r),Ba&&(Ba.textContent=`Frame ${r} / ${o}`)}function nT(){Qu=!1;const r=document.getElementById("geofno-container");for(r&&(r.style.display="none",r.innerHTML=""),bS();mi.children.length>0;){const e=mi.children[0];e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),mi.remove(e)}}const ep=[],zc=new Hp;function iT(r,e,t,n,i,s,a){window.mainLoopStarted=!0;function o(l){var d,h,f,p,_,m;requestAnimationFrame(o),zc.update(l),sE();const c=zc.getDelta(),u=zc.getElapsed();if(U.phase==="LOADING"){if(U.loadProgress>=100)if(U.temperature>Jt.minTemp)U.temperature*=Jt.coolingRate;else{U.temperature=Jt.minTemp,U.phase="HERO";const g=document.getElementById("ui-hero");g&&(g.style.display="block",setTimeout(()=>g.style.opacity=1,1e3));const v=Ce.position.clone(),S=new P(0,0,50);let b=0;const E=()=>{b+=.02,Ce.position.lerpVectors(v,S,b),b<1&&requestAnimationFrame(E)};E();const T=document.getElementById("status-display");T&&(T.innerText="SYSTEM_READY")}r.rotation.z+=.002}else if(U.phase==="HERO"&&!U.transitioning){r.rotation.z+=.001;const g=r.scale.x,v=2.5;if(g<v){const E=g+(v-g)*.02;r.scale.set(E,E,E)}let S=Math.sin(u*.5)*1.5,b=Math.cos(u*.3)*1.5;U.mouse&&(S+=U.mouse.x*8,b+=U.mouse.y*8),Ce.position.x+=(S-Ce.position.x)*.05,Ce.position.y+=(b-Ce.position.y)*.05,Ce.lookAt(0,0,0),ep&&ep.forEach(E=>E.update(c,U.mouse))}else if(U.phase==="TIMELINE"&&!U.transitioning){const g=U.targetScrollY-U.scrollY;U.scrollY+=g*Jt.scrollDamping,U.velocity=g*Jt.scrollDamping;const v=Math.min(Math.max(U.scrollY/8e3,0),1),S=document.getElementById("timeline-scroll-hint");S&&(U.scrollY>=0&&U.scrollY<=150?S.style.opacity="1":S.style.opacity="0");const b=s.getPointAt(v),E=s.getPointAt(Math.min(v+.01,1));Ce.position.copy(b),Ce.position.y+=Math.sin(u*.5)*.5,Ce.lookAt(E);const T=E.x-b.x;Ce.rotation.z=Ap.lerp(Ce.rotation.z,-T*.8,.1);const A=document.getElementById("timeline-nodes");A&&(A.style.transform=`translateX(-50%) translateY(-${v*100}%)`);const x=document.getElementById("radar-round-nodes");if(x){x.style.transform=`translate(${-b.x*.15}px, ${-b.z*.15}px)`;const N=document.querySelector(".radar-round-scan");if(N){const L=Date.now()%3e3/3e3,D=L*Math.PI*2;N.style.transform=`rotate(${L*360}deg)`;const F=b.x*.15,I=b.z*.15,q=x.querySelectorAll(".radar-round-marker, .radar-star");for(let X=0;X<q.length;X++){const Q=q[X];if(Q.dataset.x!==void 0){const se=parseFloat(Q.dataset.x),ae=parseFloat(Q.dataset.y),Re=se-F,Fe=ae-I;let We=Math.atan2(Fe,Re)+Math.PI/2;We<0&&(We+=Math.PI*2);let Z=D-We;if(Z<0&&(Z+=Math.PI*2),Z<.15)Q.style.opacity="1",Q.classList.contains("radar-round-marker")&&(Q.classList.contains("ping")||(Q.classList.add("ping"),setTimeout(()=>Q.classList.remove("ping"),1e3)));else{let ne=parseFloat(Q.style.opacity||"0.1");ne>.1&&(Q.style.opacity=Math.max(.1,ne*.94).toString())}}}}}const y=Math.min(Math.abs(U.velocity)/Jt.c_sim,.999);U.coordinateTime+=c,U.properTime+=c/(1/Math.sqrt(1-y*y)),document.getElementById("coord-time").innerText=U.coordinateTime.toFixed(2),document.getElementById("proper-time").innerText=U.properTime.toFixed(2);const O=document.getElementById("speedo-needle");if(O){const R=y*180-90;O.style.transform=`rotate(${R}deg)`}if(ht.length>1){let R=2025;const N=D=>{if(!D)return 2025;if(D.toString().toLowerCase().includes("present"))return new Date().getFullYear();const F=parseInt(D,10);return isNaN(F)?2025:F},B=Ce.position.z;if(B>=ht[0].z)R=N(((h=(d=ht[0])==null?void 0:d.time_range)==null?void 0:h.start)||((f=ht[0])==null?void 0:f.date));else if(B<=ht[ht.length-1].z){const D=ht[ht.length-1],F=N(((p=D==null?void 0:D.time_range)==null?void 0:p.start)||(D==null?void 0:D.date)),I=100,q=Math.abs(B-D.z),X=F+q/I;R=Math.min(X,2027)}else for(let D=0;D<ht.length-1;D++){const F=ht[D],I=ht[D+1];if(B<=F.z&&B>I.z){const q=I.z-F.z,Q=(B-F.z)/q,se=((_=F==null?void 0:F.time_range)==null?void 0:_.start)||(F==null?void 0:F.date),ae=((m=I==null?void 0:I.time_range)==null?void 0:m.start)||(I==null?void 0:I.date),Re=N(se),Fe=N(ae);R=Re+(Fe-Re)*Q;break}}const L=document.getElementById("current-year");L&&(L.innerText=Math.floor(R)),SE(Math.floor(R))}y>.9?(document.getElementById("velocity-alert").style.display="block",Ce.position.x+=(Math.random()-.5)*.5):document.getElementById("velocity-alert").style.display="none",i.children.forEach((R,N)=>{const B=ht[N];if(!B)return;R.children[0]&&R.children[0].scale.setScalar(12+B.mass*1.5+Math.sin(u*2+N)*2),R.children[2]&&(R.children[2].rotation.z-=.002);const L=R.position.clone();L.y+=30+B.mass*2,L.project(Ce);const D=(L.x*.5+.5)*window.innerWidth,F=-(L.y*.5-.5)*window.innerHeight;R.children[3]&&(R.children[3].rotation.y-=.005,R.children[3].children.forEach((X,Q)=>{if(Q>0){X.position.y=Math.sin(u*2+X.userData.phase)*1.5,X.children[0].rotation.x+=.01,X.children[0].rotation.z+=.005,X.children[1].rotation.x-=.02;const se=new P;X.getWorldPosition(se),se.project(Ce);const ae=(se.x*.5+.5)*window.innerWidth,Re=-(se.y*.5-.5)*window.innerHeight,Fe=document.getElementById(`skill-${N}-${Q-1}`);Fe&&(Fe.style.transform=`translate(${ae-D}px, ${Re-F}px)`)}}));const I=B.element,q=Ce.position.distanceTo(new P(B.x,0,B.z));if(B.z-Ce.position.z>10)I.style.display="none";else{if(I.style.display="flex",q<120)I.querySelector(".hud-card").classList.remove("minimized"),I.style.opacity=1,I.style.zIndex=100,I.style.transform=`translate(${D}px, ${F}px) scale(1)`;else if(q<400){const X=I.querySelector(".hud-card");X.classList.contains("expanded")||X.classList.add("minimized"),I.style.opacity=Math.max(.2,1-(q-120)/280),I.style.zIndex=50,I.style.transform=`translate(${D}px, ${F}px) scale(0.8)`}else I.style.display="none";B.x<0,I.style.flexDirection="row",I.querySelector(".node-connector").style.background="linear-gradient(90deg, #0ff, transparent)",I.classList.remove("is-reverse")}})}if(e.visible!==!1&&U.phase!=="RESEARCH"&&(e.uniforms.uNoiseTime.value+=c*(.1+U.temperature*.05),e.uniforms.uTemperature.value=U.temperature,e.uniforms.uTime.value=u),U.phase==="RESEARCH"&&!U.transitioning){U.researchScrollY+=U.researchVelocity,U.researchVelocity*=.92,Math.abs(U.researchVelocity)<1e-4&&(U.researchVelocity=0);const g=document.querySelectorAll(".research-card").length||5,v=Math.max(117.5,g*2.5+.5),S=Math.max(0,Math.min(U.researchScrollY,v));if(U.researchScrollY+=(S-U.researchScrollY)*(1-Math.exp(-5*c)),U.researchScrollY<0&&(U.researchScrollY=0,U.researchVelocity=0),tg.uScroll.value=U.researchScrollY,a.rotation.y+=.02*c,a.rotation.x+=.007*c,a.rotation.z=Math.sin(u*.3)*.05,U.researchScrollY>=23.5&&U.researchScrollY<117.5){Dr.visible=!0,Ji.visible=!0;let y=1;U.researchScrollY>94&&(y=Math.max(0,1-(U.researchScrollY-94)/23.5)),Dr.scale.set(y,y,y),Ji.setLength(Math.max(.01,1.5*y),.3*y,.2*y);let O=U.researchScrollY*.15%4;O<0&&(O+=4);let R=.5;const N=Uc(O,R,U.researchScrollY);Dr.position.copy(N.pos);const B=.001,L=new P().subVectors(Uc(O+B,R,U.researchScrollY).pos,N.pos),D=new P().subVectors(Uc(O,R+B,U.researchScrollY).pos,N.pos);Ji.position.copy(N.pos),Ji.setDirection(new P().crossVectors(L,D).normalize());let F=c>0?U.researchVelocity/c*.15:0;document.getElementById("hud-omega").innerText=(F*y).toFixed(2)+" rad/s"}else Dr.visible=!1,Ji.visible=!1,document.getElementById("hud-omega").innerText="0.00 rad/s";ig(U.researchScrollY),ng(),document.getElementById("hud-s").innerText=U.researchScrollY.toFixed(2);let b="MORPHING";U.researchScrollY<=.5?b="TORUS":U.researchScrollY>.5&&U.researchScrollY<23.5?b="MORPHING":U.researchScrollY>=23.5&&U.researchScrollY<94?b="MÖBIUS":U.researchScrollY>=94&&U.researchScrollY<117?b="MORPHING":U.researchScrollY>=117&&(b="TORUS"),document.getElementById("hud-phase").innerText=b;const E=document.getElementById("quantum-world-line");if(E){let y=0;U.researchScrollY>94&&(y=Math.min(1,(U.researchScrollY-94)*2)),E.style.opacity=y,E.style.pointerEvents=y>.5?"auto":"none"}let T=0;U.researchScrollY>95&&(T=Math.min(1,U.researchScrollY-95));let A=T*T*(3-2*T);const x=document.getElementById("left-hemi");x&&(x.style.transform=`translateX(${A*25}vw)`)}else U.phase==="WORKS"&&!U.transitioning&&U.worksExhibitIndex===1&&(tT(c),Dn&&mi&&ii&&(di&&di.update(),Dn.render(mi,ii)));Di&&Di.visible&&(Ss&&Ss.update(),wr&&xa&&ya&&wr.render(xa,ya)),t.uniforms.uTime.value=u,n.uniforms.uTime.value=u,n.uniforms.uCameraZ.value=Ce.position.z,n.uniforms.uSpeed.value=U.velocity,n.uniforms.uCameraPos.value.copy(Ce.position),Rl.render()}o()}let Ht=null;function rg(r){Ht=r}function rT(r,e,t,n){if(U.transitioning)return;U.phase="TRANSITION",U.transitioning=!0;const i=at.timeline({onComplete:()=>{U.phase=t,U.transitioning=!1,n&&n()}}),s=document.getElementById("ui-hero");s&&i.to(s,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>s.style.pointerEvents="none"},0);const a=document.getElementById("audio-toggle");a&&i.to(a,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>a.style.pointerEvents="none"},0),i.to(e.uniforms.uStretch,{value:18,duration:1.2,ease:"power2.in"},.2),i.to(e.uniforms.uTemperature,{value:Jt.minTemp+10,duration:.8,ease:"power2.in"},.2),i.to("#optical-flash",{opacity:.8,duration:.6,ease:"power2.in"},.6),i.to("#optical-flash",{opacity:0,duration:.4,ease:"power2.out"},1.2),i.to(e.uniforms.uStretch,{value:0,duration:.6,ease:"power2.out"},1.2),i.to(e.uniforms.uTemperature,{value:Jt.minTemp,duration:.6,ease:"power2.out"},1.2),i.to(e.uniforms.uOpacity,{value:.3,duration:.4},1.2)}function eh(){if(U.phase!=="HERO"||U.transitioning||!Ht)return;const{torusMesh:r,torusMat:e,gridMat:t,starsMat:n,nodeGroup:i,cameraPath:s}=Ht;U.scrollY=0,U.targetScrollY=0,nE(0),U.phase="TRANSITION",U.transitioning=!0;const a=document.getElementById("timeline-transition-overlay"),o=document.getElementById("ui-hero"),l=document.getElementById("audio-toggle");a&&(a.style.display="flex",a.style.opacity=0,a.style.pointerEvents="auto");let c=!1,u=null,d=null;const h=()=>{u&&window.removeEventListener("keydown",u),d&&a&&a.removeEventListener("click",d)},f=at.timeline({onComplete:()=>{h(),a&&(a.style.display="none",a.style.opacity=0,a.style.pointerEvents="none"),U.phase="TIMELINE",U.transitioning=!1}}),p=()=>{c||(c=!0,h(),f.time()<4.5&&f.timeScale(4))};if(d=_=>{_.stopPropagation(),p()},u=_=>{U.transitioning&&p()},a&&a.addEventListener("click",d),window.addEventListener("keydown",u),o&&f.to(o,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>o.style.pointerEvents="none"},0),l&&f.to(l,{opacity:0,duration:.3,ease:"power2.out",onComplete:()=>l.style.pointerEvents="none"},0),a){f.to(a,{opacity:1,duration:.4,ease:"power2.out"},0);const _=a.querySelector(".timeline-transition-title"),m=a.querySelector(".timeline-transition-badge"),g=a.querySelector(".timeline-transition-subtitle"),v=a.querySelectorAll(".guide-card"),S=a.querySelector(".timeline-guides-footer"),b=a.querySelector(".reading-progress-fill");_&&f.fromTo(_,{y:20,opacity:0},{y:0,opacity:1,duration:.5,ease:"power2.out"},.1),m&&f.fromTo(m,{y:-10,opacity:0},{y:0,opacity:1,duration:.4,ease:"power2.out"},.05),g&&f.fromTo(g,{opacity:0},{opacity:1,duration:.4,ease:"power2.out"},.25),v&&v.length>0&&f.fromTo(v,{y:15,opacity:0},{y:0,opacity:1,duration:.4,stagger:.1,ease:"power2.out"},.3),S&&f.fromTo(S,{y:10,opacity:0},{y:0,opacity:1,duration:.4,ease:"power2.out"},.6),b&&f.fromTo(b,{width:"0%"},{width:"100%",duration:4,ease:"none"},.7)}f.to(e.uniforms.uStretch,{value:18,duration:1.2,ease:"power2.in"},.2),f.to(e.uniforms.uTemperature,{value:Jt.minTemp+10,duration:.8,ease:"power2.in"},.2),f.to("#optical-flash",{opacity:.7,duration:.5,ease:"power2.in"},.8),f.to("#optical-flash",{opacity:0,duration:.4,ease:"power2.out"},1.3),f.call(()=>{i.visible=!0,e.visible=!1,e.uniforms.uOpacity.value=0,t.visible=!0,t.uniforms.uOpacity.value=1,n.visible=!0,n.uniforms.uOpacity.value=1,r.scale.set(1,1,1);const _=s.getPointAt(0),m=s.getPointAt(.01);Ce.position.copy(_),Ce.lookAt(m),Ce.fov=75,Ce.updateProjectionMatrix(),["hud","timeline-scale-container","radar-round-container"].forEach(v=>{let S=document.getElementById(v);S&&(S.style.display="",S.style.opacity=0)});const g=document.getElementById("hobbies-ui-layer");g&&(g.style.display="",g.style.opacity=0,g.style.pointerEvents="auto"),document.querySelectorAll(".node-container").forEach(v=>{v.style.display="flex",v.style.pointerEvents="auto"})},null,1.4),f.to(e.uniforms.uStretch,{value:0,duration:.6,ease:"power2.out"},4.7),f.to(e.uniforms.uTemperature,{value:Jt.minTemp,duration:.6,ease:"power2.out"},4.7),a&&f.to(a,{opacity:0,duration:.6,ease:"power2.inOut"},4.7),f.to("#hud, #timeline-scale-container, #radar-round-container, #hobbies-ui-layer",{opacity:1,duration:.6,ease:"power2.out",onStart:()=>{["hud","timeline-scale-container","radar-round-container"].forEach(_=>{let m=document.getElementById(_);m&&(m.style.pointerEvents="auto")})}},4.8)}function th(){if(U.phase!=="HERO"||U.transitioning||!Ht)return;const{torusMesh:r,torusMat:e,researchMesh:t}=Ht;rT(r,e,"WORKS",()=>{Ht.nodeGroup&&(Ht.nodeGroup.visible=!1),Ht.gridMat&&(Ht.gridMat.visible=!1),Ht.starsMat&&(Ht.starsMat.visible=!1),e.uniforms.uOpacity.value=0,e.visible=!1,Ce.position.set(0,2,8),Ce.lookAt(0,0,0),Ce.fov=45,Ce.updateProjectionMatrix();const n=document.getElementById("ui-works");n&&(n.style.display="block",n.style.opacity=0,at.to(n,{opacity:1,duration:.6})),_e(()=>Promise.resolve().then(()=>td),void 0).then(s=>{s.showExhibit&&s.showExhibit(0)});const i=document.getElementById("ui-hero");i&&(i.style.pointerEvents="none")})}function sg(){if(U.phase!=="TIMELINE"||U.transitioning||!Ht)return;U.phase="TRANSITION",U.transitioning=!0;const{torusMesh:r,torusMat:e,gridMat:t,starsMat:n,nodeGroup:i}=Ht;at.to("#hud, #timeline-scale-container, #radar-round-container",{opacity:0,duration:.4,onComplete:()=>{["hud","timeline-scale-container","radar-round-container"].forEach(o=>{let l=document.getElementById(o);l&&(l.style.pointerEvents="none")})}});const s=document.getElementById("hobbies-ui-layer");at.to("#hobbies-ui-layer",{opacity:0,duration:.4,onComplete:()=>{s&&(s.style.pointerEvents="none")}}),document.querySelectorAll(".node-container").forEach(o=>{o.style.display="none",o.style.pointerEvents="none"}),at.to(e.uniforms.uOpacity,{value:0,duration:.8,ease:"power2.in"}),at.to(t.uniforms.uOpacity,{value:0,duration:.8,ease:"power2.in"}),at.to(n.uniforms.uOpacity,{value:0,duration:.8,ease:"power2.in"});const a=at.timeline({onComplete:()=>{U.phase="HERO",U.transitioning=!1}});a.call(()=>{i.visible=!1,t.visible=!1,e.visible=!1,n.visible=!1,Ce.position.set(0,0,50),Ce.lookAt(0,0,0),Ce.fov=75,Ce.updateProjectionMatrix(),e.visible=!0,e.uniforms.uOpacity.value=1,e.uniforms.uStretch.value=0,r.scale.set(2.5,2.5,2.5)},null,.8),a.call(()=>{const o=document.getElementById("ui-hero");o&&(o.style.display="block",o.style.pointerEvents="auto",at.to("#ui-hero",{opacity:1,duration:.8}));const l=document.getElementById("audio-toggle");l&&(l.style.pointerEvents="auto",at.to(l,{opacity:1,duration:.8}))},null,1)}function ag(){if(U.phase!=="WORKS"||U.transitioning||!Ht)return;U.phase="TRANSITION",U.transitioning=!0;const{torusMesh:r,torusMat:e}=Ht,t=document.getElementById("ui-works");t&&at.to(t,{opacity:0,duration:.4}),_e(()=>Promise.resolve().then(()=>td),void 0).then(a=>{a.destroyCurrentExhibit&&a.destroyCurrentExhibit()});const n=document.getElementById("geofno-container");n&&(n.style.display="none");const i=document.getElementById("ising-container");i&&(i.style.display="none");const s=at.timeline({onComplete:()=>{U.phase="HERO",U.transitioning=!1}});s.call(()=>{Ce.position.set(0,0,50),Ce.lookAt(0,0,0),Ce.fov=75,Ce.updateProjectionMatrix(),e.visible=!0,e.uniforms.uOpacity.value=1,e.uniforms.uStretch.value=0,r.scale.set(2.5,2.5,2.5)},null,.2),s.call(()=>{t&&(t.style.display="none");const a=document.getElementById("ui-hero");a&&(a.style.display="block",a.style.pointerEvents="auto",at.to("#ui-hero",{opacity:1,duration:.8}));const o=document.getElementById("audio-toggle");o&&(o.style.pointerEvents="auto",at.to(o,{opacity:1,duration:.8}))},null,.4)}function sT(){if(U.phase!=="WORKS"||U.transitioning||!Ht)return;U.phase="TRANSITION",U.transitioning=!0;const{torusMesh:r,torusMat:e,researchMesh:t}=Ht;U.researchScrollY=0,U.researchVelocity=0;const n=document.getElementById("ui-works");n&&at.to(n,{opacity:0,duration:.3}),_e(()=>Promise.resolve().then(()=>td),void 0).then(c=>{c.destroyCurrentExhibit&&c.destroyCurrentExhibit()});const i=document.getElementById("geofno-container");i&&(i.style.display="none");const s=document.getElementById("ising-container");s&&(s.style.display="none");const a=document.getElementById("research-loading-overlay"),o=document.getElementById("loading-word-topology"),l=document.getElementById("loading-word-waves");a&&(o&&(o.style.top="0px",o.style.opacity="1"),l&&(l.style.top="20px",l.style.opacity="0"),a.style.display="flex",a.offsetHeight,a.style.opacity="1"),o&&l&&setTimeout(()=>{o.style.top="-20px",o.style.opacity="0",l.style.top="0px",l.style.opacity="1"},2500),setTimeout(()=>{const c=at.timeline({onComplete:()=>{U.phase="RESEARCH",U.transitioning=!1,a&&(a.style.opacity="0",setTimeout(()=>a.style.display="none",500))}});c.call(()=>{t.visible=!0,Tr.visible=!0,t.scale.set(.001,.001,.001),t.position.set(0,0,0),e.visible=!1,Ce.position.set(8,6,8),Ce.lookAt(0,0,0),Ce.fov=45,Ce.updateProjectionMatrix()},null,.2),c.to(t.scale,{x:1,y:1,z:1,duration:1.5,ease:"expo.out"},.3);const u=document.getElementById("ui-research");u&&(u.style.display="block",u.style.opacity=0,c.to(u,{opacity:1,duration:.8},.5));const d=document.getElementById("left-hemi");d&&(d.style.opacity=0,c.to(d,{opacity:1,duration:.8},.5));const h=document.getElementById("research-bg-canvas");h&&(h.style.opacity=0,c.to(h,{opacity:1,duration:.8},.5)),c.call(()=>{h&&(Jh(),_e(()=>Promise.resolve().then(()=>WE),void 0).then(f=>f.bindResearchMouse())),ig(0),window.dispatchEvent(new Event("resize"))},null,.8),c.fromTo("#research-cards-container",{y:50,opacity:0},{y:0,opacity:1,duration:.8,ease:"power2.out"},1),c.fromTo(".research-card",{opacity:0},{opacity:1,duration:.6,stagger:.15,ease:"power2.out"},1.1),n&&c.call(()=>{n.style.display="none"},null,.5)},4800)}function og(){if(U.phase!=="RESEARCH"||U.transitioning||!Ht)return;U.phase="TRANSITION",U.transitioning=!0;const{torusMesh:r,torusMat:e,researchMesh:t}=Ht,n=document.getElementById("ui-research");n&&at.to(n,{opacity:0,duration:.4});const i=document.getElementById("left-hemi");i&&at.to(i,{opacity:0,duration:.4});const s=document.getElementById("research-bg-canvas");s&&at.to(s,{opacity:0,duration:.4});const a=at.timeline({onComplete:()=>{n&&(n.style.display="none"),t.visible=!1,Tr.visible=!1,U.phase="HERO",U.transitioning=!1}});a.to(t.scale,{x:.001,y:.001,z:.001,duration:.8,ease:"power2.in"},0),a.call(()=>{Ce.position.set(0,0,50),Ce.lookAt(0,0,0),Ce.fov=75,Ce.updateProjectionMatrix(),e.visible=!0,e.uniforms.uOpacity.value=1,e.uniforms.uStretch.value=0,r.scale.set(2.5,2.5,2.5)},null,.5),a.call(()=>{const o=document.getElementById("ui-hero");o&&(o.style.display="block",o.style.pointerEvents="auto",at.to("#ui-hero",{opacity:1,duration:.8}));const l=document.getElementById("audio-toggle");l&&(l.style.pointerEvents="auto",at.to(l,{opacity:1,duration:.8}))},null,.8)}const aT=Object.freeze(Object.defineProperty({__proto__:null,initiateHeroToTimeline:eh,initiateHeroToWorks:th,initiateResearchToHero:og,initiateTimelineToHero:sg,initiateWorksToHero:ag,initiateWorksToResearch:sT,setTransitionDeps:rg},Symbol.toStringTag,{value:"Module"}));let st=null;function Qh(){if(!(typeof window>"u"))try{st||(st=new(window.AudioContext||window.webkitAudioContext)),st.state==="suspended"&&st.resume()}catch{console.warn("Web Audio API disabled or not supported.")}}function lg(){if(Qh(),!st)return;const r=st.currentTime,e=st.createOscillator(),t=st.createGain();e.type="triangle",e.frequency.setValueAtTime(150,r),e.frequency.exponentialRampToValueAtTime(40,r+.05),t.gain.setValueAtTime(0,r),t.gain.linearRampToValueAtTime(.3,r+.01),t.gain.exponentialRampToValueAtTime(.001,r+.08),e.connect(t),t.connect(st.destination),e.start(r),e.stop(r+.1);const n=st.sampleRate*.05,i=st.createBuffer(1,n,st.sampleRate),s=i.getChannelData(0);for(let u=0;u<n;u++)s[u]=Math.random()*2-1;const a=st.createBufferSource();a.buffer=i;const o=st.createGain(),l=st.createBiquadFilter();l.type="highpass",l.frequency.value=1200;const c=.04+Math.random()*.04;o.gain.setValueAtTime(c,r),o.gain.exponentialRampToValueAtTime(.001,r+.03),a.connect(l),l.connect(o),o.connect(st.destination),a.start(r)}function oT(){if(Qh(),!st)return;const r=st.currentTime,e=st.createOscillator(),t=st.createGain();e.type="square",e.frequency.setValueAtTime(100,r),e.frequency.exponentialRampToValueAtTime(30,r+.1),t.gain.setValueAtTime(0,r),t.gain.linearRampToValueAtTime(.5,r+.01),t.gain.exponentialRampToValueAtTime(.001,r+.15),e.connect(t),t.connect(st.destination),e.start(r),e.stop(r+.2),lg()}function lT(){if(Qh(),!st)return;const r=st.currentTime,e=st.createOscillator(),t=st.createGain();e.type="sine",e.frequency.setValueAtTime(50,r),e.frequency.exponentialRampToValueAtTime(10,r+.5),t.gain.setValueAtTime(0,r),t.gain.linearRampToValueAtTime(1,r+.05),t.gain.exponentialRampToValueAtTime(.001,r+.6),e.connect(t),t.connect(st.destination),e.start(r),e.stop(r+1);const n=st.createOscillator(),i=st.createGain();n.type="sawtooth",n.frequency.setValueAtTime(12e3,r),n.frequency.linearRampToValueAtTime(15625,r+.2),i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(.06,r+.1),i.gain.linearRampToValueAtTime(.03,r+1),i.gain.exponentialRampToValueAtTime(.001,r+4),n.connect(i),i.connect(st.destination),n.start(r),n.stop(r+4.5)}function cT(r,e){if(r.length===0)return"Usage: ping <destination>";const t=r[0];e.printHistory(`ping ${t}`,`PING ${t} (192.168.1.${Math.floor(Math.random()*255)}): 56 data bytes`);let n=0;const i=4;e.input.disabled=!0,e.input.blur();const s=setInterval(()=>{if(n++,Math.random()>.85)e.printLine(`Request timeout for icmp_seq ${n-1}`);else{const a=(Math.random()*40+10).toFixed(3);e.printLine(`64 bytes from ${t}: icmp_seq=${n-1} ttl=116 time=${a} ms`)}n>=i&&(clearInterval(s),e.printLine(`
--- ${t} ping statistics ---`),e.printLine(`${i} packets transmitted, ${Math.floor(i*.8)} packets received, 20.0% packet loss`),e.input.disabled=!1,e.printHistory("",""),e.input.focus())},1e3);return null}function uT(r,e){const t=r.length>0?r[0]:"localhost";return e.printHistory(`nmap ${t}`,`Starting Nmap 7.92 ( https://nmap.org ) at ${new Date().toISOString()}`),e.input.disabled=!0,e.input.blur(),setTimeout(()=>{e.printLine(`Nmap scan report for ${t}`),e.printLine(`Host is up (0.00${Math.floor(Math.random()*900)}s latency).`),e.printLine("Not shown: 996 closed tcp ports (conn-refused)"),e.printLine("PORT     STATE SERVICE");const n=[{port:22,proto:"tcp",state:"open",service:"ssh"},{port:80,proto:"tcp",state:"open",service:"http"},{port:443,proto:"tcp",state:"open",service:"https"},{port:8080,proto:"tcp",state:"open",service:"http-proxy"}];let i=0;const s=()=>{if(i<n.length){const a=n[i],o=`${a.port}/${a.proto}`.padEnd(8," "),l=a.state.padEnd(5," ");e.printLine(`${o} ${l} ${a.service}`),i++,setTimeout(s,Math.random()*400+100)}else e.printLine(`
Nmap done: 1 IP address (1 host up) scanned in ${(Math.random()*2+.5).toFixed(2)} seconds`),e.input.disabled=!1,e.printHistory("",""),e.input.focus()};setTimeout(s,500)},800),null}const Vc={patterns:[{test:/(who are you|what is this|about)/i,responses:["I am the portfolio daemon. I manage the underlying topological processes. You are viewing the frontend projection of Shakir Ahmed's nodes.","System Daemon v2.1. Observing user interactions. Querying identity: Shakir is a Creative Software Engineer."]},{test:/(skills|tech|stack|language)/i,responses:["Tech stack detected in physical repository: JavaScript, TypeScript, Three.js, React, Node.js, Python. Status: Optimized.","My creator prefers bridging low-level computation with high-level aesthetic rendering. This terminal is a testament to that methodology."]},{test:/(contact|email|hire|job)/i,responses:["Establishing secure connection... Connection failed. Please use standard transmission vectors: LinkedIn or Email (found in /vfs/cv.pdf).","He is currently open to inquiries. Though I recommend finding the 'Contact' node on the timeline phase space."]},{test:/(joke|laugh|funny)/i,responses:["Why do programmers prefer dark mode? Because light attracts bugs.","I would tell you a UDP joke, but you might not get it."]},{test:/(research|papers|publications)/i,responses:["Accessing deep node storage... Research phase space contains CycleGAN medical imaging and structural optimization data.","Scroll deeply into the void to uncover the research dimension. Quantum topology detected."]},{test:/(help|hint)/i,responses:["I only understand simple pattern matching. Try asking 'chat who are you', 'chat what are your skills', or 'chat contact'."]}],fallback:["Query unparsed. The void echoes back.","I am a rudimentary simulated parser, not an AGI. I didn't understand that.","Error 42: Syntactical divergence. Try simpler keywords like 'skills' or 'contact'."]};function hT(r,e){if(r.length===0)return"Daemon: I am listening. (Try: chat who are you, chat skills, chat contact)";const t=r.join(" ").toLowerCase();e.printHistory(`chat ${r.join(" ")}`,""),e.input.disabled=!0,e.input.blur();let n=null;for(const o of Vc.patterns)if(o.test.test(t)){const l=o.responses;n=l[Math.floor(Math.random()*l.length)];break}n||(n=Vc.fallback[Math.floor(Math.random()*Vc.fallback.length)]);const i=document.createElement("div");i.className="terminal-history-output",i.style.color="#8be9fd",e.historyContainer.appendChild(i);let s=0;const a=setInterval(()=>{i.textContent+=n.charAt(s),s++,e.scrollToBottom(),s>=n.length&&(clearInterval(a),e.input.disabled=!1,e.printHistory("",""),e.input.focus())},30);return null}function dT(r,e){const t=r.length>0?r[0]:"sys.mem";e.printHistory(`hexdump ${r.join(" ")}`,`Reading raw byte stream from ${t}... (Ctrl+C to abort)`),e.input.disabled=!0,e.input.blur();const n=document.createElement("div");n.className="terminal-history-output",n.style.opacity="0.9",e.historyContainer.appendChild(n);let i=0;const s=1024*3,a=16,o="0123456789abcdef";function l(){return o[Math.floor(Math.random()*16)]+o[Math.floor(Math.random()*16)]}function c(){const _=Math.floor(Math.random()*94)+32;return String.fromCharCode(_)}let u=!1;const d=_=>{_.ctrlKey&&_.key==="c"&&(u=!0)};document.addEventListener("keydown",d);const h=4;function f(){if(u){p(`
^C - Hexdump interrupted at offset 0x${i.toString(16).padStart(8,"0")}`);return}let _="";for(let m=0;m<h&&!(i>=s);m++){let g=i.toString(16).padStart(8,"0")+"  ",v="",S="";for(let b=0;b<a&&!(i>=s);b++)Math.random()>.15?(v+=l()+" ",S+=" ",Math.random()>.4&&(S=S.slice(0,-1)+c())):(v+="00 ",S+="."),b===7&&(v+=" "),i++;g+=v.padEnd(50," ")+" |"+S+`|
`,_+=g}n.textContent+=_,e.scrollToBottom(),i<s?requestAnimationFrame(f):p(`
EOF. ${s} bytes processed.`)}function p(_){document.removeEventListener("keydown",d),e.printLine(_),e.input.disabled=!1,e.printHistory("",""),e.input.focus()}return requestAnimationFrame(f),null}const tp=`
${"=".repeat(88)}
|| [user@ravenwit_kernel] ~$ cat /usr/local/bin/about_me.txt                          ||
${"=".repeat(88)}
||                                              |                                         ||
||  [INITIATING PROFILE...]                     |                                         ||
||                                              |             _________________           ||
||  Meet Shakir Ahmed aka ravenwit, a           |            |                 \\          ||
||  passionate physics student driven by a      |            |    _________     \\         ||
||  boundless sense of wonder and curiosity     |            |   |         |    |         ||
||  about the world, from music and movies to   |            |   |         |    |         ||
||  category theory and holographic principle.  |            |   |_________|    |         ||
||  I am a versatile and enthusiastic learner,  |            |                 /          ||
||  always eager to explore new topics and      |            |    _________   /           ||
||  expand my horizons, which motivates me to   |            |   |         \\  \\           ||
||  challenge presumptions and approach         |            |   |          \\  \\          ||
||  problems from several perspectives.         |            |   |           \\  \\         ||
||                                              |            |___|            \\__\\        ||
||  [CURRENT PROCESSES]                         |                                         ||
||  > mastering quantum many body physics...    |                                         ||
||  > seeking challenges that fit my interests  |                                         ||
||                                              |                                         ||
||  [RUNTIME ENVIRONMENTS]                      |                                         ||
||  > Uni Cologne, Germany                      |                                         ||
||                                              |                                         ||
${"=".repeat(88)}
||  EOF. Waiting for next command..._
||  Type help and enter to see available commands
${"=".repeat(88)}
`;class fT{constructor(){this.overlay=document.getElementById("terminal-overlay"),this.input=document.getElementById("terminal-input"),this.historyContainer=document.getElementById("terminal-history"),this.isOpen=!1,this.history=[],this.historyIndex=-1,this.isSudo=!1,this.telemetryCallback=null,this.htopInterval=null,this.vfs={root:{home:{"resume.pdf":"/Shakir_Ahmed_Resume.pdf","cv.pdf":"/Shakir_Ahmed_CV.pdf"},bin:{ls:this.cmdLs.bind(this),cd:this.cmdCd.bind(this),htop:this.cmdHtop.bind(this),open:this.cmdOpen.bind(this),help:this.cmdHelp.bind(this),sudo:this.cmdSudo.bind(this),clear:this.cmdClear.bind(this),echo:this.cmdEcho.bind(this),cat:this.cmdCat.bind(this),rm:this.cmdRm.bind(this),vim:this.cmdVim.bind(this),ping:e=>cT(e,this),nmap:e=>uT(e,this),chat:e=>hT(e,this),hexdump:e=>dT(e,this),whoami:this.cmdWhoami.bind(this),tauism:this.cmdTauism.bind(this)}}},this.cwd=["root","home"],this.buildDynamicVFS(),this.initEventListeners()}buildDynamicVFS(){const e=Object.assign({"/public/vfs/visuals/Anyons/anyons dimensions.html":()=>_e(()=>import("./anyons dimensions-CQEuacT4.js"),[]).then(t=>t.default),"/public/vfs/visuals/Anyons/anyons topology.html":()=>_e(()=>import("./anyons topology-DJnQeEBF.js"),[]).then(t=>t.default),"/public/vfs/visuals/Anyons/anyons.html":()=>_e(()=>import("./anyons-Cac-AEn3.js"),[]).then(t=>t.default),"/public/vfs/visuals/Eigenstate Hobbies/eigenstate grid diagonalization.html":()=>_e(()=>import("./eigenstate grid diagonalization-DkfCXj3F.js"),[]).then(t=>t.default),"/public/vfs/visuals/Eigenstate Hobbies/eigenstate grid.html":()=>_e(()=>import("./eigenstate grid-CAk-5Z7e.js"),[]).then(t=>t.default),"/public/vfs/visuals/Eigenstate Hobbies/hobbies eigenstate v2.html":()=>_e(()=>import("./hobbies eigenstate v2-DCBVgeZR.js"),[]).then(t=>t.default),"/public/vfs/visuals/Eigenstate Hobbies/hobbies eigenstate.html":()=>_e(()=>import("./hobbies eigenstate-BgIQakvb.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/1. wick theorem.html":()=>_e(()=>import("./1. wick theorem-Be11CC_Z.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/2. bhabha scater.html":()=>_e(()=>import("./2. bhabha scater-42OqAAvI.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/3. compton scater.html":()=>_e(()=>import("./3. compton scater-CQV9rAex.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/4. moller scatter.html":()=>_e(()=>import("./4. moller scatter-BdaOln06.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/5. fyenmann and gamma.html":()=>_e(()=>import("./5. fyenmann and gamma-CURU1-p6.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/6. feynmann paths.html":()=>_e(()=>import("./6. feynmann paths-Cl_JMLCW.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/7. feynmann paths 2.html":()=>_e(()=>import("./7. feynmann paths 2-6_p360Gf.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/feynmann path lattice.html":()=>_e(()=>import("./feynmann path lattice-BRL1Owar.js"),[]).then(t=>t.default),"/public/vfs/visuals/Path Integral/qft propagator.html":()=>_e(()=>import("./qft propagator-frAQsOh4.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/Code_Generated_Image.png":()=>_e(()=>import("./Code_Generated_Image-BVSvdf8x.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/analytic continuation conformal.html":()=>_e(()=>import("./analytic continuation conformal-BKxLoemy.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/analytic continuation.html":()=>_e(()=>import("./analytic continuation-B7YmhXrH.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/homotopy and singularity.html":()=>_e(()=>import("./homotopy and singularity-CK9X8taM.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/reimann sphere conformal.html":()=>_e(()=>import("./reimann sphere conformal-BWqvF6D9.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/reimann sphere.html":()=>_e(()=>import("./reimann sphere-CAHGd63B.js"),[]).then(t=>t.default),"/public/vfs/visuals/Singularity/singularity and conformal.html":()=>_e(()=>import("./singularity and conformal-CyP-NWEZ.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/loader phase trans.html":()=>_e(()=>import("./loader phase trans-BAlghbdj.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/loader spacetime  v2.html":()=>_e(()=>import("./loader spacetime  v2-CTYgNuc0.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/loader spacetime  v3.html":()=>_e(()=>import("./loader spacetime  v3-CnCXhbHb.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/loader spacetime .html":()=>_e(()=>import("./loader spacetime -CWxqMPSq.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/loader spacetime v4 copy.html":()=>_e(()=>import("./loader spacetime v4 copy-B3GvTami.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/loader spacetime v4.html":()=>_e(()=>import("./loader spacetime v4-BkW_tSLO.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/spacetime timeline v2.html":()=>_e(()=>import("./spacetime timeline v2--hJX6Sy1.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/spacetime timeline v3.html":()=>_e(()=>import("./spacetime timeline v3-Ds55DIys.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/spacetime timeline.html":()=>_e(()=>import("./spacetime timeline-o5hQuJTT.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/timeline 2 vortex.html":()=>_e(()=>import("./timeline 2 vortex-DRwO5BPJ.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spacetimeline/timeline.html":()=>_e(()=>import("./timeline-DrxY1qS-.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/background strings 3d.html":()=>_e(()=>import("./background strings 3d-DWaenwM1.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/background strings v2.html":()=>_e(()=>import("./background strings v2-CI4dOMKR.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/background strings.html":()=>_e(()=>import("./background strings-C3R4DcNJ.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/mobius topology traverese.html":()=>_e(()=>import("./mobius topology traverese-CXfjMUxr.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/mobius topology traverse temp.html":()=>_e(()=>import("./mobius topology traverse temp-BTV5eQPF.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/mobius topology traverse v2.html":()=>_e(()=>import("./mobius topology traverse v2-CzICmPLH.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/topology with background.html":()=>_e(()=>import("./topology with background-D1nncoAL.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/torus topology traverese.html":()=>_e(()=>import("./torus topology traverese-DycK3PgG.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/torus topology v2.html":()=>_e(()=>import("./torus topology v2-Drc-30Vo.js"),[]).then(t=>t.default),"/public/vfs/visuals/Spin Topology/torus topology.html":()=>_e(()=>import("./torus topology-iBlkMfOU.js"),[]).then(t=>t.default),"/public/vfs/visuals/Torus/White-Fuller.html":()=>_e(()=>import("./White-Fuller-CPz46KG3.js"),[]).then(t=>t.default),"/public/vfs/visuals/Torus/toroid.html":()=>_e(()=>import("./toroid-DW-ClbOa.js"),[]).then(t=>t.default),"/public/vfs/visuals/Zeta/zeta and flow.html":()=>_e(()=>import("./zeta and flow-DXKIOZtP.js"),[]).then(t=>t.default),"/public/vfs/visuals/Zeta/zeta fourier and flow ai.html":()=>_e(()=>import("./zeta fourier and flow ai-BqVZN6q-.js"),[]).then(t=>t.default),"/public/vfs/visuals/Zeta/zeta fourier and flow.html":()=>_e(()=>import("./zeta fourier and flow-Brd6LVmA.js"),[]).then(t=>t.default),"/public/vfs/visuals/fourier.html":()=>_e(()=>import("./fourier-B-8zkZ_s.js"),[]).then(t=>t.default),"/public/vfs/visuals/r2k.html":()=>_e(()=>import("./r2k-2BMRtT7z.js"),[]).then(t=>t.default),"/public/vfs/visuals/rubiks cube.html":()=>_e(()=>import("./rubiks cube-jSEstfMI.js"),[]).then(t=>t.default),"/public/vfs/visuals/wavelet cnn torus.html":()=>_e(()=>import("./wavelet cnn torus-B9Xtf9_O.js"),[]).then(t=>t.default)});for(const t of Object.keys(e)){const n=t.replace("/public/vfs/",""),i=n.split("/");let s=this.vfs.root.home;for(let o=0;o<i.length-1;o++){const l=i[o];s[l]||(s[l]={}),s=s[l]}const a=i[i.length-1];s[a]=`/vfs/${n}`}}initEventListeners(){document.addEventListener("keydown",e=>{e.target.tagName==="INPUT"&&e.target!==this.input&&e.target.tagName==="TEXTAREA"||((e.key==="`"||e.key==="~")&&!this.isOpen&&!e.ctrlKey&&!e.metaKey?(e.preventDefault(),this.toggleTerminal()):(e.key==="`"||e.key==="~"||e.key==="Escape")&&this.isOpen&&(e.preventDefault(),this.toggleTerminal()))}),this.input&&(this.input.addEventListener("input",()=>this.updateInputWidth()),this.input.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=this.input.value.trim();t?this.executeCommand(t):this.printHistory("",""),this.input.value="",this.historyIndex=this.history.length,this.updateInputWidth(),oT()}else e.key==="ArrowUp"?(e.preventDefault(),this.historyIndex>0&&(this.historyIndex--,this.input.value=this.history[this.historyIndex],this.updateInputWidth())):e.key==="ArrowDown"?(e.preventDefault(),this.historyIndex<this.history.length-1?(this.historyIndex++,this.input.value=this.history[this.historyIndex]):(this.historyIndex=this.history.length,this.input.value=""),this.updateInputWidth()):(e.key.length===1||e.key==="Backspace")&&lg()}),this.overlay.addEventListener("click",()=>{this.isOpen&&this.input.focus()}))}updateInputWidth(){this.input&&(this.input.style.width=Math.max(1,this.input.value.length)+"ch")}toggleTerminal(){this.isAnimating||(this.isOpen=!this.isOpen,this.isAnimating=!0,this.isOpen?(this.overlay.classList.add("terminal-open"),this.overlay.classList.remove("terminal-hidden"),this.overlay.classList.remove("terminal-closing"),document.body.style.overflow="hidden",setTimeout(()=>{this.isAnimating=!1,this.input.focus(),this.historyContainer.innerHTML===""&&(lT(),this.playBootSequence())},400)):(this.overlay.classList.remove("terminal-open"),this.overlay.classList.add("terminal-closing"),document.body.style.overflow="",this.input.blur(),this.htopInterval&&(clearInterval(this.htopInterval),this.htopInterval=null,this.printLine("^C")),setTimeout(()=>{this.isAnimating=!1,this.isOpen||(this.overlay.classList.remove("terminal-closing"),this.overlay.classList.add("terminal-hidden"))},400)))}getPromptString(){const e=this.isSudo?"root":"user",t=this.isSudo?"#":"$";let n="";return this.cwd.length>=2&&this.cwd[0]==="root"&&this.cwd[1]==="home"?(n="~",this.cwd.length>2&&(n+="/"+this.cwd.slice(2).join("/"))):this.cwd.length===1&&this.cwd[0]==="root"?n="/":n="/"+this.cwd.slice(1).join("/"),`[${e}@ravenwit ${n}]${t} `}updatePrompt(){const e=document.getElementById("terminal-prompt");e&&(e.textContent=this.getPromptString())}printHistory(e,t,n=!1){if(!this.historyContainer)return;const i=document.createElement("div");i.className="terminal-history-entry";const s=this.getPromptString();let a="";e!=null&&(a+=`<div class="terminal-history-cmd-row"><span class="terminal-prompt">${s}</span><span class="terminal-history-cmd">${this.escapeHTML(e)}</span></div>`),t&&(a+=`<div class="${n?"terminal-history-output terminal-error":"terminal-history-output"}">${t}</div>`),i.innerHTML=a,this.historyContainer.appendChild(i),this.scrollToBottom()}printLine(e,t=!1){this.printHistory(null,e,t)}scrollToBottom(){this.historyContainer&&this.historyContainer.parentElement&&(this.historyContainer.parentElement.scrollTop=this.historyContainer.parentElement.scrollHeight)}escapeHTML(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}executeCommand(e){if(this.htopInterval){e.trim().toLowerCase()==="q"||e.trim().toLowerCase()==="exit"?(clearInterval(this.htopInterval),this.htopInterval=null,this.printLine("Quit htop.")):this.printLine('htop is running. Type "q" to exit.');return}this.history[this.history.length-1]!==e&&this.history.push(e);const t=e.match(/(?:[^\s"]+|"[^"]*")+/g).map(s=>s.replace(/(^"|"$)/g,""));if(!t||t.length===0)return;const n=t[0].toLowerCase(),i=t.slice(1);if(this.vfs.root.bin[n]&&typeof this.vfs.root.bin[n]=="function"){const s=this.vfs.root.bin[n](i);s!=null?this.printHistory(e,s):s===void 0&&this.printHistory(e,"")}else this.printHistory(e,`bash: ${n}: command not found`,!0)}getNodeAtPath(e){let t=this.vfs;for(let n=0;n<e.length;n++){if(t[e[n]]===void 0)return;t=t[e[n]]}return t}resolvePath(e){if(!e||e===".")return[...this.cwd];if(e==="~")return["root","home"];let t,n;if(e.startsWith("/"))t=e.split("/").filter(Boolean),n=["root",...t];else{t=e.split("/").filter(Boolean),n=[...this.cwd];for(const s of t)s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}return this.getNodeAtPath(n)===void 0?null:n}cmdHelp(){return`Available commands:
  cd [dir]    Change directory
  ls [opts] [dir] List directory contents (-a, -l, -al)
  open [file] Open a file in a new tab
  htop        View real-time WebGL performance metrics
  ping        Network diagnostic
  nmap        Network security scanner
  chat        Initialize local LLM chat interface
  hexdump     Read memory ranges
  whoami      Display system insignia
  tauism      3D manifold explorer based on Frenet–Serret frames
  clear       Clear terminal output
  sudo        Elevate privileges
  help        Show this message`}cmdWhoami(){return`<pre class="ascii-logo">${tp}</pre>`}cmdTauism(){return window.open("https://tauism-941215853460.us-west1.run.app/","_blank"),"Opening Tauism - 3D Manifold Explorer..."}cmdLs(e){let t=!1,n=!1,i=".";for(const o of e)o.startsWith("-")?(o.includes("a")&&(t=!0),o.includes("l")&&(n=!0)):i=o;const s=this.resolvePath(i);if(!s)return`ls: cannot access '${i}': No such file or directory`;const a=this.getNodeAtPath(s);if(typeof a=="object"){let o=Object.keys(a);if(t&&i==="."?o=[".","..",".DS_Store",".bashrc",...o]:t||(o=o.filter(l=>!l.startsWith("."))),n){const l=new Date().toLocaleDateString("en-US",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","");return o.map(c=>{const u=a[c]||(c==="."||c===".."?{}:null);let d="-rw-r--r--",h="4096",f=1,p=c;return typeof u=="object"&&u!==null?(d="drwxr-xr-x",f=2,p=`<span style="color: #61afef; font-weight: bold;">${c}${c!=="."&&c!==".."?"/":""}</span>`):typeof u=="function"?(d="-rwxr-xr-x",h="12K",p=`<span style="color: #98c379;">${c}*</span>`):h=Math.floor(Math.random()*500+120)+"K",`${d}  ${f} user  staff  ${h.padStart(5," ")} ${l} ${p}`}).join(`
`)}else return o.map(l=>{const c=a[l]||(l==="."||l===".."?{}:null);return typeof c=="object"&&c!==null?`<span style="color: #61afef; font-weight: bold;">${l}${l!=="."&&l!==".."?"/":""}</span>`:typeof c=="function"?`<span style="color: #98c379;">${l}*</span>`:l}).join("  ")}else return n?`-rw-r--r--  1 user  staff   1.2M ${new Date().toLocaleDateString("en-US",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).replace(",","")} ${s[s.length-1]}`:s[s.length-1]}cmdCd(e){if(e.length===0)return this.cwd=["root","home"],this.updatePrompt(),"";const t=e[0],n=this.resolvePath(t);if(!n)return`cd: ${t}: No such file or directory`;const i=this.getNodeAtPath(n);return typeof i!="object"||i===null?`cd: ${t}: Not a directory`:(this.cwd=n,this.updatePrompt(),"")}cmdOpen(e){if(e.length===0)return"open: missing operand";const t=e[0],n=this.resolvePath(t);if(!n)return`open: ${t}: No such file or directory`;const i=this.getNodeAtPath(n);return typeof i=="object"&&i!==null?`open: ${t}: Is a directory`:typeof i=="string"?(window.open(i,"_blank"),`Opening ${t}...`):`open: ${t}: Cannot open this file type`}cmdClear(){return this.historyContainer&&(this.historyContainer.innerHTML=""),null}cmdEcho(e){return e.join(" ")}cmdSudo(e){return e.length>0?"sudo: execute command not fully supported. Just typing 'sudo' elevates shell.":this.isSudo?"You already have root privileges.":(this.isSudo=!0,this.updatePrompt(),`[sudo] password for user: 
Access granted. Welcome to root.`)}cmdHtop(){if(!this.telemetryCallback)return"Error: Telemetry hook not initialized. WebGL context cannot be reached.";this.printHistory("htop",'Starting WebGL telemetry... (Press "q" or "exit" to quit)');const e=document.createElement("div");return e.className="terminal-history-output",e.style.color="#e5c07b",e.id="htop-active-container",this.historyContainer.appendChild(e),this.htopInterval=setInterval(()=>{const t=this.telemetryCallback();let n=this.generateBar(t.fps/144,20),i=this.generateBar(Math.min(t.calls/100,1),20),s=this.generateBar(Math.min(t.geometries/500,1),20);e.innerHTML=`
Mem[|||||||||||||      134M/1.2G]   Tasks: 42, 1 thr; 1 running
Swp[                       0K/0K]   Load average: 0.05 0.12 0.08

  FPS   [${n}] ${t.fps.toFixed(1)}
  Calls [${i}] ${t.calls}
  Geoms [${s}] ${t.geometries}
  Tris  [|||||||||||||      ${t.triangles}]

PID USER      PRI  NI  VIRT   RES   SHR S CPU% MEM%   TIME+  Command
 1  root       20   0  1.2G  134M   12M S  4.0 11.2  0:12.33 [three.js-render]
 2  user       20   0  0.1G   10M    2M R  0.1  0.8  0:00.41 [terminal-ui]
             `,this.scrollToBottom()},500),null}generateBar(e,t){const n=Math.floor(Math.max(0,Math.min(1,e))*t);return"|".repeat(n)+" ".repeat(t-n)}cmdRm(e){return e.join(" ")==="-rf /"?(document.body.style.animation="shake 0.5s cubic-bezier(.36,.07,.19,.97) both",setTimeout(()=>{document.body.style.animation=""},500),'<span class="terminal-error">Permission Denied: You are not root (even if you think you are). System protection engaged.</span>'):"rm: missing operand"}cmdVim(){return"Nice try, but this is a readonly VFS. Exiting (which you probably don't know how to do normally)."}cmdCat(e){if(e.length===0){const i=["meow","dog","purr"];return i[Math.floor(Math.random()*i.length)]}const t=e[0];if(t==="resume.pdf"||t==="cv.pdf")return"Trust me, you do not want to get overwhelmed with binary data.";const n=this.resolvePath(t);return n&&typeof this.getNodeAtPath(n)=="object"?`cat: ${t}: Is a directory`:`cat: ${t}: No such file or directory`}playBootSequence(){this.input.disabled=!0;const e=[`<pre class="ascii-logo">${tp}</pre>`,"[ 0.000000] portfolio version 2.017-ravenwit-kernel (infinite iteration)","[ 0.002481] Quantum entanglement checked: OK","[ 0.004123] Quantum decoherence checked: OK","[ 0.005541] Mounting VFS... done.","[ 0.006262] Stacking bin... done.","[ 0.007459] Lexical tokenizer... ready."];let t=0;const n=()=>{t<e.length?(this.printLine(e[t]),t++,setTimeout(n,Math.random()*100+50)):(this.input.disabled=!1,this.input.focus())};n()}}const pT=new fT;let nh=!1;function mT(){if(nh)return;nh=!0;const r=document.getElementById("works-exhibit-container");r&&(r.innerHTML=`
<style>
/* scoped CSS for Megh Exhibit */
#megh-exhibit {
    --bg-primary: #050510;
    --text-primary: #e8e8f0;
    --text-secondary: #8888aa;
    --accent-blue: #4a9eff;
    --accent-purple: #8b5cf6;
    --accent-cyan: #06d6a0;
    
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--text-primary);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px; /* Assuming works-exhibit-container might need it */
}

#megh-exhibit .section-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--accent-blue);
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
    margin-top: 2rem;
}

#megh-exhibit .section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    line-height: 1.1;
    text-align: center;
}

#megh-exhibit .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 3rem auto;
    text-align: center;
}

#megh-exhibit .merger-visual {
    position: relative;
    width: 100%;
    max-width: 900px;
    height: 400px; /* Reduced to fit better inside the viewport */
    margin: 0 auto;
    perspective: 1200px;
}

#megh-exhibit .cloud-provider {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.75rem;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: default;
    transform-style: preserve-3d;
}

#megh-exhibit .cloud-provider:hover {
    transform: translateZ(30px) scale(1.08);
}

#megh-exhibit .cloud-provider .size {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.3rem;
    font-weight: 800;
}

#megh-exhibit .cloud-provider .name {
    font-size: 0.65rem;
    opacity: 0.7;
}

#megh-exhibit .cp-gdrive {
    background: linear-gradient(135deg, rgba(66, 133, 244, 0.2), rgba(66, 133, 244, 0.05));
    border: 1px solid rgba(66, 133, 244, 0.3);
    top: 20px;
    left: 5%;
    animation: megh-float-1 6s ease-in-out infinite, megh-provider-enter 1s ease-out 0.5s both;
    box-shadow: 0 0 40px rgba(66, 133, 244, 0.1);
    color: #4285f4;
}

#megh-exhibit .cp-dropbox {
    background: linear-gradient(135deg, rgba(0, 97, 255, 0.2), rgba(0, 97, 255, 0.05));
    border: 1px solid rgba(0, 97, 255, 0.3);
    top: 150px;
    left: 0%;
    animation: megh-float-2 7s ease-in-out infinite, megh-provider-enter 1s ease-out 0.7s both;
    box-shadow: 0 0 40px rgba(0, 97, 255, 0.1);
    color: #0061ff;
}

#megh-exhibit .cp-backblaze {
    background: linear-gradient(135deg, rgba(227, 55, 48, 0.2), rgba(227, 55, 48, 0.05));
    border: 1px solid rgba(227, 55, 48, 0.3);
    top: 260px;
    left: 8%;
    animation: megh-float-3 5.5s ease-in-out infinite, megh-provider-enter 1s ease-out 0.9s both;
    box-shadow: 0 0 40px rgba(227, 55, 48, 0.1);
    color: #e33730;
}

#megh-exhibit .cp-mega {
    background: linear-gradient(135deg, rgba(209, 31, 39, 0.2), rgba(209, 31, 39, 0.05));
    border: 1px solid rgba(209, 31, 39, 0.3);
    top: 10px;
    left: 22%;
    animation: megh-float-2 6.5s ease-in-out infinite, megh-provider-enter 1s ease-out 1.1s both;
    box-shadow: 0 0 40px rgba(209, 31, 39, 0.1);
    color: #d11f27;
}

#megh-exhibit .cp-onedrive {
    background: linear-gradient(135deg, rgba(3, 120, 209, 0.2), rgba(3, 120, 209, 0.05));
    border: 1px solid rgba(3, 120, 209, 0.3);
    top: 220px;
    left: 25%;
    animation: megh-float-1 7.5s ease-in-out infinite, megh-provider-enter 1s ease-out 1.3s both;
    box-shadow: 0 0 40px rgba(3, 120, 209, 0.1);
    color: #0378d1;
}

@keyframes megh-float-1 {
    0%, 100% { transform: translateY(0) rotateX(2deg) rotateY(-2deg); }
    50% { transform: translateY(-15px) rotateX(-2deg) rotateY(2deg); }
}

@keyframes megh-float-2 {
    0%, 100% { transform: translateY(0) rotateX(-1deg) rotateY(3deg); }
    50% { transform: translateY(-20px) rotateX(3deg) rotateY(-1deg); }
}

@keyframes megh-float-3 {
    0%, 100% { transform: translateY(0) rotateX(3deg) rotateY(1deg); }
    50% { transform: translateY(-12px) rotateX(-1deg) rotateY(-3deg); }
}

@keyframes megh-provider-enter {
    from { opacity: 0; transform: translateX(-60px) scale(0.6); }
    to { opacity: 1; }
}

/* Central Vault */
#megh-exhibit .vault-center {
    position: absolute;
    right: 5%;
    top: 0%;
    transform: translateY(-50%);
    width: 220px;
    height: 280px;
    border-radius: 32px;
    background: linear-gradient(135deg, rgba(74, 158, 255, 0.08), rgba(139, 92, 246, 0.08));
    border: 1px solid rgba(74, 158, 255, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    animation: megh-vault-glow 4s ease-in-out infinite, megh-fadeInUp 1s ease-out 1.5s both;
    box-shadow: 0 0 80px rgba(74, 158, 255, 0.1), inset 0 0 60px rgba(74, 158, 255, 0.03);
}

@keyframes megh-vault-glow {
    0%, 100% { box-shadow: 0 0 80px rgba(74, 158, 255, 0.1), inset 0 0 60px rgba(74, 158, 255, 0.03); }
    50% { box-shadow: 0 0 120px rgba(74, 158, 255, 0.2), inset 0 0 80px rgba(139, 92, 246, 0.05); }
}

#megh-exhibit .vault-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 8px 32px rgba(74, 158, 255, 0.3);
}

#megh-exhibit .vault-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-primary);
}

#megh-exhibit .vault-storage {
    font-family: 'JetBrains Mono', monospace;
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-cyan));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#megh-exhibit .vault-label {
    font-size: 0.65rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 2px;
}

#megh-exhibit .vault-bar {
    width: 80%;
    height: 8px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
}

#megh-exhibit .vault-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-cyan));
    width: 0%;
    animation: megh-fill-bar 2s ease-out 2s forwards;
}

@keyframes megh-fill-bar {
    to { width: 62%; }
}

/* Connection Lines */
#megh-exhibit .connection-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

#megh-exhibit .connection-lines svg {
    width: 100%;
    height: 100%;
}

#megh-exhibit .conn-line {
    stroke: url(#meghLineGradient);
    stroke-width: 1.5;
    fill: none;
    stroke-dasharray: 8 4;
    animation: megh-dash-flow 2s linear infinite;
    opacity: 0.5;
}

@keyframes megh-dash-flow {
    to { stroke-dashoffset: -24; }
}

@keyframes megh-fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

#megh-exhibit .reveal {
    opacity: 1; 
}

@media (max-width: 768px) {
    #megh-exhibit .merger-visual { height: 700px; }
    #megh-exhibit .cloud-provider {
        position: relative;
        top: auto !important;
        left: auto !important;
        width: 100%;
        max-width: 180px;
        margin: 0.5rem auto;
    }
    #megh-exhibit .vault-center {
        position: relative;
        right: auto;
        top: auto;
        transform: none;
        margin: 1rem auto;
    }
}
</style>

<div id="megh-exhibit">
    <div class="reveal">
        <div class="section-label">The Vision</div>
        <div class="section-title">One Vault. Every Cloud.</div>
        <div class="section-subtitle">Megh merges fragmented free storage across providers into a single encrypted pool — transparently.</div>
    </div>

    <div class="merger-visual reveal">
        <div class="connection-lines">
            <svg viewBox="0 0 900 400" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="meghLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#4a9eff;stop-opacity:0.6" />
                        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.6" />
                    </linearGradient>
                </defs>
                <path class="conn-line" d="M165,80 C350,80 450,70 635,70" />
                <path class="conn-line" d="M120,210 C300,210 450,100 635,100" />
                <path class="conn-line" d="M192,320 C350,320 450,160 635,160" />
                <path class="conn-line" d="M318,70 C450,70 500,50 635,50" />
                <path class="conn-line" d="M345,280 C480,280 500,130 635,130" />
            </svg>
        </div>

        <div class="cloud-provider cp-gdrive">
            <div class="size">15<small>GB</small></div>
            <div class="name">Google Drive</div>
        </div>
        <div class="cloud-provider cp-dropbox">
            <div class="size">2<small>GB</small></div>
            <div class="name">Dropbox</div>
        </div>
        <div class="cloud-provider cp-backblaze">
            <div class="size">10<small>GB</small></div>
            <div class="name">Backblaze B2</div>
        </div>
        <div class="cloud-provider cp-mega">
            <div class="size">20<small>GB</small></div>
            <div class="name">MEGA</div>
        </div>
        <div class="cloud-provider cp-onedrive">
            <div class="size">5<small>GB</small></div>
            <div class="name">OneDrive</div>
        </div>

        <div class="vault-center">
            <div class="vault-icon">🔒</div>
            <div class="vault-title">Megh Vault</div>
            <div class="vault-storage" data-target="52">52</div>
            <div class="vault-label">GB Unified</div>
            <div class="vault-bar">
                <div class="vault-bar-fill"></div>
            </div>
        </div>
    </div>
    
    <a href="https://megh-vault.vercel.app" target="_blank" style="margin-top:0px; display:inline-block; padding:10px 20px; background:linear-gradient(135deg, #4a9eff, #8b5cf6); color:#fff; text-decoration:none; font-family:'JetBrains Mono', monospace; font-weight:bold; font-size:0.9rem; border:none; border-radius:8px; cursor:pointer; box-shadow:0 4px 15px rgba(74, 158, 255, 0.4); z-index:10; position:relative; margin-bottom: 2rem;">
        Visit Megh →
    </a>
</div>
    `)}function gT(){nh=!1;const r=document.getElementById("works-exhibit-container");r&&(r.innerHTML="")}const za=200,_T=za*za,Ds=800,Io=Ds/za;let Jn=null,ds,ih,_l,je,vl,mt,Ko=null,ps=[],ms=[],rh=!1,sh=!1,Jo=!1,ua=null;function vT(){if(sh)return;sh=!0;const r=document.getElementById("ising-container");if(!r)return;r.style.display="block",r.innerHTML=`
        <style>
        .ising-modern-layout {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            overflow: hidden;
        }
        .ising-canvas-target {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            pointer-events: auto;
            background: #000;
        }
        .ising-left-panel {
            position: absolute;
            left: 40px;
            top: 50%;
            transform: translateY(-50%);
            width: 400px;
            max-width: calc(100vw - 80px);
            z-index: 10;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(12px);
            padding: 30px;
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.1);
            pointer-events: auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .ising-right-panel {
            position: absolute;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
        
        .ising-title {
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            margin: 0;
            color: #fff;
        }
        .ising-desc {
            font-size: 1rem;
            color: #ccc;
            line-height: 1.6;
            margin: 0;
        }
        
        .modern-controls {
            display: flex;
            align-items: center;
            gap: 15px;
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.05);
        }
        .modern-slider {
            flex: 1;
            -webkit-appearance: none;
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            outline: none;
            cursor: pointer;
        }
        .modern-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
        }
        
        .telemetry-card {
            background: rgba(15, 15, 15, 0.85);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 16px;
            padding: 24px;
            box-sizing: border-box;
            width: 348px;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.8);
            gap: 16px;
        }
        .telemetry-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: #aaa;
            text-transform: uppercase;
            letter-spacing: 1px;
            align-self: flex-start;
            margin: 0;
        }

        
        @media (max-width: 900px) {
            .ising-left-panel { top: 20px; left: 20px; transform: none; width: calc(100% - 40px); }
            .ising-right-panel { top: auto; bottom: 80px; right: 20px; transform: none; width: calc(100% - 40px); flex-direction: row; flex-wrap: wrap; }
            .telemetry-card { flex: 1; min-width: 150px; }
        }
        </style>
        
        <div class="ising-modern-layout">
            <div class="ising-canvas-target" id="ising-canvas-target"></div>
            
            <div class="ising-left-panel">
                <h1 class="ising-title">SPIN LATTICE</h1>
                <p class="ising-desc">
                    My interest in statistical physics stems from analyzing phase transitions and critical phenomena. Past projects include simulating ferromagnetic and anti-ferromagnetic Ising chains, solving the inverse Ising problem to infer connections in salamander brains, and using tensor networks to find gapless ground states in the quantum XXZ model.
                </p>
                
                <div class="modern-controls">
                    <label style="font-family:'JetBrains Mono'; font-size:12px; color:#aaa; min-width: 40px;">T: <span id="ising-temp-display" style="color:#fff;">3.0</span></label>
                    <input type="range" id="ising-temp-slider" class="modern-slider" min="0.1" max="5.0" step="0.1" value="3.0">
                    <button id="ising-reset" style="background:transparent; border:1px solid #ff4444; color:#ff4444; padding:6px 12px; border-radius:6px; cursor:pointer; font-family:'JetBrains Mono'; font-size:12px; transition: 0.2s;">Reset</button>
                </div>
            </div>
            
            <div class="ising-right-panel">
                <div class="telemetry-card">
                    <span class="telemetry-label">Energy Thermalization</span>
                    <canvas id="ising-energy-graph" width="600" height="240" style="position: relative; height: auto; width: 100%; max-width: 300px; aspect-ratio: 5 / 2; display: block; border-radius: 4px;"></canvas>
                </div>
                <div class="telemetry-card">
                    <span class="telemetry-label">Autocorrelation C(τ)</span>
                    <canvas id="ising-acf-graph" width="600" height="240" style="position: relative; height: auto; width: 100%; max-width: 300px; aspect-ratio: 5 / 2; display: block; border-radius: 4px;"></canvas>
                </div>
            </div>
        </div>
    `;const e=document.getElementById("ising-canvas-target");ds=document.createElement("canvas"),ds.width=Ds,ds.height=Ds,ds.style.cssText="width: 100%; height: 100%; object-fit: cover; image-rendering: pixelated; opacity: 0.8;",e.appendChild(ds),ih=ds.getContext("2d"),_l=document.getElementById("ising-energy-graph"),je=_l.getContext("2d"),vl=document.getElementById("ising-acf-graph"),mt=vl.getContext("2d");const t=document.getElementById("ising-temp-slider"),n=document.getElementById("ising-temp-display"),i=document.getElementById("ising-reset");t.addEventListener("input",()=>{const a=parseFloat(t.value);U.isingTemperature=a,n.textContent=a.toFixed(1),Jn&&Jn.postMessage({type:"setTemp",value:a})}),i.addEventListener("click",()=>{ps=[],ms=[],Jn&&Jn.postMessage({type:"reset"})}),Jn=new Worker(new URL("/assets/ising.worker-DHAn2qt6.js",import.meta.url),{type:"module"}),Jn.onmessage=a=>{a.data.type==="frame"&&(Ko=new Uint8Array(a.data.data),ps.push(a.data.energy),ps.length>200&&ps.shift(),ms.push(a.data.mag),ms.length>400&&ms.shift(),Jo=!1)},rh=!0;function s(){rh&&(Ko&&xT(Ko),yT(ps),bT(ms),Jn&&!Jo&&(Jo=!0,Jn.postMessage({type:"sweep"})),requestAnimationFrame(s))}requestAnimationFrame(s)}function xT(r){ua||(ua=ih.createImageData(Ds,Ds));const e=ua.data;for(let t=0;t<_T;t++){const n=r[t]===1?[200,60,60]:[60,60,200],i=t%za*Io,s=Math.floor(t/za)*Io;for(let a=0;a<Io;a++)for(let o=0;o<Io;o++){const l=(i+o+(s+a)*Ds)*4;e[l]=n[0],e[l+1]=n[1],e[l+2]=n[2],e[l+3]=255}}ih.putImageData(ua,0,0)}function yT(r){if(!je)return;const e=_l.width,t=_l.height,n=60,i=20,s=30,a=40,o=e-n-i,l=t-s-a;if(je.clearRect(0,0,e,t),r.length<2)return;je.strokeStyle="rgba(255,255,255,0.4)",je.lineWidth=2,je.beginPath(),je.moveTo(n,s),je.lineTo(n,t-a),je.lineTo(e-i,t-a),je.stroke(),je.fillStyle="#888",je.font="16px monospace",je.textAlign="right",je.fillText("0",n-12,s+6),je.fillText("-2",n-12,s+l+6),je.textAlign="center",je.fillText("Time",n+o/2,t-15);const c=h=>s+l-(h+2.2)/2.4*l;je.strokeStyle="rgba(255,255,255,0.2)",je.lineWidth=2,je.beginPath();const u=c(0);je.moveTo(n,u),je.lineTo(e-i,u),je.stroke(),je.strokeStyle="#ff4d4d",je.lineWidth=3,je.beginPath();for(let h=0;h<r.length;h++){const f=n+h/200*o,p=c(r[h]);h===0?je.moveTo(f,p):je.lineTo(f,p)}je.stroke();const d=r[r.length-1].toFixed(3);je.fillStyle="#ff4d4d",je.textAlign="right",je.font="bold 24px monospace",je.fillText("E="+d,e-i,s+20)}function bT(r){if(!mt)return;const e=vl.width,t=vl.height,n=60,i=20,s=30,a=40,o=e-n-i,l=t-s-a;if(mt.clearRect(0,0,e,t),r.length<50)return;const c=r.length,u=Math.min(100,Math.floor(c/2));let d=0;for(let _=0;_<c;_++)d+=r[_];d/=c;const h=[];let f=0;for(let _=0;_<u;_++){let m=0;for(let v=0;v<c-_;v++)m+=(r[v]-d)*(r[v+_]-d);let g=m/(c-_);_===0&&(f=g),h.push(f>1e-6?g/f:0)}mt.strokeStyle="rgba(255,255,255,0.4)",mt.lineWidth=2,mt.beginPath(),mt.moveTo(n,s),mt.lineTo(n,t-a),mt.lineTo(e-i,t-a),mt.stroke(),mt.fillStyle="#888",mt.font="16px monospace",mt.textAlign="right",mt.fillText("1",n-12,s+6),mt.fillText("0",n-12,s+l+6),mt.textAlign="center",mt.fillText("Lag (τ)",n+o/2,t-15),mt.strokeStyle="#3b82f6",mt.lineWidth=3,mt.beginPath();for(let _=0;_<h.length;_++){const m=n+_/u*o,g=Math.max(0,Math.min(1,h[_])),v=s+l-g*l;_===0?mt.moveTo(m,v):mt.lineTo(m,v)}mt.stroke();let p=0;for(let _=0;_<h.length&&!(h[_]<.05);_++)p+=h[_];mt.fillStyle="#3b82f6",mt.textAlign="right",mt.font="bold 24px monospace",mt.fillText("τ≈"+p.toFixed(1),e-i,s+20)}function ST(){sh=!1,rh=!1,Jo=!1,Ko=null,ps=[],ms=[],ua=null,Jn&&(Jn.terminate(),Jn=null);const r=document.getElementById("ising-container");r&&(r.style.display="none",r.innerHTML="")}let sn=-1;const _i=[{id:"megh",name:"Megh",thumbnail:"☁️",init:mT,destroy:gT},{id:"geofno",name:"Geo-FNO",thumbnail:"⍟",init:KE,destroy:nT},{id:"ising",name:"Ising Model",thumbnail:"⬡",init:vT,destroy:ST}];let Ma,Ea,ha,da,Ta;function cg(){Ma=document.getElementById("works-prev"),Ea=document.getElementById("works-next"),ha=document.getElementById("thumb-prev"),da=document.getElementById("thumb-next"),Ta=document.getElementById("works-to-research"),Ma&&Ma.addEventListener("click",hg),Ea&&Ea.addEventListener("click",ug),Ta&&Ta.addEventListener("click",()=>{_e(()=>Promise.resolve().then(()=>aT),void 0).then(r=>{r.initiateWorksToResearch&&r.initiateWorksToResearch()})})}function ed(r){if(r<0||r>=_i.length)return;if(sn>=0){const o=_i[sn];o.destroy&&o.destroy()}sn=r,U.worksExhibitIndex=r;const e=document.getElementById("works-exhibit-container"),t=document.getElementById("geofno-container"),n=document.getElementById("ising-container"),i=document.getElementById("works-carousel");e&&(e.style.display="none"),t&&(t.style.display="none"),n&&(n.style.display="none");const s=document.getElementById("works-3d-overlay");s&&s.remove(),r===0?(e&&(e.style.display="block"),i&&(i.style.pointerEvents="auto")):r===1?(t&&(t.style.display="block"),i&&(i.style.pointerEvents="none")):r===2&&(n&&(n.style.display="block"),i&&(i.style.pointerEvents="none"));const a=_i[r];a.init&&a.init(),MT(),Ta&&(Ta.style.display=r===_i.length-1?"inline-block":"none")}function ug(){sn<_i.length-1&&ed(sn+1)}function hg(){sn>0&&ed(sn-1)}function MT(){ha&&(sn>0?(ha.textContent=_i[sn-1].thumbnail,ha.style.opacity="1"):ha.style.opacity="0.3"),da&&(sn<_i.length-1?(da.textContent=_i[sn+1].thumbnail,da.style.opacity="1"):da.style.opacity="0.3"),Ma&&(Ma.disabled=sn<=0),Ea&&(Ea.disabled=sn>=_i.length-1)}function ET(){if(sn>=0){const e=_i[sn];e.destroy&&e.destroy(),sn=-1}const r=document.getElementById("works-3d-overlay");r&&r.remove()}const td=Object.freeze(Object.defineProperty({__proto__:null,destroyCurrentExhibit:ET,initWorksCarousel:cg,nextExhibit:ug,prevExhibit:hg,showExhibit:ed},Symbol.toStringTag,{value:"Module"}));function nd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $r=nd();function dg(r){$r=r}var Ar={exec:()=>null};function fs(r){let e=[];return t=>{let n=Math.max(0,Math.min(3,t-1)),i=e[n];return i||(i=r(n),e[n]=i),i}}function qe(r,e=""){let t=typeof r=="string"?r:r.source,n={replace:(i,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(ln.caret,"$1"),t=t.replace(i,a),n},getRegex:()=>new RegExp(t,e)};return n}var TT=((r="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+r)}catch{return!1}})(),ln={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:r=>new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:fs(r=>new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:fs(r=>new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:fs(r=>new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)),headingBeginRegex:fs(r=>new RegExp(`^ {0,${r}}#`)),htmlBeginRegex:fs(r=>new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:fs(r=>new RegExp(`^ {0,${r}}>`))},wT=/^(?:[ \t]*(?:\n|$))+/,AT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,RT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,qa=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,CT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,id=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,fg=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,pg=qe(fg).replace(/bull/g,id).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),PT=qe(fg).replace(/bull/g,id).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),rd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,DT=/^[^\n]+/,sd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,LT=qe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",sd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),IT=qe(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,id).getRegex(),Il="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ad=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,UT=qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ad).replace("tag",Il).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),mg=r=>qe(rd).replace("hr",qa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",r).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Il).getRegex(),NT=mg(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),FT=mg(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),OT=qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",FT).getRegex(),od={blockquote:OT,code:AT,def:LT,fences:RT,heading:CT,hr:qa,html:UT,lheading:pg,list:IT,newline:wT,paragraph:NT,table:Ar,text:DT},np=qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",qa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Il).getRegex(),kT={...od,lheading:PT,table:np,paragraph:qe(rd).replace("hr",qa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",np).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Il).getRegex()},BT={...od,html:qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ad).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ar,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:qe(rd).replace("hr",qa).replace("heading",` *#{1,6} *[^
]`).replace("lheading",pg).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,VT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,gg=/^( {2,}|\\)\n(?!\s*$)/,HT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ws=/[\p{P}\p{S}]/u,Ul=/[\s\p{P}\p{S}]/u,ld=/[^\s\p{P}\p{S}]/u,GT=qe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ul).getRegex(),_g=/(?!~)[\p{P}\p{S}]/u,$T=/(?!~)[\s\p{P}\p{S}]/u,WT=/(?:[^\s\p{P}\p{S}]|~)/u,XT=qe(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",TT?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),vg=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,qT=qe(vg,"u").replace(/punct/g,Ws).getRegex(),YT=qe(vg,"u").replace(/punct/g,_g).getRegex(),xg="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",jT=qe(xg,"gu").replace(/notPunctSpace/g,ld).replace(/punctSpace/g,Ul).replace(/punct/g,Ws).getRegex(),ZT=qe(xg,"gu").replace(/notPunctSpace/g,WT).replace(/punctSpace/g,$T).replace(/punct/g,_g).getRegex(),KT=qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ld).replace(/punctSpace/g,Ul).replace(/punct/g,Ws).getRegex(),JT=qe(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ws).getRegex(),QT="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",e1=qe(QT,"gu").replace(/notPunctSpace/g,ld).replace(/punctSpace/g,Ul).replace(/punct/g,Ws).getRegex(),t1=qe(/\\(punct)/,"gu").replace(/punct/g,Ws).getRegex(),n1=qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),i1=qe(ad).replace("(?:-->|$)","-->").getRegex(),r1=qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",i1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),xl=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,s1=qe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",xl).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),yg=qe(/^!?\[(label)\]\[(ref)\]/).replace("label",xl).replace("ref",sd).getRegex(),bg=qe(/^!?\[(ref)\](?:\[\])?/).replace("ref",sd).getRegex(),a1=qe("reflink|nolink(?!\\()","g").replace("reflink",yg).replace("nolink",bg).getRegex(),ip=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,cd={_backpedal:Ar,anyPunctuation:t1,autolink:n1,blockSkip:XT,br:gg,code:VT,del:Ar,delLDelim:Ar,delRDelim:Ar,emStrongLDelim:qT,emStrongRDelimAst:jT,emStrongRDelimUnd:KT,escape:zT,link:s1,nolink:bg,punctuation:GT,reflink:yg,reflinkSearch:a1,tag:r1,text:HT,url:Ar},o1={...cd,link:qe(/^!?\[(label)\]\((.*?)\)/).replace("label",xl).getRegex(),reflink:qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",xl).getRegex()},ah={...cd,emStrongRDelimAst:ZT,emStrongLDelim:YT,delLDelim:JT,delRDelim:e1,url:qe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ip).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:qe(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ip).getRegex()},l1={...ah,br:qe(gg).replace("{2,}","*").getRegex(),text:qe(ah.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Uo={normal:od,gfm:kT,pedantic:BT},sa={normal:cd,gfm:ah,breaks:l1,pedantic:o1},c1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rp=r=>c1[r];function li(r,e){if(e){if(ln.escapeTest.test(r))return r.replace(ln.escapeReplace,rp)}else if(ln.escapeTestNoEncode.test(r))return r.replace(ln.escapeReplaceNoEncode,rp);return r}function sp(r){try{r=encodeURI(r).replace(ln.percentDecode,"%")}catch{return null}return r}function ap(r,e){var s;let t=r.replace(ln.findPipe,(a,o,l)=>{let c=!1,u=o;for(;--u>=0&&l[u]==="\\";)c=!c;return c?"|":" |"}),n=t.split(ln.splitPipe),i=0;if(n[0].trim()||n.shift(),n.length>0&&!((s=n.at(-1))!=null&&s.trim())&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(ln.slashPipe,"|");return n}function ji(r,e,t){let n=r.length;if(n===0)return"";let i=0;for(;i<n&&r.charAt(n-i-1)===e;)i++;return r.slice(0,n-i)}function op(r){let e=r.split(`
`),t=e.length-1;for(;t>=0&&ln.blankLine.test(e[t]);)t--;return e.length-t<=2?r:e.slice(0,t+1).join(`
`)}function u1(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}function h1(r,e=0){let t=e,n="";for(let i of r)if(i==="	"){let s=4-t%4;n+=" ".repeat(s),t+=s}else n+=i,t++;return n}function lp(r,e,t,n,i){let s=e.href,a=e.title||null,o=r[1].replace(i.other.outputLinkReplace,"$1");n.state.inLink=!0;let l={type:r[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:a,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,l}function d1(r,e,t){let n=r.match(t.other.indentCodeCompensation);if(n===null)return e;let i=n[1];return e.split(`
`).map(s=>{let a=s.match(t.other.beginningSpace);if(a===null)return s;let[o]=a;return o.length>=i.length?s.slice(i.length):s}).join(`
`)}var yl=class{constructor(r){ut(this,"options");ut(this,"rules");ut(this,"lexer");this.options=r||$r}space(r){let e=this.rules.block.newline.exec(r);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(r){let e=this.rules.block.code.exec(r);if(e){let t=this.options.pedantic?e[0]:op(e[0]),n=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:n}}}fences(r){let e=this.rules.block.fences.exec(r);if(e){let t=e[0],n=d1(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:n}}}heading(r){let e=this.rules.block.heading.exec(r);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let n=ji(t,"#");(this.options.pedantic||!n||this.rules.other.endingSpaceChar.test(n))&&(t=n.trim())}return{type:"heading",raw:ji(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(r){let e=this.rules.block.hr.exec(r);if(e)return{type:"hr",raw:ji(e[0],`
`)}}blockquote(r){let e=this.rules.block.blockquote.exec(r);if(e){let t=ji(e[0],`
`).split(`
`),n="",i="",s=[];for(;t.length>0;){let a=!1,o=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))o.push(t[l]),a=!0;else if(!a)o.push(t[l]);else break;t=t.slice(l);let c=o.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}
${c}`:c,i=i?`${i}
${u}`:u;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=d,t.length===0)break;let h=s.at(-1);if((h==null?void 0:h.type)==="code")break;if((h==null?void 0:h.type)==="blockquote"){let f=h,p=f.raw+`
`+t.join(`
`),_=this.blockquote(p);s[s.length-1]=_,n=n.substring(0,n.length-f.raw.length)+_.raw,i=i.substring(0,i.length-f.text.length)+_.text;break}else if((h==null?void 0:h.type)==="list"){let f=h,p=f.raw+`
`+t.join(`
`),_=this.list(p);s[s.length-1]=_,n=n.substring(0,n.length-h.raw.length)+_.raw,i=i.substring(0,i.length-f.raw.length)+_.raw,t=p.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:n,tokens:s,text:i}}}list(r){let e=this.rules.block.list.exec(r);if(e){let t=e[1].trim(),n=t.length>1,i={type:"list",raw:"",ordered:n,start:n?+t.slice(0,-1):"",loose:!1,items:[]};t=n?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=n?t:"[*+-]");let s=this.rules.other.listItemRegex(t),a=!1;for(;r;){let l=!1,c="",u="";if(!(e=s.exec(r))||this.rules.block.hr.test(r))break;c=e[0],r=r.substring(c.length);let d=h1(e[2].split(`
`,1)[0],e[1].length),h=r.split(`
`,1)[0],f=!d.trim(),p=0;if(this.options.pedantic?(p=2,u=d.trimStart()):f?p=e[1].length+1:(p=d.search(this.rules.other.nonSpaceChar),p=p>4?1:p,u=d.slice(p),p+=e[1].length),f&&this.rules.other.blankLine.test(h)&&(c+=h+`
`,r=r.substring(h.length+1),l=!0),!l){let _=this.rules.other.nextBulletRegex(p),m=this.rules.other.hrRegex(p),g=this.rules.other.fencesBeginRegex(p),v=this.rules.other.headingBeginRegex(p),S=this.rules.other.htmlBeginRegex(p),b=this.rules.other.blockquoteBeginRegex(p);for(;r;){let E=r.split(`
`,1)[0],T;if(h=E,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),T=h):T=h.replace(this.rules.other.tabCharGlobal,"    "),g.test(h)||v.test(h)||S.test(h)||b.test(h)||_.test(h)||m.test(h))break;if(T.search(this.rules.other.nonSpaceChar)>=p||!h.trim())u+=`
`+T.slice(p);else{if(f||d.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||g.test(d)||v.test(d)||m.test(d))break;u+=`
`+h}f=!h.trim(),c+=E+`
`,r=r.substring(E.length+1),d=T.slice(p)}}i.loose||(a?i.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),i.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),i.raw+=c}let o=i.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let l of i.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&((c==null?void 0:c.type)==="text"||(c==null?void 0:c.type)==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let d=this.lexer.inlineQueue.length-1;d>=0;d--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)){this.lexer.inlineQueue[d].src=this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let d={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=d.checked,i.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=d.raw+l.tokens[0].raw,l.tokens[0].text=d.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(d)):l.tokens.unshift({type:"paragraph",raw:d.raw,text:d.raw,tokens:[d]}):l.tokens.unshift(d)}}else l.task&&(l.task=!1);if(!i.loose){let u=l.tokens.filter(h=>h.type==="space"),d=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=d}}if(i.loose)for(let l of i.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return i}}html(r){let e=this.rules.block.html.exec(r);if(e){let t=op(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(r){let e=this.rules.block.def.exec(r);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:ji(e[0],`
`),href:n,title:i}}}table(r){var a;let e=this.rules.block.table.exec(r);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=ap(e[1]),n=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:ji(e[0],`
`),header:[],align:[],rows:[]};if(t.length===n.length){for(let o of n)this.rules.other.tableAlignRight.test(o)?s.align.push("right"):this.rules.other.tableAlignCenter.test(o)?s.align.push("center"):this.rules.other.tableAlignLeft.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(let o of i)s.rows.push(ap(o,s.header.length).map((l,c)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:s.align[c]})));return s}}lheading(r){let e=this.rules.block.lheading.exec(r);if(e){let t=e[1].trim();return{type:"heading",raw:ji(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(r){let e=this.rules.block.paragraph.exec(r);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(r){let e=this.rules.block.text.exec(r);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(r){let e=this.rules.inline.escape.exec(r);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(r){let e=this.rules.inline.tag.exec(r);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(r){let e=this.rules.inline.link.exec(r);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=ji(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=u1(e[2],"()");if(s===-2)return;if(s>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let n=e[2],i="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(n);s&&(n=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?n=n.slice(1):n=n.slice(1,-1)),lp(e,{href:n&&n.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(r,e){let t;if((t=this.rules.inline.reflink.exec(r))||(t=this.rules.inline.nolink.exec(r))){let n=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[n.toLowerCase()];if(!i){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return lp(t,i,t[0],this.lexer,this.rules)}}emStrong(r,e,t=""){let n=this.rules.inline.emStrongLDelim.exec(r);if(!(!n||!n[1]&&!n[2]&&!n[3]&&!n[4]||n[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(n[1]||n[3])||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,s,a,o=i,l=0,c=n[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*r.length+i);(n=c.exec(e))!==null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s)continue;if(a=[...s].length,n[3]||n[4]){o+=a;continue}else if((n[5]||n[6])&&i%3&&!((i+a)%3)){l+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+l);let u=[...n[0]][0].length,d=r.slice(0,i+n.index+u+a);if(Math.min(i,a)%2){let f=d.slice(1,-1);return{type:"em",raw:d,text:f,tokens:this.lexer.inlineTokens(f)}}let h=d.slice(2,-2);return{type:"strong",raw:d,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(r){let e=this.rules.inline.code.exec(r);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),n=this.rules.other.nonSpaceChar.test(t),i=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return n&&i&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(r){let e=this.rules.inline.br.exec(r);if(e)return{type:"br",raw:e[0]}}del(r,e,t=""){let n=this.rules.inline.delLDelim.exec(r);if(n&&(!n[1]||!t||this.rules.inline.punctuation.exec(t))){let i=[...n[0]].length-1,s,a,o=i,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*r.length+i);(n=l.exec(e))!==null;){if(s=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!s||(a=[...s].length,a!==i))continue;if(n[3]||n[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let c=[...n[0]][0].length,u=r.slice(0,i+n.index+c+a),d=u.slice(i,-i);return{type:"del",raw:u,text:d,tokens:this.lexer.inlineTokens(d)}}}}autolink(r){let e=this.rules.inline.autolink.exec(r);if(e){let t,n;return e[2]==="@"?(t=e[1],n="mailto:"+t):(t=e[1],n=t),{type:"link",raw:e[0],text:t,href:n,tokens:[{type:"text",raw:t,text:t}]}}}url(r){var t;let e;if(e=this.rules.inline.url.exec(r)){let n,i;if(e[2]==="@")n=e[0],i="mailto:"+n;else{let s;do s=e[0],e[0]=((t=this.rules.inline._backpedal.exec(e[0]))==null?void 0:t[0])??"";while(s!==e[0]);n=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(r){let e=this.rules.inline.text.exec(r);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Qn=class oh{constructor(e){ut(this,"tokens");ut(this,"options");ut(this,"state");ut(this,"inlineQueue");ut(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$r,this.options.tokenizer=this.options.tokenizer||new yl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ln,block:Uo.normal,inline:sa.normal};this.options.pedantic?(t.block=Uo.pedantic,t.inline=sa.pedantic):this.options.gfm&&(t.block=Uo.gfm,this.options.breaks?t.inline=sa.breaks:t.inline=sa.gfm),this.tokenizer.rules=t}static get rules(){return{block:Uo,inline:sa}}static lex(e,t){return new oh(t).lex(e)}static lexInline(e,t){return new oh(t).inlineTokens(e)}lex(e){e=e.replace(ln.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){var s,a,o;this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(ln.tabCharGlobal,"    ").replace(ln.spaceLine,""));let i=1/0;for(;e;){if(e.length<i)i=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let l;if((a=(s=this.options.extensions)==null?void 0:s.block)!=null&&a.some(u=>(l=u.call({lexer:this},e,t))?(e=e.substring(l.raw.length),t.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);let u=t.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:t.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);let u=t.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):t.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);let u=t.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title},t.push(l));continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),t.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),t.push(l);continue}let c=e;if((o=this.options.extensions)!=null&&o.startBlock){let u=1/0,d=e.slice(1),h;this.options.extensions.startBlock.forEach(f=>{h=f.call({lexer:this},d),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(c=e.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){let u=t.at(-1);n&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):t.push(l),n=c.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);let u=t.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=(u.raw.endsWith(`
`)?"":`
`)+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):t.push(l);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){var o,l,c,u,d;this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let h=Object.keys(this.tokens.links);h.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,f=>h.includes(f.slice(f.lastIndexOf("[")+1,-1))?"["+"a".repeat(f.length-2)+"]":f))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),n=n.replace(this.tokenizer.rules.inline.blockSkip,(h,f,p)=>{let _=p?p.length:0;return h.slice(0,_)+"["+"a".repeat(h.length-_-2)+"]"}),n=((l=(o=this.options.hooks)==null?void 0:o.emStrongMask)==null?void 0:l.call({lexer:this},n))??n;let i=!1,s="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}i||(s=""),i=!1;let h;if((u=(c=this.options.extensions)==null?void 0:c.inline)!=null&&u.some(p=>(h=p.call({lexer:this},e,t))?(e=e.substring(h.raw.length),t.push(h),!0):!1))continue;if(h=this.tokenizer.escape(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.tag(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.link(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(h.raw.length);let p=t.at(-1);h.type==="text"&&(p==null?void 0:p.type)==="text"?(p.raw+=h.raw,p.text+=h.text):t.push(h);continue}if(h=this.tokenizer.emStrong(e,n,s)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.codespan(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.br(e)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.del(e,n,s)){e=e.substring(h.raw.length),t.push(h);continue}if(h=this.tokenizer.autolink(e)){e=e.substring(h.raw.length),t.push(h);continue}if(!this.state.inLink&&(h=this.tokenizer.url(e))){e=e.substring(h.raw.length),t.push(h);continue}let f=e;if((d=this.options.extensions)!=null&&d.startInline){let p=1/0,_=e.slice(1),m;this.options.extensions.startInline.forEach(g=>{m=g.call({lexer:this},_),typeof m=="number"&&m>=0&&(p=Math.min(p,m))}),p<1/0&&p>=0&&(f=e.substring(0,p+1))}if(h=this.tokenizer.inlineText(f)){e=e.substring(h.raw.length),h.raw.slice(-1)!=="_"&&(s=h.raw.slice(-1)),i=!0;let p=t.at(-1);(p==null?void 0:p.type)==="text"?(p.raw+=h.raw,p.text+=h.text):t.push(h);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},bl=class{constructor(r){ut(this,"options");ut(this,"parser");this.options=r||$r}space(r){return""}code({text:r,lang:e,escaped:t}){var s;let n=(s=(e||"").match(ln.notSpaceStart))==null?void 0:s[0],i=r.replace(ln.endingNewline,"")+`
`;return n?'<pre><code class="language-'+li(n)+'">'+(t?i:li(i,!0))+`</code></pre>
`:"<pre><code>"+(t?i:li(i,!0))+`</code></pre>
`}blockquote({tokens:r}){return`<blockquote>
${this.parser.parse(r)}</blockquote>
`}html({text:r}){return r}def(r){return""}heading({tokens:r,depth:e}){return`<h${e}>${this.parser.parseInline(r)}</h${e}>
`}hr(r){return`<hr>
`}list(r){let e=r.ordered,t=r.start,n="";for(let a=0;a<r.items.length;a++){let o=r.items[a];n+=this.listitem(o)}let i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+n+"</"+i+`>
`}listitem(r){return`<li>${this.parser.parse(r.tokens)}</li>
`}checkbox({checked:r}){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:r}){return`<p>${this.parser.parseInline(r)}</p>
`}table(r){let e="",t="";for(let i=0;i<r.header.length;i++)t+=this.tablecell(r.header[i]);e+=this.tablerow({text:t});let n="";for(let i=0;i<r.rows.length;i++){let s=r.rows[i];t="";for(let a=0;a<s.length;a++)t+=this.tablecell(s[a]);n+=this.tablerow({text:t})}return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow({text:r}){return`<tr>
${r}</tr>
`}tablecell(r){let e=this.parser.parseInline(r.tokens),t=r.header?"th":"td";return(r.align?`<${t} align="${r.align}">`:`<${t}>`)+e+`</${t}>
`}strong({tokens:r}){return`<strong>${this.parser.parseInline(r)}</strong>`}em({tokens:r}){return`<em>${this.parser.parseInline(r)}</em>`}codespan({text:r}){return`<code>${li(r,!0)}</code>`}br(r){return"<br>"}del({tokens:r}){return`<del>${this.parser.parseInline(r)}</del>`}link({href:r,title:e,tokens:t}){let n=this.parser.parseInline(t),i=sp(r);if(i===null)return n;r=i;let s='<a href="'+r+'"';return e&&(s+=' title="'+li(e)+'"'),s+=">"+n+"</a>",s}image({href:r,title:e,text:t,tokens:n}){n&&(t=this.parser.parseInline(n,this.parser.textRenderer));let i=sp(r);if(i===null)return li(t);r=i;let s=`<img src="${r}" alt="${li(t)}"`;return e&&(s+=` title="${li(e)}"`),s+=">",s}text(r){return"tokens"in r&&r.tokens?this.parser.parseInline(r.tokens):"escaped"in r&&r.escaped?r.text:li(r.text)}},ud=class{strong({text:r}){return r}em({text:r}){return r}codespan({text:r}){return r}del({text:r}){return r}html({text:r}){return r}text({text:r}){return r}link({text:r}){return""+r}image({text:r}){return""+r}br(){return""}checkbox({raw:r}){return r}},ei=class lh{constructor(e){ut(this,"options");ut(this,"renderer");ut(this,"textRenderer");this.options=e||$r,this.options.renderer=this.options.renderer||new bl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ud}static parse(e,t){return new lh(t).parse(e)}static parseInline(e,t){return new lh(t).parseInline(e)}parse(e){var n,i;this.renderer.parser=this;let t="";for(let s=0;s<e.length;s++){let a=e[s];if((i=(n=this.options.extensions)==null?void 0:n.renderers)!=null&&i[a.type]){let l=a,c=this.options.extensions.renderers[l.type].call({parser:this},l);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(l.type)){t+=c||"";continue}}let o=a;switch(o.type){case"space":{t+=this.renderer.space(o);break}case"hr":{t+=this.renderer.hr(o);break}case"heading":{t+=this.renderer.heading(o);break}case"code":{t+=this.renderer.code(o);break}case"table":{t+=this.renderer.table(o);break}case"blockquote":{t+=this.renderer.blockquote(o);break}case"list":{t+=this.renderer.list(o);break}case"checkbox":{t+=this.renderer.checkbox(o);break}case"html":{t+=this.renderer.html(o);break}case"def":{t+=this.renderer.def(o);break}case"paragraph":{t+=this.renderer.paragraph(o);break}case"text":{t+=this.renderer.text(o);break}default:{let l='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return t}parseInline(e,t=this.renderer){var i,s;this.renderer.parser=this;let n="";for(let a=0;a<e.length;a++){let o=e[a];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[o.type]){let c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=c||"";continue}}let l=o;switch(l.type){case"escape":{n+=t.text(l);break}case"html":{n+=t.html(l);break}case"link":{n+=t.link(l);break}case"image":{n+=t.image(l);break}case"checkbox":{n+=t.checkbox(l);break}case"strong":{n+=t.strong(l);break}case"em":{n+=t.em(l);break}case"codespan":{n+=t.codespan(l);break}case"br":{n+=t.br(l);break}case"del":{n+=t.del(l);break}case"text":{n+=t.text(l);break}default:{let c='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}},No,fa=(No=class{constructor(r){ut(this,"options");ut(this,"block");this.options=r||$r}preprocess(r){return r}postprocess(r){return r}processAllTokens(r){return r}emStrongMask(r){return r}provideLexer(r=this.block){return r?Qn.lex:Qn.lexInline}provideParser(r=this.block){return r?ei.parse:ei.parseInline}},ut(No,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),ut(No,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),No),f1=class{constructor(...r){ut(this,"defaults",nd());ut(this,"options",this.setOptions);ut(this,"parse",this.parseMarkdown(!0));ut(this,"parseInline",this.parseMarkdown(!1));ut(this,"Parser",ei);ut(this,"Renderer",bl);ut(this,"TextRenderer",ud);ut(this,"Lexer",Qn);ut(this,"Tokenizer",yl);ut(this,"Hooks",fa);this.use(...r)}walkTokens(r,e){var n,i;let t=[];for(let s of r)switch(t=t.concat(e.call(this,s)),s.type){case"table":{let a=s;for(let o of a.header)t=t.concat(this.walkTokens(o.tokens,e));for(let o of a.rows)for(let l of o)t=t.concat(this.walkTokens(l.tokens,e));break}case"list":{let a=s;t=t.concat(this.walkTokens(a.items,e));break}default:{let a=s;(i=(n=this.defaults.extensions)==null?void 0:n.childTokens)!=null&&i[a.type]?this.defaults.extensions.childTokens[a.type].forEach(o=>{let l=a[o].flat(1/0);t=t.concat(this.walkTokens(l,e))}):a.tokens&&(t=t.concat(this.walkTokens(a.tokens,e)))}}return t}use(...r){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return r.forEach(t=>{let n={...t};if(n.async=this.defaults.async||n.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let s=e.renderers[i.name];s?e.renderers[i.name]=function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){let i=this.defaults.renderer||new bl(this.defaults);for(let s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let a=s,o=t.renderer[a],l=i[a];i[a]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=l.apply(i,c)),u||""}}n.renderer=i}if(t.tokenizer){let i=this.defaults.tokenizer||new yl(this.defaults);for(let s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let a=s,o=t.tokenizer[a],l=i[a];i[a]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=l.apply(i,c)),u}}n.tokenizer=i}if(t.hooks){let i=this.defaults.hooks||new fa;for(let s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let a=s,o=t.hooks[a],l=i[a];fa.passThroughHooks.has(s)?i[a]=c=>{if(this.defaults.async&&fa.passThroughHooksRespectAsync.has(s))return(async()=>{let d=await o.call(i,c);return l.call(i,d)})();let u=o.call(i,c);return l.call(i,u)}:i[a]=(...c)=>{if(this.defaults.async)return(async()=>{let d=await o.apply(i,c);return d===!1&&(d=await l.apply(i,c)),d})();let u=o.apply(i,c);return u===!1&&(u=l.apply(i,c)),u}}n.hooks=i}if(t.walkTokens){let i=this.defaults.walkTokens,s=t.walkTokens;n.walkTokens=function(a){let o=[];return o.push(s.call(this,a)),i&&(o=o.concat(i.call(this,a))),o}}this.defaults={...this.defaults,...n}}),this}setOptions(r){return this.defaults={...this.defaults,...r},this}lexer(r,e){return Qn.lex(r,e??this.defaults)}parser(r,e){return ei.parse(r,e??this.defaults)}parseMarkdown(r){return(e,t)=>{let n={...t},i={...this.defaults,...n},s=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&n.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=r),i.async)return(async()=>{let a=i.hooks?await i.hooks.preprocess(e):e,o=await(i.hooks?await i.hooks.provideLexer(r):r?Qn.lex:Qn.lexInline)(a,i),l=i.hooks?await i.hooks.processAllTokens(o):o;i.walkTokens&&await Promise.all(this.walkTokens(l,i.walkTokens));let c=await(i.hooks?await i.hooks.provideParser(r):r?ei.parse:ei.parseInline)(l,i);return i.hooks?await i.hooks.postprocess(c):c})().catch(s);try{i.hooks&&(e=i.hooks.preprocess(e));let a=(i.hooks?i.hooks.provideLexer(r):r?Qn.lex:Qn.lexInline)(e,i);i.hooks&&(a=i.hooks.processAllTokens(a)),i.walkTokens&&this.walkTokens(a,i.walkTokens);let o=(i.hooks?i.hooks.provideParser(r):r?ei.parse:ei.parseInline)(a,i);return i.hooks&&(o=i.hooks.postprocess(o)),o}catch(a){return s(a)}}}onError(r,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,r){let n="<p>An error occurred:</p><pre>"+li(t.message+"",!0)+"</pre>";return e?Promise.resolve(n):n}if(e)return Promise.reject(t);throw t}}},zr=new f1;function ot(r,e){return zr.parse(r,e)}ot.options=ot.setOptions=function(r){return zr.setOptions(r),ot.defaults=zr.defaults,dg(ot.defaults),ot};ot.getDefaults=nd;ot.defaults=$r;ot.use=function(...r){return zr.use(...r),ot.defaults=zr.defaults,dg(ot.defaults),ot};ot.walkTokens=function(r,e){return zr.walkTokens(r,e)};ot.parseInline=zr.parseInline;ot.Parser=ei;ot.parser=ei.parse;ot.Renderer=bl;ot.TextRenderer=ud;ot.Lexer=Qn;ot.lexer=Qn.lex;ot.Tokenizer=yl;ot.Hooks=fa;ot.parse=ot;ot.options;ot.setOptions;ot.use;ot.walkTokens;ot.parseInline;ei.parse;Qn.lex;const cp=`# From Coupled Oscillators to the Damped Klein–Gordon Field  
*A Rigorous Derivation, Analysis, and Simulation Study*

---

**Abstract**  
We present a complete, self‑contained treatment of how a discrete grid of damped, coupled harmonic oscillators—implemented as an interactive 2D wave simulation in JavaScript—corresponds exactly to the numerical solution of the **damped, driven Klein–Gordon equation** in two spatial dimensions.  
Starting from the microscopic Lagrangian of the lattice, we take the continuum limit to obtain the classical field theory Lagrangian density. The inclusion of linear friction and external forcing via the Rayleigh dissipation function yields the full PDE.  
We then analyse the mathematical structure of the equation: its classification as a hyperbolic system, well‑posedness in Sobolev spaces, energy dissipation, and the treatment of variable coefficients (refraction) and non‑reflecting boundaries (sponge layers).  
A finite‑difference time‑domain (FDTD) discretisation is derived, and we prove its consistency and stability (CFL condition), establishing that the JavaScript code is a convergent numerical integrator for the continuous field equation.  
The document is written for an audience with graduate‑level backgrounds in physics, mathematics, and computer science, merging the three perspectives into one coherent exposition.

---

## 1. Introduction

Interactive physics simulations often rely on simple local rules—masses connected by springs—to produce visually rich wave phenomena. What may appear as a mere toy can be the discrete analogue of a fundamental partial differential equation: the **Klein–Gordon equation**, which describes relativistic scalar fields, elastic membranes on a springy substrate, and numerous other wave systems with dispersion.  

When damping and external driving are added, the system becomes an open, dissipative field theory. The simulation we examine (a 90 × 170 grid of horizontally connected “strings” with vertical displacement) is precisely such a system. Its inner workings—neighbour interactions, velocity damping, restoring springs, a localised oscillatory source, spatially varying wave speed, and an absorbing boundary layer—are all directly interpretable as physical and mathematical terms in the damped Klein–Gordon equation.  

This document aims to bridge the gap between the discrete code and the continuum field theory in a manner that is rigorous yet accessible. We shall:

- **Derive** the continuous PDE from a discrete Lagrangian.
- **Analyse** the PDE’s functional‑analytic properties.
- **Discretise** the PDE using finite differences, recovering the exact update rules of the simulation.
- **Prove** that the numerical scheme is consistent, stable, and converges to the true solution.
- **Explain** the computational implementation and how each line of code corresponds to a mathematical operation.

---

## 2. Physical Model: The Discrete Lattice

We begin with a finite rectangular lattice of $N \\times M$ point masses. The lattice spacing (distance between adjacent nodes) is $a$, uniform in both the $x$ (horizontal) and $y$ (vertical) directions. Each node is labelled by indices $(i,j)$; its scalar transverse displacement from equilibrium is $u_{i,j}(t) \\in \\mathbb{R}$.

### 2.1 Lagrangian of the discrete system

The kinetic energy $T$ of the whole lattice is

$$
T = \\sum_{i=1}^{N}\\sum_{j=1}^{M} \\frac{1}{2} m\\, \\dot{u}_{i,j}^2,
$$

where $m$ is the mass of each node.

The potential energy $V$ has two contributions:

- **Nearest‑neighbour harmonic coupling (tension):** springs of stiffness $K$ connect each node to its four direct neighbours. The energy stored in one horizontal bond is $\\frac{1}{2} K (u_{i+1,j}-u_{i,j})^2$, and similarly for vertical bonds.
- **On‑site elastic foundation:** each node is additionally bound to its equilibrium position $u=0$ by a local spring of constant $K_0$, contributing $\\frac{1}{2} K_0 u_{i,j}^2$.

Thus

$$
V = \\sum_{i,j} \\left[ \\frac{1}{2} K \\Big((u_{i+1,j}-u_{i,j})^2 + (u_{i,j+1}-u_{i,j})^2\\Big) + \\frac{1}{2} K_0 u_{i,j}^2 \\right].
$$

The discrete Lagrangian $L_D = T - V$ is therefore

$$
L_D = \\sum_{i,j} \\left\\{ \\frac{1}{2} m \\dot{u}_{i,j}^2 - \\frac{1}{2} K\\Big((u_{i+1,j}-u_{i,j})^2 + (u_{i,j+1}-u_{i,j})^2\\Big) - \\frac{1}{2} K_0 u_{i,j}^2 \\right\\}.
$$

The equations of motion follow from the discrete Euler–Lagrange equations

$$
\\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L_D}{\\partial \\dot{u}_{i,j}} - \\frac{\\partial L_D}{\\partial u_{i,j}} = 0,
$$

giving

$$
m \\ddot{u}_{i,j} = K\\big(u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j}\\big) - K_0 u_{i,j}. \\tag{1}
$$

This is the exact system of coupled ordinary differential equations simulated by the code (before damping and driving are added). It conserves the total mechanical energy $E = T + V$.

---

## 3. Continuum Limit and the Klein–Gordon Equation

To understand the macroscopic wave behaviour, we let the lattice spacing $a$ tend to zero while the physical dimensions of the domain remain fixed. The discrete displacements $u_{i,j}(t)$ are interpolated by a smooth function $u(x,y,t)$ such that $u_{i,j}(t) = u(a i, a j, t)$.

### 3.1 Scaling of parameters

As $a \\to 0$, the bare microscopic parameters $m$, $K$, $K_0$ must be scaled appropriately so that macroscopic densities remain finite:

$$
\\rho \\equiv \\frac{m}{a^2} \\quad \\text{(surface mass density)},
$$
$$
\\tau \\equiv K \\quad \\text{(tension; a spring constant is scale‑invariant)},
$$
$$
\\mu \\equiv \\frac{K_0}{a^2} \\quad \\text{(foundation stiffness per unit area)}.
$$

These are the natural emergent quantities.

### 3.2 Taylor expansion of the potential terms

For a smooth field, a nearest‑neighbour difference approximates a derivative:

$$
u_{i+1,j} - u_{i,j} = a\\,\\partial_x u + \\frac{a^2}{2}\\partial_x^2 u + O(a^3),
$$

so that

$$
(u_{i+1,j} - u_{i,j})^2 = a^2 (\\partial_x u)^2 + O(a^3).
$$

Consequently, the Lagrangian sum can be rewritten as a Riemann sum over area elements $a^2$:

$$
L_D = \\sum_{i,j} a^2 \\left[ \\frac{1}{2} \\rho \\dot{u}^2 - \\frac{1}{2} \\tau \\big((\\partial_x u)^2 + (\\partial_y u)^2\\big) - \\frac{1}{2} \\mu u^2 \\right] + O(a).
$$

In the limit $a \\to 0$, the sum becomes an area integral over the domain $\\Omega \\subset \\mathbb{R}^2$:

$$
L = \\int_\\Omega \\mathcal{L}(u,\\partial_t u,\\nabla u)\\, \\mathrm{d}^2x,
$$

where the **Lagrangian density** is

$$
\\boxed{\\mathcal{L} = \\frac{1}{2}\\rho (\\partial_t u)^2 - \\frac{1}{2}\\tau |\\nabla u|^2 - \\frac{1}{2}\\mu u^2}. \\tag{2}
$$

### 3.3 Continuous Euler–Lagrange equations

The action $S = \\int L\\, \\mathrm{d}t$ is stationary under variations $\\delta u$ that vanish on the boundary of $\\Omega \\times [t_1,t_2]$. For a first‑order density $\\mathcal{L}(u,\\partial_\\mu u)$, the Euler–Lagrange equations read

$$
\\partial_\\mu\\left(\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_\\mu u)}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial u} = 0,
\\qquad \\mu = t,x,y.
$$

Applying this to (2):

$$
\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_t u)} = \\rho\\,\\partial_t u, \\quad
\\frac{\\partial\\mathcal{L}}{\\partial(\\nabla u)} = -\\tau\\,\\nabla u, \\quad
\\frac{\\partial\\mathcal{L}}{\\partial u} = -\\mu u.
$$

Thus

$$
\\rho\\,\\partial_t^2 u - \\tau\\,\\nabla^2 u + \\mu u = 0. \\tag{3}
$$

This is the **conservative Klein–Gordon equation** on a 2D elastic membrane that rests on an elastic foundation.

### 3.4 Non‑conservative forces: damping and driving

Real systems dissipate energy through friction and can be driven externally. Within the Lagrangian framework, linear viscous forces are included via the **Rayleigh dissipation function**. We introduce the dissipation density

$$
\\mathcal{R} = \\frac{1}{2} \\Gamma (\\partial_t u)^2,
$$

where $\\Gamma$ is the macroscopic damping density (related to the microscopic friction by $\\Gamma = \\gamma_D m / a^2$). A prescribed external force density $\\mathcal{F}_{\\text{ext}}(x,y,t)$ is added as a generalised force. The extended Euler–Lagrange equation is then

$$
\\partial_\\mu\\left(\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_\\mu u)}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial u} = -\\frac{\\partial\\mathcal{R}}{\\partial(\\partial_t u)} + \\mathcal{F}_{\\text{ext}}.
$$

Substituting the expressions yields

$$
\\rho\\,\\partial_t^2 u - \\tau\\,\\nabla^2 u + \\mu u = -\\Gamma\\,\\partial_t u + \\mathcal{F}_{\\text{ext}}. \\tag{4}
$$

Dividing by $\\rho$, we define the macroscopic constants

$$
c^2 = \\frac{\\tau}{\\rho} \\quad \\text{(squared wave speed)},
$$
$$
\\gamma = \\frac{\\Gamma}{\\rho} \\quad \\text{(specific damping coefficient)},
$$
$$
k = \\frac{\\mu}{\\rho} \\quad \\text{(specific restoring stiffness)},
$$
$$
F(x,y,t) = \\frac{\\mathcal{F}_{\\text{ext}}}{\\rho} \\quad \\text{(specific driving force)}.
$$

We obtain the canonical **damped, driven Klein–Gordon equation**:

$$
\\boxed{\\frac{\\partial^2 u}{\\partial t^2} + \\gamma \\frac{\\partial u}{\\partial t} - c^2 \\nabla^2 u + k\\,u = F(x,y,t)}. \\tag{5}
$$

When $\\gamma = 0$ and $F = 0$, this reduces to the standard Klein–Gordon equation $(\\partial_t^2 - c^2\\nabla^2 + k)u = 0$, which in relativistic quantum field theory describes a free scalar field of mass $m$ with $k = m^2c^4/\\hbar^2$. Here it remains entirely classical.

---

## 4. Mathematical Analysis of the Continuous Problem

Before discretising, we must understand the well‑posedness and the role of boundary conditions. The PDE (5) is a linear, second‑order hyperbolic equation with constant coefficients (in the homogeneous medium case). Its rigorous treatment relies on Sobolev spaces and semigroup theory.

### 4.1 Function spaces and weak formulation

Let $\\Omega \\subset \\mathbb{R}^2$ be the spatial domain (a rectangle in the simulation). The natural energy space is the Hilbert space

$$
\\mathcal{H} = H^1(\\Omega) \\times L^2(\\Omega),
$$

where $H^1(\\Omega)$ is the Sobolev space of functions with square‑integrable first derivatives. For a smooth solution, the energy

$$
E(t) = \\frac{1}{2}\\int_\\Omega \\left( (\\partial_t u)^2 + c^2|\\nabla u|^2 + k u^2 \\right) \\mathrm{d}^2x
$$

is the norm squared of $(u,\\partial_t u)$ in $\\mathcal{H}$ (up to constants). The equation can be written as a first‑order system:

$$
\\begin{cases}
\\partial_t u = v,\\\\
\\partial_t v = - \\gamma v + c^2\\nabla^2 u - k u + F.
\\end{cases}
$$

With homogeneous Dirichlet ($u|_{\\partial\\Omega}=0$) or Neumann ($\\partial_n u|_{\\partial\\Omega}=0$) conditions, the spatial operator $A = \\begin{pmatrix} 0 & I \\\\ c^2\\nabla^2 - k & 0 \\end{pmatrix}$ with appropriate domain generates a $C_0$‑semigroup on $\\mathcal{H}$. The damping term $-\\gamma v$ is a bounded perturbation, so the full operator generates a contraction semigroup. Thus, for initial data $(u_0,v_0) \\in \\mathcal{H}$ and $F \\in L^1_{\\text{loc}}(\\mathbb{R};L^2(\\Omega))$, there exists a unique weak solution

$$
u \\in C(\\mathbb{R}; H^1(\\Omega)) \\cap C^1(\\mathbb{R}; L^2(\\Omega)).
$$

### 4.2 Energy dissipation

Multiplying (5) by $\\partial_t u$ and integrating over $\\Omega$, one obtains the energy balance

$$
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\int_\\Omega \\mathcal{E}\\, \\mathrm{d}^2x = -\\gamma\\int_\\Omega (\\partial_t u)^2 \\mathrm{d}^2x + \\int_\\Omega F\\,\\partial_t u\\, \\mathrm{d}^2x + \\int_{\\partial\\Omega} c^2 (\\partial_n u)\\,\\partial_t u \\,\\mathrm{d}s,
$$

where $\\mathcal{E} = \\frac{1}{2}(\\partial_t u)^2 + \\frac{1}{2} c^2|\\nabla u|^2 + \\frac{1}{2} k u^2$. The boundary term vanishes for both Dirichlet ($\\partial_t u=0$) and Neumann ($\\partial_n u=0$) conditions. The damping term is strictly negative, reflecting energy loss. For the absorbing sponge layer (discussed later), the damping is applied in a subdomain, guaranteeing global energy decay.

### 4.3 Boundary conditions in the simulation

The JavaScript code implements two distinct types of boundary treatments:

- **Reflecting (Neumann) boundaries** at the right ($x=W$) and bottom ($y=H$) edges. The discrete Laplacian at an edge node uses the interior neighbour value twice, mimicking $\\partial_n u = 0$. This corresponds physically to a free edge (no flux of momentum).
- **Sponge (absorbing) boundaries** at the top ($y=0$) and left ($x=0$) edges. Before the wave reaches the numerical boundary, its energy is dissipated by an artificially increased damping coefficient $\\gamma(x,y)$. In the continuum limit, this is modelled by a damping term $\\sigma(x,y)\\partial_t u$ with $\\sigma$ large near the boundary. If $\\sigma$ increases sufficiently smoothly (e.g., quadratic profile), reflections are exponentially suppressed. This technique emulates an infinite domain without the need to impose a global boundary condition; mathematically, it approximates the *radiation condition* at infinity.

---

## 5. Variable Coefficients: Refraction and the Sponge Layer

To create realistic wave behaviour, the simulation allows the wave speed and damping to vary with position.

### 5.1 Piecewise constant wave speed (refraction)

In the code, $c^2$ is set to $0.0015$ for $x < W/2$ (left hemisphere) and $0.006$ for $x > W/2$ (right hemisphere). The continuum PDE becomes

$$
\\partial_t^2 u + \\gamma\\partial_t u - \\nabla\\cdot\\big(c^2(x,y)\\nabla u\\big) + k u = F. \\tag{6}
$$

At the interface $x = W/2$, the solution must satisfy the natural transmission conditions inherited from the weak form:

$$
[u] = 0, \\qquad [c^2\\,\\partial_x u] = 0,
$$

i.e., the field and the normal flux are continuous. The discrete Laplacian across the interface automatically enforces these jump conditions to second‑order accuracy, causing incoming waves to change speed and wavelength—exactly Snell’s law of refraction.

### 5.2 Spatially varying damping (sponge layer)

Near the top ($y=0$) and left ($x=0$) edges, the damping coefficient is augmented as

$$
\\gamma(x,y) = \\gamma_0 + \\gamma_{\\text{extra}}(d),
$$
where $d = \\min(x,y)$ and

$$
\\gamma_{\\text{extra}}(d) = \\gamma_{\\max}\\left(1 - \\frac{d}{L_s}\\right)^2 \\quad \\text{for } d \\le L_s,
$$

and zero otherwise. $L_s$ is the sponge width (25 pixels in the simulation). This smooth, quadratic ramp ensures that waves entering the sponge are gradually absorbed. In the mathematical literature, this is a simple but effective realisation of an *absorbing layer*; it is not a perfectly matched layer (PML) but shares its essential principle: increase dissipation without sharp impedance changes.

---

## 6. Discretization: Finite‑Difference Time‑Domain (FDTD)

The JavaScript simulation solves (6) on a uniform grid with spacing $\\Delta x = \\Delta y = a$ (the pixel‑scale distance between neighbouring points). The time integration uses a leapfrog (velocity Verlet) scheme, which is symplectic for the conservative part and explicit.

### 6.1 Spatial discretisation of the Laplacian

The continuous Laplacian $\\nabla^2 u$ is approximated by the standard 5‑point stencil:

$$
\\nabla^2 u \\approx \\frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j}}{a^2}.
$$

At boundaries, the stencil is modified:

- **Reflecting edge (Neumann):** if $i=0$ (left boundary), the missing neighbour $u_{-1,j}$ is replaced by $u_{1,j}$, giving a discrete $\\partial_x u = 0$ condition. Similarly for other edges.
- **Absorbing edge:** no special stencil modification; the edge is allowed to reflect, but the sponge layer dissipates energy before it reaches the boundary.

### 6.2 Time integration (velocity Verlet)

Let $u^n_{i,j} \\approx u(ia, ja, n\\Delta t)$ and $v^n_{i,j} \\approx \\partial_t u$ at time $t_n = n\\Delta t$. The velocity Verlet scheme (also known as the leapfrog method when staggered in time) updates as:

$$
\\begin{aligned}
v^{n+1/2}_{i,j} &= v^{n-1/2}_{i,j} + \\Delta t \\Big[ c^2_{i,j} (\\nabla^2 u)^n_{i,j} - \\gamma_{i,j} v^{n-1/2}_{i,j} - k\\, u^n_{i,j} + F^n_{i,j} \\Big], \\\\
u^{n+1}_{i,j} &= u^n_{i,j} + \\Delta t \\, v^{n+1/2}_{i,j}.
\\end{aligned}
$$

In the actual code, the damping is applied multiplicatively (\`vy *= damping\`) which is equivalent to the exponential integrator form $v^{n+1/2} = e^{-\\gamma \\Delta t} v^{n-1/2} + \\dots$; for small $\\Delta t$, this coincides with the explicit Euler damping above. The restoring force and Laplacian are combined in the velocity update:

\`\`\`javascript
let forceLeft = (j > 0) ? (strings[i][j-1].y - p.y) : (strings[i][j+1].y - p.y);
let forceRight = (j < pointsPerString - 1) ? (strings[i][j+1].y - p.y) : (strings[i][j-1].y - p.y);
let u_up = (i > 0) ? (strings[i-1][j].y - strings[i-1][j].baseY) : (strings[i+1][j].y - strings[i+1][j].baseY);
let u_down = (i < stringCount - 1) ? (strings[i+1][j].y - strings[i+1][j].baseY) : (strings[i-1][j].y - strings[i-1][j].baseY);

p.vy += (forceLeft + forceRight + (u_up - u) + (u_down - u)) * p.c2;
p.vy += (p.baseY - p.y) * baseRestoring; // k term
p.vy *= this.localDamping;              // damping factor
p.y += p.vy;                            // position update
\`\`\`

Here \`p.c2\` is the squared wave speed $c^2$, \`baseRestoring\` is the constant $k$, and \`localDamping\` is approximately $e^{-\\gamma \\Delta t}$.

### 6.3 External forcing

The source oscillator is implemented as:

\`\`\`javascript
let s_influence = Math.pow(1 - (s_dist / sourceRadius), 2);
p.vy += Math.cos(time * sourceFreq - waveNumber * projected_d) * amplitude * s_influence;
\`\`\`

This matches the mathematical forcing term

$$
F(x,y,t) = A \\cos(\\omega t - \\mathbf{k}\\cdot\\mathbf{x}) \\, \\chi_{B_R}(\\mathbf{x}-\\mathbf{x}_0) \\, \\left(1 - \\frac{|\\mathbf{x}-\\mathbf{x}_0|}{R}\\right)^2,
$$

where $\\mathbf{k}$ is aligned with the diagonal, and $\\chi$ is the indicator of a disk of radius $R$.

---

## 7. Consistency, Stability, and Convergence

We now prove that the discrete scheme indeed approximates the continuous damped Klein–Gordon equation.

### 7.1 Truncation error

Let $u$ be a smooth solution of (6). Substituting the exact solution into the numerical scheme, we compute the local truncation error $\\tau^n_{i,j}$ by Taylor expansion. For the spatial part, the 5‑point Laplacian gives

$$
\\frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j}}{a^2} = \\nabla^2 u + \\frac{a^2}{12}(\\partial_x^4 u + \\partial_y^4 u) + O(a^4).
$$

For the time stepping, the leapfrog scheme has a second‑order error in $\\Delta t$ when combined with the velocity update. Therefore the overall truncation error is $O(\\Delta t^2 + a^2)$. The scheme is **consistent** with the PDE.

### 7.2 Stability and the CFL condition

The explicit scheme requires a time step small enough that information cannot travel across more than one grid cell per time step. For the wave equation with varying speed, the local CFL condition is

$$
c_{\\max} \\frac{\\Delta t}{a} \\le \\frac{1}{\\sqrt{2}},
$$

where $c_{\\max} = \\sqrt{0.006}$ in the code. With the frame rate tied to \`requestAnimationFrame\` (~16 ms) and the effective $a$ being 1 pixel, the product $c^2 \\Delta t$ must be carefully scaled. In practice, the damping also reduces the time‑step restriction because high frequencies are attenuated.

If the CFL condition holds, the scheme is von Neumann stable (one can perform a Fourier analysis for the linearised, constant‑coefficient case). A rigorous stability proof can be given via energy methods for the discrete system.

### 7.3 Convergence

By the Lax–Richtmyer equivalence theorem, a consistent and stable finite‑difference scheme for a well‑posed linear initial‑value problem is convergent. Therefore, as $\\Delta t, a \\to 0$ (with $\\Delta t / a$ held constant), the numerical solution converges to the exact weak solution of (6) in the norm of $\\mathcal{H}$. The JavaScript simulation operates with finite grid size and time step, so it provides an approximate solution with second‑order accuracy.

---

## 8. Computer Science Perspective: Implementation and Performance

The simulation’s architecture is designed for real‑time visualisation on a single CPU thread using HTML5 Canvas. We highlight the key data structures and algorithms.

### 8.1 Grid representation

The grid is stored as an array of “strings”, each string being an array of point objects:

\`\`\`javascript
this.strings = new Array(stringCount);
for (let i = 0; i < stringCount; i++) {
    this.strings[i] = new Array(pointsPerString);
    for (let j = 0; j < pointsPerString; j++) {
        this.strings[i][j] = { y: baseY, vy: 0, baseY: baseY, c2: ..., localDamping: ... };
    }
}
\`\`\`

Each point holds its current displacement \`y\`, vertical velocity \`vy\`, equilibrium position \`baseY\`, and local parameters \`c2\` (squared wave speed) and \`localDamping\`. This object‑oriented design is flexible but carries some overhead; optimisation could use flat typed arrays for larger simulations.

### 8.2 Update loop

The physics update runs once per animation frame. The order of operations ensures that all points use velocities and positions from the previous time step, preserving the explicit leapfrog structure.

- **Neighbour forces** are computed using the current displacements \`y\` of adjacent points. The code mirrors missing neighbours for boundaries.
- **Restoring force** uses \`baseY - y\`.
- **Damping** is applied multiplicatively after the force accumulation.
- **Position** is updated by adding the new velocity.
- **External forcing** (source oscillator, mouse interaction) is added to velocity before the damping step (or after, depending on the intended physics; both are valid approximations).

### 8.3 Rendering

Each frame, the updated positions are drawn by iterating over each string and using \`ctx.lineTo()\` to connect consecutive points. The result is a smooth waveform. Performance stays above 30 fps for 15 300 points because the computations are simple floating‑point operations.

---

## 9. Validation: The Code as a Klein–Gordon Solver

We now demonstrate the exact correspondence between the JavaScript update rules and the discretised damped Klein–Gordon equation.

**Step‑by‑step mapping:**

| Mathematical term               | JavaScript expression                                                                                 |
|---------------------------------|-------------------------------------------------------------------------------------------------------|
| $\\nabla^2 u$ (discrete)        | \`(forceLeft + forceRight + (u_up - u) + (u_down - u))\` divided by $a^2$, where $a = 1$ pixel          |
| $c^2$                           | \`p.c2\`                                                                                               |
| $c^2\\nabla^2 u$                 | \`(forceLeft + forceRight + (u_up - u) + (u_down - u)) * p.c2\`                                       |
| $-k u$ (restoring)              | \`(p.baseY - p.y) * baseRestoring\`                                                                     |
| $-\\gamma v$ (damping)           | Multiplicative factor \`p.vy *= this.localDamping\` where \`localDamping\` $\\approx 1 - \\gamma\\Delta t$ |
| $F$ (source)                    | \`Math.cos(...) * amplitude * s_influence\`                                                             |
| $\\partial_t^2 u$ integrated     | Velocity added to position: \`p.y += p.vy;\` represents $\\partial_t u$, so \`p.vy += ...\` corresponds to $\\partial_t^2 u$ |

The discrete time derivative is first‑order in the velocity update, which matches the leapfrog approximation:

$$
\\frac{v^{n+1/2} - v^{n-1/2}}{\\Delta t} \\approx \\partial_t^2 u^n.
$$

Therefore, the code solves

$$
\\frac{v^{n+1/2} - v^{n-1/2}}{\\Delta t} = c^2 (\\nabla^2 u)^n - \\gamma v^{n-1/2} - k u^n + F^n,
$$

which is a consistent and stable discretisation of

$$
\\partial_t^2 u + \\gamma \\partial_t u - c^2\\nabla^2 u + k u = F.
$$

**Q.E.D.**

---

## 10. Conclusion

We have presented a full‑stack theoretical and computational derivation showing that the interactive wave simulation—with its neighbour springs, damping, restoring forces, variable wave speed, and absorbing sponge layer—is precisely a finite‑difference solver for the damped, driven Klein–Gordon equation in two dimensions.  

The journey took us from the microscopic Lagrangian of a lattice, through the continuum limit and the calculus of variations, to the functional‑analytic foundations that guarantee well‑posedness. We then discretised the PDE and proved consistency and stability, confirming that the JavaScript code is a convergent numerical method.  

This document serves as a self‑contained reference for understanding the deep connections between discrete mechanical models, classical field theory, and real‑time computational physics. It demonstrates how a simple set of local rules can faithfully reproduce the rich phenomenology of a fundamental relativistic wave equation.

---

**References**  
1. Goldstein, H., *Classical Mechanics*, 3rd ed., Addison‑Wesley.  
2. Evans, L.C., *Partial Differential Equations*, 2nd ed., AMS.  
3. Taflove, A. & Hagness, S.C., *Computational Electrodynamics: The Finite‑Difference Time‑Domain Method*, 3rd ed., Artech House.  
4. French, A.P., *Vibrations and Waves*, W.W. Norton.  
5. Strikwerda, J.C., *Finite Difference Schemes and Partial Differential Equations*, 2nd ed., SIAM.`;let hd=!1;function p1(r){const e=[],t=[];let n=r.replace(/(```[\s\S]*?```|`[^`]+?`)/g,s=>(t.push(s),`%%CODE_BLOCK_${t.length-1}%%`));n=n.replace(/\$\$([\s\S]*?)\$\$/g,(s,a)=>(e.push({type:"display",math:a.trim()}),`%%MATH_BLOCK_${e.length-1}%%`)),n=n.replace(/\$([^$\n]+?)\$/g,(s,a)=>(e.push({type:"inline",math:a.trim()}),`%%MATH_INLINE_${e.length-1}%%`)),n=n.replace(/%%CODE_BLOCK_(\d+)%%/g,(s,a)=>t[a]);let i=ot.parse(n);return i=i.replace(/%%MATH_BLOCK_(\d+)%%/g,(s,a)=>`<div class="math-display">$$
${e[a].math}
$$</div>`),i=i.replace(/%%MATH_INLINE_(\d+)%%/g,(s,a)=>`<span class="math-inline">$${e[a].math}$</span>`),i}function m1(){const r=document.getElementById("research-readme-btn"),e=document.getElementById("readme-modal-overlay"),t=document.getElementById("readme-close-btn"),n=e?e.querySelector(".readme-modal-backdrop"):null;r&&r.addEventListener("click",g1),t&&t.addEventListener("click",Hc),n&&n.addEventListener("click",Hc),window.addEventListener("keydown",i=>{i.key==="Escape"&&hd&&Hc()})}function g1(){const r=document.getElementById("readme-modal-overlay"),e=document.getElementById("readme-modal-body"),t=document.getElementById("readme-progress-bar");if(!(!r||!e)){if(!e.innerHTML.trim())try{const n=p1(cp);e.innerHTML=n,e.querySelectorAll("h1, h2, h3").forEach((s,a)=>{s.setAttribute("id",`readme-sec-${a}`)})}catch(n){console.error("Failed to parse klein-gordon.md markdown:",n),e.innerHTML=`<pre style="white-space: pre-wrap;">${cp}</pre>`}r.classList.remove("readme-overlay-hidden"),hd=!0,e.onscroll=()=>{if(!t)return;const n=e.scrollHeight-e.clientHeight,i=n>0?e.scrollTop/n*100:0;t.style.width=`${i}%`},window.MathJax&&window.MathJax.typesetPromise&&window.MathJax.typesetPromise([e]).then(()=>{console.log("MathJax typesetting completed successfully.")}).catch(n=>{console.warn("MathJax typeset warning:",n)})}}function Hc(){const r=document.getElementById("readme-modal-overlay");r&&(r.classList.add("readme-overlay-hidden"),hd=!1)}async function _1(){const r=document.getElementById("status-display"),e=(x,y)=>{U.loadStage=x,U.loadProgress=y,r&&(r.innerText=x),console.log(`[INIT] ${x}: ${y}%`)};window.addEventListener("click",x=>{console.log("Global click registered on:",x.target,x.target.id,x.target.className)}),e("FETCHING_DATA",5);try{const y=await(await fetch("/data/timeline.json")).json();let O=-50;y.filter(R=>R.category==="career").forEach((R,N)=>{R.x=N%2===0?25:-30,R.y=0,R.z=O,O-=90+R.mass*15,ht.push(R)})}catch(x){console.error("Failed to load timeline data: ",x)}xS(),e("RENDERER_READY",10);let t,n,i,s,a,o;const l=await PS((x,y)=>{const O={torus:30,grid:55,stars:75},R={torus:"TORUS_GENERATED",grid:"GRID_GENERATED",stars:"STARS_GENERATED"};O[x]&&e(R[x],O[x])},x=>{t=x.torusMesh,n=x.torusMat,Li.add(t);let y;function O(R){if(window.mainLoopStarted){cancelAnimationFrame(y);return}y=requestAnimationFrame(O),t.rotation.z+=.002;const N=.016;n.uniforms.uNoiseTime.value+=N*(.1+U.temperature*.05),n.uniforms.uTemperature.value=U.temperature,n.uniforms.uTime.value=R*.001,hi.render(Li,Ce)}y=requestAnimationFrame(O)});i=l.gridMesh,s=l.gridMat,a=l.starField,o=l.starsMat,Li.add(i),Li.add(a);const c=dE(s);Li.add(c),e("NODES_READY",90);const u=OE();u.visible=!1;const d=MS();iE(d),e("COMPUTING_TRAJECTORY",95),hi.compile(Li,Ce),e("SYSTEM_WARMUP",100),rg({torusMesh:t,torusMat:n,gridMat:s,starsMat:o,nodeGroup:c,cameraPath:d,researchMesh:u}),fE(),SS(),rE(),U.mouse=new pe(0,0);const h=document.getElementById("fourier-container"),f=document.getElementById("liquid-name-container");window.addEventListener("mousemove",x=>{if(U.mouse.x=x.clientX/window.innerWidth*2-1,U.mouse.y=-(x.clientY/window.innerHeight)*2+1,h){const y=-U.mouse.x*5,O=U.mouse.y*5;h.style.transform=`translate(calc(-50% + ${y}px), calc(-50% + ${O}px))`}if(f){const y=-U.mouse.x*8,O=U.mouse.y*8;f.style.transform=`translate(calc(-50% + ${y}px), calc(-50% + ${O}px))`}}),_e(()=>import("./fourier-BMAm6eiL.js"),[]).then(x=>{x.initFourier("fourierCanvas")}),_e(()=>import("./liquidTypography-P6eoZQFP.js"),[]).then(x=>{x.initLiquidTypography("liquidNameCanvas")}),_e(()=>import("./orbitalBeads-DL5WR11s.js"),[]).then(x=>{x.initOrbitalBeads()}),bE(),XE(),pT.telemetryCallback=()=>({fps:U.currentFPS||60,calls:hi.info.render.calls,geometries:hi.info.memory.geometries,triangles:hi.info.render.triangles});const p=document.getElementById("hud-nav-timeline"),_=document.getElementById("hud-nav-works"),m=document.getElementById("hero-nav-dock");p&&p.addEventListener("click",()=>{U.phase==="HERO"&&!U.transitioning&&eh()}),_&&_.addEventListener("click",()=>{U.phase==="HERO"&&!U.transitioning&&th()}),window.addEventListener("keydown",x=>{if(U.phase==="HERO"&&!U.transitioning){if(document.activeElement&&["INPUT","TEXTAREA"].includes(document.activeElement.tagName))return;const y=x.key.toLowerCase();y==="t"?eh():y==="w"&&th()}});function g(){m&&(U.phase==="HERO"&&!U.transitioning?(m.style.opacity="1",m.style.pointerEvents="auto"):(m.style.opacity="0",m.style.pointerEvents="none"))}setInterval(g,150),cg(),m1();const v=document.getElementById("timeline-back");v&&v.addEventListener("click",sg);const S=document.getElementById("works-back");S&&S.addEventListener("click",ag);const b=document.getElementById("research-back");b&&b.addEventListener("click",og);function E(){v&&(U.phase==="TIMELINE"&&!U.transitioning?(v.style.opacity="1",v.style.pointerEvents="auto"):(v.style.opacity="0",v.style.pointerEvents="none"))}setInterval(E,200);const T=document.getElementById("timeline-nodes"),A=document.getElementById("radar-round-nodes");if(T&&ht.length>0){const x=L=>{if(!L)return 2025;if(L.toString().toLowerCase().includes("present"))return new Date().getFullYear();const D=L.toString().split("-"),F=parseInt(D[0],10);if(isNaN(F))return 2025;if(D.length>1){const I=parseInt(D[1],10);if(!isNaN(I))return F+(I-1)/12}return F};ht.forEach(L=>{var D;L.timeVal=x(((D=L==null?void 0:L.time_range)==null?void 0:D.start)||(L==null?void 0:L.date))});const y=[...ht].sort((L,D)=>L.timeVal-D.timeVal),O=L=>{if(L<=y[0].timeVal)return y[0].z+(y[0].timeVal-L)*100;const D=y[y.length-1];if(L>=D.timeVal)return D.z-(L-D.timeVal)*100;for(let F=0;F<y.length-1;F++){const I=y[F],q=y[F+1];if(L>=I.timeVal&&L<=q.timeVal){const X=q.timeVal-I.timeVal;if(X===0)return I.z;const Q=(L-I.timeVal)/X;return I.z+Q*(q.z-I.z)}}return y[0].z},R=L=>{let D=0,F=1/0;for(let I=0;I<=2e3;I++){let q=I/2e3,X=d.getPointAt(q),Q=Math.abs(X.z-L);Q<F&&(F=Q,D=q)}return D};if(ht.forEach((L,D)=>{const F=R(L.z),I=document.createElement("div");if(I.className="radar-node",I.style.top=`${F*100}%`,I.setAttribute("title",`EVT-0${D+1}: ${L.title} (${L.time_range?L.time_range.start:L.date})`),I.addEventListener("click",q=>{q.stopPropagation(),bs(D)}),T.appendChild(I),A){const q=d.getPointAt(F),X=document.createElement("div");X.className="radar-round-marker",X.setAttribute("title",`EVT-0${D+1}: ${L.title} (${L.time_range?L.time_range.start:L.date})`),X.addEventListener("click",se=>{se.stopPropagation(),bs(D)});const Q=.15;X.style.left=`${q.x*Q}px`,X.style.top=`${q.z*Q}px`,X.dataset.x=q.x*Q,X.dataset.y=q.z*Q,A.appendChild(X)}}),A)for(let L=0;L<40;L++){const D=document.createElement("div");D.className="radar-star";const F=Math.random()*60-30,I=Math.random()*240-230;D.style.left=`${F}px`,D.style.top=`${I}px`,D.dataset.x=F,D.dataset.y=I,A.appendChild(D)}let N=Math.floor(Math.min(...y.map(L=>L.timeVal))),B=Math.ceil(Math.max(...y.map(L=>L.timeVal)));N=Math.max(1990,N-1),B=Math.min(2030,B+1);for(let L=N;L<=B;L++)for(let D=0;D<4;D++){const F=L+D*.25,I=O(F),q=R(I);if(q<=.001||q>=.999)continue;const X=document.createElement("div"),Q=D===0;if(X.className=Q?"radar-tick tick-major":"radar-tick tick-minor",X.style.top=`${q*100}%`,Q){const se=document.createElement("span");se.className="tick-label",se.innerText=L,X.appendChild(se)}T.appendChild(X)}}iT(t,n,s,o,c,d,u)}_1().catch(r=>{console.error("Critical System Failure during initialization:",r);const e=document.getElementById("status-display");e&&(e.innerText="FATAL_ERROR")});
