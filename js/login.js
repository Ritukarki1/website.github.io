const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      social.onclick = (()=>{
          facebook.click();
      });



//signin


function onSignIn(googleUser){
  // var profile = googleUser.getBasicProfile();
  // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  // console.log('Full Name: ' + profile.getName());
  // console.log('Given Name: ' + profile.getGivenName());
  // console.log('Family Name: ' + profile.getFamilyName());
  // console.log("Image URL: " + profile.getImageUrl());
  // console.log("Email: " + profile.getEmail());

  // // The ID token you need to pass to your backend:
  // var id_token = googleUser.getAuthResponse().id_token;
  // console.log("ID Token: " + id_token);


  const profile = googleUser.getBasicProfile();
   $(".container").css("display", "none");
  $(".data").css("display","block");
   $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
    $("#name").text(profile.getName());
    $("#id").text(profile.getId());
 
}

function signOut(){
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function(){
      $(".container").css("display", "block");
      $(".data").css("display","none");
      alert('You have been successfully signout');
      
      console.log("Logging out");
  });
}

function btnFacebook(){
  alert('succeed');
}

      