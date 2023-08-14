type TodoItemsProps = {
  id: string
  title: string
  completed: boolean
}

export function TodoItem({ id, title, completed }: TodoItemsProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className=" cursor-pointer peer" defaultChecked={completed} />
      <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  )
}
