let Name=document.querySelector("#name");
let email=document.querySelector("#email");
let subject=document.querySelector("#subject");
let message=document.querySelector("#message");
let nameError=document.querySelector('.nameerror');
let emailError=document.querySelector('.emailerror');
let subjectError=document.querySelector('.subjecterror');
let messageError=document.querySelector('.messageerror');
let x=0,y=0,z=0,b=0;
let contactInfo={
  'name':'',
  'email':'',
  'subject':'',
  'message':'',
}
function GetData(){
    contactInfo={
        'name':Name.value,
        'email':email.value,
        'subject':subject.value,
        'message':message.value,
    }
};
function clearData(){
    Name.value='';
    email.value='';
    subject.value='';
    message.value='';
};

function GetUserData(eventinfo){
    user[eventinfo.target.name]=eventinfo.target.value;
}

const isValidName = Name => {
    const correctName = /^[a-zA-Z ,]+$/
    return correctName.test(String(Name));
}
const isValidEmail = email => {
    const correctEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return correctEmail.test(String(email).toLowerCase());
}
const isValidSubject = Subject => {
    const correctName = /^[a-zA-Z ,]+$/
    return correctName.test(String(Subject));
}
const isValidMessage = Message => {
    const correctName = /^[a-zA-Z ,]+$/
    return correctName.test(String(Message));
}

const setError = (targetInput,targetParagraph,message) => {
    targetParagraph.innerText = message;
    targetInput.classList.add('errors');
};
const setSuccess = (targetInput,targetParagraph) => {
    targetParagraph.innerText = '';
    targetInput.classList.remove('errors');
};


function validName(){
  const namevalue=Name.value.trim();
  if(namevalue === '') {
      setError(Name,nameError,'name is required');
      x=1;
  }
  else if(namevalue.length<10){
        setError(Name,nameError,'it must contain 10 characters at least');
        x=1;
   }
   else if(namevalue.length>50){
        setError(Name,nameError,'it must contain 50 character at most');
        x=1;
   }
  else if(!isValidName(namevalue)){
      setError(Name,nameError,'Provide a valid name');
      x=1;
  }
  else{
      setSuccess(Name,nameError);
      x=0;
  }
}
function validEmail(){
    const emailvalue=email.value.trim();
    if(emailvalue === '') {
        setError(email,emailError,'Email is required');
        y=1;
    } else if(!isValidEmail(emailvalue)){
        setError(email,emailError,'Provide a valid email');
        y=1;
    }
    else{
        setSuccess(email,emailError,);
        y=0;
    }

}
function validSubject(){
    const subjectvalue=subject.value.trim();
    if(subjectvalue === '') {
        setError(subject,subjectError,'subject is required');
        z=1;
    }
    else if(subjectvalue.length<10){
        setError(subject,subjectError,'it must contain 10 characters at least');
        z=1;
    }
    else if(subjectvalue.length>150){
        setError(subject,subjectError,'it must contain 150 character at most');
        z=1;
    }
    else if(!isValidSubject(subjectvalue)){
        setError(subject,subjectError,'Provide a valid subject');
        z=1;
    }
    else{
        setSuccess(subject,subjectError);
        z=0;
    }
}
function validMessage(){
    const messagevalue=message.value.trim();
    if(messagevalue === '') {
        setError(message,messageError,'message is required');
        b=1;
    }
    else if(messagevalue.length<10){
        setError(message,messageError,'it must contain 10 characters at least');
        b=1;
    }
    else if(messagevalue.length>150){
        setError(message,messageError,'it must contain 150 character at most');
        b=1;
    }
    else if(!isValidMessage(messagevalue)){
        setError(message,messageError,'Provide a valid message');
        b=1;
    }
    else{
        setSuccess(message,messageError);
        b=0;
    }
}


function validateInputs(){
    validName();
    validEmail();
    validSubject();
    validMessage();
}
let submit=document.querySelector('section.contact .data form button');
submit.addEventListener('click',function(){
    GetData();
    validateInputs();
    if(x==0&&y==0&&z==0&&b==0){
        document.querySelector('.after-send').innerText='Thanks for contacting me';
        clearData();
        console.log(contactInfo);
    }
})
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
})

Name.addEventListener("keydown",function(){
    setSuccess(Name,nameError);
    setSuccess(email,emailError);
    setSuccess(subject,subjectError);
    setSuccess(message,messageError);
})
email.addEventListener("keydown",function(){
    setSuccess(email,emailError);
    setSuccess(Name,nameError);
    setSuccess(subject,subjectError);
    setSuccess(message,messageError);
})
subject.addEventListener("keydown",function(){
    setSuccess(subject,subjectError);
    setSuccess(email,emailError);
    setSuccess(Name,nameError);
    setSuccess(message,messageError);
})
message.addEventListener("keydown",function(){
    setSuccess(message,messageError);
    setSuccess(email,emailError);
    setSuccess(subject,subjectError);
    setSuccess(Name,nameError);
})