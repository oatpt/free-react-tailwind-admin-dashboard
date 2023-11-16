import React, { useState } from 'react'
import axios from 'axios';
type Props = {
    ProductID: string;
    Onhand: number;
    Price: number;
    Profit: number;
    Name: string;
    Category: string
  }
type DelProps = {

    visible2: boolean;
    onClose2: any;
    data:Props;
}

function ModalDelete({ visible2, onClose2,data }: DelProps) {

    const handleOnClose2 = (e: any) => {
        if (e.target.id === "container") onClose2();
    };
    if (!visible2) return null;
    return (

        <div
            id='container'
            onClick={handleOnClose2}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <div className="flex flex-col gap-9">
                {/* <!-- Contact Form --> */}
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Delete Inventory ?
                        </h3>
                    </div>
                    <h1 className='py-4 px-6.5'>Confirm to Delete this {"Product Name"}</h1>
                    <form onSubmit={async (event) => {
                        await axios.delete(`http://127.0.0.1:8000/inventory/${data.ProductID}`);
                        handleOnClose2;
                        window.alert('...');
                        return event.preventDefault()
                    }}>
                        <div className='flex w-full justify-end'>
                        <div className="p-4">

                            <button 
                            onClick={handleOnClose2}
                            className="flex w-full justify-center rounded border border-gray p-3 font-medium text-gray">
                                Cancle
                            </button>
                        </div>
                        <div className="p-4">

                            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                                Delete
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>






    )
}

export default ModalDelete
