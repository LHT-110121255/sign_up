function kiemtra() {
    const fullName = document.getElementById('user').value;
    const mail = document.getElementById('mail').value;
    const matkhau = document.getElementById('pass').value;
    const matkhau2 = document.getElementById('re_pass').value;
    const check_tvu = document.getElementById('check_tvu');
    
    function checkNext(input, mess) {
        var ans = true;
        if(input == "") {
            alert(mess);
            ans = false;    
        }
        return ans;
    }
    function checkMail(e) {
        var ans = true;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(e.value.match(mailformat)) {
            alert("Nhập sai email, mời nhập lại")
            return false;
        }
        return ans;
    }
    function checkPass(pass, re_pass) {
        if(pass.trim() === re_pass.trim()) {
            return true;
        }
        alert("Mật khẩu không trùng khớp");
        return false;
    }
    checkNext(fullName, "Không bỏ trống họ tên");
    checkNext(matkhau, "Không bỏ trống mật khẩu");
    checkNext(matkhau2, "Không bỏ trống ô này");
    checkPass(matkhau,matkhau2);
    
    if(check_tvu.checked === false) {
        alert("Bạn không phải thành viên TVU")
        return false;
    }
}