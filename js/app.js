let btns = document.querySelectorAll('.btn');
let items = document.querySelectorAll('.store-item');

btns.forEach(function (button) {
	button.addEventListener('click', function (event) {
		event.preventDefault();
		if (event.target.hasAttribute('data-filter')) {
			//All
			if (event.target.dataset.filter === 'all') {
				items.forEach(function (item) {
					item.style.display = 'block'
				})
			}
			//CAKES
			if (event.target.dataset.filter === 'cakes') {
				items.forEach(function (item) {
					if (item.dataset.item === 'cakes') {
						item.style.display = 'block'
					} else {
						item.style.display = 'none'
					}
				})
			}
			//CUPCAKES
			if (event.target.dataset.filter === 'cupcakes') {
				items.forEach(function (item) {
					if (item.dataset.item === 'cupcakes') {
						item.style.display = 'block'
					} else {
						item.style.display = 'none'
					}
				})
			}
			//SWEETS
			if (event.target.dataset.filter === 'sweets') {
				items.forEach(function (item) {
					if (item.dataset.item === 'sweets') {
						item.style.display = 'block'
					} else {
						item.style.display = 'none'
					}
				})
			}
			//DOUGHNUTS
			if (event.target.dataset.filter === 'doughnuts') {
				items.forEach(function (item) {
					if (item.dataset.item === 'dougnuts') {
						item.style.display = 'block'
					} else {
						item.style.display = 'none'
					}
				})
			}
		}
	})
})