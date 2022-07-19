import Card from './Card'

const doneLists = [
    {
        date: '6/20',
        rate: 3,
    },
    {
        date: '6/2',
        rate: 1,
    },
    {
        date: '5/25',
        rate: 2,
    },
]
const planDate = '7/8'
let count = doneLists.length + 1
const planCard = <Card date={planDate} count={count} type='plan'/>
const doneCards = doneLists.map(doneList => {
    count = count - 1
    return <Card date={doneList.date} rate={doneList.rate} key={count} count={count} type='done'/>
})

const Content = () => {
    return (
        <>
            {planCard}
            {doneCards}
        </>
    )
}
export default Content
