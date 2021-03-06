const config = {
	title: "Salganhada",
	url: "https://mangito.github.io/Salganhada/",
	// Game
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: "#0000ff",
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
	transparent: false,
	antialias: true,
	physics: {
		default: "arcade",
	},
	scene: [Game],
}

const game = new Phaser.Game(config);
