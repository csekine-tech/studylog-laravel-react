
const workbookInfo = {
    workbook_name: '青チャート1',
    workbook_id: 5,
    subject: '数学',
    count: 100,
    // structure: [
    //     { section: 1, count: 2 },
    //     { section: 2, count: 3 },
    //     { section: 3, count: 2 },
    // ],
}
//library edit RIGHTで使用
const workbookList = [
    {
        workbook_name: '青チャート1',
        workbook_id: 5,
        subject: '数学',
        subject_id: 1,
        count: 100,
        // structure: [
        //     { section: 1, count: 2 },
        //     { section: 2, count: 3 },
        //     { section: 3, count: 2 },
        // ],
    },
    {
        workbook_name: '大学への数学1',
        workbook_id: 4,
        subject: '数学',
        subject_id: 1,
        count: 50,
        // structure: [
        //     { section: 1, count: 3 },
        //     { section: 2, count: 3 },
        //     { section: 3, count: 2 },
        // ],
    },
    {
        workbook_name: '新演習',
        workbook_id: 3,
        subject: '化学',
        subject_id: 2,
        count: 10,
        // structure: [
        //     { section: 1, count: 1 },
        //     { section: 2, count: 3 },
        //     { section: 3, count: 2 },
        // ],
    },
    {
        workbook_name: 'セミナー',
        workbook_id: 2,
        subject: '化学',
        subject_id: 2,
        count: 30,
        // structure: [
        //     { section: 1, count: 2 },
        //     { section: 2, count: 3 },
        //     { section: 3, count: 2 },
        //     { section: 4, count: 5 },
        // ],
    },
]

//library LEFTで使用
const workbook_subject_relations = [
    {
        parent: '数学',
        children: [
            { id: 5, name: '青チャート1' },
            { id: 4, name: '大学への数学' },
        ],
    },
    {
        parent: '化学',
        children: [
            { id: 3, name: '新演習' },
            { id: 2, name: 'セミナー' },
        ],
    },
]
export { workbookInfo, workbookList, workbook_subject_relations }
