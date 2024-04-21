import { Form, Input } from "antd";
import React from "react";
const { TextArea } = Input;
const Comment = () => {
  return (
    <section className="py-10">
      <div className="text-2xl">
        <div className="mt-10">
          <Form
            name="basic"
            style={{
              padding: 30,
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <h3 className="font-bold text-2xl">Trả lời</h3>
            <p className="text-2xl">
              Email của bạn sẽ không được hiển thị công khai. Các trường bắt
              buộc được đánh dấu *
            </p>
            <div className="grid grid-cols-1 mt-10">
              <Form.Item
                name={"Bình luận"}
                rules={[
                  { required: true, message: "Vui lòng nhập bình luận!" },
                ]}
              >
                <TextArea
                  placeholder="Bình luận"
                  className="!text-2xl placeholder-gray-600 !h-[200px]"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
              <Form.Item
                name="địa chỉ"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
              >
                <Input
                  placeholder="Địa chỉ"
                  className="p-4 text-2xl placeholder-gray-600"
                />
              </Form.Item>
              <Form.Item
                name="Số điện thoại"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại thoại!",
                  },
                ]}
              >
                <Input
                  className="p-4 text-2xl placeholder-gray-600"
                  placeholder="Số điện thoại"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Email không hợp lệ",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                ]}
              >
                <Input
                  className="p-4 text-2xl placeholder-gray-600"
                  placeholder="Địa chỉ email..."
                />
              </Form.Item>
            </div>
            <button className="text-2xl mt-10 rounded font-bold uppercase bg-greenTheme text-white p-4">
              Phản hồi
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Comment;
