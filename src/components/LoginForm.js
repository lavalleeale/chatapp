import Footer from './Footer'
import { Card, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles({
    card: {
        margin: "auto",
        "margin-top": "10px",
        "margin-bottom": "10px",
        maxWidth: 500,
        padding: "30px",
    },
    textField: {
        "margin-top": "10px",
        "margin-bottom": "10px",
    }
})

const LoginForm = ({ setUsernameWrapper }) => {
    const classes = useStyles()
    const [usernameText, setUsernameText] = useState('')
    const [finished, setFinished] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!usernameText) {
            alert("Please enter username and password")
            return
        }
        setUsernameWrapper(usernameText)
        setFinished(true)
    }
    return (
        <>
        {finished && <Redirect to="/" push />}
            <Card variant="outlined" className={classes.card}>
                <form className={classes.root} onSubmit={onSubmit}>
                    <TextField
                        className={classes.textField}
                        style={{ width: "95%" }}
                        value={usernameText}
                        onChange={(e) => setUsernameText(e.target.value)}
                        label="Username"
                        variant="outlined" />
                    <Button style={{float: "right"}} variant="outlined" type="submit">Submit</Button>
                </form>
            </Card>
            <Footer isLogin={true} />
        </>
    )
}

export default LoginForm
