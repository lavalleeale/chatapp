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

const LoginForm = ({ setInfoWrapper, username }) => {
    const classes = useStyles()
    const [usernameText, setUsernameText] = useState(username)
    const [roomText, setRoomText] = useState('Lobby')
    const [customRoomText, setCustomRoomText] = useState('')
    const [finished, setFinished] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!usernameText) {
            return alert("Please enter username")
        }
        if (roomText === "Custom") {
            if (!customRoomText) {
                return alert("Enter custom room name or select another room")
            }
            setInfoWrapper({
                username: usernameText,
                room: customRoomText
            })
        } else {
            setInfoWrapper({
                username: usernameText,
                room: roomText
            })
        }
        setFinished(true)
    }
    return (
        <>
            {finished && <Redirect to="/" push />}
            <Card variant="outlined" className={classes.card}>
                <form onSubmit={onSubmit}>
                    <TextField
                        className={classes.textField}
                        style={{ width: "60%" }}
                        value={usernameText}
                        onChange={(e) => setUsernameText(e.target.value)}
                        label="Username"
                        variant="outlined" />
                    <FormControl variant="outlined" style={{ width: "calc(40% - 10px)", margin: "10px 0 0 10px" }} >
                        <InputLabel>Room</InputLabel>
                        <Select
                            label="Room"
                            value={roomText}
                            onChange={(e) => setRoomText(e.target.value)}
                        >
                            <MenuItem value="Lobby">Lobby</MenuItem>
                            <MenuItem value={"Breakout 1"}>Breakout 1</MenuItem>
                            <MenuItem value={"Breakout 2"}>Breakout 2</MenuItem>
                            <MenuItem value={"Custom"}>Custom</MenuItem>
                        </Select>
                    </FormControl>
                    {roomText === "Custom" &&
                        <TextField
                            className={classes.textField}
                            style={{ width: "100%" }}
                            value= {customRoomText }
                            onChange={(e) => setCustomRoomText(e.target.value)}
                            label="Room Name"
                            variant="outlined" />
                    }
                    <Button style={{ float: "right" }} variant="outlined" type="submit">Submit</Button>
                </form>
            </Card>
            <Footer isLogin={true} />
        </>
    )
}

LoginForm.defaultProps = {
    username: ""
}

export default LoginForm
