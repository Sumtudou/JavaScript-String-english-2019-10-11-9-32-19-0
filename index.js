    // Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
    var name = 'hello';
    // TODO write your code here...
    var up = name.toUpperCase();
    document.write(up);
    document.write("<br/>");  //换行，好看一点

    // Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
    var sentence = 'good afternoon, mr mike.';
    //TODO write your code here...
    var array = [];
    array = sentence.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].replace(array[i][0], array[i][0].toUpperCase());
    }
    for (let i = 0; i < array.length; i++) {
        if (i != 0) {
            document.write(" ");
        }
        document.write(array[i]);
    }
    document.write("<br/>");  //换行，好看一点

    // Complete the following procedure to extract the amount of money variable, output: 20.
    var money = '￥20';
    reg = /^[0-9]+.?[0-9]*$/;
    for(let i=0;i<money.length;i++){
        if(reg.test(money[i])){
            document.write(money[i]);
        }
    }
    //TODO write your code here...