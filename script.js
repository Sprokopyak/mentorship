function promiseTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  promiseTimeout(3000).then(() => console.log('done'));

async function move(arr){
    var getElem = document.querySelector('div');
     arr.forEach(function(val) {
        var direction = val.direction;
        promiseTimeout(val.delay).then(() => (direction === 'top') ? getElem.style.top = val.px + 'px' :
            getElem.style.left = val.px + 'px'
        )
    })   
  }

  move([{
    direction: 'top',
    elem: 'div',
    px: 100,
    delay: 1000
  }, {
    direction: 'left',
    elem: 'h1',
    px: 200,
    delay: 5000
  }]).then(console.log('done2'));