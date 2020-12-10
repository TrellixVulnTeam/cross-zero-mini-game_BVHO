document.querySelectorAll('td').forEach(function(e) {
	
	e.onclick = function() {

		e.innerText = 'X';
		e.style.cursor = 'default';

		var arr = [];

		document.querySelectorAll('td').forEach(function(item, i) {
			if (item.innerText == '') {
				arr.push(i);
			}
		});
		/*
		for (var i = 0; i < arr.length; i++) {
			console.log('#' + arr[i]);
		}

		console.log('arr_length: ' + arr.length);
		*/
		var key = Math.floor(Math.random() * (arr.length));

		//console.log('elem: ' + arr[key] + ' i: ' + key);
		
		if (((document.querySelectorAll('td')[0].innerText == 'X') && (document.querySelectorAll('td')[1].innerText == 'X') && (document.querySelectorAll('td')[2].innerText == 'X')) || ((document.querySelectorAll('td')[3].innerText == 'X') && (document.querySelectorAll('td')[4].innerText == 'X') && (document.querySelectorAll('td')[5].innerText == 'X')) || ((document.querySelectorAll('td')[6].innerText == 'X') && (document.querySelectorAll('td')[7].innerText == 'X') && (document.querySelectorAll('td')[8].innerText == 'X')) || ((document.querySelectorAll('td')[0].innerText == 'X') && (document.querySelectorAll('td')[3].innerText == 'X') && (document.querySelectorAll('td')[6].innerText == 'X')) || ((document.querySelectorAll('td')[1].innerText == 'X') && (document.querySelectorAll('td')[4].innerText == 'X') && (document.querySelectorAll('td')[7].innerText == 'X')) || ((document.querySelectorAll('td')[2].innerText == 'X') && (document.querySelectorAll('td')[5].innerText == 'X') && (document.querySelectorAll('td')[8].innerText == 'X')) || ((document.querySelectorAll('td')[0].innerText == 'X') && (document.querySelectorAll('td')[4].innerText == 'X') && (document.querySelectorAll('td')[8].innerText == 'X')) || ((document.querySelectorAll('td')[2].innerText == 'X') && (document.querySelectorAll('td')[4].innerText == 'X') && (document.querySelectorAll('td')[6].innerText == 'X'))) {
			alert('YOU WIN!');
			location.reload();
		}

		function O() {

			document.querySelectorAll('td').forEach(function(item, i) {
				if (i == arr[key]) {
					item.innerText = 'O';
					item.style.cursor = 'default';
				}
			});

			if (((document.querySelectorAll('td')[0].innerText == 'O') && (document.querySelectorAll('td')[1].innerText == 'O') && (document.querySelectorAll('td')[2].innerText == 'O')) || ((document.querySelectorAll('td')[3].innerText == 'O') && (document.querySelectorAll('td')[4].innerText == 'O') && (document.querySelectorAll('td')[5].innerText == 'O')) || ((document.querySelectorAll('td')[6].innerText == 'O') && (document.querySelectorAll('td')[7].innerText == 'O') && (document.querySelectorAll('td')[8].innerText == 'O')) || ((document.querySelectorAll('td')[0].innerText == 'O') && (document.querySelectorAll('td')[3].innerText == 'O') && (document.querySelectorAll('td')[6].innerText == 'O')) || ((document.querySelectorAll('td')[1].innerText == 'O') && (document.querySelectorAll('td')[4].innerText == 'O') && (document.querySelectorAll('td')[7].innerText == 'O')) || ((document.querySelectorAll('td')[2].innerText == 'O') && (document.querySelectorAll('td')[5].innerText == 'O') && (document.querySelectorAll('td')[8].innerText == 'O')) || ((document.querySelectorAll('td')[0].innerText == 'O') && (document.querySelectorAll('td')[4].innerText == 'O') && (document.querySelectorAll('td')[8].innerText == 'O')) || ((document.querySelectorAll('td')[2].innerText == 'O') && (document.querySelectorAll('td')[4].innerText == 'O') && (document.querySelectorAll('td')[6].innerText == 'O'))) {
				alert('YOU LOOSE!');
				location.reload();
			}

		}

		setTimeout(O, 250);


	};

});