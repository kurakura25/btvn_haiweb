// 1. Dữ liệu mảng đầu vào
let danhSach = [
    { name: "Hai 500k", money: 9999 },
    { name: "David", money: 456 },
    { name: "Cốp", money: 123 },
    { name: "An Sinh Viên", money: 50 },
    { name: "Bình Crypto", money: 1500 }
];

// 2. THUẬT TOÁN: Tính tổng, trung bình & Phân loại tài chính sinh viên
let tongTien = 0;
let dssvXuLy = danhSach.map(sv => {
    tongTien += sv.money;
    
    // Thuật toán phân loại theo hạn mức tiền
    let xepLoai = "";
    let badgeColor = "";
    
    if (sv.money >= 1000) {
        xepLoai = "Đại gia 🚀";
        badgeColor = "#28a745"; // Xanh lá
    } else if (sv.money >= 100) {
        xepLoai = "Đủ sống ☕";
        badgeColor = "#ffc107"; // Vàng
    } else {
        xepLoai = "Cần trợ cấp 🆘";
        badgeColor = "#dc3545"; // Đỏ
    }

    return {
        name: sv.name,
        money: sv.money,
        xep_loai: xepLoai,
        badge_color: badgeColor
    };
});

let trungBinh = Math.round(tongTien / danhSach.length);

// 3. Xuất kết quả JSON
msg.payload = {
    "ok": 1,
    "msg": "Xử lý thuật toán tài chính thành công!",
    "thong_ke": {
        "tong_so_nguoi": danhSach.length,
        "tong_quy": tongTien,
        "trung_binh": trungBinh,
        "thoi_gian": new Date().toLocaleTimeString("vi-VN")
    },
    "dssv": dssvXuLy
};

return msg;
