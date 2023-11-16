import { useEffect, useState } from 'react';
import ModalOrder from './ModalOrder';
import axios from 'axios';
type Props = {
  ProductID: string;
  Onhand: number;
  Price: number;
  Profit: number;
  Name: string;
  Category: string
}
type orders = {
  OrdersID:string;
  ProductID:Props ;
  Date:number;
  Unit:number;
  Price:number;
}
const TableOne = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState<orders[]>([]);
  const handleOnClose = () => setShowModal(false);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/orders")
      .then((res) => {
        setData(res.data)
      })
  }, [])
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
       <div className=' grid gap-10 grid-cols-10'>
        {/* <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Inventory
        </h4> */}
        <div className=" col-span-9 hidden sm:block pb-2 border-2 pt-2 px-2 rounded-xl mb-5">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className='flex justify-end'>
        <button
          onClick={() => { setShowModal(true) }}
          className="text-lg font-semiboldtext-black dark:text-white dark:bg-graydark bg-bodydark2 pb-2  pt-2 px-2 rounded-xl mb-5 ">
          Add
        </button>
        </div>
      </div>

      
      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium text-center xsm:text-base">
              OrdersID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              ProductID
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Unit
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium  xsm:text-base">
              TotalAmount
            </h5>
          </div>
        </div>
        {data&&data.map((temp)=>{
          const x = new Date(temp.Date+25200000);
          const num = (temp.Unit*temp.Price).toFixed( 2 )
          console.log(num);
          return(<div className="grid grid-cols-6 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">{temp.OrdersID}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{temp.ProductID.ProductID}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{x.toUTCString()}</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{temp.Unit}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{temp.Price}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">{num}</p>
          </div>
        </div>)
        })}
        

       

        

        

        
      </div>
      <ModalOrder onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default TableOne;
