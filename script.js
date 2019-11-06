let div = document.createElement('div');
div.setAttribute('class', 'keyboard'); 
document.body.appendChild(div);

let alphabet = {
    81: ['q','й'],
    87: ['w','ц'],
    69: ['e','у'],
    82: ['r','к'],
    84: ['t','е'],
    89: ['y','н'],
    85: ['u','г'],
    73: ['i','ш'],
    79: ['o','щ'],
    80: ['p','з'],
    219: ['[','х'],
    221: [']','ъ'],
    220: ['\\','\\'],
    65: ['a','ф'],
    83: ['s','ы'],
    68: ['d','в'],
    70: ['f','а'],
    71: ['g','п'],
    72: ['h','р'],
    74: ['j','о'],
    75: ['k','л'],
    76: ['l','д'],
    186: [';','ж'],
    222: ['\'','э'],
    90: ['z','я'],
    88: ['x','ч'],
    67: ['c','с'],
    86: ['v','м'],
    66: ['b','и'],
    78: ['n','т'],
    77: ['m','ь'],
    188: [',','б'],
    190: ['.','ю'],
    191: ['/','.'],
    49: ['1','1'],
    50: ['2','2'],
    51: ['3','3'],
    52: ['4','4'],
    53: ['5','5'],
    54: ['6','6'],
    55: ['7','7'],
    56: ['8','8'],
    57: ['9','9'],
    48: ['0','0'],
    189: ['-','-'],
    187: ['=','='],
    8: ['Backspace','Backspace'],
    192: ['`','ё'],
    9: ['Tab','Tab'],
    20: ['CapsLock','CapsLock'],
    16: ['Shift','Shift'],
    17: ['Control','Control'],
    18: ['Alt','Alt']
};

let languageNow = true;//true - rus

document.addEventListener('keyup',function(event){
    let currentButton = document.getElementById(event.keyCode);
    currentButton.style.backgroundColor = 'salmon';
    if (event.keyCode == 18){
        if(event.shiftKey){ 
            languageNow = !languageNow;
            createVirtualButtons();
        }
    }   
    if (event.keyCode == 16){
        if(event.altKey){
            languageNow = !languageNow;
            createVirtualButtons();
        }
    }
})

document.addEventListener('keydown', function(event) {
    let currentButton = document.getElementById(event.keyCode);
    currentButton.style.backgroundColor = "#bebebe";     
});  

createVirtualButtons();

function createVirtualButtons(){
    let keyboardElem = document.getElementsByClassName('keyboard')[0];
    keyboardElem.innerHTML = " "
    for (let i in alphabet){
        let div = document.createElement('div');
        div.setAttribute('class' , 'key');
        keyboardElem.appendChild(div);
        if (languageNow == true){
            div.innerHTML = alphabet[i][1];
        }
        else {
            div.innerHTML = alphabet[i][0];
        }        
        div.id = i;    
        
    };    
};

