"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["scanning"],{254:(e,t,n)=>{n.d(t,{ZG:()=>i,q6:()=>d,w4:()=>a});var r=n(8439);let o=!1,s=new r.Z;function l(e){let t=e.target;if(t instanceof HTMLElement&&t.nodeType!==Node.DOCUMENT_NODE)for(let e of s.matches(t))e.data.call(null,t)}function i(e,t){o||(o=!0,document.addEventListener("focus",l,!0)),s.add(e,t),document.activeElement instanceof HTMLElement&&document.activeElement.matches(e)&&t(document.activeElement)}function a(e,t,n){function r(t){let o=t.currentTarget;o&&(o.removeEventListener(e,n),o.removeEventListener("blur",r))}i(t,function(t){t.addEventListener(e,n),t.addEventListener("blur",r)})}function d(e,t){function n(e){let{currentTarget:r}=e;r&&(r.removeEventListener("input",t),r.removeEventListener("blur",n))}i(e,function(e){e.addEventListener("input",t),e.addEventListener("blur",n)})}},67525:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(22490);let o=r.Z.createPolicy("parse-html-no-op",{createHTML:e=>e});function s(e,t){let n=e.createElement("template");return n.innerHTML=o.createHTML(t),e.importNode(n.content,!0)}},35158:(e,t,n)=>{var r=n(59753),o=n(50691);function s(e){let t=document.createElement("input");return t.setAttribute("type","hidden"),t.setAttribute("name",e.name),t.setAttribute("value",e.value),t}function l(e){let t=!1,n=e.querySelectorAll(".js-scanning-fixed-alert-numbers"),r=0!==n.length?JSON.parse(n[0].getAttribute("data-numbers")||"[]"):[];for(let n of e.querySelectorAll(".js-scanning-bulk-action-items")){n.textContent="";let o=e.querySelectorAll(".js-scanning-alert-list [data-check-all-item]:checked");for(let e of o)t||(t=-1!==r.indexOf(parseInt(e.value))),n.appendChild(s(e))}for(let n of e.querySelectorAll(".js-scanning-reopen-button"))n.hidden=t;for(let n of e.querySelectorAll(".js-scanning-reopen-button-disabled"))n.hidden=!t}(0,r.on)("change",".js-scanning-alert-check",function({currentTarget:e}){let t=e.closest(".js-scanning-alert-list"),n=null!=t.querySelector(".js-scanning-alert-check:checked"),r=t.querySelector(".js-scanning-filter-options"),o=t.querySelector(".js-scanning-alert-bulk-actions"),s=t.querySelector(".js-scanning-alert-links");r&&(r.hidden=n),o&&(o.hidden=!n),s&&(s.hidden=n),l(t)}),(0,r.on)("details-menu-selected",".js-scanning-code-path-menu",function(e){let t=e.detail.relatedTarget.getAttribute("data-target-code-path");for(let e of document.querySelectorAll(".js-scanning-code-path"))e.hidden=t!==e.getAttribute("data-code-path")},{capture:!0})},50691:(e,t,n)=>{var r=n(36071);let o=async e=>{let t=e.getAttribute("data-remediation-path");if(null==t)return{remediationResult:null,row:e};try{let n=await fetch(`${t}.json`),r=await n.json();return{remediationResult:r,row:e}}catch(t){return{remediationResult:null,row:e}}},s=!1;(0,r.N7)(".js-navigation-container",()=>{if(s)return;s=!0;let e=Array.from(document.querySelectorAll(".js-alert-row")).filter(e=>{let t=e.getAttribute("data-show-remediation");return"true"===t}),t=e.map(e=>o(e));Promise.all(t).then(e=>{let t=e.filter(e=>null!==e.remediationResult);for(let e of t){let t=e.row;if(e.remediationResult?.remediation==="ACTIVE"){let e=t.querySelector(".js-secret-scanning-row-validity-active");e&&(e.hidden=!1)}}s=!1})})},49657:(e,t,n)=>{function r(){document.removeEventListener("turbo:load",r);let e=document.querySelector('[data-target="secret-scanning-filter.clearButton"]');if(null===e)return;let t=e?.hidden;if(t){let e=document.querySelectorAll(".js-change-open-close-state"),t=e[e.length-2];t?.focus();return}document.title=document.title.concat(" (filters applied)"),e.focus()}(0,n(59753).on)("click",".js-change-open-close-state",function(){document.addEventListener("turbo:load",r)})},93928:(e,t,n)=>{function r(e){let t=e.split("\u200D"),n=0;for(let e of t){let t=Array.from(e.split(/[\ufe00-\ufe0f]/).join("")).length;n+=t}return n/t.length}function o(e,t,n,r=!0){let o=e.value.substring(0,e.selectionEnd||0),s=e.value.substring(e.selectionEnd||0);return i(e,(o=o.replace(t,n))+(s=s.replace(t,n)),o.length,r),n}function s(e,t,n){if(null===e.selectionStart||null===e.selectionEnd)return o(e,t,n);let r=e.value.substring(0,e.selectionStart),s=e.value.substring(e.selectionEnd);return i(e,r+n+s,r.length),n}function l(e,t,n={}){let r=e.selectionEnd||0,o=e.value.substring(0,r),s=e.value.substring(r),l=""===e.value||o.match(/\n$/)?"":"\n",i=n.appendNewline?"\n":"",a=l+t+i;e.value=o+a+s;let d=r+a.length;return e.selectionStart=d,e.selectionEnd=d,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1})),e.focus(),a}function i(e,t,n,r=!0){e.value=t,r&&(e.selectionStart=n,e.selectionEnd=n),e.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1}))}function a(e,t){let n=[...e],r=new TextEncoder,o=new Uint8Array(4);for(let e=0;e<n.length;e++){let s=n[e],{written:l,read:i}=r.encodeInto(s,o);if(!l||!i)return -1;let a=l-i;if(0!==a&&(e<t&&(t-=a),e>=t))break}return t}n.d(t,{Om:()=>l,lp:()=>o,rq:()=>r,t4:()=>s,yb:()=>a})},16560:(e,t,n)=>{var r=n(35158),o=n(59753),s=n(254),l=n(69567),i=n(46263),a=n(36071),d=n(67525),c=n(93928);function u(e){return e.currentTarget}function m(e){e.textContent=e.getAttribute("data-disable-with")||"",e.disabled=!0}function f(){return document.querySelector(".js-custom-secret-scanning-pattern-form")}(0,a.N7)(".js-add-secret-format-button",{add(){window.postProcessingExpressionCount=0;let e=document.querySelector(".js-post-processing-expression-count");e&&e.textContent&&(window.postProcessingExpressionCount=parseInt(e.textContent))}}),(0,o.on)("click",".js-add-secret-format-button",e=>{let t=e.currentTarget;if(t&&window.postProcessingExpressionCount<E()){let e=document.querySelectorAll(".js-additional-secret-format");if(!e)return;for(let n of e)if(n.classList.contains("has-removed-contents")){n.classList.toggle("has-removed-contents",!1),window.postProcessingExpressionCount++,window.postProcessingExpressionCount===E()&&(t.hidden=!0);break}}}),(0,o.on)("click",".js-remove-secret-format-button",e=>{let t=document.querySelector(".js-add-secret-format-button");if(!t)return;let n=e.currentTarget;if(!n)return;let r=n.closest(".js-additional-secret-format");if(!r)return;r.classList.toggle("has-removed-contents",!0);let o=r.getElementsByClassName("js-post-processing-input")[0];o.value="";let s=Array.from(r.getElementsByClassName("js-post-processing-input-rule")),l=r.getElementsByClassName("errored")[0];for(let e of(l&&l.classList.toggle("errored",!1),s))document.getElementById(`${e.id}_hidden`)?.remove();document.getElementById(`${o.id}_hidden`)?.remove(),y(window.codeEditor.getValue()),window.postProcessingExpressionCount--,window.postProcessingExpressionCount<E()&&(t.hidden=!1)}),(0,a.N7)(".js-test-code",{async add(){let e=document.querySelector(".js-test-code"),t=e.clientHeight,r=await n.e("vendors-node_modules_codemirror_lib_codemirror_js").then(n.t.bind(n,4631,23));if(window.codeEditor=r.default.fromTextArea(e,{lineNumbers:!1,lineWrapping:!0,mode:"text/x-yaml",inputStyle:"contenteditable",value:e.value,lineSeparator:"\r\n",theme:"github-light"}),0!==t){let e=document.querySelector(".CodeMirror");e&&(e.style.height=`${t}px`,e.style.border="1px solid #e1e4e8",e.style.borderRadius="6px")}window.codeEditor.save();let o=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!o)return;let s=y;o.hasAttribute("data-source-is-readonly")&&(s=x),window.codeEditor.on("change",()=>{s(window.codeEditor.getValue())})}}),(0,s.q6)(".js-custom-secret-scanning-pattern-form *",async function(){window.codeEditor&&y(window.codeEditor.getValue())}),(0,o.on)("click",".js-repo-selector-dialog-summary-button.disabled",e=>{e.preventDefault()}),(0,o.on)("click",".js-save-and-dry-run-button, .js-custom-pattern-submit-button, .js-org-repo-selector-dialog-dry-run-button",e=>{e.preventDefault();let t=u(e);if(!t)return;m(t);let n=f();n&&((t.className.includes("js-save-and-dry-run-button")||t.className.includes("js-org-repo-selector-dialog-dry-run-button"))&&p(n,"submit_type","save_and_dry_run"),(0,o.f)(n,"submit"))});let p=(e,t,n)=>{let r=document.createElement("input");r.type="hidden",r.name=t,r.id=`${t}_hidden`,r.value=n,e.appendChild(r),r.required=!0},y=(0,i.D)(function(e){let t=document.querySelector(".js-custom-pattern-submit-button"),n=document.querySelector(".js-save-and-dry-run-button"),r=document.querySelector(".js-repo-selector-dialog-summary-button"),o=document.querySelector(".js-update-pattern-info"),s=document.querySelector(".js-test-pattern-matches");if(s){if(0===e.length){let e=document.querySelector(".js-dry-run-status");if(!e)return;S(e)||t?.setAttribute("disabled","true"),n?.setAttribute("disabled","true"),r?.classList.add("disabled"),s.textContent=""}else{window.codeEditor.save();let e=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!(e instanceof HTMLFormElement))return;let l=f();if(!l)return;for(let t of l.elements)if(t instanceof HTMLInputElement&&t.name&&("text"===t.type||"radio"===t.type&&t.checked)){let n=document.getElementById(`${t.name}_hidden`);null!==n&&n.remove(),p(e,t.name,t.value)}q(e,h(l,t,n,r,o),g(s))}}},300),g=e=>t=>{if(0===t.length)e.textContent=" - No matches";else if(1===t.length)e.textContent=" - 1 match";else{let n=[];for(let e of t)n.push(JSON.stringify(e));let r=new Set(n),o=[...r];e.textContent=` - ${o.length} matches`}},h=(e,t,n,r,o)=>s=>{if(v(e),s?.message){if(t?.setAttribute("disabled","true"),n?.setAttribute("disabled","true"),r?.classList.add("disabled"),o)o.hidden=!0;else if(s?.error_type==="START_DELIMITER"||s?.error_type==="END_DELIMITER"||s?.error_type==="MUST_MATCH"||s?.error_type==="MUST_NOT_MATCH"){let e=document.querySelector(".js-more-options.js-details-container");e&&(e.classList.add("open"),e.classList.add("Details--on"))}return b(e,s),!1}{let e=document.querySelector(".js-mode");if(!e)return!1;let s=document.querySelector(".js-dry-run-status");return!!s&&("cancelled"!==s.textContent?.toLowerCase()&&"skipped"!==s.textContent?.toLowerCase()&&("unpublished"===e.textContent?.toLowerCase()||"published"===e.textContent?.toLowerCase())||t?.removeAttribute("disabled"),r?.classList.remove("disabled"),n?.removeAttribute("disabled"),o&&(o.hidden=!1),!0)}};function b(e,t){if("MUST_MATCH"===t.error_type||"MUST_NOT_MATCH"===t.error_type){let n=0,r=e.getElementsByClassName("js-additional-secret-format");for(let e of r){if(n>(t.error_index||0))return;let r=e.getElementsByTagName("input"),o=[...r].filter(e=>e.checked),s=o&&o[0]?.value.toUpperCase(),l=s===t.error_type&&n===t.error_index,i=e.getElementsByTagName("input"),a=[...i].filter(e=>"text"===e.type);if(!a||0===a.length)continue;let d=a[0];if(""!==d.value){if(l){let e=d.id;d&&d.parentElement&&w(d.parentElement);let n=document.createElement("p"),r=`${e}_error_message`;n.classList.add("note","error","mt-5"),n.id=r,n.textContent=t.message,d?.setAttribute("aria-describedby",r),d?.insertAdjacentElement("afterend",n);return}s===t.error_type&&n++}}}else{let e=A[t.error_type],n=document.querySelector(`#${e}`);n&&n.parentElement&&w(n.parentElement);let r=document.createElement("p"),o=`${e}_error_message`;r.classList.add("note","error"),r.id=o,r.textContent=t.message,n?.setAttribute("aria-describedby",o),n?.insertAdjacentElement("afterend",r)}}function v(e){let t=document.querySelector(".js-error-banner");for(let n of(t.hidden=!0,e.getElementsByTagName("input")))if(n.parentElement?.classList.contains("errored")){_(n.parentElement);let e=n.getAttribute("aria-describedby");document.querySelector(`#${e}`)?.remove()}}function E(){let e=document.querySelector(".js-post-processing-expression-max-count");if(!e)return 5;let t=e.textContent;return t?parseInt(t):5}function w(e){e?.classList.add("form-group","errored","my-0")}function _(e){e?.classList.remove("form-group","errored","my-0")}function j(){if(!window.codeEditor)return;let e=window.codeEditor.posFromIndex(0),t=window.codeEditor.posFromIndex(window.codeEditor.getValue().length);for(let n of window.codeEditor.findMarks(e,t))n.clear()}function S(e){return"queued"===e.textContent?.toLowerCase()||"inprogress"===e.textContent?.toLowerCase()}let A={NONE:"",CONFIG_LOAD:"secret_format",COMPILE_DB:"secret_format",START_DELIMITER:"before_secret",END_DELIMITER:"after_secret",DISPLAY_NAME:"display_name",DB_SIZE:"secret_format",DB_SIZE_CALCULATION:"secret_format"};async function q(e,t,n){let r;try{let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json"}});t.ok&&(r=await t.json())}catch(e){}if(r&&t(r.error)){if(r.has_matches){let e=JSON.parse(r.matches);for(let t of(j(),n(e),e))C(window.codeEditor,t.start,t.end)}else n([]),j()}}let x=(0,i.D)(function(e){let t=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!(t instanceof HTMLFormElement))return;let n=document.querySelector(".js-test-pattern-matches");if(n){if(0===e.length)n.textContent="";else{if(!window.codeEditor)return;window.codeEditor.save(),q(t,()=>!0,g(n))}}},300);function C(e,t,n){let r=e.getValue();if(t=(0,c.yb)(r,t),n=(0,c.yb)(r,n),-1===t||-1===n)return;let o=e.posFromIndex(t),s=e.posFromIndex(n);e.markText(o,s,{className:"text-bold hx_keyword-hl rounded-2 d-inline-block"})}async function T(e){let t=e.currentTarget;e.preventDefault(),N(t,parseInt(t.remove_repo_id.value),!1)}async function L(e,t=!1){let n=document.getElementById("selected_repo_ids");if(!n)return;let r=JSON.parse(n.value),o=new Set(r);o.clear(),n.value=JSON.stringify(Array.from(o));let s=document.querySelector(".js-org-repo-selector-dialog-dry-run-button");if(!s)return;t?s.removeAttribute("disabled"):s.setAttribute("disabled","true");let i=new FormData(e);i.append("selected_repo_ids",n.value);let a=await fetch(e.action,{method:e.method,body:i,headers:{Accept:"text/fragment+html"}});if(a.status>=400){let e=document.querySelector("template.js-flash-template");e.after(new l.R(e,{className:"flash-error",message:"An unknown error occurred."}))}else if(!t){let e=document.querySelector(".js-dry-run-selected-repos"),t=(0,d.r)(document,await a.text());e.replaceWith(t)}}async function N(e,t,n){let r=document.getElementById("selected_repo_ids");if(!r)return;let o=document.querySelector(".js-org-repo-selector-dialog-dry-run-button");if(!o)return;let s=JSON.parse(r.value),i=new Set(s);n?i.size<k()&&i.add(t):i.delete(t),r.value=JSON.stringify(Array.from(i)),i.size>0?o.removeAttribute("disabled"):o.setAttribute("disabled","true");let a=new FormData(e);a.append("selected_repo_ids",r.value);let c=await fetch(e.action,{method:e.method,body:a,headers:{Accept:"text/fragment+html"}});if(c.status>=400){let e=document.querySelector("template.js-flash-template");e.after(new l.R(e,{className:"flash-error",message:"An unknown error occurred."}))}else{let e=document.querySelector(".js-dry-run-selected-repos"),t=(0,d.r)(document,await c.text());e.replaceWith(t)}}function k(){let e=document.querySelector(".js-dry-run-selected-repos-max-count");if(!e)return 10;let t=e.textContent;return t?parseInt(t):10}(0,o.on)("click",".js-remove-dry-run-repo-form",T),(0,o.on)("auto-complete-change",".js-dry-run-repo-autocomplete",function(e){let t=e.target;if(!t.value)return;if(t.value.includes("No repositories found.")){t.value="";return}let n=t.closest("form");N(n,parseInt(n.repo_id.value),!0),t.value=""}),(0,o.on)("click",".js-clear-selected-repositories-button",function(){let e=document.querySelector(".js-add-dry-run-repo-form");e&&L(e)}),(0,a.N7)('input[type="radio"][name="dry_run_repo_selection"]',e=>{let t=document.querySelector(".js-dry-run-repo-selection-component");t&&e&&!0===e.checked&&("all_repos"===e.value?t.hidden=!0:"selected_repos"===e.value&&(t.hidden=!1))}),(0,o.on)("click",'input[type="radio"][name="dry_run_repo_selection"]',function(e){let t=e.currentTarget,n=document.querySelector(".js-dry-run-repo-selection-component");if(n){if("all_repos"===t.value){n.hidden=!0;let e=n.querySelector("form");if(!e)return;L(e,!0)}else if("selected_repos"===t.value){n.hidden=!1;let e=document.querySelector(".js-org-repo-selector-dialog-dry-run-button");if(!e)return;let t=document.getElementById("selected_repo_ids");if(!t)return;n.children[1].childElementCount<=1?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}}}),(0,s.w4)("keydown",".js-dry-run-repo-autocomplete-input",function(e){"Enter"===e.key&&e.preventDefault()});var I=n(49657)},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4,zu:()=>o.zu});var r=n(35647),o=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>l,n4:()=>r,zu:()=>s});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,s="undefined"==typeof history?void 0:history,l="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>s,W6:()=>o,cF:()=>l});var r=n(73614);let o=void 0===r.n4,s=!o;function l(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},22490:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},l={createPolicy:(e,t)=>({name:e,...s,...t})},i=globalThis.trustedTypes??l,a=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||a||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),a=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_delegated-events_dist_in-3fcf56"],()=>t(16560));var n=e.O()}]);
//# sourceMappingURL=scanning-b44f87883a1d.js.map