const React = require('react')
import TodoCard from './TodoCard'
export default class TodoCards extends React.Component {
  constructor(props) {
    super(props)
    this.next_id = 14
    this.state = { todolist: []}
  }
  getTodos = () => {
    fetch('/get-todos').then( (res) => {
      return res.json()
    }).then( (todolist) => {
      this.setState({todolist})
    })
  }
  componentWillMount() {
    this.getTodos()
  }

  onChange = (e) => {
    const new_content = e.target.value
    this.setState({ new_content })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const params = { content: this.state.new_content }
    fetch('/add-todo', {
    headers: { "Content-Type": "application/json" },
    method: 'POST',
    body: JSON.stringify(params)
  }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res)
      if (res.status == 'success') this.getTodos()
    })

  }
  render() {
    return (
      <div>
        {
          this.state.todolist.map( (todo, i) => {
            return <TodoCard key={i} todo={todo} getTodos={this.getTodos} />
          })
        }
        <form onSubmit={this.onSubmit} className="col-md-6 offset-md-3">
          <input onChange={this.onChange} className='form-control' />
          <p>{this.state.new_content}</p>
          <p>{ JSON.stringify(this.state.todolist) }</p>
        </form>
      </div>
    )
  }
}
