const skipNavi = document.querySelectorAll('#skipNavi li a');
console.log(skipNavi); //[a, a, a]
for (let el of skipNavi) {
	//focusin이벤트가 발생하면, el인 각각의 요소에 on클래스를 붙인다
	//focusout이벤트가 발생하면 on클래스를 지운다
	el.addEventListener('focusin', () => {
		el.classList.add('on');
	});
	el.addEventListener('focusout', () => {
		el.classList.remove('on');
	});
}

// for (let i = 0; i < skipNavi.length; i++) {
// 	skipNavi[i].addEventListener('focusin', () => {
// 		el.classList.add('on');
// 	});
// 	skipNavi[i].addEventListener('focusout', () => {
// 		el.classList.remove('on');
// 	});
// }
