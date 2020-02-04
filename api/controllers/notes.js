var noteModel = require('../models/notes.js');

/**
 * controllers/notes.js
 *
 * @description :: Server-side logic for managing notes.
 */
module.exports = {

    /**
     * noteController.list()
     */
    list: function (req, res) {
        noteModel.find(function (err, notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting note.',
                    error: err
                });
            }
            return res.json(notes);
        });
    },

    /**
     * noteController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        noteModel.findOne({_id: id}, function (err, note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting note.',
                    error: err
                });
            }
            if (!note) {
                return res.status(404).json({
                    message: 'No such note'
                });
            }
            return res.json(note);
        });
    },

    /**
     * noteController.create()
     */
    create: function (req, res) {
        var note = new noteModel({
			title : req.body.title,
			body : req.body.body

        });

        note.save(function (err, note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating note',
                    error: err
                });
            }
            return res.status(201).json(note);
        });
    },

    /**
     * noteController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        noteModel.findOne({_id: id}, function (err, note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting note',
                    error: err
                });
            }
            if (!note) {
                return res.status(404).json({
                    message: 'No such note'
                });
            }

            note.title = req.body.title ? req.body.title : note.title;
			note.body = req.body.body ? req.body.body : note.body;

            note.save(function (err, note) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating note.',
                        error: err
                    });
                }

                return res.json(note);
            });
        });
    },

    /**
     * noteController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        noteModel.findByIdAndRemove(id, function (err, note) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the note.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
