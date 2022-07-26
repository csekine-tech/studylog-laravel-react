import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from './auth'

export const useTodo = () => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getTodoList = async ({ setTodoList }) => {
        await csrf()
        axios
            .get('/api/todolist')
            .then(res => {
                setTodoList(res.data.todoList)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const getTodoListFilteredWorkbook = async ({
        setTodoListFilteredWorkbook,
    }) => {
        await csrf()
        axios
            .get('/api/todolistfilteredworkbook')
            .then(res => {
                setTodoListFilteredWorkbook(res.data.todoListFilteredWorkbook)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const getTodoDateRelations = async ({ setTodoDateRelations }) => {
        await csrf()
        axios
            .get('/api/todo_date')
            .then(res => {
                console.log(res.data);
                setTodoDateRelations(res.data.todo_date_relations)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const updateTodo = async (todo, id) => {
        await csrf()
        axios
            .post(`/api/todo/update/${id}`, todo)
            .then(res => {
                res.data
                console.log(res.data);
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    return {
        getTodoList,
        getTodoListFilteredWorkbook,
        getTodoDateRelations,
        updateTodo,
    }
}
