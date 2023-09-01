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

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: '#dc0a9b',
      backgroundColor: '#ffffff1c',
    },
  ],
};

export default function OrderSalesCharts() {
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
            Membership Subscribers
          </CustomHeading>
          <Box>
            <BorderButton Url={'/'} Btnctn={'Last 7 days'} />
          </Box>
        </Stack>
        <Box bg={'#212121'} p={'41px 20px'}>
          <Line options={options} data={data} />
        </Box>
      </Stack>
    </>
  );
}
