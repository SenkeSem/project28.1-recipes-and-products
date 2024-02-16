import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import styles from './NutritionChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  calories: string;
  protein: string;
  fat: string;
  carb: string;
}

const NutritionChart = ({ calories, protein, fat, carb }: Props) => {
  const data = {
    labels: ['Белки', 'Жиры', 'Углеводы'],
    datasets: [
      {
        label: 'грамм',
        data: [Number(protein), Number(fat), Number(carb)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.nutritionChart}>
      <main>
        <Pie data={data} />
      </main>
      <h5>{calories} ккал</h5>
    </div>
  );
};

export default NutritionChart;
