var scrollCn = function(quantity)
{
  var scrollTop = (window.scrollY || document.scrollTop)  - (document.clientTop || 0);
  
  var size = 100 + ((scrollTop / quantity) || 0);
  
  if(size >= 1000){ 
    size = 1000
        };

  document.querySelector('img').setAttribute('style', 'width: '+size+'px;');


};
window.addEventListener('scroll', function(){ scrollCn(5)});
