const db = require("../config/database");

// Retrospectives
exports.findBySprintId = (sprintId) => {
    return db.query("SELECT * FROM retrospectives WHERE sprint_id = ?", [sprintId]);
};

exports.createRetro = (retro) => {
    const { id, sprint_id, date, status, facilitator_id } = retro;
    return db.query(
        "INSERT INTO retrospectives (id, sprint_id, date, status, facilitator_id) VALUES (?, ?, ?, ?, ?)",
        [id, sprint_id, date, status || 'DRAFT', facilitator_id]
    );
};

exports.updateRetroStatus = (id, status) => {
    return db.query("UPDATE retrospectives SET status = ? WHERE id = ?", [status, id]);
};

// Retro Items
exports.findItemsByRetroId = (retroId) => {
    return db.query("SELECT * FROM retro_items WHERE retrospective_id = ?", [retroId]);
};

exports.createItem = (item) => {
    const { id, retrospective_id, category, text, author_id } = item;
    return db.query(
        "INSERT INTO retro_items (id, retrospective_id, category, text, votes, author_id) VALUES (?, ?, ?, ?, 0, ?)",
        [id, retrospective_id, category || 'IMPROVE', text, author_id]
    );
};

exports.voteItem = (id) => {
    return db.query("UPDATE retro_items SET votes = votes + 1 WHERE id = ?", [id]);
};

exports.deleteItem = (id) => {
    return db.query("DELETE FROM retro_items WHERE id = ?", [id]);
};
