import EmptyListSpaceFiller from '../EmptyListSpaceFiller/EmptyListSpaceFiller';

const ColumnsTasksList = ({ tasks }) => {
  if (!tasks) {
    return <EmptyListSpaceFiller />;
  }

  return <div>Tasks EXISTS!</div>;
};

export default ColumnsTasksList;
