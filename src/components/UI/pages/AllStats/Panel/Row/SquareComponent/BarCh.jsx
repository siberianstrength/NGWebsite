import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';

const BarCh = ({colorClass, data}) => {
    const dataset = [{year: data.curyear, value: data.curyearAmount},
                    {year: data.prevyear, value: data.prevyearAmount}
    ]
    
    const getColor = (color) => {
        let res = 'black'
        if (color === 'color-orange')
            res = '#DF952C'
        else if (color === 'color-aqua')
            res = '#09A39F'
        else if (color ==='color-red')
            res = '#CB395E'
        else if (color ==='color-purple')
            res = '#991199'
     return res
    }
    
    return (
    <BarChart
      className='fonts'
      dataset={dataset}
      height={160}
      yAxis={[{ 
        domainLimit: {max: data.curyearAmount > data.prevyearAmount ? data.curyearAmount : data.prevyearAmount},
        scaleType: 'band', 
        dataKey: 'year',
        disableTicks: true,
        colorMap: {
            type: 'piecewise',
            thresholds: [data.curyear, data.prevyear],
            colors: ['gray', getColor(colorClass)],
        },
        }]}
        xAxis={[{
            disableTicks: true,
            disableLine: true,
        }]}
      series={[
        { 
            dataKey: 'value',
        }]}
        layout='horizontal'
        barLabel='value'
        skipAnimation={true}
    />
    );  
}

export default BarCh;
