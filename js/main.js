
// Global data 
const Data ={
  // item in images: {id: int, file: file}
  images:[],
  // item in compressed: {id: id, name: name, url: url, size: size}
  compressed_images : [],
  last_id : 0 ,
  push_image(file){
      this.images.push({id: this.last_id++, file: file})
    },
  push_com_image(id, name, url, before_size, after_size){
    this.compressed_images.push({id: id, name: name, url: url, before_size: before_size , after_size: after_size})
  },
  remove_image(id){
    let i = this.images.findIndex((elem) =>{
      elem.id == id
    })
    this.images.splice(i, 1)
  },
  // Find a compressed image by ID and return the compressed image 
  find_com_image(id){
    let image = this.compressed_images.find((elem) => {return (elem.id == id)})
    return image;
  }
  }


// Create a queue item and add it to queue-list (html element)
function createQueueItem(id, file_name, file_size){
  const  queue_item = document.createElement('div');
  queue_item.setAttribute("id", `img${id}`);
  queue_item.classList.add('box__container');
  let  html_image_container= `
          <div class="fshr__grid2 fshr__grid--1x4">
            <div class=" fshr__icon--container">
              <span class="fshr__tooltip ">
                <span data-info=${id} class="fshr__ico--style fshr__icon--setting2 fshr__delete_btn"><svg data-v-4f42a8f0="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="#7987a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle data-v-4f42a8f0="" cx="12" cy="12" r="10"/><line data-v-4f42a8f0="" x1="15" y1="9" x2="9" y2="15"/><line data-v-4f42a8f0="" x1="9" y1="9" x2="15" y2="15"/></svg></span>  
                <span class="fshr__tooltiptext ">حذف فایل</span>
              </span>
            </div>
            <div  class="fshr__size__container">
              <div class="fshr__tooltip fshr__badge-item__action">
              ${file_size} 
              </div>
            </div>
            <div class="fshr__tooltip fshr__badge-item__name">
              ${file_name}
              <span class="fshr__tooltiptext fshr__tooltiptext--name"> ${file_name}</span>
            </div>
          </div>
  `;
  queue_item.innerHTML = html_image_container;
  let uploadQueue = document.getElementById('upload-queue')
  const delete_btn = queue_item.getElementsByClassName('fshr__delete_btn')[0];
  delete_btn.addEventListener("click", function() {
    let id = this.getAttribute("data-info") ;
    uploadQueue.querySelector(`#img${id}`).remove();
    Data.remove_image(id);
  });
  uploadQueue.insertBefore(queue_item, uploadQueue.firstChild);
}

// Create a output item and added to output list(html element)
function createOutItem(name, id){
  const  out_item = document.createElement('div');
  out_item.setAttribute("id", `img${id}`);
  out_item.classList.add('box__container');
  let output_html = 
              `        <div class="fshr__grid fshr__grid--1x4">
              <div class="fshr__bt--container">
              <a href="#"  download="${name}">
                <button class="fshr__btn--fshr fshr__unclickableBtn">Download JPG</button>
                </a>
              </div>
          
              <div class="fshr__size__container">
                <div class="fshr__tooltip fshr__badge-item__action fshr__badge--linethrough fshr__before_size">
                  
                  <span class="fshr__tooltiptext fshr__tooltiptext--badge">سایز قبلی</span>
                </div>
                <div class="fshr__tooltip fshr__badge-item__action fshr__after_size">
                
                  <span class="fshr__tooltiptext fshr__tooltiptext--badge">سایز جدید</span>
                </div>
              </div>
              <div class="success__container">
              <img class="fshr__loading-circle" src="./images/loading.gif" alt="">
                <div style="display:none" class="fshr__tooltip fshr__badge-item__status fshr__success" >
                 Done 
                  <span class="fshr__tooltiptext">Done</span>
                </div>
              </div>
              <div id="fshr__download" class="fshr__tooltip fshr__badge-item__name">
                ${name}
                <span class="fshr__tooltiptext fshr__tooltiptext--name"> ${name}</span>
              </div>
            </div>` 
  out_item.innerHTML = output_html;
  let outputList = document.getElementById('output-list')
  outputList.insertBefore(out_item, outputList.firstChild);

}

// Change status of output item
function changeStatusOfOutItem(id){
  let outputList = document.getElementById('output-list')
  let item = outputList.querySelector(`#img${id}`);
  let image = Data.find_com_image(id);
  item.querySelector("img").style.display= "none";
  item.querySelector("div.fshr__success").style.display= "inline-block";
  item.querySelector("div.fshr__before_size").textContent= image.before_size;
  item.querySelector("div.fshr__after_size").textContent= image.after_size;
  item.querySelector("button").classList.remove("fshr__unclickableBtn");
  item.querySelector("a").setAttribute("href", image.url);

}

// Event on uploading image
document.getElementById("img-upload").addEventListener("change", function () {
    for (let i = 0; i < this.files.length; i++) {
      // Push new image to images list
      Data.push_image(this.files[i]);
      //Create queueItem
      createQueueItem(Data.last_id-1, this.files[i].name, this.files[i].size);
    
    }

})





// Submit button event
document.getElementById("submit-btn").addEventListener("click", () =>{

  // Disappear the upload-box and compress-box
  document.getElementById("upload-box").style.display = "none"
  document.getElementById("compress-box").style.display = "none"

  for (let i = 0 ; i< Data.images.length; i++){
  let id = Data.images[i].id
  let name = Data.images[i].file.name
  let formData= new FormData();
  formData.append("image", Data.images[i].file);
  console.log(Data.images[i].file)
  formData.append("nonce", "375e2e1c8f");
  // Add output item to output list
  createOutItem(name, id);

  $.ajax({
    url: "https://feshar.co/v2/wp-json/rac/v2/feshar",
    type: "POST",
    data: formData,
    success: function (msg) {
      console.log(msg);
      // Remove the image from images
      Data.remove_image(id)
      // Push the image to compressed_images
      Data.push_com_image(id,name,msg.compressed_image_url, msg.before_size, msg.after_size)
      
      // console.log(Data.compressed_images.url)
      console.log(Data.compressed_images)
    
      // Change state of output item 
      changeStatusOfOutItem(id);
      


    },
    error: function (xhr, status, errorThrown) {
        var errorData = $.parseJSON(xhr.responseText);
        console.log(errorData.data)
        console.log(msg)
        //$("#ma").text(errorData.data);
    },
    cache: false,
    contentType: false,
    processData: false
  });
  }

})


// Styling stuff
var acc = document.getElementsByClassName("fshr__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}