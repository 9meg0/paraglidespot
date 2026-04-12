(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const A="santa-elisabetta",H="Santa Elisabetta – Salto",N="piemonte",B="TO",R="https://www.vlse.it/",x="https://www.vlse.it/copia-di-iscrizioni-al-club",D="https://www.vlse.it/regolamento",q=[{label:"Italiano (Flavio)",phone:"347 242 4494"},{label:"English (Ezio)",phone:"346 806 7361"}],U={label:"Servizio Navetta",contactLabel:"Flavio",phone:"347 242 4494"},P="398–1400 m",O=["S"],W=45.4179093,z=7.6421572,F=[{name:"Decollo Basso – Monte Belice",lat:45.4179093,lon:7.6421572,altitude:1e3,windDirs:["S"],type:"Facile · parapendio e deltaplano",season:"Tutto l'anno",mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Monte%20Belice%2C%2010080%20Chiesanuova%20TO%2C%20Italia"},{name:"Decollo Alto – Pian del Lupo",lat:45.4431091,lon:7.6535628,altitude:1400,windDirs:["S"],type:"Facile · parapendio e deltaplano",season:"Primavera · estate · autunno",mapsUrl:"https://www.google.com/maps/dir/?api=1&destination=Via%20Pian%20del%20Lupo%2C%2010080%20Borgiallo%20TO%2C%20Italia"}],V={name:"Cuorgné – Via Pont Canavese",lat:45.4022024,lon:7.6444938,altitude:398,mapsUrl:"https://www.google.com/maps/dir/44.9442898,7.6317668/Via+Pont+Canavese,+10082+Cuorgn%C3%A8+TO/@45.1725248,7.3530288,10z",notes:""},J=[{label:"Decollo Basso – Monte Belice",url:"https://webcam.erre-elle.net/belice/Belice.jpg",embedUrl:"https://webcam.erre-elle.net/belice/Belice.jpg",type:"jpg",refreshSeconds:120}],G={meteoParapente:"https://meteo-parapente.com/#/45.4143,7.6421,13",windyUrl:"https://www.windy.com/45.406/7.640?45.402,7.645,14",windy:{lat:45.4179,lon:7.6422,zoom:11,overlay:"wind"},meteoblue:"https://www.meteoblue.com/it/tempo/settimana/santa-elisabetta_italia_8983987"},K=[{title:"Belice",message:"Aperto punto ristoro in decollo da maggio a settembre."}],Z="",Q={id:A,name:H,region:N,province:B,website:R,joinUrl:x,rulesUrl:D,contacts:q,shuttle:U,altitude:P,windDirs:O,lat:W,lon:z,takeoffs:F,landing:V,webcams:J,meteo:G,alerts:K,notes:Z},X=Object.assign({"./santa-elisabetta.json":Q}),v=Object.values(X).filter(Boolean).sort((e,t)=>e.name.localeCompare(t.name,"it"));function L(e){return e==="tutti"?v:v.filter(t=>t.region===e)}function Y(e){return v.find(t=>t.id===e)??null}const g={it:{htmlLang:"it",title:"ParaglideSpot",metaDescription:"Spot e meteo per piloti di parapendio — condizioni, mappe, webcam e previsioni volo",ogDescription:"Spot e meteo per il volo libero",tagline:"Il vento giusto, al momento giusto.",region:"Regione",site:"Spot",piedmont:"Piemonte",liguria:"Liguria",all:"Tutti",selectSite:"Seleziona un sito dalla sidebar",website:"Sito",join:"Iscriviti",rules:"Regolamento",contacts:"Contatti",shuttle:"Navetta",alerts:"Avvisi",takeoffs:"Decolli",landing:"Atterraggio",noTakeoffs:"Nessun decollo configurato",noLanding:"Nessun atterraggio configurato",navigateTakeoff:"Naviga al decollo",navigateLanding:"Naviga all'atterraggio",noWebcam:"Nessuna webcam disponibile",refreshEvery:"aggiorn. ogni {value}",open:"Apri",weatherInfo:"Info meteo",forecast:"Previsioni",flyability:"Volabilita",paragliderWeather:"Parapendio",liveWind:"Vento live",noContent:"Nessun contenuto disponibile"},en:{htmlLang:"en",title:"ParaglideSpot",metaDescription:"Spots and weather for paragliding pilots — conditions, maps, webcams and flight forecasts",ogDescription:"Spots and weather for free flight",tagline:"The right wind, at the right time.",region:"Region",site:"Spot",piedmont:"Piedmont",liguria:"Liguria",all:"All",selectSite:"Select a site from the sidebar",website:"Website",join:"Join",rules:"Rules",contacts:"Contacts",shuttle:"Shuttle",alerts:"Alerts",takeoffs:"Takeoffs",landing:"Landing",noTakeoffs:"No takeoffs configured",noLanding:"No landing configured",navigateTakeoff:"Navigate to takeoff",navigateLanding:"Navigate to landing",noWebcam:"No webcam available",refreshEvery:"updates every {value}",open:"Open",weatherInfo:"Weather info",forecast:"Forecast",flyability:"Flyability",paragliderWeather:"Paragliding",liveWind:"Live wind",noContent:"No content available"}};function o(e,t,i={}){let s=(g[e]??g.it)[t]??g.it[t]??t;for(const[n,l]of Object.entries(i))s=s.replaceAll(`{${n}}`,String(l));return s}class ee{constructor(t,i="it"){this.el=t,this.currentRegion="piemonte",this.currentSiteId=null,this.lang=i}render(){this.el.innerHTML=`
      <div>
        <div class="sidebar-section-title">${o(this.lang,"region")}</div>
        <select class="region-select" id="region-select" aria-label="${o(this.lang,"region")}">
          <option value="piemonte" ${this.currentRegion==="piemonte"?"selected":""}>${o(this.lang,"piedmont")}</option>
          <option value="liguria" ${this.currentRegion==="liguria"?"selected":""}>${o(this.lang,"liguria")}</option>
          <option value="tutti" ${this.currentRegion==="tutti"?"selected":""}>${o(this.lang,"all")}</option>
        </select>
      </div>
      <div id="site-list-container"></div>
    `,this._renderSiteList(),this._bindRegionSelect()}_renderSiteList(){const t=this.el.querySelector("#site-list-container"),i=L(this.currentRegion),a=i.some(s=>s.id===this.currentSiteId);if(this.currentRegion==="tutti"){const s=i.filter(l=>l.region==="piemonte"),n=i.filter(l=>l.region==="liguria");t.innerHTML=`
        ${this._mobileSelectHTML(s,n,a)}
        ${this._sectionHTML(o(this.lang,"piedmont"),s)}
        ${this._sectionHTML(o(this.lang,"liguria"),n)}
      `}else{const s=this.currentRegion==="piemonte"?o(this.lang,"piedmont"):o(this.lang,"liguria");t.innerHTML=`
        ${this._mobileSelectHTML(i,[],a)}
        ${this._sectionHTML(s,i)}
      `}this._bindSiteItems(),this._bindMobileSelect()}_mobileSelectHTML(t,i=[],a=!0){var c,d;const s=a?this.currentSiteId:((c=t[0])==null?void 0:c.id)??((d=i[0])==null?void 0:d.id)??"",n=p=>`
      <option value="${p.id}" ${p.id===s?"selected":""}>${p.name}</option>
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
          ${i.map(a=>this._siteItemHTML(a)).join("")}
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
    `}_bindRegionSelect(){var t;(t=this.el.querySelector("#region-select"))==null||t.addEventListener("change",i=>{this.currentRegion=i.target.value,this._renderSiteList();const a=L(this.currentRegion);a.length&&!a.some(s=>s.id===this.currentSiteId)&&this._activateSite(a[0].id)})}_bindMobileSelect(){var t;(t=this.el.querySelector("#site-select-mobile"))==null||t.addEventListener("change",i=>{this._activateSite(i.target.value)})}_bindSiteItems(){this.el.querySelectorAll(".site-item").forEach(t=>{const i=()=>this._activateSite(t.dataset.siteId);t.addEventListener("click",i),t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&i()})})}_activateSite(t){this.currentSiteId=t,this.el.querySelectorAll(".site-item").forEach(a=>{a.classList.toggle("active",a.dataset.siteId===t)});const i=this.el.querySelector("#site-select-mobile");i&&i.value!==t&&(i.value=t),this.el.dispatchEvent(new CustomEvent("site-select",{bubbles:!0,detail:{siteId:t}}))}selectSite(t){this.currentSiteId=t,this._renderSiteList()}setLanguage(t){this.lang=t,this.render()}}const te="/paraglidespot/";function ie(){return`
    <svg viewBox="0 0 24 24" aria-hidden="true" class="spot-contact-group-icon-svg">
      <path d="M5.5 4.5h3l1.2 4.1-1.9 1.9a15.6 15.6 0 0 0 5.7 5.7l1.9-1.9 4.1 1.2v3a1.5 1.5 0 0 1-1.6 1.5A16.4 16.4 0 0 1 4 6.1 1.5 1.5 0 0 1 5.5 4.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `}function ae(){return`
    <svg viewBox="0 0 24 24" aria-hidden="true" class="spot-contact-group-icon-svg">
      <path d="M7 17V8.5A2.5 2.5 0 0 1 9.5 6h5A2.5 2.5 0 0 1 17 8.5V17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 12h10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9.5 9.5h.01M14.5 9.5h.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M6 17h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M9 17v2M15 17v2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
  `}function se(e,t="it"){const i=Y(e);return i?`
    ${ne(i,t)}
    ${oe(i,t)}
    ${le(i,t)}
    ${i.notes?`<div class="notes-card">${i.notes}</div>`:""}
    ${pe(o(t,"weatherInfo"),"",de(i,t),t)}
  `:`
    <div class="empty-state">
      <p class="empty-state-text">${o(t,"selectSite")}</p>
    </div>`}function ne(e,t){var s,n,l,c;const i=e.windDirs.length?e.windDirs.join("/"):"—",a=[e.website?`<a href="${e.website}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--site">${o(t,"website")}</a>`:"",e.joinUrl?`<a href="${e.joinUrl}"  target="_blank" rel="noopener" class="spot-action-link spot-action-link--join">${o(t,"join")}</a>`:"",e.rulesUrl?`<a href="${e.rulesUrl}" target="_blank" rel="noopener" class="spot-action-link spot-action-link--rules">${o(t,"rules")}</a>`:""].filter(Boolean);return`
    <div class="spot-header">
      <div class="spot-header-top">
        <div class="spot-header-left">
          <h2 class="spot-title">${e.name}</h2>
          <p class="spot-subtitle">${e.altitude} s.l.m. · Vento: ${i} · ${e.province}</p>
        </div>
        ${a.length?`<div class="spot-header-actions">${a.join("")}</div>`:""}
      </div>
      <div class="spot-header-divider"></div>
      ${(s=e.contacts)!=null&&s.length||(n=e.shuttle)!=null&&n.phone?`
        <div class="spot-contacts">
          ${(l=e.contacts)!=null&&l.length?`
            <div class="spot-contact-group">
              <div class="spot-contact-group-icon spot-contact-group-icon--contacts">${ie()}</div>
              <div class="spot-contact-group-body">
                <div class="spot-contact-group-label">${o(t,"contacts")}</div>
                <div class="spot-contact-lines">
                  ${e.contacts.map(d=>`
                    <a href="tel:${d.phone.replace(/\s/g,"")}" class="spot-contact-link">
                      <span class="spot-contact-link-text">${d.label}</span>
                      <strong>${d.phone}</strong>
                    </a>
                  `).join("")}
                </div>
              </div>
            </div>
          `:""}
          ${(c=e.shuttle)!=null&&c.phone?`
            <div class="spot-contact-group spot-contact-group--shuttle">
              <div class="spot-contact-group-icon spot-contact-group-icon--shuttle">${ae()}</div>
              <div class="spot-contact-group-body">
                <div class="spot-contact-group-label">${o(t,"shuttle")}</div>
                <a href="tel:${e.shuttle.phone.replace(/\s/g,"")}" class="spot-contact-link spot-contact-link--shuttle">
                  <span class="spot-contact-link-text">${e.shuttle.contactLabel||e.shuttle.label||o(t,"shuttle")}</span>
                  <strong>${e.shuttle.phone}</strong>
                </a>
              </div>
            </div>
          `:""}
        </div>
      `:""}
    </div>
  `}function oe(e,t="it"){const i=e.alerts??[];return i.length?`
    <section class="alert-card">
      <div class="alert-card-header">
        <div class="section-title section-title--alert">
          <span class="alert-card-icon">!</span>
          <span>${o(t,"alerts")}</span>
        </div>
      </div>
      <div class="alert-list">
        ${i.map(a=>`
          <div class="alert-item">
            ${a.title?`<div class="alert-item-title">${a.title}</div>`:""}
            <p class="alert-item-text">${a.message??a}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `:""}function le(e,t){const i=e.takeoffs??[],a=e.landing??null;return`
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
               ${i.map(s=>re(s,e,t)).join("")}
             </div>`:`<div class="empty-state" style="padding:32px"><p class="empty-state-text">${o(t,"noTakeoffs")}</p></div>`}
      </div>

      <div class="spot-tab-panel" data-spot-panel="atterraggio">
        ${a?`<div class="spot-cards-grid">${ce(a,e,t)}</div>`:`<div class="empty-state" style="padding:32px"><p class="empty-state-text">${o(t,"noLanding")}</p></div>`}
      </div>
    </div>
  `}function re(e,t,i="it"){var s,n;const a=((s=t.webcams)==null?void 0:s.find(l=>l.label.toLowerCase().includes(e.name.toLowerCase().split("–")[0].trim().toLowerCase())||e.name.toLowerCase().includes(l.label.toLowerCase().split("–")[0].trim().toLowerCase())))??null;return`
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

      ${a?E(a,i):T(i)}

      ${e.mapsUrl?`
        <a href="${e.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${o(i,"navigateTakeoff")}
        </a>
      `:""}
    </div>
  `}function ce(e,t,i="it"){var s;const a=((s=t.webcams)==null?void 0:s.find(n=>n.label.toLowerCase().includes("atterr")||n.label.toLowerCase().includes("salto")))??null;return`
    <div class="spot-card">
      <div class="spot-card-header">
        <div class="spot-card-title-row">
          <div>
            <div class="spot-card-name">${e.name}</div>
            ${e.altitude?`<div class="spot-card-meta">${e.altitude} m s.l.m.</div>`:""}
          </div>
        </div>
      </div>

      ${a?E(a,i):T(i)}

      ${e.mapsUrl?`
        <a href="${e.mapsUrl}" target="_blank" rel="noopener" class="spot-maps-btn">
          ${o(i,"navigateLanding")}
        </a>
      `:""}
    </div>
  `}function T(e="it"){return`
    <div class="spot-no-webcam">
      <img src="${te}no-webcam.svg" alt="Nessuna webcam" class="no-webcam-icon" />
      <span>${o(e,"noWebcam")}</span>
    </div>
  `}function E(e,t="it"){return e.type==="jpg"?`
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
            ${o(t,"refreshEvery",{value:ue(e.refreshSeconds??120,t)})}
          </span>
          <a href="${e.url}" target="_blank" rel="noopener" class="webcam-open-link">${o(t,"open")}</a>
        </div>
      </div>
    `:e.type==="link"?`
      <div class="spot-webcam-link">
        <a href="${e.url}" target="_blank" rel="noopener">${e.label}</a>
      </div>
    `:""}function de(e,t="it"){var a,s,n,l;const i=[((a=e.meteo)==null?void 0:a.meteoblue)&&{name:"Meteoblue",tag:o(t,"forecast"),url:e.meteo.meteoblue},((s=e.meteo)==null?void 0:s.meteoParapente)&&{name:"Meteo Parapente",tag:o(t,"paragliderWeather"),url:e.meteo.meteoParapente},(((n=e.meteo)==null?void 0:n.windyUrl)||((l=e.meteo)==null?void 0:l.windy))&&{name:"Windy",tag:o(t,"liveWind"),url:e.meteo.windyUrl||`https://www.windy.com/?wind,${e.lat},${e.lon},11`}].filter(Boolean);return i.length?`
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
  `:`<div class="widget-empty">${o(t,"noContent")}</div>`}function pe(e,t,i,a="it"){return`
    <section class="widget-card">
      <div class="widget-card-header">
        <div class="section-title">${e}</div>
        
      </div>
      ${i||`<div class="widget-empty">${o(a,"noContent")}</div>`}
    </section>
  `}function ue(e,t="it"){return e<60?`${e}s`:e<3600?`${Math.round(e/60)} min`:`${Math.round(e/3600)}h`}function ve(e){e.querySelectorAll(".spot-tab").forEach(t=>{t.addEventListener("click",()=>{var a;const i=t.dataset.spotTab;e.querySelectorAll(".spot-tab").forEach(s=>s.classList.remove("active")),e.querySelectorAll(".spot-tab-panel").forEach(s=>s.classList.remove("active")),t.classList.add("active"),(a=e.querySelector(`[data-spot-panel="${i}"]`))==null||a.classList.add("active")})})}const w=new Set,ge="/paraglidespot/";function me(){w.forEach(e=>clearInterval(e)),w.clear()}function he(e){const t=e.querySelectorAll("[data-src]");if(!t.length)return;const i=new IntersectionObserver((a,s)=>{a.forEach(n=>{if(!n.isIntersecting)return;const l=n.target;l.tagName==="IMG"?be(l):l.tagName==="IFRAME"&&(l.src=l.dataset.src,delete l.dataset.src,l.addEventListener("load",()=>fe(l),{once:!0})),s.unobserve(l)})},{rootMargin:"150px"});t.forEach(a=>i.observe(a))}function be(e){var c,d;const t=e.dataset.src;if(!t)return;const i=(c=e.parentElement)==null?void 0:c.querySelector(".webcam-skeleton"),a=new Image;a.onload=()=>{e.src=t,i==null||i.remove()},a.onerror=()=>k(e),a.src=t,delete e.dataset.src;const s=e.closest("[data-refresh]")??((d=e.parentElement)==null?void 0:d.querySelector("[data-refresh]")),n=Number((s==null?void 0:s.dataset.refresh)??120),l=setInterval(()=>{const p=e.dataset.baseSrc??t;e.dataset.baseSrc=p;const $=p+`?t=${Date.now()}`,f=new Image;f.onload=()=>{var S;e.src=$;const y=(S=e.closest(".spot-webcam"))==null?void 0:S.querySelector(".webcam-refresh-indicator");y&&we(y)},f.onerror=()=>k(e),f.src=$},n*1e3);w.add(l)}function fe(e){var t;try{const i=e.contentDocument;if(!i||i.URL==="about:blank")throw new Error("blocked")}catch{e.style.display="none";const i=(t=e.closest(".webcam-feed"))==null?void 0:t.querySelector(".webcam-iframe-fallback");i&&(i.style.display="flex")}}function k(e){var a;const t=e.closest(".webcam-feed, .spot-webcam-feed");if(!t)return;e.style.display="none",(a=t.querySelector(".webcam-skeleton"))==null||a.remove();const i=document.createElement("div");i.className="webcam-offline",i.innerHTML=`<img src="${ge}no-webcam.svg" alt="Non disponibile" style="width:48px;height:48px;opacity:.5" /><span>Non disponibile</span>`,t.appendChild(i)}function we(e){e.style.opacity="0.4",setTimeout(()=>{e.style.opacity="1"},400)}function C(){const e=window.location.hash.slice(1);return e&&v.find(t=>t.id===e)?e:null}var M;const r={activeSiteId:C()??((M=v[0])==null?void 0:M.id)??null,lang:localStorage.getItem("paraglidespot-lang")==="en"?"en":"it"},_=document.getElementById("sidebar"),m=document.getElementById("main-content"),I=document.getElementById("topbar-tagline"),u=document.getElementById("lang-switch"),h=new ee(_,r.lang);h.render();h.selectSite(r.activeSiteId);_.addEventListener("site-select",e=>{r.activeSiteId=e.detail.siteId,history.replaceState(null,"",`#${r.activeSiteId}`),b()});window.addEventListener("hashchange",()=>{const e=C();e&&e!==r.activeSiteId&&(r.activeSiteId=e,h.selectSite(e),b())});u==null||u.addEventListener("click",e=>{const t=e.target.closest("[data-lang]");if(!t)return;const i=t.dataset.lang;!i||i===r.lang||(r.lang=i,localStorage.setItem("paraglidespot-lang",r.lang),h.setLanguage(r.lang),j(),b())});function b(){me();const e=se(r.activeSiteId,r.lang);m.innerHTML=`<div class="tab-panel active">${e}</div>`,ve(m),he(m),$e()}function j(){document.documentElement.lang=g[r.lang].htmlLang,document.title=o(r.lang,"title"),I&&(I.textContent=o(r.lang,"tagline"));const e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",o(r.lang,"metaDescription"));const t=document.querySelector('meta[property="og:description"]');t&&t.setAttribute("content",o(r.lang,"ogDescription")),u==null||u.querySelectorAll(".lang-btn").forEach(i=>{i.classList.toggle("active",i.dataset.lang===r.lang)})}function $e(){const e=m.querySelectorAll("iframe[data-src]");if(!e.length)return;const t=new IntersectionObserver((i,a)=>{i.forEach(s=>{if(s.isIntersecting){const n=s.target;n.src=n.dataset.src,delete n.dataset.src,a.unobserve(n)}})},{rootMargin:"100px"});e.forEach(i=>t.observe(i))}r.activeSiteId&&!window.location.hash&&history.replaceState(null,"",`#${r.activeSiteId}`);j();b();
