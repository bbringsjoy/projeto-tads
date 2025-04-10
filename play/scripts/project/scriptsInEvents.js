

const scriptsInEvents = {

	async FolhaFase1_Event3_Act5(runtime, localVars)
	{
		//obter o valor da váriavel global vidas
		let vidas = runtime.globalVars.Vida;
		
		// reduzir uma vida
		vidas  --;
		
		// atualiza a váriavel global no construct
		runtime.globalVars.Vida = vidas;
		
		// ir para game over
		if(vidas <=0){
			console.log("Game Over");
			runtime.goToLayout("gameover")
		}
	},

	async FolhaFase1_Event7_Act3(runtime, localVars)
	{
		//obter o valor da váriavel global vidas
		let vidas = runtime.globalVars.Vida;
		
		// reduzir uma vida
		vidas  --;
		
		// atualiza a váriavel global no construct
		runtime.globalVars.Vida = vidas;
		
		// ir para game over
		if(vidas <=0){
			console.log("Game Over");
			runtime.goToLayout("gameover")
		}
		
	},

	async FolhaFinal_Event5_Act5(runtime, localVars)
	{
		//obter o valor da váriavel global vidas
		let vidas = runtime.globalVars.Vida;
		
		// reduzir uma vida
		vidas  --;
		
		// atualiza a váriavel global no construct
		runtime.globalVars.Vida = vidas;
		
		// ir para game over
		if(vidas <=0){
			console.log("Game Over");
			runtime.goToLayout("gameover")
		}
	},

	async FolhaFinal_Event13_Act3(runtime, localVars)
	{
		//obter o valor da váriavel global vidas
		let vidas = runtime.globalVars.Vida;
		
		// reduzir uma vida
		vidas  --;
		
		// atualiza a váriavel global no construct
		runtime.globalVars.Vida = vidas;
		
		// ir para game over
		if(vidas <=0){
			console.log("Game Over");
			runtime.goToLayout("gameover")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
