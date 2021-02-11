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
const Header = ({ title, username }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <h1 className={classes.center} >
                {title}
            </h1>
            {username &&
                <h2 className={classes.center} style={{ float: "right" }}>
                    {username}
                </h2>
            }
        </Card>
    )
}

Header.defaultProps = {
    title: "Chat App"
}

export default Header
