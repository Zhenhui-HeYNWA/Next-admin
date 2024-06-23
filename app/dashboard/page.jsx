import { fetchUsers } from '../lib/data';
import Card from '../ui/dashboard/card/card';
import Chart from '../ui/dashboard/chart/chart';
import styles from '../ui/dashboard/dashboard.module.css';
import Footer from '../ui/dashboard/footer/footer';
import RightBar from '../ui/dashboard/rightbar/rightbar';
import Transactions from '../ui/dashboard/transaction/transaction';
const DashBoardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default DashBoardPage;
