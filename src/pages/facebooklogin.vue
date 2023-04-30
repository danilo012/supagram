<template>
  <div>
    <button class="button" @click="logInWithFacebook"> Login with Facebook</button>
  </div>
</template>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
{

    status: 'connected',

    authResponse: {

        accessToken: '...',

        expiresIn:'...',

        signedRequest:'...',

        userID:'...'

    }

}
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

       

<style>
.button{
  color:white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}
</style>
