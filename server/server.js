const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-3254983059699963-092814-5b71d8d80992d084c2d99e82cdfcedda-359629371",
});



app.use(express.json());

app.use(cors());
app.get("/", function (req, res) {
	res.send("server is working");
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://127.0.0.1:5173/donate/thanks",
			"failure": "http://localhost:8080/feedback",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});


app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});