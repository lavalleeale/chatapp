import Footer from './Footer'
import { Card, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
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

const LoginForm = ({ setInfoWrapper }) => {
    const classes = useStyles()
    const [usernameText, setUsernameText] = useState('')
    const [roomText, setRoomText] = useState('')
    const [finished, setFinished] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!usernameText) {
            alert("Please enter username and password")
            return
        }
        setInfoWrapper({
            username: usernameText,
            room: roomText
        })
        setFinished(true)
    }
    return (
        <>
            {finished && <Redirect to="/" push />}
            <Card variant="outlined" className={classes.card}>
                <form className={classes.root} onSubmit={onSubmit}>
                    <TextField
                        className={classes.textField}
                        style={{ width: "60%" }}
                        value={usernameText}
                        onChange={(e) => setUsernameText(e.target.value)}
                        label="Username"
                        variant="outlined" />
                    <FormControl variant="outlined" style={{ width: "25%"}} >
                        <InputLabel>Room</InputLabel>
                        <Select
                            style={{
                                margin: "10px",
                            }}
                            value={roomText}
                            onChange={(e) => setRoomText(e.target.value)}
                        >
                            <MenuItem value="main">
                                <em>Lobby</em>
                            </MenuItem>
                            <MenuItem value={"test1"}>Breakout 1</MenuItem>
                            <MenuItem value={"test2"}>Breakout 2</MenuItem>
                        </Select>
                    </FormControl>
                    <Button style={{ float: "right" }} variant="outlined" type="submit">Submit</Button>
                </form>
            </Card>
            <Footer isLogin={true} />
        </>
    )
}

export default LoginForm
