//var, const, let - all ways to define variables 

//const - cannot modify once declared
//let - can modify in certain circumstances

const details = document.querySelector('summary');

//toggle stats
document.querySelector('button[data-toggle-btn]').addEventListener('click', (e) => {
  //console.log(details.parentNode);
  if(details.parentNode.getAttribute('open')){
    details.parentNode.removeAttribute('open');
  }
  else{
    details.parentNode.setAttribute('open', 'open');

  }
});

//duplicate
document.querySelector('.duplicate').addEventListener('click', (e) => {
  
  //could also name const item-clone
  const itemClone = document.querySelector('.wrapper').cloneNode(true);
  document.body.appendChild(itemClone);

});

/*
document.querySelector('.wrapper').addEventListener('mouseenter', (e) => {
    alert('haha');
});
*/

//delete
document.querySelector('button[data-delete-btn]').addEventListener('click', function(e) {
  let wantsTo = confirm("are you sure?");
    //if press 'ok' and last card isn't the OG card, then do it

  if (wantsTo) {
    if (document.querySelector('.wrapper:last-child') !== document.querySelector('.wrapper')) {
      document.querySelector('.wrapper:last-child').remove();    
    }
    else {
      alert("borzoi is forever!");
    }
  }
});




//modify heading
//if you use an id instead of a class, it would be document.querySelector('#modify');
document.querySelector('.modify').addEventListener('click', (e) => {  
  let name = prompt('rename the borzoi!');
  if(name) {
    document.querySelector('.wrapper').querySelector('h3').innerText = name;
  }
});

