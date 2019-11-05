let div = document.createElement('div');
div.setAttribute('class', 'keyboard'); 
document.body.appendChild(div);

const arrButtonsRus = ['ё','1','2','3','4','5','6','7','8','9','0','-_','=+','backspace','tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ',"\/",'del','caps lock','ф','ы','в','а','п','р','о','л','д','ж','э','enter','shift','|','я','ч','с','м','и','т','ь','б','ю','.','top','shift','ctrl','win','alt','spase','alt','ctrl','left','bottom','right'];
const arrButtonsEng = ['`','1','2','3','4','5','6','7','8','9','0','-_','=+','backspace','tab','q','w','e','r','t','y','u','i','o','p','[',']',"\/",'del','caps lock','a','s','d','f','g','h','j','k','l',';','"','enter','shift','|','z','x','c','v','b','n','m',',','.','/','top','shift','ctrl','win','alt','spase','alt','ctrl','left','bottom','right'];

createVirtualButtonElem();

function createVirtualButtonElem(){
    for (let i = 0; i<arrButtonsRus.length; i++){
    let div = document.createElement('div');
    div.setAttribute('class' , 'key');
    document.getElementsByClassName('keyboard')[0].appendChild(div);
    div.innerHTML = arrButtonsRus[i];
    div.id = arrButtonsRus[i].charCodeAt();
    };    
};


