import express from 'express'

import {
    addAlbum,
    listAlbum,
    removeAlbum,
} from '../Controllers/AlbumController.js'

import upload from '../Multer.js/Multer.js'




const albumRouter = express.Router()


albumRouter.post('/add',upload.single('image'),addAlbum)
albumRouter.get('/list',listAlbum)
albumRouter.post('/remove',removeAlbum)


export default albumRouter