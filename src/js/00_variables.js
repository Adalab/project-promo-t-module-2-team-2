'use strict';
const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const radio4 = document.querySelector('.js_radio4');
const radio5 = document.querySelector('.js_radio5');
const radio6 = document.querySelector('.js_radio6');
const previewCard = document.querySelector('.js_preview-card');

const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewMail = document.querySelector('.js_mail');
const previewLinkedin = document.querySelector('.js_linkedin');
const previewGithub = document.querySelector('.js_github');
const fill = document.querySelector('.js_fill');
const nameInput = document.querySelector('.js-name');
const jobInput = document.querySelector('.js-job');
const mailInput = document.querySelector('.js-mail');
const phoneInput = document.querySelector('.js-phone');
const linkedinInput = document.querySelector('.js-linkedin');
const githubInput = document.querySelector('.js-github');
// const photoInput = document.querySelector('.js-photo');

const nameDefault = previewName.textContent;
const jobDefault = previewJob.textContent;

const btnReset = document.querySelector('.js_btnreset');

const createBtn = document.querySelector('.botom-share');
const linkUrl = document.querySelector('.url');
const msjError = document.querySelector('.error');
const success = document.querySelector('.js_share-success');
const twitter = document.querySelector('.twitter');



const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
const inputsValues = [
  nameInput,
  jobInput,
  mailInput,
  phoneInput,
  linkedinInput,
  githubInput,
];
const twitterLink = document.querySelector('.url-twitter');
let data = {
  palette: '1',
  name: previewName.textContent,
  job: previewJob.textContent,
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};