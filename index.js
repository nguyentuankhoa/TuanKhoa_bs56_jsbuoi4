// bài 1: cho người dùng nhập vào 3 số, viết theo thứ tự sắp xếp tăng dần
/**
 * input : cho người dùng nhập vào 3 Số
 * bước xử lí: sắp xêp các số theo thứ tự tăng dần
 * output: in ra dao diện
 */         

function sapXep () {
    var soNhat = document.getElementById("so-nhat").value * 1;
    var soHai = document.getElementById("so-hai").value * 1;
    var soBa = document.getElementById("so-ba").value * 1;

    var sapXepTang = [soNhat,soHai,soBa].sort();
    document.getElementById("sapXepTangDan").innerHTML = sapXepTang
}

// bài 2: viết chương trình js chào hỏi các thành viên trong gia đình.
/**
 * input: cho hiển thị các thành viên trong gia đình 
 * bước xử lí: viết câu chào hợp lí để chào các thành viên trong gia đình 
 * ouput: in ra kết quả câu chào và người trong gia đình
 */
var giaDinh = ["Bố", "Mẹ", "Anh Trai", "Em Gái"];
function chaoHoiThanhViên () {
    var user = document.getElementById("ten-gd").value;

    if (giaDinh.includes(user)) {
        var xinChao = "Xin chào " + user + " , chúc một ngày thật tốt lành";
    } else {
        var xinChao = "xin lỗi, không có người"
    }
    document.getElementById("ketQua2").innerHTML = xinChao;
}


// bài 3: cho 3 số nguyên. viết chương trình xuất ra bao nhiêu số lẽ và chẵn
/**
 * input : cho 3 số nguyên 
 * bước xử lí: viết chuyong trình số chẵn và lẻ
 * output: xuất ra bao nhiêu số chẵn lẻ
 */
function sapXepBaoNhieuSoChanLe () {
    var so1 = document.getElementById("so-1").value *1;
    var so2 = document.getElementById("so-2").value *1;
    var so3 = document.getElementById("so-3").value *1;

    var soChan = 0;
    var soLe = 0;

    if (so1 % 2 ===0) {
        soChan ++;
    } else {
        soLe ++;
    }
    if (so2 % 2 ===0) {
        soChan ++;
    } else {
        soLe ++;
    }
    if (so3 % 2 ===0) {
        soChan ++;
    } else {
        soLe ++;
    }

    document.getElementById("ketQuaChan").innerHTML = "Số Chẵn " + soChan;
    document.getElementById("ketQuaLe").innerHTML = "Số Lẻ" + soLe;
}

// bài 4 : >viết chương trình nhập vào 3 cạnh tam giác. hay cho biết là tam giác gì.
/**
 * input: cho nhập vào 3 cạnh tam giác\
 * bước xử lí: tính và so sánh các cạnh với nhau
 * output: dom ra giao điện để biết là tam giác gì
 */
function canhTamGiac () {
    var canh1 = document.getElementById("canh-1").value *1;
    var canh2 = document.getElementById("canh-2").value *1;
    var canh3 = document.getElementById("canh-3").value *1;

    var tamGiacGi = ""; 
    if (canh1 === canh2 && canh2 === canh3) {
        tamGiacGi = " Tam giác đều";
    } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
        tamGiacGi = " Tam giác cân";
    } else if (canh1*canh1 === canh2*canh2 + canh3*canh3 || canh2*canh2 === canh1*canh1 + canh3*canh3|| canh3*canh3 === canh1*canh1 + canh2*canh2 ) {
        tamGiacGi = "Tam giác vuông";
    } else {
        tamGiacGi = "Tam giác thường"
    }
    document.getElementById("ketQua4").innerHTML = tamGiacGi;
}