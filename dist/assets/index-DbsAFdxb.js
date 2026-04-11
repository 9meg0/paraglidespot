(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const N="santa-elisabetta",j="Santa Elisabetta – Salto",D="piemonte",A="TO",B="https://www.vlse.it/",P="https://www.vlse.it/copia-di-iscrizioni-al-club",R="https://www.vlse.it/regolamento",U=[{label:"Italiano (Flavio)",phone:"347 242 4494"},{label:"English (Ezio)",phone:"346 806 7361"}],x={label:"Servizio Navetta",contactLabel:"Flavio",phone:"347 242 4494"},H="398–1400 m",q=["S"],O=45.4179093,W=7.6421572,z=[{name:"Decollo Basso – Monte Belice",lat:45.4179093,lon:7.6421572,altitude:1e3,windDirs:["S"],type:"Facile · parapendio e deltaplano",season:"Tutto l'anno",mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Monte%20Belice%2C%2010080%20Chiesanuova%20TO%2C%20Italia"},{name:"Decollo Alto – Pian del Lupo",lat:45.4431091,lon:7.6535628,altitude:1400,windDirs:["S"],type:"Facile · parapendio e deltaplano",season:"Primavera · estate · autunno",mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Via%20Pian%20del%20Lupo%2C%2010080%20Borgiallo%20TO%2C%20Italia"}],F={name:"Cuorgné – Via Pont Canavese",lat:45.4022024,lon:7.6444938,altitude:398,mapsUrl:"https://www.google.com/maps/dir/44.9442898,7.6317668/Via+Pont+Canavese,+10082+Cuorgn%C3%A8+TO/@45.1725248,7.3530288,10z",notes:""},V=[{label:"Decollo Basso – Monte Belice",url:"https://webcam.erre-elle.net/belice/Belice.jpg",embedUrl:"https://webcam.erre-elle.net/belice/Belice.jpg",type:"jpg",refreshSeconds:120}],J={meteoParapente:"https://meteo-parapente.com/#/45.4143,7.6421,13",windyUrl:"https://www.windy.com/45.406/7.640?45.402,7.645,14",windy:{lat:45.4179,lon:7.6422,zoom:11,overlay:"wind"},meteoblue:"https://www.meteoblue.com/it/tempo/settimana/canischio_italia",xcmeteor:"https://www.xcmeteor.com/meteo?lat=45.4179&lon=7.6422",skysight:"https://skysight.io/#45.4179/7.6422/11/BLTOPWIND",arpa:"https://www.arpa.piemonte.it/rischinaturali/tematismi/meteo/previsioni/bollettini"},G="",K={id:N,name:j,region:D,province:A,website:B,joinUrl:P,rulesUrl:R,contacts:U,shuttle:x,altitude:H,windDirs:q,lat:O,lon:W,takeoffs:z,landing:F,webcams:V,meteo:J,notes:G},Q=Object.assign({"./santa-elisabetta.json":K}),p=Object.values(Q).filter(Boolean).sort((e,t)=>e.name.localeCompare(t.name,"it"));function X(e){return e==="tutti"?p:p.filter(t=>t.region===e)}function Y(e){return p.find(t=>t.id===e)??null}const u={it:{htmlLang:"it",title:"ParaglideSpot",metaDescription:"Spot e meteo per piloti di parapendio — condizioni, mappe, webcam e previsioni volo",ogDescription:"Spot e meteo per il volo libero",tagline:"Il vento giusto, al momento giusto.",region:"Regione",piedmont:"Piemonte",liguria:"Liguria",all:"Tutti",selectSite:"Seleziona un sito dalla sidebar",website:"Sito",join:"Iscriviti",rules:"Regolamento",contacts:"Contatti",shuttle:"Navetta",takeoffs:"Decolli",landing:"Atterraggio",noTakeoffs:"Nessun decollo configurato",noLanding:"Nessun atterraggio configurato",navigateTakeoff:"Naviga al decollo",navigateLanding:"Naviga all'atterraggio",noWebcam:"Nessuna webcam disponibile",refreshEvery:"aggiorn. ogni {value}",open:"Apri",weatherInfo:"Info meteo",forecast:"Previsioni",flyability:"Volabilita",paragliderWeather:"Parapendio",liveWind:"Vento live",noContent:"Nessun contenuto disponibile"},en:{htmlLang:"en",title:"ParaglideSpot",metaDescription:"Spots and weather for paragliding pilots — conditions, maps, webcams and flight forecasts",ogDescription:"Spots and weather for free flight",tagline:"The right wind, at the right time.",region:"Region",piedmont:"Piedmont",liguria:"Liguria",all:"All",selectSite:"Select a site from the sidebar",website:"Website",join:"Join",rules:"Rules",contacts:"Contacts",shuttle:"Shuttle",takeoffs:"Takeoffs",landing:"Landing",noTakeoffs:"No takeoffs configured",noLanding:"No landing configured",navigateTakeoff:"Navigate to takeoff",navigateLanding:"Navigate to landing",noWebcam:"No webcam available",refreshEvery:"updates every {value}",open:"Open",weatherInfo:"Weather info",forecast:"Forecast",flyability:"Flyability",paragliderWeather:"Paragliding",liveWind:"Live wind",noContent:"No content available"}};function o(e,t,a={}){let i=(u[e]??u.it)[t]??u.it[t]??t;for(const[n,l]of Object.entries(a))i=i.replaceAll(`{${n}}`,String(l));return i}class Z{constructor(t,a="it"){this.el=t,this.currentRegion="piemonte",this.currentSiteId=null,this.lang=a}render(){this.el.innerHTML=`
      <div>
        <div class="sidebar-section-title">${o(this.lang,"region")}</div>
        <select class="region-select" id="region-select" aria-label="${o(this.lang,"region")}">
          <option value="piemonte" ${this.currentRegion==="piemonte"?"selected":""}>${o(this.lang,"piedmont")}</option>
          <option value="liguria" ${this.currentRegion==="liguria"?"selected":""}>${o(this.lang,"liguria")}</option>
          <option value="tutti" ${this.currentRegion==="tutti"?"selected":""}>${o(this.lang,"all")}</option>
        </select>
      </div>
      <div id="site-list-container"></div>
    `,this._renderSiteList(),this._bindRegionSelect()}_renderSiteList(){const t=this.el.querySelector("#site-list-container"),a=X(this.currentRegion);if(this.currentRegion==="tutti"){const s=a.filter(n=>n.region==="piemonte"),i=a.filter(n=>n.region==="liguria");t.innerHTML=`
        ${this._sectionHTML(o(this.lang,"piedmont"),s)}
        ${this._sectionHTML(o(this.lang,"liguria"),i)}
      `}else{const s=this.currentRegion==="piemonte"?o(this.lang,"piedmont"):o(this.lang,"liguria");t.innerHTML=this._sectionHTML(s,a)}this._bindSiteItems()}_sectionHTML(t,a){return`
      <div class="sidebar-region-section">
        <div class="sidebar-section-title" style="margin-top:12px">${t}</div>
        <div class="site-list">
          ${a.map(s=>this._siteItemHTML(s)).join("")}
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
    `}_bindRegionSelect(){var t;(t=this.el.querySelector("#region-select"))==null||t.addEventListener("change",a=>{this.currentRegion=a.target.value,this._renderSiteList()})}_bindSiteItems(){this.el.querySelectorAll(".site-item").forEach(t=>{const a=()=>{this.currentSiteId=t.dataset.siteId,this.el.querySelectorAll(".site-item").forEach(s=>s.classList.remove("active")),t.classList.add("active"),this.el.dispatchEvent(new CustomEvent("site-select",{bubbles:!0,detail:{siteId:t.dataset.siteId}}))};t.addEventListener("click",a),t.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&a()})})}selectSite(t){this.currentSiteId=t,this._renderSiteList()}setLanguage(t){this.lang=t,this.render()}}const ee="/dovesivola/";function te(e,t="it"){const a=Y(e);return a?`
    ${ae(a,t)}
    ${se(a,t)}
    ${a.notes?`<div class="notes-card">${a.notes}</div>`:""}
    ${le(o(t,"weatherInfo"),"",oe(a,t),t)}
  `:`
    <div class="empty-state">
      <p class="empty-state-text">${o(t,"selectSite")}</p>
    </div>`}function ae(e,t){var i,n;const a=e.windDirs.length?e.windDirs.join("/"):"—",s=[e.website?`<a href="${e.website}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--site">${o(t,"website")}</a>`:"",e.joinUrl?`<a href="${e.joinUrl}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--join">${o(t,"join")}</a>`:"",e.rulesUrl?`<a href="${e.rulesUrl}" target="_blank" rel="noopener" class="spot-action-link spot-action-link--rules">${o(t,"rules")}</a>`:""].filter(Boolean);return`
    <div class="spot-header">
      <div class="spot-header-top">
        <div class="spot-header-left">
          <h2 class="spot-title">${e.name}</h2>
          <p class="spot-subtitle">${e.altitude} s.l.m. · Vento: ${a} · ${e.province}</p>
        </div>
        ${s.length?`<div class="spot-header-actions">${s.join("")}</div>`:""}
      </div>
      <div class="spot-header-divider"></div>
      ${(i=e.contacts)!=null&&i.length?`
        <div class="spot-contacts">
          <span class="spot-contacts-label"><span class="spot-contacts-icon">☎</span>${o(t,"contacts")}</span>
          ${e.contacts.map(l=>`
            <a href="tel:${l.phone.replace(/\s/g,"")}" class="spot-contact-link">
              <span class="spot-contact-link-icon">☎</span>
              <span class="spot-contact-link-text">${l.label}</span>
              <strong>${l.phone}</strong>
            </a>
          `).join('<span class="spot-contacts-sep">·</span>')}
          ${(n=e.shuttle)!=null&&n.phone?`
            <span class="spot-contacts-sep">·</span>
            <span class="spot-shuttle-inline">
              <span class="spot-shuttle-inline-label">${o(t,"shuttle")}</span>
              <a href="tel:${e.shuttle.phone.replace(/\s/g,"")}" class="spot-shuttle-inline-phone">${e.shuttle.phone}</a>
            </span>
          `:""}
        </div>
      `:""}
    </div>
  `}function se(e,t){const a=e.takeoffs??[],s=e.landing??null;return`
    <div class="spot-tabs-wrapper">
      <div class="spot-tabs" role="tablist">
        <button class="spot-tab active" data-spot-tab="decolli">
          ${o(t,"takeoffs")} <span class="spot-tab-count">${a.length}</span>
        </button>
        <button class="spot-tab" data-spot-tab="atterraggio">
          ${o(t,"landing")}
        </button>
      </div>

      <div class="spot-tab-panel active" data-spot-panel="decolli">
        ${a.length?`<div class="spot-cards-grid">
               ${a.map(i=>ie(i,e,t)).join("")}
             </div>`:`<div class="empty-state" style="padding:32px"><p class="empty-state-text">${o(t,"noTakeoffs")}</p></div>`}
      </div>

      <div class="spot-tab-panel" data-spot-panel="atterraggio">
        ${s?`<div class="spot-cards-grid">${ne(s,e,t)}</div>`:`<div class="empty-state" style="padding:32px"><p class="empty-state-text">${o(t,"noLanding")}</p></div>`}
      </div>
    </div>
  `}function ie(e,t,a="it"){var i,n;const s=((i=t.webcams)==null?void 0:i.find(l=>l.label.toLowerCase().includes(e.name.toLowerCase().split("–")[0].trim().toLowerCase())||e.name.toLowerCase().includes(l.label.toLowerCase().split("–")[0].trim().toLowerCase())))??null;return`
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

      ${s?T(s,a):k(a)}

      ${e.mapsUrl?`
        <a href="${e.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${o(a,"navigateTakeoff")}
        </a>
      `:""}
    </div>
  `}function ne(e,t,a="it"){var i;const s=((i=t.webcams)==null?void 0:i.find(n=>n.label.toLowerCase().includes("atterr")||n.label.toLowerCase().includes("salto")))??null;return`
    <div class="spot-card">
      <div class="spot-card-header">
        <div class="spot-card-title-row">
          <div>
            <div class="spot-card-name">${e.name}</div>
            ${e.altitude?`<div class="spot-card-meta">${e.altitude} m s.l.m.</div>`:""}
          </div>
        </div>
      </div>

      ${s?T(s,a):k(a)}

      ${e.mapsUrl?`
        <a href="${e.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${o(a,"navigateLanding")}
        </a>
      `:""}
    </div>
  `}function k(e="it"){return`
    <div class="spot-no-webcam">
      <img src="${ee}no-webcam.svg" alt="Nessuna webcam" class="no-webcam-icon" />
      <span>${o(e,"noWebcam")}</span>
    </div>
  `}function T(e,t="it"){return e.type==="jpg"?`
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
    `:""}function oe(e,t="it"){var s,i,n,l;const a=[((s=e.meteo)==null?void 0:s.meteoblue)&&{name:"Meteoblue",tag:o(t,"forecast"),url:e.meteo.meteoblue},((i=e.meteo)==null?void 0:i.meteoParapente)&&{name:"Meteo Parapente",tag:o(t,"paragliderWeather"),url:e.meteo.meteoParapente},(((n=e.meteo)==null?void 0:n.windyUrl)||((l=e.meteo)==null?void 0:l.windy))&&{name:"Windy",tag:o(t,"liveWind"),url:e.meteo.windyUrl||`https://www.windy.com/?wind,${e.lat},${e.lon},11`}].filter(Boolean);return a.length?`
    <div class="meteo-links">
      ${a.map(c=>`
        <a href="${c.url}" target="_blank" rel="noopener" class="meteo-link-item">
          <div class="meteo-link-info">
            <span class="meteo-link-name">${c.name}</span>
            <span class="meteo-link-tag">${c.tag}</span>
          </div>
        </a>
      `).join("")}
    </div>
  `:`<div class="widget-empty">${o(t,"noContent")}</div>`}function le(e,t,a,s="it"){return`
    <section class="widget-card">
      <div class="widget-card-header">
        <div class="section-title">${e}</div>
        
      </div>
      ${a||`<div class="widget-empty">${o(s,"noContent")}</div>`}
    </section>
  `}function re(e,t="it"){return e<60?`${e}s`:e<3600?`${Math.round(e/60)} min`:`${Math.round(e/3600)}h`}function ce(e){e.querySelectorAll(".spot-tab").forEach(t=>{t.addEventListener("click",()=>{var s;const a=t.dataset.spotTab;e.querySelectorAll(".spot-tab").forEach(i=>i.classList.remove("active")),e.querySelectorAll(".spot-tab-panel").forEach(i=>i.classList.remove("active")),t.classList.add("active"),(s=e.querySelector(`[data-spot-panel="${a}"]`))==null||s.classList.add("active")})})}const b=new Set,de="/dovesivola/";function pe(){b.forEach(e=>clearInterval(e)),b.clear()}function ue(e){const t=e.querySelectorAll("[data-src]");if(!t.length)return;const a=new IntersectionObserver((s,i)=>{s.forEach(n=>{if(!n.isIntersecting)return;const l=n.target;l.tagName==="IMG"?me(l):l.tagName==="IFRAME"&&(l.src=l.dataset.src,delete l.dataset.src,l.addEventListener("load",()=>ve(l),{once:!0})),i.unobserve(l)})},{rootMargin:"150px"});t.forEach(s=>a.observe(s))}function me(e){var c,f;const t=e.dataset.src;if(!t)return;const a=(c=e.parentElement)==null?void 0:c.querySelector(".webcam-skeleton"),s=new Image;s.onload=()=>{e.src=t,a==null||a.remove()},s.onerror=()=>S(e),s.src=t,delete e.dataset.src;const i=e.closest("[data-refresh]")??((f=e.parentElement)==null?void 0:f.querySelector("[data-refresh]")),n=Number((i==null?void 0:i.dataset.refresh)??120),l=setInterval(()=>{const w=e.dataset.baseSrc??t;e.dataset.baseSrc=w;const $=w+`?t=${Date.now()}`,h=new Image;h.onload=()=>{var L;e.src=$;const y=(L=e.closest(".spot-webcam"))==null?void 0:L.querySelector(".webcam-refresh-indicator");y&&ge(y)},h.onerror=()=>S(e),h.src=$},n*1e3);b.add(l)}function ve(e){var t;try{const a=e.contentDocument;if(!a||a.URL==="about:blank")throw new Error("blocked")}catch{e.style.display="none";const a=(t=e.closest(".webcam-feed"))==null?void 0:t.querySelector(".webcam-iframe-fallback");a&&(a.style.display="flex")}}function S(e){var s;const t=e.closest(".webcam-feed, .spot-webcam-feed");if(!t)return;e.style.display="none",(s=t.querySelector(".webcam-skeleton"))==null||s.remove();const a=document.createElement("div");a.className="webcam-offline",a.innerHTML=`<img src="${de}no-webcam.svg" alt="Non disponibile" style="width:48px;height:48px;opacity:.5" /><span>Non disponibile</span>`,t.appendChild(a)}function ge(e){e.style.opacity="0.4",setTimeout(()=>{e.style.opacity="1"},400)}function C(){const e=window.location.hash.slice(1);return e&&p.find(t=>t.id===e)?e:null}var E;const r={activeSiteId:C()??((E=p[0])==null?void 0:E.id)??null,lang:localStorage.getItem("paraglidepot-lang")==="en"?"en":"it"},M=document.getElementById("sidebar"),m=document.getElementById("main-content"),I=document.getElementById("topbar-tagline"),d=document.getElementById("lang-switch"),v=new Z(M,r.lang);v.render();v.selectSite(r.activeSiteId);M.addEventListener("site-select",e=>{r.activeSiteId=e.detail.siteId,history.replaceState(null,"",`#${r.activeSiteId}`),g()});window.addEventListener("hashchange",()=>{const e=C();e&&e!==r.activeSiteId&&(r.activeSiteId=e,v.selectSite(e),g())});d==null||d.addEventListener("click",e=>{const t=e.target.closest("[data-lang]");if(!t)return;const a=t.dataset.lang;!a||a===r.lang||(r.lang=a,localStorage.setItem("paraglidepot-lang",r.lang),v.setLanguage(r.lang),_(),g())});function g(){pe();const e=te(r.activeSiteId,r.lang);m.innerHTML=`<div class="tab-panel active">${e}</div>`,ce(m),ue(m),he()}function _(){document.documentElement.lang=u[r.lang].htmlLang,document.title=o(r.lang,"title"),I&&(I.textContent=o(r.lang,"tagline"));const e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",o(r.lang,"metaDescription"));const t=document.querySelector('meta[property="og:description"]');t&&t.setAttribute("content",o(r.lang,"ogDescription")),d==null||d.querySelectorAll(".lang-btn").forEach(a=>{a.classList.toggle("active",a.dataset.lang===r.lang)})}function he(){const e=m.querySelectorAll("iframe[data-src]");if(!e.length)return;const t=new IntersectionObserver((a,s)=>{a.forEach(i=>{if(i.isIntersecting){const n=i.target;n.src=n.dataset.src,delete n.dataset.src,s.unobserve(n)}})},{rootMargin:"100px"});e.forEach(a=>t.observe(a))}r.activeSiteId&&!window.location.hash&&history.replaceState(null,"",`#${r.activeSiteId}`);_();g();
