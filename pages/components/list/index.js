import ListItem from "../listItem";
function List({ arr, setarr }) {
  const deleteHandler = (ind) => {
    let copyTask = [...arr];
    copyTask.splice(ind, 1);
    setarr(copyTask);
  };

  const items =
    arr &&
    arr.map((item, ind) => {
      return (
        <div className="flex">
          <ListItem key={ind} text={item} />
          <button
            className="delbtn"
            onClick={() => {
              deleteHandler(ind);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
export default List;
