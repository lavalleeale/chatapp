import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    card: {
        margin: "auto",
        "margin-top": "10px",
        "margin-bottom": "10px",
        maxWidth: 500,
        padding: "10px",
        minHeight: 50
    },
    center: {
        display: "inline",
        margin: "auto",
    }
})
const Header = ({ info }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <h1 className={classes.center} >
                Chat App
            </h1>
            {info.username &&
                <>
                    <h2 className={classes.center} style={{ float: "right" }}>
                        {`Room: ${info.room}`}
                    </h2>
                    <br/>
                    <h2 className={classes.center} style={{ float: "right" }}>
                        {`User: ${info.username}`}
                    </h2>
                </>
            }
        </Card>
    )
}


export default Header
