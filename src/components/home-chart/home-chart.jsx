import { arc, pie } from "d3";

import "components/home-chart/home-chart.module.scss";

function homeChart() {
  const processedData = pie()(filteredData.map((datum) => datum.amount));

  return (
    <div className="home-chart">
      <svg className={styles.donutChart} viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <g transform={`translate(${centerX}, ${donutRadius})`}>
          <foreignObject x={-(textBoxWidth / 2)} y={-(textBoxHeight / 2)} width={textBoxWidth} height={textBoxHeight}>
            <div className={styles.totalCost}>
              <div>Total Cost</div>
              <div className={styles.totalCostLabel}>{`IDR${this.formatNumber(totalCost)}`}</div>
            </div>
          </foreignObject>
          {processedData.map((datum, index) => { /* Donut Chart sections */
            const cleanedDatum = {
              'startAngle': datum.startAngle + (Math.PI),
              'endAngle': datum.endAngle + (Math.PI),
              'innerRadius': donutRadius - (donutRadius * 2 / 5),
              'outerRadius': donutRadius
            };
            const centerPoint = arc().centroid(cleanedDatum);
            const fillColor = filteredData[index].color;
            const percentageNumber = filteredData[index].category !== '' ? `${Math.round(datum.value / totalData * 100)}%` : null;

            return (
              <g key={index}>
                <path d={`${arc()(cleanedDatum)}`} fill={fillColor}></path>
                <text className={styles.percentage} x={centerPoint[0]} y={centerPoint[1]} color='white'
                  dominantBaseline='middle' textAnchor='middle'>{percentageNumber}</text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default homeChart;
