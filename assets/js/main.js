window.onload=function(){
    header();

}
    function header(){

        var nizMeni=["index.html", "#about-us", "#naslov", "#interiorDesignForm", "author.html"];
        var nizNaziv=["Home", "Projects", "Gallery", "Contact", "Author"];

        var divLista=document.getElementById("meni");
        var ispis="<ul class='nav'>";

        for(var i=0; i<5; i++){
            ispis+="<li><a href='"+nizMeni[i]+"'>"+nizNaziv[i]+"</a><li>";
        }
        ispis+="</ul>";
        divLista.innerHTML=ispis;

    }
    let srcSlajder=['assets/img/cover.jpg', 'assets/img/coverr3.jpg', 'assets/img/coverr8.jpg'];
    setInterval(promeniPozadinu, 4000);
    let trenutnaSlika=1;
    function promeniPozadinu(){
        let slajder=document.querySelector("#slajder-slike");
        
        slajder.src = srcSlajder[trenutnaSlika];
        trenutnaSlika = (trenutnaSlika+1) % srcSlajder.length;
        console.log(srcSlajder[trenutnaSlika]);
    }

    document.addEventListener("DOMContentLoaded", function() {
        var imagePaths = [
            "assets/img/slike/kucs.jpg",
            "assets/img/slike/kuhinja.jpg",
            "assets/img/slike/kuhinja2.jpg",
            "assets/img/slike/kupatilo.jpg",
            "assets/img/slike/ogledalo.jpg",
            "assets/img/slike/soba1.jpg",
            "assets/img/slike/soba2.jpg",
            "assets/img/slike/soba3.jpg",
            "assets/img/slike/terasa.jpg",
            
        ];
    
        var galleryContainer = document.getElementById("gallery");
    
        imagePaths.forEach(function(imagePath) {
            var imgElement = document.createElement("a");
            imgElement.href = imagePath;
            imgElement.classList.add("fancybox");
            imgElement.setAttribute("data-fancybox", "gallery");
    
            var imgThumbnail = document.createElement("img");
            imgThumbnail.src = imagePath;
    
            imgElement.appendChild(imgThumbnail);
            galleryContainer.appendChild(imgElement);
        });
    
        // Inicijalizujemo Fancybox
        $(".fancybox").fancybox({
            animationEffect: "fade",
            transitionEffect: "slide",
            loop: true
        });
    });
    function submitForm() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Perform validation if needed
        if (!fullName || !email || !phone || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Here, you can send the form data to the server or perform other actions
        console.log("Form submitted with the following data:");
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Phone: " + phone);
        console.log("Message: " + message);

        // You may want to reset the form after submission
        document.getElementById('interiorDesignForm').reset();
    }
   

    var footer = document.createElement("footer");
    var siteName = document.createElement("div");
    var pageLinks = document.createElement("div");
    var socialIcons = document.createElement("div");
    
    // Postavljanje sadržaja za siteName
    siteName.innerHTML = "<p>AmbientDesign</p>";
    
    // Postavljanje sadržaja za pageLinks
    var pages = ["Home", "About-us", "Gallery", "Contact", "Author"];
    for (var i = 0; i < pages.length; i++) {
        var pageLink = document.createElement("a");
        pageLink.href = pages[i].toLowerCase() + ".html";
        pageLink.textContent = pages[i];
        pageLinks.appendChild(pageLink);
    }
    
    // Postavljanje sadržaja za socialIcons
    var instagramIcon = document.createElement("a");
    instagramIcon.href = "https://www.instagram.com/"; // Dodajte link ka Instagram nalogu
    instagramIcon.innerHTML = '<img src="assets/img/instagram.png" alt="Instagram">';
    
    var facebookIcon = document.createElement("a");
    facebookIcon.href = "https://www.facebook.com/"; // Dodajte link ka Facebook stranici
    facebookIcon.innerHTML = '<img src="assets/img/facebook.png" alt="Facebook">';
    
    socialIcons.appendChild(instagramIcon);
    socialIcons.appendChild(facebookIcon);
    
    // Dodavanje elemenata u futer
    footer.appendChild(siteName);
    footer.appendChild(pageLinks);
    footer.appendChild(socialIcons);
    
    // Dodavanje futera na kraj body elementa
    document.body.appendChild(footer);
