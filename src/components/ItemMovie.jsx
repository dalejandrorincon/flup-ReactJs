const ItemMovie = ({item}) => {
  return (
    <tr>
      <td >{item.imdbID}</td>
      <td >{item.Title} </td>
      <td >{item.Year}</td>
    </tr>
  )
}
export default ItemMovie;