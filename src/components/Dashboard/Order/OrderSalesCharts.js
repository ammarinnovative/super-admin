import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Faker } from '@faker-js/faker';
import { Box, Stack, Text } from '@chakra-ui/react';
import CustomHeading from '../../Website/Headings/CustomHeading';
import BorderButton from '../../Website/Buttons/BorderButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = [
  '$10',
  '$50',
  '$100',
  '$150',
  '$200',
  '$300',
  '$400',
  '$10',
  '$50',
  '$100',
  '$150',
  '$200',
  '$300',
  '$400',
];

export default function OrderSalesCharts() {
  const colorCode = useSelector(state => state?.ColorCode);
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        borderColor: 'pHeading.100',
        backgroundColor: '#ffffff1c',
      },
    ],
  });

  useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: labels.map(() => Math.floor(Math.random() * 1000)),
          borderColor: colorCode,
          backgroundColor: '#ffffff1c',
        },
      ],
    });
  }, [colorCode]);

  return (
    <>
      <Stack>
        <Stack
          mb={'4'}
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
        >
          <CustomHeading
            mb={'0'}
            textAlign={'left'}
            fontSize={'23px'}
            color={'#fff'}
          >
            Total Sales
          </CustomHeading>
          <Box>
            <BorderButton Url={'/'} Btnctn={'View Past Report'} />
          </Box>
        </Stack>
        <Box bg={'#212121'} width={"100%"} p={'4'}>
          <Line options={options} data={data} />
        </Box>
      </Stack>
    </>
  );
}
