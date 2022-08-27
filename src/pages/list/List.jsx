import classes from "./List.module.scss"
import Sidebar from "../../Components/Layout/sidebar/Sidebar"
import { GetData } from "../../lib";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import PageLoader from "../../Components/PageLoader";
import Container from "../../Components/Container";


const List = () => {

  const { data, isLoading } = GetData("/data");
  console.log(data?.data);

  if (isLoading) {
    return <PageLoader />
  }

  const columns = [
    {
      title: 'Вид договора',
      dataIndex: 'contractType',
      width: '15%',
    },
    {
      title: 'Дата заключения договора',
      dataIndex: 'dateConclusionContract',
      width: '15%'
    },
    {
      title: 'Дата окончания договора',
      dataIndex: 'contractEndDate',
      width: '15%',
    },
    {
      title: 'Валюта договора',
      dataIndex: 'contractCurrency',
      width: '15%',
    },
    {
      title: 'Сумма договора',
      dataIndex: 'amountOfDeal',
      width: '15%',
    },
    {
      title: 'Процентная ставка',
      dataIndex: 'interestRace',
      width: '15%',
    },
    {
      title: 'Статус договора',
      dataIndex: 'agreementStatus',
      width: '15%',
    },
  ];

  return (
    <Container>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.table}>
          <h1 className={classes.title}>Search data</h1>
          <Table columns={columns} dataSource={data?.data} isLoading={isLoading} />
        </div>
      </div>
    </Container>
  )
}

export default List