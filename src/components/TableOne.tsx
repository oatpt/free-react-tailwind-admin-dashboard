import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Orders
      </h4>

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

        <div className="grid grid-cols-6 border-b border-stroke dark:border-strokedark sm:grid-cols-6">
          <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
            <p className="hidden text-black dark:text-white sm:block">1</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">3</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">Jan 13,2023</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">2</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">590</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-meta-5">480</p>
          </div>
        </div>

       

        

        

        
      </div>
    </div>
  );
};

export default TableOne;
