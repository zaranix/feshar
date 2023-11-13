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

for (let i = 0 ; i< Data.images.length; i++){
let id = Data.images[i].id
let name = Data.images[i].file.name
let formData= new FormData();
formData.append("image", Data.images[i].file);
formData.append("nonce", "9660d3def1");
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
    console.log(Data.compressed_images)
  },
  error: function (xhr, status, errorThrown) {
      var errorData = $.parseJSON(xhr.responseText);
      console.log(errorData.data)
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