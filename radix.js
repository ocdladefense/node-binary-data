

if(true) {
    export BinaryFile;
}


/**
 * @class BinaryFile
 * 
 * @references
 *  - https://apple.stackexchange.com/questions/364789/why-isnt-a-binary-file-shown-as-0s-and-1s
 *  - https://www.w3schools.com/charsets/ref_utf_basic_latin.asp
 *  - 
 */


const BinaryFile = (function(){


const BINARY_0 = 0b0;

const BINARY_1 = 0b1;

const BINARY_2 = 0b10;

const BINARY_3 = 0b11;

const BINARY_4 = 0b100;




// base(0b101,10);)

function base(num, radix) {
    return num.toString(radix);
}


function download() {
    let binary = createBinary();

    return getObjectUrl(storage);
}


function createBinary() {
    let storage = new Int8Array(1);
    storage[0] = 0b110101;

    return storage;
}


function getObjectUrl(storage) {

    let filename = "hello-world.bin";
    // let file = new Blob(storage, {type:"application/octet-stream"});
    var blob = new Blob([storage], {type: 'application/octet-stream'});

    return URL.createObjectURL(blob);
}


function saveToFile(storage) {

    let filename = "hello-world.bin";
    let blob = new Blob(storage, {type:"application/octet-stream"});
    var file = new File([storage], {type: 'application/octet-stream'});

    return URL.createObjectURL(blob);
}

    // console.log(url);
    // new TextDecoder().decode(storage);

    return function(){};

})();


