//一つの問題につきplanは一つしか作れない仕様？
//→過去の
//TODO RIGHTで使用
const todoList = [
    {
        workbook_id: 5,
        workbook_name: '青チャート1',
        q_name: '1',
        q_id: 1,
        todos: [
            {
                id: 1,
                planned_at: '2022-06-02',
                done_at: '2022-06-02',
                rate: 1,
            },
            {
                id: 2,
                planned_at: '2022-6-14',
                done_at: '2022-06-15',
                rate: 2,
            },
            {
                id: 3,
                planned_at: '2022-06-30',
                done_at: '2022-06-30',
                rate: 3,
            },
            {
                id: 10,
                planned_at: '2022-6-14',
                done_at: null,
                rate: null,
            },
        ],
    },
    {
        workbook_id: 5,
        workbook_name: '青チャート1',
        q_name: '101',
        q_id: 101,
        todos: [
            {
                id: 1,
                planned_at: '2022-06-02',
                done_at: '2022-06-02',
                rate: 1,
            },
            {
                id: 2,
                planned_at: '2022-6-14',
                done_at: '2022-06-15',
                rate: 2,
            },
            {
                id: 3,
                planned_at: '2022-06-30',
                done_at: '2022-06-30',
                rate: 3,
            },
            {
                id: 10,
                planned_at: '2022-6-14',
                done_at: null,
                rate: null,
            },
        ],
    },
    {
        workbook_id: 5,
        workbook_name: '青チャート1',
        q_name: '102',
        q_id: 102,
        todos: [
            {
                id: 8,
                planned_at: '2022-06-02',
                done_at: '2022-06-02',
                rate: 1,
            },
            {
                id: 9,
                planned_at: '2022-6-14',
                done_at: null,
                rate: null,
            },
        ],
    },
    {
        workbook_id: 6,
        workbook_name: '大学への数学A',
        q_name: '32',
        q_id: 32,
        todos: [
            {
                id: 4,
                planned_at: '2022-06-02',
                done_at: '2022-06-02',
                rate: 1,
            },
            {
                id: 5,
                planned_at: '2022-6-14',
                done_at: '2022-06-15',
                rate: 3,
            },
            {
                id: 6,
                planned_at: '2022-06-30',
                done_at: '2022-06-30',
                rate: 3,
            },
            {
                id: 7,
                planned_at: '2022-06-30',
                done_at: null,
                rate: null,
            },
        ],
    },
]

//TODO LEFTで使用
const date_todo_relations = [
    {
        parent: '今日',
        children: [
            {
                id: 101,
                name: '101',
                workbook_id: 5,
                workbook_name: '青チャート1',
            },
            {
                id: 102,
                name: '102',
                workbook_id: 5,
                workbook_name: '青チャート1',
            },
            {
                id: 32,
                name: '32',
                workbook_id: 6,
                workbook_name: '大学への数学A',
            },
        ],
    },
    {
        parent: '明日',
        children: [
            {
                id: 103,
                name: '103',
                workbook_id: 5,
                workbook_name: '青チャート1',
            },
            {
                id: 104,
                name: '104',
                workbook_id: 5,
                workbook_name: '青チャート1',
            },
        ],
    },
]

//library RIGHTで使用する
const todoListFilteredWorkbook = [
    {
        workbook_id: 5,
        workbook_name: '青チャート1',
        questions: [
            {
                id: 1,
                name: '1',
                todos: [
                    {
                        id: 1,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 1,
                    },
                    {
                        id: 2,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 2,
                name: '2',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 1,
                    },
                    {
                        id: 4,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 3,
                name: '3',
                todos: [
                    {
                        id: 5,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 4,
                name: '4',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 4,
                    },
                ],
            },
        ],
    },
    {
        workbook_id: 4,
        workbook_name: '大学への数学1',
        questions: [
            {
                id: 1,
                name: '1',
                todos: [
                    {
                        id: 1,
                        planned_at: '2022-05-27',
                        done_at: '2022-05-27',
                        rate: 2,
                    },
                    {
                        id: 2,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 2,
                name: '2',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 3,
                    },
                    {
                        id: 4,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 3,
                name: '3',
                todos: [
                    {
                        id: 5,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 4,
                name: '4',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 4,
                    },
                ],
            },
        ],
    },
    {
        workbook_id: 3,
        workbook_name: '新演習',
        questions: [
            {
                id: 1,
                name: '1',
                todos: [
                    {
                        id: 1,
                        planned_at: '2022-06-01',
                        done_at: '2022-06-02',
                        rate: 3,
                    },
                    {
                        id: 2,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 2,
                name: '2',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 1,
                    },
                    {
                        id: 4,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 3,
                name: '3',
                todos: [
                    {
                        id: 5,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 4,
                name: '4',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 4,
                    },
                ],
            },
        ],
    },
    {
        workbook_id: 2,
        workbook_name: 'セミナー',
        questions: [
            {
                id: 1,
                name: '1',
                todos: [
                    {
                        id: 1,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 1,
                    },
                    {
                        id: 2,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 2,
                name: '2',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 1,
                    },
                    {
                        id: 4,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 3,
                name: '3',
                todos: [
                    {
                        id: 5,
                        planned_at: '2022-6-14',
                        done_at: '',
                        rate: '',
                    },
                ],
            },
            {
                id: 4,
                name: '4',
                todos: [
                    {
                        id: 3,
                        planned_at: '2022-06-02',
                        done_at: '2022-06-02',
                        rate: 4,
                    },
                ],
            },
        ],
    },
]

export { todoList, date_todo_relations, todoListFilteredWorkbook }
