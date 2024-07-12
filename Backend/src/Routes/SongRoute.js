import express from 'express'
import {Addsongs,ListSongs} from '../Controllers/Songcontroller.js'


const RouteSongs = express.Router()


RouteSongs.post('/addsong',Addsongs)
RouteSongs.get('/listsong',ListSongs)

export default RouteSongs

