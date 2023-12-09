window.onload=function(){
    header();

}
    function header(){

        var nizMeni=["index.html", "projects.html", "gallery.html", "contact.html", "author.html"];
        var nizNaziv=["Home", "Projects", "Gallery", "Contact", "Author"]

        var divLista=document.getElementById("meni");
        var ispis="<ul class='nav'>";

        for(var i=0; i<5; i++){
            ispis+="<li><a href='"+nizMeni[i]+"'>"+nizNaziv[i]+"</a><li>";
        }
        ispis+="</ul>";
        divLista.innerHTML=ispis;

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
