console.log("1. Đồng bộ - Bắt đầu");

setTimeout(() => {
    console.log("2. Macrotask - setTimeout 1");
    Promise.resolve().then(() => {
        console.log("3. Microtask phát sinh trong Macrotask");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("4. Microtask - Promise 1");
}).then(() => {
    console.log("5. Microtask - Promise 2");
});

setTimeout(() => {
    console.log("6. Macrotask - setTimeout 2");
}, 0);

console.log("7. Đồng bộ - Kết thúc");

///// Tránh làm đóng băng giao diện (UI Blocking)

function heavyCalculation(item: number) {
    return Math.sqrt(item) * Math.sin(item);
}

function processDataSmooth(data:number[]) {
    const chunkSize = 50000; // Kích thước mỗi khối nhỏ
    let index = 0;
    let totalResult = 0;

    console.log("Bắt đầu xử lý mượt mà...");

    function processChunk() {
        // Tính toán vị trí kết thúc của khối hiện tại
        const end = Math.min(index + chunkSize, data.length);

        // Xử lý một khối nhỏ (Chạy đồng bộ rất nhanh, mất dưới 16ms nên không gây giật lag)
        for (let i = index; i < end; i++) {
            totalResult += heavyCalculation(data[i]);
        }

        index = end; // Cập nhật vị trí cho lần chạy sau

        // Kiểm tra xem còn dữ liệu để xử lý tiếp không
        if (index < data.length) {
            // ĐẦU TIÊN: Đẩy phần việc tiếp theo vào Macrotask Queue
            // Việc này nhường sân cho trình duyệt Render giao diện ở giữa các hiệp
            setTimeout(processChunk, 0);
        } else {
            console.log("Xử lý HOÀN TOÀN xong! Kết quả cuối cùng:", totalResult);
        }
    }

    // Kích hoạt khối đầu tiên
    processChunk();
}

// Chạy thử mảng 10 triệu phần tử -> Trang web vẫn cuộn và click mượt mà!
const bigArray = Array.from({ length: 10000000 }, (_, i) => i);
processDataSmooth(bigArray);


console.log("Rendering..."); 