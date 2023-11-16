import Breadcrumb from '../../components/Breadcrumb';
import TableTwo from '../../components/TableTwo';

const Inventory = () => {
    return (
        <>
            <Breadcrumb pageName="Inventory" />
            
            <TableTwo Onhand={0} Price={0} Profit={0} Name={''} Category={''} />
        </>
    );
};

export default Inventory;
