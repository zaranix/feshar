<!DOCTYPE html>
<html dir="rtl"  lang="fa_IR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    
    <title>feshar</title>
  </head>
  
  <body>
    <div id="fshr__fonts">
      <div id="upload-box" class="fshr__container--all fshr__border__container">
        <div class="fshr__container--background fshr__box__contain">
          <div class="fshr__bt__container">
            <div class="fshr__dropdown fshr__collapsible--expanded">
              <button
                class="fshr__btn--upload  fshr__btn_left--smooth fshr__dropbtn"
              >
                <img
                  class="fshr__collapsible__shevron fshr__icon--style-shevron"
                  src="images/dropdown-iconW.svg"
                  alt=""
                />
              </button>
  
              <div class="fshr__collapsible__content">
                <ul class="fshr__list__items">
                  <li class="fshr__list__border">
                    <a href=""
                      ><img
                        class="fshr__icon--style-secondary"
                        src="images/device.svg"
                        alt=""
                      />
                      از طریق کامپیوتر
                    </a>
                  </li>
              
                
                </ul>
              </div>
          </div>
            <form name="uploader" id="image-upload-form"  method="post" enctype="multipart/form-data">
              <label class="fshr__btn--upload fshr__btn_right--smooth" for="img-upload">
                <img
                  class="fshr__icon--style"
                  src="images/pocket.svg"
                  alt=""
                /><span id="fshr__text">یک فایل انتخاب کنید</span></label
              >
              <input type="hidden" name="nonce" value="haey">
              <input
                class="fshr__btn--upload fshr__btn_right--smooth"
                type="file"
                name="image"
                multiple
                id="img-upload"
                style="display: none"
                accept="image/*"
              />
            </form>
          </div>
          <div class="fshr__msg__container">
            <span class="fshr__msg__desk"
              >تصاویر با پسوند های bmp , gif , png , jpg یا jpeg را اینجا بکشید
              ...
            </span>
          </div>
        </div>
       </div>


       
      
      <div id="output-box" style="display:none;" class="fshr__containerpanel fshr__border__container">
        <div id="output-list" class="container--background">
        
          <div class="fshr__btn__container1">
            <div class="fshr__btn1__container">
              <div class="fshr__bt--container">
                <button id="downloadall" class="fshr__btn--fshr btn--fshr-2 fshr__unclickableBtn">
                  <img class="fshr__ico--style" src="images/download-icon.svg" alt="" />
                  دانلود همه
                </button>
              </div>
     
          
            </div>
    
          </div>
        </div>
     </div>
   
   <div style="display:none;" id="compress-box" class="fshr__containerpanel fshr__border__container">
   
    <div class="fshr__bt__container fshr__bt2__container">
     
      <div class=" fshr__collapsible--expanded">
        <button class="fshr__btn fshr__btn_left--smooth2 fshr__btn--gray">
          <img
            class="fshr__collapsible__shevron fshr__icon--style-shevron"
            src="images/dropdown-iconG.svg"
            alt=""
          />
        </button>

        <div class="fshr__collapsible__content">
          <ul class="fshr__list__items">
            <li class="fshr__list__border2">
              <a href=""
                ><img
                  class="fshr__icon--style-secondary"
                  src="images/device.svg"
                  alt=""
                />
                از طریق کامپیوتر
              </a>
            </li>
         
        
            <li class="fshr__list__border2">
              <a href="#"
                ><img
                  class="fshr__icon--style-secondary"
                  src="images/url.svg"
                  alt=""
                />
                از طریق Url
              </a>
            </li>
         
          </ul>
        </div>
      </div>
     
        <form>
          <input
            class="fshr__btn--fshr fshr__btn_right--smooth2 fshr__btn--gray"
            type="file"
            multiple
            name="uploadfile"
            id="img-upload2"
            style="display: none"
            accept="image/*"
          />
          <label class="fshr__btn--fshr fshr__btn_right--smooth2 fshr__btn--gray" for="img-upload2">
            <img
              class="fshr__icon--style"
              src="images/pocketblue.svg"
              alt=""
            /><span id="fshr__text">آپلود فایل</span></label
          >
        </form>
    
    </div>

    <div class="container--background2" id="upload-queue">
 
      <div class="fshr__btn__container1">
        <div class="fshr__btn1__container">
          <div class="fshr__bt--container">
            <button id="submit-btn" class="fshr__btn--fshr btn--fshr-2">
              <img class="fshr__ico--style fshr__icon--animation" src="images/moveRight.svg" alt="" />
              فشرده سازی
            </button>
          </div>
 
      
        </div>

      </div>
    </div>
 </div>
       <div style="display:none;" class="fshr__containerpanel fshr__border__container">

        <button class="fshr__accordion">
        <div>
          <img class="fshr__icon--setting" src="images/download (8).svg" alt=""> تنظیمات پیشرفته (اختیاری) 
        </div>
        <img class="fshr__collapsible_shevron" src="images/dropdown-icon.svg" alt=""></button>
        <div class="fshr__panel">
       <div class="fshr__panel--background">
        <span> Image Options</span>
       </div>
          <div class="fshr__panel--background2 fshr__grid fshr__grid--2x1">
  
       
      
              <div class="fshr__label--measure1">
               <input  type="checkbox"   />
               <label class="fshr__label"  >اطلاعات متا نگه داشته شود </label>
              </div>
         
         
      
              <div class="fshr__label--measure2">
               <input  type="checkbox"   />
               <label class="fshr__label fshr__label--border"  >نیازی به فشرده سازی ویژه ندارم </label>
              </div>
           
          </div>
          <div class="fshr__panel--background">
            <span>درخواست تغییرات</span>
          </div>
          <div class="fshr__panel--background3  fshr__grid--1x4">
    
            <div>
             <span>تنظیمات با موفقیت ذخیره گردید</span>
            </div>
         
        </div>
          <button class="fshr__btn--fshr fesh__button--setting"> ذخیره تغییرات</button>
        </div>
       </div>
    
       </div>
    
  
    

        </div>
        </div>
     
    </div>
  </div>
</div>

<script src="js/main.js"></script>
  </body>
</html>