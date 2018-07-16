const React = require('react')
export default class TodoCard extends React.Component {
  constructor(props) {
    super(props)
  }
  onDelete = () => {
    const {_id} = this.props.todo
    fetch('/delete-todo', {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify({_id})
    }).then((res) => {
      return res.json()
    }).then( (res) => {
      if (res.err) {alert('error in deleting'); return }
      this.props.getTodos();
    })
  }
  render() {
    const {todo} = this.props
    return (
      <div className="col-md-6 offset-md-3 todocard">
        <i className="fa fa-trash delete_todo_btn color-red pull-right pointer" onClick={this.onDelete}></i>
        <div className="text-center"> Time: {todo.time} </div>
        <div className="text-center"> Content: {todo.content} </div>
      </div>

    )
  }
}
