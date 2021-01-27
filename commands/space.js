const fetch = require('node-fetch');
//const env = require('../config/environment.js');


module.exports = async function(msg,str){
console.log('!space entered');
/* $.ajax({
url: `https://api.tenor.com/v1/search?q=space&key=${env.gif_api_key}&contentfilter=off&limit=1`,
method: 'GET',
success: (data)=>{
   msg.channel.send(data.results.url);
   console.log(data.results.url);
}
})
console.log("is this running");
function loadXMLDoc() {
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
   console.log(xmlhttp.response);
   if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
          document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
      }
      else if (xmlhttp.status == 400) {
         alert('There was an error 400');
      }
      else {
          alert('something else other than 200 was returned');
      }
   }
};

xmlhttp.open("GET", `https://api.tenor.com/v1/search?q=space&key=${env.gif_api_key}&contentfilter=off&limit=1`, true);
xmlhttp.send();
console.log(xmlhttp.responseText);
msg.channel.send(data)
}
}*/
let url = `https://api.tenor.com/v1/search?q=space&key=${process.env.GIF_API_KEY}&limit=50`;
let response = await fetch(url);
let json = await response.json();
console.log(json);
const index = Math.floor(Math.random() * json.results.length);
msg.channel.send(json.results[index].url);
}