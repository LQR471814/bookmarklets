var j=function(){const p=document.getElementById("activeDocument");if(!p||!p?.contentWindow){alert("Could not find the #activeDocument iframe!");return}const u="Click on an image to open it in a new tab! You can also click on a paragraph to copy the paragraph. You can also click on this text to deactivate these behaviors.",h=document.createElement("span");h.style.position="fixed",h.style.left="0",h.style.top="0",h.style.border="black",h.style.background="white",h.style.fontSize="1rem",h.style.zIndex="99999",h.style.maxWidth="40vw",h.innerText=u,document.body.append(h);const y=p.contentWindow,S=(b)=>{const s=y.document.elementFromPoint(b.clientX,b.clientY);if(!s)return;if("currentSrc"in s){window.open(s.currentSrc,"_blank");return}if("innerText"in s){navigator.clipboard.writeText(s.innerText),h.innerText="Copied!",setTimeout(()=>{h.innerText=u},1000);return}h.innerText="Not a text or image element!",setTimeout(()=>{h.innerText=u},1000)};y.addEventListener("click",S),h.addEventListener("click",()=>{y.removeEventListener("click",S),h.remove()})};j();