let fileInput = document.getElementById('fileInput')
let img = document.getElementById('img')


fileInput.addEventListener('change' , function(){
    [...this.files].forEach(file=>{

        if(file.type.startsWith('image/')){
            let reader = new FileReader();

            reader.onload = function(){

                let newImgDiv = document.createElement('div');
                newImgDiv.classList.add('fileImgDIv');
                document.body.appendChild(newImgDiv);
                let newImg = document.createElement('img');
                newImg.setAttribute('src',reader.result);
                newImg.classList.add('fileImg');
                newImgDiv.appendChild(newImg);
                var newSpan = document.createElement('span');
                newSpan.classList.add('fileSpan');
                newSpan.innerText = 'X';
                newImgDiv.appendChild(newSpan);
                newSpan.addEventListener('click', function(){
                    newImgDiv.remove();
                })
                // let img = document.createElement('img');
                // img.setAttribute('src',reader.result);

                // document.body.appendChild(img);
            }

            reader.readAsDataURL(file)
        }
        else{
            console.log("Format duz deyil")
            this.value = ''
        }
    })
})

img.addEventListener('click',function(){
    fileInput.click();
})