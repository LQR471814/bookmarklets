var u=function(){const h=document.getElementById("activeDocument");if(!h||!h?.contentWindow){alert("Could not find the #activeDocument iframe!");return}const j="Click on an image to open it in a new tab! (click on this text to quit)",s=document.createElement("span");s.style.position="fixed",s.style.left="0",s.style.top="0",s.style.border="black",s.style.background="white",s.style.fontSize="1rem",s.style.zIndex="99999",s.innerText=j,document.body.append(s);const y=h.contentWindow,p=(q)=>{const b=y.document.elementFromPoint(q.clientX,q.clientY);if(!b||!("currentSrc"in b)){s.innerText="No image selected!",setTimeout(()=>{s.innerText=j},1000);return}window.open(b.currentSrc,"_blank")};y.addEventListener("click",p),s.addEventListener("click",()=>{y.removeEventListener("click",p),s.remove()})};u();