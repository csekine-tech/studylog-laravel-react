import BasicCard from '@/components/ui/BasicCard'
import RatingStars from '@/components/ui/RatingStars'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'

const Card = ({ date, rate, count, type }) => {
    const planTitle = type === 'plan' ? '予定' : '解いた日'
    return (
        <>
            <Grid item xs={12}>
                <BasicCard
                    elevation={3}
                    mode={type === 'plan' ? 'available' : 'unavailable'}>
                    {planTitle}
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Typography variant="h6" component="div">
                                {date}
                            </Typography>
                            <Typography variant="body1">{count}回目</Typography>
                        </div>
                        <RatingStars
                            rate={rate ? rate : 0}
                            edit={type === 'plan' ? true : false}
                            color2={type === 'plan' ? '#ffd700' : '#999999'}
                            color1={type === 'plan' ? 'gray' : '#dddddd'}
                        />
                    </div>
                </BasicCard>
            </Grid>
        </>
    )
}
export default Card
