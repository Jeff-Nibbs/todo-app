import { prisma } from '@/db'
import { log } from 'console'
import { redirect } from 'next/navigation'
import Link from 'next/link'

async function createTodo(data: FormData) {
  'use server'

  const title = data.get('title')?.valueOf()
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid Title')
  }

  await prisma.todo.create({
    data: {
      title,
      completed: false,
    },
  })
  redirect('/')
}

export default function New() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-9xl">New</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          className="text-2xl border-2 border-slate-300 bg-transparent rounded px-4 py-2 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border-2 border-slate-300 text-slate-300 text-5xl px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border-2 border-slate-300 text-slate-300 text-5xl px-4 py-2 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
