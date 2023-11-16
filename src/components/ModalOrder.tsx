import React, { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import axios from 'axios';

type AddProps = {
    visible: boolean;
    onClose: any;
}
function ModalOrder({ visible, onClose }: AddProps) {

    
    const [OrderData, setOrderData] = useState({
        OrderID: 0,
        ProductID: 0,
        Time: 0,
        Unit: 0,
        Price: 0,
    });


    const inputValue = (name: string, value: any) => {
        setOrderData({
            ...OrderData,
            [name]: value,
        });
    };

    const handleOnClose = (e: any) => {
        if (e.target.id === "container") onClose();
    };
    if (!visible) return null;


    return (
        <div
            id='container'
            onClick={handleOnClose}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <div className='flex items-center justify-between'>
                            <h3 className="font-medium text-lg text-black dark:text-white">
                                Add Order
                            </h3>
                            <button>
                                <XMarkIcon className='text-white w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    <form onSubmit={async (event) => {
                        await axios.post("http://127.0.0.1:8000/orders", OrderData);
                        handleOnClose;
                        return event.preventDefault()
                    }}>
                        <div className="p-6.5 ">
                            {/* id name */}
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        ProductID
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input mb-4.5">
                                        <input
                                            onChange={e => inputValue("ProductID", parseInt(e.target.value))}
                                            type="text"
                                            required
                                            placeholder="Enter your ProductID"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Unit
                                    </label>
                                    <input
                                        onChange={e => inputValue("Unit", parseInt(e.target.value))}
                                        type="text"
                                        required
                                        placeholder="Enter your Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Add Order
                            </button>
                        </div>
                    </form>



                </div>
            </div>


        </div>






    )
}

export default ModalOrder
