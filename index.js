import express from "express";
import { marked } from "marked";
import expressLayouts from "express-ejs-layouts";
// import { engine } from "ejs";

const app = express();

// app.engine(
// 	"ejs",
// 	engine({
// 		helpers: {
// 			markdown: (md) => marked(md)
// 		}
// 	})
// );
app.set("view engine", "ejs");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

app.use(expressLayouts);
//app.set("views", "./views");

app.get("/", async (req, res) => {
	//const movies = await loadMovies();
	res.render("pages/home", {
		title: "Tomtens Biograf!"
	}); //, { movies }
});

const VIEWS = [
	{
		path: "/about",
		file: "pages/about",
		options: { title: "Tomtens Biograf - om oss!" }
	},
	{
		path: "/open",
		file: "pages/open",
		options: { title: "Tomtens Biograf - Öppettider & Kontakt" }
	},
	{
		path: "/barbistro",
		file: "pages/barAndBistro",
		options: { title: "Tomtens Biograf" }
	},
	{
		path: "/coming",
		file: "pages/comingPremieres",
		options: { title: "Tomtens Biograf" }
	},
	{
		path: "/giftcert",
		file: "pages/giftcertificate",
		options: { title: "Tomtens Biograf" }
	},
	{
		path: "/newsletter",
		file: "pages/newsletter",
		options: { title: "Tomtens Biograf" }
	},
	{
		path: "/placeholder",
		file: "pages/placeholder",
		options: { title: "Tomtens Biograf" }
	},
	{
		path: "/ticketInfo",
		file: "pages/ticketInfo",
		options: { title: "Tomtens Biograf" }
	},
	{
		path: "/tickets",
		file: "pages/tickets",
		options: { title: "Tomtens Biograf" }
	}
];

VIEWS.forEach((view) => {
	app.get(view.path, async (req, res) => {
		res.render(view.file, view.options);
	});
});

app.get("/movie/:movieId", async (req, res) => {
	const movie = await loadMovie(req.params.movieId);
	if (movie) {
		res.render("movie", { movie });
	} else {
		res.status(404).render("404");
	}
});

/* 
/open
/ticketInfo
/newsletter
/giftcertificate
*/
// app.get("/movies/:movieId", async (req, res) => {
// 	//const movie = await loadMovie(req.params.movieId);
// 	if (movie) {
// 		res.render("pages/movie"); //, { movie }
// 	} else {
// 		res.status(404).render("404");
// 	}
// });

app.use("/", express.static("./static"));

app.listen(3050);
