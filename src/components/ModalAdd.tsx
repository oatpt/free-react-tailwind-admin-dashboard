import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type AddProps = {
    visible: boolean;
    onClose: any;
}
function ModalAdd({ visible, onClose }: AddProps) {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [last, setLast] = useState("")
    const [role, setRole] = useState("")
    const [userid, setUserId] = useState("")

    //console.log(data);

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
                                Add Member
                            </h3>
                            <button>
                                <XMarkIcon className='text-white w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    <form onSubmit={(event) => {


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
                                        onChange={e => setLast(e.target.value)}
                                        type="text"
                                        required
                                        placeholder="Enter your ID"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                    </div>
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        onChange={e => setLast(e.target.value)}
                                        type="text"
                                        required
                                        placeholder="Enter your Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Category
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input mb-4.5">
                                        <select required onChange={e => setUserId(e.target.value)} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                            <option value="">Select Your Category</option>
                                            <option value="1">book</option>
                                        </select>
                                        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                            <svg
                                                className="fill-current"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g opacity="0.8">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                        fill=""
                                                    ></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Price
                                    </label>
                                    <input
                                        onChange={e => setLast(e.target.value)}
                                        type="text"
                                        required
                                        placeholder="Enter your Price"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Onhand
                                    </label>
                                    <input
                                        onChange={e => setName(e.target.value)}
                                        type="text"
                                        required
                                        placeholder="Enter your Onhand"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Profit
                                    </label>
                                    <input
                                        onChange={e => setLast(e.target.value)}
                                        type="text"
                                        required
                                        placeholder="Enter your Profit"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>





                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Add Member
                            </button>
                        </div>
                    </form>



                </div>
            </div>


        </div>






    )
}

export default ModalAdd
