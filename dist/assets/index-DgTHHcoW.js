(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const N="santa-elisabetta",H="Santa Elisabetta – Salto",D="piemonte",R="TO",A="https://www.vlse.it/",q="https://www.vlse.it/copia-di-iscrizioni-al-club",B="https://www.vlse.it/regolamento",P=[{label:"Italiano (Flavio)",phone:"347 242 4494"},{label:"English (Ezio)",phone:"346 806 7361"}],U={label:"Servizio Navetta",contactLabel:"Flavio",phone:"347 242 4494"},x="398–1400 m",O=["S"],W=45.4179093,z=7.6421572,F=[{name:"Decollo Basso – Monte Belice",lat:45.4179093,lon:7.6421572,altitude:1e3,windDirs:["S"],type:"Facile · parapendio e deltaplano",season:"Tutto l'anno",mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Monte%20Belice%2C%2010080%20Chiesanuova%20TO%2C%20Italia"},{name:"Decollo Alto – Pian del Lupo",lat:45.4431091,lon:7.6535628,altitude:1400,windDirs:["S"],type:"Facile · parapendio e deltaplano",season:"Primavera · estate · autunno",mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Via%20Pian%20del%20Lupo%2C%2010080%20Borgiallo%20TO%2C%20Italia"}],V={name:"Cuorgné – Via Pont Canavese",lat:45.4022024,lon:7.6444938,altitude:398,mapsUrl:"https://www.google.com/maps/dir/44.9442898,7.6317668/Via+Pont+Canavese,+10082+Cuorgn%C3%A8+TO/@45.1725248,7.3530288,10z",notes:""},J=[{label:"Decollo Basso – Monte Belice",url:"https://webcam.erre-elle.net/belice/Belice.jpg",embedUrl:"https://webcam.erre-elle.net/belice/Belice.jpg",type:"jpg",refreshSeconds:120}],G={meteoParapente:"https://meteo-parapente.com/#/45.4143,7.6421,13",windyUrl:"https://www.windy.com/45.406/7.640?45.402,7.645,14",windy:{lat:45.4179,lon:7.6422,zoom:11,overlay:"wind"},meteoblue:"https://www.meteoblue.com/it/tempo/settimana/canischio_italia",xcmeteor:"https://www.xcmeteor.com/meteo?lat=45.4179&lon=7.6422",skysight:"https://skysight.io/#45.4179/7.6422/11/BLTOPWIND",arpa:"https://www.arpa.piemonte.it/rischinaturali/tematismi/meteo/previsioni/bollettini"},K="",Q={id:N,name:H,region:D,province:R,website:A,joinUrl:q,rulesUrl:B,contacts:P,shuttle:U,altitude:x,windDirs:O,lat:W,lon:z,takeoffs:F,landing:V,webcams:J,meteo:G,notes:K},X=Object.assign({"./santa-elisabetta.json":Q}),m=Object.values(X).filter(Boolean).sort((e,t)=>e.name.localeCompare(t.name,"it"));function L(e){return e==="tutti"?m:m.filter(t=>t.region===e)}function Y(e){return m.find(t=>t.id===e)??null}const v={it:{htmlLang:"it",title:"ParaglideSpot",metaDescription:"Spot e meteo per piloti di parapendio — condizioni, mappe, webcam e previsioni volo",ogDescription:"Spot e meteo per il volo libero",tagline:"Il vento giusto, al momento giusto.",region:"Regione",site:"Spot",piedmont:"Piemonte",liguria:"Liguria",all:"Tutti",selectSite:"Seleziona un sito dalla sidebar",website:"Sito",join:"Iscriviti",rules:"Regolamento",contacts:"Contatti",shuttle:"Navetta",takeoffs:"Decolli",landing:"Atterraggio",noTakeoffs:"Nessun decollo configurato",noLanding:"Nessun atterraggio configurato",navigateTakeoff:"Naviga al decollo",navigateLanding:"Naviga all'atterraggio",noWebcam:"Nessuna webcam disponibile",refreshEvery:"aggiorn. ogni {value}",open:"Apri",weatherInfo:"Info meteo",forecast:"Previsioni",flyability:"Volabilita",paragliderWeather:"Parapendio",liveWind:"Vento live",noContent:"Nessun contenuto disponibile"},en:{htmlLang:"en",title:"ParaglideSpot",metaDescription:"Spots and weather for paragliding pilots — conditions, maps, webcams and flight forecasts",ogDescription:"Spots and weather for free flight",tagline:"The right wind, at the right time.",region:"Region",site:"Spot",piedmont:"Piedmont",liguria:"Liguria",all:"All",selectSite:"Select a site from the sidebar",website:"Website",join:"Join",rules:"Rules",contacts:"Contacts",shuttle:"Shuttle",takeoffs:"Takeoffs",landing:"Landing",noTakeoffs:"No takeoffs configured",noLanding:"No landing configured",navigateTakeoff:"Navigate to takeoff",navigateLanding:"Navigate to landing",noWebcam:"No webcam available",refreshEvery:"updates every {value}",open:"Open",weatherInfo:"Weather info",forecast:"Forecast",flyability:"Flyability",paragliderWeather:"Paragliding",liveWind:"Live wind",noContent:"No content available"}};function o(e,t,i={}){let a=(v[e]??v.it)[t]??v.it[t]??t;for(const[n,l]of Object.entries(i))a=a.replaceAll(`{${n}}`,String(l));return a}class Z{constructor(t,i="it"){this.el=t,this.currentRegion="piemonte",this.currentSiteId=null,this.lang=i}render(){this.el.innerHTML=`
      <div>
        <div class="sidebar-section-title">${o(this.lang,"region")}</div>
        <select class="region-select" id="region-select" aria-label="${o(this.lang,"region")}">
          <option value="piemonte" ${this.currentRegion==="piemonte"?"selected":""}>${o(this.lang,"piedmont")}</option>
          <option value="liguria" ${this.currentRegion==="liguria"?"selected":""}>${o(this.lang,"liguria")}</option>
          <option value="tutti" ${this.currentRegion==="tutti"?"selected":""}>${o(this.lang,"all")}</option>
        </select>
      </div>
      <div id="site-list-container"></div>
    `,this._renderSiteList(),this._bindRegionSelect()}_renderSiteList(){const t=this.el.querySelector("#site-list-container"),i=L(this.currentRegion),s=i.some(a=>a.id===this.currentSiteId);if(this.currentRegion==="tutti"){const a=i.filter(l=>l.region==="piemonte"),n=i.filter(l=>l.region==="liguria");t.innerHTML=`
        ${this._mobileSelectHTML(a,n,s)}
        ${this._sectionHTML(o(this.lang,"piedmont"),a)}
        ${this._sectionHTML(o(this.lang,"liguria"),n)}
      `}else{const a=this.currentRegion==="piemonte"?o(this.lang,"piedmont"):o(this.lang,"liguria");t.innerHTML=`
        ${this._mobileSelectHTML(i,[],s)}
        ${this._sectionHTML(a,i)}
      `}this._bindSiteItems(),this._bindMobileSelect()}_mobileSelectHTML(t,i=[],s=!0){var c,u;const a=s?this.currentSiteId:((c=t[0])==null?void 0:c.id)??((u=i[0])==null?void 0:u.id)??"",n=d=>`
      <option value="${d.id}" ${d.id===a?"selected":""}>${d.name}</option>
    `,l=i.length?`
        <optgroup label="${o(this.lang,"piedmont")}">
          ${t.map(n).join("")}
        </optgroup>
        <optgroup label="${o(this.lang,"liguria")}">
          ${i.map(n).join("")}
        </optgroup>
      `:t.map(n).join("");return`
      <div class="mobile-site-picker">
        <div class="sidebar-section-title">${o(this.lang,"site")}</div>
        <select class="region-select mobile-site-select" id="site-select-mobile" aria-label="${o(this.lang,"site")}">
          ${l}
        </select>
      </div>
    `}_sectionHTML(t,i){return`
      <div class="sidebar-region-section">
        <div class="sidebar-section-title" style="margin-top:12px">${t}</div>
        <div class="site-list">
          ${i.map(s=>this._siteItemHTML(s)).join("")}
        </div>
      </div>
    `}_siteItemHTML(t){return`
      <div
        class="site-item ${t.id===this.currentSiteId?"active":""}"
        data-site-id="${t.id}"
        role="button"
        tabindex="0"
        aria-label="${t.name}"
      >
        <span class="site-status status-gray"></span>
        <div class="site-info">
          <div class="site-name">${t.name}</div>
          <div class="site-meta">${t.altitude} · ${t.windDirs.join("/")}</div>
        </div>
        <div class="site-wind" style="color:var(--text3)">—</div>
      </div>
    `}_bindRegionSelect(){var t;(t=this.el.querySelector("#region-select"))==null||t.addEventListener("change",i=>{this.currentRegion=i.target.value,this._renderSiteList();const s=L(this.currentRegion);s.length&&!s.some(a=>a.id===this.currentSiteId)&&this._activateSite(s[0].id)})}_bindMobileSelect(){var t;(t=this.el.querySelector("#site-select-mobile"))==null||t.addEventListener("change",i=>{this._activateSite(i.target.value)})}_bindSiteItems(){this.el.querySelectorAll(".site-item").forEach(t=>{const i=()=>this._activateSite(t.dataset.siteId);t.addEventListener("click",i),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&i()})})}_activateSite(t){this.currentSiteId=t,this.el.querySelectorAll(".site-item").forEach(s=>{s.classList.toggle("active",s.dataset.siteId===t)});const i=this.el.querySelector("#site-select-mobile");i&&i.value!==t&&(i.value=t),this.el.dispatchEvent(new CustomEvent("site-select",{bubbles:!0,detail:{siteId:t}}))}selectSite(t){this.currentSiteId=t,this._renderSiteList()}setLanguage(t){this.lang=t,this.render()}}const ee="/paraglidespot/";function te(e,t="it"){const i=Y(e);return i?`
    ${ie(i,t)}
    ${ae(i,t)}
    ${i.notes?`<div class="notes-card">${i.notes}</div>`:""}
    ${le(o(t,"weatherInfo"),"",oe(i,t),t)}
  `:`
    <div class="empty-state">
      <p class="empty-state-text">${o(t,"selectSite")}</p>
    </div>`}function ie(e,t){var a,n,l;const i=e.windDirs.length?e.windDirs.join("/"):"—",s=[e.website?`<a href="${e.website}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--site">${o(t,"website")}</a>`:"",e.joinUrl?`<a href="${e.joinUrl}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--join">${o(t,"join")}</a>`:"",e.rulesUrl?`<a href="${e.rulesUrl}" target="_blank" rel="noopener" class="spot-action-link spot-action-link--rules">${o(t,"rules")}</a>`:""].filter(Boolean);return`
    <div class="spot-header">
      <div class="spot-header-top">
        <div class="spot-header-left">
          <h2 class="spot-title">${e.name}</h2>
          <p class="spot-subtitle">${e.altitude} s.l.m. · Vento: ${i} · ${e.province}</p>
        </div>
        ${s.length?`<div class="spot-header-actions">${s.join("")}</div>`:""}
      </div>
      <div class="spot-header-divider"></div>
      ${(a=e.contacts)!=null&&a.length||(n=e.shuttle)!=null&&n.phone?`
        <div class="spot-contacts">
          <div class="spot-contacts-label">
            <span class="spot-contacts-icon">☎</span>
            <span>${o(t,"contacts")}</span>
          </div>
          <div class="spot-contacts-list">
            ${(e.contacts??[]).map(c=>`
              <a href="tel:${c.phone.replace(/\s/g,"")}" class="spot-contact-link">
                <span class="spot-contact-link-text">${c.label}</span>
                <strong>${c.phone}</strong>
              </a>
            `).join("")}
            ${(l=e.shuttle)!=null&&l.phone?`
              <a href="tel:${e.shuttle.phone.replace(/\s/g,"")}" class="spot-shuttle-inline">
                <span class="spot-shuttle-inline-label">${o(t,"shuttle")}</span>
                <span class="spot-shuttle-inline-phone">${e.shuttle.phone}</span>
              </a>
            `:""}
          </div>
        </div>
      `:""}
    </div>
  `}function ae(e,t){const i=e.takeoffs??[],s=e.landing??null;return`
    <div class="spot-tabs-wrapper">
      <div class="spot-tabs" role="tablist">
        <button class="spot-tab active" data-spot-tab="decolli">
          ${o(t,"takeoffs")} <span class="spot-tab-count">${i.length}</span>
        </button>
        <button class="spot-tab" data-spot-tab="atterraggio">
          ${o(t,"landing")}
        </button>
      </div>

      <div class="spot-tab-panel active" data-spot-panel="decolli">
        ${i.length?`<div class="spot-cards-grid">
               ${i.map(a=>se(a,e,t)).join("")}
             </div>`:`<div class="empty-state" style="padding:32px"><p class="empty-state-text">${o(t,"noTakeoffs")}</p></div>`}
      </div>

      <div class="spot-tab-panel" data-spot-panel="atterraggio">
        ${s?`<div class="spot-cards-grid">${ne(s,e,t)}</div>`:`<div class="empty-state" style="padding:32px"><p class="empty-state-text">${o(t,"noLanding")}</p></div>`}
      </div>
    </div>
  `}function se(e,t,i="it"){var a,n;const s=((a=t.webcams)==null?void 0:a.find(l=>l.label.toLowerCase().includes(e.name.toLowerCase().split("–")[0].trim().toLowerCase())||e.name.toLowerCase().includes(l.label.toLowerCase().split("–")[0].trim().toLowerCase())))??null;return`
    <div class="spot-card">
      <div class="spot-card-header">
        <div class="spot-card-title-row">
          <div>
            <div class="spot-card-name">${e.name}</div>
            <div class="spot-card-meta">${e.type??""}</div>
          </div>
        </div>
        <div class="spot-card-badges">
          ${e.altitude?`<span class="badge badge-blue">${e.altitude} m</span>`:""}
          ${(n=e.windDirs)!=null&&n.length?`<span class="badge badge-gray">↙ ${e.windDirs.join("/")}</span>`:""}
          ${e.season?`<span class="badge badge-gray">${e.season}</span>`:""}
        </div>
      </div>

      ${s?_(s,i):k(i)}

      ${e.mapsUrl?`
        <a href="${e.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${o(i,"navigateTakeoff")}
        </a>
      `:""}
    </div>
  `}function ne(e,t,i="it"){var a;const s=((a=t.webcams)==null?void 0:a.find(n=>n.label.toLowerCase().includes("atterr")||n.label.toLowerCase().includes("salto")))??null;return`
    <div class="spot-card">
      <div class="spot-card-header">
        <div class="spot-card-title-row">
          <div>
            <div class="spot-card-name">${e.name}</div>
            ${e.altitude?`<div class="spot-card-meta">${e.altitude} m s.l.m.</div>`:""}
          </div>
        </div>
      </div>

      ${s?_(s,i):k(i)}

      ${e.mapsUrl?`
        <a href="${e.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${o(i,"navigateLanding")}
        </a>
      `:""}
    </div>
  `}function k(e="it"){return`
    <div class="spot-no-webcam">
      <img src="${ee}no-webcam.svg" alt="Nessuna webcam" class="no-webcam-icon" />
      <span>${o(e,"noWebcam")}</span>
    </div>
  `}function _(e,t="it"){return e.type==="jpg"?`
      <div class="spot-webcam">
        <div class="spot-webcam-feed">
          <img class="webcam-img" data-src="${e.embedUrl??e.url}" src="" alt="${e.label}" />
          <div class="webcam-skeleton"></div>
          <div class="webcam-live"><span class="dot" style="width:5px;height:5px;background:#fff"></span>LIVE</div>
          <div class="webcam-overlay">
            <div class="webcam-overlay-title">${e.label}</div>
          </div>
        </div>
        <div class="spot-webcam-footer">
          <span class="webcam-refresh-indicator" data-refresh="${e.refreshSeconds??120}">
            <span class="dot" style="background:var(--green)"></span>
            ${o(t,"refreshEvery",{value:re(e.refreshSeconds??120,t)})}
          </span>
          <a href="${e.url}" target="_blank" rel="noopener" class="webcam-open-link">${o(t,"open")}</a>
        </div>
      </div>
    `:e.type==="link"?`
      <div class="spot-webcam-link">
        <a href="${e.url}" target="_blank" rel="noopener">${e.label}</a>
      </div>
    `:""}function oe(e,t="it"){var s,a,n,l;const i=[((s=e.meteo)==null?void 0:s.meteoblue)&&{name:"Meteoblue",tag:o(t,"forecast"),url:e.meteo.meteoblue},((a=e.meteo)==null?void 0:a.meteoParapente)&&{name:"Meteo Parapente",tag:o(t,"paragliderWeather"),url:e.meteo.meteoParapente},(((n=e.meteo)==null?void 0:n.windyUrl)||((l=e.meteo)==null?void 0:l.windy))&&{name:"Windy",tag:o(t,"liveWind"),url:e.meteo.windyUrl||`https://www.windy.com/?wind,${e.lat},${e.lon},11`}].filter(Boolean);return i.length?`
    <div class="meteo-links">
      ${i.map(c=>`
        <a href="${c.url}" target="_blank" rel="noopener" class="meteo-link-item">
          <div class="meteo-link-info">
            <span class="meteo-link-name">${c.name}</span>
            <span class="meteo-link-tag">${c.tag}</span>
          </div>
        </a>
      `).join("")}
    </div>
  `:`<div class="widget-empty">${o(t,"noContent")}</div>`}function le(e,t,i,s="it"){return`
    <section class="widget-card">
      <div class="widget-card-header">
        <div class="section-title">${e}</div>
        
      </div>
      ${i||`<div class="widget-empty">${o(s,"noContent")}</div>`}
    </section>
  `}function re(e,t="it"){return e<60?`${e}s`:e<3600?`${Math.round(e/60)} min`:`${Math.round(e/3600)}h`}function ce(e){e.querySelectorAll(".spot-tab").forEach(t=>{t.addEventListener("click",()=>{var s;const i=t.dataset.spotTab;e.querySelectorAll(".spot-tab").forEach(a=>a.classList.remove("active")),e.querySelectorAll(".spot-tab-panel").forEach(a=>a.classList.remove("active")),t.classList.add("active"),(s=e.querySelector(`[data-spot-panel="${i}"]`))==null||s.classList.add("active")})})}const w=new Set,de="/paraglidespot/";function pe(){w.forEach(e=>clearInterval(e)),w.clear()}function ue(e){const t=e.querySelectorAll("[data-src]");if(!t.length)return;const i=new IntersectionObserver((s,a)=>{s.forEach(n=>{if(!n.isIntersecting)return;const l=n.target;l.tagName==="IMG"?me(l):l.tagName==="IFRAME"&&(l.src=l.dataset.src,delete l.dataset.src,l.addEventListener("load",()=>ve(l),{once:!0})),a.unobserve(l)})},{rootMargin:"150px"});t.forEach(s=>i.observe(s))}function me(e){var c,u;const t=e.dataset.src;if(!t)return;const i=(c=e.parentElement)==null?void 0:c.querySelector(".webcam-skeleton"),s=new Image;s.onload=()=>{e.src=t,i==null||i.remove()},s.onerror=()=>I(e),s.src=t,delete e.dataset.src;const a=e.closest("[data-refresh]")??((u=e.parentElement)==null?void 0:u.querySelector("[data-refresh]")),n=Number((a==null?void 0:a.dataset.refresh)??120),l=setInterval(()=>{const d=e.dataset.baseSrc??t;e.dataset.baseSrc=d;const $=d+`?t=${Date.now()}`,f=new Image;f.onload=()=>{var S;e.src=$;const y=(S=e.closest(".spot-webcam"))==null?void 0:S.querySelector(".webcam-refresh-indicator");y&&ge(y)},f.onerror=()=>I(e),f.src=$},n*1e3);w.add(l)}function ve(e){var t;try{const i=e.contentDocument;if(!i||i.URL==="about:blank")throw new Error("blocked")}catch{e.style.display="none";const i=(t=e.closest(".webcam-feed"))==null?void 0:t.querySelector(".webcam-iframe-fallback");i&&(i.style.display="flex")}}function I(e){var s;const t=e.closest(".webcam-feed, .spot-webcam-feed");if(!t)return;e.style.display="none",(s=t.querySelector(".webcam-skeleton"))==null||s.remove();const i=document.createElement("div");i.className="webcam-offline",i.innerHTML=`<img src="${de}no-webcam.svg" alt="Non disponibile" style="width:48px;height:48px;opacity:.5" /><span>Non disponibile</span>`,t.appendChild(i)}function ge(e){e.style.opacity="0.4",setTimeout(()=>{e.style.opacity="1"},400)}function M(){const e=window.location.hash.slice(1);return e&&m.find(t=>t.id===e)?e:null}var T;const r={activeSiteId:M()??((T=m[0])==null?void 0:T.id)??null,lang:localStorage.getItem("paraglidespot-lang")==="en"?"en":"it"},C=document.getElementById("sidebar"),g=document.getElementById("main-content"),E=document.getElementById("topbar-tagline"),p=document.getElementById("lang-switch"),h=new Z(C,r.lang);h.render();h.selectSite(r.activeSiteId);C.addEventListener("site-select",e=>{r.activeSiteId=e.detail.siteId,history.replaceState(null,"",`#${r.activeSiteId}`),b()});window.addEventListener("hashchange",()=>{const e=M();e&&e!==r.activeSiteId&&(r.activeSiteId=e,h.selectSite(e),b())});p==null||p.addEventListener("click",e=>{const t=e.target.closest("[data-lang]");if(!t)return;const i=t.dataset.lang;!i||i===r.lang||(r.lang=i,localStorage.setItem("paraglidespot-lang",r.lang),h.setLanguage(r.lang),j(),b())});function b(){pe();const e=te(r.activeSiteId,r.lang);g.innerHTML=`<div class="tab-panel active">${e}</div>`,ce(g),ue(g),he()}function j(){document.documentElement.lang=v[r.lang].htmlLang,document.title=o(r.lang,"title"),E&&(E.textContent=o(r.lang,"tagline"));const e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",o(r.lang,"metaDescription"));const t=document.querySelector('meta[property="og:description"]');t&&t.setAttribute("content",o(r.lang,"ogDescription")),p==null||p.querySelectorAll(".lang-btn").forEach(i=>{i.classList.toggle("active",i.dataset.lang===r.lang)})}function he(){const e=g.querySelectorAll("iframe[data-src]");if(!e.length)return;const t=new IntersectionObserver((i,s)=>{i.forEach(a=>{if(a.isIntersecting){const n=a.target;n.src=n.dataset.src,delete n.dataset.src,s.unobserve(n)}})},{rootMargin:"100px"});e.forEach(i=>t.observe(i))}r.activeSiteId&&!window.location.hash&&history.replaceState(null,"",`#${r.activeSiteId}`);j();b();
