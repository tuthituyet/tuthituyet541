let numberInput = 10;
s = 0;
for (i = 1; i < numberInput; i++)
{
    if (i % 2 !=0)
    {
        document.writeln(i + " ");  
        s += i; 
    } 
}
document.writeln("<br>Tổng các số lẻ là :" + s)