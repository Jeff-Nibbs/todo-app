import Link from 'next/link'
import { prisma } from '@/db'
import { TodoItem } from '@/components/TodoItem'
import { data } from 'autoprefixer'

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, completed: boolean) {
  'use server'
  await prisma.todo.update({ where: { id }, data: { completed } })
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-9xl">Todos</h1>
        <Link
          className="border-2 border-slate-300 text-slate-300 text-5xl px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
