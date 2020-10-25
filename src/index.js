module.exports = function check(str, bracketsConfig) {
    let brC = bracketsConfig,
        arr = [];
    if (str.length % 2 !== 0) {
        return false;
    } else {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < brC.length; j++) {
                if (
                    (brC[j][0] === brC[j][1]) &&
                    (str[i] === brC[j][1])
                ) {
                    if (arr[arr.length - 1] === str[i]) {
                        arr.pop();
                    } else {
                        arr.push(str[i]);
                    }
                } else {
                    if (str[i] === brC[j][0]) {
                        arr.push(str[i]);
                    }
                    if ((str[i] === brC[j][1]) &&
                        (arr[arr.length - 1] === brC[j][0])) {
                        arr.pop();
                    }
                }
            }
        }
    }
    if (arr.length === 0) {
        return true;
    } else {
        return false;
    }
};

//Способо №2 (не работает)


//     // Проходимся по строке, проверяя каждый ее символ 
//     for (let i = 0; i < chars.length; i++) {
//         openIndex = open.indexOf(chars[i]);
//         if (openIndex !== -1) {
//             // Нашли открывающую скобку. Помещаем ее в array
//             arr.push(openIndex);
//             // continue;
//         }

//         closeIndex = close.indexOf(chars[i]);
//         if (closeIndex !== -1) {
//             // Нашли закрывающую скобку. Проверяем ее соответствие открывающей
//             openIndex = arr.pop();
//             if (closeIndex !== openIndex) {
//                 return false;
//             }
//         }
//     }
//     // Проверяем дисбаланс открытых/закрытых скобок
//     if (arr.length !== 0) {
//         return false;
//     }

//     return true;
// }

//Способ №3 (не работает)
// let acc = 0;
// // openIndex = open.indexOf(chars[i]);
// // closeIndex = close.indexOf(chars[i]);
// for (let i = str.length - 1; i >= 0; i--) {
//     if ((str[0] === close[i]) || (str[str.length - 1] === open[i])) {
//         return false;
//     } else if ((acc === 0) && (str[i] === open[i])) {
//         return false;
//     } else if ((acc === 0) && (str[i] === close[i])) {
//         return false;
//     } else if (str[i] === close[i]) {
//         acc += 1;
//     } else if (str[i] === open[i]) {
//         acc -= 1;
//     }
// }
// if (acc === 0) {
//     return true;
// } else if (acc != 0) {
//     return false;
// }
// }