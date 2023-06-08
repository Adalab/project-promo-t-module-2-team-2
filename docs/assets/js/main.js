const radio1=document.querySelector(".js_radio1"),radio2=document.querySelector(".js_radio2"),radio3=document.querySelector(".js_radio3"),previewCard=document.querySelector(".js_preview-card"),previewName=document.querySelector(".js-preview-name"),previewJob=document.querySelector(".js-preview-job"),previewMail=document.querySelector(".js_mail"),previewLinkedin=document.querySelector(".js_linkedin"),previewGithub=document.querySelector(".js_github"),fill=document.querySelector(".js_fill"),nameInput=document.querySelector(".js-name"),jobInput=document.querySelector(".js-job"),mailInput=document.querySelector(".js-mail"),phoneInput=document.querySelector(".js-phone"),linkedinInput=document.querySelector(".js-linkedin"),githubInput=document.querySelector(".js-github"),nameDefault=previewName.textContent,jobDefault=previewJob.textContent,btnReset=document.querySelector(".js_btnreset"),createBtn=document.querySelector(".botom-share"),linkUrl=document.querySelector(".url"),msjError=document.querySelector(".error"),success=document.querySelector(".js_share-success"),twitter=document.querySelector(".twitter"),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),collapsedHeader=document.querySelectorAll(".js-fieldset__header"),collapsedContainer=document.querySelectorAll(".js-fieldset__container"),fieldset=document.querySelectorAll(".js-fieldset"),allArrow=document.querySelectorAll(".js_arrow");function handleClickForm(e){const t=e.currentTarget.parentNode;for(let e=0;e<fieldset.length;e++)fieldset[e]===t?(collapsedContainer[e].classList.remove("collapsed"),allArrow[e].classList.add("arrowUp")):(collapsedContainer[e].classList.add("collapsed"),allArrow[e].classList.remove("arrowUp"))}for(const e of collapsedHeader)e.addEventListener("click",handleClickForm);function remove(){previewCard.classList.contains("palette1")?(previewCard.classList.remove("palette1"),radio1.checked=!1):previewCard.classList.contains("palette2")?(previewCard.classList.remove("palette2"),radio2.checked=!1):previewCard.classList.contains("palette3")&&(previewCard.classList.remove("palette3"),radio3.checked=!1)}function clickRadio1(){remove(),previewCard.classList.add("palette1"),data.palette="1"}function clickRadio2(){remove(),previewCard.classList.add("palette2"),data.palette="2"}function clickRadio3(){remove(),previewCard.classList.add("palette3"),data.palette="3"}radio1.addEventListener("click",clickRadio1),radio2.addEventListener("click",clickRadio2),radio3.addEventListener("click",clickRadio3);let data={palette:1,name:previewName.textContent,job:previewJob.textContent,phone:"",email:"",linkedin:"",github:"",photo:""};function renderPreview(){previewName.innerHTML=""===nameInput.value?nameDefault:data.name,previewJob.innerHTML=""===jobInput.value?jobDefault:data.job,previewMail.href="mailto:"+data.email,previewLinkedin.href="http://linkedin.com/company/"+data.linkedin,previewGithub.href="http://github.com/"+data.github}function handlerInputs(e){const t=e.target.id,r=e.target.value;data[t]=r,renderPreview()}function handleclickReset(e){e.preventDefault();for(let e in data)data[e]="";mailInput.value="",phoneInput.value="",jobInput.value="",nameInput.value="",linkedinInput.value="",githubInput.value="",profileImage.style.backgroundImage="url(/assets/images/preview-card-img.jpg)",profilePreview.style.backgroundImage="",renderPreview(),remove(),previewCard.classList.add("palette1"),radio1.checked=!0}function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function handleClickCreate(e){e.preventDefault();let t=!0;for(let e in data)""===data[e]&&(msjError.innerHTML+=`Rellena el campo ${e} </br>`,t=!1);!0===t&&fetch("https://dev.adalab.es/api/card/",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>{e.success?(linkUrl.innerHTML=e.cardURL,linkUrl.href=e.cardURL,success.classList.remove("collapsed"),twitter.classList.remove("collapsed")):msjError.innerHTML="Las tres lunas de marte no están alineadas, inténtalo de nuevo"})}fill.addEventListener("keyup",handlerInputs),btnReset.addEventListener("click",handleclickReset),fileField.addEventListener("change",getImage),createBtn.addEventListener("click",handleClickCreate);