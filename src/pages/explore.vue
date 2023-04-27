<!DOCTYPE html>

<html lang="en">

  <head>

    <meta charset="UTF-8" />

    <title>Vue Test</title>

    <!-- This is a development version of Vue.js! -->

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <!-- import stylesheet -->

    <link rel="stylesheet" href="styles.css" />

    <!-- Google fonts -->

    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />

  </head>

  <body>

    <!-- Basic usage -->

    <div id="app_basic" v-bind:title="timestamp" class="experiment-block">{{ message }}</div>

<div> <h> REWARDS SCHEDULE:

  <br>

  FEEE SPIN (DAILY) - 6:00AM to 9:00AM

  <br>

  FREE USD (DAILY)- 12:00AM to 3:00PM

  <br>

  FREE SCRATCH IT (DAILY)- COMING SOON 

  <br>

  <mark>COMEBACK EVERYDAY FOR MORE CHANCES OF WINNING</mark></h>

  <marquee><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGRskkOtko_aZKnn7ngwM6hjKBMGYhIe9s1_S5x46855l-MMBXGIvN70vwXRySVmWDrZfX1LuisZgHg-PLqZyKBxpdJ_OG5YYzQrg4CC9ECFMCcrSjTxlkQIhidV9V_TdmJaBd6NDQ_TrMPQ8yqFL95mtrsQRmjZZecGRvF9I997dEt82j74XYO9U67w/s225/IMG_20230419_133458.jpg" 

   alt="" width="100%" height="700px" style="border:1.9px solid black">

  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmpAFPFf3cHIO1_OnaUT0lQWVxYcKf1ICVsdDRZGJwYTiZ1bSAPyFjGPNbAtO3gXu8SzwxFzEGDiboVcqOHxh17D-C0Rjuc0-xQ__GC6D4w5i2UUbeS1tXDqT0dT5lCPmHAP2AyBisQQxXhzr8yhjwZNBDzzDKiKsGZwzBkq9s5dkTxcQQd5tgZuoTmg/s2049/IMG_20230418_104535.jpg" 

   alt="" width="100%" height="700px" style="border:1.9px solid black">

    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGRskkOtko_aZKnn7ngwM6hjKBMGYhIe9s1_S5x46855l-MMBXGIvN70vwXRySVmWDrZfX1LuisZgHg-PLqZyKBxpdJ_OG5YYzQrg4CC9ECFMCcrSjTxlkQIhidV9V_TdmJaBd6NDQ_TrMPQ8yqFL95mtrsQRmjZZecGRvF9I997dEt82j74XYO9U67w/s225/IMG_20230419_133458.jpg" 

   alt="" width="100%" height="700px" style="border:1.9px solid black">

   </marquee></div>

    <script>

      new Vue({

        el: "#app_basic",

        data: {

          message: "hello members",

          timestamp: `Timestamp ${new Date().toLocaleString()}`,

        },

      })

    </script>

  </body>

</html>
