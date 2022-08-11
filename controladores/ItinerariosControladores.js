const Itinerarios = require('../models/Itinerarios')


const ItinerariosControladores = {
/*     consultarItinerarios: async (req, res) => {
        try {
            let itineraries = await Itinerarios.find().populate('ActivitiesId')
            res.json({ success: true, response: itineraries })
        } catch (error) {
            res.json({ success: false, response: error.message })
        }
    },  */   consultarItinerarios: async (require, response) => {
        var itinerarioLocal
        var error = null

        try {
            itinerarioLocal = await Itinerarios.find({}).populate('ActivitiesId').populate("comments.userID", { Name: 1 }) //si trae
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { itinerarioLocal },
            success: error ? false : true,
            error: error
        })

    },
    agregarItinerario: async (required, response) => {

        const { itinerary, nameCity, imageCity, duration, price, places, city, hashtags, user, photo, likes, ActivitiesId, comments } = required.body
        new Itinerarios({
            itinerary, nameCity, imageCity, duration, price, places, city, hashtags, user, photo, likes, ActivitiesId, comments
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },

    borrarItinerario: async (required, response) => {
        const id = required.params.id

        var itinerarioEliminada

        itinerarioEliminada = await Itinerarios.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },

    modificarItinerario: async (req, res) => {
        const id = req.params.id
        const itinerario = req.body

        var itinerariob
        itinerariob = await Itinerarios.findOneAndUpdate({ _id: id }, itinerario, { new: true })
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },




    /*     consultarItinerariosPorCiudad: async (require, response) => {
            const id = require.params.id
            var itinerarios
    
    
    
            itinerarios = await Itinerarios.find({ _id: id }).populate('ActivitiesId')
                .then((res) => response.json({ paso: "listo", respuesta: res }))
                .catch(error => response.json({ error }))
        }, */
    /*     consultarItinerariosPorCiudad: async (require, response) => {
            var itinerarioLocal
            const id = require.params.id
            var error = null
    
            try {
                itinerarioLocal = await Itinerarios.find({ _id: id }).populate("comments.userID", { Name: 1 }) // no trae
            } catch (err) {
                error = err
                console.log(error);
            }
            response.json({
    
                respuesta: error ? 'ERROR' : { itinerarioLocal },
                success: error ? false : true,
                error: error
            })
        }, */

    LikeDislike: async (req, res) => {
        const id = req.params.id;
        const user = req.user.id;
        let itinerarioLocal
        /*         console.log(id);
                console.log(user);
         */
        try {
            itinerarioLocal = await Itinerarios.findOne({ _id: id })

            if (itinerarioLocal.likes.includes(user)) {

                Itinerarios.findOneAndUpdate({ _id: id }, { $pull: { likes: user } }, { new: true })//quita, saca
                    .then((response) => res.json({ success: true, response: response.likes }))
                    .catch((error) => console.log(error))
            } else {
                Itinerarios.findOneAndUpdate({ _id: id }, { $push: { likes: user } }, { new: true })
                    .then((response) => res.json({ success: true, response: response.likes }))

                    .catch(error => console.log(error))

            }


        } catch (err) {
            error = err
            res.json({
                success: false,
                response: error
            })


        }
    },


    consultarItinerariosPorID: async (require, response) => {
        const id = require.params.id
        var itinerarios
        /*        console.log(id); */


        itinerarios = await Itinerarios.find({ _id: id }).populate("comments.userID", "Name").populate("ActivitiesId")
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },

    consultarItinerariosPorCiudad: async (require, response) => {
        const city = require.params.city
        var itinerarios
        /*         console.log(city); */



        itinerarios = await Itinerarios.find({ city: city }).populate("comments.userID", "Name").populate("ActivitiesId")
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    }
}




module.exports = ItinerariosControladores