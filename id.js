
let storedUserId = localStorage.getItem("userID");
let v0= storedUserId[0]
let v1= storedUserId[1]
let v2= storedUserId[2]
let v3= storedUserId[3]
let spi=""
let spcial=""
let level=""
let lev=0
let gaha=''

if (v2=="A"){spi="AI" 
spcial=" الذكاء الاصطناعى"}
else if (v2=="W")
{spi="Web"
spcial="تطوير المواقع"}
else if (v2=="C")
{spi="cy"
spcial="الامن السيبرانى"
}
else{spi=""
    spcial="غير معرف"  
}

if (v3=="X"){lev=1
    level="المستوى الاول"                                                                                                                                           
}
else if (v3=="Y"){lev=2
    level="المستوى الثانى"  
}
else if (v3=="Z"){lev=3
    level="المستوى الثالث"  
}
else{lev=0
    level="غير معرف"  
}

if (v1=="M"){
    gaha="طالب البرنامج الأساسي "                                                                                                                                          
}
else if (v1=="P"){
    gaha="طالب البرنامج المميز"  
}
else if (v1=="E"){
    gaha="مبادرات المدارس"  
}
else if (v1=="G"){
    gaha="المبادرات الاجتماعيه"  
}
else if (v1=="S"){
    gaha="المنح الدراسيه"  
}
else{
    gaha="غير معرف"  
}

if (storedUserId) {
    document.getElementById("displayUserId").innerText =storedUserId;
} else {
    window.location.href = "#"; // Redirect if no ID found
}
if (spcial) {
    document.getElementById("spcial").innerText = spcial;
} else {
    window.location.href = "#"; // Redirect if no ID found
}
if (level) {
    document.getElementById("level").innerText = level;
} else {
    window.location.href = "#"; // Redirect if no ID found
}
if (gaha) {
    document.getElementById("gahadis").innerText = gaha;
} else {
    window.location.href = "#"; // Redirect if no ID found
}

document.addEventListener('DOMContentLoaded', function() {
    const joinmeeting = document.getElementById('edit-profile');
    const contant = document.getElementById('view-courses');
    
    
    joinmeeting.addEventListener('click', function() {
        if(storedUserId){
            window.location.href = "rooms.html";
        }
        else{window.location.href = "main.html"}
        
    });
    
    contant.addEventListener('click', function() {
        localStorage.setItem("sps_local", spi);
        localStorage.setItem("level_local", lev);  // تخزين في localStorage
        window.location.href = "contant.html";
    });
    
});

document.addEventListener('DOMContentLoaded', function() {
const checkButton = document.getElementById('checkButton');
const linkModal = document.getElementById('linkModal');
const linkInput = document.getElementById('linkInput');
const saveButton = document.getElementById('saveButton');
const closeButton = document.querySelector('.close');
const messageDiv = document.getElementById('message');

// Function to validate 4-digit code
function isValidCode(code) {
return /^\d{4}$/.test(code);
}

// Function to validate URL
function isValidURL(url) {
try {
  new URL(url);
  return true;
} catch {
  return false;
}
}

// Function to show message
function showMessage(text, type) {
messageDiv.textContent = text;
messageDiv.className = type;
messageDiv.style.display = 'block';

// Hide message after 5 seconds
setTimeout(() => {
  messageDiv.style.display = 'none';
}, 5000);
}

// Check code button click handler
checkButton.addEventListener('click', function() {
const c=localStorage.getItem("userID");
const code = c.substring(4, 8);

if (!isValidCode(code)) {
  showMessage('Please enter a valid 4-digit code', 'error');
  return;
}

// Check if code exists in localStorage
const savedLink = localStorage.getItem(`code_${code}`);

if (savedLink) {
  // Open the link in a new tab
  window.open(savedLink, '_blank');
  showMessage(`Opening saved link for code ${code}`, 'success');
} else {
  // Show modal to add new link
  linkModal.style.display = 'block';
}
});

// Save button click handler
saveButton.addEventListener('click', function() {
const c=localStorage.getItem("userID");
const code = c.substring(4, 8);
const link = linkInput.value.trim();

if (!isValidURL(link)) {
  showMessage('Please enter a valid URL (including https://)', 'error');
  return;
}

// Save to localStorage
localStorage.setItem(`code_${code}`, link);

// Close modal and show success message
linkModal.style.display = 'none';
showMessage(`Link successfully saved for code ${code}`, 'success');

// Clear link input for next time
linkInput.value = '';
});

// Close modal when clicking X
closeButton.addEventListener('click', function() {
linkModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
if (event.target === linkModal) {
  linkModal.style.display = 'none';
}
});

// Allow Enter key to trigger check button
codeInput.addEventListener('keyup', function(event) {
if (event.key === 'Enter') {
  checkButton.click();
}
});

// Allow Enter key to trigger save button when modal is open
linkInput.addEventListener('keyup', function(event) {
if (event.key === 'Enter') {
  saveButton.click();
}
});
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    if (storedUserId){
        localStorage.removeItem('userID');
        localStorage.removeItem('userLevel');
        window.location.href = 'main.html';}
        else{window.location.href = 'main.html';}
    });   