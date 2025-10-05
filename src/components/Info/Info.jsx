import './Info.scss';

export function Info({ data }) {
  return (
    <ul className="info-list">
      <li className="info-item">
        <p>Кількість всіх завдань:</p>
        <span>{data.length}</span>
      </li>
      <li className="info-item">
        <p>Кількість виконаних завдань:</p>
        <span>{data.filter(task => task.completed).length}</span>
      </li>
    </ul>
  );
}