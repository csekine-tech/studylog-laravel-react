import BasicCard from '@/components/ui/BasicCard'
import RatingStars from '@/components/ui/RatingStars'
import { Typography } from '@mui/material'
import Grid from '@mui/material'

const Card = ({ date, rate, count, type }) => {
    const planTitle = '予定'
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <BasicCard>
                        {type === 'plan' ? planTitle : ''}
                        <div style={{ display: 'flex' }}>
                            <div>
                                <Typography variant="h4" component="div">
                                    {date}
                                </Typography>
                                <Typography variant="body1">
                                    {count}回目
                                </Typography>
                            </div>
                            <RatingStars rate={rate ? rate : 0} />
                        </div>
                    </BasicCard>
                </Grid>
            </Grid>
        </>
    )
}
export default Card
