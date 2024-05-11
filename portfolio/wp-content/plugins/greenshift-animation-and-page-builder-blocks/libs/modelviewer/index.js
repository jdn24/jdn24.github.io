"use strict";var loadedtdel=!1;const onGSModelInteraction=()=>{if(!0===loadedtdel)return;if(loadedtdel=!0,null!==document.getElementById("gsmodelviewerscript"))return;const modelViewerScript=document.createElement("script");modelViewerScript.type="module",modelViewerScript.id="gsmodelviewerscript",modelViewerScript.src=gs_model_params.pluginURL+"libs/modelviewer/model-viewer.min.js",document.body.appendChild(modelViewerScript)},onGSModelProgress=event=>{const progressBar=event.target.querySelector(".progress-bar"),updatingBar=event.target.querySelector(".update-bar");updatingBar.style.width=`${100*event.detail.totalProgress}%`,1==event.detail.totalProgress&&progressBar.classList.add("hide")};document.body.addEventListener("mouseover",onGSModelInteraction,{once:!0}),document.body.addEventListener("touchmove",onGSModelInteraction,{once:!0}),window.addEventListener("scroll",onGSModelInteraction,{once:!0}),document.body.addEventListener("keydown",onGSModelInteraction,{once:!0});var requestIdleCallback=window.requestIdleCallback||function(cb){const start=Date.now();return setTimeout((function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})}),1)},gsmodel=document.getElementsByClassName("gspb_modelBox");for(let i=0;i<gsmodel.length;i++){let modelNode=gsmodel[i];(()=>{const modelViewer=modelNode.querySelector(".gsmodelviewer");modelViewer.addEventListener("progress",onGSModelProgress);const time=performance.now();let td_rx=modelViewer.getAttribute("data-rx"),td_ry=modelViewer.getAttribute("data-ry"),td_rz=modelViewer.getAttribute("data-rz"),td_scale=modelViewer.getAttribute("data-scale"),td_camera=modelViewer.getAttribute("data-camera"),td_variants=modelViewer.getAttribute("data-variants"),td_mousemove=modelViewer.getAttribute("data-mousemove"),td_loaditer;modelViewer.getAttribute("data-loaditer")||requestIdleCallback((function(){onGSModelInteraction()}),{timeout:2500});let mouseX=0,mouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2;if(document.addEventListener("mousemove",(function(event){mouseX=event.clientX-windowHalfX,mouseY=event.clientY-windowHalfY})),td_scale&&(modelViewer.scale=`  `),td_variants){const select=modelNode.querySelector(".gsvariantselect");modelViewer.addEventListener("load",()=>{const names=modelViewer.availableVariants;if(void 0!==names&&names.length>0){select.classList.remove("rhhidden");for(const name of names){const option=document.createElement("option");option.value=name,option.textContent=name,select.appendChild(option)}}}),select.addEventListener("input",event=>{modelViewer.variantName=event.target.value})}if(td_rx||td_ry||td_rz||td_mousemove){const animate=now=>{if(requestAnimationFrame(animate),void 0!==modelViewer.orientation){let spaceorient=modelViewer.orientation.split(" ");void 0===td_rx&&(td_rx=0),void 0===td_ry&&(td_ry=0),void 0===td_rz&&(td_rz=0);let rx=parseFloat(spaceorient[0])+td_rx/50,ry=parseFloat(spaceorient[1])+td_ry/50,rz=parseFloat(spaceorient[2])+td_rz/50;td_mousemove&&(rz+=.05*(mouseX*td_mousemove/1e3-rz),ry+=.05*(mouseY*td_mousemove/1e3-ry)),modelViewer.orientation=`deg deg deg`,td_camera||modelViewer.updateFraming()}};animate()}})()}