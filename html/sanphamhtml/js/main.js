$(document).ready(() => {
    $("#hoTen").blur(() => {
        var regex = /^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
        var hoTenVal = $("#hoTen").val().trim();
        var result = regex.test(hoTenVal);
        if (!result) {
            $('.option-hoTen').text("Họ tên không được bỏ trống, họ tên phải từ 2 từ trở lên, phải viết hoa.");
        } else {
            $('.option-hoTen').text("Đúng");
        }
    })
   
    $("#email").blur(() => {
        var regex = /^[A-Z][a-z]+\s[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
        var hoTenVal = $("#email").val().trim();
        var result = regex.test(hoTenVal);
        if (!result) {
            $('.option-email').text("Email không được bỏ trống, họ tên phải từ 2 từ trở lên, phải viết hoa.");
        } else {
            $('.option-email').text("Đúng");
        }
    })
    $("#sdt").blur(() => {
        var regex = /^(0[0-9]{2,3})-\d{3}-\d{3}$/;
        var sdtVal = $("#sdt").val().trim();
        if (sdtVal === "") {
            $('.option-sdt').text("Số điện thoại không được bỏ trống, nhập theo định dạng sau: 0909-YYY-YYY, trong đó Y là các ký tự số.");
        } else {
            var result = regex.test(sdtVal);
            if (!result) {
                $('.option-sdt').text("Số điện thoại không hợp lệ, nhập theo định dạng sau: 0909-YYY-YYY, trong đó Y là các ký tự số.");
            } else {
                $('.option-sdt').text("Đúng");
            }
        }
    });
        let count = 1;

 $("form").submit((e) => {
        e.preventDefault();

        let hoTen = $("#hoTen").val().trim();
        let sdt = $("#sdt").val().trim();
        let email = $("#email").val().trim();

        if (!isValid(hoTen, email,sdt)) {
            return;
        }
        $("tbody").append(`
            <tr>
                <td>${count}</td>
                <td>${hoTen}</td>
                <td>${email}</td>
                <td>${sdt}</td>
            </tr>`);
        count++;

        $("#myModal").modal("hide");
    });

    function isValid(hoTen, email,sdt) {
        if (hoTen === "") {
            alert("Vui lòng nhập họ và tên.");
            return false;
        }
        return true;
    }
})

