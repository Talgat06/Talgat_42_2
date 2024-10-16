// 1
//     function number (str) {
//         const regExp = /^[0-9]+$/;
//         return regExp.test(str);
//     }
//     console.log(number("012345698745665"));
//     console.log(number("Alex548948595"));

// 5
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'test.json');
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.send();
//
//     xhr.onload = () => {
//         console.log(JSON.parse(xhr.responseText))
//     }

// 2
//     let second = 0;
//     function interval() {
//         setInterval(() => {
//             second++
//             console.log(second + " Прошла секунда");
//         }, 1000);
//     }
//
//     interval();

// 3
//     let count = 1;
//
//     const interval = setInterval(() => {
//         console.log(count);
//         count++;
//
//         if (count > 10) {
//             clearInterval(interval);
//         }
//     }, 1000);

// 4
    const block = document.getElementById('backgroundBlock');

    block.addEventListener('click', function() {
        block.classList.toggle('bg-color');
    });
