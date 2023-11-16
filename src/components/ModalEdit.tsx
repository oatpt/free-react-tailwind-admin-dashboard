import React, { useEffect, useState } from 'react'

import axios from 'axios';
type Props = {
    ProductID: string;
    Onhand: number;
    Price: number;
    Profit: number;
    Name: string;
    Category: string
  }
type EditProps = {
    visible1: boolean;
    onClose1: any;
    data:Props;
    index:number;
}


function ModalEdit({ visible1, onClose1,data,index }: EditProps) {
    
    if(data==undefined){
        return
      }
    const [InvenData, setInvenData] = useState({
        ProductID: "",
        Name: "",
        Category: "",
        Price: 0,
        Onhand: 0,
    });

    const inputValue = (name: string, value: any) => {
        setInvenData({
            ...InvenData,
            [name]: value,
        });
    };

    
    useEffect(() => {
        setInvenData({
            ProductID: data.ProductID,
            Name: data.Name,
            Category: data.Category,
            Price: data.Price,
            Onhand: data.Onhand,
        })
    }, [index]);
    const handleOnClose1 = (e: any) => {
        if (e.target.id === "container") onClose1();
    };
    console.log(InvenData);
    
    if (!visible1) return null;
    return (
        <div
            id='container'
            onClick={handleOnClose1}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <div className='flex items-center justify-between'>
                            <h3 className="font-medium text-lg text-black dark:text-white">
                                Edit Inventory
                            </h3>
                            {/* <button>
                        <XMarkIcon className='text-white w-5 h-5' />
                    </button> */}
                        </div>
                    </div>

                    <form onSubmit={async (event) => {
                        await axios.post("http://127.0.0.1:8000/inventory/update",InvenData);
                        handleOnClose1;
                        alert('agfdhgj');
                        return event.preventDefault()
                    }}>
                        <div className="p-6.5 ">
                            {/* id name */}
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">


                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        value={InvenData.Name}
                                        onChange={e => inputValue("Name", e.target.value)}
                                        type="text"
                                        required
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Category
                                    </label>
                                    <div className="relative z-20 bg-transparent dark:bg-form-input mb-4.5">
                                        <select required onChange={e => inputValue("Category", e.target.value)}
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                            <option value="">Select Your Category</option>
                                            <option value="Toys">Toys</option>
                                            <option value="Art & Crafts">Art & Crafts</option>
                                            <option value="Games">Games</option>
                                            <option value="Electronicd">Electronicd</option>
                                            <option value="Sport & Outdoors">Sport & Outdoors</option>
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
                            </div>

                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">


                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Price
                                    </label>
                                    <input
                                        value={InvenData.Price}
                                        onChange={e => inputValue("Price", parseInt(e.target.value))}
                                        type="text"
                                        required
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Onhand
                                    </label>
                                    <input
                                        value={InvenData.Onhand}
                                        onChange={e => inputValue("Onhand", parseFloat(e.target.value))}
                                        type="text"
                                        required
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>
                            </div>
                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Edit Inventory
                            </button>
                        </div>
                    </form>



                </div>
            </div>


        </div>






    )
}

export default ModalEdit
