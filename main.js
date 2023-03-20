const filterItems = document.querySelector(".items"),
filterImages = document.querySelectorAll(".image");

window.onload = () => {
    filterItems.onclick = (selectedItem) => {
        if(selectedItem.target.classList.contains("item")) {
            filterItems.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImages.forEach((image) => {
                let filterImage = image.getAttribute("data-name");
                console.log(filterName)
                if(filterImage == filterName) {
                    if(image.classList.contains("hidden")) image.classList.remove("hidden") ;
                    image.classList.add("show")
                } else if (filterName === "all") {
                    if(image.classList.contains("hidden")) image.classList.remove("hidden") ;
                    if(image.classList.contains("show")) image.classList.remove("show");
                } else {
                    if(image.classList.contains("show")) image.classList.remove("show");
                    image.classList.add("hidden")
                }
            });
        };
    }
    for (let i = 0; i < filterImages.length; i++) {
        filterImages[i].setAttribute("onclick", "preview(this)");
        
    }
}


const previewBox = document.querySelector(".preview-box"),
previewImage = previewBox.querySelector("img"),
closeIcone = previewBox.querySelector("i"),
shadow = document.querySelector(".shadow"),
pCategory = previewBox.querySelector(".title p");

// <!-- Full screen Image preview -->


function preview(element) {
    document.querySelector("body").style.overflow = "hidden";
    let selectPreviewImg = element.querySelector("img");
    previewImage.src = selectPreviewImg.src;
    pCategory.innerText = element.getAttribute("data-name");
    pCategory.style.textTransform = "capitalize";
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcone.onclick = ()=> {
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
    document.querySelector("body").style.overflow = "scroll";

    }
}

