import React from 'react'
import "./App.css";
import { TransData } from "./data";
import HomePageHeader from './components/HomePageHeader'
import {Table} from 'antd';
import 'antd/dist/antd.css';

export const TransTable = () => {
    const columns = [
      {
        title: 'Id',
        dataIndex: 'transaction_id',
        render: (text,record) => {
          return <span>{text}</span>
        }
      },
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text,record) => {
          return <span>{text}</span>
        }
      },
      {
        title: 'Transaction Date',
        dataIndex: 'date',
        render: (text,record) => {
          return <span>{text}</span>
        }
      },
      {
        title: 'Transaction Amount',
        dataIndex: 'transaction_amount',
        render: (text,record) => {
          return <span>{text}</span>
        }
      },
      {
        title: 'Reward Points',
        dataIndex: 'reward',
        render: (text,record) => {
          return <span>{rewards(record.transaction_amount)}</span>
        }
      }
    ]

    const rewards = (price) => {
      if (price >=50 && price < 100) {
          return price-50;
      } else if (price >100){
          return (2*(price-100) + 50);
      }
      return 0;
    } 

    return (
        <>
            <HomePageHeader />
            <Table
                columns={columns}
                dataSource={TransData}
                style={{marginTop: '50px'}}
                rowKey={record => record.transaction_id.toString()}
            />
        </>
    );
};



