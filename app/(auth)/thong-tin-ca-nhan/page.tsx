"use client";
import { _redirect } from "@/action";
import { instance } from "@/config";
import { userState } from "@/store";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { isStrongPassword } from "validator";
const validatorPassword = (password: string) => {
  return isStrongPassword(password, {
    minLength: 8,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  });
};
const ChangePassword = () => {
  const { setUser } = userState();
  const oldPassRef = useRef<HTMLInputElement>(null);
  const newPassRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!oldPassRef.current || !newPassRef.current) {
      return toast.error("Đã xảy ra lỗi trong quá trình render");
    }
    const oldPass = oldPassRef.current?.value;
    const newPass = newPassRef.current?.value;
    if (!oldPass || !newPass) {
      return toast.error("Vui lòng nhập nội dung của form");
    }
    if (!validatorPassword(oldPass) || !validatorPassword(newPass)) {
      return toast.error("Mật khẩu cần tối thiểu 8 ký tự và tối đa 32 ký tự");
    }
    try {
      const res = await instance.put("/account/changePassword/", {
        oldPassword: oldPass,
        newPassword: newPass,
      });
      if (res.status === 200) {
        toast.success("Đổi mật khẩu thành công");
        setUser();
        if (oldPassRef.current?.value && newPassRef.current?.value) {
          oldPassRef.current.value = "";
          newPassRef.current.value = "";
        }
      }
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-5">
        <label className="input input-bordered w-[90%] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            ref={oldPassRef}
            type="password"
            placeholder="Mật khẩu cũ"
            className="grow"
          />
        </label>
        <label className="input input-bordered w-[90%] flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            placeholder="Mật khẩu mới"
            ref={newPassRef}
            type="password"
            className="grow"
          />
        </label>
      </div>
      <button
        type="submit"
        className="py-2 max:py-1 mt-5 px-3 rounded text-base hover:bg-green-800 bg-greenTheme text-white"
      >
        Xác nhận
      </button>
    </form>
  );
};
const ChangeName = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const { setUser } = userState();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameRef?.current?.value) {
      return toast.error("Bạn cần nhập tên mới");
    }
    try {
      const res = await instance.put(`/account/changeName/`, {
        name: nameRef?.current?.value,
      });
      if (res.status === 200) {
        toast.success("Cập nhật tên thành công!!");
        setUser();
        nameRef.current.value = "";
      }
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          type="text"
          ref={nameRef}
          placeholder="Tên đăng nhập mới"
          className="input input-bordered w-[90%]"
        />
      </div>
      <button
        type="submit"
        className={`py-2 max-lg:py-1 px-3 mt-5 rounded text-base hover:bg-green-800 bg-greenTheme text-white`}
      >
        Xác nhận
      </button>
    </form>
  );
};
const ThongTinCaNhan = () => {
  const [tab, setTab] = useState(true);
  const { user, logout } = userState();
  return (
    <section className="py-10 flex max-lg:space-y-5 px-5 lg:h-[600px] max-lg:flex-col justify-center lg:space-x-3">
      <div
        className="space-y-5  lg:p-10 p-5 h-full flex justify-center items-center"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="flex justify-center flex-col space-y-3  items-center">
          <p className="capitalize bg-slate-200 flex justify-center lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] items-center p-3 rounded-full cursor-pointer transition-all text-[#272727 ] text-xl  font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </p>
          <div>
            <h3 className="text-2xl text-center font-bold max-sm:text-lg">
              Hồ sơ
            </h3>
            <div className="space-y-2 mt-2">
              <p className="text-xl max-sm:text-base">
                Tên đăng nhập : {user?.name}
              </p>
              <p className="text-xl max-sm:text-base">Email : {user?.email}</p>
            </div>
            <div className="flex justify-center space-x-3">
              <button
                onClick={logout}
                className="px-3 mt-5 rounded py-2 hover:bg-green-800 bg-greenTheme text-base text-white"
              >
                Đăng xuất
              </button>
              <button
                onClick={() => _redirect("/tao-bai-viet")}
                className="px-3 mt-5 rounded py-2 hover:bg-green-800 bg-greenTheme text-base text-white"
              >
                Tạo bài viết
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-10 h-full max-lg:px-5"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <div className="lg:pl-5 space-y-3  lg:w-[500px]">
          <h2 className="text-2xl font-bold max-sm:text-lg">
            Thông tin cá nhân
          </h2>
          <p className="text-xl max-sm:text-base">Xin chào, {user?.name} !</p>
          <p className="text-xl max-sm:text-base flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="white"
              viewBox="0 0 24 24"
              fill="#27a449"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Thông tin được bảo mật</span>
          </p>
          <p className="text-xl max-sm:text-base flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="white"
              viewBox="0 0 24 24"
              fill="#27a449"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Tài khoản xác thực</span>
          </p>
          <div role="tablist" className="tabs tabs-lifted pr-5">
            <input
              onChange={() => setTab(true)}
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Đổi mật khẩu"
              checked={tab}
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <ChangePassword />
            </div>
            <input
              onChange={() => setTab(false)}
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              checked={!tab}
              aria-label="Đổi tên đăng nhập"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <ChangeName />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThongTinCaNhan;
