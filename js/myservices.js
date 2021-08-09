let myServices = [
    {
        service:'Branding',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum laboriosam ad nemo quidem beatae possimus consequuntur dolore'
    },
    {
        service:'web design',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum laboriosam ad nemo quidem beatae possimus consequuntur dolore'
    },
    {
        service:'marketing',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum laboriosam ad nemo quidem beatae possimus consequuntur dolore'
    },
    {
        service:'clean code',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum laboriosam ad nemo quidem beatae possimus consequuntur dolore'
    },
    {
        service:'friendly screen',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum laboriosam ad nemo quidem beatae possimus consequuntur dolore'
    },
    {
        service:'Unlimited support',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum laboriosam ad nemo quidem beatae possimus consequuntur dolore'
    }
]


function getData(data) {
  let HTML = "";
  let items = document.querySelector(".items");
  
   
    
  if (Array.isArray(data)) {
    for (index of data) {
      HTML += getList(index);
    }
    return (items.innerHTML = HTML);
  } else {
    console.log("Nemasyvas");
  }
}

function getList(list) {

    item++;
    let HTML = ` <div class="item__box">
                    <div class="inner__wrap">
                    <div class="icon">
                        <span class="zmdi zmdi-flower-alt"></span>
                    </div>
                    <h4>${list.service}</h4>
                    <p>${list.description}</p>
                    </div>  
                </div> `;
    return HTML;
}
  
getData(myServices);