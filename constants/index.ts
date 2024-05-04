import { CardProps, listMenuProps } from "@/types";
export const baseUrlImage  = (url:string) =>  `https://api.xaydungtranle.vn/public/${url}`
export const listMenu: listMenuProps[] = [
  {
    title: "trang chủ",
    link: "/",
  },
  {
    title: "giới thiệu",
    link: "/gioi-thieu",
  },
  {
    title: "danh mục dịch vụ",
    link: "/dich-vu",
  },
  {
    title: "Bài viết",
    link: "/cac-bai-viet",
  },
  {
    title: "liên hệ",
    link: "/lien-he",
  },
];
export const newsModel = [
  {
    img: "/post1.jpg",
    title:
      "Vệ sinh chung cư sau xây dựng, bạn cần phải thực hiện những công việc nào đầu tiên?",
    modelCotent:
      "Chung cư khi bàn giao đến khách hàng hay chủ căn hộ nhận nhà cần phải được",
    link: "/ve-sinh-sau-xay-dung",
  },
  {
    img: "/may-hut-bui.jpg",
    title:
      "Lựa chọn dịch vụ vệ sinh văn phòng ưng ý, văn phòng lúc nào cũng luôn như mới",
    modelCotent:
      "Văn phòng là nơi mà chúng ta làm việc, dành rất nhiều thời gian ở đó. Khói bụi, vi",
    link: "/lua-chon-dich-vu-ve-sinh-van-phong",
  },
  {
    img: "/post6.jpg",
    title: "Điểm mạnh của dịch vụ vệ sinh trường học của là gì?",
    modelCotent:
      "Trường học là nơi có diện tích rộng, nhiều chi tiết cần vệ sinh khác nhau. Khi muốn",
    link: "/diem-manh-cua-ve-sinh-truong-hoc",
  },
  {
    img: "/post4.jpg",
    title: "Lý do vì sao bạn nên tìm đến dịch vụ vệ sinh công nghiệp?",
    modelCotent:
      "Đây là lý do đầu tiên giải thích tại sao bạn nên lựa chọn dịch vụ vệ sinh công",
    link: "/ly-do-nen-ve-sinh-cong-nghiep",
  },
  {
    img: "/post5.jpg",
    title: "Dọn dẹp văn phòng, nhà xưởng chưa bao giờ dễ dàng đến thế",
    modelCotent:
      "Dọn dẹp văn phòng, nhà xưởng là những công việc khá tốn thời gian và sức lực.",
    link: "/don-dep-van-phong-nha-xuong",
  },
  {
    img: "/post3.jpg",
    title: "Tất tần tật những điều thú vị về dịch vụ lau kính nhà cao tầng",
    modelCotent:
      "Hầu hết ngày nay các tòa nhà cao tầng đặc biệt trung tâm thương mại, tòa nhà",
    link: "/tat-tan-tat-dich-vu-lau-kinh",
  },
  {
    img: "/post7.jpg",
    title:
      "Bạn cần chuẩn bị những dụng cụ nào khi quyết định tổng vệ sinh nhà cửa?",
    modelCotent:
      "Vệ sinh nhà cửa mỗi ngày là cách tốt nhất để giúp môi trường sống luôn được trong",
    link: "/ban-can-chuan-bi-gi-khi-tong-ve-sinh",
  },
  {
    img: "/post8.jpg",
    title:
      "Giúp việc nhà theo tháng – Sự lựa chọn hoàn hảo của những người bận rộn",
    modelCotent:
      "Công việc quá bận rộn khiến bạn không có nhiều thời gian làm việc nhà, ngôi nhà",
    link: "/giup-viec-nha-theo-thang",
  },
];
export const listBanner = ["/banner.png", "/banner1.png", "/banner2.png"];
export const listAbout = [
  {
    icon: "/lau-kinh-logo.png",
    link: "/dich-vu-ve-sinh-lau-kinh",
    title: "Vệ sinh lau kính",
  },
  {
    icon: "/pin-mat-troi-logo.jpg",
    link: "/ve-sinh-pin-mat-troi",
    title: "Dịch vụ vệ sinh pin mặt trời",
  },
  {
    link: "/ve-sinh-dien-lanh-sua-chua",
    icon: "/may-lanh-logo.png",
    title: "Dịch vụ sửa chữa & vệ sinh thiết bị điện lạnh",
  },
  {
    link: "/ve-sinh-cong-nghiep",
    icon: "/ve-sinh-cong-nghiep.png",
    title: "Vệ sinh công nghiệp",
  },
  {
    link: "/ve-sinh-van-phong",
    icon: "/ve-sinh-van-phong.png",
    title: "Vệ sinh văn phòng",
  },
  {
    link: "/ve-sinh-danh-bong-san",
    icon: "/danh-bong-san.png",
    title: "Vệ sinh đánh bóng sàn",
  },
];
export const listCard: CardProps[] = [
  {
    title: "Vệ sinh công nghiệp ",
    content:
      "Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.",
  },
  {
    title: "Vệ sinh sau xây dựng ",
    content:
      "Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.",
  },
  {
    title: "Vệ sinh nhà phố ",
    content:
      "Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.",
  },
  {
    title: "Vệ sinh trường học",
    content:
      "Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.",
  },
  {
    title: "Vệ sinh căn hộ",
    content:
      "Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.",
  },
  {
    title: "Vệ sinh định kỳ",
    content:
      "Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.",
  },
];
export const listService = [
  {
    img: "/lau-kinh-logo.png",
    title: "Vệ sinh lau kính",
    content:
      "Đây là dịch vụ vệ sinh dành cho các tòa nhà, khu đô thị, văn phòng, hộ gia đình sau khi xây dựng. Người giúp việc chuyên nghiệp, đáp ứng tiêu chuẩn Singapore, có tinh thần trách nhiệm cao.",
  },
  {
    img: "/about5.png",
    title: "Vệ sinh công nghiệp",
    content: 
      "Dịch vụ vệ sinh công nghiệp của chúng tôi giúp duy trì môi trường làm việc sạch sẽ và an toàn cho doanh nghiệp của bạn. Chúng tôi cung cấp các giải pháp vệ sinh chuyên nghiệp cho cơ sở sản xuất, nhà máy, văn phòng và các khu vực công cộng. Với đội ngũ nhân viên có kinh nghiệm, chúng tôi đảm bảo vệ sinh toàn diện, từ vệ sinh sàn, lau bụi, tẩy rửa đến xử lý chất thải.",
  },
  {
    img: "/about4.png",
    title: "Đánh bóng sàn",
    content:
      "Dịch vụ đánh bóng sàn của chúng tôi giúp mang lại sự lộng lẫy và bề mặt sáng bóng cho sàn nhà của bạn. Chúng tôi sử dụng các công nghệ và chất liệu chuyên dụng để loại bỏ vết xước, mảng bám và bụi bẩn trên sàn. Kết quả là một sàn nhà sạch sẽ, mịn màng và tạo cảm giác sang trọng cho không gian sống hoặc làm việc của bạn.",
  },
  {
    img: "/may-lanh-logo.png",
    title: "Sữa chữa bảo trì điện lạnh",
    content:
      "Dịch vụ sửa chữa bảo trì điện lạnh của chúng tôi giúp duy trì hiệu suất và độ tin cậy của hệ thống điều hòa không khí và thiết bị điện lạnh. Chúng tôi có đội ngũ kỹ thuật viên chuyên nghiệp và được trang bị kiến thức sâu về các loại máy lạnh và hệ thống điện lạnh khác nhau. Chúng tôi cung cấp các dịch vụ từ kiểm tra, vệ sinh, sửa chữa đến bảo trì định kỳ, đảm bảo hệ thống của bạn hoạt động ổn định và tiết kiệm năng lượng.",
  },
];
export const contentService = [
  {
    link: "/dich-vu-ve-sinh-lau-kinh",
    title: "Dịch vụ vệ sinh lau kính",
  },
  {
    link: "/ve-sinh-pin-mat-troi",
    title: "Dịch vụ vệ sinh pin mặt trời",
  },
  {
    link: "/ve-sinh-dien-lanh-sua-chua",
    title: "Dịch vụ sửa chữa & vệ sinh thiết bị điện lạnh",
  },
  {
    link: "/ve-sinh-van-phong",
    title: "Dịch vụ vệ sinh văn phòng ",
  },
  {
    link: "/ve-sinh-cong-nghiep",
    title: "Dịch vụ vệ sinh công nghiệp",
  },
  {
    link: "/ve-sinh-danh-bong-san",
    title: "Dịch vụ đánh bóng sàn",
  },
];
export const phoneNumber = "0393 500 993";
export const email = 'ks.lethanhviet@gmail.com'

