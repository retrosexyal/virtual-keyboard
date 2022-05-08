let textArea = document.createElement('textarea');
document.body.append(textArea);
document.querySelector('textarea').focus();
function insertText(text) {
      let txtarea = document.querySelector('textarea');
      let start = txtarea.selectionStart;
      let end = txtarea.selectionEnd;
      let finText = txtarea.value.substring(0, start) + text + txtarea.value.substring(end);
      txtarea.value = finText;
      txtarea.focus();
      txtarea.selectionEnd = ( start == end )? (end + text.length) : end ;
  }
function createKey(keyText){
    this.keyText = keyText;
    if (keyText == 'Backspace' || keyText == 'CapsLock' || keyText == 'Enter' || keyText == 'Shift'){
        document.body.insertAdjacentHTML(
            'beforeend',
            `<div class='cast'>${keyText}</div>`
        );
    } else if (keyText == ' '){
        document.body.insertAdjacentHTML(
            'beforeend',
            `<div class='space'>${keyText}</div>`
        );
    }    else document.body.insertAdjacentHTML(
        'beforeend',
        `<div>${keyText}</div>`
    );
}

let arrKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control' , '←', '↑', '→' , '↓'];
let arrKeysRus = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control' , '←', '↑', '→' , '↓'];
for (let i = 0; i<arrKeys.length; i++){
    if (i==14) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<p style='clear: both; width: 100%; margin:0;'></p>`
            );
    }
    if (i==28) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<p style='clear: both; width: 100%; margin:0;'></p>`
            );
    }
    if (i==41) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<p style='clear: both; width: 100%; margin:0;'></p>`
            );  
    }
    if (i==53) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<p style='clear: both; width: 100%; margin:0;'></p>`
            );
    }
    createKey(arrKeys[i]);
}

let keyDivArr = document.querySelectorAll('div');
    document.addEventListener('mousedown', (e)=>{
        for (let keyValue of keyDivArr){
            if (e.target.innerHTML == keyValue.innerHTML){
                switch (e.target.innerHTML){
                                case 'Tab':
                                    keyValue.classList.add('active');
                                    insertText(`  `);
                                    break; 
                                case 'CapsLock':
                                    keyValue.classList.toggle('active');
                                    for (let keyValue of keyDivArr){
                                        keyValue.classList.toggle('capitalize');
                                    }
                                    break;
                                case 'Shift':
                                        keyValue.classList.add('active');
                                        for (let keyValue of keyDivArr){
                                            keyValue.classList.add('capitalize');
                                        }
                                        break;
                                case 'Enter':
                                        keyValue.classList.add('active');
                                        insertText('\n');
                                        break;      
                                case keyValue.innerHTML:
                                    keyValue.classList.add('active');
                                    if (keyValue.classList.contains('capitalize')){
                                        let capitalizeLetter = e.target.innerHTML.toUpperCase();
                                        insertText(`${capitalizeLetter}`);
                                    } else insertText(`${e.target.innerHTML}`);                                    
                                    break;   
                            }
            }
        }
    })
    document.addEventListener('mouseup', (e)=>{
        for (let keyValue of keyDivArr){
            if (e.target.innerHTML == keyValue.innerHTML && e.target.innerHTML != 'CapsLock'){
                document.querySelector('textarea').focus();
                keyValue.classList.remove('active');
            }
        }
        })

        document.addEventListener('keydown', (e)=>{
            for (let keyValue of keyDivArr){
                if (e.key == 'CapsLock' && e.key == keyValue.innerHTML){
                    keyValue.classList.toggle('active');
                    for (let keyValueCaps of keyDivArr){
                    keyValueCaps.classList.toggle('capitalize');
                }
                }
                if (e.key == keyValue.innerHTML && e.key != 'CapsLock'){
                    keyValue.classList.add('active');
                }
                if (e.key == 'Shift'){
                    keyValue.classList.add('capitalize');
                }     
            }
            })  
        
        document.addEventListener('keyup', (e)=>{
            for (let keyValue of keyDivArr){
                if (e.key == keyValue.innerHTML && e.key != 'CapsLock' ){
                    keyValue.classList.remove('active');
                }
                if (e.key == 'Shift'){
                    keyValue.classList.remove('capitalize');
                }
            }
            })  
    