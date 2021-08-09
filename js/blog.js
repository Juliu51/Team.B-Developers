"use strict"

function getData(data) {

  let HTML = '';
  let blog = document.querySelector('.Blog_info');
  let index = '';
  if (Array.isArray(data)) {
     
      for (index of data) {
        HTML += getList(index);
        
      }
      return blog.innerHTML = HTML;
  } else {
      console.log('Nemasyvas');
  }
}

function getList(list) {
  
  
  let HTML = ` <div class="Blog_cont">
  <div class="Blog_block">
  <div class="blog_foto">
    <img src="./assets/img/blog/${list.floor.img}" alt="">
    <a href="#"${list.floor.herf}</a>
  </div>
  <div class="blog_foto_info">
    <a href="">
      <h4>${list.floor.title}</h4>
    </a>
    <p>${list.floor.text}</p>
    <div class="blog_foto_avatar">
      <div class="avatar_foto">
        <img src="./assets/img/testimonial/${list.floor.avatar}" alt="">
       </div>
      <div class="info">
        <h5><span>By :</span> Jack Daniel </h5>
       <h6>25 JUNE 2017</h6>
        </div>
    </div>
  </div>
</div>
</div>`;

  return HTML;
}


getData(feed);

