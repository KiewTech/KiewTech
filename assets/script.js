function aBB() {

    var bAA = window.location.href;
  

    if (!bAA.startsWith("https://kiewtech.com/")) {

      document.body.innerHTML = "";
      window.location.href = "https://kiewtech.com/";
    }
  }
(function (window, document, undefined) {
    window.onload = init;
    function init() {

        aBB();
        let lBB = document.getElementById("loader");
        let tLBB = document.getElementById("loadingtext");
        let pcBBA = document.getElementById("pagecontent");
        let cAAb = document.getElementById("card");
        let aPpA = document.getElementById("audio");


        document.getElementById("loader").addEventListener("click", function () {
            tLBB.classList.add("animate__fadeOutUp")
        });


        tLBB.addEventListener("animationend", function() {
            lBB.style.display = "none";
            pcBBA.style.display = "flex";
            cAAb.classList.add("animate__fadeInUp");
            aPpA.play()
        });

    }

})(window, document, undefined);