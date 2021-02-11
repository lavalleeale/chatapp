import { Card, TextField, Button } from '@material-ui/core';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        margin: "auto",
        "margin-top": "10px",
        "margin-bottom": "10px",
        maxWidth: 500,
        padding: "10px",
    }
})
const SendMessage = ({ sendMessageFunc }) => {
    const classes = useStyles()

    const [messageText, setMessageText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        if (!messageText) {
            return
        }
        sendMessageFunc(messageText)
        setMessageText("")
    }
    return (
        <Card variant="outlined" className={classes.card}>
            <form className={classes.root} onSubmit={onSubmit}>
                <TextField
                    style={{ width: "100%", marginBottom: "10px" }}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    label="Message"
                    variant="outlined" />
                <Button style={{ float: "right" }} variant="outlined" type="submit">Send</Button>
            </form>
        </Card>
    )
}
export default SendMessage
