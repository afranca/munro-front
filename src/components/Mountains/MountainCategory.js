import './MountainCategory.css';

const MountainCategory = (props) => {
  //const month = props.date.toLocaleString("en-US", { month: "long" });
  //const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  //const year = props.date.getFullYear();
  return (
    <div className='expense-date'> 
      <div className='expense-date__month'>category</div>
      <div className='expense-date__year'></div>
      <div className='expense-date__day'>{props.category}</div>
    </div>
  );
}

export default MountainCategory;