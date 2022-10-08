let scores = prompt("Nhập điểm");

if( scores >=1 && scores <=4){
    alert("Là học sinh yếu");
}
else if (scores >=5 && scores<=6){
    alert("Là học sinh trung bình");
}
else if (scores >=7 && scores <=8){
    alert("Là học sinh khác");
}
else if(scores>=9 && scores<=10){
    alert("Là học sinh giỏi");
}
else
{
    alert("Ban nhập chưa đúng ");
}