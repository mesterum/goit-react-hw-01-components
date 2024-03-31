import PropTypes from "prop-types";
import style from './.module.css'

export default function Statistics(props: {
  title?: string;
  stats: {
    id: string;
    label: string;
    percentage: number;
  }[]
}) {
  const { title, stats } = props
  // console.log(style);
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={style.item} style={{ backgroundColor: `hsl(${stat.percentage * 3.60}, 70%, 35%)` }}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
}