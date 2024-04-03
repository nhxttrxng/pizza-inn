import React, { useState } from "react";

const PizzaInn = () => {
    const [customerInfo, setcustomerInfo] = useState({
        email: "",
        name: "",
        mobile: "",
        address: "",
    });

    const [paymentInfo, setPaymentInfo] = useState({
        type: "", 
        total: 0, 
        shippingFee: 0, 
    });

    const [orderInfo, setOrderInfo] = useState([
        {
            name: "",
            amount: 0,
            price: 0,
        },
    ]);

    const handleInput = (e) => {
        setcustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handlePaymentType = (type) => {
        setPaymentInfo({
            ...paymentInfo,
            type: type,
        });
    };

    const handleAddItem = () => {
        setOrderInfo([...orderInfo, { name: "", amount: 0, price: 0 }]);
    };

    const handleUpdateItem = (index, field, value) => {
        const updatedOrder = [...orderInfo];
        updatedOrder[index][field] = value;
        setOrderInfo(updatedOrder);
    };

    console.log(customerInfo);
    console.log(paymentInfo);
    console.log(orderInfo);
    return (
        <div className="flex bg-black">
            <div className="text-white w-[60%] p-9">
                <img className="w-[50%] m-auto" src="https://bizweb.dktcdn.net/100/440/789/themes/840800/assets/checkout_logo.png?1708848964622" alt="" />
                <div className="mt-10 flex gap-10">
                    <div className="w-[60%]">
                        <div className="flex justify-between item-center">
                            <h4 className="text-2xl font-bold">Thông tin mua hàng</h4>
                            <div className="flex items-center  text-green-700">
                                <i className="fa-regular fa-user mr-2 text-base"></i>
                                <h4 className="text-lg">Đăng nhập</h4>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input className="w-full mb-3 p-4 rounded-[4px] text-black" type="text" name="email" placeholder="Email (Tuy Chon )" onChange={handleInput} />
                            <input className="w-full mb-3 p-4 rounded-[4px] text-black" type="text" name="name" placeholder="Họ và tên" onChange={handleInput} />
                            <input className="w-full mb-3 p-4 rounded-[4px] text-black" type="text" name="mobile" placeholder="Số điện thoại" onChange={handleInput} />
                            <input className="w-full mb-3 p-4 rounded-[4px] text-black" type="text" name="address" placeholder="Địa chỉ" onChange={handleInput} />
                            
                            <div className="relative">
                                <select className="w-full mb-3 p-4 rounded-[4px]" id="options">
                                    <option value="option1">Hà Nội</option>
                                    <option value="option2">Đà Nẵng</option>
                                    <option value="option3">TP HCM</option>
                                </select>
                                <label className="absolute top-0 left-0 text-gray-400 pl-4 pt-2" for="options">
                                    Tỉnh thành <span className=" text-gray-400 block">-----</span>
                                </label>
                                <i className="fa-solid fa-caret-up absolute top-5 right-[22px] text-black text-gray-400"></i>
                            </div>
                            <div className="relative">
                                <select className="w-full mb-3 p-4 rounded-[4px]" id="options">
                                    <option value="option1">Hà Nội</option>
                                    <option value="option2">Đà Nẵng</option>
                                    <option value="option3">TP HCM</option>
                                </select>
                                <label className="absolute top-0 left-0 text-gray-400 pl-4 pt-4" for="options">
                                    Quận Huyện
                                </label>
                                <i className="fa-solid fa-caret-up absolute top-5 right-[22px] text-black  text-gray-400"></i>
                            </div>
                            <div className="relative">
                                <select className="w-full mb-3 p-4 rounded-[4px]" id="options">
                                    <option value="option1">Hà Nội</option>
                                    <option value="option2">Đà Nẵng</option>
                                    <option value="option3">TP HCM</option>
                                </select>
                                <label className="absolute top-0 left-0 text-gray-400 pl-4 p-4" for="options">
                                    Phường xã
                                </label>
                                <i className="fa-solid fa-caret-up absolute top-5 right-[22px] text-black  text-gray-400"></i>
                            </div>
                            <div className="flex items-center">
                                <input className="mr-2 rounded-[4px]" type="checkbox" placeholder="Email (Tuy Chon )" />
                                <h3>Giao hàng đến địa chỉ khác</h3>
                            </div>
                            <input className="w-full h-[100px] p-4 rounded-[4px] text-black" type="text" placeholder="Ghi chú(Tuỳ chọn)" />
                        </div>
                    </div>
                    <div className="w-[40%]">
                        <div className="mb-6">
                            <h4 className="text-2xl font-bold mb-3">Vận Chuyển</h4>
                            <input className="w-full mb-3 p-4 rounded-[4px] text-blue-900 bg-blue-200 placeholder:text-sm" type="text" placeholder="Vui lòng nhập thông tin giao hàng" />
                        </div>
                        <div className="border-[0.5px] border-black">
                            <h4 className="text-2xl font-bold mb-2">Thanh toán</h4>
                            <div className="flex items-center justify-between p-4 bg-white text-black">
                                <div className="flex items-center">
                                    <input className="mr-2 rounded-[4px]" type="radio" name="Thanh toan" onClick={() => handlePaymentType("Banking")}/>
                                    <h3>Chuyển khoản qua ngân hàng</h3>
                                </div>
                                <i className="fa-solid fa-money-bill text-green-700"></i>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white text-black">
                            <div className="flex items-center">
                                <input className="mr-2 rounded-[4px]" type="radio" name="Thanh toan" onClick={() => handlePaymentType("COD")}/>
                                <h3>Thanh toán khi giao hàng(COD)</h3>
                            </div>
                            <i className="fa-solid fa-money-bill text-green-700"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40%] bg-gray-200">
                <div className="text-black">
                    <div className="flex justify-between border-t-[0.5px] border-gray-400 mt-[80px] pt-6 px-6">
                        <div className="flex gap-3">
                            <img
                                className="w-[60px] h-[60px] rounded-lg "
                                src="https://www.cnet.com/a/img/resize/36e8e8fe542ad9af413eb03f3fbd1d0e2322f0b2/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=1200&width=1200"
                                alt=""
                            />
                            <div>
                                <h4>Mi Y Double Dream</h4>
                                <h5>Ghi chu:</h5>
                            </div>
                        </div>
                        <div>
                            <h3>170,000d</h3>
                        </div>
                    </div>
                    <div className="flex gap-4 border-y-[0.5px] border-gray-400 mt-[20px] py-6 px-6">
                        <input className="w-[60%] p-4 rounded-lg" type="text" placeholder="Nhap ma giam gia" />
                        <button className="w-[30%] bg-green-700 text-white rounded-[4px]">Ap Dung</button>
                    </div>
                </div>
                <div>
                    <div className="border-b-[0.5px] border-gray-400 mt-[20px] py-6 px-6 text-gray-500">
                        <h3 className="flex justify-between items-center mb-3">
                            Tạm tính <span>175.000d</span>
                        </h3>
                        <h4>Phí vận chuyển</h4>
                    </div>
                    <div className=" mt-[20px] py-6 px-6 text-gray-500">
                        <h3 className="flex justify-between items-center mb-3">
                            Tổng cộng <span>175.000d</span>
                        </h3>
                        <button className="w-[30%] bg-green-700 text-white rounded-[4px] p-4 ml-[370px] mt-[10px]">ĐẶT HÀNG</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaInn;
