const buttoncochertout = document.querySelector('#buttoncochertout');
const buttondecochertout = document.querySelector('#buttondecochertout');
const checkbox = document.querySelectorAll('input[type=checkbox]');

buttoncochertout.addEventListener('click', (e) => {
    
    checkbox.forEach( element => {
		element.checked = true
 	});	
})

buttondecochertout.addEventListener('click', (e) => {
    
    checkbox.forEach( element => {
		element.checked = false
 	});	
})



