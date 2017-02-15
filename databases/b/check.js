var isSignedIn = localStorage.getItem("isSignedIn");
var currentUser = localStorage.getItem("currentUser");
if(isSignedIn !== "true") {
  window.location.replace("index.html");
}
if(currentUser === "Taylor") {
  window.location.replace("accessdenied.html");
}
