const Activities = require('../models/actividadesModelo')


const ActividadesControladores = {
    consultarActividades: async (require, response) => {
        var actividadLocal
        var error = null

        try {
            actividadLocal = await Activities.find()/* .populate('ItineraryId') */
        } catch (err) {
            error = err
            console.log(error);
        }
        response.json({

            respuesta: error ? 'ERROR' : { actividadLocal },
            success: error ? false : true,
            error: error
        })

    },
    agregarActividad: async (required, response) => {

        const { activityTitle, activity,
            nameCity, nameItinerary, imageCity, ItineraryId } = required.body
        new Activities({
            activityTitle,
            activity, nameCity, nameItinerary, imageCity, ItineraryId
        }).save()
            .then((respuesta) => response.json({ respuesta }))
            .catch(error => response.json({ error }))
    },

    borrarActividad: async (required, response) => {
        const id = required.params.id

        var actividadEliminada

        actividadEliminada = await Activities.findOneAndDelete({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },

    modificarActividad: async (req, res) => {
        const id = req.params.id
        const actividadesLocal = req.body

        var actividadesdb
        actividadesdb = await Activities.findOneAndUpdate({ _id: id }, actividadesLocal, { new: true })/* .populate('622748244d1a12d866f83838', '622748244d1a12d866f83837') */
            .then((response) => res.json({ paso: "listo", respuesta: response }))
            .catch(error => res.json({ error }))
    },

    consultarActividadPorID: async (require, response) => {
        const id = require.params.id
        var actividadesLocal



        actividadesLocal = await Activities.findOne({ _id: id })
            .then((res) => response.json({ paso: "listo", respuesta: res }))
            .catch(error => response.json({ error }))
    },
}




module.exports = ActividadesControladores