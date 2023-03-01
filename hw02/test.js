document.write('<h1>九九乘法表</h1>');
document.write('<table class="table">');
document.write('<tr><td>');
for (i = 1; i < 2; i++) {
    for (j = 1; j < 10; j++) {
        console.log(i * j)


        document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

    }
    document.write('<td>');
    for (i = 2; i < 3; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');
    document.write('<td>');
    for (i = 3; i < 4; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');
    document.write('<td>');
    for (i = 4; i < 5; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');
    document.write('<td>');
    for (i = 5; i < 6; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');


}
document.write('</tr>');
//** */
document.write('<table class="table">');
document.write('<tr><td>');
for (i = 6; i < 7; i++) {
    for (j = 1; j < 10; j++) {
        console.log(i * j)


        document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

    }
    document.write('<td>');
    for (i = 7; i < 8; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');
    document.write('<td>');
    for (i = 8; i < 9; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');
    
   
    document.write('<td>');
    for (i = 9; i < 10; i++) {
        for (j = 1; j < 10; j++) {
            console.log(i * j)


            document.write('<li style="background:' + '">' + i + "x" + j + "=" + i * j);

        }


    }
    document.write('</td>');


}

document.write('</table>');