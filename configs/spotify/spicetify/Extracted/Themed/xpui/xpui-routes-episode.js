"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[472],{99922:(e,t,n)=>{n.d(t,{o:()=>l});var a=n(87577),i=n(49207);function l(){return{version:(0,a.W6)(i.GE)?2:1}}},74999:(e,t,n)=>{n.r(t),n.d(t,{EpisodeHeaderPlayButton:()=>vt,default:()=>Ot});var a=n(67294),i=n.n(a),l=n(65858),r=n(52883),o=n(69518),s=n.n(o),c=n(87577),d=n(20657),u=n(70369),m=n(1663),p=n(24209),v=n(84629),k=n(95661),g=n(22345),E=n(42273),y=n(59482),b=n(72907),N=n(67892),f=n(30947),S=n(32626),h=n(18261),T=n(57978),C=n(43620),P=n(84242),x=n(8341),U=n(5944),I=n(7073),A=n(92408),D=n(84788),M=n(60410),R=n(40771),w=n(31610);const O="UVWRbDQd2DM0ShkvMq54",F="Eoy1M3AAKeAUI9cNWsuq",L="rmgkmccGmTBvrw7gXMyS",B="JKIiOrx9EhZCkyBsu7YI";function _(e){return(null==e?void 0:e.replace(/T.*/,""))||""}function W(e){const t=s().from(e);return`/show/${s().hexToId((null==t?void 0:t.id)||"")}`}const K=i().memo((({chapter:e})=>{var t;const{name:n,uri:r,playedState:o,contentRating:s,duration:c,releaseDate:u,playability:m}=e,K=e.book,J=e.coverArt.length?e.coverArt:K.coverArt||[],z=null===(t=J[0])||void 0===t?void 0:t.url,Z=(0,C.Z)(z||null),V=(0,l.I0)(),[X,H]=(0,a.useState)(o.state===I.sY.Completed),{triggerPlay:$,togglePlay:G,isPlaying:q,isActive:Q}=(0,P.n)({uri:r},{featureIdentifier:"episode"}),Y=(0,x.Y)((e=>{var t;return null!==(t=(0,U.k)(e))&&void 0!==t?t:void 0})),j=(0,M.S)(e),{badges:ee}=(0,D.r)({contentRating:null==s?void 0:s.label}),te=(0,a.useCallback)((e=>{!m.playable&&ee.nineteen&&(e.stopPropagation(),V((0,v.RM)(r||"")))}),[r,m.playable,ee.nineteen,V]),ne=(0,a.useCallback)((e=>{j||(Q?G():$({seekTo:e}))}),[j,Q,G,$]);(0,a.useEffect)((()=>{const e=new URLSearchParams(location.search);if(e.has("t")){const t=e.get("t")||"0",n=1e3*parseInt(t,10);n<=c.milliseconds&&ne(n)}}),[c,ne]);const ae=!j&&!m.playable,ie=K.uri,le=K.name,re=d.ag.get("tracklist.a11y.play",n,le),oe=d.ag.get("tracklist.a11y.pause",n,le);return i().createElement("section",{"data-testid":"chapter",className:O},i().createElement(E.gF,{backgroundColor:Z},i().createElement(y.W,null,i().createElement(b.i,{text:n})),i().createElement("div",{className:L},i().createElement(h._,{menu:i().createElement(g.r,{uri:r,isPlayed:X,onMarkAsPlayed:H,contextUri:r})},i().createElement(E.Oe,{loading:"eager",name:n,images:J,placeholderType:"episode",shape:E.Kc.ROUNDED_CORNERS}))),i().createElement(E.sP,null,i().createElement(E.dy,{small:!0,uppercase:!0},d.ag.get("web-player.audiobooks.chapter")),i().createElement(h._,{menu:i().createElement(g.r,{uri:r,isPlayed:X,onMarkAsPlayed:H,contextUri:r})},i().createElement(E.xd,{dragUri:r,dragLabel:n},i().createElement("span",{"data-testid":"chapterTitle"},n))),i().createElement(h._,{menu:i().createElement(g.r,{uri:r,isPlayed:X,onMarkAsPlayed:H,contextUri:r})},i().createElement(N.Z,{to:W(ie)},i().createElement(E.dy,{large:!0,bold:!0},i().createElement("span",{"data-testid":"bookTitle"},le)))))),i().createElement(f.o,{backgroundColor:Z},i().createElement(f.F,null,ee.nineteen&&i().createElement(T.X,{className:F,size:16}),i().createElement(A.E,{size:A.$.LARGE,fullyPlayed:X,durationMs:c.milliseconds,releaseDate:_(null==u?void 0:u.isoString),resumePositionMs:o.playPositionMilliseconds,isPlaying:q,position:Q&&Y||void 0})),i().createElement(f.F,null,i().createElement("div",{onClick:te},i().createElement(vt,{episodeUri:r,showUri:ie,isLocked:j,onClick:()=>{ne(o.playPositionMilliseconds)},isPlaying:q,isPlayDisabled:ae,playButtonPlayLabel:re,playButtonPauseLabel:oe})),!j&&i().createElement(w.o,{uri:r,bookUri:ie}),i().createElement(S.yj,{menu:i().createElement(g.r,{uri:r,isPlayed:X,onMarkAsPlayed:H,contextUri:r})},i().createElement(k.z,{label:d.ag.get("more.label.context",n)})))),i().createElement("div",{className:"contentSpacing"},i().createElement(p.P,{buttonSize:"sm",href:ie,component:R.Z,className:B},"See all chapters")))}));var J=n(67154),z=n.n(J),Z=n(99922),V=n(74849);const X=(0,a.lazy)((()=>Promise.all([n.e(814),n.e(396)]).then(n.bind(n,88396))));function H(e){const t=(0,V.m)(),n=(0,Z.o)();return t?i().createElement(a.Suspense,{fallback:!0},i().createElement(X,z()({reason:"Episode page"},n,e))):null}const $="dpN5ViPOceUWNB5EQPHN",G="vBcxPq3E2okwgXOkVPEM",q="HCCBXwdFvq6omWW2hR0N",Q="bJOPO5Zo7dpjSVDwEpSw",Y="TXdDDpokVTyJzDEDWHHf",j="HaSbtEVJnxBsaJ5SRi0M",ee="YldGldlfaI9myEGXQf9g",te="qJHVIpJn1vLPWsAKfTEZ",ne="wSIzjkVlr0Zdy7di2vRm",ae="hYS_K1NATGyWt6tCSRqQ",ie="hVVaM4pF9arpQ8Nvn2a1",le="zf0Eac1LugsHUacz74Zf",re="TnNaqxbaI0hzhBQZ7wE0",oe="zSw1lG1TNe_xm6KTqtCv",se="MlEQDkXnjdKKJueJ9kkB",ce="jg0xlyD1yjh0DPNG6eOg",de="QiHXpFb4dLZNOFe5gpp3";var ue=n(28760),me=n(20238),pe=n(99450),ve=n(49207);const ke=({cardHeaderText:e,cardBodyText:t,buttonText:n,buttonTarget:a})=>(0,c.W6)(ve.Xd)?i().createElement("div",{className:ee},i().createElement("div",{className:te},i().createElement(ue.Dy,{variant:"balladBold",semanticColor:"textBase"},e),i().createElement(ue.Dy,{semanticColor:"textBase"},t)),i().createElement(pe.D,{buttonSize:"sm",colorSet:"invertedLight",href:s().from(a).toURLPath(!0),component:R.Z},n)):null,ge=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:n,hasDescription:a,htmlDescription:l,onExpanded:r,onTimeStampClick:o,playability:s,showHeader:c=!0})=>{const u=(a||t)&&c;return i().createElement(i().Fragment,null,u&&i().createElement(ue.Dy,{as:"h2",variant:"canon",semanticColor:"textBase",className:q},d.ag.get("episode.description-title")),t&&i().createElement(ke,{cardHeaderText:t.cardHeaderText,cardBodyText:t.cardBodyText,buttonText:t.buttonText,buttonTarget:t.buttonTarget}),a&&i().createElement(me.o,{className:G,onTimeStampClick:o,maxLines:4,onExpanded:r,content:(n||"").trim(),htmlContent:e&&l?l:void 0,LinkComponent:N.Z,enableTimestamps:s.playable}))};var Ee,ye=n(94184),be=n.n(ye),Ne=n(70131),fe=n(29325),Se=n(77991),he=n(14338),Te=n(13406),Ce=n(32648);!function(e){e.DESCRIPTION="description",e.TRANSCRIPT="transcript"}(Ee||(Ee={}));const Pe=i().memo((({transcriptSections:e,descriptionContent:t,transcriptContent:n})=>{const[l,r]=(0,a.useState)(Ee.DESCRIPTION),{scrollNodeRef:o}=i().useContext(Ce.VX),{ref:s,inView:c}=(0,Ne.YD)({threshold:[1],root:o.current,rootMargin:`-${Te.K1+1}px 100000px 0px 100000px`});return i().createElement(fe.l,{list:i().createElement(Se.F,{className:be()(se,{[ce]:!c}),ref:s},i().createElement(he.c,{label:d.ag.get("web-player.episode.description"),sentenceCase:!0,active:l===Ee.DESCRIPTION,onClick:()=>r(Ee.DESCRIPTION),className:be()(de,{[ne]:l===Ee.DESCRIPTION})}),i().createElement(he.c,{label:d.ag.get("web-player.episode.transcript"),sentenceCase:!0,disabled:null===e,active:l===Ee.TRANSCRIPT,onClick:()=>r(Ee.TRANSCRIPT),className:be()(de,{[ne]:l===Ee.TRANSCRIPT})}))},null===e||l===Ee.DESCRIPTION?t:n)}));var xe=n(43914),Ue=n(49104);const Ie=i().memo((({transcriptSections:e,onTimeStampClick:t,episodeUri:n})=>i().createElement(i().Fragment,null,i().createElement("div",{className:ie},i().createElement(ue.Dy,{variant:"viola",semanticColor:"textBase"},d.ag.get("web-player.episode.transcript.disclaimer"))),e.map(((e,a)=>{const l=`transcript-section-${a}`;return i().createElement("div",{className:ae,key:l},i().createElement("button",{className:le,onClick:()=>t(e.startMs,void 0,l)},i().createElement(xe.D,{id:l,targetURI:s().from(n),fadeOut:!0},i().createElement(ue.Dy,{variant:"finaleBold",semanticColor:"textSubdued",className:re},(0,Ue.mr)(e.startMs)))),e.content.map(((e,t)=>i().createElement(ue.Dy,{variant:"viola",semanticColor:"textBase",className:oe,key:`transcript-text-${t}`,dir:"auto"},e))))})))));var Ae=n(4348);const De="axX_dOb7KXxh2BhADfuQ",Me="DIz7crU76YDtXXLx34nF",Re="R2a58pDnuIWBldpbVPRr",we=i().memo((({title:e,episodes:t,className:n})=>i().createElement("div",{className:be()(De,n)},i().createElement(ue.Dy,{as:"h2",variant:"canon",className:Me},e),i().createElement("div",{className:Re},t.map((e=>i().createElement(Ae.B,z()({key:e.uri},e))))))));var Oe=n(98984);const Fe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRecommendedEpisodes"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"episode"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"recommendedEpisodes"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"episode"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"releaseDate"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"podcast"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}}]}}]}}]}}]}}]}}]},Le=({uri:e,limit:t})=>{var n;const{data:a}=(l={uri:e,limit:t},r={cacheTime:15*Oe.y},(0,Oe.a)(Fe,l,r));var l,r;const o=(null==a||null===(n=a.episode)||void 0===n?void 0:n.recommendedEpisodes.items)||[];return(null==o?void 0:o.length)>0?i().createElement(we,{title:d.ag.get("mwp.entity.might.like"),episodes:o.map(((e,t)=>{var n,a,i,l,r,o,s,c;return{index:t,id:e.episode.id,uri:e.episode.uri,name:e.episode.name,description:null!==(n=e.episode.description)&&void 0!==n?n:"",isExplicit:(null===(a=e.episode.contentRating)||void 0===a?void 0:a.label)===I.KS.Explicit,releaseDate:null===(i=e.episode.releaseDate)||void 0===i?void 0:i.isoString,is19PlusOnly:(null===(l=e.episode.contentRating)||void 0===l?void 0:l.label)===I.KS.NineteenPlus,durationMilliseconds:e.episode.duration.totalMilliseconds,images:null!==(r=null===(o=e.episode.coverArt)||void 0===o?void 0:o.sources)&&void 0!==r?r:[],showImages:null!==(s=null===(c=e.episode.podcast.coverArt)||void 0===c?void 0:c.sources)&&void 0!==s?s:[],resume_point:null,sharingInfo:null}}))}):null};var Be=n(74600),_e=n(28248),We=n(54280),Ke=n(38470),Je=n(86213),ze=n(27481),Ze=n(82760),Ve=n(42922),Xe=n(46585);const He="OYehkMWcGJRKPkByp46K",$e="uc1bXkrZqrCz0CMK4lBb",Ge="qZeibBbA3SVClzEueYND",qe=({episodeUri:e,index:t,duration:n,start:a,stop:l,name:r,uri:o,artists:s,album:c,playable:u})=>{var m;const{isActive:p,isPlaying:v,onClick:k}=(0,Xe.k)({episodeUri:e,start:a,stop:l});return i().createElement(Ve.ZP,{value:"row",index:t},i().createElement(S.xV,{trigger:"right-click",action:"open",menu:i().createElement(Je.$,{uri:o})},i().createElement(Ze.c,{uri:o,index:t,ariaRowIndex:t+1,dragMetadata:{name:r,createdBy:null!==(m=null==s?void 0:s[0].name)&&void 0!==m?m:""},onTriggerPlay:k,isActive:p,isPlayable:u},i().createElement(ze.vZ,{ariaColIndex:0},i().createElement(ze.Du,{uri:o,playAriaLabel:d.ag.get("tracklist.a11y.play",r,null==s?void 0:s[0].name),onClick:k,isPlaying:v,isActive:p},i().createElement(ze.km,null,i().createElement("img",{className:$e,src:c.image,alt:c.name}))),i().createElement(ze.vm,null,i().createElement(ze.Wh,{titleText:r},r),i().createElement(ze.K9,null,i().createElement(ze.T6,{artists:s})))),i().createElement(ze.UA,{ariaColIndex:1},i().createElement(ze.BM,{uri:c.uri,name:c.name},c.name)),i().createElement(ze.mU,{ariaColIndex:2},i().createElement(ze.qS,{uri:o}),i().createElement(ze.A$,{duration:n}),i().createElement(ze.Zv,{menu:i().createElement(Je.$,{uri:o,artists:s}),label:d.ag.get("more.label.track",r,null==s?void 0:s[0].name)})))))};const Qe=({uri:e,segmentCount:t})=>{const n=(0,We.G)(),l=(0,a.useCallback)((async(t,a)=>{const i=Math.ceil(t/2);try{return function(e,t,n){return e.reduce(((e,a,i)=>((i>0||t>0)&&e.push({type:"SPACER",id:`spacer-${e.length}`}),"MUSIC"===a.type?e.push(function(e,t,n){return{type:"MUSIC",index:t,uri:n.uri,episodeUri:e,start:n.start,stop:n.stop,duration:n.duration,name:n.track.name,artists:n.track.artists,album:n.track.album,playable:n.track.playable}}(n,i,a)):"TALK"===a.type&&e.push(function(e,t,n){return{type:"TALK",index:t,uri:e,title:n.title,subtitle:n.subtitle,start:n.start,stop:n.stop,duration:n.duration,showUri:n.show.uri,showName:n.show.name}}(n,i,a)),e)),[])}(await n.getSegments(e,i,a),i,e)}catch(e){return[]}}),[n,e]),r=(0,a.useCallback)((t=>{switch(t.type){case"SPACER":return i().createElement("div",{key:t.id,className:Ge});case"MUSIC":return i().createElement(qe,z()({key:`${e}-${t.index}`},t));case"TALK":return i().createElement(Be.t,z()({key:`${e}-${t.index}`},t));default:return(0,Ke.U)(t)}}),[e]),o=d.ag.get("music_and_talk.in_this_episode");return i().createElement("div",null,i().createElement(ue.Dy,{as:"h2",variant:"canon",semanticColor:"textBase",className:He},o),i().createElement(_e.Pv,{ariaLabel:o,hasHeaderRow:!0,rowPlaceholder:_e.hU,columns:[_e.QD.TITLE,_e.QD.ALBUM_OR_SHOW,_e.QD.DURATION],renderRow:r,fetchTracks:l,resolveUri:e=>"MUSIC"===e.type?e.uri:"",limit:50,nrTracks:2*t-1,testID:"music-and-talk-tracklist"}))};var Ye=n(43720),je=n.n(Ye),et=n(62100),tt=n.n(et);let nt;function at(e){switch(e){case 0:case"UNKNOWN":return nt.UNKNOWN;case 1:case"PLAINTEXT_CONTENT":return nt.PLAINTEXT_CONTENT;case 2:case"MUSIC_TRACK":return nt.MUSIC_TRACK;default:return nt.UNRECOGNIZED}}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.PLAINTEXT_CONTENT=1]="PLAINTEXT_CONTENT",e[e.MUSIC_TRACK=2]="MUSIC_TRACK",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED"}(nt||(nt={}));const it={encode(e,t=tt().Writer.create()){""!==e.version&&t.uint32(10).string(e.version),""!==e.episodeUri&&t.uint32(18).string(e.episodeUri),""!==e.publishedAt&&t.uint32(26).string(e.publishedAt);for(const n of e.sections)lt.encode(n,t.uint32(34).fork()).ldelim();return""!==e.language&&t.uint32(42).string(e.language),!0===e.curated&&t.uint32(48).bool(e.curated),t},decode(e,t){const n=e instanceof tt().Reader?e:new(tt().Reader)(e);let a=void 0===t?n.len:n.pos+t;const i={version:"",episodeUri:"",publishedAt:"",sections:[],language:"",curated:!1};for(;n.pos<a;){const e=n.uint32();switch(e>>>3){case 1:i.version=n.string();break;case 2:i.episodeUri=n.string();break;case 3:i.publishedAt=n.string();break;case 4:i.sections.push(lt.decode(n,n.uint32()));break;case 5:i.language=n.string();break;case 6:i.curated=n.bool();break;default:n.skipType(7&e)}}return i},fromJSON:e=>({version:st(e.version)?String(e.version):"",episodeUri:st(e.episodeUri)?String(e.episodeUri):"",publishedAt:st(e.publishedAt)?String(e.publishedAt):"",sections:Array.isArray(null==e?void 0:e.sections)?e.sections.map((e=>lt.fromJSON(e))):[],language:st(e.language)?String(e.language):"",curated:!!st(e.curated)&&Boolean(e.curated)}),toJSON(e){const t={};return void 0!==e.version&&(t.version=e.version),void 0!==e.episodeUri&&(t.episodeUri=e.episodeUri),void 0!==e.publishedAt&&(t.publishedAt=e.publishedAt),e.sections?t.sections=e.sections.map((e=>e?lt.toJSON(e):void 0)):t.sections=[],void 0!==e.language&&(t.language=e.language),void 0!==e.curated&&(t.curated=e.curated),t},fromPartial(e){var t,n,a,i,l,r;const o={version:"",episodeUri:"",publishedAt:"",sections:[],language:"",curated:!1};return o.version=null!==(t=e.version)&&void 0!==t?t:"",o.episodeUri=null!==(n=e.episodeUri)&&void 0!==n?n:"",o.publishedAt=null!==(a=e.publishedAt)&&void 0!==a?a:"",o.sections=(null===(i=e.sections)||void 0===i?void 0:i.map((e=>lt.fromPartial(e))))||[],o.language=null!==(l=e.language)&&void 0!==l?l:"",o.curated=null!==(r=e.curated)&&void 0!==r&&r,o}};const lt={encode:(e,t=tt().Writer.create())=>(0!==e.type&&t.uint32(8).int32(e.type),0!==e.startMs&&t.uint32(16).int32(e.startMs),void 0!==e.plaintextContent&&rt.encode(e.plaintextContent,t.uint32(26).fork()).ldelim(),void 0!==e.musicTrack&&ot.encode(e.musicTrack,t.uint32(50).fork()).ldelim(),""!==e.title&&t.uint32(34).string(e.title),void 0!==e.fallback&&rt.encode(e.fallback,t.uint32(42).fork()).ldelim(),t),decode(e,t){const n=e instanceof tt().Reader?e:new(tt().Reader)(e);let a=void 0===t?n.len:n.pos+t;const i={type:0,startMs:0,plaintextContent:void 0,musicTrack:void 0,title:"",fallback:void 0};for(;n.pos<a;){const e=n.uint32();switch(e>>>3){case 1:i.type=n.int32();break;case 2:i.startMs=n.int32();break;case 3:i.plaintextContent=rt.decode(n,n.uint32());break;case 6:i.musicTrack=ot.decode(n,n.uint32());break;case 4:i.title=n.string();break;case 5:i.fallback=rt.decode(n,n.uint32());break;default:n.skipType(7&e)}}return i},fromJSON:e=>({type:st(e.type)?at(e.type):0,startMs:st(e.startMs)?Number(e.startMs):0,plaintextContent:st(e.plaintextContent)?rt.fromJSON(e.plaintextContent):void 0,musicTrack:st(e.musicTrack)?ot.fromJSON(e.musicTrack):void 0,title:st(e.title)?String(e.title):"",fallback:st(e.fallback)?rt.fromJSON(e.fallback):void 0}),toJSON(e){const t={};return void 0!==e.type&&(t.type=function(e){switch(e){case nt.UNKNOWN:return"UNKNOWN";case nt.PLAINTEXT_CONTENT:return"PLAINTEXT_CONTENT";case nt.MUSIC_TRACK:return"MUSIC_TRACK";default:return"UNKNOWN"}}(e.type)),void 0!==e.startMs&&(t.startMs=Math.round(e.startMs)),void 0!==e.plaintextContent&&(t.plaintextContent=e.plaintextContent?rt.toJSON(e.plaintextContent):void 0),void 0!==e.musicTrack&&(t.musicTrack=e.musicTrack?ot.toJSON(e.musicTrack):void 0),void 0!==e.title&&(t.title=e.title),void 0!==e.fallback&&(t.fallback=e.fallback?rt.toJSON(e.fallback):void 0),t},fromPartial(e){var t,n,a;const i={type:0,startMs:0,plaintextContent:void 0,musicTrack:void 0,title:"",fallback:void 0};return i.type=null!==(t=e.type)&&void 0!==t?t:0,i.startMs=null!==(n=e.startMs)&&void 0!==n?n:0,i.plaintextContent=void 0!==e.plaintextContent&&null!==e.plaintextContent?rt.fromPartial(e.plaintextContent):void 0,i.musicTrack=void 0!==e.musicTrack&&null!==e.musicTrack?ot.fromPartial(e.musicTrack):void 0,i.title=null!==(a=e.title)&&void 0!==a?a:"",i.fallback=void 0!==e.fallback&&null!==e.fallback?rt.fromPartial(e.fallback):void 0,i}};const rt={encode(e,t=tt().Writer.create()){for(const n of e.plaintext)t.uint32(10).string(n);return t},decode(e,t){const n=e instanceof tt().Reader?e:new(tt().Reader)(e);let a=void 0===t?n.len:n.pos+t;const i={plaintext:[]};for(;n.pos<a;){const e=n.uint32();if(e>>>3==1)i.plaintext.push(n.string());else n.skipType(7&e)}return i},fromJSON:e=>({plaintext:Array.isArray(null==e?void 0:e.plaintext)?e.plaintext.map((e=>String(e))):[]}),toJSON(e){const t={};return e.plaintext?t.plaintext=e.plaintext.map((e=>e)):t.plaintext=[],t},fromPartial(e){var t;const n={plaintext:[]};return n.plaintext=(null===(t=e.plaintext)||void 0===t?void 0:t.map((e=>e)))||[],n}};const ot={encode:(e,t=tt().Writer.create())=>(""!==e.uri&&t.uint32(10).string(e.uri),t),decode(e,t){const n=e instanceof tt().Reader?e:new(tt().Reader)(e);let a=void 0===t?n.len:n.pos+t;const i={uri:""};for(;n.pos<a;){const e=n.uint32();if(e>>>3==1)i.uri=n.string();else n.skipType(7&e)}return i},fromJSON:e=>({uri:st(e.uri)?String(e.uri):""}),toJSON(e){const t={};return void 0!==e.uri&&(t.uri=e.uri),t},fromPartial(e){var t;const n={uri:""};return n.uri=null!==(t=e.uri)&&void 0!==t?t:"",n}};function st(e){return null!=e}function ct(e){var t,n,a;return e.type===nt.MUSIC_TRACK?{type:"track",startMs:e.startMs,content:(null===(n=e.fallback)||void 0===n?void 0:n.plaintext)||[],trackUri:null===(a=e.musicTrack)||void 0===a?void 0:a.uri}:{type:"text",startMs:e.startMs,content:(null===(t=e.plaintextContent)||void 0===t?void 0:t.plaintext)||[]}}tt().util.Long!==je()&&(tt().util.Long=je(),tt().configure());const dt=({areHTMLDescriptionsEnabled:e,contentInformation:t,description:n,hasDescription:l,hasMusicAndTalkSegements:r,htmlDescription:o,onExpanded:s,onTimeStampClick:c,playability:u,segmentCount:m,showUrl:v,transcript:k,transcriptEnabled:g,uri:E})=>{const[y,b]=(0,a.useState)(null),N=(0,a.useCallback)((async e=>{const t=await async function(e){try{const t=await fetch(e,{});if(t.ok&&t.body){const e=await t.arrayBuffer();return it.decode(new Uint8Array(e)).sections.map(ct)}return null}catch(e){return null}}(e);b(t)}),[]);(0,a.useEffect)((()=>{k&&k.length>0&&N(k[0].cdnUrl)}),[N,k]);const f=a=>i().createElement(i().Fragment,null,i().createElement(ge,{hasDescription:l,contentInformation:t,onTimeStampClick:c,onExpanded:s,description:n,areHTMLDescriptionsEnabled:e,htmlDescription:o,playability:u,showHeader:a}),r&&i().createElement(Qe,{segmentCount:m,uri:E}),v&&i().createElement(p.P,{buttonSize:"sm",className:Q,href:v,component:R.Z},d.ag.get("episode.see_all_episodes")),i().createElement(H,{uri:E}),i().createElement(Le,{uri:E,limit:6}));return i().createElement(i().Fragment,null,g&&k&&(null==k?void 0:k.length)>0?i().createElement(Pe,{transcriptSections:y,descriptionContent:f(!1),transcriptContent:i().createElement(Ie,{transcriptSections:y||[],onTimeStampClick:c,episodeUri:E})}):f(!0))};var ut=n(95806),mt=n(85592);const pt="activation-trigger-mme",vt=({episodeUri:e,showUri:t,isLocked:n,isPlaying:a,isPlayDisabled:r,playButtonPlayLabel:o,playButtonPauseLabel:c,onClick:d})=>{const u=(0,l.v9)((e=>{var t;return null===(t=e.platform)||void 0===t?void 0:t.isBrowser})),m=i().createElement(ut.l,{showUri:t,enabled:n,renderInline:!1},i().createElement(mt.fh,{size:"lg",onClick:d,isPlaying:a,disabled:r,locked:n,ariaPlayLabel:o,ariaPauseLabel:c}));return u?i().createElement(xe.D,{id:pt,targetURI:s().from(e),fadeOut:!0},m):m};var kt=n(56802),gt=n(38894),Et=n(80219),yt=n(62975),bt=n(53646),Nt=n(23716),ft=n(52404),St=n(86649),ht=n(37483),Tt=n(51871),Ct=n(25988),Pt=n(11414),xt=n(20246),Ut=n(52759);const It=({episode:e,onPlayEpisode:t,isPlaying:n,isActive:r,isFullyPlayed:o,setIsFullyPlayed:s,backgroundColor:c,isLocked:u})=>{var m,p,g,E;const{uri:y,playedState:b,contentRating:N,playability:S}=e,h=(0,l.I0)(),[C]=(0,Ut.z)(1e4,(e=>{var t;return(null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===y})),{badges:P}=(0,D.r)({contentRating:null==N?void 0:N.label}),x=(0,a.useCallback)((e=>{!S.playable&&P.nineteen&&(e.stopPropagation(),h((0,v.RM)(y||"")))}),[y,S.playable,P.nineteen,h]),U=!u&&!e.playability.playable,I=d.ag.get("tracklist.a11y.play",e.name,null===(m=e.podcast)||void 0===m?void 0:m.name),M=d.ag.get("tracklist.a11y.pause",e.name,null===(p=e.podcast)||void 0===p?void 0:p.name),R=null===(g=e.podcast)||void 0===g?void 0:g.uri;return i().createElement(f.o,{backgroundColor:c},i().createElement(f.F,null,P.nineteen&&i().createElement(T.X,{className:Y,size:16}),i().createElement(A.E,{size:A.$.LARGE,fullyPlayed:o,durationMs:e.duration.milliseconds,releaseDate:wt(null===(E=e.releaseDate)||void 0===E?void 0:E.isoString),resumePositionMs:b.playPositionMilliseconds,isPlaying:n,position:r&&C||void 0})),i().createElement(f.F,null,i().createElement("div",{onClick:x},i().createElement(vt,{episodeUri:e.uri,showUri:R,isLocked:u,onClick:()=>{t(b.playPositionMilliseconds,!1)},isPlaying:n,isPlayDisabled:U,playButtonPlayLabel:I,playButtonPauseLabel:M})),!u&&i().createElement(ht.p,{uri:e.uri,showUri:R}),i().createElement(Tt.w,{uri:e.uri,size:Pt.q.md}),i().createElement(xt.y,{menu:i().createElement(Ct.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:R,contextUri:e.uri,isPlayed:o,onMarkAsPlayed:s})},i().createElement(k.z,{label:d.ag.get("more.label.context",e.name)}))))};var At=n(34325);function Dt(e){const t=s().from(e);return`/show/${s().hexToId((null==t?void 0:t.id)||"")}`}const Mt=({episode:e,isFullyPlayed:t,setIsFullyPlayed:n,backgroundColor:a})=>{var l,r;const{uri:o,name:s,sharingInfo:c,playedState:u,episodeType:m,releaseDate:p}=e,v=function(e,t,n,a,l){const r=t===I.Wf.Episode;return(0,At.G3)(e,a,n,l)?i().createElement(At.Fg,{isMusicAndTalk:r}):r?d.ag.get("type.showEpisode"):d.ag.get("type.podcastEpisode")}(o,m||I.Wf.Unknown,u.playPositionMilliseconds,wt(null==p?void 0:p.isoString),u.state===I.sY.Completed),k=null===(l=e.podcast)||void 0===l?void 0:l.uri;return i().createElement(E.gF,{backgroundColor:a},i().createElement(y.W,null,i().createElement(b.i,{text:e.name,dragUri:o,dragLabel:e.name})),i().createElement("div",{className:j},i().createElement(h._,{menu:i().createElement(Ct.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:k,contextUri:e.uri,isPlayed:t,onMarkAsPlayed:n})},i().createElement(E.Oe,{loading:"eager",name:e.name,images:e.coverArt,placeholderType:"episode",shape:E.Kc.ROUNDED_CORNERS}))),i().createElement(E.sP,null,i().createElement(E.dy,{small:!0,uppercase:!0},v),i().createElement(h._,{menu:i().createElement(Ct.k,{uri:o,sharingInfo:c,showUri:k,contextUri:o,isPlayed:t,onMarkAsPlayed:n})},i().createElement(E.xd,{dragUri:o,dragLabel:s},i().createElement("span",{"data-testid":"episodeTitle"},s))),i().createElement(h._,{menu:i().createElement(Ct.k,{uri:e.uri,sharingInfo:e.sharingInfo,showUri:k,contextUri:e.uri,isPlayed:t,onMarkAsPlayed:n})},i().createElement(N.Z,{to:Dt(k)},i().createElement(E.dy,{large:!0,bold:!0},i().createElement("span",{"data-testid":"showTitle"},null===(r=e.podcast)||void 0===r?void 0:r.name))))))},Rt=({episode:e})=>{var t,n,r,o;const{uri:m,episodeType:p,description:v,htmlDescription:k,podcastSubscription:g,segmentsCount:E,podcast:y,contentInformation:b,playedState:N,coverArt:f}=e,[S,h]=(0,a.useState)(N.state===I.sY.Completed),T=(0,Nt.g)(),C=(0,kt.o)(),U=(0,c.W6)(ve.Cz),A=(0,c.W6)(ve.Be),D=void 0!==E&&E>0&&A,M=(0,c.W6)(ve.WE,{loadingValue:!1}),R=(0,gt.g)(),{triggerPlay:w,togglePlay:O,isPlaying:F,isActive:L}=(0,P.n)({uri:m},{featureIdentifier:"episode"}),B=f[0].url,_=(0,bt.Zj)(B||null),W=(0,x.Y)((e=>{var t;return null!==(t=null==e?void 0:e.isPaused)&&void 0!==t?t:void 0})),K=(0,l.v9)((e=>{var t;return null===(t=e.platform)||void 0===t?void 0:t.isBrowser})),J=g.isPaywalled&&!g.isUserSubscribed,z=(0,Et.s)(e,y),Z=(0,a.useCallback)(((e,t=!0,n)=>{if(J)return;let a="play";!F||0!==e&&t||(a="pause"),C({intent:a,targetUri:m,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),p===I.Wf.Episode&&K?yt.y.set((()=>({triggerId:n||pt,triggerAction:null}))):L&&!t?R?W?T.resume():T.pause():O():R?z({seekTo:e}):w({seekTo:e})}),[J,F,C,m,p,K,L,R,W,T,O,z,w]),V=(0,a.useCallback)((()=>{C({intent:"expand-description",type:"click"})}),[C]);(0,a.useEffect)((()=>{if(e){const t=new URLSearchParams(location.search);if(t.has("t")){const n=t.get("t")||"0",a=1e3*parseInt(n,10);a<=e.duration.milliseconds&&Z(a)}}}),[e]);const X=!!v||U&&!!k,H=null===(t=e.podcast)||void 0===t?void 0:t.uri,G=null===(n=s().from(H))||void 0===n?void 0:n.toURLPath(!0);return i().createElement("section",{"data-testid":"episode",className:$},i().createElement(u.$,null,d.ag.get("podcasts.episode.seo.title",{name:e.name,show:null!==(r=null===(o=e.podcast)||void 0===o?void 0:o.name)&&void 0!==r?r:""})),i().createElement(Mt,{episode:e,isFullyPlayed:S,setIsFullyPlayed:h,backgroundColor:_}),i().createElement(It,{episode:e,onPlayEpisode:Z,isPlaying:F,isActive:L,isFullyPlayed:S,setIsFullyPlayed:h,backgroundColor:_,isLocked:J}),i().createElement("div",{className:"contentSpacing"},i().createElement(dt,{transcriptEnabled:M,transcript:e.transcript,hasDescription:X,contentInformation:b,onTimeStampClick:Z,onExpanded:V,description:e.description,areHTMLDescriptionsEnabled:U,htmlDescription:e.htmlDescription,playability:e.playability,hasMusicAndTalkSegements:D,segmentCount:E,uri:e.uri,showUrl:G})))};function wt(e){return(null==e?void 0:e.replace(/T.*/,""))||""}const Ot=i().memo((()=>{const{episodeId:e}=(0,r.UO)(),t=s().episodeURI(e).toURI(),n=(0,c.W6)(ve.uB),l=(0,ft.I)(t,n);return l?(0,St.Ey)(l)?i().createElement(a.Suspense,{fallback:null},i().createElement(K,{chapter:l})):i().createElement(a.Suspense,{fallback:null},i().createElement(Rt,{episode:l})):i().createElement(m.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.podcast")})}))}}]);
//# sourceMappingURL=xpui-routes-episode.js.map