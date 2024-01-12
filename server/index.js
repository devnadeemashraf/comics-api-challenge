import express from "express";
import cors from "cors";

import cache from "./cache.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/comic/:id", async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.json({
            message: "Something is missing",
            data: null,
        });
    } else {
        if (cache.has(id)) {
            return res.json({
                message: "Fetched from Cache",
                data: cache.get(id),
            });
        } else {
            const apiResp = await fetch(`https://xkcd.com/${id}/info.0.json`);
            const data = await apiResp.json();

            cache.set(id, data);

            return res.json({
                message: "Fetched Successfully",
                data,
            });
        }
    }
});

app.listen(3000, () => {
    console.log("Server running on localhost:3000");
});
