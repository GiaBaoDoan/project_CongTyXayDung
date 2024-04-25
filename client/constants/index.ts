import { CardProps, listMenuProps } from "@/types"
export const userData = () => {
    if (typeof window !== undefined) {
      return JSON.parse(localStorage.getItem("user") || '""');
    }
  };
export const listMenu :listMenuProps[] = [
    {
        title : 'trang chủ',
        link : '/'
    },
    {
        title : 'giới thiệu',
        link : '/gioi-thieu'
    },
    {
        title : 'danh mục dịch vụ',
        link : '/dich-vu',
        
    },
    {
        title : 'tin tức',
        link : '/tin-tuc'
    },
    {
        title : 'liên hệ',
        link : '/lien-he'
    },
    
    
]
export const newsModel = [
    {
        img: '/post1.jpg',
        title :'Vệ sinh chung cư sau xây dựng, bạn cần phải thực hiện những công việc nào đầu tiên?',
        modelCotent : 'Chung cư khi bàn giao đến khách hàng hay chủ căn hộ nhận nhà cần phải được',
        link : '/ve-sinh-sau-xay-dung'
    },
    {
        img: '/may-hut-bui.jpg',
        title :'Lựa chọn dịch vụ vệ sinh văn phòng ưng ý, văn phòng lúc nào cũng luôn như mới',
        modelCotent : 'Văn phòng là nơi mà chúng ta làm việc, dành rất nhiều thời gian ở đó. Khói bụi, vi',
        link :'/lua-chon-dich-vu-ve-sinh-van-phong'
    },
    {
        img: '/post6.jpg',
        title :'Điểm mạnh của dịch vụ vệ sinh trường học của là gì?',
        modelCotent : 'Trường học là nơi có diện tích rộng, nhiều chi tiết cần vệ sinh khác nhau. Khi muốn',
        link : "/diem-manh-cua-ve-sinh-truong-hoc"
    },
    {
        img: '/post4.jpg',
        title :'Lý do vì sao bạn nên tìm đến dịch vụ vệ sinh công nghiệp?',
        modelCotent : 'Đây là lý do đầu tiên giải thích tại sao bạn nên lựa chọn dịch vụ vệ sinh công',
        link  :"/ly-do-nen-ve-sinh-cong-nghiep"
    },
    {
        img: '/post5.jpg',
        title :'Dọn dẹp văn phòng, nhà xưởng chưa bao giờ dễ dàng đến thế',
        modelCotent : 'Dọn dẹp văn phòng, nhà xưởng là những công việc khá tốn thời gian và sức lực.',
        link : "/don-dep-van-phong-nha-xuong"
    },
    {
        img: '/post3.jpg',
        title :'Tất tần tật những điều thú vị về dịch vụ lau kính nhà cao tầng',
        modelCotent : 'Hầu hết ngày nay các tòa nhà cao tầng đặc biệt trung tâm thương mại, tòa nhà',
        link : "/tat-tan-tat-dich-vu-lau-kinh"
    },
    {
        img: '/post7.jpg',
        title :'Bạn cần chuẩn bị những dụng cụ nào khi quyết định tổng vệ sinh nhà cửa?',
        modelCotent : 'Vệ sinh nhà cửa mỗi ngày là cách tốt nhất để giúp môi trường sống luôn được trong',
        link : "/ban-can-chuan-bi-gi-khi-tong-ve-sinh"
    },
    {
        img: '/post8.jpg',
        title :'Giúp việc nhà theo tháng – Sự lựa chọn hoàn hảo của những người bận rộn',
        modelCotent : 'Công việc quá bận rộn khiến bạn không có nhiều thời gian làm việc nhà, ngôi nhà',
        link : "/giup-viec-nha-theo-thang"
    },
   
]
export const listBanner = ['/banner.png','/banner1.png','/banner2.png']
export const listAbout   = [
    {
        icon : "/about6.png",
        link: "/dich-vu-ve-sinh-lau-kinh",
        title : "Vệ sinh lau kính",
    },
    {
        icon : "/about2.png",
        link: "/ve-sinh-pin-mat-troi",
        title: "Dịch vụ vệ sinh pin mặt trời",

    },
    {   link: "/ve-sinh-sua-chua-ve-sinh-thiet-bi-dien-lanh",
        icon : "/about3.png",
        title: "Dịch vụ sửa chữa & vệ sinh thiết bị điện lạnh",

    },
    {  
        link: "/ve-sinh-cong-nghiep",
        icon : "/about4.png",
        title : "Vệ sinh bệnh viện",

    },
    {    
        link: "/ve-sinh-cong-nghiep",
        icon : "/about5.png",
        title : "Vệ sinh văn phòng",

    },
    {  
        link: "/ve-sinh-danh-bong-san",
        icon : "/about1.png",
        title : "Vệ sinh theo giờ",

    },
  

]
export const listCard : CardProps[]= [
    {
        title :'Vệ sinh công nghiệp ',
        content : 'Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.'
    },
    {
        title :'Vệ sinh sau xây dựng ',
        content : 'Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.'
    },
    {
        title :'Vệ sinh nhà phố ',
        content : 'Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.'
    },
    {
        title :'Vệ sinh trường học',
        content : 'Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.'
    },
    {
        title :'Vệ sinh căn hộ',
        content : 'Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.'
    },
    {
        title :'Vệ sinh định kỳ',
        content : 'Vệ sinh công nghiệp là dịch vụ tổng vệ sinh, làm sạch sâu các vết bẩn bằng máy móc, thiết bị, dụng cụ hiện đại, hóa chất chuyên dụng cùng những phương pháp tối ưu, những quy trình xử lý hiện đại. Thường phù hợp với các cơ sở như trung tâm thương mại, tòa nhà cao tầng, cơ sở sản xuất, xí nghiệp, nhà máy, chung cư, trường học, bệnh viện, và các khu công cộng khác. Tiến Phát chuyên cung cấp dịch vụ vệ sinh công nghiệp uy tín, với đội ngũ nhân viên dày dặn về tay nghề được đào tạo chuyên nghiệp và hệ thống máy móc hiện đại, công ty chúng tôi cam kết cung cấp dịch vụ vệ sinh công nghiệp với chất lượng cao nhất.'
    },
    
]
export const listService =[
    {
        img:'/about1.png',
        title :'Giúp việc theo giờ',
        content :"Giúp việc nhà theo giờ gồm các công việc như nấu ăn, dọn dẹp nhà cửa, rửa bát, hỗ trợ chăm sóc trẻ… Khung giờ làm sẽ tùy theo khách hàng đăng ký khi phát sinh nhu cầu."
    },
    {
        img:'/about5.png',
        title :'Vệ sinh công nghiệp',
        content :"Đây là dịch vụ vệ sinh dành cho các tòa nhà, khu đô thị, văn phòng, hộ gia đình sau khi xây dựng. Người giúp việc chuyên nghiệp, đáp ứng tiêu chuẩn Singapore, có tinh thần trách nhiệm cao."
    },
    {
        img:'/about6.png',
        title :'Giúp việc theo ngày',
        content :"Giúp việc nhà 8 – 9 tiếng từ sáng đến tối, không ở lại, khung giờ tùy theo khách hàng đăng ký. Các công việc sẽ bao gồm nấu ăn, rửa bát, dọn dẹp, chăm sóc trẻ và những yêu cầu khác từ khách hàng."
    },
    {
        img:'/about2.png',
        title :'Sữa chữa nhà cửa',
        content :"Các gia đình có thời gian dài gắn bó trong ngôi nhà, muốn có một cái nhìn mới mẻ, cần cải tạo lại không gian, hay đơn giản là muốn cuộc sống trở nên tươi mới hơn. Đến với Tapvu247 khách hàng sẽ luôn được đáp ứng tận tình các yêu cầu về tư vấn sửa chữa nhà một cách tốt nhất"
    },
]
export const contentService = [
    {
      link: "/dich-vu-ve-sinh-lau-kinh",
      title: "Dịch vệ sinh lau kính",
    },
    {
      link: "/ve-sinh-pin-mat-troi",
      title: "Dịch vụ vệ sinh pin mặt trời",
    },
    {
      link: "/ve-sinh-sua-chua-ve-sinh-thiet-bi-dien-lanh",
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
export const phoneNumber = '0393 500 993'
