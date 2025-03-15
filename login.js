function saveUserId() {
  let userId = document.getElementById("userId").value;
  if (userId) {
    localStorage.setItem("userID", userId); // تخزين في localStorage
    window.location.href = "id.html"; // الانتقال إلى الصفحة الثانية
  } else {
    alert("Please enter a User ID");
  }
}

const validNumbers = [
"5148", "2334", "5905", "4934", "3817", "9839", "5898", "8564",
"5894", "2554", "7896", "5871", "7859", "7461", "9983", "9524",
"1148", "1942", "1943", "4958", "2257", "8260", "6089", "2400",
"6727", "5489", "9995", "8172", "6565", "5952", "1588", "2254",
"1891", "5973", "8103", "7220", "2002", "9796", "9437", "9060",
"8093", "7606", "9712", "5547", "1937", "7219", "3665", "5950",
"9203", "9785", "9729", "4078", "4692", "8782", "5734", "7123",
"1726", "8743", "6889", "4735", "8732", "6875", "6132", "6748",
"3437", "3120", "7244", "1805", "7579", "8326", "6831", "3486",
"1235", "4378", "6892", "1760", "9820", "4351", "5926", "1349",
"7492", "2179", "4685", "6517", "7318", "3256", "4195", "9128",
"1096", "8527", "7341", "1476", "5920", "6853", "4912", "3451",
"8904", "5076", "7268", "1247", "8427", "1508", "8109", "3146",
"7453", "3764", "2917", "5674", "6895", "9478", "4563", "6705",
"3921", "4372", "8341", "2139", "1256", "4709", "1738", "6582",
"9256", "7093", "5621", "9823", "1957", "7409", "8674", "6039",
"4537", "9715", "4862", "1289", "6758", "2814", "8206", "1593",
"2907", "4619", "8492", "5604", "7028", "1873", "3405", "6192",
"8365", "7416", "6052", "9348", "4713", "1529", "3674", "8051",
"6592", "7498", "2084", "9317", "8439", "1273", "4630", "2185",
"5321", "4297", "5809", "6753", "3017", "2479", "7265", "9423",
"5168", "3871", "1358", "8265", "4701", "5213", "6781", "4093",
"3985", "2751", "8309", "7194", "6548", "7631", "1275", "2817",
"6719", "3527", "4916", "9350", "2784", "3492", "1068", "9871",
"6058", "3207", "4891", "5913", "9016", "6789", "5279", "3841",
"4573", "2148", "8926", "7451", "3952", "1243", "6527", "4816",
"6197", "9207", "7816", "5127", "9701", "5618", "3197", "1807",
"5064", "1897", "8315", "2346", "7039", "4859", "6417", "3984",
"7193", "2906", "5428", "3089", "5726", "6819", "4382", "7249",
"2759", "8467", "2156", "9431", "6985", "2374", "3028", "1407",
"6879", "5472", "6158", "4637", "5723", "8126", "6013", "3784",
"5821", "1949", "8975", "3264", "6305", "5713", "4182", "9635",
"7403", "2851", "7196", "1809", "9037", "1724", "6571", "9036",
"3548", "8415", "6128", "5704", "2389", "7523", "1924", "6756",
"8621", "5092", "4813", "3157", "9875", "7941", "5108", "3917",
"6237", "7658", "8471", "3904", "8193", "2497", "6897", "2417",
"5728", "9164", "7508", "8417", "3647", "4391", "7812", "5912",
"3261", "5067", "3152", "7325", "8105", "6324", "7432", "9806",
"1369", "7058", "8761", "6198", "9708", "2856", "9206", "4871",
"6973", "2836", "5627", "4365", "2079", "3748", "5937", "9265",
"8175", "2581", "9468", "2037", "7628", "1839", "9402", "6109",
"7345", "9137", "2387", "8672", "8016", "2049", "7182", "4356",
"5087", "5924", "4703", "1428", "6216", "8603", "2107", "6581",
"3194", "7846", "7024", "1598", "4962", "6413", "3085", "4729",
"5736", "1657", "1389", "8713", "5729", "9143", "3465", "6835",
"9627", "4071", "7564", "3897", "7984", "7159", "8791", "2957",
"6375", "5429", "1397", "7648", "5283", "8124", "9653", "2709",
"7143", "4325", "7518", "3072", "9684", "2159", "9432", "6397",
"2341", "1678", "9048", "4895", "5137", "2073", "8763", "9542",
"1392", "1927", "4506", "7601", "5806", "2176", "7913", "6589",
"7095", "2643", "9486", "8107", "6475", "7532", "7015", "3068",
"8432", "6951", "3714", "8523", "5943", "2897", "7916", "9879",
"5097", "8147", "2785", "1469", "8719", "2143", "9075", "5826",
"3518", "7302", "5861", "1745", "9124", "3918", "7465", "8032"
];

// Function to show messages
function showMessage(text, type) {
const messageElement = document.getElementById('message');
if (messageElement) {
messageElement.textContent = text;
messageElement.className = `message ${type}`;
messageElement.style.display = 'block';
} else {
alert(text);
}
}

// Function to verify the code
function verifyCode() {
// Get the user ID from input field
const inputCode = document.getElementById('userId').value;

// Check if input is empty
if (!inputCode) {
showMessage("الرجاء إدخال الكود", "error");
return;
}

// Extract the last 4 digits
const lastFourDigits = inputCode.slice(-4);

// Check if the last 4 digits exist in the valid numbers list
if (validNumbers.includes(lastFourDigits)) {
// Save the user ID to localStorage
localStorage.setItem("userID", inputCode);

// Show success message
showMessage("الكود صحيح، جاري التحويل...", "success");

// Redirect after a short delay (1 second)
setTimeout(() => {
  window.location.href = "id.html"; // Redirect to id.html page
}, 1000);
} else {
// Code is invalid - show error message
showMessage("الكود غير مسجل", "error");
}
}

// Add event listener for Enter key
document.getElementById('userId').addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
verifyCode();
}
});
