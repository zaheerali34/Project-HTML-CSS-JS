const uploadBox = document.querySelector(".uploadBox");
image = uploadBox.querySelector("img");
fileInput = uploadBox.querySelector("input");

const loadFile = (e)=> {
    const file = e.target.files[0];
    if (!file) return;
    image.src = URL.createObjectURL(file);
    image.addEventListener("load", ()=> {
        document.querySelector(".box").classList.add("active")
    })
}

fileInput.addEventListener("change", loadFile)
uploadBox.addEventListener("click", ()=> fileInput.click());