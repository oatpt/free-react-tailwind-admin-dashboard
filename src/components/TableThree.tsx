const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
      Top Product
    </h4>

    <div className="flex flex-col">
      <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium text-center xsm:text-base">
            No
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium  xsm:text-base">
            Name
          </h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium  xsm:text-base">
            Total Sold (unit)
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 className="text-sm font-medium  xsm:text-base">
            Total Sale
          </h5>
        </div>
        <div className="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 className="text-sm font-medium  xsm:text-base">
            Profit
          </h5>
        </div>    
      </div>

      <div className="grid grid-cols-5 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
        <div className="flex items-center justify-center gap-3 p-2.5 xl:p-5">
          <p className="hidden text-black dark:text-white sm:block">1</p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">GAT</p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">35</p>
        </div>

        <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-black dark:text-white">5250</p>
        </div>

        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p className="text-black dark:text-white">236250</p>
        </div>

      </div>

    </div>
  </div>
  );
};

export default TableThree;
